import axios from 'axios';
import { constants } from './index';

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
})

export const submitLog = (account, password) => {
    return (dispatch) => {
        axios.get('api/login.json?account='+account+'&password='+password).then((res) => {
            const data = res.data.data;
            if(data) {
                dispatch(changeLogin());
            }else {alert('登陆失败')}
        })
    }
}

export const logout = () => ({
    type: constants.CHANGE_LOGOUT,
    value: false
})