import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer, useCallback, useMemo } from 'react';
// utils
import axios from '../utils/axios';
import localStorageAvailable from '../utils/localStorageAvailable';
//
import { isValidToken, setSession } from './utils';

// ----------------------------------------------------------------------

// NOTE:
// We only build demo at basic level.
// Customer will need to do some extra handling yourself if you want to extend the logic and other features...

// ----------------------------------------------------------------------

const initialState = {
  isInitialized: false,
  isAuthenticated: false,
  user: null,
};

const reducer = (state, action) => {
  if (action.type === 'INITIAL') {
    return {
      isInitialized: true,
      isAuthenticated: action.payload.isAuthenticated,
      user: action.payload.user,
    };
  }
  if (action.type === 'LOGIN') {
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user,
    };
  }
  if (action.type === 'REGISTER') {
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user,
    };
  }
  if (action.type === 'LOGOUT') {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
    };
  }

  return state;
};

// ----------------------------------------------------------------------

export const AuthContext = createContext(null);

// ----------------------------------------------------------------------

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const storageAvailable = localStorageAvailable();

  const initialize = useCallback(async () => {
    try {
      const accessToken = storageAvailable ? localStorage.getItem('accessToken') : '';
      console.log("🚀 ~ file: JwtContext.js:74 ~ initialize ~ accessToken:", accessToken)
      const user = storageAvailable ? JSON.parse(localStorage.getItem('user')) : '';
      console.log("🚀 ~ file: JwtContext.js:76 ~ initialize ~ user:", user)

      if (accessToken && user) {
        setSession(accessToken);

        // const response = await axios.get('/api/account/my-account');

        // const { user } = response.data;

        dispatch({
          type: 'INITIAL',
          payload: {
            isAuthenticated: true,
            user,
          },
        });
      } else {
        dispatch({
          type: 'INITIAL',
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: 'INITIAL',
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  }, [storageAvailable]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // LOGIN
  const login = useCallback(async (email, password) => {
    const response = await axios.post('/admin/login', {
      email,
      password,
    });
    console.log("🚀 ~ login ~ response:", response)
    const { ...user } = response.data;
    const { token } = response.data.data;
    console.log("🚀 ~ login ~ token:", token)
    localStorage.setItem('user', JSON.stringify(user));
    setSession(response?.data?.data.token);
    localStorage.setItem('accessToken', response?.data?.data.token);
    dispatch({
      type: 'LOGIN',
      payload: {
        user,
      },
    });
  }, []);

  // REGISTER
  const register = useCallback(async (email, password, name) => {
    const response = await axios.post('/create-account', {
      email,
      password,
      name
    });
    console.log("🚀 ~ register ~ response.data.data:", response?.data)
    const { token, user } = response.data;
    console.log("🚀 ~ register ~ token:", token)

    localStorage.setItem('accessToken', token);

    dispatch({
      type: 'REGISTER',
      payload: {
        user,
      },
    });
  }, []);

  // LOGOUT
  // const logout = useCallback(() => {
  //   setSession(null);
  //   console.log('logUot')
  //   dispatch({
  //     type: 'LOGOUT',
  //   });
  // }, []);
  const logout = useCallback(async () => {
    await axios.post('/admin/logout')
    setSession(null);
    console.log('logUot')
    dispatch({
      type: 'LOGOUT',
    });
  }, []);

  const memoizedValue = useMemo(
    () => ({
      isInitialized: state.isInitialized,
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      method: 'jwt',
      login,
      register,
      logout,
    }),
    [state.isAuthenticated, state.isInitialized, state.user, login, logout, register]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
