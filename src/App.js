function MyHeader(props) {
  return (
    <div style={{ color: props.color, background: props.background }}>
      <h1>{props.text}</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyHeader color={"white"} background={"black"} text={"내가 만든 제목"} />
      <MyHeader
        color={"orange"}
        background={"skyblue"}
        text={"다시 만든 제목"}
      />
    </div>
  );
}

export default App;
