import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/json';
        config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, PUT, DELETE';
        config.headers['Access-Control-Allow-Origin'] = ' * ';
        config.headers['Accept'] = '*/*';
        if (store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = store.state.token;
        }
    },
    err => {
        return Promise.reject(err);
    }
);

axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    break;
                case 402:
                    break;
                case 405:
                    break;
                default:
                    break;
            }
        }
        return Promise.reject(error.response.data) // 返回接口返回的错误信息
    }
);

Vue.use(VueAxios, axios);