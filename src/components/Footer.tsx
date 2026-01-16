import { Link } from 'react-router';
import { FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <img src="/assets/logo-inverted.svg" alt="Bold Solutions" className="h-16 w-auto" />
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm">
              Empowering businesses with innovative technology solutions that drive growth and transformation.
            </p>
            <div className="flex gap-4">
              <a href="#" title="Follow us on LinkedIn" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <FaLinkedinIn />
              </a>
              <a href="#" title="Follow us on Twitter" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <FaTwitter />
              </a>
              <a href="#" title="Follow us on GitHub" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/#services" className="hover:text-primary transition-colors">Services</a></li>
              {/* <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li> */}
              <li><a href="/#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; 2026 Bold Solutions. All rights reserved.</p>
          <p>Designed for better future.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
