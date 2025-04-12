import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setAuthHeaders = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuthHeaders = () =>
  (axios.defaults.headers.common['Authorization'] = '');

export const register = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', newUser);
      setAuthHeaders(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (infoUser, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', infoUser);
      setAuthHeaders(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeaders();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    setAuthHeaders(reduxState.auth.token);

    const response = await axios.get('/users/current');
    return response.data;
  },
  {
    condition(_, thunkAPI) {
      const reduxState = thunkAPI.getState();

      return reduxState.auth.token !== null;
    },
  }
);

//  sfsdfsd@mail.com
