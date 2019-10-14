import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from 'react-apexcharts'

class LineChart extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)

        let options = {
            chart: {
                id: "basic-bar"
            },
            markers: {
                colors: ['#F44336', '#E91E63', '#9C27B0']
            },
            xaxis: {
                categories: this.props.dataX
            }
        }

        let series = [
            {
                name: "series-1",
                data: this.props.dataY
            }
        ]

        return (
            <div className="app" align='center'>
                <div className="row" align='center'>
                    <div className="mixed-chart" align='center'>
                        <Chart
                            options={options}
                            series={series}
                            type="line"
                            width="500"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(LineChart)
