import imagePlaceholder from '../assets/image-placeholder.svg'
const getCroppedUrl = (url : string) => {
    if(!url)  return imagePlaceholder;
    const target = 'media/';
    const index = url.indexOf(target) + target.length; 
    return url.slice(0 , index) + 'resize/640/-/' + url.slice(index);
}

export default getCroppedUrl;