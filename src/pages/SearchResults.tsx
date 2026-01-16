import { Link, useSearchParams } from 'react-router';
import { FaSearch, FaCalendar, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  return (
    <>
      {/* Page Header with Search Bar */}
      <section className="pt-32 pb-12 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 dark:text-white">Search Results</h1>
          {query && (
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Showing results for: <span className="font-semibold text-slate-900 dark:text-white">"{query}"</span>
            </p>
          )}

          {/* Hero Search Bar */}
          <div className="max-w-xl mx-auto">
            <form action="/search" method="GET" className="relative">
              <input
                type="text"
                name="q"
                defaultValue={query}
                placeholder="Search articles..."
                className="w-full pl-5 pr-12 py-4 rounded-full shadow-sm border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-lg transition-all dark:bg-slate-900 dark:border-slate-700 dark:text-white"
                required
              />
              <button type="submit" title="Search" className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all">
                <FaSearch />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="py-12 bg-white dark:bg-slate-900 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Results Count */}
            <div className="mb-8">
              <p className="text-slate-600 dark:text-slate-300">
                Found <span className="font-bold text-slate-900 dark:text-white">3 articles</span>
              </p>
            </div>

            {/* Results List */}
            <div className="space-y-8">
              {/* Result Item 1 */}
              <article className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all dark:bg-slate-800 dark:border-slate-700">
                <div className="flex items-start gap-6">
                  <div className="hidden sm:block shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                      alt="Article"
                      className="w-32 h-24 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center text-xs text-slate-500 mb-2 dark:text-slate-400">
                      <span className="flex items-center"><FaCalendar className="mr-1" />Oct 24, 2023</span>
                      <span className="mx-2">•</span>
                      <span className="text-primary font-semibold">Technology</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 hover:text-primary transition-colors dark:text-white">
                      <Link to="/blog/ai-in-enterprise">The Future of AI in Enterprise Business</Link>
                    </h2>
                    <p className="text-slate-600 mb-4 dark:text-slate-300">
                      Artificial Intelligence is no longer just a buzzword. It's revolutionizing how enterprises operate, make decisions, and interact with customers. Learn how to stay ahead...
                    </p>
                    <Link to="/blog/ai-in-enterprise" className="inline-flex items-center text-primary text-sm font-semibold hover:underline">
                      Read Full Article <FaArrowRight className="ml-1 text-xs" />
                    </Link>
                  </div>
                </div>
              </article>

              {/* Result Item 2 */}
              <article className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all dark:bg-slate-800 dark:border-slate-700">
                <div className="flex items-start gap-6">
                  <div className="hidden sm:block shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                      alt="Article"
                      className="w-32 h-24 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center text-xs text-slate-500 mb-2 dark:text-slate-400">
                      <span className="flex items-center"><FaCalendar className="mr-1" />Oct 15, 2023</span>
                      <span className="mx-2">•</span>
                      <span className="text-primary font-semibold">Data Science</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 hover:text-primary transition-colors dark:text-white">
                      <Link to="/blog/big-data">Leveraging Big Data for Business Growth</Link>
                    </h2>
                    <p className="text-slate-600 mb-4 dark:text-slate-300">
                      How valid data strategies can transform your decision-making process and drive meaningful business outcomes in today's data-driven world...
                    </p>
                    <Link to="/blog/big-data" className="inline-flex items-center text-primary text-sm font-semibold hover:underline">
                      Read Full Article <FaArrowRight className="ml-1 text-xs" />
                    </Link>
                  </div>
                </div>
              </article>

              {/* Result Item 3 */}
              <article className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all dark:bg-slate-800 dark:border-slate-700">
                <div className="flex items-start gap-6">
                  <div className="hidden sm:block shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                      alt="Article"
                      className="w-32 h-24 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center text-xs text-slate-500 mb-2 dark:text-slate-400">
                      <span className="flex items-center"><FaCalendar className="mr-1" />Oct 10, 2023</span>
                      <span className="mx-2">•</span>
                      <span className="text-primary font-semibold">Development</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 hover:text-primary transition-colors dark:text-white">
                      <Link to="/blog/clean-code">Why Clean Code Matters in Enterprise Development</Link>
                    </h2>
                    <p className="text-slate-600 mb-4 dark:text-slate-300">
                      The long-term benefits of maintaining high-quality codebases in enterprise software development. Discover best practices and methodologies...
                    </p>
                    <Link to="/blog/clean-code" className="inline-flex items-center text-primary text-sm font-semibold hover:underline">
                      Read Full Article <FaArrowRight className="ml-1 text-xs" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            {/* No Results State (commented out, can be shown conditionally) */}
            {/* <div className="text-center py-12">
              <FaSearch className="text-6xl text-slate-300 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">No results found</h3>
              <p className="text-slate-600 mb-6">
                We couldn't find any articles matching your search. Try different keywords.
              </p>
              <Link to="/blog" className="btn btn-primary">
                Browse All Articles
              </Link>
            </div> */}

            {/* Pagination */}
            <div className="flex justify-center space-x-2 pt-12">
              <a href="#" title="Previous page" className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800">
                <FaChevronLeft />
              </a>
              <a href="#" title="Page 1" className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</a>
              <a href="#" title="Page 2" className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-primary dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">2</a>
              <a href="#" title="Next page" className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800">
                <FaChevronRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchResults;
