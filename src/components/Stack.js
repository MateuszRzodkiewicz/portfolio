import "../css/stack.css";
import React, { useEffect, useState } from "react";
import css from "../pictures/css.png";
import react from "../pictures/react.png";
import js from "../pictures/js.png";
import ts from "../pictures/ts.png";

function Stack() {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [jsLogo, setJsLogo] = useState("second");
  const [reactLogo, setReactLogo] = useState("");
  const [tsLogo, setTsLogo] = useState("");
  const [cssLogo, setCssLogo] = useState("");
  const [offsetHeight, setOffsetHeight] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
      let offsetHeightAbout = document.getElementById("About").offsetHeight;
      let offsetHeightMenu = document.getElementById("Menu").offsetHeight;
      let offsetHeightHeader =
        document.getElementById("App-HeaderId").offsetHeight;
      setOffsetHeight(
        offsetHeightAbout + offsetHeightHeader + offsetHeightMenu
      );
    });
  }, []);

  useEffect(() => {
    if (scrollY > offsetHeight) {
      setJsLogo("first");
    }
    if (scrollY <= offsetHeight + 300 && scrollY > offsetHeight) {
      setJsLogo("fromRight");
    }
    if (scrollY > offsetHeight + 300) {
      setJsLogo("goLeft");
      setReactLogo("fromBottom");
    } else setReactLogo("");
    if (scrollY > offsetHeight + 600) {
      setReactLogo("goTop");
      setTsLogo("fromRight");
    } else setTsLogo("");
    if (scrollY > offsetHeight + 900) {
      setTsLogo("goLeft");
      setCssLogo("fromTop");
    } else setCssLogo("");
    if (scrollY > offsetHeight + 1200) {
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
          className={`${reactLogo} second ${
            scrollY > offsetHeight + 300 && "first"
          } sizePng`}
        />
        <img
          src={ts}
          alt="js"
          className={`${tsLogo} second ${
            scrollY > offsetHeight + 600 && "first"
          } sizePng`}
        />
        <img
          src={css}
          alt="js"
          className={`${cssLogo} second ${
            scrollY > offsetHeight + 900 && "first"
          } sizePng`}
        />
      </div>
    </div>
  );
}

export default Stack;
