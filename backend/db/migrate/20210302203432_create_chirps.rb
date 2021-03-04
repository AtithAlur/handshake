class CreateChirps < ActiveRecord::Migration[6.1]
  def change
    create_table :chirps do |t|
      t.column :text, 'VARCHAR(140)'

      t.timestamps
    end
  end
end
