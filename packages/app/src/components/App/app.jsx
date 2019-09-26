import React from 'react';
import PropTypes from 'prop-types';
import Providers from './providers';
import Layout from './layout';

const App = ({ routes, providers }) => (
    <Providers providers={providers}>
        <Layout routes={routes} />
    </Providers>
);

App.defaultProps = {
    providers: []
};

App.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    providers: PropTypes.arrayOf(PropTypes.func)
};

export default App;
