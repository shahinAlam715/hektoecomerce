import { configureStore } from '@reduxjs/toolkit'
import  CountSlice  from './Component/Slice/CountSlice'

export default configureStore({
  reducer: {
    product: CountSlice
  },
})