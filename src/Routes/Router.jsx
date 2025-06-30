
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';
import Login from '../Components/Login';
import Register from '../Components/Register';

const Router = createBrowserRouter(
    [
        {
            path:"/",
            Component:MainLayout,
            children:[
                {
                    index:true,
                    Component:Home,
                },
                {
                    path:"/login",
                    Component:Login
                },
                {
                    path:"/register",
                    Component:Register,
                }
            ]
        }
    ]
)

export default Router;