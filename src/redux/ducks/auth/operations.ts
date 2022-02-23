import { authAPI, securityAPI } from '../../../dataAccess/api'
import {
  WrongCredentialsError,
  WrongCaptchaError,
} from '../../../dataAccess/apiErrors'
import { AppThunk } from '../../store'

import * as actions from './actions'

export const authMe = (): AppThunk => async dispatch => {
  let response = await authAPI.authMe()

  if (!response.data.resultCode) {
    dispatch(actions.setIsUserAuthed(true))
    dispatch(actions.setLoggedUserInfo(response.data.data))
  } else {
    dispatch(actions.setIsUserAuthed(false))
    dispatch(actions.setLoggedUserInfo({ id: null, email: '', login: '' }))
  }
}

type LoginData = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string | null
}

export const login =
  ({
    email,
    password,
    rememberMe = false,
    captcha = null,
  }: LoginData): AppThunk =>
  async dispatch => {
    let response = await authAPI.login({
      email,
      password,
      rememberMe,
      captcha,
    })
    let resCode = response.data.resultCode
    if (!resCode) return dispatch(authMe())
    else if (resCode === 10) {
      let captchaResponse = await securityAPI.getCaptchaUrl()
      let captchaUrl = captchaResponse.data.url
      dispatch(actions.setCaptchaUrl(captchaUrl))
      throw new WrongCaptchaError(response.data.messages)
    } else throw new WrongCredentialsError(response.data.messages[0])
  }

export const logout = (): AppThunk => async dispatch => {
  let response = await authAPI.logout()
  if (!response.data.resultCode) return dispatch(authMe())
}
