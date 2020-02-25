//Isi Dari Func atau

//Init Reducer
const initialState = {
    number: 0,
  }
  
  const incrementR = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          number: state.number + 1
        }
        default:
          return state
    }
  }

  export default incrementR;