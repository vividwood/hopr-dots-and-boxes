import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import gameReducer from './slices/gameSlice/gameSlice';
import peerReducer from './slices/peerSlice/peerSlice';
import { createBrowserHistory } from 'history'

import { createReduxHistoryContext } from "redux-first-history";

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({ 
  history: createBrowserHistory(),
});

export const store = configureStore({
  reducer: {
    router: routerReducer,
    game: gameReducer,
    peer: peerReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat([routerMiddleware])
});

export const history = createReduxHistory(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
