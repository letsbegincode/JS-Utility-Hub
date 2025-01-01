function createPrivateState(initialState) {
  let state = initialState;
  return {
    getState() {
      return state;
    },
    setState(newState) {
      state = newState;
    }
  };
}
