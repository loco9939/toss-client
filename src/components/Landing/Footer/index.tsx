import styled from 'styled-components';

const Container = styled.footer`
  font-size: ${props => props.theme.fontSize.sm};
  padding: 1.2rem;
  color: ${props => props.theme.colors['text-secondary']};
  background-color: ${props => props.theme.colors['bg-secondary']};

  a:visited {
    color: ${props => props.theme.colors['toss-blue']};
  }
`;

const InnerFooter = styled.div`
  max-width: 1140px;
  margin: auto;
`;

const SocialMedia = styled.div`
  margin-block: 1rem;
  ul {
    display: flex;
    gap: 0.8rem;
    margin-top: 0.4rem;
  }
`;

const Contact = styled.div`
  h4 {
    margin-bottom: 0.4rem;
  }
`;

const Footer = () => {
  return (
    <Container>
      <InnerFooter>
        <p>© 2024 [Tossfolio]. All rights reserved.</p>

        <SocialMedia>
          <h4>SNS</h4>
          <ul>
            <li>
              <a href='https://wix9939.tistory.com/' target='_blank'>
                블로그
              </a>
            </li>
            <li>
              <a href='https://github.com/loco9939' target='_blank'>
                github
              </a>
            </li>
          </ul>
        </SocialMedia>

        <Contact>
          <h4>연락처</h4>
          <p>이메일: kls9939@naver.com</p>
        </Contact>
      </InnerFooter>
    </Container>
  );
};

export default Footer;
