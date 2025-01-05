import React from "react";

const SubmitIco = ({
  width,
  height,
  color,
  onClick
}: {
  width: number;
  height: number;
  color?: string;
  onClick?: () => void
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="cursor-pointer"

      onClick={onClick}
    >
      <path
        fill={color ? color : "#2F4858"}
        fill-rule="evenodd"
        d="M2.345 2.245a1 1 0 0 1 1.102-.14l18 9a1 1 0 0 1 0 1.79l-18 9a1 1 0 0 1-1.396-1.211L4.613 13H10a1 1 0 1 0 0-2H4.613L2.05 3.316a1 1 0 0 1 .294-1.071z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

export default SubmitIco;
