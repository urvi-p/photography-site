import PropTypes from 'prop-types';
// import PhotoData from './PhotoData';

function ImageInfoDialog(props) {
  const {
    img, title, location,
  } = props;

  /* eslint-disable no-console */
  console.log('Here');
  console.log(img, title, location);
}

export default ImageInfoDialog;

ImageInfoDialog.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
