class Watch < ApplicationRecord

  belongs_to :watchable,
    polymorphic: true
  
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

end
