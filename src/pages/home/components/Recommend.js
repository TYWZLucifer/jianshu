import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    RecommendWrap,
    RecommendItem
} from '../style'

class Recommend extends Component {
    render() {
        const {list} = this.props;
        return (
            <RecommendWrap>
                {
                    list.map((item) => (
                        <RecommendItem key = {item.get('id')} imgUrl = {item.get('imgUrl')}></RecommendItem>
                    ))
                }
            </RecommendWrap>
        );
    }
}

const mapToState = (state) => ({
    list: state.getIn(['home', 'recommendList'])
})

export default connect(mapToState, null)(Recommend);