class AddUsernameToNotes < ActiveRecord::Migration[5.2]
  def change
    add_column :notes, :username, :string
  end
end
