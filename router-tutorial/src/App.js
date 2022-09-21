import { Route, Routes } from 'react-router-dom'
import Layout from './Layout';
import About from './pages/About'
import Home from './pages/Home'
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';


const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} /> //중첩라우트
      </Route>
    </Routes>
  );
};

export default App;