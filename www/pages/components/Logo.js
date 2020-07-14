import styled from 'styled-components';

const StyledLogo = styled.div`
  margin: 1rem auto;
  max-width: 300px;

  img {
    width: 100%;
  }
`;

const Logo = (props) => {
  return (
    <StyledLogo>
      <img src='/logo.png' />
    </StyledLogo>
  );
};
export default Logo;
