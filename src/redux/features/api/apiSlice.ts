import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/services/store'
import { getTestQuery } from './apiThunks'
import { IDimensionKeys, IDimensionData, IObject } from '@/types'


// Define a type for the slice state
interface apiState {
  datamodel: IObject<string>
  appConfig?: IObject<any>
  data: {[key: string]: IObject<any>}
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

// Define the initial state using that type 

const initialState = {
  // appConfig: nextConfig.publicRuntimeConfig,
  datamodel: {},
  data: {},
  loading: 'idle',
} as apiState

// Define PayloadAction types

type actionPayload = [string, boolean]


// Then, handle actions in your reducers:
const apiSlice = createSlice({
    // `createSlice` will infer the state type from the `initialState` argument
  name: 'api',
  initialState,
  reducers: {
    someAction: (state, action: PayloadAction<actionPayload>) => {
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getTestQuery.fulfilled, (state, action) => {
      // isFulfilled(action) && (state.data[action.meta.arg] = action.payload)
      state.data[action.meta.arg] = action.payload
    }),
    builder.addCase(getTestQuery.pending, (state, action) => {
    }),
    builder.addCase(getTestQuery.rejected, (state, action) => {
    })
  },
})


export const {
  someAction,
} = apiSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectData = (state: RootState) => state.api.data

export default apiSlice.reducer