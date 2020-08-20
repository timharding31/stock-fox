class Watch < ApplicationRecord

  validates :watchable_id, uniqueness: { scope: [:watchable_type, :user_id] }

  belongs_to :watchable,
    polymorphic: true
  
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

end
