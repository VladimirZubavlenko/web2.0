import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

// Define a type for the slice state
interface LoginFormState {
  login: string;
  password: string;
}

// Define the initial state using that type
const initialState: LoginFormState = {
  login: '',
  password: ''
}

export const loginFormSlice = createSlice({
  name: 'login',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeLogin: (state, action:PayloadAction<string>) => {
      state.login = action.payload
    },
    changePassword: (state, action:PayloadAction<string>) => {
      state.password = action.payload
    },
  }
})

export const { changeLogin, changePassword } = loginFormSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLogin = (state: RootState) => state.loginForm.login;
export const selectPassword = (state: RootState) => state.loginForm.password;

export default loginFormSlice.reducer
