import React, { useEffect } from "react";
import "./DownButton.css";

export default function DownButton({ theme }) {
  // Scroll down to bottom
  function goDownEvent() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  // Show/hide button based on scroll position
  function scrollFunction() {
    const btnDown = document.getElementById("downButton");
    if (!btnDown) return;

    // If near bottom, hide button
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 50) {
      btnDown.style.visibility = "hidden";
    } else {
      btnDown.style.visibility = "visible";
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  const onMouseEnter = (color, bgColor) => {
    const btnDown = document.getElementById("downButton");
    if (btnDown) {
      btnDown.style.color = color;
      btnDown.style.backgroundColor = bgColor;
    }
    const arrow = document.getElementById("downArrow");
    if (arrow) {
      arrow.style.color = color;
      arrow.style.backgroundColor = bgColor;
    }
  };

  const onMouseLeave = (color, bgColor) => {
    const btnDown = document.getElementById("downButton");
    if (btnDown) {
      btnDown.style.color = color;
      btnDown.style.backgroundColor = bgColor;
    }
    const arrow = document.getElementById("downArrow");
    if (arrow) {
      arrow.style.color = color;
      arrow.style.backgroundColor = bgColor;
    }
  };

  return (
    <div
      onClick={goDownEvent}
      id="downButton"
      style={{
        color: theme.body,
        backgroundColor: theme.text,
        border: `solid 1px ${theme.text}`,
        cursor: "pointer",
      }}
      title="Go down"
      onMouseEnter={() => onMouseEnter(theme.text, theme.body)}
      onMouseLeave={() => onMouseLeave(theme.body, theme.text)}
    >
      <i className="fas fa-arrow-down" id="downArrow" aria-hidden="true" />
    </div>
  );
}