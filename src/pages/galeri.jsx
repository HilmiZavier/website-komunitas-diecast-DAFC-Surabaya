import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import {Instagram, MapPin} from "lucide-react";

const GalleryWebsite = () => {
  const [, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  // Simulasi loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  // Data galeri dengan URL gambar placeholder dan kategori
  const galleryImages = [
    {
    id: 13,
    src: "./images/dekes1.jpg",
    title: "Absen Terbaik Bulan Juni Minggu 2",
    isi: "@64squadron",
    icon: <Instagram size={20} />,
    category: "Absen Terbaik"
  },
  {
    id: 4,
    src: "./images/musang1.jpg",
    title: "Absen Terbaik Bulan Maret Minggu 4",
    isi: "@hilmizvr",
    icon: <Instagram size={20} />,
    category: "Absen Terbaik"
  },
  {
    id: 10,
    src: "./images/diorama1.jpg",
    title: "Dokumentasi Kopdar 20-04-2025",
    isi: "Kedai Satuju",
    icon: <MapPin size={20} />,
    category: "Dokumentasi"
  },
  {
    id: 2,
    src: "./images/ferrari2.jpg",
    title: "Absen Terbaik Bulan Maret Minggu 2 ",
    isi: "@hilmizvr",
    icon: <Instagram size={20} />,
    category: "Absen Terbaik"
  },
  {
    id: 14,
    src: "./images/musang2.jpg",
    title: "Absen Terbaik Bulan Juni Minggu 2",
    isi: "@64squadron",
    icon: <Instagram size={20} />,
    category: "Absen Terbaik"
  },
  {
    id: 11,
    src: "./images/diorama2.jpg",
    title: "Absen Terbaik Bulan Mei Minggu 3",
    isi: "@haydarrafi",
    icon: <Instagram size={20} />,
    category: "Absen Terbaik"
  },
  {
    id: 1,
    src: "./images/ferrari1.jpg",
    title: "Absen Terbaik Bulan Maret Minggu 1",
    isi: "@64squadron",
    icon: <Instagram size={20} />,
    category: "Absen Terbaik"
  },
  {
    id: 9,
    src: "./images/transformer3.jpg",
    title: "Absen Terbaik Bulan Mei Minggu 1",
    isi: "@hilmizvr",
    icon: <Instagram size={20} />,
    category: "Absen Terbaik"
  },
  {
    id: 6,
    src: "./images/poce2.jpg",
    title: "Absen Terbaik Bulan April Minggu 2",
    isi: "@haydarrafi",
    icon: <Instagram size={20} />,
    category: "Absen Terbaik"
  },
  {
    id: 5,
    src: "./images/poce1.jpg",
    title: "Absen Terbaik Bulan April Minggu  1",
    isi: "@hilmizvr",
    icon: <Instagram size={20} />,
    category: "Absen Terbaik"
  },
  {
    id: 12,
    src: "./images/diorama3.jpg",
    title: "Absen Terbaik Bulan Mei Minggu 4",
    isi: "@64squadron",
    icon: <Instagram size={20} />,
    category: "Absen Terbaik"
  },
  {
    id: 8,
    src: "./images/transformer2.jpg",
    title: "Absen Terbaik Bulan April Minggu 4",
    isi: "@haydarrafi",
    icon: <Instagram size={20} />,
    category: "Absen Terbaik"
  },
  {
    id: 3,
    src: "./images/ferrari3.jpg",
    title: "Absen Terbaik Bulan Maret Minggu 3",
    isi: "@haydarrafi",
    icon: <Instagram size={20} />,
    category: "Absen Terbaik"
  },
  {
    id: 15,
    src: "./images/kopdar 1.jpg",
    title: "Dokusatujumentasi Kopdar 20-04-2025",
    isi: "Kedai Satuju",
    icon: <MapPin size={20} />,
    category: "Dokumentasi"
  },
  {
    id: 7,
    src: "./images/poce3_PhotoGrid.png",
    title: "Absen Terbaik Bulan April Minggu 3",
    isi: "@64squadron",
    icon: <Instagram size={20} />,
    category: "Absen Terbaik"
  }
  ];

  const categories = [ "Absen Terbaik", "Dokumentasi"];

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
        <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 z-10"
          >
            ✕
          </button>
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-auto max-h-[80vh] object-contain"
          />
          <div className="p-4 bg-white">
            <h3 className="text-xl font-bold text-gray-800">{image.title}</h3>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-blue-100">
      <section id="gallery" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 
            className={`text-3xl sm:text-4xl lg:text-4xl font-bold mb-4 mt-16 sm:mt-20 lg:mt-10 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Galeri DAFC
          </h2>
          <p 
            className={`text-base sm:text-lg lg:text-lg max-w-4xl mx-auto px-4 mb-8 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Galeri koleksi diecast dan action figure terbaik dari anggota komunitas DAFC Surabaya.
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-black text-[#FFD700] shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-black hover:text-[#FFD700]  shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          layout
        >
          {filteredImages.map((image, index) => (
            <motion.div 
              key={image.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              layout
            >
              <figure className="p-1">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="rounded-lg w-full h-48 sm:h-56 lg:h-60 object-cover hover:opacity-90 transition-opacity"
                />
              </figure>
              
              {/* Card Body with Title */}
              <div className="card-body p-3">
                <h3 className="card-title text-lg font-semibold text-gray-800">
                  {image.title}
                </h3>
                <p className=" text-lg font-semibold text-gray-800 flex items-center gap-1"> 
                  {image.icon}{image.isi}
                </p>
                {/* Category Badge */}
                <div className="mt-2">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    image.category === 'Absen Terbaik' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {image.category}
                  </span>
                </div>
              </div>
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