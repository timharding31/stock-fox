import { loginUser, resetSessionErrors, loginDemoUser } from '../../actions/session_actions';
import { connect } from 'react-redux';
import LoginForm from './login_form';

const mapStateToProps = ({ ui: { errors: { login } } }) => ({
  user: { username: '', password: '' },
  formType: 'Log In',
  errors: login,
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(loginUser(user)),
  resetSessionErrors: () => dispatch(resetSessionErrors()),
  loginDemoUser: () => dispatch(loginDemoUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);