import "../css/stack.css";
import React, { useEffect, useState } from "react";
import css from "../pictures/css.png";
import react from "../pictures/react.png";
import js from "../pictures/js.png";
import ts from "../pictures/ts.png";

function Stack() {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [jsLogo, setJsLogo] = useState("first");
  const [reactLogo, setReactLogo] = useState("");
  const [tsLogo, setTsLogo] = useState("");
  const [cssLogo, setCssLogo] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  }, []);

  useEffect(() => {
    if (scrollY > 1400) {
      setJsLogo("first");
    }
    if (scrollY <= 1700 && scrollY > 1400) {
      setJsLogo("fromRight");
    }
    if (scrollY > 1700) {
      setJsLogo("goLeft");
      setReactLogo("fromBottom");
    } else setReactLogo("");
    if (scrollY > 2000) {
      setReactLogo("goTop");
      setTsLogo("fromRight");
    } else setTsLogo("");
    if (scrollY > 2300) {
      setTsLogo("goLeft");
      setCssLogo("fromTop");
    } else setCssLogo("");
    if (scrollY > 2600) {
    }
  }, [scrollY]);

  return (
    <div className="sticky">
      <div id="Stack">
        <div
          className="divForH1"
          style={{
            position: "absolute",
            top: "0px",
            letterSpacing: "1px",
          }}
        >
          <h1 className="StackH1">Stack technologiczny</h1>
        </div>

        <img src={js} alt="js" className={`${jsLogo} sizePng`} />
        <img
          src={react}
          alt="js"
          className={`${reactLogo} second ${scrollY > 1700 && "first"} sizePng`}
        />
        <img
          src={ts}
          alt="js"
          className={`${tsLogo} second ${scrollY > 2000 && "first"} sizePng`}
        />
        <img
          src={css}
          alt="js"
          className={`${cssLogo} second ${scrollY > 2300 && "first"} sizePng`}
        />
      </div>
    </div>
  );
}

export default Stack;
