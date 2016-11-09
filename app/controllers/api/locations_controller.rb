class Api::LocationsController < ApplicationController
  def index
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

    @urls = { yelp_url: yelp_url, f_url: f_url }
  end

  private
  def clean_text(text)
    URI.escape(text.gsub(", Inc.", ""))
  end
end
