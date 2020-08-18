import React from 'react';
import { Link } from 'react-router-dom';
import AuthPageWrapper from './auth_page_wrapper';

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { user: props.user, errors: [] };
    this.baseUserState = { ...this.state.user };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.resetSessionErrors();
  }

  update(type) {
    return event => this.setState({
      user: Object.assign(this.state.user, { [type]: event.currentTarget.value })
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { confirmedPassword, ...user } = this.state.user;
    if (confirmedPassword === user.password) {
      this.props.action(user);
    } else {
      this.setState({
        user: Object.assign({}, this.state.user, { password: '', confirmedPassword: '' }),
        errors: [...this.props.errors, 'Passwords must match!']
      });
    }
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
            <Link id="auth-logo-link" to="/" />
            <h3>{this.props.formType}</h3>
          </div>
          <ul className="auth-errors">{errorsMsgs}</ul>
          <form className="auth-form signup" onSubmit={this.handleSubmit}>
            <div className="auth-form-fields">
              <div className="auth-form-fields-row row-one">
                <input type="text"
                  onChange={this.update('firstName')}
                  value={this.state.user.firstName}
                  placeholder="First Name (optional)"
                />
                <input type="text"
                  onChange={this.update('lastName')}
                  value={this.state.user.lastName}
                  placeholder="Last Name (optional)"
                />
              </div>
              <div className="auth-form-fields-row row-two">
                <input type="text"
                  onChange={this.update('email')}
                  value={this.state.user.email}
                  placeholder="Email"
                />
              </div>
              <div className="auth-form-fields-row row-three">
                <input type="text"
                  onChange={this.update('username')}
                  value={this.state.user.username}
                  placeholder="Username"
                  />
              </div>
              <div className="auth-form-fields-row row-three">
                <input type="password"
                  onChange={this.update('password')}
                  value={this.state.user.password}
                  placeholder="Password (min. 6 characters)"
                />
                <input type="password"
                  onChange={this.update('confirmedPassword')}
                  value={this.state.user.confirmedPassword}
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className="auth-form-fields-row row-four">
              <button type="submit">{this.props.formType}</button>
              <div className="auth-form-redirect">
                <p>Already started?</p>
                <Link to="/login">Log in to return to StockFox</Link>
              </div>
            </div>
          </form>
        </div>
        <AuthPageWrapper />
      </div>
    )
  }
}

export default SignupForm