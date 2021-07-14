import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style'

class List extends Component {
    render() {
        const {page, list, loadMoreList} = this.props;
        return (
            <Fragment>
                {list.map((item) => (
                    <Link key = {item.get('id')} to = {'/detail/' + item.get('id')}>
                        <ListItem>
                            <img alt = '' className = 'pic' src = {item.get('imgUrl')}></img>
                            <ListInfo>
			                    <h3 className='title'>{item.get('title')}</h3>
			                    <p className='desc'>{item.get('desc')}</p>
			                </ListInfo>
                        </ListItem>
                    </Link>
                ))}
                <LoadMore onClick = {() => {loadMoreList(page)}}>更多内容</LoadMore>
            </Fragment>
        );
    }
}

const mapToState = (state) => ({
    list: state.getIn(['home','articleList']),
    page: state.getIn(['home','page'])
});

const mapDispatch = (dispatch) => ({
    loadMoreList(page) {
        dispatch(actionCreators.loadMoreList(page));
    }
});

export default connect(mapToState, mapDispatch)(List);