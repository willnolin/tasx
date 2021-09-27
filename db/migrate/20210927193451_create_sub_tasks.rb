class CreateSubTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :sub_tasks do |t|
      t.string :name
      t.decimal :estimated_time
      t.boolean :complete
      t.references :task, null: false, foreign_key: true

      t.timestamps
    end
  end
end
