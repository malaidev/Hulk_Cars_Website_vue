import { Button, Card, Col, Container, Nav, Navbar, ProgressBar, Row } from "react-bootstrap";
import '../style/scss/banner.scss';
import Logo from '../style/images/hulk-logo.svg';
import { Bounce, Slide } from "react-awesome-reveal";
import { useWindowScrollPositions } from "../style/js/globalFuns";
import { useEffect, useRef, useState } from "react";

const Banner = () => {
    const [ sectionActived, setSectionActived ] = useState('home');
    const navbar = useRef();
    const navMenus = [
        {name: 'home', redirect: 'HomeSection'},
        {name: 'project', redirect: 'ProjectSection'},
        {name: 'nft', redirect: 'NFTSection'},
        {name: 'tokenomics', redirect: 'TokenomicsSection'},
        {name: 'roadmap', redirect: 'RoadMapSection'},
        {name: 'video', redirect: 'VideoSection'},
        {name: 'team', redirect: 'TeamSection'},
        {name: 'app', redirect: 'AppSection'},
        {name: 'partners', redirect: 'PartnersSection'},
        {name: 'contact', redirect: 'ContactSection'}
    ];
    const { scrollY } = useWindowScrollPositions();
    useEffect(() => {
        if (scrollY > 50) {
            navbar.current.style.transform = `translateY(-44px)`;
            navbar.current.style.backgroundColor = `black`;
        } else {
            navbar.current.style.transform = `translateY(0px)`;
            navbar.current.style.backgroundColor = `transparent`;
        }
    });
    const handleSection = (name) => {
        setSectionActived(name);
    }
    return (
        <Container fluid className="banner">
            <div className="d-flex">
                <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" ref={navbar}>
                    <Container>
                        <Navbar.Brand href="#">
                            <img src={Logo} alt="" width="65" height="32" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav style={{gap: '18px'}}>
                            {
                                navMenus.map((item, index) => {
                                    return (
                                        <div key={index} className="hulk-nav nav-link">
                                            <a href={`#${item.redirect}`} className={sectionActived === `${item.name}` ? 'actived' : ''} onClick={() => handleSection(item.name)}>{ item.name }</a>
                                        </div>
                                    )
                                })
                            }
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <Container>
                <Row className="banner-content">
                    <Col lg={6} md={12} sm={12} xs={12} className="d-flex align-items-center">
                        <Slide>
                            <div className="w-100">
                                <h1 className="car-rental-label">
                                    Car rental and fleet of drivers
                                </h1>
                                <i className="world-project-label">
                                    World's first project to tokenize cars and drivers
                                </i>
                                <div className="services">
                                    <Button className="btn-hulk-toek">hulk token</Button>
                                    <Button className="btn-white-paper">white paper</Button>
                                </div>
                            </div>
                        </Slide>
                    </Col>

                    <Col className="d-flex justify-content-end logo">
                        <Bounce>
                            <div className="bulk-ico-end">
                                <Row>
                                    <Col lg={12} md={12} sm={12}>
                                        <h3>Hulk ICO Ends in</h3>
                                    </Col>
                                </Row>
                                <Row className="mt-4">
                                    <Col lg={3} md={3} sm={3} xs={6} className="mt-2">
                                        <Card>00</Card>
                                    </Col>
                                    <Col lg={3} md={3} sm={3} xs={6} className="mt-2">
                                        <Card>00</Card>
                                    </Col>
                                    <Col lg={3} md={3} sm={3} xs={6} className="mt-2">
                                        <Card>00</Card>
                                    </Col>
                                    <Col lg={3} md={3} sm={3} xs={6} className="mt-2">
                                        <Card>00</Card>
                                    </Col>
                                </Row>
                                <Row className="mt-5">
                                    <Col lg={12} md={12} sm={12}>
                                        <Button className="btn-buy-hulk">BUY HULK TOKENS</Button>
                                    </Col>
                                </Row>
                                <Row className="mt-4">
                                    <Col lg={12} md={12} sm={12} className="d-flex justify-content-between">
                                        <h6>Reached: ${(150000).toLocaleString('en-US')}</h6>
                                        <h6>${(500000).toLocaleString('en-US')}</h6>
                                    </Col>
                                    <Col lg={12} md={12} sm={12}>
                                        <ProgressBar variant="success" now={40} />
                                    </Col>
                                    <Col lg={12} md={12} sm={12} className="d-flex justify-content-between">
                                        <h6>Softcap</h6>
                                        <h6>Hardcap</h6>
                                    </Col>
                                </Row>
                            </div>
                        </Bounce>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Banner;