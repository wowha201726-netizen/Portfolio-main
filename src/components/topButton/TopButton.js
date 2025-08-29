import React, { useEffect } from "react";
import "./TopButton.css";

export default function TopButton({ theme }) {
  function goUpEvent() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function scrollFunction() {
    const btnTop = document.getElementById("topButton");
    if (!btnTop) return;

    if (window.scrollY > 50) {
      btnTop.style.visibility = "visible";
    } else {
      btnTop.style.visibility = "hidden";
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  const onMouseEnter = (color, bgColor) => {
    const btnTop = document.getElementById("topButton");
    if (btnTop) {
      btnTop.style.color = color;
      btnTop.style.backgroundColor = bgColor;
    }
    const arrow = document.getElementById("topArrow");
    if (arrow) {
      arrow.style.color = color;
      arrow.style.backgroundColor = bgColor;
    }
  };

  const onMouseLeave = (color, bgColor) => {
    const btnTop = document.getElementById("topButton");
    if (btnTop) {
      btnTop.style.color = color;
      btnTop.style.backgroundColor = bgColor;
    }
    const arrow = document.getElementById("topArrow");
    if (arrow) {
      arrow.style.color = color;
      arrow.style.backgroundColor = bgColor;
    }
  };

  return (
    <div
      onClick={goUpEvent}
      id="topButton"
      style={{
        color: theme.body,
        backgroundColor: theme.text,
        border: `solid 1px ${theme.text}`,
        cursor: "pointer",
      }}
      title="Go up"
      onMouseEnter={() => onMouseEnter(theme.text, theme.body)}
      onMouseLeave={() => onMouseLeave(theme.body, theme.text)}
    >
      <i className="fas fa-arrow-up" id="topArrow" aria-hidden="true" />
    </div>
  );
}