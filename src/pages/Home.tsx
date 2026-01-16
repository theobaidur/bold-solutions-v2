import { FaArrowRight } from 'react-icons/fa';

import { FaLaptopCode, FaCloud, FaBrain, FaBriefcase, FaShieldAlt, FaUserPlus, FaCheck, FaBolt, FaLock, FaChartLine, FaRocket, FaQuoteLeft, FaChevronDown, FaEnvelope, FaCalendarCheck } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden dark:bg-slate-900">
        <div className="absolute inset-0 hero-pattern z-0 opacity-10 dark:opacity-[0.05]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider mb-6 animate-fade-in-up dark:bg-primary/20">
            INNOVATE • TRANSFORM • GROW
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight max-w-4xl mx-auto dark:text-white">
            Bold Solutions for the <span className="block text-primary transparent-text-stroke">Digital Future</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed dark:text-slate-300">
            Empowering businesses with innovative technology solutions that drive growth and transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 w-full sm:w-auto text-center">
              Get Started
            </a>
            <a href="#services" className="px-8 py-4 bg-white text-slate-800 border-2 border-slate-200 rounded-full font-semibold hover:border-primary hover:text-primary transition-all w-full sm:w-auto text-center dark:bg-slate-800 dark:text-white dark:border-slate-700 dark:hover:border-primary">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaborating"
                className="relative rounded-2xl shadow-xl w-full object-cover h-100 md:h-125"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">ABOUT US</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 dark:text-white">Who We Are</h2>
              <p className="text-xl text-slate-700 font-medium mb-4 dark:text-slate-300">
                Bold Solutions delivers innovative, quality-driven technology solutions tailored specifically for your business challenges and goals.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed dark:text-slate-400">
                We shape the future of businesses through forward-thinking technology approaches. With a strong focus on creativity, quality, and adaptability, we empower our clients to thrive and lead in today's fast-changing digital environment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-slate-900 mb-1 dark:text-white">Innovation-Driven</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Cutting-edge solutions for complex problems</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-slate-900 mb-1 dark:text-white">Client-Focused</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Personalized experiences and dedicated support</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-slate-900 mb-1 dark:text-white">Quality Assured</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Rigorous standards and best practices</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-slate-900 mb-1 dark:text-white">Results-Oriented</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Focused on measurable business outcomes</p>
                </div>
              </div>

              <div className="mt-8">
                <a href="#contact" className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all gap-1">
                  Learn More About Us <FaArrowRight className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 dark:text-white">Our Solutions</h2>
            <p className="text-slate-600 text-lg dark:text-slate-300">We offer a comprehensive suite of technology solutions designed to transform your business operations and drive growth.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group dark:bg-slate-800 dark:border-slate-700">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <FaLaptopCode />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 dark:text-white">Application Development</h3>
              <p className="text-slate-600 mb-4 leading-relaxed dark:text-slate-400">End-to-end web and mobile application development tailored to your business needs and market demands.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm text-slate-500 dark:text-slate-400">
                  <FaCheck className="text-primary mt-1 mr-2" /> Custom web frontend & backend
                </li>
                <li className="flex items-start text-sm text-slate-500 dark:text-slate-400">
                  <FaCheck className="text-primary mt-1 mr-2" /> Native & cross-platform mobile apps
                </li>
                <li className="flex items-start text-sm text-slate-500 dark:text-slate-400">
                  <FaCheck className="text-primary mt-1 mr-2" /> PWAs & responsive design
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group dark:bg-slate-800 dark:border-slate-700">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <FaCloud />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 dark:text-white">Cloud & DevOps</h3>
              <p className="text-slate-600 mb-4 leading-relaxed dark:text-slate-400">Modern cloud infrastructure and deployment solutions to optimize performance, costs, and operational efficiency.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm text-slate-500 dark:text-slate-400">
                  <FaCheck className="text-primary mt-1 mr-2" /> Cloud migration (AWS, Azure, GCP)
                </li>
                <li className="flex items-start text-sm text-slate-500 dark:text-slate-400">
                  <FaCheck className="text-primary mt-1 mr-2" /> CI/CD pipeline automation
                </li>
                <li className="flex items-start text-sm text-slate-500 dark:text-slate-400">
                  <FaCheck className="text-primary mt-1 mr-2" /> Containerization & orchestration
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group dark:bg-slate-800 dark:border-slate-700">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <FaBrain />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 dark:text-white">AI & Data Solutions</h3>
              <p className="text-slate-600 mb-4 leading-relaxed dark:text-slate-400">Advanced data analytics and artificial intelligence services to extract insights and automate business processes.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm text-slate-500 dark:text-slate-400">
                  <FaCheck className="text-primary mt-1 mr-2" /> Machine learning development
                </li>
                <li className="flex items-start text-sm text-slate-500 dark:text-slate-400">
                  <FaCheck className="text-primary mt-1 mr-2" /> NLP & Computer Vision
                </li>
                <li className="flex items-start text-sm text-slate-500 dark:text-slate-400">
                  <FaCheck className="text-primary mt-1 mr-2" /> Big data analytics & dashboards
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group dark:bg-slate-800 dark:border-slate-700">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <FaBriefcase />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 dark:text-white">Enterprise Systems</h3>
              <p className="text-slate-600 mb-4 leading-relaxed dark:text-slate-400">Integrated business systems to streamline operations and enhance productivity across your organization.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm text-slate-500 dark:text-slate-400">
                  <FaCheck className="text-primary mt-1 mr-2" /> ERP implementations & custom
                </li>
                <li className="flex items-start text-sm text-slate-500 dark:text-slate-400">
                  <FaCheck className="text-primary mt-1 mr-2" /> CRM solutions (Dynamics 365)
                </li>
                <li className="flex items-start text-sm text-slate-500 dark:text-slate-400">
                  <FaCheck className="text-primary mt-1 mr-2" /> Business process automation
                </li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group dark:bg-slate-800 dark:border-slate-700">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 dark:text-white">Security & QA</h3>
              <p className="text-slate-600 mb-4 leading-relaxed dark:text-slate-400">Comprehensive security and testing services to ensure your software is reliable, secure, and compliant.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm text-slate-500 dark:text-slate-400">
                  <FaCheck className="text-primary mt-1 mr-2" /> Security assessments & audits
                </li>
                <li className="flex items-start text-sm text-slate-500 dark:text-slate-400">
                  <FaCheck className="text-primary mt-1 mr-2" /> Compliance (ISO, GDPR, SOC2)
                </li>
                <li className="flex items-start text-sm text-slate-500 dark:text-slate-400">
                  <FaCheck className="text-primary mt-1 mr-2" /> Manual & automated testing
                </li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group dark:bg-slate-800 dark:border-slate-700">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <FaUserPlus />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 dark:text-white">Resource Augmentation</h3>
              <p className="text-slate-600 mb-4 leading-relaxed dark:text-slate-400">Flexible staffing solutions and reliable technical support to enhance your team and infrastructure.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm text-slate-500 dark:text-slate-400">
                  <FaCheck className="text-primary mt-1 mr-2" /> Dedicated developers & designers
                </li>
                <li className="flex items-start text-sm text-slate-500 dark:text-slate-400">
                  <FaCheck className="text-primary mt-1 mr-2" /> 24/7 technical support
                </li>
                <li className="flex items-start text-sm text-slate-500 dark:text-slate-400">
                  <FaCheck className="text-primary mt-1 mr-2" /> Scaling resources on demand
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="#contact" className="inline-block px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-primary/30">
              Discuss Your Project
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="whyUs" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">WHY CHOOSE US</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach to Excellence</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                We don't just write code; we build the future of your business. Our approach merges technical excellence with deep industry understanding.
              </p>

              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 text-primary text-xl">
                    <FaBolt />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Rapid Development</h4>
                    <p className="text-slate-400">We employ agile methodologies and cutting-edge tools to deliver solutions quickly without compromising quality.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 text-primary text-xl">
                    <FaLock />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Security Focused</h4>
                    <p className="text-slate-400">We implement industry-leading security practices to protect your data and ensure compliance with regulations.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 text-primary text-xl">
                    <FaChartLine />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Scalable Solutions</h4>
                    <p className="text-slate-400">Our solutions are designed to grow with your business, ensuring long-term value and sustainable success.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm font-medium tracking-wide text-slate-300 uppercase">Client Satisfaction</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center translate-y-8">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm font-medium tracking-wide text-slate-300 uppercase">Projects Completed</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">12+</div>
                  <div className="text-sm font-medium tracking-wide text-slate-300 uppercase">Years Experience</div>
                </div>
                <div className="bg-primary p-8 rounded-2xl border border-white/10 text-center translate-y-8 flex flex-col justify-center items-center">
                  <div className="text-3xl mb-2 text-white"><FaRocket /></div>
                  <div className="text-lg font-bold text-white">Let's Grow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 dark:text-white">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 dark:bg-slate-700 dark:border-slate-600">
              <div className="text-primary text-2xl mb-4"><FaQuoteLeft /></div>
              <p className="text-slate-600 mb-6 italic dark:text-slate-300">"Bold Solutions transformed our legacy systems into a cutting-edge platform that improved patient care delivery by 35%. Their team's expertise in healthcare technology was impressive."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex justify-center items-center font-bold text-slate-500 dark:bg-slate-600 dark:text-slate-300">SJ</div>
                <div>
                  <h5 className="font-bold text-slate-900 dark:text-white">Sarah Johnson</h5>
                  <p className="text-xs text-slate-500 uppercase dark:text-slate-400">CTO, HealthTech Solutions</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 dark:bg-slate-700 dark:border-slate-600">
              <div className="text-primary text-2xl mb-4"><FaQuoteLeft /></div>
              <p className="text-slate-600 mb-6 italic dark:text-slate-300">"Working with Bold Solutions on our e-commerce platform redesign exceeded our expectations. Our conversion rates increased by 28% in just three months."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex justify-center items-center font-bold text-slate-500 dark:bg-slate-600 dark:text-slate-300">MR</div>
                <div>
                  <h5 className="font-bold text-slate-900 dark:text-white">Michael Rodriguez</h5>
                  <p className="text-xs text-slate-500 uppercase dark:text-slate-400">Director, Global Retail Inc</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 dark:bg-slate-700 dark:border-slate-600">
              <div className="text-primary text-2xl mb-4"><FaQuoteLeft /></div>
              <p className="text-slate-600 mb-6 italic dark:text-slate-300">"The mobile learning platform Bold Solutions developed for our company has received rave reviews. Their UX/UI design expertise created an intuitive experience."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex justify-center items-center font-bold text-slate-500 dark:bg-slate-600 dark:text-slate-300">EW</div>
                <div>
                  <h5 className="font-bold text-slate-900 dark:text-white">Emma Wilson</h5>
                  <p className="text-xs text-slate-500 uppercase dark:text-slate-400">CPO, EdTech Innovators</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 dark:text-white">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              <details className="group bg-white p-4 rounded-xl shadow-sm overflow-hidden dark:bg-slate-800">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none text-slate-800 dark:text-slate-200">
                  How quickly can you start on my project?
                  <span className="transition group-open:rotate-180">
                    <FaChevronDown className="text-primary" />
                  </span>
                </summary>
                <p className="text-slate-600 mt-4 leading-relaxed pl-1 dark:text-slate-400">
                  We typically begin the initial consultation within 48 hours of contact and can start development within 1-2 weeks, depending on project scope and current workload.
                </p>
              </details>

              <details className="group bg-white p-4 rounded-xl shadow-sm overflow-hidden dark:bg-slate-800">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none text-slate-800 dark:text-slate-200">
                  Do you offer ongoing support after launch?
                  <span className="transition group-open:rotate-180">
                    <FaChevronDown className="text-primary" />
                  </span>
                </summary>
                <p className="text-slate-600 mt-4 leading-relaxed pl-1 dark:text-slate-400">
                  Yes, we provide comprehensive support and maintenance packages to ensure your solution continues to perform optimally long after launch.
                </p>
              </details>

              <details className="group bg-white p-4 rounded-xl shadow-sm overflow-hidden dark:bg-slate-800">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none text-slate-800 dark:text-slate-200">
                  How do you handle project pricing?
                  <span className="transition group-open:rotate-180">
                    <FaChevronDown className="text-primary" />
                  </span>
                </summary>
                <p className="text-slate-600 mt-4 leading-relaxed pl-1 dark:text-slate-400">
                  We provide transparent project-based pricing or flexible hourly rates depending on your needs. After understanding your requirements, we'll provide a detailed proposal with clear cost breakdowns.
                </p>
              </details>

              <details className="group bg-white p-4 rounded-xl shadow-sm overflow-hidden dark:bg-slate-800">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none text-slate-800 dark:text-slate-200">
                  What technologies do you work with?
                  <span className="transition group-open:rotate-180">
                    <FaChevronDown className="text-primary" />
                  </span>
                </summary>
                <p className="text-slate-600 mt-4 leading-relaxed pl-1 dark:text-slate-400">
                  We work with a wide range of modern technologies including React, Vue.js, Angular, Node.js, Python, .NET, AWS, Azure, and more.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">CONTACT US</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 dark:text-white">Get in Touch</h2>
            <p className="text-lg text-slate-600 mb-12 dark:text-slate-300">
              Ready to transform your business with innovative technology solutions? Reach out to us today.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl mb-4">
                  <FaEnvelope />
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-2 dark:text-white">Email Support</h4>
                <p className="text-slate-600 mb-2 dark:text-slate-400">24-hour response time</p>
                <a href="mailto:info@boldsolutions.io" className="text-primary font-medium hover:underline">info@boldsolutions.io</a>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl mb-4">
                  <FaCalendarCheck />
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-2 dark:text-white">Schedule a Consultation</h4>
                <p className="text-slate-600 mb-2 dark:text-slate-400">Book a free 30-minute consultation</p>
                <a href="https://calendly.com/ask-boldly/30min" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
