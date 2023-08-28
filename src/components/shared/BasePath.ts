const BASE_PATH_FORAPI = process.env.NODE_ENV === "development" ?
    "http://localhost:3000"
    : "https://dine-market-8eyu.vercel.app"

export default BASE_PATH_FORAPI