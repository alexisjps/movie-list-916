import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Batch #916", "Amal, Morad, Nzila, Houssam and Yassine, AMIIINE TOOO"],
      typeSpeed: 50,
      loop: true
    })
  }
}