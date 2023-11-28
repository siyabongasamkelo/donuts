import styled from "styled-components";
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { BarChart, Instagram, Shop } from "react-bootstrap-icons";

export const TimeLineStyled = styled.div`
  @media only screen and (max-width: 600px) {
    width: 100vw;
    margin-bottom: 50px;
  }
`;

export const Contaner = styled.div`
  height: 90%;
  width: 90%;
  .header {
    h1 {
      font-size: 38px;
      text-align: center;
    }
    p {
      text-align: center;
    }
  }
`;

export const TimelineDIv = styled.div`
  @media only screen and (max-width: 600px) {
    margin-top: 50px;
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 50px;
    width: 70%;
  }
  @media only screen and (min-width: 992px) {
    width: 55%;
  }
  @media only screen and (min-width: 1200px) {
    width: 45%;
  }
`;

export const TimeLine = () => {
  return (
    <TimeLineStyled
      className=" d-flex justify-content-center align-items-center"
      id="timeline"
    >
      <Contaner className=" d-flex flex-column align-items-center">
        <div className="header">
          <h1>Our Time Line</h1>
          <p>These are all our achievements</p>
        </div>
        <TimelineDIv>
          <Timeline>
            <Timeline.Item>
              <Timeline.Point icon={Shop} />
              <Timeline.Content>
                <Timeline.Time color="blue">Aug 2022</Timeline.Time>
                <Timeline.Title>Opened a branch in Skhawini</Timeline.Title>
                <Timeline.Body>
                  Because of an increase in demand we were forced to open a
                  branch in Skhawini to accomodate our clients who live there
                  which is like 45% of all our clients
                </Timeline.Body>
                <Button color="gray">
                  Learn More
                  <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                </Button>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point icon={Instagram} />
              <Timeline.Content>
                <Timeline.Time>Jan 2023</Timeline.Time>
                <Timeline.Title>500k Social Media Followers</Timeline.Title>
                <Timeline.Body>
                  Our online profile just kept on getting better and better we
                  were the most famous donut store in KZN leading with over 50k
                  Followers
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point icon={BarChart} />
              <Timeline.Content>
                <Timeline.Time>July 2022</Timeline.Time>
                <Timeline.Title>Our First 100 clients</Timeline.Title>
                <Timeline.Body>
                  After a couple of months we were already famous and we were
                  supplying over a 100 store around empangeni and Skhawini
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point icon={Shop} />
              <Timeline.Content>
                <Timeline.Time>April 2022</Timeline.Time>
                <Timeline.Title>Opened Mhlathuze Donuts</Timeline.Title>
                <Timeline.Body>
                  We open a Donut shop in Mhlathuze with one of the best bakers
                  in Mhlathuze
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        </TimelineDIv>
      </Contaner>
    </TimeLineStyled>
  );
};
