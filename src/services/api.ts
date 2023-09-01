const nodeEnv = process.env.NODE_ENV

let API_URL='http://127.0.0.1:8090'
let FE_URL='https://delletran.com'

if (nodeEnv == "development") {
  API_URL='http://127.0.0.1:8090'
  FE_URL='http://127.0.0.1:3000'
}
  
if (nodeEnv == "production") {
  API_URL='http://127.0.0.1:8090'
  FE_URL='https://delletran.github.io/delletran.com'
}



export const baseURL = API_URL
export const publicURL = FE_URL
