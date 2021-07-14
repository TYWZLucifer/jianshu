import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style'

class Login extends Component {
    render() {
        const { loginStauts } = this.props;
        if(!loginStauts) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' innerRef={(input) => {this.account = input}}></Input>
                        <Input placeholder='密码' type = 'password' innerRef={(input) => {this.password = input}}></Input>
                        <Button onClick = {() => this.props.submitLog(this.account, this.password)}>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to='/'/>
        }
    }
}

const mapState = (state) => ({
    loginStauts: state.get('login').get('login')
})

const mapDispatch = (dispatch) => ({
    submitLog(account, password) {
        dispatch(actionCreators.submitLog(account, password));
    }
})

export default connect(mapState, mapDispatch)(Login);