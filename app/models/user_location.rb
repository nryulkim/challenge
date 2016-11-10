# == Schema Information
#
# Table name: user_locations
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  location_id :integer          not null
#

class UserLocation < ApplicationRecord
  belongs_to :user
  belongs_to :location
end
