class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def add_asset_to_watchlist(user, asset)
    Watch.create!(user_id: user.id,
      watchable_type: asset.class.name,
      watchable_id: asset.id
    )
  end
  
end
