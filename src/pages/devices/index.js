import React from 'react'
import { connect } from 'react-redux'
import DeviceCard from '../../components/device-card'

const Devices = (props) => {
    return (
        <div className="App">
            <header className="App-header">
                {Object.keys(props.devices).map(dev => <DeviceCard mac={dev} dev={props.devices[dev]} />)}
            </header>
        </div>
    )
}


const mapStateToProps = (state) => ({
    devices: state.general.devices
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Devices)