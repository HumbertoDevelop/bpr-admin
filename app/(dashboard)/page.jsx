"use client";
// import node module libraries
import { Fragment } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";

// import widget/custom components
import { StatRightTopIcon } from "widgets";

// import required data files
import ProjectsStatsData from "data/dashboard/ProjectsStatsData";
// import sub components
import { TasksPerformance } from "sub-components";

export const metadata = {
  title: "Home",
  description: "Home | Backoffice BussKM",
  keywords: "Home, Backoffice, BussKM, Dashboard",
};

const Home = () => {
  return (
    <Fragment>
      <div className="bg-primary pt-10 pb-21"></div>
      <Container fluid className="mt-n22 px-6">
        <Row>
          {ProjectsStatsData.map((item, index) => {
            return (
              <Col xl={3} lg={6} md={12} xs={12} className="mt-6" key={index}>
                <StatRightTopIcon info={item} />
              </Col>
            );
          })}
        </Row>

        <Row className="my-6">
          <Col xl={4} lg={12} md={12} xs={12} className="mb-6 mb-xl-0">
            {/* Tasks Performance  */}
            <TasksPerformance />
          </Col>

          {/* </Col> */}
        </Row>
      </Container>
    </Fragment>
  );
};
export default Home;
