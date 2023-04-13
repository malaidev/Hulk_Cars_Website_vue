import { Col, Container, Row } from "react-bootstrap"
import Title from "./Title"
import '../style/scss/ourTeam.scss';

const OurTeam = () => {
    const TeamMembers = [
        {avartar: require('../style/images/team/team-img-1.png'), name: 'Aladdin', job: 'CEO & Founder', desc: 'Aliquam lorem ante, dapibus in, vive quis, feugiat a, tellus. Phase llus viver nulla ut metus varius'},
        {avartar: require('../style/images/team/team-img-2.png'), name: 'Adam', job: 'Co Founder & Assistant engineer', desc: 'Aliquam lorem ante, dapibus in, vive quis, feugiat a, tellus. Phase llus viver nulla ut metus varius'},
        {avartar: require('../style/images/team/team-img-3.png'), name: 'Walter Perry', job: 'CEO & Founder', desc: 'Aliquam lorem ante, dapibus in, vive quis, feugiat a, tellus. Phase llus viver nulla ut metus varius'},
        {avartar: require('../style/images/team/team-img-4.png'), name: 'Gregory Silva', job: 'CEO & Founder', desc: 'Aliquam lorem ante, dapibus in, vive quis, feugiat a, tellus. Phase llus viver nulla ut metus varius'},
        {avartar: require('../style/images/team/team-img-5.png'), name: 'Patrick Richardson', job: 'CEO & Founder', desc: 'Aliquam lorem ante, dapibus in, vive quis, feugiat a, tellus. Phase llus viver nulla ut metus varius'},
        {avartar: require('../style/images/team/team-img-6.png'), name: 'Jeffery Payne', job: 'CEO & Founder', desc: 'Aliquam lorem ante, dapibus in, vive quis, feugiat a, tellus. Phase llus viver nulla ut metus varius'},
        {avartar: require('../style/images/team/team-img-7.png'), name: 'Jean Parker', job: 'CEO & Founder', desc: 'Aliquam lorem ante, dapibus in, vive quis, feugiat a, tellus. Phase llus viver nulla ut metus varius'},
        {avartar: require('../style/images/team/team-img-8.png'), name: 'Samantha Andrews', job: 'CEO & Founder', desc: 'Aliquam lorem ante, dapibus in, vive quis, feugiat a, tellus. Phase llus viver nulla ut metus varius'},
    ]
    return (
        <Container id="TeamSection">
            <Title title={"Our Team"} />
            <Row className="our-team">
                {
                    TeamMembers.map((member, index) => {
                        return (
                            <Col lg={3} md={4} sm={3} xs={12} key={index} className="content">
                                <div className="profile">
                                    <img src={member.avartar} alt="" width="265" height="265" />
                                    <p className="name text-center">{member.name}</p>
                                    <p className="job text-center">{member.job}</p>
                                    <p className="desc text-center">{member.desc}</p>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default OurTeam;