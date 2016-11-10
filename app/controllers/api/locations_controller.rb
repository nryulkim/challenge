class Api::LocationsController < ApplicationController
  def index

  end

  def create
    @loc = Location.create(location_params)

    l_id = @loc["id"]
    u_id = params["user"]["id"]

    conn = UserLocation.find_by(location_id: l_id, user_id: u_id)
    unless conn
      UserLocation.create(location_id: l_id, user_id: u_id)
    end
  end

  def update
    @loc = Location.find(params["id"])
    if @loc
      @loc.update(location_params)

      l_id = params["id"]
      u_id = params["user"]["id"]

      conn = UserLocation.find_by(location_id: l_id, user_id: u_id)
      unless conn
        UserLocation.create(location_id: l_id, user_id: u_id)
      end
    end
  end

  def show
    @loc = Location.fuzzy_find(params)

    unless @loc
      @data = getNewInfo(params)
    else
      @data = {
        yelp_url: @loc.yelp,
        f_url: @loc.foursquare,
        lat: @loc.lat,
        lng: @loc.lng,
        name: @loc.name,
        new: false,
        id: @loc.id
      }
    end
  end

  private
  def clean_text(text)
    URI.escape(text.gsub(", Inc.", ""))
  end

  def location_params
    params.require(:info).permit(:name, :lat, :lng, :yelp, :foursquare, :tripadvisor)
  end

  def getNewInfo(params)
    text = clean_text(params["text"])
    lat = params["latitude"].to_f
    lng = params["longitude"].to_f

    y_res = yelp_token.get("https://api.yelp.com/v3/businesses/search?term=#{text}&latitude=#{lat}&longitude=#{lng}&limit=1")
    yelp_location = JSON.parse(y_res.body)["businesses"][0]
    yelp_url = yelp_location["url"].split("?")[0]

    lat = yelp_location["coordinates"]["latitude"] || lat
    lng = yelp_location["coordinates"]["longitude"] || lat

    f_res = four_square.search_venues({ ll: "#{lat},#{lng}", query: text, limit: 1 })

    if(f_res["venues"][0])
      f_url = four_square.venue(f_res["venues"][0]["id"])["canonicalUrl"]
    else
      f_url = ""
    end

    { yelp_url: yelp_url, f_url: f_url, lat: lat, lng: lng, name: params["text"], new: true }
  end
end
