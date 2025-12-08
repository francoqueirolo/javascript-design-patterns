import { Image } from "./image";
import { Video } from "./video";

export class CreateMedia {
  constructor(type, attributes) {
    const media = { Image, Video };
    const MediaType = media[type];

    return new MediaType(attributes);
  }
}
