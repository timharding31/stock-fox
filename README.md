# StockFox

StockFox is my version of the popular securities trading site, Robinhood. It was built initially in a two-week period in August, 2020, though I'll be making improvements steadily to the site's functionality & features. StockFox uses a Ruby on Rails backend with a Redux state-managed React frontend. Users can sign up to research the U.S. stock market, keep tabs on interesting stocks via their "watchlist", and execute trades with $10,000 of initial buying power. Stock information is available via searching, or by exploring top categories from the users' homepage.

Here's a link to the site if you'd like to explore for yourself: [StockFox](https://stock-fox.herokuapp.com/#/)

## Features
* BCrypt-secure frontend and backend user authentication, which protects from CSRF attacks and allows exisitng users to sign in using their email or username. A demo account is provided for those who wish to explore the site without providing any credentials.
* Users can access real-time stock price information, which is requested from a public API upon sign-in for assets in the user's watchlist or portfolio. Company profiles and historical prices for day-, week-, month- & year-long ranges are requested when the user accesses a specific stock's page, where they are presented in a clean interface with exploratory charts and recent company news.
* Over 6,000 NASDAQ- and NYSE-listed securities are available to watch, own, or research. The user's homepage displays high-value stocks in popular categories (Technology, Financial, etc.), or stocks can be searched by their ticker symbol or the company's name, with results surfaced in real-time.
* Any stock can be added to the user's watchlist from the stock's profile page, and the users's right sidebar holds a permanent reference to each owned/watched stock, including its latest price and a chart of its one-day price history.
* A user accessing the stock page of an asset in their portfolio is offered the ability to sell off some or all of their holdings at the latest price. Stocks can be purchased using the user's Buying Power from the same order form. Selling stocks increases the user's buying power, but it can also be updated via a module on the homepage (it's not real money, though!).
* Site-wide dark mode can be enabled/disabled by toggling the 'sun' & 'moon' icons in the header.

### Asset Detail Page
A stock's detail page contains a large chart of its historical prices for a user-selected range, a company profile with details about the company's products/services, and a news feed to research the latest market sentiment about the stock.

[Light Mode](https://i.imgur.com/nLMj1Iz.png)

[Dark Mode](https://i.imgur.com/JX01iJR.png)

#### Fetching stock data
Prices for the requested stock symbol & range are stored in StockFox's redux state and are retrieved from the financialmodelingprep API. One-day historical prices are fetched immediately upon sign-in for any stocks in the user's watchlist or portfolio, and additional stock symbols and/or ranges are fetched upon user access of the stock's profile page. Historical price fetches always update the application's PostgreSQL with each requested stock's latest price, so price information displayed before future API calls remain up-to-date.

Each stock's company profile is also requested via API, which is displayed below the stock's price chart and updates the Postgres database with further details about the stock (name, sector, industry, etc.). News articles pertaining to a stock are fetched from the Bing News API (query by symbol and by company name). The latest four most popular articles are displayed to the user, though more can be requested by hitting the "Show More" button.

#### Updating the chart
By default, a stock show page shows a chart of its one-day prices, rendered with Recharts' ResponsiveContainer & LineChart. Users can select broader ranges by hitting the buttons below the chart. The selection passes down a range to the chart component, which keys into the `prices` slice of the Redux state to render the appropriate data. Mousing over the chart updates the price displayed based on the timeframe, which is visible in the tooltip above the chart selection area. Any chart rendering price data that's increased in the given range is displayed in green, while losses are displayed in red.

* Price Chart state:
```javascript
handleMouseMove({ isTooltipActive, activePayload }) {
  if (isTooltipActive) {
    this.setState({ price: formatPrice(activePayload[0].payload.price) });
  }
}
handleMouseLeave() {
  this.setState({ price: formatPrice(this.props.stock.price)});
}
```
* Custom tooltip:
```javascript
({ active, payload, range }) => {
  if (!active) return null;
  const payloadDate = moment(payload[0].payload.date);
  let ttDate;
  if (range === '1D') {
    ttDate = payloadDate.format('LT');
  } else if (['1Y', '5Y'].includes(range)) {
    ttDate = payloadDate.format('MMM DD, YYYY');
  } else {
    ttDate = payloadDate.format('LT, MMM DD');
  }
  return (
    <div className="price-chart-tooltip">
      <p className="tooltip-time">{ttDate}</p>
    </div>
  );
};```

* Chart Render
```javascript
<ResponsiveContainer height="100%" width="100%" >
  <LineChart
    onMouseMove={this.handleMouseMove}
    onMouseLeave={this.handleMouseLeave}
    data={prices}
    margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
  >
  <XAxis dataKey="date" axisLine={false} tick={false}/>
  <YAxis dataKey="price" domain={yDomain} axisLine={false} tick={false}/>
  <Tooltip
    content={<PriceChartTooltip range={this.props.range} />}
    position={{ y: -30 }}
    offset={offset}
    cursor={true} />
    <Line type="monotone" dataKey="price" strokeWidth="3" stroke={color} dot={false} isAnimationActive={true}/>
  </LineChart>
</ResponsiveContainer>
```

### Sidebar Modules
The sidebar displays a permanent reference to the user's portfolio and watchlist, with miniature charts (rendered with react-sparklines) showing each stock's one-day price movement. Clicking a row from either module redirects the user to that stock's detail page, where the user can purchase more of that asset, sell off their holdings, or add/remove the stock from their watchlist.

[Sidebar Light](https://i.imgur.com/cjo0iZ2.png)

[Sidebar Dark](https://i.imgur.com/s35pA2l.png)

When a user signs in, their watchlist and portfolio are fetched from the PostgreSQL database, which also triggers an API call to grab one-day prices for each stock symbol in either list. This enables the rendering of sparkline components in the sidebar, and also ensures that price & company profile data are available immediately if the user chooses to visit a stock's page from the sidebar link.

An order form and add/remove from watchlist control are presented above the sidebar charts when visiting a stock's page, but the sidebar charts are always available from every page on StockFox to ensure immediate access to the assets users care about most.

* Sparkline Component
```javascript
// MiniPriceChartContainer
({ symbol, stock, amt, prices }) => {
  if (prices[symbol] && stock) {
    let data = prices[symbol]
    let price = formatPrice(stock.price);
    let color = (prices[symbol][0].price > prices[symbol][prices[symbol].length - 1].price) ? '#ED5D2A' : '#5bc43b';
    return (<li className="mini-stock-container" key={`mini-${symbol}-${amt}`}>
      <Link to={`/stocks/${symbol}`}>
        <div className="mini-symbol"><p>{symbol}</p><p className="share-amt">{(amt) ? `${amt} shares` : ''}</p></div>
        <MiniPriceChart data={data} color={color} />
        <div className="mini-price"><p>{price}</p></div>
      </Link>
    </li>
    )
  } else {
    return (<Loading loading={Boolean(!prices[symbol])} />)
  }
}
// MiniPriceChart
({ data, color }) => {
  data = data.map(obj => obj.price);
  return (
    <div id="mini-chart">
        <Sparklines
          min={Math.min.apply(Math, data)}
          max={Math.max.apply(Math, data)}
          data={data}
        >
        <SparklinesLine style={{ strokeWidth: 3, stroke: color, fill: "none" }} />
          <SparklinesReferenceLine
            type="median"
            style={{ stroke: 'gainsboro', strokeOpacity: .75, strokeDasharray: '2, 2' }} />
        </Sparklines>
      </div>)
```

### Technologies Leveraged
* Backend (user auth, user actions, stock summary information): Ruby on Rails
* Database: PostgreSQL
* Public APIs: FinancialModelingPrep, Bing News
* State Management: Redux
* Frontend: React
* Charts: Recharts, react-sparklines
