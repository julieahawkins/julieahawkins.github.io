const theme = (state = 'light', action) => {
  switch (action.type) {
  case 'TOGGLE_THEME':
    return action.theme;
  default:
    return state;
  }
};

export default theme;