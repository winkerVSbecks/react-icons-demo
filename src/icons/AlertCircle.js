import * as React from "react";
import styled from "styled-components";

const SVG = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="alert-circle_svg__feather alert-circle_svg__feather-alert-circle"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M12 8v4M12 16h.01" />
  </svg>
);

const SvgAlertCircle = styled(SVG)`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  color: ${(props) => (props.color ? props.color : "#ccc")};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgAlertCircle;
