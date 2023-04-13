import { Button, Col, Container, Row } from "react-bootstrap";
import { BsArrow90DegRight } from 'react-icons/bs';
//Import CustomComponents
// import CryptoBar from "../components/CryptoBar";
import Banner from "../components/Banner";
import Project from "../components/Project";
import NFT from "../components/NFT";
import Tokenomics from "../components/Tokenomics";
import HulkFeature from "../components/HulkFeature";
import AdvisorsBoard from "../components/AdvisorsBoard";
import OurTeam from "../components/OurTeam";
import StrategicPartner from "../components/StrategicPartners";
import Footer from "../components/Footer";
import BackgroundGrid from "../components/BackgroundGrid";
//Import Assets
import DotImg from '../style/images/i.png';
import AboutICOImg from '../style/images/h1-img-1.png';
import HulkLogo from '../style/images/hulk-logo.svg';
import '../style/scss/landing.scss';
import RoadMap from "../components/RoadMap";
import { useWindowScrollPositions, animation } from "../style/js/globalFuns";
import { useEffect, useRef } from "react";

const Landing = () => {
    const growCapitalItem = useRef();
    const aboutHulkRoles = ["Car rental", "Driver fleet", "Hulk Token", "NFT Dividend", "Development Strategy", "Investment"];
    const growCapitals = [
        {avartar: require('../style/images/garage (2) 1.png'), process: '100%', title: 'Security'},
        {avartar: require('../style/images/blockchain 1.png'), process: '150%', title: 'Transparency'},
        {avartar: require('../style/images/shaking-hand 1.png'), process: '200%', title: 'Professional'}
    ];
    const { scrollY } = useWindowScrollPositions();
    useEffect(() => {
        animation(growCapitalItem);
    }, [scrollY])
    
    return (
        <div className="landing">
            {/* <CryptoBar /> */}
            <Banner />
            <Project />
            <NFT />
            <Tokenomics />
            <div className="grow-capital d-flex align-items-center mt-5">
                <Container>
                    <Row className="mt-5">
                        <Col lg={6} md={12} sm={12} xs={12} className="d-flex justify-content-center ">
                            <Row className="d-flex justify-content-center">
                                <Col lg={8} md={8} sm={8} xs={12} className="content">
                                    <h1 style={{fontSize: "45px", lineHeight: "58.5px", fontFamily: "Montserrat", color: "#FFFFFF", fontWeight: "400"}}>Grow Your Capital</h1>
                                    <p style={{fontSize: "14px", fontWeight: "400", fontFamily: "Open Sans", lineHeight: "26px", color: "#7F8389"}}>All our cars are stored in garages. They are 100% fully insured. We are in partnership with high-end garages very renowned in their field.We have a network of partners so that the cars never sleep.</p>
                                    <Button className="mt-5">white paper</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} xs={12} className="logo">
                            <Row className="reveal" ref={growCapitalItem}>
                                {
                                    growCapitals.map((growCapital, index) => {
                                        return (
                                            <Col lg={4} md={4} sm={12} xs={12} className="d-flex flex-column justify-content-center align-items-center" key={index}>
                                                <img src={growCapital.avartar} alt="" width="" height="" />
                                                <h1 className="text-white">{growCapital.process}</h1>
                                                <p>{growCapital.title}</p>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <RoadMap />
            <Container id="VideoSection">
                <Container>
                    <Row className="about-hulk">
                        <Col lg={6} md={6} sm={6} xs={12} className="d-flex align-items-center">
                            <div>
                                <h1>About Hulk Company</h1>
                                <i>Hulk Company has a very long term vision. Our ambition is to develop a vast network of sedan and luxury cars with our partners.</i>
                                <p>Hulk company will rent cars and also have fleets of drivers.With this our investors will receive dividends with the Hulk token via buyback and % rent directly via NFTs. Our partners will not have dormat cars to generate profits continuosly for our investors.</p>
                                <Row>
                                    {
                                        aboutHulkRoles.map((item, index) => {
                                            return (
                                            <Col lg={6} md={6} sm={6} xs={12} className="d-flex align-items-center gap-2 roles" key={index}>
                                                <img src={DotImg} alt="" width="" height="" />
                                                {item}
                                            </Col>
                                            )
                                        })
                                    }
                                    
                                </Row>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={12} className="logo">
                            <img src={AboutICOImg} alt="" width="100%" height="100%" />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <div className="focus-innovation">
                <Container className="h-100">
                    <Row className="h-100 p-5">
                        <Col lg={8} md={12} sm={12} xs={12}>
                            <h1>We focus on innovation, luxury, and sustainability that moves us toward the future.</h1>
                        </Col>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Button className="btn-whitepaper"><span>Whitepaper</span><span>Whitepaper</span><BsArrow90DegRight /></Button>
                            <Button className="btn-buy-hulk"><span>Buy Hulk Token</span><span>Buy Hulk Token</span><BsArrow90DegRight /></Button>
                            <Button className="btn-nft-collection"><span>NFT cards collection</span><span>NFT cards collection</span><BsArrow90DegRight /></Button>
                        </Col>
                    </Row>
                </Container>         
            </div>
            <HulkFeature />
            <div className="introduction-hulk mt-5" id="AppSection">
                <Container>
                    <Row>
                        <Col lg={6} md={12} sm={12} xs={12} className="d-flex justify-content-center align-items-center logo mt-5">
                                <img src={HulkLogo} alt="" width="335" height="200" />
                        </Col>
                        <Col lg={5} md={12} sm={12} xs={12} className="d-flex justify-content-center align-items-center content mt-5">
                            <div className="w-100">
                                <h2 className="title">Hulk App</h2>
                                <i className="sub-title">Download our race rental and reservation application directly on Play store & Apple store</i>
                                <p className="desc">
                                Hulk Application that allows to rent high-end cars and that also allows to choose a race to move each user to a scoring system. Payments in fiat and cryptocurrencies are accepted on the app.
                                </p>
                                <div className="stores">
                                    <Button className="btn-play-store"></Button>
                                    <Button className="btn-apple-store"></Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <OurTeam />
            <AdvisorsBoard />
            <StrategicPartner />
            <Footer />
            <BackgroundGrid />
        </div>
    )
}

export default Landing;