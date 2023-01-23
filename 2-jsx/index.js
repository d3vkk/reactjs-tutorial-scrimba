const navbar = (
  <nav>
    <h1>My Website</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);
console.log(navbar);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(navbar);
