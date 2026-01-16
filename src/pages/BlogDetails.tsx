import { Link } from 'react-router';
import { FaChevronRight, FaCalendar, FaClock, FaArrowRight, FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const BlogDetails = () => {

  return (
    <>
      {/* Breadcrumbs */}
      <section className="pt-28 pb-6 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center text-sm text-slate-500 dark:text-slate-400">
            <Link to="/" className="hover:text-primary">Home</Link>
            <FaChevronRight className="mx-2 text-xs" />
            <Link to="/blog" className="hover:text-primary">Blog</Link>
            <FaChevronRight className="mx-2 text-xs" />
            <span className="text-slate-900 font-medium dark:text-white">Article Title</span>
          </nav>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center text-sm text-slate-500 mb-4 dark:text-slate-400">
                <span className="flex items-center"><FaCalendar className="mr-2" />October 24, 2023</span>
                <span className="mx-3">•</span>
                <span className="flex items-center"><FaClock className="mr-2" />8 min read</span>
                <span className="mx-3">•</span>
                <span className="text-primary font-semibold">Technology</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 dark:text-white">
                The Future of AI in Enterprise Business
              </h1>
              <div className="flex items-center gap-4 pb-8 border-b border-slate-200 dark:border-slate-700">
                <img
                  src="https://i.pravatar.cc/80?img=12"
                  alt="Author"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">John Doe</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Senior Tech Writer</p>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-10 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Article"
                className="w-full h-auto"
              />
            </div>

            {/* Article Body */}
            <div className="prose prose-lg prose-slate max-w-none dark:prose-invert">
              <p className="lead text-xl text-slate-600 dark:text-slate-300">
                Artificial Intelligence is no longer just a buzzword in the technology world. It has become an integral part of how modern enterprises operate, make decisions, and interact with their customers.
              </p>

              <h2>Understanding AI in Business Context</h2>
              <p>
                The integration of AI into business operations represents a fundamental shift in how companies approach problem-solving and innovation. From automating routine tasks to providing deep insights through data analysis, AI is transforming every aspect of enterprise operations.
              </p>

              <h3>Key Areas of Impact</h3>
              <ul>
                <li><strong>Customer Service:</strong> AI-powered chatbots and virtual assistants are revolutionizing customer support.</li>
                <li><strong>Data Analytics:</strong> Machine learning algorithms can process vast amounts of data to identify patterns and trends.</li>
                <li><strong>Process Automation:</strong> Robotic Process Automation (RPA) is streamlining repetitive tasks.</li>
                <li><strong>Decision Making:</strong> AI provides data-driven insights to support strategic decisions.</li>
              </ul>

              <blockquote>
                "The question is not whether AI will transform business, but how quickly businesses will adapt to harness its full potential."
              </blockquote>

              <h2>Implementation Strategies</h2>
              <p>
                Successfully implementing AI in an enterprise environment requires careful planning and execution. Organizations must consider their existing infrastructure, workforce capabilities, and long-term strategic goals.
              </p>

              <h3>Steps to Success</h3>
              <ol>
                <li>Identify specific business problems that AI can solve</li>
                <li>Build or acquire the necessary data infrastructure</li>
                <li>Invest in talent development and training</li>
                <li>Start with pilot projects before scaling</li>
                <li>Establish governance frameworks for AI use</li>
              </ol>

              <h2>Challenges and Considerations</h2>
              <p>
                While the potential of AI is immense, enterprises must also be aware of the challenges. These include data privacy concerns, the need for significant investment, potential bias in AI algorithms, and the ethical implications of automated decision-making.
              </p>

              <h2>Looking Ahead</h2>
              <p>
                The future of AI in enterprise business is bright. As technologies continue to evolve and mature, we can expect even more sophisticated applications that will further transform how businesses operate. The key to success will be staying informed, remaining adaptable, and maintaining a human-centered approach to AI implementation.
              </p>
            </div>

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-slate-600 font-semibold dark:text-slate-300">Tags:</span>
                <a href="#" className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-600 hover:bg-primary hover:text-white transition-colors dark:bg-slate-800 dark:text-slate-300">#AI</a>
                <a href="#" className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-600 hover:bg-primary hover:text-white transition-colors dark:bg-slate-800 dark:text-slate-300">#Enterprise</a>
                <a href="#" className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-600 hover:bg-primary hover:text-white transition-colors dark:bg-slate-800 dark:text-slate-300">#Technology</a>
                <a href="#" className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-600 hover:bg-primary hover:text-white transition-colors dark:bg-slate-800 dark:text-slate-300">#Innovation</a>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-4">
                <span className="text-slate-600 font-semibold dark:text-slate-300">Share:</span>
                <a href="#" title="Share on Facebook" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-blue-500 hover:text-white transition-colors dark:bg-slate-800">
                  <FaFacebookF />
                </a>
                <a href="#" title="Share on Twitter" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-blue-400 hover:text-white transition-colors dark:bg-slate-800">
                  <FaTwitter />
                </a>
                <a href="#" title="Share on LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-blue-700 hover:text-white transition-colors dark:bg-slate-800">
                  <FaLinkedinIn />
                </a>
                <a href="#" title="Share on WhatsApp" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-green-500 hover:text-white transition-colors dark:bg-slate-800">
                  <FaWhatsapp />
                </a>
              </div>
            </footer>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-12 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center dark:text-white">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <article key={i} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-700">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${1460925895917 + i * 1000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                    alt="Related"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-xs text-slate-500 mb-3 dark:text-slate-400">
                    <span>Oct {20 - i}, 2023</span>
                    <span className="mx-2">•</span>
                    <span className="text-primary">Technology</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 hover:text-primary transition-colors dark:text-white">
                    <Link to={`/blog/related-${i}`}>Related Article Title {i}</Link>
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 dark:text-slate-300">
                    Brief description of the related article content...
                  </p>
                  <Link to={`/blog/related-${i}`} className="inline-flex items-center text-primary text-sm font-semibold hover:underline">
                    Read More <FaArrowRight className="ml-1 text-xs" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
