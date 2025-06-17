import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const GalleryWebsite = () => {
  const [ setLoading] = useState(true);
  const [setSelectedImage] = useState(null);

  // Simulasi loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  // Data galeri dengan URL gambar placeholder
  const galleryImages = [
    {
      id: 1,
      src: "src/assets/img/ferrari1.jpg",
      
    },
    {
      id: 2,
      src: "src/assets/img/ferrari2.jpg",
      
    },
    {
      id: 3,
      src: "src/assets/img/ferrari3.jpg",
      
    },
    {
      id: 4,
      src: "src/assets/img/musang1.jpg",
      
    },
    {
      id: 5,
      src: "src/assets/img/poce1.jpg",
      
    },
    {
      id: 6,
      src: "src/assets/img/poce2.jpg",
      
    },
    {
      id: 7,
      src: "src/assets/img/poce3.jpg",
      
    },
    {
      id: 8,
      src: "src/assets/img/transformer2.jpg",
      
    },
    {
      id: 9,
      src: "src/assets/img/transformer3.jpg",
      
    },
  ];

  
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  // Loading Screen Component
  

  return (
    <div 
    
    className="min-h-screen bg-base-100">

      <section id="gallery" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in-up">
          <motion.h2 
          initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: 0.2,
        }}
          className="text-4xl font-bold mb-4 mt-10 text-base-content">
            Galeri DAFC
          </motion.h2>
          <motion.p 
          initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: 0.2,
        }}
          className="text-lg text-base-content/70 max-w-4xl mx-auto">
            Galeri koleksi diecast dan action figure terbaik dari anggota komunitas DAFC Surabaya.
          </motion.p>
        </div>
        {/* Gallery Grid */}
        <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: 0.2,
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image ) => (
            <div 
              key={image.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xs transform hover:scale-110 transition-all duration-300 animate-fade-in-up"
              
            >
              <figure className="p-1">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="rounded-xl w-full h-60 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage(image)}
                />
              </figure>
              
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default GalleryWebsite;