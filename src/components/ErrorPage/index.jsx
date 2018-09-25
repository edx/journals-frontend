import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import StatusAlert from '../StatusAlert';

const NotFoundPage = () => (
  <div className="mt-3">
    <Helmet>
      <title>Page Not Found</title>
    </Helmet>
    <div className="text-center py-5">
      <h1>404</h1>
      <p className="lead">Oops, sorry we can&apos;t find that page!</p>
      <p>Either something went wrong or the page doesn&apos;t exist anymore.</p>
    </div>
  </div>
);

const ErrorPage = (props) => {
  const errorMessage = props.message || 'An unknown error has occured.';

  return (
    <div>
      {props.status === 404 ? (
        <NotFoundPage />
      ) : (
        <div>
          <Helmet>
            <title>Error</title>
          </Helmet>
          <div className="row mt-4">
            <div className="col">
              <h1>Error</h1>
              <StatusAlert
                alertType="danger"
                iconClassName={['fa', 'fa-times-circle']}
                message={errorMessage}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ErrorPage.propTypes = {
  status: PropTypes.number,
  message: PropTypes.string,
};

ErrorPage.defaultProps = {
  status: null,
  message: '',
};

export default ErrorPage;
