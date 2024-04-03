import styled from "styled-components";
import carousel from "../../assets/video-intro.png";
import drop from "../../assets/choose-file.png";

const Front = () => {
  return (
    <Wrapper>
      <Inner>
        <Carousel>
          <img src={carousel} alt="" />
        </Carousel>
        <File>File Converter</File>
        <Choose>
          <ChooseFile src={drop} alt="" />
        </Choose>
        <Container>
          <Row>
            <Info>
              <Heading>Fast and easy</Heading>
              <Para>
                Just drop your files on the page, choose an output format and
                click "Convert" button. Wait a little for the process to
                complete. We aim to do all our conversions in under 1-2 minutes.
              </Para>
            </Info>
            <Info>
              <Heading>All devices supported</Heading>
              <Para>
                Convertio is browser-based and works for all platforms. There is
                no need to download and install any software.
              </Para>
            </Info>
            <Info>
              <Heading>Custom settings</Heading>
              <Para>
                Most conversion types support advanced options. For example with
                a video converter you can choose quality, aspect ratio, codec
                and other settings, rotate and flip.
              </Para>
            </Info>
          </Row>
          <Row>
            <Info>
              <Heading>In the cloud</Heading>
              <Para>
                Shift all conversions to the cloud, preserving your computer's
                capacity. No local resources are drained, ensuring smooth,
                efficient cloud-based conversions while optimizing your device's
                performance.
              </Para>
            </Info>
            <Info>
              <Heading>Security guaranteed</Heading>
              <Para>
                We delete uploaded files instantly and converted ones after 24
                hours. No one has access to your files and privacy is 100%
                guaranteed. Read more about security.
              </Para>
            </Info>
          </Row>
        </Container>
      </Inner>
    </Wrapper>
  );
};

export default Front;

const Wrapper = styled.div`
  background-color: #f9f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const Inner = styled.div`
  max-width: 1200px;
  background-color: #ffffff;
  /* display: flexbox;
  justify-content: center;
  align-items: center; */

  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Carousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const File = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 30px;
  color: #112d4e;
`;

const Choose = styled.div`
  display: flex;
  background-color: #dbe2ef;
  max-width: 1000px;
  height: 220px;
  justify-content: center;
  align-items: center;
  margin: 20px 100px 80px 100px;

  @media screen and (max-width: 768px) {
    margin: 0px;
  }
`;

const ChooseFile = styled.img``;

const Container = styled.div`
  background-color: #f9f7f7;
  max-width: 900px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin: auto;
  margin-bottom: 50px;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 40px 0px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 0px;
  }
`;

const Info = styled.div`
  max-width: 250px;
  height: auto;

  @media screen and (max-width: 768px) {
    width: calc(100% - 20px); /*Take full width on smaller screens */
    max-width: 100%; /* Limit width on smaller screens */
    margin-bottom: 20px; /*Added margin*/
  }
`;

const Heading = styled.h2`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 30px;
`;

const Para = styled.p`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 15px;
`;
