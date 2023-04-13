import { Row } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Title from "./Title";
import '../style/scss/roadmap.scss';
import { getWindowDimensions } from "../style/js/globalFuns";
import { useEffect, useRef, useState } from "react";

const RoadMap = () => {
    const [windowSize, setWindowSize] = useState(getWindowDimensions);
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowDimensions());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [])

    const roadmapItems = [
        {date: 'Q1 2023', position: 'up', title: 'Lyon Office, France', desc: 'Launch of our ICO', backgroundImg: require('../style/images/roadmap/1.png'), actived: true},
        {date: 'Q2 2023', position: 'down', title: 'In France & Dubai', desc: 'Buy cars in France & Dubai', backgroundImg: require('../style/images/roadmap/2.png'), actived: true},
        {date: 'Q2 2023', position: 'up', title: 'In France & Dubai', desc: 'Rental 10 cars and launch of drivers for the fleet with our cars', backgroundImg: require('../style/images/roadmap/3.png'), actived: false},
        {date: 'Q3 2023', position: 'down', title: 'In France & Dubai', desc: 'Hulk App Released', backgroundImg: require('../style/images/roadmap/4.png'), actived: false},
        {date: 'Q4 2023', position: 'up', title: 'Future is Now', desc: 'Increase in the cars fleet and launch of luxury boat rentals in the south of France & Dubai', backgroundImg: require('../style/images/roadmap/5.png'), actived: false},
    ];
    const road = useRef();
    const [ roadMapPacks, setRoadMapPacks ] = useState(0);
    const [clickTimes, setClickTimes] = useState(1);
    const [clickTimesLeft, setClickTimesLeft] = useState(0);

    useEffect(() => {
        handleWidth();
    }, [windowSize.width]);

    const handleWidth = () => {
        if (windowSize.width > 1512) {
            setRoadMapPacks(roadMapPacksCalculator(356.244));
        } else if (windowSize.width === 1512) {
            setRoadMapPacks(0);
        } else if (windowSize.width > 1024) {
            setRoadMapPacks(roadMapPacksCalculator(283.05));
        } else if (windowSize.width === 1024) {
            setRoadMapPacks(2);
        } else if (windowSize.width > 390) {
            setRoadMapPacks(roadMapPacksCalculator(319.48));
        } else {
            setRoadMapPacks(2);
        }
    };
    
    const roadMapPacksCalculator = (packLength) => {
        const roadMapLength = windowSize.width - (windowSize.width * 0.064);
        return 5 - parseInt(roadMapLength / packLength);
    }

    useEffect(() => {
        setClickTimesLeft(clickTimes - 1);
    }, [clickTimes]);

    const handleRightRoadMap = () => {
        console.log("road map pack: ", roadMapPacks);
        console.log("click Times: ", clickTimes);
        if (roadMapPacks !== 0) {
            if (windowSize.width > 1512) {
                road.current.style.transform = `translateX(${`-${356.24 * clickTimes}px`})`;
            } else if (windowSize.width > 1024) {
                road.current.style.transform = `translateX(${`-${283.05 * clickTimes}px`})`;
            } else if (windowSize.width > 390) {
                road.current.style.transform = `translateX(${`-${319.48 * clickTimes}px`})`;
            } else {
                road.current.style.transform = `translateY(${`-${240 * clickTimes}px`})`;
            }
            setClickTimes(clickTimes + 1);
            setRoadMapPacks(roadMapPacks - 1);
        } else {
            handleWidth();
            console.log("Transform: ", road.current.style.transform);
        }
    };

    const handleLeftRoadMap = () => {
        // console.log("clickTimesLeft",clickTimesLeft);
        // console.log("clickTimes",clickTimes);
        if (clickTimesLeft !== 0) {
            if (windowSize.width > 1512) {
                road.current.style.transform = `translateX(${`-${356.24 * (clickTimesLeft - 1)}px`})`;
            } else if (windowSize.width > 1024) {
                road.current.style.transform = `translateX(${`-${283.05 * (clickTimesLeft - 1)}px`})`;
            } else if (windowSize.width > 390) {
                road.current.style.transform = `translateX(${`-${319.48 * (clickTimesLeft - 1)}px`})`;
            }
            setClickTimesLeft(clickTimesLeft - 1);
        }
    };
    
    return (
        <div id="RoadMapSection">
            <Title title={"Roadmap"} />
            <Row className="mt-5 roadmap">
                {
                    windowSize.width > 575 ? 
                        <div className="edgtf-elements-holder">
                            <div className="edgtf-eh-item">
                                <div className="edgtf-eh-item-inner">
                                    <div className="edgtf-eh-item-content" style={{padding: '10px 3.2% 10px'}}>
                                        <div className="edftf-roadmap">
                                            <div className="edgtf-roadmap-line">
                                                <div className="edgtf-rl-arrow-left">
                                                    <BsChevronLeft onClick={handleLeftRoadMap} />
                                                </div>
                                                <div className="edgtf-rl-arrow-right">
                                                    <BsChevronRight onClick={handleRightRoadMap} />
                                                </div>
                                            </div>
                                            <div className="edgtf-roadmap-line-holder" ref={road}>
                                                {
                                                    roadmapItems.map((item, index) => {
                                                        return (
                                                            <div className="edgtf-roadmap-item" key={index}>
                                                                <div className={`edgtf-roadmap-item-circle-holder ${item.actived ? 'actived' : ''}`}>
                                                                    <div className="edgtf-roadmap-item-before-circle"></div>
                                                                    <div className="edgtf-roadmap-item-circle"></div>
                                                                    <div className="edgtf-roadmap-item-after-circle"></div>
                                                                </div>
                                                                <div className={`edgtf-roadmap-item-stage-title-holder ${item.position}`}>
                                                                    <span className="edgtf-roadmap-ris-title">{item.date}</span>
                                                                </div>
                                                                <div className={`edgtf-roadmap-item-content-holder ${item.position}`} style={{backgroundImage: `url(${item.backgroundImg})`}}>
                                                                    <h1 className="edgtf-ric-title text-center">{item.title}</h1>
                                                                    <div className="edgtf-ric-content text-center">{item.desc}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="edgtf-elements-holder">
                            <div className="edgtf-eh-item">
                                <div className="edgtf-eh-item-inner">
                                    <div className="edgtf-eh-item-content" style={{padding: '10px 3.2% 10px'}}>
                                        <div className="edftf-roadmap">
                                            <div className="edgtf-roadmap-line">
                                                <div className="edgtf-rl-arrow-left">
                                                    <BsChevronLeft />
                                                </div>
                                                <div className="edgtf-rl-arrow-right">
                                                    <BsChevronRight />
                                                </div>
                                            </div>
                                            <div className="edgtf-roadmap-line-holder">
                                                <div className="edgtf-roadmap-item" style={{width: windowSize.width * 0.93}}>
                                                    <div className={`edgtf-roadmap-item-circle-holder down`}>
                                                        <div className="edgtf-roadmap-item-before-circle"></div>
                                                        <div className="edgtf-roadmap-item-circle"></div>
                                                        <div className="edgtf-roadmap-item-after-circle"></div>
                                                    </div>
                                                    <div className={`edgtf-roadmap-item-stage-title-holder down`}>
                                                        <span className="edgtf-roadmap-ris-title">Q2 2023</span>
                                                    </div>
                                                    {
                                                        roadmapItems.map((item, index) => {
                                                            // if (index < 3) {
                                                                return (
                                                                <div className={`edgtf-roadmap-item-content-holder down`} style={{top: `${75 + 240 * index}px`, backgroundImage: `url(${item.backgroundImg})`}} key={index}>
                                                                    <h1 className="edgtf-ric-title text-center">{item.title}</h1>
                                                                    <div className="edgtf-ric-content text-center">{item.desc}</div>
                                                                </div>
                                                                )
                                                            // }
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
                
            </Row>
        </div>
    )
}

export default RoadMap;