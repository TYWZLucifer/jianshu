import React, { Component } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'

class Home extends Component {
    handleBackTopClick() {
        console.log("top");
        window.scrollTo(0, 0);
    }
    render() {
        const { showTopButton } = this.props;
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {showTopButton ? <BackTop onClick = {this.handleBackTopClick}>回到顶部</BackTop> : null}
            </HomeWrapper>
        );
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollShow);
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollShow);
    }
}

const mapState = (state) => ({
    showTopButton: state.get('home').get('showTopButton')
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeData());
    },
    changeScrollShow() {
        if(document.documentElement.scrollTop > 100) {
            dispatch(actionCreators.changeScrollShow(true));
        }else {
            dispatch(actionCreators.changeScrollShow(false));
        }
    }
})

export default connect(mapState, mapDispatch)(Home);