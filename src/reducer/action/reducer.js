const initialState = {
  
    count: 0,

};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {


case 'CHANGE_COUNT':
    return { ...state, count: payload };


  default:
    return state
  }
}

export default reducer