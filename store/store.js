import { createStore, applyMiddleware } from 'redux'

// redux的初始值
const initialState = {
    lastUpdate: 0,
    light: false,
    count: 0
};

// reducer纯函数 
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TICK':
            return {
                ...state,
                lastUpdate: action.lastUpdate,
                light: !!action.light
            };
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            };
        case 'RESET':
            return {
                ...state,
                count: initialState.count
            };
        default:
            return state
    }
};

// 服务端渲染，我们需要在每次刷新浏览器的时候重新生成store，保证服务端的store是独立的。
export const initializeStore = (preloadedState = initialState) => {
    return createStore(
        // reducer
        reducer,
        // reducer的初始值
        preloadedState,
        // 安装插件
        applyMiddleware()
    )
};