import React, { Component } from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';
// import { Layout, } from 'antd';
// import SiderCustom from '../components/SiderCustom';
// import HeaderCustom from '../components/HeaderCustom';
// import Footer from '../components/footer';
// import NoMatch from '../components/404';
// import AllComponents from './Page';
// import routes from '../router/config';
import '../style/index.less';

// const { Content } = Layout;

class Home extends Component{
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         collapsed: localStorage.getItem("asrs_SiderCollapsed") === "true",
    //     }
    // }

    // toggle = () => {
    //     this.setState({
    //         collapsed: !this.state.collapsed,
    //     }, function () {
    //         localStorage.setItem("asrs_SiderCollapsed", this.state.collapsed);
    //     });
    // };

    // componentDidMount() {
    //     //保存Sider收缩
    //     if (localStorage.getItem("asrs_SiderCollapsed") === null) {
    //         localStorage.setItem("asrs_SiderCollapsed", false);
    //     }
    // };

    render() {
        // const {collapsed} = this.state;
        // const {location} = this.props;
        // let name;

        // if (localStorage.getItem("asrs_user") === null) {
        //     return <Redirect to = "/login"/>
        // } else {
        //     // name = location.state === undefined ? JSON.parse(localStorage.getItem("asrs_user")).username : location.state.username;
        // }
        return (
            // <Layout className = "ant-layout-has-sider" style = {{height: '100%'}}>
            //     <SiderCustom collapsed = {collapsed} path = {location.pathname}/>
            //     <Layout>                    
            //         <HeaderCustom collapsed={collapsed} toggle={this.toggle} username={name} />
            //         <Content style = {{margin: '0 16px'}}>
            //             <Switch> {
            //                     Object.keys(routes).map(key => 
            //                         routes[key].map(r => {
            //                             const route = r => {
            //                                 const Component = AllComponents[r.component];
            //                                 return (
            //                                     <Route
            //                                         key = {r.route || r.key}
            //                                         exact
            //                                         path = {r.route || r.key}
            //                                         render = {props => <Component  />}
            //                                     />
            //                                 )
            //                             }
            //                             return r.component ? route(r) : r.subs.map(r => route(r));
            //                         })
            //                     )
            //                 }
            //                 <Route component = {NoMatch}/>
            //             </Switch>
            //         </Content>
            //         <Footer />
            //     </Layout>
            // </Layout>
            <div>home</div>
        );
    }
}

export default Home;