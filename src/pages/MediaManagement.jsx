import { Image } from 'react-bootstrap';
import PageTitle from '../components/PageTitle';
import ProgressBar from 'react-bootstrap/ProgressBar';

const MediaManagement = () => {
  const now = 40;
  return (
    <article>
      <PageTitle title="미디어 관리" desc="미디어 관리를 하는 페이지 입니다." />
      <div style={{ margin: 40 }}>
        <Image
          src="/src/assets/cityview.jpg"
          style={{ width: '50rem', height: '25rem', marginBottom: 40 }}
        />
        <ProgressBar
          animated
          now={now}
          label={`${now}%`}
          style={{ width: '50rem' }}
        />
      </div>
    </article>
  );
};

export default MediaManagement;
