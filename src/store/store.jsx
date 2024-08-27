import { configureStore } from '@reduxjs/toolkit'
import movieSlice from './reducers/movieSlice'
import tvSlice from './reducers/tvSlice'
import personSlice from './reducers/personSlice'

export default configureStore({
  reducer: {
    movie: movieSlice,
    tvSlice: tvSlice,
    person: personSlice,
  }
})