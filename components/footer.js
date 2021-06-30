class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="footer mt-auto py-3">
        <div class="container">
          <ul>
            <li><a href="https://www.facebook.com/joi.willi.web/"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
            <li><a href="https://www.instagram.com/joi.willi.web/"><i class="fa fa-instagram" aria-hidden="true"></a></i></li>
            <li><a href="https://www.linkedin.com/in/joi-willi/"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);