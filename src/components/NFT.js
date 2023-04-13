import { Col, Container, Row, Carousel, Form } from "react-bootstrap"
import HomeCar13Img from '../style/images/home-img-13.jpg';
import Carousel1Img from '../style/images/1970.png';
import Carousel2Img from '../style/images/1971.png';
import Carousel3Img from '../style/images/home-img-6.jpg';
import Title from "./Title";
import '../style/scss/nft.scss';

const NFT = () => {
    const characteristicNFTs = [
        {title: "Brand", subTitle: "Lamborghini"},
        {title: "Model", subTitle: "Miura"},
        {title: "Kilometer", subTitle: "180 000"},
        {title: "Year", subTitle: "1969"},
        {title: "Color", subTitle: "Grey"},
        {title: "Fuel", subTitle: "Essence"},
        {title: "Seats", subTitle: "4"},
        {title: "Maximum power", subTitle: "385"},
    ];
    return (
        <Container id="NFTSection">
            <Title title={"NFT"} />
            <Row className="nft mt-5">
                <Col lg={6} md={6} sm={6} xs={12} className="content">
                    <h1>Characteristic of NFT</h1>
                    <Row>
                        {
                            characteristicNFTs.map((item, index) => {
                                return (
                                <Col lg={6} md={6} sm={6} xs={6} key={index} className="mt-4 sub-content">
                                    <div className="item">
                                        <h5 className="title">{item.title}</h5>
                                        <h5 className="desc">{item.subTitle}</h5>
                                        <div className="border-bar"></div>
                                    </div>
                                </Col>
                                )
                            })
                        }
                    </Row>
                </Col>
                <Col lg={6} md={6} sm={6} xs={12} className="d-flex justify-content-center align-items-center logo">
                    <img src={HomeCar13Img} alt="" width="100%" height="100%" />
                </Col>
            </Row>
            <Row className="mt-5">
                <Form.Text className="text-center" style={{fontSize: "18px", fontFamily: "Lato", fontWeight: "400", lineHeight: "24px"}}>All the specifications you need</Form.Text>
            </Row>
            <Row className="mt-4">
                <small className="text-center text-white title-choose-car">Choose your car</small>
            </Row>
            <Row className="choose-car mt-5">
                <Col lg={12} md={12} sm={12} xs={12}>
                    <Carousel interval={3000}>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Carousel1Img}
                            alt="First slide"
                            width="990px"
                            height="555px"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Carousel2Img}
                            alt="Second slide"
                            width="990px"
                            height="555px"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Carousel3Img}
                            alt="Third slide"
                            width="990px"
                            height="555px"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row className="car-intro mt-3">
                <Col lg={4} md={4} sm={4} xs={6} className="">
                        <h1 className="text-center">+5 models</h1>
                        <h6 className="text-center mt-2">Choose your car</h6>
                </Col>
                <Col lg={4} md={4} sm={4} xs={6} className="">
                        <h1 className="text-center">Get your Token & NFT</h1>
                        <h6 className="text-center mt-2">Hold Hulk token <br /> and NFT</h6>
                </Col>
                <Col lg={4} md={4} sm={4} xs={12} className="">
                        <h1 className="text-center">Receive your rent</h1>
                        <h6 className="text-center mt-2">Each month you will receive your buyback on Hulk <br />token and payment on your wallet for NFTs</h6>
                </Col>
            </Row>
        </Container>
    )
}

export default NFT;