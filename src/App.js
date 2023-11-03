function App() {
  function handleClick(e) {
    // 브라우저가 해야하는 기본 기능을 취소함
    e.preventDefault();
    console.log("다른일을 시킴");
  }

  function handleSubmit(e) {
    // 기본기능 취소
    e.preventDefault();
    console.log("다른일을 시킴");
  }

  return (
    <>
      <a href="https://www.naver.com" onClick={handleClick}>
        네이버
      </a>
      <div>
        <form action="https://search.daum.net/search" onSubmit={handleSubmit}>
          <input type="text" name="q" />
          <button>검색</button>
        </form>
      </div>
    </>
  );
}

export default App;
