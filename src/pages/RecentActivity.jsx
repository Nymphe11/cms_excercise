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

const userData = [
  {
    name: '사용자 1',
    age: 24,
    address: '서울시 강남구',
    email: 'a@a.a',
    profileImg: profileImages.user1,
    eventKey: '#link1',
  },
  {
    name: '사용자 2',
    age: 41,
    address: '경기도 성남시',
    email: 'b@b.b',
    profileImg: profileImages.user2,
    eventKey: '#link2',
  },
];

const RecentActivity = () => {
  return (
    <article>
      <PageTitle
        title="최근 활동 내역"
        desc="사용자의 최근 활동 내역을 볼 수 있는 페이지 입니다."
      />
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={4}>
            <ListGroup>
              {userData.map((item, index) => (
                <ListGroup.Item action href={item.eventKey} key={index}>
                  {item.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              {userData.map((item, index) => (
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
