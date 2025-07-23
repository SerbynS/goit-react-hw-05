import { HashLoader } from "react-spinners";

import style from "./Loader.module.css";

export default function Loader() {
  return (
    <>
      <div className={style.backdrop}>
        <HashLoader color="#ffa500" height={50} width={50} />
      </div>
    </>
  );
}
