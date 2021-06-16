class RemoveA4FromQuestions < ActiveRecord::Migration[6.1]
  def change
    remove_column :questions, :a4, :string
  end
end
