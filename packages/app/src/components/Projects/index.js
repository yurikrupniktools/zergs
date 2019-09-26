import Loadable from '../Loadable';

const Projects = Loadable({
    loader: () => import(/* webpackChunkName: "projects" */ './Projects'),
});

export default Projects;
