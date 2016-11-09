class Api::SuggestionsController < ApplicationController
  def index
    text = params["text"]
    lat = params["latitude"]
    lng = params["longitude"]

    debugger
    @suggestions = ["Something"]
  end
end
