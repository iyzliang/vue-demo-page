// 所有请求逻辑写在这里
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

let api = {
    auth: {},
};

//请求示例
// api.auth.checkLogin = (cb, ecb) => {
//     axios.get('...')
//         .then(cb)
//         .catch(ecb);
// };
// api.auth.login = (data, cb, ecb) => {
//     axios.post('/api/v1/common/login', data).then(cb).catch(ecb);
// };


export default api;