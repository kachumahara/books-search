import React from "react";

// Exporting the Container, Row and Col components from this site.

// This Container component allows us to use bootstrap container without worrying about class names

export function Container({ fluid, children }) {
  return <div className={`container${fuild ? "-fluid" : ""}`}>{children}</div>;
}

// THis Row components les us use a bootstrap row without having to think about class names

export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This component lets us size bootstrap colums with less syntax // e.g <Col size="md-12"> instead of <div className="col-md-12">

export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map((size) => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}
