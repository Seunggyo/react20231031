import style from "../style/mystyle.module.css";

export function MyText() {
  return (
    <div>
      <h1 className={[style.error, style.special, style.coffee].join(" ")}>
        Lorem ipsum dolor sit amet.
      </h1>
    </div>
  );
}
