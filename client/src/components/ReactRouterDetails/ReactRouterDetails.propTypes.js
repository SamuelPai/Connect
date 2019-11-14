import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

export const ReactRouterDetailsPropTypes = {
    propTypes: {
        location: ReactRouterPropTypes.location.isRequired,
        history: ReactRouterPropTypes.history.isRequired,
        match: ReactRouterPropTypes.match.isRequired,
    },
    defaultProps: {}
};
