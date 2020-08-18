import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logoutUser } from '../../actions/session_actions';

const mapStateToProps = ({ entities: { users }, session }) => ({
  loggedIn: Boolean(session.id),
  currentUser: users[session.id],
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
  fetch
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);