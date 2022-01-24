class Homepage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="hero-banner">
        <div class="container hero-content">
          <div class="profile-image">
            <image src="./images/profile_1.jpg" />
          </div>
          <div class="hero-text">
            <h1>Keep Moving Forward!</h1>
            <h3>Why it's good to do hard things</h3>
            <p>Strangely, life gets harder when you try to make it easy. Exercising might be hard, but never moving makes life harder. Uncomfortable
            conversations are hard, but avoiding every conflict is harder. Mastering your craft is hard, but having no skills is harder. Easy has a cost.
            <i>- James Clear</i></p>
          </div>
        </div>
      </div>
      <div class="about-me">
        <div class="container">
          <div class="section learner">
            <h2>A lifelong learner</h2>
            <p>I'm always curios and trying new things.</p>
              <ul class="life-lists">
                <li>
                  <h5>Data Analytics</h5>
                  <p>Currently enrolled in Google Data Analytics. I believe that "DATA IS THE FUTURE and DATA IS EVERYWHERE" . I want to develop my analytical thinking, understand how data works, and to have a good data driven decision making.</p>
                </li>
                <li>
                  <h5>Frontend Developer</h5>
                  <p>Mastering HTML, CSS, JavaScript. I'm focusing in learning React.js</p>
                </li>
                <li>
                  <h5>E-commerce</h5>
                  <p>I'm learning liquid code for shopify theme development.</p>
                </li>
                <li>
                  <h5>Blockchain</h5>
                  <p>Web3, NFT, Cryptocurrency, etc..</p>
                </li>
              </ul>
          </div>
          <div class="section work-history">
            <h2>A short-term worker</h2>
            <p>When your in 20's, I believe that you should experience all type of works available.</p>
            <ul class="life-lists">
              <li>
                <h5>Business Administrator</h5>
                <p>For 2 years, I managed a small office from organizing files, arranging meetings, cold calling, and marketing </p>
              </li>
              <li>
                <h5>Junior Web Developer</h5>
                <p>For almost 2 years, my roles are to maintain a website by updating contents or changing/adding functions, learning new technology or programming language, and contribute by sharing ideas and testing final projects</p>
              </li>
              <br/><br/>
              <li>
                <h5>Investment Data Analysts</h5>
                <p>In just 6 months, It didn't work well for me. I got a three poor performance evaluation. Working here made me realized that I lacked on being detail oriented, thinking creatively how to solve problems, communication, and working as a team.
                  A lot of mistakes but its either you LEARN, EARN, or QUIT. But still, I'm grateful to experience and work with smart people in here.</p>
              </li>
              <li>
                <h5>Full time trader</h5>
                <p>If I'm not coding, I'm trading!</p>
              </li>
            </ul>
          </div>
          <div class="section interests">
            <h2>A boring person</h2>
            <p>I love doing boring stuffs.</p>
            <ul class="life-lists">
              <li>
                <h5>Investing</h5>
                <p>Making and losing money in stocks, crypto, and venture capital.</p>
              </li>
              <li>
                <h5>Reading</h5>
                <p>I like to read random things about self-improvement, finance, and technology.</p>
              </li>
              <li>
                <h5>Coding</h5>
                <p>Transforming an idea into reality through coding.</p>
              </li>
              <li>
                <h5>Agriculture</h5>
                <p>During lockdown due to covid-19, I started to re-grow from kitchen scraps. It ignites my interest in plants that I built my own tower garden using PVC. I tried planting microgreens and it grew successfully. I'll be trying indoor farming like hydroponics soon!</p>
              </li>
              <li>
                <h5>Hiking</h5>
                <p>Love the outdoors! I tried camping for 2 days & 1 night and so proud that I survived the wilderness</p>
              </li>
            </ul>
          </div>
          <div class="section goal">
            <h2>I'm still in the middle</h2>
            <p>I'm determined to prove I can.</p>
            <ul class="life-lists">
              <li>
                <h5>Software Developer</h5>
                <p>I can't label myself yet as one but I want to claim it. This is the job I want to do. I don't have a computer science degree. Because I wanted it, I joined a coding bootcamp and I'm still learning and improving my skills.</p>
              </li>
              <li>
                <h5>Start up</h5>
                <p>I want to establish my own company related to agriculture or finance.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('homepage-component', Homepage);