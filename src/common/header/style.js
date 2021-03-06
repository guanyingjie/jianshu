import styled from 'styled-components';
import logopic  from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  position:relative;
  height:56px;
  border-bottom:1px solid #f0f0f0;  
`;
export const Logo = styled.a`
  position:absolute;
  left:0;
  top:0;
  display:block;
  width:100px;
  height:56px;
  background:url(${logopic});
  background-size:contain;
`;

export const Nav = styled.div`
  width:960px;
  height:100%;
  padding-right:70px;
  box-sizing:border-box;
  margin:0 auto;
  display:flex;
`

export const NavItem = styled.div`
  line-height:56px;
  padding:0 15px;
  font-size:17px;
  color:#333;
  &.left{
  float:left;
  }
  &.right{
  float:right;
  color:#969696;
  }
 
  &.active{
  color:#ea6f5a;
  }
`;

export const searchWrapper = styled.div`
  float:left;
  position:relative;
  .iconfont{
    position:absolute;
    top:4px;
    right:5px;
    width:30px;
    height:30px;
    line-height:normal;
    padding:0;
    color:#969696;
    text-align:center;
    bottom:5px;
    
  }
`
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
  width:240px;
  height:38px;
  padding:0 35px 0 20px;
  margin-top:9px;
  margin-left:20px;
  box-sizing:border-box;
  border:none;
  outline:none;
  border-radius:19px;
  background:#eee;
  font-size:14px;
  color:#777;
  &::placeholder{
   color:#999;
  }
`

export const Addition = styled.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;
`
export const Button = styled.div`
  float:right;
  margin-right:20px;
  margin-top:9px;
  padding:0 20px;
  line-height:38px;
  border-radius:19px;
  border:1px solid #ec6149;
  &.reg{
  color:#ec6149;
  }
  &.writting{
  color:#fff;
  background:#ec6149;
  }
`