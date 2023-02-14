
import {configureStore} from '@reduxjs/toolkit'
import rootreducer from './slice'

export default  configureStore({reducer:rootreducer})