import { RECEIVE_SESSION_ERRORS, CLEAR_SESSION_ERRORS } from '../../actions/session_actions';

export default (state = [], { type, errors}) => {
  Object.freeze(state);

  switch (type) {
    case RECEIVE_SESSION_ERRORS:
      return errors;
    case CLEAR_SESSION_ERRORS:
      return [];
    default:
      return state;
  }
};