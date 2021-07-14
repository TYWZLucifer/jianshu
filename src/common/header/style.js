import styled from 'styled-components';
import logo from '../../statics/logo.png';

export const HeaderWrapper = styled.div `
	z-index: 1;
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logo});
    background-size: contain;
`;

export const Nav = styled.div `
    height: 100%;
    width: 960px;
    margin: 0 auto;
`;

export const NavItem = styled.div `
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
    height: 100%;
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
	cursor: pointer;
`;

export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
	width: 160px;
	height: 38px;
	padding: 0 35px 0 20px;
	margin-top: 9px;
	margin-left: 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	color: #666;
	&::placeholder {
		color: #999;
	}
	&.focus {
		width: 240px;
	}
	&.slide-enter {
		transition:all .3s ease-out;
	}
	&.slide-enter-active{
		width:240px;
	}
	&.slide-exit {
		transition:all .3s ease-out;
	}
	&.slide-exit-active{
		width:160px;
	}
`;

export const Addition = styled.div `
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`;

export const Button = styled.div `
	float: right;
	margin-top: 9px;
	margin-right: 20px;
	padding: 0 20px;
	line-height: 38px;
	border-radius: 19px;
	border: 1px solid #ec6149;
	font-siz: 14px;
	cursor: pointer;
    &.reg {
		color: #ec6149;
	}
	&.writting {
		color: #fff;
		background: #ec6149;
	}
`
export const SearchWrapper = styled.div `
	float: left;
	position: relative;
	.zoom {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width:30px;
		line-height: 30px;
		text-align: center;
		border-radius: 50%;
		&.focus {
			background-color: #777;
			color: white;
		}
	}
`
export const SearchInfoList = styled.div `
	position: absolute;
	left: 0;
	top: 56px;
	width: 240px;
	padding: 0 20px;
	background-color: #fff;
	box-shadow: 0 3px 0 #fff , 0 3px 3px rgba(0, 0, 0, .2);
`;

export const SearchInfoTitle = styled.div `
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;

export const SearchInfoSwitch = styled.span `
	float: right;
	font-size: 13px;
	cursor: pointer;
	.rot {
		display: block;
		float: left;
		margin-right: 2px;
		font-size: 12px;
		transition: all .2s ease-in;
		transform-origin: center center;
	}
`;

export const SearchInfoItem = styled.a `
	display: inline-block;
	padding: 0 5px;
	margin: 0 5px 8px 0;
	line-height: 20px;
	font-size: 12px;
	border: 1px solid #ddd;
	border-radius: 2px;
	color: #787878;
`;


