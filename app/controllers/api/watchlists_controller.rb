class Api::WatchlistsController < ApplicationController

  # before_action :require_logged_in

  def index
    @watchlist = @current_user.watchlist
  end

end
