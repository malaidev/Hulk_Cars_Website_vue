import { useEffect, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import '../style/scss/cryptoBar.scss';
import axios from 'axios';
import { baseURL } from '../utils/helper';

const CryptoBar = () => {
    const firstBar = useRef();
    const secondBar = useRef();
    const [ coinDatas, setCoinDatas ] = useState([]);

    useEffect(() => {
        coinMarketAPI();
        const interval = setInterval(() => {
            coinMarketAPI();
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const coinMarketAPI = async () => {
        axios.get(baseURL)
        .then((result) => {
            const coin = result.data.data;
            const coins = [];
            [0, 1, 2, 3, 7, 8].map((n) => {
                coins.push({
                        img: `https://static.coincap.io/assets/icons/${coin[n].symbol.toLowerCase()}@2x.png`, 
                        coinName: coin[n].name, 
                        coinPrice: coin[n].quote.USD.price.toFixed(4),
                        percent_change_7d: coin[n].quote.USD.percent_change_7d.toFixed(4)
                    })
            });
            setCoinDatas(coins);
        })
        .catch((e) => {
            console.log(e);
        })
    }

    return (
        <div id="HomeSection">
            <div className='crypto-bar'>
                <div className='flow-bar' ref={firstBar}>
                    {
                        coinDatas?.map((coinData, index) => {
                            return (
                                <div key={index} style={{width: "300px", display: 'inline-block'}}>
                                    <CryptoBarItem data={coinData} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flow-bar' ref={secondBar}>
                    {
                        coinDatas.map((coinData, index) => {
                            return (
                                <div key={index} style={{width: "300px", display: 'inline-block'}}>
                                    <CryptoBarItem data={coinData} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flow-bar'>
                    {
                        coinDatas.map((coinData, index) => {
                            return (
                                <div key={index} style={{width: "300px", display: 'inline-block'}}>
                                    <CryptoBarItem data={coinData} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const CryptoBarItem = (props) => {
    const { data } = props;
    return (
        <div className='d-flex align-items-center gap-3'>
            <Form.Text className='d-flex gap-2 align-items-center text-middle'>
                <img src={data.img} width="16" height="16" alt="" />{data.coinName}</Form.Text>
            <Form.Text className='text-middle'>${data.coinPrice}</Form.Text>
            <Form.Text className='text-light d-flex align-items-center gap-2'>
                {
                    data.percent_change_7d < 0 ? 
                    <Form.Text className='text-red'>\"</Form.Text>
                    :
                    <Form.Text style={{color: '#ACEB2F'}}>\"</Form.Text>
                }
                {data.percent_change_7d}%
            </Form.Text>
        </div>
    )
}
export default CryptoBar;