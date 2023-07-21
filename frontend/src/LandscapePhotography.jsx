import React from 'react';
import PropTypes from 'prop-types';
import PhotoLayout from './PhotoLayout';

function LandscapePhotography(props) {
  const {
    photoData,
  } = props;
  return (
    <div>
      <PhotoLayout photoData={photoData} path="landscape" />
      <p className="copyright">Copyright &copy; 2023 Urvi Patel</p>
    </div>
  );
}

export default LandscapePhotography;

LandscapePhotography.propTypes = {
  photoData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
