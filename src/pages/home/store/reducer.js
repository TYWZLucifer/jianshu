import { fromJS } from 'immutable';
import { constants } from '.';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    page: 0,
    showTopButton: false
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.HOME_CHANGE_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            });
        case constants.HOME_LOAD_LIST:
            return state.merge({
                articleList: state.get('articleList').concat(action.newList),
                page: action.page
            });
        case constants.HOME_CHANGE_SCROLLSHOW:
            return state.set('showTopButton', action.showtag)
        default: return state;
    }
};

export default reducer;