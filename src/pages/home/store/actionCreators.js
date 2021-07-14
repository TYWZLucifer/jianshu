import axios from "axios";
import { constants } from ".";
import { fromJS } from "immutable";
import * as constant from './constants'

const changeHomeData = (result) => ({
    type: constant.HOME_CHANGE_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	recommendList: result.recommendList
});

export const getHomeData = () => {
    return (dispatch) => {
        axios.get('api/homeInfo.json').then((res) => {
            const data = res.data.data;
            dispatch(changeHomeData(data)); 
        });
    }
}

const changeHomeList = (res,page) => ({
    type: constants.HOME_LOAD_LIST,
    newList: fromJS(res),
    page: page
})

export const loadMoreList = (page) => {
    return (dispatch) => {
        axios.get('api/loadMoreList.json?page=' + page).then((res) => {
            const data = res.data.data;
            dispatch(changeHomeList(data,page+1)); 
        });
    }
}

export const changeScrollShow = (tag) => ({
    type: constants.HOME_CHANGE_SCROLLSHOW,
    showtag: tag
})
