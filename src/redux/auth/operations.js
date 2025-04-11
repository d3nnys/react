import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

// axios.defaults.headers.common['Authorization'] =
//   'Bearer ${response.data.token}';

const setAuthHeaders = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuthHeaders = (axios.defaults.headers.common['Authorization'] = '');

export const register = createAsyncThunk(
  'registerUser',
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post('auth/register', newUser);
      setAuthHeaders(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'loginUser',
  async (infoUser, thunkAPI) => {
    try {
      const response = await axios.post('auth/login', infoUser);
      setAuthHeaders(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('auth/logout');
    clearAuthHeaders();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    const savedToken = reduxState.auth.token;
    setAuthHeaders(savedToken);

    const response = await axios.get('users/refresh');
    return response.data;
  },
  {
    condition(_, thunkAPI) {
      const reduxState = thunkAPI.getState();
      const savedToken = reduxState.auth.token;

      return savedToken !== null;
    },
  }
);
