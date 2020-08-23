import { connect } from 'react-redux'
import SearchBar from './search_bar';
import { fetchStockSearchResults } from '../../actions/search_actions';
import { fetchSingleStock } from '../../actions/asset_actions';

const mapStateToProps = ({ entities: { search }, ui: { loading } }, { match }) => ({
  search,
  loading: loading.searchResults,
  match
});

const mapDispatchToProps = dispatch => ({
  fetchStockSearchResults: search => dispatch(fetchStockSearchResults(search)),
  fetchSingleStock: symbol => dispatch(fetchSingleStock(symbol)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);