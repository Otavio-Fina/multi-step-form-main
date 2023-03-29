import { configureStore } from '@reduxjs/toolkit'
import formReducer from '../features/info-forms/infoForms'

export const store = configureStore({
  reducer: {
    infoData: formReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch