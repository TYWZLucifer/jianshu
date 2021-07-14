import { fromJS } from 'immutable';
import * as constants from './contants';

const defaultState = fromJS({
    focus: false,
    list: [],
    page: 1,
    totalPage: 1,
    onmouseIN: false
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.ON_FOCUS:
            return state.set('focus', true);
        case constants.ON_BLUR:
            return state.set('focus', false);
        case constants.SEARCH_SHOW_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            });
        case constants.MOUSE_IN:
            return state.set('onmouseIN', true);
        case constants.MOUSE_OUT:
            return state.set('onmouseIN', false);
        case constants.PAGE_CHANGE:
            return state.set('page', action.page);
        default: return state;
    }
};

export default reducer;