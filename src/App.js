function App() {
  // component : html을 감싸고 있는 함수
  // jsx에서 태그 사용시 꼭 태그 종료를 해야함
  // 빈 요소이면 시작 태그에서 종료
  return (
    <div>
      <h1>hello react</h1>
      <h2>HI REACT</h2>
      <p>
        Lorem ipsum dolor. <br />
        Lorem ipsum dolor.
      </p>
      <MyComp />
    </div>
  );
}

// built-in component 는 소 문자로 시작
// component 명을 작성할 때는 항상 대 문자로 시작
// return 문을 가져야 함
// return 값은 보통 JSX 코드

function MyComp() {
  // return 에 jsx 코드 작성 가능
  // 꼭 하나의 root tag 가 존재 하여야 한다.
  // return 값이 여러 줄이면 ()로 감싸기
  // root tag 가 필요 없다면 fragment 를 사용
  // fragment : <> 안에 아무 것도 안 적혀 있는 코드

  // jsx 에서 주석 사용 법
  // {/*  */}
  return (
    <div>
      <h1>HI COMPONENT</h1>
      <h2>hello</h2>
    </div>
  );
}

export default App;
