import Search from 'antd/es/transfer/search';
import PageTitle from '../components/PageTitle';
import { profileImages } from '../components/ProfileImg';
import {
  ListGroup,
  Button,
  Table,
  Col,
  Row,
  Tab,
  Image,
} from 'react-bootstrap';
import { useState } from 'react';

const userData = [
  {
    name: '박서윤',
    age: 24,
    address: '서울시 강남구',
    email: 'a@a.a',
    profileImg: profileImages.user1,
    eventKey: '#link1',
  },
  {
    name: '홍지원',
    age: 41,
    address: '경기도 성남시',
    email: 'b@b.b',
    profileImg: profileImages.user2,
    eventKey: '#link2',
  },
  {
    name: '최준혁',
    age: 33,
    address: '대구시 달서구',
    email: 'c@c.c',
    profileImg: profileImages.user3,
    eventKey: '#link3',
  },
  {
    name: '송태현',
    age: 25,
    address: '전주시 완산구',
    email: 'd@d.d',
    profileImg: profileImages.user4,
    eventKey: '#link4',
  },
  {
    name: '김하늘',
    age: 19,
    address: '울산광역시 울주군',
    email: 'e@e.e',
    profileImg: profileImages.user5,
    eventKey: '#link5',
  },
];

const RecentActivity = () => {
  const [searchTerm, serSearchTerm] = useState('');

  const filteredUserData = userData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    serSearchTerm(e.target.value);
  };

  return (
    <article>
      <PageTitle
        title="최근 활동 내역"
        desc="사용자의 최근 활동 내역을 볼 수 있는 페이지 입니다."
      />
      <div style={{ paddingBottom: 30 }}>
        <Search
          placeholder="사용자명 검색"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={4}>
            <ListGroup>
              {filteredUserData.map((item, index) => (
                <ListGroup.Item action href={item.eventKey} key={index}>
                  {item.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              {filteredUserData.map((item, index) => (
                <Tab.Pane eventKey={item.eventKey} key={index}>
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>이름</td>
                        <td>{item.name}</td>
                      </tr>
                      <tr>
                        <td>나이</td>
                        <td>{item.age}</td>
                      </tr>
                      <tr>
                        <td>주소</td>
                        <td>{item.address}</td>
                      </tr>
                      <tr>
                        <td>이메일</td>
                        <td>{item.email}</td>
                      </tr>
                      <tr>
                        <td>프로필 이미지</td>
                        <td>
                          <Image
                            src={item.profileImg}
                            style={{ width: '100px', height: '100px' }}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </article>
  );
};

export default RecentActivity;
