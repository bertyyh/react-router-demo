const initialState = {
    count: 0,
    list:[]
}
export default function counter(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return {count:state.count + 1};
        case 'DECREMENT_COUNTER':
            return {count:state.count - 1};
        case 'GET_LIST':
            return {...state,list:action.payload}
        default:
            return state
    }
};