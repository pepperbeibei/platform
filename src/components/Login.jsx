import React, { Component, Fragment } from 'react';
import '../style/index.less';
import { Form, Icon, Input, Button, /*Checkbox,*/ message, Spin } from 'antd';
import * as R from 'ramda';
// import logo from '../../logo.svg';
import { Redirect } from 'react-router-dom';

const FormItem = Form.Item;
const home = "/asrs/index";

const login = [{
    username:'admin',
    password:'admin'
},{
    username:'cdyc',
    password:'cbpm'
}];

function PatchUser(values) {  //匹配用户
    var results = login.map(function(item){
        // if (values.username === item.username && values.password === item.password) {
        if (R.whereEq({username: values.username, password: values.password})(item)) {
            if (values.username === 'admin') {
                return 1;
            }else {
                return 0;
            }
        }else {
            return -1;
        }
    });
    // results = R.whereEq({username: values.username, password: values.password})(login);
    return results;
};

class NormalLoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoding: false,
            isAdmin: false, 
        }
    }

    getInitialState() {
        return {
            isLoding: false,
            isAdmin: false, 
        };
    }

    componentDidMount() {
        var user = localStorage.getItem("asrs_user");
        if (user !== null) {
            this.setState({
                isLoding: true,
                isAdmin: (user.username === "admin" ? true : false),
            })
        }
    }

    componentWillUnmount() {
        // localStorage.setItem('asrs_user', null);
        this.setState({
            isLoding: false,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                var user = PatchUser(values);
                if (R.contains(0)(user) || R.contains(1)(user)) {
                    this.setState({
                        isLoding: true,
                        isAdmin: (R.contains(1)(user) ? true : false),
                    });

                    localStorage.setItem('asrs_user', JSON.stringify(values));
                    message.success('login successed!'); //成功信息
                    let that = this;
                    setTimeout(function() { //延迟进入
                      that.props.history.push({pathname:{home}, state:values});
                    }, 2000);

                }else {
                    message.error('login failed!'); //失败信息
                }
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        if (localStorage.getItem("asrs_user") !== null) {
            return <Redirect to = { home } />
        }
        return (
            this.state.isLoding ? 
            <Spin size = "large" className = "loading" /> : //待定
            <Fragment>
                <div className = "login">
                    <div className = "login-form">
                        <div className = "login-logo">
                            <div className = "login-name">综合立体库</div>
                        </div>
                        <Form onSubmit = {this.handleSubmit} style = {{maxWidth: '300px'}}>
                            <FormItem>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入用户名!' }],
                                })(
                                    <Input prefix = {<Icon type = "user" style = {{ fontSize: 13 }} />} /*placeholder = "用户名 (admin)"*/ />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码!' }],
                                })(
                                    <Input prefix = {<Icon type = "lock" style = {{ fontSize: 13 }} />} type = "password" /*placeholder = "密码 (admin)"*/ />
                                )}
                            </FormItem>
                            <FormItem style = {{marginBottom:'0'}}>
                                {/* {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>记住我</Checkbox>
                                )} */}
                                {/* <a className="login-form-forgot" href="" style={{float:'right'}}>忘记密码?</a> */}
                                <Button type = "primary" htmlType = "submit" className = "login-form-button" style = {{width: '100%'}}>
                                    登录
                                </Button>
                                {/* Or <a href="">现在就去注册!</a> */}
                            </FormItem>
                        </Form>
                    </div> 
                </div>
           </Fragment>        
        );
    }
}

const Login = Form.create()(NormalLoginForm);
export default Login;