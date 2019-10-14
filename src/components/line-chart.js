import React from 'react';
import { Line } from 'react-chartjs-2';

const initialState = {
    labels: [],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
        }
    ]
};

class LineChart extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount()
    {
        this.setState(initialState)
    }

    componentWillReceiveProps(newProps) {
        var _this = this

        var oldDataSet = _this.state.datasets[0]
        var newData = newProps.dataY

        var newDataSet = {
            ...oldDataSet
        }

        newDataSet.data = newData

        var newState = {
            labels: newProps.dataX,
            datasets: [newDataSet]
        }

        _this.setState(newState)
    }

    render() {

        return (

            <>
                <Line data={this.state} />
            </>
        )

    }
}


export default LineChart