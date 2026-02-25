import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '../data/toursData';
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand, FaCamera } from 'react-icons/fa';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const categories = ['All', 'Wildlife', 'Landscapes'];

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image, index) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const newIndex = (lightboxIndex + 1) % filteredImages.length;
    setLightboxIndex(newIndex);
    setLightboxImage(filteredImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1;
    setLightboxIndex(newIndex);
    setLightboxImage(filteredImages[newIndex]);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <div className="min-h-screen bg-stone-50" onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Elegant Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src={galleryImages[0]?.url || '/api/placeholder/1920/1080'} 
            alt="Gallery Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-stone-50" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-12 bg-safari-sand" />
              <FaCamera className="text-safari-sand text-xl" />
              <span className="h-px w-12 bg-safari-sand" />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-heading tracking-tight">
              Visual <span className="text-safari-sand italic font-serif">Journey</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              Immerse yourself in the untamed beauty of Africa through our curated collection of moments frozen in time
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Refined Filter Section */}
      <section className="sticky top-20 z-30 bg-stone-50/95 backdrop-blur-md border-b border-stone-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-stone-400 text-sm uppercase tracking-widest">Filter by</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden ${
                    selectedCategory === category
                      ? 'text-white shadow-lg'
                      : 'text-stone-600 hover:text-safari-green bg-white border border-stone-200 hover:border-safari-sand/30'
                  }`}
                >
                  {selectedCategory === category && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-safari-green"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </motion.button>
              ))}
            </div>

            <div className="text-stone-500 text-sm">
              <span className="font-semibold text-safari-green">{filteredImages.length}</span> photographs
            </div>
          </div>
        </div>
      </section>

      {/* Masonry-style Gallery Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => openLightbox(image, index)}
                className="relative group cursor-pointer break-inside-avoid rounded-2xl overflow-hidden bg-stone-200 shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative aspect-auto">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Elegant Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-semibold text-lg leading-tight mb-1">
                          {image.caption}
                        </p>
                        <p className="text-safari-sand text-sm uppercase tracking-wider">
                          {image.category}
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-safari-sand transition-colors">
                        <FaExpand className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Index Number */}
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredImages.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-stone-200 flex items-center justify-center">
                <FaCamera className="text-stone-400 text-3xl" />
              </div>
              <p className="text-2xl text-stone-600 font-light">No images found in this collection.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Immersive Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-20 bg-gradient-to-b from-black/50 to-transparent">
              <div className="text-white/80 text-sm">
                <span className="text-safari-sand font-semibold">{lightboxIndex + 1}</span>
                <span className="mx-2">/</span>
                <span>{filteredImages.length}</span>
              </div>
              <button
                onClick={closeLightbox}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:rotate-90 duration-300"
              >
                <FaTimes size={24} />
              </button>
            </div>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm flex items-center justify-center text-white transition-all hover:scale-110 group"
            >
              <FaChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm flex items-center justify-center text-white transition-all hover:scale-110 group"
            >
              <FaChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Main Image */}
            <motion.div
              key={lightboxImage.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
            >
              <img
                src={lightboxImage.url}
                alt={lightboxImage.caption}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              
              {/* Caption Bar */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-center"
              >
                <h3 className="text-2xl text-white font-light mb-2">{lightboxImage.caption}</h3>
                <span className="inline-block px-4 py-1 rounded-full bg-safari-sand/20 text-safari-sand text-sm uppercase tracking-wider">
                  {image.category}
                </span>
              </motion.div>
            </motion.div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 px-4 overflow-x-auto max-w-full pb-2">
              {filteredImages.slice(0, 7).map((img, idx) => (
                <button
                  key={img.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(idx);
                    setLightboxImage(img);
                  }}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all ${
                    idx === lightboxIndex ? 'ring-2 ring-safari-sand scale-110' : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={img.url} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Elegant CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-safari-green" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-safari-sand text-sm uppercase tracking-[0.3em] mb-4 block">
              Start Your Adventure
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading mb-8 leading-tight">
              Ready to Create Your Own <span className="italic font-serif text-safari-sand">Visual Stories?</span>
            </h2>
            <p className="text-xl text-white/80 mb-10 font-light leading-relaxed">
              Join our expert guides on a photographic safari and capture moments that will last a lifetime
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/tours"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-safari-sand text-white rounded-full font-semibold text-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-safari-sand/30"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Tours
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-safari-brown transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
              
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;