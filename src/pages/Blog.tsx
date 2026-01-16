import { Link } from 'react-router';
import { FaSearch, FaCalendar, FaUser, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Blog = () => {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-12 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 dark:text-white">Our Blog</h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">Insights, updates, and expert perspectives on technology, digital transformation, and business growth.</p>

          {/* Hero Search Bar */}
          <div className="max-w-xl mx-auto">
            <form action="/search" method="GET" className="relative">
              <input
                type="text"
                name="q"
                placeholder="Search articles..."
                className="w-full pl-5 pr-12 py-4 rounded-full shadow-sm border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-lg transition-all dark:bg-slate-900 dark:border-slate-700 dark:text-white"
                required
              />
              <button type="submit" title="Search articles" className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all">
                <FaSearch />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 bg-white dark:bg-slate-900 grow">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Featured Post */}
              <article className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all dark:bg-slate-800 dark:border-slate-700">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Tech Team"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Featured</span>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center text-sm text-slate-500 mb-4 dark:text-slate-400">
                    <span className="flex items-center"><FaCalendar className="mr-2" />Oct 24, 2023</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center"><FaUser className="mr-2" />John Doe</span>
                    <span className="mx-2">•</span>
                    <span className="text-primary font-semibold">Technology</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 hover:text-primary transition-colors dark:text-white">
                    <Link to="/blog/ai-in-enterprise">The Future of AI in Enterprise Business</Link>
                  </h2>
                  <p className="text-slate-600 mb-6 dark:text-slate-300">
                    Artificial Intelligence is no longer just a buzzword. It's revolutionizing how enterprises operate, make decisions, and interact with customers. Learn how to stay ahead...
                  </p>
                  <Link to="/blog/ai-in-enterprise" className="inline-flex items-center text-primary font-semibold hover:underline">
                    Read More <FaArrowRight className="ml-2 text-xs" />
                  </Link>
                </div>
              </article>

              {/* Post Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                <article className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700 flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Data Analytics"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 grow flex flex-col">
                    <div className="flex items-center text-xs text-slate-500 mb-3 dark:text-slate-400">
                      <span>Oct 15, 2023</span>
                      <span className="mx-2">•</span>
                      <span className="text-primary">Data Science</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-primary transition-colors dark:text-white">
                      <Link to="/blog/big-data">Leveraging Big Data for Growth</Link>
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 grow dark:text-slate-300">
                      How valid data strategies can transform your decision-making process.
                    </p>
                    <Link to="/blog/big-data" className="inline-flex items-center text-primary text-sm font-semibold hover:underline mt-auto">
                      Read Article <FaArrowRight className="ml-1 text-xs" />
                    </Link>
                  </div>
                </article>

                <article className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700 flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Coding"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 grow flex flex-col">
                    <div className="flex items-center text-xs text-slate-500 mb-3 dark:text-slate-400">
                      <span>Oct 10, 2023</span>
                      <span className="mx-2">•</span>
                      <span className="text-primary">Development</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-primary transition-colors dark:text-white">
                      <Link to="/blog/clean-code">Why Clean Code Matters</Link>
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 grow dark:text-slate-300">
                      The long-term benefits of maintaining high-quality codebases in enterprise software.
                    </p>
                    <Link to="/blog/clean-code" className="inline-flex items-center text-primary text-sm font-semibold hover:underline mt-auto">
                      Read Article <FaArrowRight className="ml-1 text-xs" />
                    </Link>
                  </div>
                </article>
              </div>

              {/* Pagination */}
              <div className="flex justify-center space-x-2 pt-8">
                <a href="#" title="Previous page" className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800">
                  <FaChevronLeft />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-primary dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">2</a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-primary dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">3</a>
                <span className="w-10 h-10 flex items-center justify-center text-slate-400">...</span>
                <a href="#" title="Next page" className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800">
                  <FaChevronRight />
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Categories */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 dark:bg-slate-800 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 mb-4 dark:text-white">Categories</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="flex justify-between items-center text-slate-600 hover:text-primary dark:text-slate-300">
                      Technology <span className="bg-slate-200 text-xs px-2 py-1 rounded-full dark:bg-slate-700">12</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex justify-between items-center text-slate-600 hover:text-primary dark:text-slate-300">
                      Business <span className="bg-slate-200 text-xs px-2 py-1 rounded-full dark:bg-slate-700">8</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex justify-between items-center text-slate-600 hover:text-primary dark:text-slate-300">
                      Design <span className="bg-slate-200 text-xs px-2 py-1 rounded-full dark:bg-slate-700">5</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex justify-between items-center text-slate-600 hover:text-primary dark:text-slate-300">
                      Development <span className="bg-slate-200 text-xs px-2 py-1 rounded-full dark:bg-slate-700">15</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Tags */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 dark:bg-slate-800 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 mb-4 dark:text-white">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <a href="#" className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-600 hover:border-primary hover:text-primary transition-colors dark:bg-slate-900 dark:border-slate-600 dark:text-slate-300">#AI</a>
                  <a href="#" className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-600 hover:border-primary hover:text-primary transition-colors dark:bg-slate-900 dark:border-slate-600 dark:text-slate-300">#Cloud</a>
                  <a href="#" className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-600 hover:border-primary hover:text-primary transition-colors dark:bg-slate-900 dark:border-slate-600 dark:text-slate-300">#Startup</a>
                  <a href="#" className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-600 hover:border-primary hover:text-primary transition-colors dark:bg-slate-900 dark:border-slate-600 dark:text-slate-300">#Innovation</a>
                  <a href="#" className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-600 hover:border-primary hover:text-primary transition-colors dark:bg-slate-900 dark:border-slate-600 dark:text-slate-300">#Tech</a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
