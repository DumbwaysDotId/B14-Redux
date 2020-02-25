  
//Isi Dari Func atau

//Init Reducer
const initialState = {
    number: 0,
  }
  
  const decrementR = (state = initialState, action) => {
    switch (action.type) {
        case 'DECREMENT':
            return {
              number: state.number - 1
            }
        default:
          return state
    }
  }

  export default decrementR;