import axios from 'axios';

export function getUserData() {
    return dispatch => {
        axios.get('./data.json').then((res) => {
            console.log(res)
            // let data = JSON.parse(res.request.responseText);
            // dispatch(userData(data));
        }).catch((error) =>{
            console.log(111)
            var data = {name:'yang',age:20}
            dispatch(userData(data));
        })
    }
}

export function userData(data) {
    return {
        type: 'GET_LIST',
        payload: data
    }
}