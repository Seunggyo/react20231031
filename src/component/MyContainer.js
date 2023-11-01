import css from "../style/style1.module.css";

export function MyContainer() {
  return (
    <div>
      <h1 className={`${css.boxClass} ${css.error} ${css.note}`}>
        Lorem ipsum dolor sit amet.
      </h1>
      <h1 className={[css.boxClass, css.error, css.note].join()}>
        Lorem ipsum dolor sit amet.
      </h1>
    </div>
  );
}
