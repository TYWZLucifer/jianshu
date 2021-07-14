import styled from "styled-components";

export const LoginWrapper = styled.div `
    z-index: 0;
    background: #eee;
    position: absolute;
    top: 56px;
    left: 0;
	right: 0;
	bottom: 0;
`
export const LoginBox = styled.div `
    width: 360px;
    height: 215px;
    margin: 200px auto;
    padding-top: 20px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
`

export const Input = styled.input `
    display: block;
    width: 200px;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    margin: 15px auto;
    color: #777;
`

export const Button = styled.div `
    width: 220px;
    height: 30px;
    line-height: 30px;
	color: #fff;
	background: #3194d0;
	border-radius: 15px;
	margin: 50px auto;
	text-align: center;
    cursor: pointer;
`