const initialState = {
    data: [],
    isLoading: false
}

const users = (state = initialState, action) => {
    switch (action.type) {
            case 'GET_USERS_PENDING':
            return {
                ...state,
                isLoading: true
            }

            case 'GET_USERS_FULFILLED':
            return {
                ...state,
                data: action.payload.data,
                isLoading: false
            }

            case 'GET_USERS_REJECTED':
            return {
                ...state,
                loading: false,
                error: true
            }

            default :
            return state;
    }
}

export default users;