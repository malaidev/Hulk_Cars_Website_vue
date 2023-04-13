import { Col, Container, Row } from "react-bootstrap"
import Title from "./Title"
import InsuredCar1Img from '../style/images/insured-car 1.png';
import Quick1Img from '../style/images/quick 1.png';
import SvgImg from '../style/images/svg.png';
import Nft3Img from '../style/images/nft (3) 1.png';
import CarSkeletonImg from '../style/images/home-img-9.png';
import '../style/scss/project.scss';
import { useWindowScrollPositions, animation } from "../style/js/globalFuns";
import { useEffect, useRef } from "react";
import { Flip, Slide } from "react-awesome-reveal";
import HulkLogo from '../style/images/Vector.svg';

const Project = () => {
    const projectItem = useRef();
    const Projects = [
        {avartar: HulkLogo, title: 'Hulk Token', desc: 'Hulk token allows you to be an investor in the company Hulk company via tokenization because part of the profits will be injected into the token via the buyback'},
        {avartar: require('../style/images/car 1.png'), title: 'Car Rental & Driver fleet', desc: 'Tokenized car rental receive rent shares every month with a rating system for the best renters and drivers with our app'},
        {avartar: require('../style/images/nft 1.png'), title: 'NFT Dividend', desc: 'NFTs will be associated with each vehicle you receive dividends each month on rental. Your NFT is proof of ownership you can sell it at any time'},
    ];
    const { scrollY } = useWindowScrollPositions();

    useEffect(() => {
        animation(projectItem);
    }, [scrollY]);
    
    return (
        <Container id="ProjectSection">
            <Title title={"Project"} />
            <Row className="project reveal mt-4" ref={projectItem}>
                {
                    Projects.map((project, index) => {
                        return (
                            <Col lg={4} md={4} sm={12} xs={12} className="d-flex flex-column justify-content-center align-items-center" key={index}>
                                <img src={project.avartar} alt="" width="130" height="110" />
                                <h2 className="text-center">{project.title}</h2>
                                <p className="text-center">{project.desc}</p>
                            </Col>
                        )
                    })
                }
            </Row>
            <Row className="project-sub mt-4">
                <Col lg={5} md={5} sm={5} xs={12} className="d-flex justify-content-between align-items-center">
                    <div className="">
                        <img src={InsuredCar1Img} alt="" width="34" height="34" />
                        <p>Car 100%<br />insured</p>
                    </div>
                    <div className="right">
                        <img src={Quick1Img} alt="" width="34" height="34" />
                        <p>Rapid<br />development</p>
                    </div>
                </Col>
                <Col lg={2} md={2} sm={2} xs={0}></Col>
                <Col lg={5} md={5} sm={5} xs={12} className="d-flex justify-content-between align-items-center">
                    <div className="">
                        <img src={SvgImg} alt="" width="34" height="34" />
                        <p>Evolution of the<br />car range</p>
                    </div>
                    <div className="right">
                        <img src={Nft3Img} alt="" width="34" height="34" />
                        <p>Easy car owner<br />fast payment</p>
                    </div>
                </Col>
            </Row>
            <Row className="car-rental mt-5">
                <Col lg={8} md={8} sm={12} xs={12} className="content">
                    <div className="w-100">
                        <h6 className="mt-4">Project of Hulk Company</h6>
                        <h2 className="mt-4">Car Rental & Driver fleet</h2>
                        <p style={{}} className="mt-4">
                            We will buy and rent our sedan or luxury class cars and we will have our own fleet of drivers to run errands on platforms like Uber until our own app comes out. Thereafter we will have our own private address book to develop and have partnerships with hotels, restaurants, travel agencies ...<br /><br />
                            Each month a good part of the profits will be buyback in redemption in our token. If you hold an NFT, you receive a portion of the profits on the car associated with your NFT. The profits generated will allow to buy new cars<br /><br />
                            If you hold Hulk token you get discounts from all our partners by presenting your assets.<br /><br />
                            We will initially be in Western Europe and the United Arab Emirates.
                        </p>
                    </div>
                </Col>
                <Col lg={4} md={4} sm={12} xs={12} className="d-flex justifyf-content-center align-items-end logo">
                    <Flip>
                        <img src={HulkLogo} alt="" width="100%" height="100%" />
                    </Flip>
                </Col>
            </Row>
            <Row className="tokenized-car mt-5">
                <Col lg={7} md={7} sm={7} xs={12} className="d-flex justify-content-center align-items-center logo">
                    <Slide>
                        <img src={CarSkeletonImg} alt="" width="100%" height="100%" />
                    </Slide>
                </Col>
                <Col lg={5} md={5} sm={5} xs={12} className="content">
                    <h6 className="mt-4">NFT Hulk Company</h6>
                    <h2 className="mt-4">Tokenized Car</h2>
                    <p className="mt-4">
                        Tokenized car rental receive rent shares every month with a rating system for the best renters and drivers on your NFT.<br /><br />
                        Tokenized car rental receives rent shares each month with a rating system for the best renters and drivers. When the car is sold you receive a % of the sale.<br /><br />
                        If you hold an NFT you get discounts from all our partners by presenting your assets.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Project;