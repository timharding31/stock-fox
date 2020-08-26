class Api::WatchlistsController < ApplicationController

  before_action :require_logged_in

  def index
    @watchlist = current_user.watchlist
    if @watchlist.empty? || !@watchlist
      render json: ['Add some stocks to your watchlist before viewing this content!'], status: 404
    end
  end

  def create
    stock = Stock.find_by(symbol: params[:stock_symbol])
    @watchlist = current_user.add_stock_to_watchlist(stock)
    if @watchlist && !@watchlist.emtpy?
      render :index
    else
      render json: ["#{stock.symbol} is already in your watchlist"], status: 401
    end
  end

  def destroy
    stock = Stock.find_by(symbol: params[:stock_symbol])
    @watchlist = current_user.remove_stock_from_watchlist(stock)
    if @watchlist && !@watchlist.emtpy?
      render :index
    else
      render json: ["#{stock.symbol} isn't in your watchlist"], status: 401
    end
  end

end
