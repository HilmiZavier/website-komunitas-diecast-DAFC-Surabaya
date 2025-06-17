import { Instagram, MapPin, Clock, Images } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const home = () => {
    const navigate = useNavigate();
    const scrollToSection = () => {
        const section = document.getElementById("tentang-kami");
        if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        }
    };
    
    return (
        <>
        <section
            className="relative overflow-hidden bg-cover bg-center bg-no-repeat text-white min-h-screen"
            style={{ backgroundImage: "url('src/assets/img/poce3_PhotoGrid.png')" }}
        >
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
                <div className="flex justify-center mb-8">
                <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="relative pt-43">
                    <div className="w-37 h-37  rounded-3xl flex items-center bg-[#5fe1e5]"> 
                        <img src="src/assets/img/logo DAFC bg white-Photoroom.png" alt="logo DAFC" />
                    </div>
                </motion.div>
                </div>
                <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="text-5xl md:text-7xl font-bold mb-1 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                DAFC SURABAYA
                </motion.h1>

                <motion.p 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="text-xl md:text-2xl mb-2  font-semibold bg-gradient-to-r from-[#d0d6aa] via-[#e6e9d6] to-[#c8ff02] bg-clip-text text-transparent   pb-5">
                Komunitas 
                Diecast & Action Figure
                </motion.p>

                <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                    className="flex items-center border-2 border-white text-white px-13 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-200"
                    onClick={() => navigate("/galeri")}
                >
                    <Images size={25} className="mr-3" /> Lihat Galeri
                </button>
                </motion.div>
            </div>
            </div>
        </section>

        <section
            id="tentang-kami"
            className="relative min-h-screen flex items-center justify-center bg-[#dad9d7]"
        >
            <div className="absolute inset-0 bg-gradient-to-r"></div>
            <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                <div className="space-y-4 ">
                    <h1 className="flex font-bold text-7xl   ">
                    <span>Tentang</span>
                    <span className="text-[#fdd001] ml-3">Kami</span>
                    </h1>
                    <p className=" flex text-xl text-gray-600 leading-relaxed max-w-lg mt-10">
                    Diecast & Action Figure Collector Surabaya merupakan komunitas
                    penggemar mainan, khususnya kolektor miniatur mobil dan action
                    figure, yang berbasis di Surabaya. Komunitas ini resmi
                    dibentuk pada tanggal 20 Desember 2024, berawal dari interaksi
                    di sebuah grup Facebook yang mempertemukan para kolektor dan
                    pecinta mainan dari berbagai kalangan. Seiring waktu, Diecast
                    & Action Figure Collector Surabaya berkembang menjadi wadah
                    aktif untuk berbagi informasi, bertukar koleksi, serta
                    mengadakan berbagai pertemuan dan acara komunitas.
                    </p>
                </div>
                </div>

                <div className="relative">
                <div className="relative z-10">
                    <img
                    src="src/assets/img/ferrari2.jpg"
                    alt="Ferrari diecast collection"
                    className="w-full h-100 rounded-3xl shadow-2xl"
                    />
                </div>
                </div>
            </div>
            </div>
        </section>

        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
                <div className="col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                    <div className=" bg-gradient-to-br rounded-xl flex items-center justify-center bg-white w-20 h-20">
                    <img
                        src="src/assets/img/logo DAFC bg white-Photoroom.png"
                        alt=""
                    />
                    </div>
                    <div>
                    <h3 className="text-xl font-bold">DAFC Surabaya</h3>
                    <p className="text-gray-400 text-sm">
                        Diecast & Action Figure
                    </p>
                    </div>
                </div>
                <p className="text-gray-400 mb-4">
                    Komunitas pecinta diecast dan action figure di Surabaya.
                    Bergabunglah dengan kami untuk berbagi passion dan koleksi
                    terbaik!
                </p>
                </div>

                <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                    <li>
                    <button
                        href="#tentang-kami"
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

                <div>
                <h4 className="text-lg font-semibold mb-4">Kontak</h4>
                <div className="space-y-2 text-gray-400">
                    <a href=""></a>
                </div>
                <ul className="space-y-2 text-gray-400">
                    <li>
                    <a
                        href="https://www.instagram.com/dafc_surabaya?igsh=MTJpdnJjeTdwbWkwMw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-white transition-colors "
                    >
                        <Instagram size={18} />
                        @dafc_surabaya
                    </a>
                    </li>
                    <li className="flex items-center gap-2 hover:text-white transition-colors ">
                    <MapPin size={18} />
                    Surabaya, Jawa Timur
                    </li>
                    <li className="flex items-center gap-2 hover:text-white transition-colors ">
                    <Clock size={18} />
                    24/7 Online Support
                    </li>
                </ul>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
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
