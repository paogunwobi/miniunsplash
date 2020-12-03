import Masonry from "masonry-layout";

class Masonry {
  grid = document.querySelector(".grid");
  msnry = new Masonry(this.grid, {
    itemSelector: ".grid-item",
    columnWidth: 200
  });
}
export default new Masonry();
