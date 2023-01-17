import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function Button(props) {
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
  if (props.isLarge) className.push("btn-lg");
  if (props.isSmall) className.push("btn-sm");
  if (props.isBlock) className.push("btn-block");
  if (props.hasShadow) className.push("btn-shadow");

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.isDisabled || props.isLoading){
    if (props.isDisabled) className.push("disabled"); // button nya gak bisa di pencet gak bisa di tekan gk bisa diapa apain kayagitu
  
    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(" ")}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }

  return (
    <button
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
}

// pada line 26 setelah to nya ok : props.children saya mau balikin children yang ada
// <> </> versi terbaru ini namanya react fragment  <React.Fragment> <React.Fragment/> ini React Fragment versi lama
// fungsi noopener dan norefferer untuk SEO Search Engine Optimization
// meskipun kalian tidak menginput noopener dan norefferer nanti saat develop dapat target blank akan muncul warning di console log nya

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]), // jadi oneOf ini kalo kalian terbiasa di programming mirip seperti enum hanya terima prop button atau link
  onClick: propTypes.func,
  href: propTypes.string,
  target: propTypes.string,
  className: propTypes.string,
  isExternal: propTypes.bool,
  isDisabled: propTypes.bool, // unutuk pengecekan buttn itu disable atau link juga disable
  isLoading: propTypes.bool, // isLoading button kaya ada animasi sedikit
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  hasShadow: propTypes.bool,
};
