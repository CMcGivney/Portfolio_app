class DropNotesTable < ActiveRecord::Migration[5.2]
  def up
    drop_table :notes
  end

  def down
    fail ActiveRecord::IrreversibleMigration
  end
end
