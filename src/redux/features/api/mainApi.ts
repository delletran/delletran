import { FetchBaseQueryError, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SerializedError } from "@reduxjs/toolkit";
import { IObject } from '@/types'


// const nextConfig: IObjectAny = {
//   publicRuntimeConfig: {
//     mainObject: process.env.NEXT_PUBLIC_MAIN_OBJECT,
//     entityTabName: process.env.NEXT_PUBLIC_ENTITY_TAB_NAME,
//     ApiUrl: process.env.NEXT_PUBLIC__API_URL,
//     userId: process.env.NEXT_PUBLIC_USER_ID,
//     identityCallbackUrl: process.env.NEXT_PUBLIC_IDENTITY_CALLBACK_URL,
//     identityClientId: process.env.NEXT_PUBLIC_IDENTITY_CLIENT_ID,
//     identityClientSecret: process.env.NEXT_PUBLIC_IDENTITY_CLIENT_SECRET,
//     identity: process.env.NEXT_PUBLIC_IDENTITY_,
//     redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI,
//     utilityGraphqlApiUrl: process.env.NEXT_PUBLIC_UTILITY_GRAPHQL_API_URL,
//     appName: process.env.NEXT_PUBLIC_APP_NAME,
//     appEmail: process.env.NEXT_PUBLIC_APP_EMAIL,
//     isCerberusNeeded: process.env.NEXT_PUBLIC_IS_CERBERUS_NEEDED,
//     concordanceApiUrl: process.env.NEXT_PUBLIC_CONCORDANCE_API_URL
//   },
// }

interface IData extends IObject<any> {}


export const mainApi = createApi({
  reducerPath: "mainApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `https://delletran-backend.vercel.app/api`,
  }),
  endpoints: (builder) => ({
    getTestQuery: builder.query<IData, string>({
      query: (query) => `/test_query?q=${query}`,
    }),
    
  }),
});

export const { 
  useGetTestQueryQuery,
} = mainApi;

// export {
//   nextConfig
// }