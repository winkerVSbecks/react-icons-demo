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
    className="activity_svg__feather activity_svg__feather-activity"
    {...props}
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const SvgActivity = styled(SVG)`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  color: ${(props) => (props.color ? props.color : "#ccc")};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgActivity;
