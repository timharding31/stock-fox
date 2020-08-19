class Api::WatchlistsController < ApplicationController

  before_action :require_logged_in

  def index
    @watchlist = current_user.watchlist
    if @watchlist.empty?
      render json: ['Add some assets to your watchlist before viewing this content!'], status: 404
    end
  end

end
