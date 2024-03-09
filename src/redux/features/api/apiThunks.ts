import { createAsyncThunk, AsyncThunkPayloadCreator } from '@reduxjs/toolkit'
import { IObjectAny, IObjectString, IDimensionKeys, IDimensionData } from '@/types'

interface GetTestQueryPayload {

}

const getTestQuery = createAsyncThunk(
  'api/test_query',
  async (query: string, thunkAPI) => {
    const response = await fetch(`https://delletran-backend.vercel.app/api/test_query?q=${query}`, )
    
    // if (!response.ok) {
    //   throw new Error('Failed to fetch data')
    // }
    return (await response.json()) as IObjectAny
  }
)



export {
  getTestQuery,
}
