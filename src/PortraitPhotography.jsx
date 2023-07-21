import React from 'react';
import PropTypes from 'prop-types';
import PhotoLayout from './PhotoLayout';

function PortraitPhotography(props) {
  const {
    photoData,
  } = props;
  return (
    <div>
      <PhotoLayout photoData={photoData} path="portrait" />
      <p className="copyright">Copyright &copy; 2023 Urvi Patel</p>
    </div>
  );
}

export default PortraitPhotography;

PortraitPhotography.propTypes = {
  photoData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
