import { Routes, Route } from 'react-router';
import { useEffect } from 'react';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import SearchResults from './pages/SearchResults';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';

function App() {
  // Initialize theme on mount
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogDetails />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="terms-conditions" element={<TermsConditions />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
