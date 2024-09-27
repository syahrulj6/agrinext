export const BLOG_CATEGORIES = [
  {
    label: 'Blog',
    value: 'blog' as const,
    featured: [
      {
        name: 'Inovasi Terbaru',
        href: 'inovasi-teknologi-pertanian',
        imageSrc: '/blog1.jpg',
      },
      {
        name: 'Tips Bertani',
        href: '5-tips-dari-pakar',
        imageSrc: '/blog2.jpg',
      },
      {
        name: 'Tren Pertanian',
        href: 'tren-pertanian-berkelanjutan',
        imageSrc: '/blog3.jpg',
      },
    ],
  },
];

export const blogs = [
  {
    id: 1,
    label: 'inovasi-teknologi-pertanian',
    title: 'Inovasi Teknologi Pertanian. Dari Smart Farming Hingga Drone',
    description:
      'Pelajari bagaimana teknologi terbaru seperti sensor, AI, dan drone mengubah cara petani mengelola lahan dan hasil panen mereka. Artikel ini menguraikan bagaimana inovasi ini bisa meningkatkan efisiensi pertanian dan menjaga keberlanjutan lingkungan.',
    date: '15 September 2024',
    image: '/blog1.jpg',
    content:
      'Teknologi pertanian semakin maju untuk membantu petani bekerja lebih efisien dan ramah lingkungan. Beberapa inovasi penting dalam pertanian modern meliputi: Smart Farming (Pertanian Cerdas): Menggunakan sensor IoT dan AI untuk memantau kelembapan tanah, suhu, dan kebutuhan tanaman, membantu petani mengatur irigasi dan pemupukan dengan lebih tepat. Pertanian Presisi: Teknologi GPS dan sensor membantu petani mengelola lahan dengan detail, menyesuaikan perawatan sesuai kondisi tanah dan tanaman untuk mengurangi limbah dan meningkatkan hasil. Drone: Digunakan untuk pemantauan lahan, penyemprotan pestisida, dan penyebaran benih, sehingga petani bisa bertindak lebih cepat dan efisien. Irigasi Otomatis: Sensor tanah dan data cuaca mengatur irigasi secara otomatis, sehingga petani menghemat air dan meningkatkan hasil panen. Robot Pertanian: Robot-robot ini memanen, menyiangi, dan membantu pekerjaan di ladang, mengurangi ketergantungan pada tenaga kerja manusia dan penggunaan bahan kimia. Pertanian Vertikal: Menanam di lapisan-lapisan vertikal di ruang terbatas dengan sistem hidroponik, sehingga lebih hemat lahan dan air.',
  },
  {
    id: 2,
    label: 'tren-pertanian-berkelanjutan',
    title: 'Tren Pertanian Berkelanjutan. Cara Petani Mengurangi Jejak Karbon',
    description:
      'Ketahui bagaimana petani di seluruh dunia beradaptasi dengan praktik pertanian berkelanjutan untuk mengurangi emisi karbon dan menjaga kualitas tanah. Dari pertanian regeneratif hingga agrowisata, tren ini semakin populer di industri',
    date: '28 Agustus 2024',
    image: '/blog3.jpg',
    content:
      'Pertanian berkelanjutan menjadi tren yang semakin penting dalam menghadapi tantangan perubahan iklim dan ketahanan pangan global. Salah satu aspek penting dari pertanian berkelanjutan adalah upaya petani untuk mengurangi jejak karbon di lahan pertanian mereka. Berikut ini adalah beberapa cara yang dapat dilakukan oleh petani untuk mendukung keberlanjutan lingkungan dan mengurangi emisi karbon: Agroekologi: Praktik seperti rotasi tanaman dan tanaman penutup tanah meningkatkan kesuburan dan mengurangi gas rumah kaca. Irigasi Efisien: Teknologi irigasi tetes menghemat air dan energi.Pupuk Organik: Menggantikan pupuk kimia dengan kompos mengurangi emisi CO2.Energi Terbarukan: Menggunakan peralatan bertenaga listrik atau surya.Tanaman Tahan Iklim: Menanam varietas yang lebih adaptif terhadap cuaca ekstrem.Pengelolaan Limbah: Mengubah limbah pertanian menjadi energi seperti biogas.',
  },
  {
    id: 3,
    label: '5-tips-dari-pakar',
    title: '5 Tips dari Pakar untuk Meningkatkan Hasil Pertanian Organik',
    description: 'Para ahli pertanian organik berbagi tips praktis untuk meningkatkan produktivitas tanpa menggunakan bahan kimia berbahaya. Artikel ini membahas mulai dari pemilihan benih hingga manajemen hama alami.',
    date: '5 Juli 2024',
    image: '/blog2.jpg',
    content:
      'Pertanian organik membutuhkan strategi khusus agar hasilnya maksimal. Berikut ini adalah 5 tips sederhana dari para pakar: 1. Rawat Kualitas Tanah Tanah yang subur sangat penting. Tambahkan kompos dan pupuk organik untuk menjaga kesehatannya. Tanaman penutup juga membantu mencegah erosi dan menjaga kelembapan. 2. Lakukan Rotasi Tanaman Ganti jenis tanaman setiap musim untuk menjaga tanah tetap subur dan mencegah penyakit. 3. Gunakan Irigasi Hemat Air Pakai sistem irigasi tetes atau manfaatkan air hujan untuk memastikan tanaman mendapat cukup air tanpa pemborosan. 4. Kendalikan Hama Secara Alami Gunakan tanaman pengusir hama, serangga pemangsa hama, atau pestisida alami dari bahan organik, tanpa bahan kimia berbahaya. 5. Pilih Benih yang Cocok Gunakan benih yang cocok dengan iklim dan kondisi tanah lokal, karena biasanya lebih tahan hama dan lebih produktif tanpa perlu banyak pupuk kimia. Dengan mengikuti tips ini, petani organik bisa meningkatkan hasil panen dan menjaga keseimbangan lingkungan.',
  },
  {
    id: 4,
    label: 'menghadapi-tantangan-pertanian-di-era-perubahan-iklim',
    title: 'Menghadapi Tantangan Pertanian di Era Perubahan Iklim',
    description:
      'Di era perubahan iklim yang cepat, bagaimana petani bisa beradaptasi dan tetap produktif? Dalam artikel ini, pakar agronomi memberikan pandangan mendalam tentang strategi-strategi penting untuk bertahan dan berkembang di tengah kondisi iklim yang sulit diprediksi.',
    date: '21 Juni 2024',
    image: '/blog4.jpg',
    content:
      'Perubahan iklim membawa tantangan besar bagi pertanian, seperti cuaca ekstrem dan kekurangan air. Namun, ada beberapa cara yang bisa membantu petani beradaptasi. 1. Gunakan Tanaman Tahan Iklim Pilih varietas tanaman yang lebih tahan terhadap kekeringan atau banjir, sehingga tetap bisa tumbuh meski cuaca ekstrem. 2. Irigasi Cerdas Pakai teknologi irigasi modern seperti irigasi tetes yang hemat air, membantu petani memberikan air secara tepat saat diperlukan. 3.Pertanian Berbasis Teknologi Dengan sensor dan prediksi cuaca berbasis AI, petani bisa lebih tepat dalam menanam, memanen, dan mengelola sumber daya. 4. Pertanian Konservasi Teknik seperti rotasi tanaman dan penggunaan tanaman penutup menjaga tanah tetap subur dan mampu menahan air lebih baik. 5. Diversifikasi Tanaman Menanam berbagai jenis tanaman atau menggabungkan pertanian dengan peternakan membantu petani mengurangi risiko akibat cuaca buruk. 6. Kurangi Emisi KarbonGunakan pupuk organik dan energi terbarukan untuk mengurangi jejak karbon pertanian, sekaligus menanam pohon untuk menyerap karbon.',
  },
  {
    id: 5,
    label: 'mengapa-disverifikasi-tanaman-penting',
    title: 'Mengapa Diversifikasi Tanaman Penting. Perspektif dari Para Ahli Pertanian',
    description: 'Temukan alasan pentingnya diversifikasi tanaman dalam menjaga keseimbangan ekosistem dan meningkatkan pendapatan petani. Artikel ini didasarkan pada wawancara dengan beberapa ahli pertanian global.',
    date: '10 Mei 2024',
    image: '/blog5.jpg',
    content:
      'Diversifikasi tanaman, yaitu menanam berbagai jenis tanaman dalam satu lahan, dianggap sangat penting oleh para ahli pertanian. Berikut adalah alasan-alasan utamanya: 1. Mengurangi Risiko Gagal Panen Menanam berbagai jenis tanaman membantu mengurangi risiko jika salah satu tanaman gagal akibat cuaca buruk, serangan hama, atau penyakit. 2. Meningkatkan Kesehatan Tanah Tanaman yang berbeda memberikan nutrisi yang berbeda pula ke tanah. Dengan menanam berbagai tanaman, tanah tidak akan cepat kekurangan unsur hara tertentu, dan ini membuat tanah tetap subur dalam jangka panjang. 3. Melawan Hama dan Penyakit Menanam berbagai tanaman membuat hama dan penyakit sulit berkembang, karena mereka tidak suka semua jenis tanaman. 4. Mengoptimalkan Penggunaan Sumber Daya Setiap tanaman membutuhkan air dan nutrisi yang berbeda. Dengan menanam variasi, petani bisa memanfaatkan sumber daya alam dengan lebih baik. 5. Stabilitas Ekonomi Petani Menjual berbagai hasil panen memberikan lebih banyak pilihan pendapatan. Jika harga satu tanaman turun, hasil dari tanaman lain masih bisa membantu.',
  },
];
