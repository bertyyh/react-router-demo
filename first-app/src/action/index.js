const increment = () => {
    return {
        type: 'INCREMENT_COUNTER',
    }
};
const decrement = () => {
    return {
        type: 'DECREMENT_COUNTER'
    }
};
const listInitAction = (data) => {
    return {
        type: 'GET_LIST',
        data: data
    } 
}

module.exports = {
    increment,
    decrement,
    listInitAction
};