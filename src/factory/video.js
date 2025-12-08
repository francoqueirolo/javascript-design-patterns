export class Video {
  constructor(attributes) {
    this.length = attributes.length || 0;
    this.name = attributes.name || "";
  }
}
