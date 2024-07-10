import styled from 'styled-components';

const StyledSpinner = styled.span.attrs({
  role: 'spinner',
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4.8rem;
  height: 4.8rem;
  border: 0.5rem solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
`;

const Spinner = () => {
  return <StyledSpinner />;
};

export default Spinner;
