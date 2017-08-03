// @flow

export function createReducer(initialState: any, handlers: {}) {
  return (state: ?{} = initialState, action: Action) => {
    return handlers.hasOwnProperty(action.type) ?
      handlers[action.type](state, action) :
      state;
  };
}
