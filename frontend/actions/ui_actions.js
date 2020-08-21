export const RELOAD_ALL = 'RELOAD_ALL';
export const RELOAD_ONE = 'RELOAD_ONE';

const reloading = component => {
  if (component) {
    return { type: RELOAD_ONE, component }
  } else {
    return { type: RELOAD_ALL }
  }
};

export const clearLoadingState = component => dispatch => dispatch(reloading(component));