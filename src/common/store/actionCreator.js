import * as contants from './contants';
import axios from 'axios';
import { fromJS } from 'immutable';

export const getHeaderFocusAction = () => ({
    type: contants.ON_FOCUS
});

export const getHeaderBlurAction = () => ({
    type: contants.ON_BLUR
});

export const getHeaderMouseIn = () => ({
    type: contants.MOUSE_IN
});

export const getHeaderMouseOut = () => ({
    type: contants.MOUSE_OUT
});

export const pageChange = (page) => ({
    type: contants.PAGE_CHANGE,
    page: fromJS(page)
});

const getSearchListAction = (data) => ({
    type: contants.SEARCH_SHOW_LIST,
    data: fromJS(data),
    totalPage: fromJS(Math.ceil(data.length / 10))
})

export const getHeaderSearchList = () => {
    return (dispatch) => {
        axios.get('api/searchList.json').then((res) => {
            dispatch(getSearchListAction(res.data.data));
        }).catch(() => {
            alert("ajax error");
        })
    };
}

