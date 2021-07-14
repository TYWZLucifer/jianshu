import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { actionCreators } from '../store';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { actionCreators as loginCreators } from '../../pages/login/store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfoList,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem
} from './style';

class Header extends Component {
    render() {
        const { focus, handleOnFocus, handleOnBlur, list, loginStauts, logout} = this.props;
        return (
            <HeaderWrapper>
                <Link to = '/'>
                    <Logo></Logo>
                </Link>
                <Nav>
                    <NavItem className = "left active">首页</NavItem>
                    <NavItem className = "left">下载App</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in = {focus}
                            timeout = {300}
                            classNames = 'slide'
                        >
                            <NavSearch
                                className = {focus ? 'focus' : ''}
                                onFocus = {() => handleOnFocus(list)}
                                onBlur = {handleOnBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className = {focus ? 'focus iconfont zoom' : 'iconfont zoom'}>&#xe614;</i>
                        {this.getSearchList()}
                    </SearchWrapper>
                    {loginStauts ? <NavItem onClick = {logout} className = "right">退出</NavItem> : <Link to = '/login'><NavItem className = "right">登陆</NavItem></Link>}
                    <NavItem className = "right">
                        <i className = "iconfont">&#xe636;</i>
                    </NavItem>
                </Nav>
                <Addition>
                    <Button className = "writting">写文章</Button>
                    <Button className = "reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }

    getSearchList() {
        const { focus, list, page, totalPage, onmouseIN, handleOnMouseIn, handleOnMouseOut, handlePageChange } = this.props;
        const pageList = [];
        const jslist = list.toJS();
        for(let i = (page - 1) * 10; i < page * 10 && i < jslist.length; i++) {
            pageList.push(<SearchInfoItem key = {jslist[i]}>{jslist[i]}</SearchInfoItem>)
        }
        if(focus || onmouseIN) {
            return (
                <SearchInfoList
                    onMouseEnter = {handleOnMouseIn}
                    onMouseLeave = {handleOnMouseOut}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick = {() => handlePageChange(page, totalPage, this.spin)}>
                            <i ref = {(icon) => {this.spin = icon}} className = "iconfont rot">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {pageList}
                    </div>
                </SearchInfoList>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    focus: state.get('header').get('focus'),
    list: state.get('header').get('list'),
    page: state.get('header').get('page'),
    totalPage: state.get('header').get('totalPage'),
    onmouseIN: state.getIn(['header', 'onmouseIN']),
    loginStauts: state.getIn(['login', 'login'])
})

const mapDispathToProps = (dispatch) => ({
    handleOnFocus(list) {
        (list.size === 0) && dispatch(actionCreators.getHeaderSearchList());
        dispatch(actionCreators.getHeaderFocusAction());
    },
    handleOnBlur() {
        dispatch(actionCreators.getHeaderBlurAction());
    },
    handleOnMouseIn() {
        dispatch(actionCreators.getHeaderMouseIn());
    },
    handleOnMouseOut() {
        dispatch(actionCreators.getHeaderMouseOut());
    },
    handlePageChange(page, totalPage, spin) {
        let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
        if(originAngle) originAngle = parseInt(originAngle, 10);
        else originAngle = 0;
        spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'; 
        if(page < totalPage) dispatch(actionCreators.pageChange(page + 1));
        else dispatch(actionCreators.pageChange(1));
    },
    logout() {
        dispatch(loginCreators.logout());
    }
})

export default connect(mapStateToProps, mapDispathToProps)(Header);