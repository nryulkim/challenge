class Api::SuggestionsController < ApplicationController
  def index
    text = params["text"]
    lat = params["latitude"].to_f
    lng = params["longitude"].to_f
    response = yelp_token.get("https://api.yelp.com/v3/autocomplete?text=#{text}&latitude=#{lat}&longitude=#{lng}")

    @suggestions = JSON.parse(response.body)["businesses"]
  end
end
