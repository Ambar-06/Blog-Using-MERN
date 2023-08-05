import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';
import ArticleList from './pages/ArticleList';
import Article from './pages/Article';

//components
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
    <Navbar />
    <div className="max-w-screen-md mx-auto pt-20">
      <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
      <Routes>
      <Route path='/about' element={<About />} />
    </Routes>
      <Routes>
      <Route path='/articles-list' element={<ArticleList />} />
    </Routes>
      <Routes>
      <Route path='/article' element={<Article />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
