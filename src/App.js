function App() {
  return (
      <div>
        <MyComponent1/>
        <MyComponent2/>
      </div>
  );
}

function MyComponent1() {
  return (
      <div>
        <h1>Hello component</h1>
      </div>
  );
}

function MyComponent2() {
  return (
      <>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
          aspernatur consequatur ipsa necessitatibus sed sunt. Accusamus cumque
          ducimus eligendi error harum illo ipsam perspiciatis quae, quibusdam
          sint temporibus ut voluptatum.</p>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad
            blanditiis dolore dolorem ex explicabo illo in labore maiores non
            officia repellat, sit voluptas! Ab optio recusandae repellat. In,
            neque!
          </li>
          <li>Atque dicta eos pariatur tempore. Ab ad adipisci consequatur,
            dignissimos dolore eius eligendi ex facere fugit libero nulla
            numquam odit omnis pariatur repellat reprehenderit sapiente ut
            veniam vero voluptatum? Rerum?
          </li>
          <li>A ad aliquam blanditiis consectetur consequatur cupiditate
            delectus deleniti eius enim excepturi exercitationem explicabo,
            fugit ipsum iste minima modi obcaecati quasi quisquam quod saepe
            suscipit vel voluptate. Incidunt nihil, veniam.
          </li>
        </ul>
      </>
  );
}

export default App;
