import { useParams } from 'react-router-dom';

const data = {
  hyeri: {
    name: '조혜리',
    description: '리액트를 싫어하는 개발자',
  },
  suyoung: {
    name: '서수영',
    description: '공부하기 싫어하면서 제일 열심히 하는 사람'
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;