import React from 'react';
import Button from '@krupnik/useless1';
import List from '@krupnik/useless2';
import MButton from '@material-ui/core/Button';
// import makeStyles from '@material-ui/core/styles/makeStyles';
// import Tooltip from '../Tooltip';
//
// const darkStyles = makeStyles({
//     tooltip: {
//         color: 'blue',
//         backgroundColor: 'yellow',
//         fontSize: '20px'
//     }
// });
const data = [
    {
        _id: 'a',
    },
    {
        _id: 'b',
    }
];
const Projects = () => (
    <div>
        <h2>
            Projects
        </h2>
        <Button href="void 0;">get projects</Button>
        <MButton href="void 0;">MButton</MButton>
        <List data={data} />
    </div>
);

export default Projects;
