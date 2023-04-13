import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import '../style/scss/advisorsBoard.scss';

const AdvisorsBoard = () => {
    const Advisors = [
        {avartar : require('../style/images/team/team-img-9.png'), name: 'James Waish', job: "Founder & CEO"},
        {avartar : require('../style/images/team/team-img-10.png'), name: 'Nancy Ray', job: "Chief Operational Officer"},
        {avartar : require('../style/images/team/team-img-11.png'), name: 'Petter Obrien', job: "Lead Software Developer"},
        {avartar : require('../style/images/team/team-img-12.png'), name: 'George Medina', job: "Software Architect"},
        {avartar : require('../style/images/team/team-img-13.png'), name: 'Andrea Kim', job: "Software Architect"},
    ]
    return (
        <Container>
            <Title title={"Advisors Board"} />
            <Row className="advisors-board mt-5">
                {
                    Advisors.map((member, index) => {
                        return (
                            <Col lg={2} md={4} sm={4} xs={12} key={index} className="content">
                                <div className="profile">
                                    <img src={member.avartar} alt="" width="196" height="196" />
                                    <p className="name text-center">{member.name}</p>
                                    <p className="job text-center">{member.job}</p>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default AdvisorsBoard;