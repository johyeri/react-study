import { useParams } from 'react-router-dom';
import Categories from '../components/Categories';

const NewsPage = () => {
  const paras = useParams();
  // 카테고리가 선택되지 않았으면 기본값 all로 사용
  const category = params.category || 'all';
  return (
    <>
      <Categories />
      <NewsPage category={category} />
    </>
  );
};

export default NewsPage;
