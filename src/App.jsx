import { useState, useEffect } from 'react';
import Postal from './pages/Postal';

// Simple Router Hook
const useRouter = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (newPath) => {
    window.history.pushState({}, '', newPath);
    setPath(newPath);
  };

  return { path, navigate };
};

// Pages
const Home = () => <div><h1>Home Page</h1></div>;
const About = () => <div><h1>About Page</h1></div>;
const Contact = () => <div><h1>Contact Page</h1></div>;

// App
const App = () => {
  const { path, navigate } = useRouter();

  return (
    <div>
      <nav>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/about')}>Postal</button>
        <button onClick={() => navigate('/contact')}>Contact</button>
      </nav>

      {path === '/' && <Home />}
      {path === '/about' && <Postal />}
      {path === '/contact' && <Contact />}
    </div>
  );
};

export default App;