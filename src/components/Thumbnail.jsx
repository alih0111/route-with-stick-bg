import React from "react";

export default function thumbnail({ color }) {
  return (
    <div
      style={{
        width: 50,
        height: 50,
        background: color,
      }}
    ></div>
  );
}
