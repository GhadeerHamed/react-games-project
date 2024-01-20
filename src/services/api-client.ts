import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd84189b9e5234a5d9a2ab12889582fd9'
    }
})