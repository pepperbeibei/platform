import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
// import { Link } from 'react-router-dom';
// import Footer from '../components/footer';
import SiderMenu from './SiderMenu';
import routes from '../router/config';
import '../style/index.less';

const { Sider } = Layout;
// const SubMenu = Menu.SubMenu;

export default class SiderCustom extends Component{
    constructor(props){
        super(props);
        const { collapsed } = props;
        this.state = {
            collapsed: collapsed,
            firstHide: true, //第一次先隐藏暴露的子菜单
            selectedKey: '', //选择的路径
            openKey: '', //打开的路径（选择的上一层）
        }
    }
    
    componentDidMount() {
        this.setMenuOpen(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.onCollapse(nextProps.collapsed);
        this.setMenuOpen(nextProps);
    }

    setMenuOpen = props => {
        const {path} = props;
        this.setState({
            openKey: path.substr(0, path.lastIndexOf('/')),
            selectedKey: path
        });
    };

    onCollapse = (collapsed) => {
        this.setState({
            collapsed : collapsed,
            firstHide: collapsed,
        });
    };

    menuClick = e => {
        this.setState({
            selectedKey: e.key
        });
    };

    openMenu = v => {
        this.setState({
            openKey: v[v.length - 1],
            firstHide: false,
        })
    };

    render(){
        const { collapsed, firstHide, openKey, selectedKey } = this.state;
        return(
            <Sider 
                // trigger = {null} collapsed = {collapsed} className = "ant-layout-has-sider" collapsedWidth = "0">
                // <Menu
                //     theme = "dark"
                //     mode = "inline"
                //     selectedKeys={[selectedKey]}
                //     onClick = {this.menuClick}
                //     onOpenChange = {this.openMenu}
                //     openKeys = {firstHide ? null : [openKey]}
                // >
                // <SiderMenu
                //     menus = {routes.menus}
                //     onClick = {this.menuClick}
                //     mode = "inline"
                //     selectedKeys = {[this.state.selectedKey]}
                //     openKeys = {this.state.firstHide ? null : [this.state.openKey]}
                //     onOpenChange = {this.openMenu}
                // />                    
                // </Menu>
                trigger = {null}
                breakpoint="lg"
                collapsed = {this.props.collapsed}
                style = {{ overflowY: 'auto' }}
                collapsedWidth = "0"
                width = "8%"
            >
                <div className="logo" />
                <SiderMenu
                    menus = {routes.menus}
                    onClick = {this.menuClick}
                    mode = "inline"
                    selectedKeys = {[this.state.selectedKey]}
                    openKeys = {this.state.firstHide ? null : [this.state.openKey]}
                    onOpenChange = {this.openMenu}
                />
            </Sider>
        )
    }
}