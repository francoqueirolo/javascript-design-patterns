import { CreateMedia } from "./mediaFactory";

export const factory = {
  init: function () {
    const video = new CreateMedia("Video", {
      length: 3.5,
      name: "My video",
    });

    const image = new CreateMedia("Image", {
      width: 100,
      height: 100,
      name: "My image",
    });

    console.log(video);
    console.log(image);
  },
};
