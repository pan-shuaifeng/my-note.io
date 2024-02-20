# react-router-dom 路由
## 创建路由
```js
// 创建使用路由 router/index.js
import Login from '../page/Login'
import Article from '../page/Article'

import {createBrowserRouter} from 'react-router-dom'
import React from 'react'
const router = createBrowserRouter([
    {
        path:"/login",
        element: <Login></Login>
    },    {
        path:"/article",
        element: <Article></Article>
    }
])
export default router;

// 引入路由 index.js
import {RouterProvider} from 'react-router-dom'
import router from './router'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}>
        </RouterProvider>
    </React.StrictMode>
);



```
## 路由跳转
```js
// 路由跳转 router/login.js
import { Link,useNavigate } from 'react-router-dom'
// 1.编程式跳转
function Button(){
    const navigate = useNavigate();
    return <button onClick={()=>navigate('/article')}>跳转</button> 
}

//2.声明式跳转
function Button(){
    return <Link to='/article' />
}
```
## 路由传参1
```js {34,96-98}
// 路由传参 1
// Login/index.js
import {useNavigate} from 'react-router-dom'
const Login = () => {
    let navigate = useNavigate();
    return (
        <div>
            <button onClick={()=>navigate("/article?id=1001")}>searchParams传参</button>
        </div>
    )
}
export default Login;
// Article/index.js
import { useSearchParams } from 'react-router-dom'
const Article = ()=>{
    const [params] =  useSearchParams()
    const id = params.get('id')
    console.log(id)
    return (
        <div>
            <h1>Article</h1>
        </div>
    )
}
export default  Article
```
## 路由传参2
```js
// 路由传参 2
// router/index.js
const router = createBrowserRouter([
    {
        path:"/login",
        element: <Login></Login>
    },    {
        path:"/article/:id",
        element: <Article></Article>
    }
])
// Login/index.js
import {useNavigate} from 'react-router-dom'
const Login = () => {
    let navigate = useNavigate();
    return (
        <div>
            <button onClick={()=>navigate("/article/1001")}>Params传参</button>
        </div>
    )
}
export default Login;

// Article/index.js
import { useParams } from 'react-router-dom'
const Article = ()=>{
    const params =  useParams()
    const id = params.id
    console.log(id)
    return (
        <div>
            <h1>Article</h1>
        </div>
    )
}
export default  Article
```
## 嵌套路由
```js
// 嵌套路由
//router/index.js
const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>  ,
        children:[
            {
                path:'board',
                element:<Board></Board>
            }, {
                path:'about',
                element:<About></About>
            }
        ]
    },
    {
        path:"/login",
        element: <Login></Login>
    },    {
        path:"/article/:id",
        element: <Article></Article>
    }
])

//  Layout/index.js
import { Link, Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <div>
            <div>我是一级路由
            </div>
            <Link to="/board">面板</Link>
            <Link to="/about">关于</Link>
            <Outlet></Outlet>
        </div>
    
    )
}
export default Layout



```
