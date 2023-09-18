const getCroppedImgUrl = (url: string) => {
  if (!url) return null;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const croppedUrl = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return croppedUrl;
};
export default getCroppedImgUrl;
