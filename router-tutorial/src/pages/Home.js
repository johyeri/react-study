import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <ul>
        <li>
          <Link to="/About">소개</Link>
        </li>
        <li>
          <Link to="/profiles/hyeri">HYERI's Profile</Link>
        </li>
        <li>
          <Link to="/profiles/suyoung">SUYOUNG's Profile</Link>
        </li>
        <li>
          <Link to="/profiles/void">UNKNOWN's Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;