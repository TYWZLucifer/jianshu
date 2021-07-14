import axios from 'axios';
import { fromJS } from 'immutable';
import * as constants from './constants';

const actionDetail = (data) => ({
    type: constants.CHANGE_DETAIL,
    title: fromJS(data.title),
    content: fromJS(data.content)
})

export const changeDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then((res) => {
            dispatch(actionDetail(res.data.data));
        })
    }
}