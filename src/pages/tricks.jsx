import React from "react";

const koleksiTips = [
{
    kategori: "Perawatan Koleksi Diecast",
    icon: "🚗",
    items: [
    {
        judul: "Menjaga dari Debu dan Kotoran",
        image : './images/dekesrak1.jpg',
        tips: [
        "Lemari kaca tertutup: Solusi terbaik untuk melindungi dari debu sekaligus memamerkan koleksi",
        "Display case akrilik: Alternatif yang lebih terjangkau dan ringan",
        "Pembersihan rutin: Gunakan kuas halus atau blower kamera untuk membersihkan debu mingguan",
        "Kain microfiber: Untuk membersihkan permukaan yang halus tanpa meninggalkan goresan",
        "Hindari sinar matahari langsung: Dapat memudarkan cat dan merusak plastik",
        ],
    },
    {
        judul: "Memperbaiki Cat yang Mengelupas",
        image : './images/perawatandiecast1.png',
        tips: [
        "Cat primer: Aplikasikan primer khusus metal sebelum mengecat ulang",
        "Cat akrilik berkualitas: Gunakan merek seperti Tamiya atau Mr. Color",
        "Kuas detail halus: Untuk perbaikan area kecil yang presisi",
        "Thinner secukupnya: Untuk mengencerkan cat agar hasil lebih halus",
        "Clear coat: Lapisan pelindung transparan setelah pengecatan selesai",
        "Amplas halus (1000–2000 grit): Untuk meratakan permukaan sebelum pengecatan",
        ],
    },
    {
        judul: "Perawatan yang Baik dan Benar",
        image : './images/perawatandiecast2.png',
        tips: [
        "Simpan di tempat kering: Kelembaban dapat menyebabkan korosi pada bagian metal",
        "Suhu stabil: Hindari perubahan suhu ekstrem yang dapat merusak material",
        "Handling minimal: Gunakan sarung tangan atau pegang dari bagian yang tidak detail",
        "Rotasi display: Ubah posisi secara berkala untuk menghindari tekanan berlebih pada satu titik",
        ],
    },
    ],
},
{
    kategori: "Perawatan Koleksi Action Figure",
    icon: "🦸",
    items: [
    {
        judul: "Menjaga dari Debu dan Kotoran",
        image : '/images/perawatanactionfigure.png',
        tips: [
        "Display cabinet: Investasi terbaik untuk koleksi jangka panjang",
        "Plastic covers: Untuk figure yang jarang dipindah-pindah",
        "Pembersihan dengan cotton bud: Untuk area detail yang sulit dijangkau",
        "Compressed air: Efektif untuk membersihkan sela-sela dan articulation points",
        "Hindari area lembab: Dapat menyebabkan jamur pada material kain atau kulit",
        ],
    },
    {
        judul: "Perawatan yang Baik dan Benar",
        image : '/images/perawatanactionfigure2.png',
        tips: [
        "Joint lubrication: Gunakan sedikit minyak silikon untuk joint yang kaku",
        "Pose natural: Hindari pose ekstrem dalam jangka waktu lama",
        "Support stands: Gunakan untuk pose dinamis agar tidak jatuh",
        "Cek berkala: Periksa kondisi joint dan aksesoris secara rutin",
        "Simpan aksesoris terpisah: Gunakan small parts organizer untuk aksesoris kecil",
        ],
    },
    ],
},
{
    kategori: "Tips Fotografi Koleksi",
    icon: "📸",
    items: [
    {
        judul: "Fotografi Diecast",
        image : './images/diorama2.jpg',
        tips: [
        "Pencahayaan: Gunakan softbox atau lampu LED dengan diffuser untuk menghindari refleksi",
        "Background: Pilih warna solid atau gradient yang kontras dengan warna diecast",
        "Angle: Foto dari berbagai sudut - 3/4 view sering memberikan hasil terbaik",
        "Macro lens: Untuk detail close-up yang menakjubkan",
        "Reflector: Gunakan untuk mengisi bayangan dan meratakan pencahayaan",
        ],
    },
    {
        judul: "Fotografi Action Figure",
        image : './images/diorama3.jpg',
        tips: [
        "Dynamic lighting: Mainkan dengan arah cahaya untuk efek dramatis",
        "Depth of field: Gunakan aperture besar (f/1.8–f/2.8) untuk background blur",
        "Story telling: Buat narasi visual melalui pose dan komposisi",
        "Multiple angles: Ambil dari eye-level, low angle, dan high angle",
        "Detail shots: Jangan lupa foto close-up untuk detail sculpting dan paint job",
        ],
    },
    ],
},
{
    kategori: "Ide Desain Diorama",
    icon: "🏗️",
    items: [
    {
        judul: "Inspirasi Diorama",
        image : './images/diorama999.jpg',
        tips: [
        "Urban scene: Buat jalanan kota mini dengan building dan street furniture",
        "Battle scene: Gunakan efek ledakan dari cotton dan LED untuk efek api",
        "Natural environment: Rocks, moss, dan miniature trees untuk outdoor scene",
        "Weathering effects: Tambahkan debu dan kotoran untuk kesan realistis",
        "Forced perspective: Mainkan dengan ukuran untuk menciptakan ilusi kedalaman",
        "LED integration: Tambahkan pencahayaan untuk efek yang lebih hidup",
        ],
    },
    ],
},
{
    kategori: "Ide Pose Action Figure",
    icon: "🎭",
    items: [
    {
        judul: "Inspirasi Pose Fotografi",
        image : './images/transformer1.jpg',
        tips: [
        "Action poses: Jumping, punching, kicking untuk kesan dinamis",
        "Dramatic stances: Hero landing, power-up pose, intimidating stance",
        "Interaction poses: Multiple figures berinteraksi dalam satu scene",
        "Emotional expressions: Manfaatkan face plates yang berbeda untuk storytelling",
        "Environmental interaction: Figure berinteraksi dengan props atau diorama",
        "Cinematic angles: Terinspirasi dari film atau anime untuk pose yang iconic",
        ],
    },
    ],
},
];

function TipsSection() {
return (
    <div className="min-h-screen bg-gradient-to-br from-[#d0f9fa] to-[#ced6d6]">
    {/* Hero Section */}
    <section className="relative overflow-hidden pt-16 pb-8 sm:pt-20 sm:pb-12 md:pt-24 md:pb-16">
        <div className="absolute inset-0 bg-[#fdd202]"></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 py-12 sm:py-16 md:py-20 text-center">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Panduan Kolektor
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed px-4">
                Tips dan Trik Perawatan Koleksi Diecast dan Action Figure
            </p>
        </div>
        </div>
    </section>

    {/* Content Sections */}
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        {koleksiTips.map((kategori, categoryIndex) => (
        <div key={categoryIndex} className="mb-12 sm:mb-16 md:mb-20">
            {/* Category Header */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-[#fdd202] to-[#fda502] rounded-full text-white text-xl sm:text-2xl mb-3 sm:mb-4">
                {kategori.icon}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-4">
                {kategori.kategori}
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#fdd202] mx-auto rounded-full"></div>
            </div>

            {/* Items Grid */}
            <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {kategori.items.map((item, itemIndex) => {
                const isEven = itemIndex % 2 === 0;
                return (
                <div
                    key={`${categoryIndex}-${itemIndex}`}
                    className={`flex flex-col ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } items-center gap-6 sm:gap-8 lg:gap-12`}
                >
                    {/* Image Section */}
                    <div className="w-full lg:w-1/3">
                    <div className="relative group">
                        <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-[#fdd202] rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                            <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={`Gambar untuk ${item.judul}`}
                                    className="w-full h-48 sm:h-64 md:h-80 lg:h-100 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-2/3">
                    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
                        <span className="w-1.5 sm:w-2 h-6 sm:h-8 bg-[#fdd202] rounded-full mr-3 sm:mr-4 flex-shrink-0"></span>
                        <span className="leading-tight">{item.judul}</span>
                        </h3>
                        <div className="space-y-1 sm:space-y-2">
                        {item.tips.map((tip, tipIndex) => {
                            const [title, description] = tip.split(': ');
                            return (
                            <div
                                key={tipIndex}
                                className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                            >
                                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#fdd202] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                <div className="flex-1 min-w-0">
                                <span className="font-semibold text-sm sm:text-base md:text-lg text-gray-800 block">
                                    {title}
                                </span>
                                {description && (
                                    <span className="text-xs sm:text-sm md:text-base text-gray-600 block mt-1">
                                    {description}
                                    </span>
                                )}
                                </div>
                            </div>
                            );
                        })}
                        </div>
                    </div>
                    </div>
                </div>
                );
            })}
            </div>
        </div>
        ))}
    </div>

    {/* Footer Section */}
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 sm:py-10 md:py-12">
        <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Selamat Mengoleksi! 🎉
        </h3>
        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto px-4 leading-relaxed">
            Semoga tips dan panduan ini membantu Anda dalam merawat dan 
            memamerkan koleksi diecast dan action figure dengan lebih baik.
        </p>
        </div>
    </section>
    </div>
);
}

export default TipsSection;