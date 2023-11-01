function App() {
  return (
    <div>
      <MyText
        style={{ color: "red", backgroundColor: "darkblue", fontSize: "80px" }}
        value={"asdf"}
      />
    </div>
  );
}

function MyText(props) {
  return (
    <div style={props.style}>
      <p>{props.value}</p>
    </div>
  );
}

export default App;
