# == Schema Information
#
# Table name: locations
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  yelp        :string
#  tripadvisor :string
#  foursquare  :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  lat         :float
#  lng         :float
#

class Location < ApplicationRecord
  has_many :user_locations
  has_many :users,
    through: :user_locations

  def self.fuzzy_find(params)
    loc = Location.find_by(name: params["text"])
    if loc
      lat_dif = loc.lat - params["latitude"].to_f
      lng_dif = loc.lng - params["longitude"].to_f
      return loc if lat_dif < 0.2 && lng_dif < 0.2
    end
    nil
  end
end
