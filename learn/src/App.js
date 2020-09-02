import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { RouteConfig } from './RouteConfig'


function User({ match }) {
    return <div>
        <h1>user 固定</h1>
        <p>
            <Link to={RouteConfig.user.update}> user update</Link>
            <Link to={RouteConfig.user.pay}> user pay</Link>
        </p>
        <div style={{
            width: 500,
            height: 500,
            background: 'lightblue',
            border: '2px solid',
            margin: '0 auto'
        }}>
            <Route path={RouteConfig.user.update} component={UserUpdate} />
            <Route path={RouteConfig.user.pay} component={UserPay} />
        </div>

    </div>
}

function UserUpdate() {
    return <h1>修改信息</h1>
}

function UserPay() {
    return <h1>用户充值</h1>
}

export default function App() {
    return <Router>
        <Route path={RouteConfig.user.root} component={User} />
    </Router>
}

