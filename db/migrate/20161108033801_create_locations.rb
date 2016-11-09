class CreateLocations < ActiveRecord::Migration[5.0]
  def change
    create_table :locations do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.string :yelp
      t.string :tripadvisor
      t.string :foursquare

      t.timestamps
    end
  end
end
