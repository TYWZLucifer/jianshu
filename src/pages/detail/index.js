import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store';
import {
    DetailWrapper,
    Header,
    Content
} from './style';

class Detail extends Component {
    render() {
        const { title, content } = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html: content}}></Content>
            </DetailWrapper>
        );
    }

    componentDidMount() {
        this.props.changeDetail(this.props.match.params.id);
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
    changeDetail(id) {
        dispatch(actionCreators.changeDetail(id));
    }
})

export default connect(mapState, mapDispatch)(withRouter(Detail));