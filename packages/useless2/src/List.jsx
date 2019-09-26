import React from 'react';
import PropTypes from 'prop-types';

// import styles from './style.css';
// import styles from './styles.sass';
// import styles from './tooltip.scss';
// import styles from './list.module.scss';
import Item from './Item/Item';

/**
 * List module.
 * @module @krupnik/list
 *
 * @typedef data
 * @property {array} data
 *
 */
const List = (props) => {
    const { data, type } = props;
    console.log('type', type); // eslint-disable-line
    return (
        <>
            {
                data.map((v) => (<Item key={v._id} item={v} />))
            }
        </>
    );
};

List.defaultProps = {
    data: [],
    type: 'a'
};

List.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        context: PropTypes.string,
    })),
    type: PropTypes.string
};

export default List;
