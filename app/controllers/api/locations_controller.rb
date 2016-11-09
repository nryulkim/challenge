class Api::LocationsController < ApplicationController
  def index
    text = URI.escape(params["text"])
    lat = params["latitude"].to_f
    lng = params["longitude"].to_f

    response = yelp_token.get("https://api.yelp.com/v3/businesses/search?term=#{text}&latitude=#{lat}&longitude=#{lng}")
    yelp_location = JSON.parse(response.body)["businesses"][0]
    yelp_url = yelp_location["url"].split("?")[0]

    @urls = { yelp_url: yelp_url }
  end
end
