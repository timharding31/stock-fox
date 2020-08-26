import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';

export default (state = null, { type, user }) => {
  Object.freeze(state);

  switch (type) {
    case RECEIVE_CURRENT_USER:
      return user;
    default:
      return state;
  }
};