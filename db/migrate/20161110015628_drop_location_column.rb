class DropLocationColumn < ActiveRecord::Migration[5.0]
  def change
    remove_column :locations, :location
    add_column :locations, :lat, :float
    add_column :locations, :lng, :float
    add_index :locations, :lat
    add_index :locations, :lng
    add_index :locations, :name
  end
end
