class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="footer mt-auto py-3">
        <div class="container">
          <ul>
            <li><a href="https://github.com/grailwilly"><i class="fa fa-github-square" aria-hidden="true"></i></a></li>
            <li><a href="https://www.linkedin.com/in/grailwilly/"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);