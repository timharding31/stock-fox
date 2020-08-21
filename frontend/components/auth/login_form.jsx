import React from 'react';
import { Link } from 'react-router-dom';
import AuthPageWrapper from './auth_page_wrapper';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { user: props.user, errors: [] };
    this.baseUserState = { ...this.state.user };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(type) {
    return event => this.setState({
      user: Object.assign(this.state.user, { [type]: event.currentTarget.value }),
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { user } = this.state;
    this.props.action(user);
  }

  componentDidMount() {
    this.props.resetSessionErrors();
  }

  render() {
    const errors = this.props.errors.concat(this.state.errors);
    let errorsMsgs;
    if (errors.length > 0) {
      errorsMsgs = errors.map((error, idx) => (<li key={`error-${idx}`}>{error}</li>));
    }
    return (
      <div className="auth-page-container">
        <div className="auth-form-container">
          <div className="auth-form-header">
            <h3>{this.props.formType}</h3>
          </div>
          <ul className="auth-errors">{errorsMsgs}</ul>
          <form className="auth-form signup" onSubmit={this.handleSubmit}>
            <div className="auth-form-fields">
            <div className="auth-form-fields-row row-one">
              <input type="text"
                onChange={this.update('username')}
                value={this.state.user.username}
                placeholder="Username or Email"
              />
            </div>
            <div className="auth-form-fields-row row-two">
            <input type="password"
              onChange={this.update('password')}
              value={this.state.user.password}
              placeholder="Password"
            />
            </div>
            </div>
            <div className="auth-form-fields-row row-four">
            <button type="submit">{this.props.formType}</button>
            <div className="auth-form-redirect">
              <p>Need an account?</p>
              <Link to="/signup">Sign up to use StockFox</Link>
            </div>
              <button type="button" id="demo-login" onClick={() => this.props.loginDemoUser()}>Demo User</button>
            </div>
          </form>
        </div>
        <AuthPageWrapper />
      </div>
    )
  }
}

export default LoginForm;