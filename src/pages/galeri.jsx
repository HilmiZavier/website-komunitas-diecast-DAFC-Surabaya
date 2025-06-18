import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const GalleryWebsite = () => {
  const [, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

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
      src: "./images/ferrari1.jpg",
      title: "Ferrari Collection 1"
    },
    {
      id: 2,
      src: "./images/ferrari2.jpg",
      title: "Ferrari Collection 2"
    },
    {
      id: 3,
      src: "./images/ferrari3.jpg",
      title: "Ferrari Collection 3"
    },
    {
      id: 4,
      src: "./images/musang1.jpg",
      title: "Musang Collection"
    },
    {
      id: 5,
      src: "./images/poce1.jpg",
      title: "Poce Collection 1"
    },
    {
      id: 6,
      src: "./images/poce2.jpg",
      title: "Poce Collection 2"
    },
    {
      id: 7,
      src: "./images/poce3_PhotoGrid.png",
      title: "Poce Collection 3"
    },
    {
      id: 8,
      src: "./images/transformer2.jpg",
      title: "Transformer Collection 2"
    },
    {
      id: 9,
      src: "./images/transformer3.jpg",
      title: "Transformer Collection 3"
    },
  ];

  const [activeCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  // Modal component untuk menampilkan gambar besar
  const ImageModal = ({ image, onClose }) => {
    if (!image) return null;

    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        
          
          <img
            src={image.src}
            
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
          />
          
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-blue-100">
      <section id="gallery" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-16">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className={`text-3xl sm:text-4xl lg:text-4xl font-bold mb-4 mt-16 sm:mt-20 lg:mt-10 ${
    isDarkMode ? 'text-gray-300' : 'text-gray-600'
  }`}
          >
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
            className={`text-base sm:text-lg lg:text-lg max-w-4xl mx-auto px-4 ${
    isDarkMode ? 'text-gray-300' : 'text-gray-600'
  }`}
          >
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div 
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1
              }}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <figure className="p-1">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="rounded-lg w-full h-48 sm:h-56 lg:h-60 object-cover hover:opacity-90 transition-opacity"
                />
              </figure>
              
            </motion.div>
          ))}
        </motion.div>

        {/* Pesan jika tidak ada gambar */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-base-content/60">
              Tidak ada gambar yang ditemukan untuk kategori ini.
            </p>
          </div>
        )}
      </section>

      {/* Modal untuk menampilkan gambar besar */}
      <ImageModal 
        image={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </div>
  );
};

export default GalleryWebsite;