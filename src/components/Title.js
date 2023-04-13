import { Col, Row } from "react-bootstrap";

const Title = (props) => {
    const { title } = props;
    return (
        <>
            <Row className="mt-4">
                <Col className="">
                    <h1 className="text-center" style={{fontFamily: 'Montserrat', fontWeight: '600', fontSize: '45px', lineHeight: '58.5px', color: '#FFFFFF'}}>{title}</h1>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col className="d-flex justify-content-center">
                    <div style={{border: '1px solid #B3F024', width: '50px'}}></div>
                </Col>
            </Row>
        </>
    )
}

export default Title;