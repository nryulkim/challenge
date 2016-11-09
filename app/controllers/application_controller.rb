class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    session[:session_token] = user.reset_token
  end

  def logout
    current_user.reset_token
    session[:session_token] = nil;
  end

  def yelp_token
    @y_token ||= yelp_client.auth_code.get_token(yelp_code, :redirect_uri => "http://localhost:3000")
  end

  def four_square
    @four_square ||= Foursquare2::Client.new(
      client_id: ENV["four_square_client_id"],
      client_secret: ENV["four_square_secret"],
      api_version: 20130815
    )
  end

  private

  def yelp_client
    @yelp ||= OAuth2::Client.new(
      ENV["yelp_client_id"],
      ENV["yelp_secret"],
      token_url: "oauth2/token",
      site: "https://api.yelp.com",
      access_token_method: :post,
      grant_type: :client_credentials
    )
  end

  def yelp_code
    @y_code ||=  yelp_client.auth_code.authorize_url(:redirect_uri => "http://localhost:3000")
  end
end
