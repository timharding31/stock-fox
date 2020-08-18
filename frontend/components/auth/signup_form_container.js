import { signupUser, resetSessionErrors} from '../../actions/session_actions';
import { connect } from 'react-redux';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors: { login } }) => ({
  user: { email: '', username: '', password: '', firstName: '', lastName: '', confirmedPassword: ''},
  formType: 'Sign Up',
  errors: login,
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(signupUser(user)),
  resetSessionErrors: () => dispatch(resetSessionErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);