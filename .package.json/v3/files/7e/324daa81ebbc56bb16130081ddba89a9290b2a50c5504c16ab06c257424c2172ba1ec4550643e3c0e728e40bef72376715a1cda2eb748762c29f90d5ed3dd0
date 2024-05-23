import squooshService from "astro/assets/services/squoosh";
import { baseDevService } from "./shared-dev-service.js";
const service = {
  ...baseDevService,
  getHTMLAttributes(options, serviceOptions) {
    const { inputtedWidth, ...props } = options;
    if (inputtedWidth) {
      props.width = inputtedWidth;
    }
    return squooshService.getHTMLAttributes ? squooshService.getHTMLAttributes(props, serviceOptions) : {};
  },
  transform(inputBuffer, transform, serviceOptions) {
    transform.format = transform.src.endsWith("svg") ? "svg" : "webp";
    return squooshService.transform(inputBuffer, transform, serviceOptions);
  }
};
var squoosh_dev_service_default = service;
export {
  squoosh_dev_service_default as default
};
