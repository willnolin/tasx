class Task < ApplicationRecord
  belongs_to :project
  has_many :sub_tasks
end
