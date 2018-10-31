import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout, } from 'antd';
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';
import Footer from './components/footer';
import NoMatch from './components/404';
import AllComponents from './page/Page';
import routes from './router/config';
import './style/index.less';
// import OutInTask from './page/OutInTask';

const { Content } = Layout;

class PageRoute extends Component {
    render() {
        return (
            <Switch> 
            {
                    Object.keys(routes).map(key => 
                        routes[key].map(r => {
                            const route = r => {
                                const Component = AllComponents[r.component];     
                                var key = r.route || r.key ;
                                var path = r.route || r.key ;    
                                // var render = props => r.login ? 
                                // <Component {...props} />
                                // : this.requireLogin(<Component {...props} />, r.auth);                                 
                            //console.log('key:' + key + ',render:' + render + ',r.component:' + r.component);
                                return (
                                    <Route
                                        key = {r.route || r.key}
                                        exact
                                        path = {r.route || r.key}
                                        /*render = {props => r.login ? 
                                            <Component {...props} />
                                        : this.requireLogin(<Component {...props} />, r.auth)*/
                                        render = {props => <Component {...props}/>}
                                    />
                                )
                            }
                            console.log('comp:' + r.component ? route(r) : r.subs.map(r => route(r)))
                            return r.component ? route(r) : r.subs.map(r => route(r));
                        })
                    )
                }
                {/* <Route path= '/asrs/list/whitelist' component='WhiteList'/>
                <Route path='/asrs/list/balcklist' component='BlackList'/> */}
                {/* <Route exact path = '/asrs/task' component = {OutInTask} /> */}
                {/* <Route component = {NoMatch}/> */}
            </Switch>
        )
    }
}

class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            collapsed: localStorage.getItem("asrs_SiderCollapsed") === "true",
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        }, function () {
            localStorage.setItem("asrs_SiderCollapsed", this.state.collapsed);
        });
    };

    componentDidMount() {
        //保存Sider收缩
        if (localStorage.getItem("asrs_SiderCollapsed") === null) {
            localStorage.setItem("asrs_SiderCollapsed", false);
        }
    };

    render() {
        const {collapsed} = this.state;
        const {location} = this.props;
        let name;

        if (localStorage.getItem("asrs_user") === null) {
            return <Redirect to = "/login"/>
        } else {
            // name = location.state === undefined ? JSON.parse(localStorage.getItem("asrs_user")).username : location.state.username;
        }
        return (
            <Layout className = "ant-layout-has-sider" style = {{height: '100%'}}>
                <SiderCustom collapsed = {collapsed} path = {location.pathname}/>
                <Layout>        
                                
                    <HeaderCustom collapsed={collapsed} toggle={this.toggle} username={name} />
                    <Content  style={{ margin: '0 16px', overflow: 'initial', flex: '1 1 0' }}>
                        <PageRoute />
                    </Content>
                    <Footer />
                </Layout>
            </Layout>
        );
    }
}

export default App;