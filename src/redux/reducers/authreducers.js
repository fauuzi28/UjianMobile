const INITIAL_STATE = {
  username: '',
  kucing: [],
  image: '',
};

export const authreducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state, username: action.payload};
    case 'KUCING':
      return {...state, kucing: action.payload};
    case 'IMAGE':
      return {...state, image: action.payload};
    case 'LOGOUT':
      return {...state, username: ''};
    default:
      return state;
  }
};
