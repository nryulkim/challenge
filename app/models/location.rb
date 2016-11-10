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
end
