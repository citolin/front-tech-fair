import React from 'react'
import { connect } from 'react-redux'
// import LineChart from './line-chart'
import LineChart from './line-chart'
import { Grid } from '@material-ui/core'

const DeviceCard = (props) => {
    return (
        <div>
            <p align='center' style={{ color: '#FFF' }} onClick={props.onClick} >Device - {props.mac}</p>
            <Grid container xs={12}>
                {Object.keys(props.dev).map(key => (
                    <Grid item xs={4}>
                        <p style={{ color: '#FFF' }}>{key.toUpperCase()}</p>
                        <p style={{ color: '#FFF' }}> {props.dev[key][props.dev[key].length - 1]} </p>
                        <LineChart dataX={props.categories} dataY={props.dev[key]} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

const mapStateToProps = (state) => ({
    categories: state.general.categories,
    data: state.general.data
})

const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch({ type: 'ON_CLICK' })
})

export default connect(mapStateToProps, mapDispatchToProps)(DeviceCard)