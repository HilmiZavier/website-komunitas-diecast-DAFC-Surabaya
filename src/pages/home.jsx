import { Instagram, MapPin, Clock, Images } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const home = () => {
    const Navigate = useNavigate();
    const scrollToSection = () => {
        const section = document.getElementById("tentang-kami");
        if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        }
    };
    
    return (
        <>
        <section
            className="relative overflow-hidden bg-cover bg-center bg-no-repeat text-white min-h-screen flex items-center"
            style={{ 
                backgroundImage: "url('./images/poce3_PhotoGrid.png')",
                backgroundPosition: "center center",
                backgroundSize: "cover"
            }}
        >
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
                <div className="text-center">
                    <div className="flex justify-center mb-6 sm:mb-8">
                        <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className="relative">
                            <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-37 lg:h-37 rounded-2xl sm:rounded-3xl flex items-center bg-[#5fe1e5] p-2"> 
                                <img 
                                    src="./images/logo-DAFC-bg-white-Photoroom copy.png" 
                                    alt="logo DAFC"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </motion.div>
                    </div>
                    
                    <motion.h1 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent leading-tight">
                    DAFC SURABAYA
                    </motion.h1>

                    <motion.p 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 font-semibold bg-gradient-to-r from-[#d0d6aa] via-[#e6e9d6] to-[#c8ff02] bg-clip-text text-transparent px-4">
                    Komunitas 
                    Diecast & Action Figure
                    </motion.p>

                    <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                        <button
                            className="flex items-center justify-center border-2 border-white text-white px-6 sm:px-8 lg:px-13 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-200 w-full sm:w-auto"
                            onClick={() => Navigate("/galeri")}
                        >
                            <Images size={20} className="mr-2 sm:mr-3" /> Lihat Galeri
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>

        <section
            id="tentang-kami"
            className="relative min-h-screen flex items-center justify-center bg-[#dad9d7] py-12 sm:py-16 lg:py-0"
        >
            <div className="absolute inset-0 bg-gradient-to-r"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                    <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                        <div className="space-y-4">
                            <h1 className="flex flex-col sm:flex-row font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center lg:text-left">
                                <span>Tentang</span>
                                <span className="text-[#fdd001] sm:ml-3">Kami</span>
                            </h1>
                            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-none lg:max-w-lg mt-6 sm:mt-10 text-justify">
                                Diecast & Action Figure Collector Surabaya merupakan komunitas
                                penggemar mainan, khususnya kolektor miniatur mobil dan action
                                figure, yang berbasis di Surabaya. Komunitas ini resmi
                                dibentuk pada tanggal 20 Desember 2024, berawal dari interaksi
                                di sebuah grup Facebook yang mempertemukan para kolektor dan
                                pecinta mainan dari berbagai kalangan.... 
                            </p>
                        </div>
                    </div>

                    <div className="relative order-1 lg:order-2">
                        <div className="relative z-10">
                            <img
                                src="./images/ferrari2.jpg"
                                alt="Ferrari diecast collection"
                                className="w-full h-64 sm:h-80 lg:h-100 rounded-2xl sm:rounded-3xl shadow-2xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer className="bg-gray-900 text-white py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    <div className="col-span-1 sm:col-span-2">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-3 mb-4 text-center sm:text-left">
                            <div className="bg-gradient-to-br rounded-xl flex items-center justify-center bg-white w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                                <img
                                    src="./images/DAFC-bg-white.png"
                                    alt="DAFC Logo"
                                    className="w-full h-full object-contain p-1"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold">DAFC Surabaya</h3>
                                <p className="text-gray-400 text-sm">
                                    Diecast & Action Figure
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-4 text-sm sm:text-base text-center sm:text-left">
                            Komunitas pecinta diecast dan action figure di Surabaya.
                            Bergabunglah dengan kami untuk berbagi passion dan koleksi
                            terbaik!
                        </p>
                    </div>

                    <div className="text-center sm:text-left">
                        <h4 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                            <li>
                                <button
                                    onClick={scrollToSection}
                                    className="hover:text-white transition-colors"
                                >
                                    Tentang Kami
                                </button>
                            </li>
                            <li>
                                <a
                                    href="/galeri"
                                    className="hover:text-white transition-colors"
                                >
                                    Galeri
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/6285334309065?text=Halo%20kak%2C%20saya%20mau%20tanya-tanya%20tentang%20komunitas%20DAFC%20%F0%9F%99%8C"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    Kontak
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center sm:text-left">
                        <h4 className="text-base sm:text-lg font-semibold mb-4">Kontak</h4>
                        <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                            <li>
                                <a
                                    href="https://www.instagram.com/dafc_surabaya?igsh=MTJpdnJjeTdwbWkwMw=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center sm:justify-start gap-2 hover:text-white transition-colors"
                                >
                                    <Instagram size={18} />
                                    @dafc_surabaya
                                </a>
                            </li>
                            <li className="flex items-center justify-center sm:justify-start gap-2">
                                <MapPin size={18} />
                                Surabaya, Jawa Timur
                            </li>
                            <li className="flex items-center justify-center sm:justify-start gap-2">
                                <Clock size={18} />
                                24/7 Online Support
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
                    <p>
                        &copy; 2025 DAFC Surabaya. All rights reserved. Made by DAFC
                        Surabaya.
                    </p>
                </div>
            </div>
        </footer>
        </>
    );
};

export default home;