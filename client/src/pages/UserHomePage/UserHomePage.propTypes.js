import ReactRouterPropTypes from 'react-router-prop-types';

export const UserHomePageProps = {
  propTypes: {
    location: ReactRouterPropTypes.location.isRequired,
    history: ReactRouterPropTypes.history.isRequired,
    match: ReactRouterPropTypes.match.isRequired,
  },
  defaultProps: {}
};
