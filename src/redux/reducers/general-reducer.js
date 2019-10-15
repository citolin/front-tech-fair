import { Store } from '../store'
import axios from 'axios'

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const initialState = {
    devices: {},
    categories: [],
    data: []
}


export const GeneralReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'ON_READ':
            {
                var devices = Object.assign({}, state.devices)
                let { dev, reading } = action.obj

                if (!devices[dev]) {
                    devices[dev] = {
                        current: [reading.c],
                        voltage: [reading.t],
                        frequency: [reading.f],
                        apparent: [reading.pap],
                        active: [reading.pat],
                        reactive: [reading.pr]
                    }
                }
                else {
                    devices[dev].current.push(reading.c)
                    devices[dev].voltage.push(reading.t)
                    devices[dev].frequency.push(reading.f)
                    devices[dev].apparent.push(reading.pap)
                    devices[dev].active.push(reading.pat)
                    devices[dev].reactive.push(reading.pr)

                    if (devices[dev].current.length >= 10) {
                        for (var key in devices[dev])
                            devices[dev][key].shift()
                    }
                    // TODO - X axis is increasing over 10s
                }

                let categories = Object.assign([], state.categories)
                categories.push(new Date().getSeconds())

                return { ...state, devices, categories }
            }

        case 'ON_UPDATE':
            {
                var devices = Object.assign({}, state.devices)
                var { mac, protocol } = action.obj

                if (!devices[mac]) {
                    devices[mac] = {
                        current: [protocol.current],
                        voltage: [protocol.voltage],
                        frequency: [protocol.frequency],
                        // apparent: [protocol.apparent],
                        // active: [protocol.active],
                        // reactive: [protocol.reactive]
                    }
                }
                else {
                    devices[mac].current.push(protocol.current)
                    devices[mac].voltage.push(protocol.voltage)
                    devices[mac].frequency.push(protocol.frequency)
                    // devices[mac].apparent.push(protocol.apparent)
                    // devices[mac].active.push(protocol.active)
                    // devices[mac].reactive.push(protocol.reactive)

                    if (devices[mac].current.length >= 10) {
                        for (var key in devices[mac])
                            devices[mac][key].shift()
                    }
                }

                var categories = Object.assign([], state.categories)
                if(categories.length >= 10)
                    categories.shift()
                categories.push(new Date().getSeconds())

                return { ...state, devices, categories }
            }


        default:
            return { ...state }
    }

}