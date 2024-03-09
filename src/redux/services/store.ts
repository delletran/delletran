import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/dist/query"

import counterReducer from '@/redux/features/counter/counterSlice'
import apiReducer from '@/redux/features/api/apiSlice'
import { mainApi } from '@/redux/features/api/mainApi'
// import domainReducer from '@/redux/features/domain/domainSlice'
// import { userApi } from '@/redux/features/user/userApi'
// import { domainApi } from '@/redux/features/domain/domainApi'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    api: apiReducer,
    [mainApi.reducerPath]: mainApi.reducer,
    // [domainApi.reducerPath]: domainApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      mainApi.middleware,
      // domainApi.middleware
    ]),
})

// setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
