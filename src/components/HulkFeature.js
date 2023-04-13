import { Container, Row } from "react-bootstrap"
import Title from "./Title"
import FeatureImg from '../style/images/h1-img-7.png';
import '../style/scss/hulkFeature.scss';
import { useWindowScrollPositions, animation } from "../style/js/globalFuns";
import { useEffect, useRef } from "react";

const HulkFeature = () => {
    const featuresLeft0 = useRef();
    const featuresLeft1 = useRef();
    const featuresLeft2 = useRef();
    const featuresRight0 = useRef();
    const featuresRight1 = useRef();
    const featuresRight2 = useRef();
    const featureMiddle = useRef();
    const { scrollY } = useWindowScrollPositions();

    useEffect(() => {
        animation(featuresLeft0);
        animation(featuresLeft1);
        animation(featuresLeft2);
        animation(featuresRight0);
        animation(featuresRight1);
        animation(featuresRight2);
        animation(featureMiddle);
    }, [scrollY]);

    const features = [
        {avartar: require('../style/images/car (1) 1.png'), name: 'Car Rental', desc: 'Our cars will be rented on our application.'},
        {avartar: require('../style/images/smart-contract 1.png'), name: 'Smart Contract', desc: 'Each payment made by crypto is engraved on the blockchain you sign a race contract with Hulk Company'},
        {avartar: require('../style/images/Group.png'), name: 'Crypto payment', desc: 'Crypto payments are also accepted on the Ethereum network, BNB Chain, Polygon with any crypto.'},
        {avartar: require('../style/images/chauffeur (1) 1.png'), name: 'Car Driver', desc: 'We would have driver fleets with our own car.'},
        {avartar: require('../style/images/nft (4) 1.png'), name: 'NFT Car', desc: 'You become the owner of a % of a car by holding an NFT you receive rent each month.'},
        {avartar: require('../style/images/review (1) 1.png'), name: 'Reviews', desc: 'Each driver and user can be rated.'},
    ]
    return (
        <Container>
            <Container>
                <Title title={"Hulk App Feature"} />
                <Row className="hulk-feature mt-5">
                    <div className="feature1">
                        <div className="feature-item reveal-left" ref={featuresLeft0}>
                            <img src={features[0].avartar} alt="" width="70" height="70" />
                            <h5 className="title">{features[0].name}</h5>
                            <p>{features[0].desc}</p>
                        </div>
                        <div className="feature-item reveal-left" ref={featuresLeft1}>
                            <img src={features[1].avartar} alt="" width="70" height="70" />
                            <h5 className="title">{features[1].name}</h5>
                            <p>{features[1].desc}</p>
                        </div>
                        <div className="feature-item reveal-left" ref={featuresLeft2}>
                            <img src={features[2].avartar} alt="" width="70" height="70" />
                            <h5 className="title">{features[2].name}</h5>
                            <p>{features[2].desc}</p>
                        </div>
                    </div>
                    <div className="feature-production">
                        <img src={FeatureImg} className="reveal" alt="" width="345px" height="683px" ref={featureMiddle}/>
                    </div>
                    <div className="feature2">
                        <div className="feature-item reveal-right" ref={featuresRight0}>
                            <img src={features[3].avartar} alt="" width="70" height="70" />
                            <h5 className="title">{features[3].name}</h5>
                            <p>{features[3].desc}</p>
                        </div>
                        <div className="feature-item reveal-right" ref={featuresRight1}>
                            <img src={features[4].avartar} alt="" width="70" height="70" />
                            <h5 className="title">{features[4].name}</h5>
                            <p>{features[4].desc}</p>
                        </div>
                        <div className="feature-item reveal-right" ref={featuresRight2}>
                            <img src={features[5].avartar} alt="" width="70" height="70" />
                            <h5 className="title">{features[5].name}</h5>
                            <p>{features[5].desc}</p>
                        </div>
                    </div>
                </Row>
            </Container>
        </Container>
    )
}

export default HulkFeature;