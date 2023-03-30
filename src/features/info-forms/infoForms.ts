import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface formDataState {
  name: string,
  emailAddress: string,
  phoneNumber: string,
  plain: string,
  styleOfPlain: boolean,
  onlineService: boolean,
  largerStorage: boolean,
  customProfile: boolean,
}

const initialState: formDataState = {
  name: '',
  emailAddress: '',
  phoneNumber: '',
  plain: '',
  styleOfPlain: false,
  onlineService: false,
  largerStorage: false,
  customProfile: false,
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
    getPlain: (state, action) => {
      state.plain = action.payload;
      },
    getPlainStyle: (state, action: PayloadAction<boolean>) => {
      state.styleOfPlain = action.payload;
      },
    getOnline: (state, action: PayloadAction<boolean>) => {
      state.onlineService = action.payload;
      },
    getStorage: (state, action: PayloadAction<boolean>) => {
      state.largerStorage = action.payload;
      },
    getCustom: (state, action: PayloadAction<boolean>) => {
      state.customProfile = action.payload;
      },
  },
})

// Action creators are generated for each case reducer function
export const { getName, getEmail, getPhone, getPlain, getPlainStyle, getOnline, getStorage, getCustom } = formSlice.actions

export default formSlice.reducer