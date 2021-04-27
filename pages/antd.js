import React from 'react'
import { Button,Cascader } from 'antd'

class Antd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
        console.log("1. constructor", this.state.count);
    }

    componentDidMount() {

    }

    render() {

        let options = [
            {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                    {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                        children: [
                            {
                                value: 'xihu',
                                label: 'West Lake',
                            },
                        ],
                    },
                ],
            },
            {
                value: 'jiangsu',
                label: 'Jiangsu',
                children: [
                    {
                        value: 'nanjing',
                        label: 'Nanjing',
                        children: [
                            {
                                value: 'zhonghuamen',
                                label: 'Zhong Hua Men',
                            },
                        ],
                    },
                ],
            },
        ];
        function onChange(value) {
            console.log(value);
        }
        return (
            <>
                <div>Antd</div>
                <Button type="primary">test Antd</Button>
                <Cascader options={options} onChange={onChange} placeholder="Please select" />
            </>
        )
    }
}

export default Antd