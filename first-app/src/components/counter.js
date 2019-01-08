import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../action/index';
import { getUserData } from '../action/Auth';
class Counter extends Component {
    componentDidMount() {
        this.props.getUserData()
    }
    render() {
       //从组件的props属性中导入四个方法和一个变量
        const {increment, decrement, counter} = this.props;
        //渲染组件，包括一个数字，四个按钮
        return (
            <p>
                Clicked: {counter} times
                {' '}
                <button onClick={increment}>+</button>
                {' '}
                <button onClick={decrement}>-</button>
                {' '}
            </p>
        )
    }
}
//将state.counter绑定到props的counter
const mapStateToProps = (state) => {
    console.log(state)
    return {
        counter: state.counter.count
    }
};
//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: (...args) => dispatch(actions.increment(...args)),
        decrement: (...args) => dispatch(actions.decrement(...args)),
        getUserData: (...args) => dispatch(getUserData(...args))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
