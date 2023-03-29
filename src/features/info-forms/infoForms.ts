import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface formDataState {
  name: string,
  emailAddress: string,
  phoneNumber: string,
}

const initialState: formDataState = {
  name: '',
  emailAddress: '',
  phoneNumber: '',
}

export const formSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    getName: (state, action) => {
      state.name = action.payload;
    },
    getEmail: (state, action) => {
        state.emailAddress = action.payload;
      },
    getPhone: (state, action) => {
      state.phoneNumber = action.payload;
      },
  },
})

// Action creators are generated for each case reducer function
export const { getName, getEmail, getPhone } = formSlice.actions

export default formSlice.reducer