import { Col, Container, ProgressBar, Row } from "react-bootstrap"
import Title from "./Title"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import '../style/scss/tokenomics.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

const Tokenomics = () => {
    const data = {
        labels: ['Marketing', 'Liquidity', 'Burn'],
        datasets: [
          {
            label: '',
            data: [3, 1, 2],
            backgroundColor: [
                '#AAFF00',
                '#7F8389',
                '#FFFFFF',
            ],
            borderColor: [
                '#AAFF00',
                '#7F8389',
                '#FFFFFF',
            ],
            borderWidth: 1,
          },
        ],
    };
    const options = {
        plugins:{
            legend:{display: false}, 
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        return label;
                    }
                }
            },
        },
    };

    const plugins = [{
        id: 'text',
        beforeDraw: function(chart, a, b) {
          var width = chart.width,
            height = chart.height,
            ctx = chart.ctx;
    
          ctx.restore();
          var fontSize = (height / 114).toFixed(2);
          ctx.font = "900 " + fontSize + "em sans-serif";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "white";
    
          var text = "6%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
    
          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }];

    const tokenomics = [
        {name: 'Marketing', apy: '3%', progress: '50', color: 'success'},
        {name: 'Liquidity', apy: '2%', progress: '35', color: 'info'},
        {name: 'Burn', apy: '1%', progress: '15', color: 'warning'}
    ]
    return (
        <Container id="TokenomicsSection">
            <Title title={"Tokenomics"} />
            <Row className="tokenomics mt-5">
                <Col lg={6} md={6} sm={6} xs={12} className="chart d-flex justify-content-center">
                    <Doughnut data={data} options={options} plugins={plugins}/>
                </Col>
                <Col lg={6} md={6} sm={6} xs={12} className="d-flex flex-column justify-content-center gap-5 content">
                    {
                        tokenomics.map((token, index) => {
                            return (
                                <div className="token" key={index}>
                                    <h6 style={{fontSize: "25px", fontFamily: "Raleway", color: "#FFFFFF", fontWeight: "500"}}>{token.name} {token.apy}</h6>
                                    <ProgressBar variant={token.color} now={token.progress} />
                                </div>
                            )
                        })
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Tokenomics;