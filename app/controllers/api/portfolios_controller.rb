class Api::PortfoliosController < ApplicationController

  def index
    @portfolio = current_user.portfolio
    if @portfolio.empty?
      render json: ['Add some stocks to your portfolio before viewing this content!'], status: 404
    end
  end

  def create
    stock = Stock.find_by(symbol: params[:stock_symbol])
    @portfolio = current_user.buy_stock(stock, params[:order])
    if @portfolio
      render :index
    else
      render json: ["You do not have enough buying power to complete this order"], status: 401
    end
  end
  
  def destroy
    stock = Stock.find_by(symbol: params[:stock_symbol])
    @portfolio = current_user.sell_stock(stock, params[:order])
    if @portfolio
      render :index
    else
      render json: ["You must own more shares of #{stock.symbol} to complete this order"], status: 401
    end
  end
end
