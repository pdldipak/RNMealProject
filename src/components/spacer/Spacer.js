import React from "react";
import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant};
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};


// export function Spacer({ ...props }) {
//   return <SpacerStyle {...props}>{props.children}</SpacerStyle>;
// }

// const SpacerStyle = styled.View`
//   ${({
//     TopSmall,
//     TopMedium,
//     TopLarge,
//     LeftSmall,
//     LeftMedium,
//     LeftLarge,
//     RightSmall,
//     RightMedium,
//     RightLarge,
//     BottomSmall,
//     BottomMedium,
//     BottomLarge,
//   }) => {
//     switch (true) {
//       case TopSmall:
//         return `margin-top: ${(props) => props.theme.space[1]}`;
//       case TopMedium:
//         return `margin-top:${(props) => props.theme.space[2]}`;
//       case TopLarge:
//         return `margin-top: ${(props) => props.theme.space[3]}`;
//       case LeftSmall:
//         return `margin-left: ${(props) => props.theme.space[1]}`;
//       case LeftMedium:
//         return `margin-left:${(props) => props.theme.space[2]}`;
//       case LeftLarge:
//         return `margin-left: ${(props) => props.theme.space[3]}`;
//       case RightSmall:
//         return `margin-right: ${(props) => props.theme.space[1]}`;
//       case RightMedium:
//         return `margin-right:${(props) => props.theme.space[2]}`;
//       case RightLarge:
//         return `margin-right: ${(props) => props.theme.space[3]}`;
//       case BottomSmall:
//         return `margin-bottom: ${(props) => props.theme.space[1]}`;
//       case BottomMedium:
//         return `margin-bottom:${(props) => props.theme.space[2]}`;
//       case BottomLarge:
//         return `margin-bottom: ${(props) => props.theme.space[3]}`;
//       default:
//         return `margin:${(props) => props.theme.space[0]}`;
//     }
//   }}
// `;


