function MyComp({ text, address, children }) {
  return (
    <>
      <p>{text}</p>
      <p>{address}</p>
      <p>{children}</p>
    </>
  );
}

function App() {
  return (
    <>
      <MyComp text={"hello"} address={"seoul"}>
        some contents 다른 컴포넌트가 있을수 있음
      </MyComp>
    </>
  );
}

export default App;
