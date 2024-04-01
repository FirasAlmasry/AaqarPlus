// ----------------------------------------------------------------------

// Define more types here
const FORMAT_PDF = ['pdf'];
const FORMAT_TEXT = ['txt'];
const FORMAT_PHOTOSHOP = ['psd'];
const FORMAT_WORD = ['doc', 'docx'];
const FORMAT_EXCEL = ['xls', 'xlsx'];
const FORMAT_ZIP = ['zip', 'rar', 'iso'];
const FORMAT_ILLUSTRATOR = ['ai', 'esp'];
const FORMAT_POWERPOINT = ['ppt', 'pptx'];
const FORMAT_AUDIO = ['wav', 'aif', 'mp3', 'aac'];
const FORMAT_IMG = ['jpg', 'jpeg', 'gif', 'bmp', 'png', 'svg'];
const FORMAT_VIDEO = ['m4v', 'avi', 'mpg', 'mp4', 'webm'];

const iconUrl = (icon) => `/assets/icons/files/${icon}.svg`;

// ----------------------------------------------------------------------

export function fileFormat(fileUrl) {
  let format;

  switch (fileUrl?.includes(fileTypeByUrl(fileUrl))) {
    case FORMAT_TEXT.includes(fileTypeByUrl(fileUrl)):
      format = 'txt';
      break;
    case FORMAT_ZIP.includes(fileTypeByUrl(fileUrl)):
      format = 'zip';
      break;
    case FORMAT_AUDIO.includes(fileTypeByUrl(fileUrl)):
      format = 'audio';
      break;
    case FORMAT_IMG.includes(fileTypeByUrl(fileUrl)):
      format = 'image';
      break;
    case FORMAT_VIDEO.includes(fileTypeByUrl(fileUrl)):
      format = 'video';
      break;
    case FORMAT_WORD.includes(fileTypeByUrl(fileUrl)):
      format = 'word';
      break;
    case FORMAT_EXCEL.includes(fileTypeByUrl(fileUrl)):
      format = 'excel';
      break;
    case FORMAT_POWERPOINT.includes(fileTypeByUrl(fileUrl)):
      format = 'powerpoint';
      break;
    case FORMAT_PDF.includes(fileTypeByUrl(fileUrl)):
      format = 'pdf';
      break;
    case FORMAT_PHOTOSHOP.includes(fileTypeByUrl(fileUrl)):
      format = 'photoshop';
      break;
    case FORMAT_ILLUSTRATOR.includes(fileTypeByUrl(fileUrl)):
      format = 'illustrator';
      break;
    default:
      format = fileTypeByUrl(fileUrl);
  }

  return format;
}

// ----------------------------------------------------------------------

export function fileThumb(fileUrl) {
  let thumb;

  switch (fileFormat(fileUrl)) {
    case 'folder':
      thumb = iconUrl('ic_folder');
      break;
    case 'txt':
      thumb = iconUrl('ic_txt');
      break;
    case 'zip':
      thumb = iconUrl('ic_zip');
      break;
    case 'audio':
      thumb = iconUrl('ic_audio');
      break;
    case 'video':
      thumb = iconUrl('ic_video');
      break;
    case 'word':
      thumb = iconUrl('ic_word');
      break;
    case 'excel':
      thumb = iconUrl('ic_excel');
      break;
    case 'powerpoint':
      thumb = iconUrl('ic_power_point');
      break;
    case 'pdf':
      thumb = iconUrl('ic_pdf');
      break;
    case 'photoshop':
      thumb = iconUrl('ic_pts');
      break;
    case 'illustrator':
      thumb = iconUrl('ic_ai');
      break;
    case 'image':
      thumb = iconUrl('ic_img');
      break;
    default:
      thumb = iconUrl('ic_file');
  }
  return thumb;
}

// ----------------------------------------------------------------------

export function fileTypeByUrl(fileUrl = '') {
  return (fileUrl && fileUrl.split('.').pop()) || '';
}

// ----------------------------------------------------------------------

export function fileNameByUrl(fileUrl) {
  return fileUrl.split('/').pop();
}
const url = 'https://aqarbackend.revampbrands.com/storage/'
// ----------------------------------------------------------------------
export function fileData(imagePath) {
  
  // If imagePath?.image is a string, it's a URL, so return the data accordingly
  if (typeof imagePath?.image === 'string' || typeof imagePath?.file === 'string') {
    let key, preview, name, type;
    if (typeof imagePath?.image === 'string') {
      // If imagePath?.image exists and it's a string, use it
      key = url + imagePath?.image;
      preview = url + imagePath?.image;
      name = fileNameByUrl(url + imagePath?.image);
      type = fileTypeByUrl(url + imagePath?.image);
    } else if (typeof imagePath?.file === 'string') {
      // If imagePath?.file exists and it's a string, use it
      key = url + imagePath?.file;
      preview = url + imagePath?.file;
      name = fileNameByUrl(url + imagePath?.file);
      type = fileTypeByUrl(url + imagePath?.file);
    }

    return { key, preview, name, type };
  }

  // If imagePath is an object, it's a file, so return the data accordingly
  if (typeof imagePath === 'object' && imagePath !== null) {
    return {
      key: imagePath?.preview ?? '',
      name: imagePath?.name ?? '',
      size: imagePath?.size ?? '',
      path: imagePath?.path ?? '',
      type: imagePath?.type ?? '',
      preview: imagePath?.preview ?? '',
      lastModified: imagePath?.lastModified ?? '',
      lastModifiedDate: imagePath?.lastModifiedDate ?? '',
    };
  }

  // If imagePath is neither a string nor an object, return an empty object
  return {};
}