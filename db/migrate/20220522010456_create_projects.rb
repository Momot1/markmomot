class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.integer :user_id
      t.string :name
      t.string :project_url
      t.string :github_url
      t.timestamps
    end
  end
end
