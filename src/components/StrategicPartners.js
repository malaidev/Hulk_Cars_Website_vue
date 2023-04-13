import { Carousel, Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import '../style/scss/strategicPartner.scss';

const StrategicPartner = () => {
    const partners = [
        {logo: require('../style/images/strategic/h1-client-img-1.png')},
        {logo: require('../style/images/strategic/h1-client-img-2.png')},
        {logo: require('../style/images/strategic/h1-client-img-3.png')},
        {logo: require('../style/images/strategic/h1-client-img-4.png')},
        {logo: require('../style/images/strategic/h1-client-img-5.png')},
        {logo: require('../style/images/strategic/h1-client-img-6.png')},
        {logo: require('../style/images/strategic/h1-client-img-7.png')},
        {logo: require('../style/images/strategic/h1-client-img-8.png')},
        {logo: require('../style/images/strategic/h1-client-img-9.png')},
        {logo: require('../style/images/strategic/h1-client-img-10.png')},
        {logo: require('../style/images/strategic/h1-client-img-11.png')},
        {logo: require('../style/images/strategic/h1-client-img-12.png')},
    ];
    const SubPartners = [
        {logo: require('../style/images/strategic/h2-client-img-1.png'), name: ""},
        {logo: require('../style/images/strategic/h2-client-img-2.png'), name: ""},
        {logo: require('../style/images/strategic/h2-client-img-3.png'), name: ""},
        {logo: require('../style/images/strategic/h2-client-img-4.png'), name: ""},
        {logo: require('../style/images/strategic/h2-client-img-5.png'), name: ""},
        {logo: require('../style/images/strategic/h2-client-img-6.png'), name: ""},
        {logo: require('../style/images/strategic/h2-client-img-7.png'), name: ""},
        {logo: require('../style/images/strategic/h2-client-img-8.png'), name: ""},
        {logo: require('../style/images/strategic/h2-client-img-9.png'), name: ""},
        {logo: require('../style/images/strategic/h2-client-img-10.png'), name: 'pancakeswap'},
        {logo: require('../style/images/strategic/h2-client-img-11.png'), name: ""},
        {logo: require('../style/images/strategic/h2-client-img-12.png'), name: ""},
    ]
    return (
        <div className="strategic-partners" id="PartnersSection">
            <Container>
                <Title title={"Strategic Partners"} />
                <Row>
                    <Col>
                        <Carousel className="" interval={4000}>
                            <Carousel.Item>
                                <Row className="mt-4">
                                    {
                                        partners.map((partner, index) => {
                                            if (index < 6) {
                                                return (
                                                    <Col lg={2} md={4} sm={12} xs={12} key={index} className="d-flex justify-content-center item">
                                                        <img src={partner.logo} alt="" width="" height="" />
                                                    </Col>
                                                )
                                            }
                                        })
                                    }
                                </Row>
                                <Row>
                                    {
                                        SubPartners.map((subpartner, index) => {
                                            if (index < 6) {
                                                return (
                                                    <Col lg={2} md={4} sm={12} xs={12} key={index} className="d-flex justify-content-center sub-item">
                                                        <img src={subpartner.logo} alt="" width="" height="" />
                                                    </Col>
                                                )
                                            }
                                        })
                                    }
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row className="mt-4">
                                    {
                                        partners.map((partner, index) => {
                                            if (index > 5) {
                                                return (
                                                    <Col lg={2} md={4} sm={12} xs={12} key={index} className="d-flex justify-content-center item">
                                                        <img src={partner.logo} alt="" width="" height="" />
                                                    </Col>
                                                )
                                            }
                                        })
                                    }
                                </Row>
                                <Row>
                                    {
                                        SubPartners.map((subpartner, index) => {
                                            if (index > 5) {
                                                return (
                                                    <Col lg={2} md={4} sm={12} xs={12} key={index} className="d-flex justify-content-center sub-item">
                                                        <img src={subpartner.logo} alt="" width="200" height={subpartner.name === "pancakeswap" ? '175' : '160'} />
                                                    </Col>
                                                )
                                            }
                                        })
                                    }
                                </Row>
                            </Carousel.Item>
                        </Carousel>  
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default StrategicPartner;