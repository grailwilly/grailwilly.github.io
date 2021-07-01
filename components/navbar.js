class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-md navbar-light fixed-top">
        <a href="/" class="navbar-brand">Joi Willi</a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ml-auto">
            // <a href="./blog.html" class="nav-item nav-link">Blog</a>
            // <a href="./portfolio.html" class="nav-item nav-link">Portfolio</a>
            // <a href="./contact.html" class="nav-item nav-link">Contact</a>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('navbar-component', Navbar);
