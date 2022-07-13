import axios from 'axios';

const key = '91dffebd07534148b0e151440221007';

export default axios.create({
    baseURL: "http://api.weatherapi.com/v1",
    params: {
        key: key
            
        }

});

