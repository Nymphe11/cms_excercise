import PageTitle from '../components/PageTitle';
import Table from 'react-bootstrap/Table';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '제품 1',
    '공유 횟수': 4000,
    조회수: 2400,
  },
  {
    name: '제품 2',
    '공유 횟수': 3000,
    조회수: 1398,
  },
  {
    name: '제품 3',
    '공유 횟수': 2000,
    조회수: 9800,
  },
  {
    name: '제품 4',
    '공유 횟수': 2780,
    조회수: 3908,
  },
  {
    name: '제품 5',
    '공유 횟수': 1890,
    조회수: 4800,
  },
  {
    name: '제품 6',
    '공유 횟수': 2390,
    조회수: 3800,
  },
  {
    name: '제품 7',
    '공유 횟수': 3490,
    조회수: 4300,
  },
];

const sortedData = [...data].sort((a, b) => b['조회수'] - a['조회수']);

const ContentPerformance = () => {
  return (
    <article>
      <PageTitle
        title="콘텐츠 성과 지표"
        desc="콘텐츠 성과 지표를 나타내는 페이지 입니다."
      />
      <div>
        {data && (
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="공유 횟수"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="조회수"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        )}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>순위</th>
              <th>제품명</th>
              <th>공유 횟수</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, index) => (
              <tr key={item.name}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item['공유 횟수']}</td>
                <td>{item['조회수']}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </article>
  );
};

export default ContentPerformance;
