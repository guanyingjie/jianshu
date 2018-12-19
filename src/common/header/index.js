import React,{Component} from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    searchWrapperer,
    Addition,
    Button
} from "./style";



class  Header extends Component{
    render(){
        return(
                <HeaderWrapper>
                    <Logo />
                    <Nav>
                        <NavItem className='left,active'>首页</NavItem>
                        <NavItem className='left'>下载APP</NavItem>
                        <NavItem className='right'>登录</NavItem>
                        <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                        </NavItem>
                        <searchWrapper>

                        <NavSearch></NavSearch>
                        <i className="iconfont">&#xe62b;</i>
                        </searchWrapper>
                    </Nav>
                    <Addition>
                        <Button className='writting'>写文章</Button>
                        <Button className='reg'>注册</Button>

                    </Addition>
                </HeaderWrapper>
            )
    }

}
export default Header;//导出组件便于在其他地方引用
