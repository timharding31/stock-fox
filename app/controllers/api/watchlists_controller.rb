class Api::WatchlistsController < ApplicationController

  before_action :require_logged_in

  def index
    @watchlist = current_user.watchlist
    if @watchlist.empty?
      render json: ['Add some assets to your watchlist before viewing this content!'], status: 404
    end
  end

  def create
    asset = Stock.find_by(symbol: params[:stock_symbol]) || Crypto.find_by(symbol: params[:crypto_symbol])
    begin
      @watchlist = current_user.add_asset_to_watchlist(asset)
      render :index
    rescue
      render json: ["#{asset.symbol} is already in your watchlist"], status: 401
    end
  end

  def destroy
    asset = Stock.find_by(symbol: params[:stock_symbol]) || Crypto.find_by(symbol: params[:crypto_symbol])
    begin
      @watchlist = current_user.remove_asset_from_watchlist(asset)
      render :index
    rescue
      render json: ["#{asset.symbol} isn't in your watchlist"], status: 401
    end
  end

end
