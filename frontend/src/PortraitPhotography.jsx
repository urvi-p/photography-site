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
    </div>
  );
}

export default PortraitPhotography;

PortraitPhotography.propTypes = {
  photoData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
