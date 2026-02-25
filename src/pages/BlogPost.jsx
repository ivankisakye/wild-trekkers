import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/toursData';
import { FaArrowLeft, FaCalendar, FaUser, FaTag, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-safari-green mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-safari-sand hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 2);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="pt-20">
      {/* Hero Image */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center text-white/90 hover:text-white mb-4 group"
              >
                <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-safari-sand text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <FaTag className="mr-1" />
                  {post.category}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.article
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              {/* Article Header */}
              <header className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-safari-green mb-6">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center text-gray-600 gap-4 mb-6">
                  <div className="flex items-center">
                    <FaCalendar className="mr-2 text-safari-sand" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FaUser className="mr-2 text-safari-sand" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3 pt-4 border-t">
                  <span className="text-gray-600 font-semibold">Share:</span>
                  <a
                    href={`https://facebook.com/sharer/sharer.php?u=${window.location.href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-safari-sand transition-colors"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-safari-sand transition-colors"
                  >
                    <FaTwitter size={24} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-safari-sand transition-colors"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </header>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                {post.content.split('\n\n').map((paragraph, index) => {
                  // Check if it's a heading
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    const heading = paragraph.replace(/\*\*/g, '');
                    return (
                      <h2 key={index} className="text-2xl font-bold font-heading text-safari-green mt-8 mb-4">
                        {heading}
                      </h2>
                    );
                  }
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </motion.article>

            {/* Call to Action */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="mt-12 bg-safari-green/10 rounded-lg p-8 border-l-4 border-safari-sand"
            >
              <h3 className="text-2xl font-bold font-heading text-safari-green mb-4">
                Ready to Experience This for Yourself?
              </h3>
              <p className="text-gray-700 mb-6">
                Join us on an unforgettable safari adventure and create your own incredible stories!
              </p>
              <Link
                to="/tours"
                className="inline-block bg-safari-sand hover:bg-safari-brown text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Browse Our Tours
              </Link>
            </motion.div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="mt-16"
              >
                <h3 className="text-3xl font-bold font-heading text-safari-green mb-8">
                  Related Articles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.id}`}
                      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                    >
                      <div className="relative overflow-hidden h-48">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold font-heading text-safari-green mb-3 group-hover:text-safari-sand transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;