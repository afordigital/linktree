import { isESMImportedImage, sharedValidateOptions } from "./shared.js";
const service = {
  validateOptions: (options, serviceOptions) => sharedValidateOptions(options, serviceOptions.service.config, "production"),
  getHTMLAttributes(options) {
    const { inputtedWidth, ...props } = options;
    if (inputtedWidth) {
      props.width = inputtedWidth;
    }
    let targetWidth = props.width;
    let targetHeight = props.height;
    if (isESMImportedImage(props.src)) {
      const aspectRatio = props.src.width / props.src.height;
      if (targetHeight && !targetWidth) {
        targetWidth = Math.round(targetHeight * aspectRatio);
      } else if (targetWidth && !targetHeight) {
        targetHeight = Math.round(targetWidth / aspectRatio);
      } else if (!targetWidth && !targetHeight) {
        targetWidth = props.src.width;
        targetHeight = props.src.height;
      }
    }
    const { src, width, height, format, quality, ...attributes } = props;
    return {
      ...attributes,
      width: targetWidth,
      height: targetHeight,
      loading: attributes.loading ?? "lazy",
      decoding: attributes.decoding ?? "async"
    };
  },
  getURL(options) {
    const fileSrc = isESMImportedImage(options.src) ? removeLeadingForwardSlash(options.src.src) : options.src;
    const searchParams = new URLSearchParams();
    searchParams.append("url", fileSrc);
    options.width && searchParams.append("w", options.width.toString());
    options.quality && searchParams.append("q", options.quality.toString());
    return "/_vercel/image?" + searchParams;
  }
};
function removeLeadingForwardSlash(path) {
  return path.startsWith("/") ? path.substring(1) : path;
}
var build_service_default = service;
export {
  build_service_default as default
};
