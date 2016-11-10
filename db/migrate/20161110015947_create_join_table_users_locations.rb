class CreateJoinTableUsersLocations < ActiveRecord::Migration[5.0]
  def change
    create_table :user_locations do |t|
      t.integer :user_id, null: false
      t.integer :location_id, null: false
    end
  end
end
