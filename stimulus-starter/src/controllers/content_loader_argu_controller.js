import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log(this.element);
  }

  load({ params }) {
    fetch(params.url)
      .then((response) => response.text())
      .then((html) => (this.element.innerHTML = html));
  }
}
