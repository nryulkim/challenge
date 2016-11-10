json.array! @locations do |location|
  json.extract! location, :name, :lat, :lng, :id
end
