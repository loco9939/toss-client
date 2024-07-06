import Current_asset from '@/assets/current_asset.png';
import Edit_asset from '@/assets/edit_asset.png';
import Yearly_assets from '@/assets/yearly_assets.png';
import styled from 'styled-components';

const HeadingBox = styled.div`
  background: linear-gradient(
    #fff,
    ${props => props.theme.colors['toss-lightblue']},
    ${props => props.theme.colors['bg-color']}
  );
`;

const Heading = styled.h1`
  margin: auto;
  padding-block: 17rem;
  text-align: center;
  width: 60rem;
  color: #000000;
  font-family: ${props => props.theme.font.bold};
  font-size: 6rem;
  line-height: 1.5;

  span {
    color: ${props => props.theme.colors['text-primary']};
  }
`;

const ParagraphGrayContainer = styled.div`
  background-color: ${props => props.theme.colors['bg-color']};
  text-align: center;
`;

const Img = styled.img`
  width: 300px;
`;

const ParagraphGrayBox = styled.div`
  max-width: 1140px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 2rem;
  font-size: ${props => props.theme.fontSize.xl};
  background-color: ${props => props.theme.colors['bg-color']};

  p {
    line-height: 1.5;

    span {
      padding-bottom: 0.4rem;
      border-bottom: 2px solid ${props => props.theme.colors['toss-yellow']};
    }
  }
`;

const ParagraphBoxContainer = styled.div`
  text-align: center;
  background-color: ${props => props.theme.colors['bg-color']};
`;

const ParagraphBox = styled.div`
  max-width: 1140px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 2rem;
  font-size: ${props => props.theme.fontSize.xl};
  background-color: ${props => props.theme.colors['bg-color']};

  p {
    line-height: 1.5;
  }
`;

const Content = () => {
  return (
    <main>
      <HeadingBox>
        <Heading>
          나만의 자산관리 <br />
          <span>토스 포트폴리오</span>로 한번에
        </Heading>
      </HeadingBox>
      <ParagraphGrayContainer>
        <ParagraphGrayBox>
          <p>
            각 카테고리별 자산의 최근 6개월간 동향을 <br />
            비교하고 나만의 미래의 투자 계획을 세워보세요.
          </p>
          <Img src={Current_asset} alt='현재 자산 페이지 스크린샷' />
        </ParagraphGrayBox>
      </ParagraphGrayContainer>
      <ParagraphBoxContainer>
        <hr />
        <ParagraphBox>
          <Img src={Yearly_assets} alt='년도별 자산 페이지 스크린샷' />
          <p>
            해당 년도의 월별 자산을 한눈에 관리하고 <br />
            과거의 자산 내역도 기록해보세요.
          </p>
        </ParagraphBox>
      </ParagraphBoxContainer>
      <ParagraphGrayContainer>
        <hr />
        <ParagraphGrayBox>
          <p>
            <span>입출금, 저축, 투자, 연금, 부채 등</span> <br />
            나만의 자산 포트폴리오를 월별로 <br />
            기록하고 비교해보세요.
          </p>
          <Img src={Edit_asset} alt='자산 수정 페이지 스크린샷' />
        </ParagraphGrayBox>
      </ParagraphGrayContainer>
    </main>
  );
};

export default Content;
