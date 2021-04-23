import React from 'react'
import { withRedux } from '../components/withRedux'

class Store extends React.Component {
    static async getInitialProps({ reduxStore }) {
        // Tick the time once, so we'll have a
        // valid time before first render
        const { dispatch } = reduxStore;
        dispatch({
            type: 'TICK',
            light: typeof window === 'object',
            lastUpdate: Date.now()
        });
        return reduxStore.getState()
    }
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }
    render() {
        console.log(this.props)
        return (
            <>
                <span>test redux, {this.props.lastUpdate}</span>
            </>
        )
    }
}

export default withRedux(Store)