import { Col, Container, Form, Row } from "react-bootstrap";
import LogoImg from '../style/images/hulk-logo.svg';
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';
import { Link } from "react-router-dom";
import '../style/scss/footer.scss';

const Footer = () => {
    const FooterLinks = [
        {name: 'ICO'},
        {name: 'Project'},
        {name: 'NFT'},
        {name: 'Tokenomics'},
        {name: 'Roadmap'},
        {name: 'Video'},
        {name: 'Team'},
        {name: 'Partners'},
    ];
    const FooterDocuments = [
        {name: "Whitepaper"},
        {name: "Privacy Policy"},
        {name: "Terms of use"},
    ]
    return (
        <div className="footer" id="ContactSection">
            <Container>
                <Row className="pt-3">
                    <Col lg={3} md={3} sm={12} xs={12} className="footer-logo">
                        <img src={LogoImg} alt="" />
                        <p>Hulk Company is a French and Emirati company that rents cars and has fleets of drivers.</p>
                        <div className="socials">
                            <BsFacebook />
                            <BsTwitter />
                            <BsLinkedin />
                            <BsInstagram />
                            <BsGithub />
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={12} xs={12} className="footer-links">
                        <p className="title">Additional Links</p>
                        {
                            FooterLinks.map((link, index) => {
                                return (
                                    <small className="link" key={index}><Link to="/">{link.name}</Link></small>
                                )
                            })
                        }
                    </Col>
                    <Col lg={3} md={3} sm={12} xs={12} className="footer-documents">
                        <p className="title">Documents</p>
                        {
                            FooterDocuments.map((document, index) => {
                                return (
                                    <small className="link" key={index}><Link to="/">{document.name}</Link></small>
                                )
                            })
                        }
                        <div className="contact-us">
                            <h5>Contact us</h5>
                            <small>You can contact us at</small>
                            <p className="contact-mail">contact@hulkcars.com</p>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={12} xs={12} className="footer-subscribe">
                        <p className="title">Subscribe</p>
                        <p className="desc">Will send you weekly updates for your better finance management.</p>
                        <Form.Control type="email" placeholder="Your e-mail..." />
                    </Col>
                </Row>
            </Container>
            <div className="footer-bar">
            <Container>
                <Row>
                    <Col className="d-flex justify-content-between align-items-center">
                        <small>© 2022 <small className="text-light">Hulk Company</small>, All Rights Reserved</small>
                        <small><Link to="/">Privacy Policy Terms & Conditions</Link></small>
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    )
}

export default Footer;