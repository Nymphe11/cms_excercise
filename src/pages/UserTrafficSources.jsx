import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import PageTitle from '../components/PageTitle';

const cardData = [
  {
    header: '유튜브',
    title: 'Youtube Traffic',
    subtitle: '사용자 유입 경로 분석',
    commitData: [
      { name: '2020', commit: 250 },
      { name: '2021', commit: 120 },
      { name: '2022', commit: 650 },
    ],
  },
  {
    header: '인스타그램',
    title: 'Instagram Traffic',
    subtitle: '사용자 유입 경로 분석',
    commitData: [
      { name: '2020', commit: 100 },
      { name: '2021', commit: 480 },
      { name: '2022', commit: 380 },
    ],
  },
  {
    header: '페이스북',
    title: 'Facebook Traffic',
    subtitle: '사용자 유입 경로 분석',
    commitData: [
      { name: '2020', commit: 120 },
      { name: '2021', commit: 300 },
      { name: '2022', commit: 620 },
    ],
  },
];

const UserTrafficSources = () => {
  return (
    <article>
      <PageTitle
        title="사용자 유입경로"
        desc="사용자 유입경로를 나타내는 페이지 입니다."
      />
      <Container>
        <Row>
          {cardData.map((data, index) => (
            <Col>
              <Card style={{ width: '25rem' }} className="mb-2" key={index}>
                <Card.Header>{data.header}</Card.Header>
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {data.subtitle}
                  </Card.Subtitle>
                  <Card.Text>
                    {data.commitData && (
                      <LineChart
                        width={350}
                        height={280}
                        data={data.commitData}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="commit"
                          stroke="#6ABD8C"
                          activeDot={{ r: 2 }}
                          isAnimationActive={false}
                        />
                      </LineChart>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </article>
  );
};

export default UserTrafficSources;

// const styles = {
//   card: {
//     marginBottom: '1rem',
//   },
// };
