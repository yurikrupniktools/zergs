import React from 'react';
import Shows from './Shows';
import Projects from './Projects';
import Register from './Register';
import ChatRoom from './ChatRoom';
import Form from './practice-area/Form';
// import Users from './Users';
// import usersRoute from '../services/users';

const routes = [
    {
        path: '/form',
        component: Form,
        key: 'form'
    },
    {
        path: '/shows',
        component: Shows,
        key: 'Shows',
        exact: true
    },
    {
        path: '/register',
        component: Register,
        key: 'Register',
    },
    {
        path: '/chat',
        component: ChatRoom,
        key: 'Chat',
    },
    {
        path: '/shows/:id',
        component: (props) => {
            const { match } = props; // eslint-disable-line
            const { params } = match; // eslint-disable-line
            const { id } = params; // eslint-disable-line
            return (
                <div>
                    {id}
                </div>
            );
        },
        key: 'project',
    },
    {
        path: '/projects',
        component: Projects,
        key: 'Projects'
    }
];

export default routes;
