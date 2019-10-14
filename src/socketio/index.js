import openSocket from 'socket.io-client'
import { Store } from '../redux/store'

const socket = openSocket(process.env.REACT_APP_BACKEND, { secure: true })

socket.on('connect', socket => console.log('[SOCKET IO] Connected'))

socket.on('/read', obj => Store.dispatch({ type: 'ON_READ', obj }))

socket.on('/update', obj => Store.dispatch({ type: 'ON_UPDATE', obj }))

export default socket