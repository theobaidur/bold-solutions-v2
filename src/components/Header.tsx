import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { useTheme } from '../hooks/useTheme';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed w-full top-0 z-50 glass-nav shadow-sm transition-all duration-300 dark:bg-slate-900/90 dark:border-b dark:border-slate-800" id="navbar">
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/assets/logo.svg" alt="Bold Solutions" className="h-16 md:h-20 w-auto dark:hidden" />
          <img src="/assets/logo-inverted.svg" alt="Bold Solutions" className="h-16 md:h-20 w-auto hidden dark:block" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-sm">
          <Link to="/" className={`hover:text-primary transition-colors dark:text-slate-200 dark:hover:text-primary ${isActive('/') && location.pathname === '/' ? 'text-primary font-bold' : ''}`}>
            Home
          </Link>
          {/* <Link to="/blog" className={`hover:text-primary transition-colors dark:text-slate-200 dark:hover:text-primary ${isActive('/blog') ? 'text-primary font-bold' : ''}`}>
            Blog
          </Link> */}
          <a href="/#about" className="hover:text-primary transition-colors dark:text-slate-200 dark:hover:text-primary">
            About
          </a>
          <a href="/#services" className="hover:text-primary transition-colors dark:text-slate-200 dark:hover:text-primary">
            Services
          </a>

          <button
            onClick={toggleTheme}
            className="text-slate-600 hover:text-primary focus:outline-none dark:text-slate-300 dark:hover:text-primary transition-colors text-lg"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <HiSun /> : <HiMoon />}
          </button>

          <a href="/#contact" className="px-5 py-2.5 bg-primary text-white rounded-full hover:bg-opacity-90 transition-all hover:shadow-lg transform hover:-translate-y-0.5">
            Contact Us
          </a>
        </nav>

        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={toggleTheme}
            className="text-slate-700 hover:text-primary focus:outline-none dark:text-slate-300 transition-colors text-xl"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <HiSun /> : <HiMoon />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl text-slate-700 hover:text-primary focus:outline-none dark:text-slate-300"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:hidden absolute w-full bg-white shadow-xl border-t border-slate-100 dark:bg-slate-900 dark:border-slate-800`}>
        <div className="flex flex-col p-4 space-y-4 font-medium text-center">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`hover:text-primary transition-colors dark:text-slate-200 ${isActive('/') && location.pathname === '/' ? 'text-primary font-bold' : ''}`}>
            Home
          </Link>
          {/* <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className={`hover:text-primary transition-colors dark:text-slate-200 ${isActive('/blog') ? 'text-primary font-bold' : ''}`}>
            Blog
          </Link> */}
          <a href="/#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors dark:text-slate-200">
            About
          </a>
          <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="inline-block text-center px-5 py-2.5 bg-primary text-white rounded-full hover:bg-opacity-90">
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
