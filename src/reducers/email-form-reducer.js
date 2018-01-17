const renderForm = (state = false, action) => {
  switch (action.type) {
  case 'DISPLAY_FORM':
    return true;
  case 'CLOSE_FORM':
    return false;
  default:
    return state;
  }
};

export default renderForm;