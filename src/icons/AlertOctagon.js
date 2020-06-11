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
    className="alert-octagon_svg__feather alert-octagon_svg__feather-alert-octagon"
    {...props}
  >
    <path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2zM12 8v4M12 16h.01" />
  </svg>
);

const SvgAlertOctagon = styled(SVG)`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  color: ${(props) => (props.color ? props.color : "#ccc")};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgAlertOctagon;
