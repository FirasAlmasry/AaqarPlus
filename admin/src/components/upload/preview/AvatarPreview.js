import PropTypes from 'prop-types';
//
import Image from '../../image';

// ----------------------------------------------------------------------

AvatarPreview.propTypes = {
  file: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
export default function AvatarPreview({ file }) {
  
  if (!file) {
    return null;
  }
  
  const imgUrl = typeof file === 'string' ? `https://aqarbackend.revampbrands.com/storage/${file}` : file.preview;
  
  // const url = `https://aqarbackend.revampbrands.com/storage/${imgUrl}`

  return (
    <Image
      alt="avatar"
      src={imgUrl}
      sx={{
        zIndex: 8,
        overflow: 'hidden',
        borderRadius: '50%',
        position: 'absolute',
        width: `calc(100% - 16px)`,
        height: `calc(100% - 16px)`,
      }}
    />
  );
}
