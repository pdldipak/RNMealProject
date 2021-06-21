import styled from 'styled-components/native';

export const Wrapper = styled.View``;

export const Text = styled.Text`
  text-align: ${(props) => props.textAlign ?? 'left'};
  color: ${(props) => props.color ?? 'black'};
  padding: ${(props) => props.padding ?? 0};
  ${({ title, Medium }) => {
    switch (true) {
      case title:
        return `font-size: 28px`;
      case Medium:
        return `font-size:24px`;
      default:
        return `font-size:20px`;
    }
  }}
  ${({ bold, heavy }) => {
    switch (true) {
      case bold:
        return `font-weight:700`;
      case heavy:
        return `font-weight:600`;
      default:
        return `font-weight:500`;
    }
  }};
`;
