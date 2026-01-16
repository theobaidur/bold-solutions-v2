import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
