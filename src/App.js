function App() {
  return (
    <div>
      <MyBox
        text={"텍스트가 많이 있습니다."}
        p={0}
        m={0}
        color={"green"}
        bg={"blue"}
      />
      <MyBox
        text={"텍스트가 전보다 많이 있습니다."}
        p={30}
        m={30}
        color={"blue"}
        bg={"red"}
      />
    </div>
  );
}

function MyBox({ p, m, bg, color, text }) {
  return (
    <div style={{ padding: p, margin: m, color: color, backgroundColor: bg }}>
      <p>{text}</p>
    </div>
  );
}

export default App;
