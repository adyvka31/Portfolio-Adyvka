// =========================================================================
// CHATBOT KNOWLEDGE BASE & PRECISION INTENT ENGINE FOR RAFIF SAVA ADYVKA PRATAMA
// Authoritative dataset covering 100% of portfolio records across all domains
// Strictly adheres to punctuation rule: NO em-dash or semicolon in sentences
// =========================================================================

export const ADYVKA_PROFILE = {
  name: "Rafif Sava Adyvka Pratama",
  alias: "Adyvka",
  age: 17,
  birthYear: 2008,
  codingSince: 2021,
  yearsOfExperience: "5+ Years",
  totalProjects: 18,
  totalBooks: 2,
  totalExperiences: 20,
  workExperiencesCount: 4,
  teachingExperiencesCount: 10,
  leadershipExperiencesCount: 6,
  location: "Depok, Jawa Barat, Indonesia",
  timezone: "UTC+07 (WIB)",
  school: "SMK IDN Boarding School",
  grade: "Kelas XII (Tahun Terakhir)",
  major: "Rekayasa Perangkat Lunak (Software Engineering)",
  gpa: "96 / 100",
  gpaNote: "Nilai rapot Semester 4 dengan Peringkat Kehormatan Akademik (Academic Honors)",
  currentRole: "Lead Systems Engineer & Project Manager di PT Intisel Prodaktifakom",
  email: "rafifdyvka07@gmail.com",
  linkedin: "https://www.linkedin.com/in/adyvka-pratama/",
  github: "https://github.com/adyvka31",
  youtube: "https://www.youtube.com/@adyvkapratama",
  instagram: "https://instagram.com/adyvkaa",
  tiktok: "https://www.tiktok.com/@adypraa31",
  portfolioUrl: "https://adyvka.my.id",
};

export const QUICK_SUGGESTIONS = [
  { id: "all_exp", label: "🌟 Seluruh 20 Pengalaman", query: "apa saja seluruh pengalaman adyvka di dunia kerja mengajar dan organisasi" },
  { id: "count_proj", label: "🚀 Berapa Projek Adyvka? (18)", query: "berapa projek yang dikerjakan oleh adyvka" },
  { id: "work", label: "💼 Pengalaman Kerja (4 Institusi)", query: "ceritakan pengalaman kerja adyvka di pt intisel ardyanda richo bahari dan umj" },
  { id: "teaching", label: "👨‍🏫 Pengalaman Mengajar Guru & Siswa", query: "ceritakan pengalaman mengajar dan pelatihan guru di smpn 25 depok" },
  { id: "leadership", label: "👑 Kepemimpinan & Organisasi", query: "apa saja pengalaman kepemimpinan dan organisasi adyvka" },
  { id: "backpacker", label: "🌍 Solo Backpacker 3 Negara", query: "ceritakan pengalaman solo backpacker 3 negara adyvka" },
  { id: "gpa", label: "🎓 Nilai Rapot (96/100)", query: "berapa nilai rapot adyvka dan apa prestasi akademiknya" },
  { id: "databank", label: "⚡ Databank ERP (PT Intisel)", query: "ceritakan tentang proyek databank erp pt intisel" },
  { id: "awards", label: "🏆 Prestasi Lomba Nasional", query: "apa saja prestasi lomba web design yang diraih adyvka" },
  { id: "books", label: "📚 2 Buku yang Ditulis", query: "berapa buku yang ditulis oleh adyvka dan apa isinya" },
  { id: "cs50", label: "📜 CS50 & Sertifikat", query: "apa saja sertifikasi internasional yang dimiliki adyvka" },
  { id: "stack", label: "🛠️ Keahlian & Tech Stack", query: "tech stack dan teknologi apa saja yang dikuasai adyvka" },
  { id: "why_hire", label: "⭐ Kelebihan Utama Adyvka", query: "apa kelebihan adyvka dan kenapa harus merekrut adyvka" },
  { id: "cv", label: "📄 Download CV & Kontak", query: "bagaimana cara download cv dan menghubungi adyvka" },
];

const STOPWORDS = new Set([
  "adyvka", "rafif", "sava", "pratama", "dia", "ia", "beliau", "kamu", "anda", 
  "tentang", "dari", "oleh", "yang", "di", "ke", "dan", "adalah", "apakah", 
  "apa", "gimana", "bagaimana", "dong", "sih", "ya", "kah", "pun", "ada", 
  "ini", "itu", "seorang", "si", "pada", "untuk", "cara", "saja", "aja", 
  "banyak", "punya", "bisa", "tolong", "coba", "jelaskan", "sebutkan", "semua"
]);

function normalizeText(text) {
  if (!text || typeof text !== "string") return "";
  let clean = text.toLowerCase();
  clean = clean.replace(/[^a-z0-9\s]/g, " ");

  // Normalisasi variasi kata dan sinonim umum
  clean = clean.replace(/\bmenghubungi\b/g, "hubungi");
  clean = clean.replace(/\bmenghubunginya\b/g, "hubungi");
  clean = clean.replace(/\bdihubungi\b/g, "hubungi");
  clean = clean.replace(/\bmengerjakan\b/g, "kerja");
  clean = clean.replace(/\bdikerjakan\b/g, "kerja");
  clean = clean.replace(/\bpekerjaan\b/g, "kerja");
  clean = clean.replace(/\bprojek\b/g, "proyek");
  clean = clean.replace(/\bprojects?\b/g, "proyek");
  clean = clean.replace(/\bportofolionya\b/g, "proyek");
  clean = clean.replace(/\bportfolio\b/g, "proyek");
  clean = clean.replace(/\bportofolio\b/g, "proyek");
  clean = clean.replace(/\baplikasinya\b/g, "proyek");
  clean = clean.replace(/\braport?\b/g, "rapot");
  clean = clean.replace(/\braportnya\b/g, "rapot");
  clean = clean.replace(/\brapotnya\b/g, "rapot");
  clean = clean.replace(/\bsertif\b/g, "sertifikat");
  clean = clean.replace(/\bsertifikasi\b/g, "sertifikat");
  clean = clean.replace(/\bkeunggulannya\b/g, "kelebihan");
  clean = clean.replace(/\bkekuatannya\b/g, "kelebihan");
  clean = clean.replace(/\bkelebihannya\b/g, "kelebihan");
  clean = clean.replace(/\bdibikin\b/g, "buat");
  clean = clean.replace(/\bbikin\b/g, "buat");
  clean = clean.replace(/\bmembuat\b/g, "buat");
  clean = clean.replace(/\bdibuat\b/g, "buat");
  clean = clean.replace(/\bmenulis\b/g, "tulis");
  clean = clean.replace(/\bditulis\b/g, "tulis");
  clean = clean.replace(/\bbukunya\b/g, "buku");
  clean = clean.replace(/\bumurnya\b/g, "umur");
  clean = clean.replace(/\busianya\b/g, "usia");
  clean = clean.replace(/\bsekolahnya\b/g, "sekolah");
  clean = clean.replace(/\bpendidikannya\b/g, "pendidikan");
  clean = clean.replace(/\bpengalamannya\b/g, "pengalaman");
  clean = clean.replace(/\bprestasinya\b/g, "prestasi");
  clean = clean.replace(/\bjuaranya\b/g, "juara");
  clean = clean.replace(/\bkejuaraan\b/g, "lomba");
  clean = clean.replace(/\bperlombaan\b/g, "lomba");
  clean = clean.replace(/\bdomisilinya\b/g, "domisili");
  clean = clean.replace(/\btempat tinggal\b/g, "domisili");
  clean = clean.replace(/\btinggalnya\b/g, "domisili");
  clean = clean.replace(/\bgajinya\b/g, "tarif");
  clean = clean.replace(/\bharganya\b/g, "tarif");
  clean = clean.replace(/\bbiayanya\b/g, "tarif");
  clean = clean.replace(/\bfeenya\b/g, "tarif");
  clean = clean.replace(/\bratenya\b/g, "tarif");

  return clean.split(/\s+/).filter(Boolean).join(" ");
}

export const KNOWLEDGE_REGISTRY = {
  // =========================================================================
  // 1. ALL EXPERIENCES OVERVIEW (20 VERIFIED EXPERIENCES IN 3 TRACKS)
  // =========================================================================
  ALL_EXPERIENCES: {
    title: "Total Pengalaman: 20 Rekam Jejak Terverifikasi dalam 3 Pilar",
    text: `**Adyvka memiliki total 20 rekam jejak pengalaman terverifikasi dalam 3 pilar utama.**

Rekam jejak Adyvka memadukan rekayasa perangkat lunak skala enterprise, dedikasi mengajar, dan kepemimpinan organisasi nyata:

1. **4 Pengalaman Kerja Profesional (Work Experience):**
   * **PT Intisel Prodaktifakom:** Lead Systems Engineer & Project Manager sistem Databank ERP (memimpin 4 engineer, otomasi Huawei ISDP bot scraping, approval digital 3 tahap).
   * **PT Ardyanda Digital Inovasi:** Full Stack Developer Intern (payroll presisi 100%, sistem pinjaman karyawan, buku kas keuangan, dan penghubung klien).
   * **CV. Richo Bahari:** Frontend Developer & UI/UX Architect (platform industri Next.js 16 berstandar K3 Zero Accident & ISO 9001).
   * **Fakultas Kedokteran Universitas Muhammadiyah Jakarta:** Full Stack Engineer Contract (sistem klirens etik riset medis KEPK FK UMJ berstandar WHO dan CIOMS).

2. **10 Pengalaman Mengajar & Pelatihan Teknologi (Teaching & Mentorship):**
   * **SMPN 25 Depok:** Memberikan pelatihan langsung kepada **dewan guru dan kepala sekolah** mengenai implementasi media pembelajaran digital modern.
   * **SMA Lazuardi Global Compassionate School:** Instruktur workshop pengembangan web frontend modern (HTML, CSS, UI/UX).
   * **SMPN 45 Jakarta:** Instruktur pengembangan aplikasi mobile untuk pelajar menggunakan Kodular.
   * **Semut-Semut The Natural School:** Pelatihan logika komputasi dan pembuatan game edukatif dengan Construct.
   * **Hajrabyadl, SMP INS Depok, Al-Anshar, Griyya Sunnah, MTs Yasmine:** Instruktur desain antarmuka Figma, rekayasa web, dan logika pemrograman dasar.

3. **6 Pengalaman Kepemimpinan, Ekspedisi & Survival (Leadership & Life Experience):**
   * **Solo Backpacker 3 Negara (Singapura, Malaysia, Thailand):** Menjelajahi 3 negara seorang diri di usia 15 tahun, 100% didanai mandiri dari hasil tabungan freelance coding dan desain.
   * **Business & Life Survival di Semarang (PT Intisel):** Diterjunkan ke kota Semarang dengan modal awal nol rupiah dan berhasil bertahan hidup lewat inisiatif bisnis nyata serta logistik telekomunikasi.
   * **Ketua Divisi Acara OSIS SMK IDN:** Memimpin divisi acara selama 2 periode dalam merancang dan mengeksekusi seluruh kegiatan besar sekolah berasrama.
   * **Koordinator Acara Kompetisi IT FEST 2025:** Memimpin kelancaran teknis festival teknologi nasional dengan lebih dari 500 peserta.
   * **Barmus Voluntrip:** Koordinator relawan dan dokumentasi kegiatan sosial kemanusiaan bagi masyarakat pelosok.
   * **Live In Pedesaan:** Tinggal dan membaur selama sepekan penuh bersama keluarga petani tradisional di pedesaan Jawa Barat.

Seluruh 20 rekam jejak ini memiliki dokumentasi lengkap dan studi kasus yang dapat Anda jelajahi di halaman Experience.`,
    links: [
      { label: "Buka Halaman Seluruh Pengalaman", url: "/experience" },
      { label: "Detail Pengalaman PT Intisel", url: "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance" },
      { label: "Detail Solo Backpacker 3 Negara", url: "/experience/singapore-malaysia-thailand-backpacker-3-country" },
      { label: "Detail OSIS Event Division Leader", url: "/experience/idn-student-council-event-division-leader" },
    ],
  },

  // =========================================================================
  // 2. TEACHING EXPERIENCES
  // =========================================================================
  TEACHING_EXPERIENCE: {
    title: "10 Pengalaman Mengajar & Pelatihan Teknologi",
    text: `**10 Pengalaman Mengajar & Kontribusi Edukasi Adyvka**

Adyvka telah dipercaya membagikan ilmu teknis dan memimpin pelatihan di berbagai institusi pendidikan:

1. **SMPN 25 Depok (Pelatihan Dewan Guru & Kepala Sekolah):**
   * Memberikan workshop dan pelatihan intensif kepada dewan guru mengenai implementasi media digital interaktif dan platform pembelajaran modern.
2. **SMA Lazuardi Global Compassionate School (Web Development Instructor):**
   * Melatih siswa SMA merancang antarmuka web modern dengan semantic HTML5, CSS layout, dan prinsip responsive design.
3. **SMPN 45 Jakarta (Mobile App Development Instructor):**
   * Mengajarkan dasar arsitektur aplikasi mobile dan antarmuka interaktif dengan Kodular.
4. **Semut-Semut The Natural School (Game Development Instructor):**
   * Mengajarkan logika komputasi, algoritma percabangan, dan mekanika game edukatif.
5. **Hajrabyadl (Web Development Instructor):**
   * Pelatihan dasar rekayasa web dan pemecahan masalah dengan kode bagi 23+ siswa.
6. **SMP INS Depok (App Development Instructor):**
   * Workshop pengenalan dasar pembuatan aplikasi mobile bagi siswa menengah pertama.
7. **Al-Anshar (App Design & Game Development Instructor):**
   * Membimbing siswa dalam wireframing antarmuka Figma dan logika pembuatan game.
8. **Griyya Sunnah (Game Development Instructor):**
   * Pelatihan logika komputasi anak usia muda dengan pendekatan visual Scratch.
9. **MTs Yasmine (Design Instructor):**
   * Workshop desain visual, tipografi, dan estetika antarmuka grafis.

Bagi Adyvka, mengajar bukan hanya sekadar membagikan ilmu, melainkan cara terbaik untuk menguji pemahaman diri agar mampu menjelaskan konsep kompleks secara sederhana dan empatik.`,
    links: [
      { label: "Lihat Semua Rekam Jejak Mengajar", url: "/experience" },
      { label: "Detail Workshop SMA Lazuardi GCS", url: "/experience/sma-lazuardi-gcs-web-development-instructor" },
      { label: "Detail Workshop SMPN 45", url: "/experience/smpn-45-app-development-instructor" },
      { label: "Detail Semut-Semut Natural School", url: "/experience/semut-semut-the-natural-school-game-development-instructor" },
    ],
  },

  SMPN25_TEACHER_TRAINING: {
    title: "Pelatihan Dewan Guru & Kepala Sekolah di SMPN 25 Depok",
    text: `**Pelatihan Guru & Kepala Sekolah oleh Adyvka di SMPN 25 Depok**

Salah satu pencapaian kepemimpinan edukasi paling berkesan bagi Adyvka adalah dipercaya memimpin pelatihan teknologi untuk para pendidik:

* **Audiens:** Dewan guru dan Kepala Sekolah SMPN 25 Depok.
* **Materi Inti:** Transformasi pembelajaran digital, pembuatan media ajar multimedia interaktif, dan optimalisasi platform web modern untuk manajemen kelas.
* **Keunikan:** Sesi ini dipimpin langsung oleh Adyvka saat masih berstatus siswa SMK, membuktikan kematangan komunikasi, penguasaan materi teknis yang diakui publik, serta rasa percaya diri dalam mentransfer ilmu kepada audiens senior secara santun dan profesional.`,
    links: [
      { label: "Buka Halaman Experience", url: "/experience" },
      { label: "Tentang Adyvka di Halaman About", url: "/about" },
    ],
  },

  // =========================================================================
  // 3. LEADERSHIP & ORGANIZATIONS
  // =========================================================================
  LEADERSHIP_EXPERIENCE: {
    title: "Pengalaman Kepemimpinan & Organisasi Adyvka",
    text: `**Pengalaman Kepemimpinan & Pengelolaan Organisasi Adyvka**

Adyvka aktif memegang peran kepemimpinan strategis dalam organisasi kesiswaan dan kepanitiaan nasional:

1. **Ketua Divisi Acara OSIS SMK IDN Boarding School:**
   * Menjabat selama dua periode berturut-turut, memimpin perencanaan konsep, rundown menit demi menit, koordinasi panggung, dan manajemen krisis acara besar sekolah.
2. **IT FEST 2025 (Koordinator Acara Festival Teknologi Nasional):**
   * Memimpin kepanitiaan festival teknologi nasional dengan lebih dari 500 peserta dari berbagai sekolah dan kampus di Indonesia.
3. **Barmus Voluntrip (Volunteer Event Organizer):**
   * Mengorganisasi kegiatan kerelawanan sosial untuk masyarakat pelosok, memfasilitasi logistik lapangan, dan memimpin dokumentasi kegiatan.
4. **Live In Rural Immersion (Pedesaan Tradisional):**
   * Menjalani hidup terintegrasi sepekan penuh bersama keluarga petani di pedesaan, membangun kepekaan sosial dan kerendahan hati.

Kepemimpinan ini mengasah kemampuan komunikasi, negosiasi, dan ketenangan Adyvka saat mengoordinasi tim engineer dalam proyek bernilai tinggi.`,
    links: [
      { label: "Detail OSIS Event Division Leader", url: "/experience/idn-student-council-event-division-leader" },
      { label: "Detail IT FEST 2025 Coordinator", url: "/experience/it-fest-2025-competition-event-coordinator" },
      { label: "Detail Barmus Voluntrip Organizer", url: "/experience/barmus-voluntrip-volunteer-event-organizer" },
    ],
  },

  IT_FEST_DETAIL: {
    title: "Kepemimpinan IT FEST 2025 (500+ Peserta Nasional)",
    text: `**IT FEST 2025: Festival Teknologi Nasional dengan 500+ Peserta**

Sebagai Koordinator Acara IT FEST 2025, Adyvka mengemban tanggung jawab operasional skala besar:

* **Skala Acara:** Lebih dari 500 peserta dari jenjang sekolah menengah dan perguruan tinggi seluruh Indonesia.
* **Cabang Kompetisi:** Web design, pengembangan aplikasi, desain antarmuka, dan kompetisi bahasa Inggris.
* **Tanggung Jawab Utama:**
  * Menyusun pedoman teknis perlombaan dan kriteria penilaian juri.
  * Mengoordinasi tim panitia beranggotakan 15+ personel lintas divisi (logistik, panggung, dokumentasi, teknis).
  * Menangani resolusi krisis operasional di lapangan dengan cepat dan tepat tanpa mengganggu jadwal acara.`,
    links: [
      { label: "Detail IT FEST 2025 Coordinator", url: "/experience/it-fest-2025-competition-event-coordinator" },
      { label: "Buka Halaman Experience", url: "/experience" },
    ],
  },

  BARMUS_VOLUNTRIP_DETAIL: {
    title: "Pengabdian Sosial: Barmus Voluntrip",
    text: `**Barmus Voluntrip: Pengabdian Sosial & Edukasi Pelosok**

Adyvka mendedikasikan energinya dalam kegiatan kemanusiaan melalui program Barmus Voluntrip:

* **Peran:** Volunteer Event Organizer dan Dokumentator Lapangan.
* **Fokus Kegiatan:** Menyalurkan bantuan pangan, mengajar anak-anak pelosok desa mengenai literasi digital dasar, dan mengelola alur logistik pembagian donasi agar tepat sasaran.
* **Dampak Karakter:** Menanamkan empati sosial mendalam bahwa teknologi pada akhirnya harus melayani kemanusiaan dan membantu mereka yang membutuhkan.`,
    links: [
      { label: "Detail Barmus Voluntrip Organizer", url: "/experience/barmus-voluntrip-volunteer-event-organizer" },
    ],
  },

  LIVE_IN_DETAIL: {
    title: "Program Live In Pedesaan IDN Boarding School",
    text: `**Live In Pedesaan Tradisional: Menempa Kerendahan Hati & Empati Sosial**

Program Live In adalah kurikulum pembentukan karakter mandiri di SMK IDN Boarding School:

* **Durasi:** Satu pekan penuh tinggal bersama keluarga petani lokal di pelosok pedesaan Jawa Barat.
* **Kegiatan Harian:** Membantu mencangkul dan menanam padi di sawah, menjaga warung keluarga asuh, dan membersihkan fasilitas masjid desa.
* **Pelajaran Penting:** Mengajarkan ketangguhan fisik, rasa syukur, dan adaptasi sosial cepat di lingkungan yang jauh dari kenyamanan fasilitas perkotaan modern.`,
    links: [
      { label: "Buka Detail Live In Pedesaan", url: "/experience/idn-boarding-school-live-in-rural-immersion" },
    ],
  },

  // =========================================================================
  // 4. LIFE, BACKPACKER & SURVIVAL
  // =========================================================================
  LIFE_SURVIVAL_EXPERIENCE: {
    title: "Pengalaman Ekspedisi, Kemandirian & Survival Adyvka",
    text: `**Ketangguhan Karakter: Solo Backpacker 3 Negara & Survival Semarang**

Karakter engineering Adyvka dibentuk oleh pengalaman hidup nyata yang menguji kemandirian dan daya tahan:

1. **Solo Backpacker 3 Negara (Singapura, Malaysia, Thailand):**
   * Dilakukan saat Adyvka berusia **15 tahun (Kelas IX SMP)**.
   * **100% Didanai Sendiri:** Seluruh tiket penerbangan, akomodasi, dan biaya hidup dibiayai dari tabungan hasil freelance coding dan desain.
   * **Kemandirian Total:** Menavigasi rute lintas negara seorang diri tanpa rombongan, mengurus dokumen imigrasi darat dan udara, mengatasi kendala bahasa, dan mengelola anggaran harian yang ketat.

2. **Business Life Survival di Semarang (PT Intisel):**
   * Diterjunkan langsung ke kota Semarang bersama tim dengan **modal tunai awal nol rupiah**.
   * Ditantang untuk bertahan hidup, mencari tempat berteduh, membangun jaringan relasi, dan menghasilkan pemasukan bersih murni dari inisiatif bisnis nyata dan logistik lapangan.

3. **Live In Pedesaan Tradisional:**
   * Hidup membaur selama sepekan penuh bersama keluarga petani di pedesaan tanpa kenyamanan teknologi perkotaan.

Pengalaman ini membentuk mentalitas Adyvka sebagai engineer yang tenang dan solutif saat menghadapi situasi krisis atau tenggat waktu yang ketat.`,
    links: [
      { label: "Buka Kisah Backpacker 3 Negara", url: "/experience/singapore-malaysia-thailand-backpacker-3-country" },
      { label: "Buka Kisah Survival Semarang", url: "/experience/pt-intisel-semarang-business-life-survival" },
      { label: "Buka Kisah Live In Pedesaan", url: "/experience/idn-boarding-school-live-in-rural-immersion" },
    ],
  },

  BACKPACKER_DETAIL: {
    title: "Ekspedisi Solo Backpacker 3 Negara (Singapura, Malaysia, Thailand)",
    text: `**Solo Backpacker 3 Negara: Menaklukkan Kemandirian di Usia 15 Tahun**

Ekspedisi solo backpacker melintasi Singapura, Malaysia, dan Thailand adalah bukti nyata kemandirian dan ketangguhan karakter Adyvka:

* **Usia Saat Ekspedisi:** 15 Tahun (Kelas IX SMP).
* **Seleksi Ketat:** Terpilih sebagai salah satu dari hanya 9 siswa terbaik dari ratusan kandidat program ekspedisi mandiri IDN.
* **100% Biaya Mandiri:** Seluruh tiket pesawat internasional, transportasi darat lintas perbatasan, konsumsi, dan penginapan dibiayai dari tabungan hasil jasa freelance coding web dan desain UI/UX.
* **Tantangan Lapangan:**
  * Navigasi mandiri menggunakan transportasi publik kereta dan bus lintas negara.
  * Melewati pos imigrasi darat dan bandara internasional secara mandiri.
  * Mengatasi tantangan bahasa dan mengelola anggaran keuangan darurat secara disiplin.`,
    links: [
      { label: "Detail Lengkap Solo Backpacker 3 Negara", url: "/experience/singapore-malaysia-thailand-backpacker-3-country" },
    ],
  },

  SEMARANG_SURVIVAL_DETAIL: {
    title: "Business & Life Survival di Semarang (PT Intisel)",
    text: `**Program Survival Bisnis di Semarang: Bertahan Hidup dengan Modal Nol Rupiah**

Tantangan survival bisnis di kota Semarang bersama PT Intisel menguji daya juang kewirausahaan Adyvka:

* **Kondisi Awal:** Diterjunkan di kota Semarang tanpa uang saku dan tanpa fasilitas penginapan yang disediakan.
* **Misi:** Bertahan hidup selama satu pekan penuh, mencari tempat berteduh yang halal, mencukupi makan harian, dan menghasilkan uang untuk tiket pulang.
* **Solusi Nyata:**
  * Mengambil pekerjaan fisik mendistribusikan perlengkapan konstruksi telekomunikasi.
  * Bernegosiasi dengan mitra bisnis lokal dan menjual jasa digital secara langsung di lapangan.
* **Hasil:** Berhasil menyelesaikan misi dengan surplus tabungan dan memetik pelajaran berharga bahwa tekad kuat dan kerja cerdas selalu membuka jalan keluar.`,
    links: [
      { label: "Detail Survival Semarang", url: "/experience/pt-intisel-semarang-business-life-survival" },
    ],
  },

  // =========================================================================
  // 5. CORPORATE WORK EXPERIENCES
  // =========================================================================
  WORK_EXPERIENCE: {
    title: "Pengalaman Kerja Profesional Adyvka (4 Perusahaan / Institusi)",
    text: `**Rekam Jejak Profesional Adyvka di Industri Perangkat Lunak**

Adyvka telah memegang tanggung jawab rekayasa perangkat lunak tingkat industri pada 4 perusahaan dan institusi:

1. **PT Intisel Prodaktifakom (Lead Systems Engineer & Project Manager):**
   * Memimpin tim 4 engineer membangun sistem enterprise **Databank ERP Ecosystem**.
   * Merancang backend modular monolith NestJS, Prisma ORM, dan PostgreSQL dengan RBAC berlapis.
   * Memangkas 18% waktu tutup buku bulanan dan mengotomasi scraping Huawei ISDP.

2. **PT Ardyanda Digital Inovasi (Full Stack Developer Intern):**
   * Lolos seleksi kompetitif 5 tahapan wawancara untuk magang wajib kelas 12.
   * Membangun rangkaian modul bisnis internal (payroll presisi 100%, pinjaman, buku kas) dan CMS klien.
   * Dipercaya menjadi perwakilan tim teknis dalam rapat klien serta Master of Ceremonies (MC) acara korporat.

3. **CV. Richo Bahari (Frontend Developer & UI/UX Architect):**
   * Membangun platform web industri modern Next.js 16 dan Tailwind CSS v4 untuk 5 pilar konstruksi sipil, MEP, fabrikasi baja, dan logistik K3 Zero Accident.

4. **Fakultas Kedokteran Universitas Muhammadiyah Jakarta (Full Stack Engineer Contract):**
   * Terpilih sebagai Top 2 siswa terbaik di kelas 11 untuk membangun Sistem Klirens Etik Riset Medis KEPK FK UMJ berstandar WHO/CIOMS.`,
    links: [
      { label: "Buka Semua Pengalaman Kerja", url: "/experience" },
      { label: "Detail PT Intisel", url: "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance" },
      { label: "Detail PT Ardyanda", url: "/experience/pt-ardyanda-digital-inovasi-full-stack-developer-internship" },
      { label: "Detail CV. Richo Bahari", url: "/experience/cv-richo-bahari-frontend-developer-freelance" },
      { label: "Detail FK UMJ", url: "/experience/universitas-muhammadiyah-jakarta-full-stack-engineer-contract" },
    ],
  },

  PT_INTISEL_DETAIL: {
    title: "Rekam Jejak di PT Intisel Prodaktifakom (Lead Engineer & PM)",
    text: `**PT Intisel Prodaktifakom: Memimpin Arsitektur Databank ERP Telekomunikasi**

Di PT Intisel Prodaktifakom, Adyvka dipercaya sebagai **Lead Systems Engineer & Project Manager**:

* **Lingkup Tanggung Jawab:** Mengomandoi tim beranggotakan 4 engineer dalam merancang, membangun, dan memelihara sistem enterprise Databank ERP.
* **Inovasi Inti:**
  * Bot scraping otomatis Huawei ISDP untuk sinkronisasi data proyek lapangan tanpa input manual.
  * Alur persetujuan bertingkat 3 tahap (Project Manager, Procurement, Finance) dengan jejak audit kriptografis.
  * Presensi mobile berbasis GPS geofencing presisi tinggi untuk ribuan teknisi lapangan.
* **Dampak Bisnis:** Memangkas 18% waktu rekonsiliasi tutup buku finansial bulanan dan memigrasikan 4.328 SKU aset telekomunikasi dengan zero error rate.`,
    links: [
      { label: "Detail Pengalaman PT Intisel", url: "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance" },
      { label: "Studi Kasus Proyek Databank ERP", url: "/projects/databank" },
    ],
  },

  PT_ARDYANDA_DETAIL: {
    title: "Pengalaman Kerja di PT Ardyanda Digital Inovasi (Full Stack Intern)",
    text: `**PT Ardyanda Digital Inovasi: Full Stack Developer & Penghubung Klien**

Pengalaman magang korporat satu tahun penuh di PT Ardyanda Digital Inovasi:

* **Proses Rekrutmen:** Terpilih melalui proses seleksi kompetitif 5 tahapan wawancara ketat.
* **Perkembangan Peran:** Awalnya direkrut sebagai backend intern, dengan cepat dipromosikan menjadi Full Stack Developer karena kecepatan belajar dan ketelitian tinggi.
* **Kontribusi Teknis:**
  * Membangun sistem penggajian (payroll) internal berpresisi 100% tanpa selisih hitung.
  * Mengembangkan mesin pinjaman kasbon karyawan dan buku kas umum perusahaan.
  * Merancang CMS modern untuk portal klien rumah sakit dan manajemen masjid.
* **Peran Komunikasi:** Mewakili divisi teknologi dalam presentasi kepada pemangku kepentingan klien serta dipercaya menjadi Master of Ceremonies (MC) pada acara resmi perusahaan.`,
    links: [
      { label: "Detail Pengalaman PT Ardyanda", url: "/experience/pt-ardyanda-digital-inovasi-full-stack-developer-internship" },
    ],
  },

  CV_RICHO_BAHARI_DETAIL: {
    title: "Studi Kasus: CV. Richo Bahari Platform Industri",
    text: `**CV. Richo Bahari: Transformasi Digital Kontraktor Sipil & Fabrikasi Baja**

Adyvka memimpin rekayasa frontend dan arsitektur UI/UX untuk CV. Richo Bahari bersama CentraDev Team:

* **Klien:** Kontraktor umum terkemuka di Jawa Barat yang melayani 5 pilar bisnis (konstruksi sipil, mekanikal-elektrikal, fabrikasi baja berat, dan armada logistik).
* **Solusi Teknologi:**
  * Dibangun menggunakan **Next.js 16 (App Router), React 19, dan Tailwind CSS v4**.
  * Mengubah tumpukan brosur PDF lama menjadi katalog interaktif modern yang responsif dan cepat dibuka di perangkat mobile lapangan.
  * Menampilkan standar keselamatan kerja K3 Zero Accident dan sertifikasi mutu ISO 9001 secara terstruktur untuk meyakinkan klien korporat.`,
    links: [
      { label: "Detail Proyek CV. Richo Bahari", url: "/projects/richobahari" },
      { label: "Detail Pengalaman Richo Bahari", url: "/experience/cv-richo-bahari-frontend-developer-freelance" },
    ],
  },

  // =========================================================================
  // 6. PROJECTS (18 SHIPPED PROJECTS)
  // =========================================================================
  COUNT_PROJECTS: {
    title: "Total Projek: 18 Proyek Rekayasa Lengkap",
    text: `**Adyvka telah mengerjakan dan merilis total 18 proyek rekayasa perangkat lunak.**

Seluruh 18 proyek ini mencakup solusi enterprise industri, platform AI, aplikasi mobile utilitas, dan portal web:

1. **4 Proyek Enterprise & Skala Industri:**
   * **Databank Ecosystem:** Enterprise telecom & vendor management platform PT Intisel (Huawei ISDP bot, approval 3 tahap, 4.328 SKU migrasi).
   * **CV. Richo Bahari:** Platform korporat industri K3 Zero Accident & ISO 9001 (Next.js 16, React 19, Tailwind CSS v4).
   * **Terastani:** Fullstack ERP rantai pasok agrikultur dan multi-gudang hasil bumi.
   * **KEPK FK UMJ:** Portal klirens etik riset medis Fakultas Kedokteran UMJ standar WHO dan CIOMS.

2. **5 Platform Kesehatan, Edukasi & AI:**
   * **Ruang Tumbuh:** Sistem booking, telekonsultasi, dan klinik kesehatan mental.
   * **FitSmart:** Pelacak kebugaran dan nutrisi cerdas berbasis AI.
   * **Semua Bisa:** Platform pembelajaran inklusif adaptif (Top 5 Finalis Nasional UNILA).
   * **IDN Course:** Learning Management System (LMS) kursus teknologi modular.
   * **AI Ticket Manager:** Sistem triage tiket support cerdas berprioritas otomatis.

3. **4 Aplikasi Mobile & Utilitas Lapangan:**
   * **Attendance App:** Sistem presensi mobile dengan validasi radius geofencing GPS presisi.
   * **QR Scanner:** Pemindai barcode dan QR code industri berkecepatan tinggi.
   * **News App:** Portal berita digital dengan kurasi feed waktu nyata.
   * **Quran App:** Aplikasi baca Al-Quran digital dan pemutar audio tilawah terverifikasi.

4. **5 Platform Web & E-Commerce:**
   * **Coffeee Shop:** Aplikasi pemesanan menu kopi dan checkout keranjang interaktif.
   * **MyStyle:** Toko daring busana dan gaya hidup modern.
   * **DeliFood:** Platform logistik pemesanan makanan cepat saji on-demand.
   * **Java Island:** Portal eksplorasi budaya dan pariwisata Jawa.
   * **Pusakaku:** Ensiklopedia arsip permainan tradisional nusantara (Juara 1 Nasional ICOMFEST).

Setiap proyek dilengkapi dokumentasi arsitektur, parameter teknis, dan studi kasus mendalam yang dapat Anda buka di halaman Projects.`,
    links: [
      { label: "Buka Katalog 18 Proyek", url: "/projects" },
      { label: "Lihat Databank ERP", url: "/projects/databank" },
      { label: "Lihat KEPK FK UMJ", url: "/projects/kepk" },
      { label: "Lihat Terastani ERP", url: "/projects/terastani" },
    ],
  },

  LIST_PROJECTS: {
    title: "Daftar 18 Proyek Portofolio Adyvka",
    text: `**Daftar Lengkap 18 Proyek yang Dikerjakan Adyvka**

Berikut rincian seluruh 18 proyek portofolio Adyvka yang dapat dijelajahi di website ini:

* **Sistem Enterprise & Operasional:**
  1. **Databank Ecosystem** (Telecom & Vendor ERP PT Intisel)
  2. **CV. Richo Bahari** (Industrial General Contractor Web)
  3. **Terastani** (Agricultural Supply Chain ERP)
  4. **KEPK FK UMJ** (Medical Research Ethics Review)
* **Kesehatan, Edukasi & Kecerdasan Buatan:**
  5. **Ruang Tumbuh** (Mental Health Platform)
  6. **FitSmart** (AI Fitness & Calorie Tracker)
  7. **Semua Bisa** (Inclusive Learning App)
  8. **IDN Course** (Technical Course LMS)
  9. **AI Ticket Manager** (Smart Helpdesk Automation)
* **Mobile & Aplikasi Utilitas:**
  10. **Attendance App** (Geofenced GPS Attendance)
  11. **QR Scanner** (Industrial Barcode & QR Utility)
  12. **News App** (Real-Time News Portal)
  13. **Quran App** (Digital Quran Reader & Recitation)
* **Platform Web & E-Commerce:**
  14. **Coffeee Shop** (Specialty Coffee Ordering)
  15. **MyStyle** (Fashion Storefront)
  16. **DeliFood** (Food Delivery Platform)
  17. **Java Island** (Cultural Tourism Portal)
  18. **Pusakaku** (Traditional Heritage Archive)`,
    links: [
      { label: "Jelajahi Semua Proyek", url: "/projects" },
    ],
  },

  DATABANK_DETAIL: {
    title: "Studi Kasus: Databank ERP Ecosystem",
    text: `**Databank ERP Ecosystem di PT Intisel Prodaktifakom**

Databank adalah sistem enterprise telekomunikasi skala besar yang dipimpin dan diarsiteki langsung oleh Adyvka sebagai Lead Engineer & Project Manager:

* **Tujuan Utama:** Menyatukan seluruh operasional lapangan telekomunikasi nasional, pelacakan Purchase Order (PO), dokumen implementasi (BAPP, BAST, Invoice), dan manajemen vendor outsource.
* **Inovasi Teknis:**
  * **Automated Huawei ISDP Bot:** Otomasi scraping dan integrasi data telekomunikasi secara langsung tanpa input manual.
  * **Persetujuan Digital Berurutan 3 Tahap:** Alur verifikasi berjenjang dengan cryptographic audit trail untuk mencegah manipulasi data.
  * **Geofenced GPS Attendance:** Presensi absensi lapangan terhubung langsung ke kalkulasi payroll otomatis.
* **Hasil Terukur di Produksi:**
  * Memangkas 18% waktu tutup buku finansial bulanan.
  * Migrasi 4.328 SKU dan aset telekomunikasi dengan nol rekonsiliasi error.
  * Uptime operasional sistem 99.8% di lingkungan produksi.`,
    links: [
      { label: "Buka Detail Proyek Databank ERP", url: "/projects/databank" },
    ],
  },

  KEPK_DETAIL: {
    title: "Studi Kasus: SIM KEPK FK UMJ (Klirens Etik Riset Medis)",
    text: `**SIM KEPK FK UMJ: Sistem Manajemen Etik Riset Kedokteran**

Proyek sistem klirens etik riset medis untuk Fakultas Kedokteran Universitas Muhammadiyah Jakarta:

* **Pemilihan Talenta:** Adyvka terpilih sebagai **Top 2 siswa terbaik dari 25 kandidat** di angkatannya untuk memegang kontrak enterprise ini saat masih di kelas 11.
* **Standar Regulasi:** Mengikuti pedoman baku etik penelitian kesehatan internasional berstandar WHO dan CIOMS (Council for International Organizations of Medical Sciences).
* **Fitur Utama:**
  * Pengajuan protokol riset medis oleh peneliti dan dosen.
  * Alur telaah cepat (exempted/expedited) dan sidang pleno etik bertingkat.
  * Penerbitan surat keterangan layak etik digital berpenanda tangan elektronik resmi.
* **Teknologi:** Laravel 12, Tailwind CSS, MySQL, dan deployment cloud AWS.`,
    links: [
      { label: "Buka Detail Proyek KEPK", url: "/projects/kepk" },
      { label: "Detail Kontrak Kerja di FK UMJ", url: "/experience/universitas-muhammadiyah-jakarta-full-stack-engineer-contract" },
    ],
  },

  TERASTANI_DETAIL: {
    title: "Studi Kasus: TerasTani ERP Rantai Pasok Agrikultur",
    text: `**TerasTani: Platform Rantai Pasok & Multi-Gudang Agrikultur**

TerasTani adalah platform fullstack yang dirancang untuk memotong rantai distribusi panjang komoditas hasil bumi:

* **Tantangan:** Ketimpangan harga yang diterima petani kecil dibanding harga beli konsumen akhir akibat perantara berlapis.
* **Solusi Rekayasa:**
  * Sistem inventaris multi-gudang (multi-warehouse) dengan pembaruan stok real-time.
  * Dasbor analitik tren permintaan komoditas pasar bagi kelompok tani.
  * Tata kelola pesanan terpadu dengan konfirmasi pembayaran otomatis.`,
    links: [
      { label: "Buka Detail Proyek TerasTani", url: "/projects/terastani" },
    ],
  },

  RUANGTUMBUH_DETAIL: {
    title: "Studi Kasus: RuangTumbuh Platform Kesehatan Mental",
    text: `**RuangTumbuh: Platform Skrining & Booking Telekonsultasi Psikologi**

RuangTumbuh dirancang untuk mempermudah akses layanan konseling psikologi secara aman dan terjangkau:

* **Fitur Utama:**
  * Kuesioner skrining kesehatan mental interaktif dengan kalkulasi skor indikator otomatis.
  * Sistem penjadwalan sesi tatap muka dan telekonsultasi bersama konselor profesional.
  * Enkripsi data privasi rekam medis pengguna untuk menjaga kerahasiaan sesi konseling.`,
    links: [
      { label: "Buka Detail Proyek RuangTumbuh", url: "/projects/ruangtumbuh" },
    ],
  },

  PUSAKAKU_DETAIL: {
    title: "Studi Kasus: PusakaKu (Juara 1 Nasional ICOMFEST 2025)",
    text: `**PusakaKu: Platform Preservasi Budaya & Permainan Tradisional Nusantara**

PusakaKu adalah platform interaktif yang meraih penghargaan tertinggi **Juara 1 Lomba Web Design Nasional ICOMFEST 2025**:

* **Misi:** Menyelamatkan warisan permainan dan senjata tradisional Indonesia dari kepunahan di era digital.
* **Keunggulan Desain & Fitur:**
  * Ensiklopedia etnografi digital dengan visualisasi 2D interaktif.
  * Mesin gamifikasi dan kuis interaktif untuk mengenalkan aturan permainan tradisional kepada generasi muda.
  * Antarmuka responsif berperforma tinggi yang memikat dewan juri nasional.`,
    links: [
      { label: "Buka Detail Proyek PusakaKu", url: "/projects/pusakaku" },
      { label: "Lihat Penghargaan Juara 1 ICOMFEST", url: "/achievements/1st-place-national-web-design-competition" },
    ],
  },

  SEMUABISA_DETAIL: {
    title: "Studi Kasus: SemuaBisa (Top 5 Finalis Nasional UNILA 2024)",
    text: `**SemuaBisa: Platform Pembelajaran Inklusif & Adaptif**

SemuaBisa meraih predikat **Top 5 Grand Finalist (Juara 4) Nasional Web Development Competition di Universitas Lampung (UNILA)**:

* **Pencapaian Spesial:** Adyvka dan tim menjadi **satu-satunya tim SMK** yang berhasil menembus babak final, bersaing langsung melawan tim-tim mahasiswa teknik dari universitas terkemuka se-Indonesia.
* **Fitur Utama:**
  * Fitur aksesibilitas tinggi untuk pengguna berkebutuhan khusus (dukungan pembaca layar, kontras tinggi, navigasi keyboard).
  * Modul belajar modular dengan pelacakan progres pemahaman materi.`,
    links: [
      { label: "Buka Detail Proyek SemuaBisa", url: "/projects/semua-bisa" },
      { label: "Lihat Prestasi Finalis UNILA", url: "/achievements/finalist-national-web-dev-competition" },
    ],
  },

  MOBILE_APPS: {
    title: "Portofolio Aplikasi Mobile & Android Adyvka",
    text: `**Keahlian & Portofolio Aplikasi Mobile Adyvka**

Adyvka telah mengembangkan 4 aplikasi mobile fungsional yang siap pakai:

1. **Attendance App (Presensi Geofenced GPS):**
   * Aplikasi presensi kehadiran mobile yang memvalidasi radius koordinat GPS teknisi di lokasi instalasi sebelum mengizinkan clock-in, terhubung otomatis ke kalkulasi payroll.
2. **QR Guest Manager & Scanner:**
   * Pemindai QR code dan barcode industri berkecepatan tinggi dengan validasi token seketika untuk registrasi tamu dan verifikasi tiket.
3. **News App (Portal Berita Real-Time):**
   * Aplikasi pembaca berita dengan kurasi kategori dinamis, pencarian instan, dan penyimpanan artikel luring.
4. **Quran App (Al-Quran Digital & Audio Tilawah):**
   * Aplikasi mushaf Al-Quran dengan teks arab berstandar Kemenag, terjemahan per ayat, penanda bacaan terakhir, dan pemutar audio tilawah qari internasional.`,
    links: [
      { label: "Lihat Attendance App", url: "/projects/attendance-app" },
      { label: "Lihat QR Scanner", url: "/projects/qr-scanner" },
      { label: "Lihat Quran App", url: "/projects/quran-app" },
      { label: "Lihat News App", url: "/projects/news-app" },
    ],
  },

  AI_CAPABILITIES: {
    title: "Kapabilitas Rekayasa AI & Machine Learning Adyvka",
    text: `**Penerapan Kecerdasan Buatan (AI) oleh Adyvka**

Adyvka mengintegrasikan kecerdasan buatan ke dalam alur kerja produk untuk menyelesaikan persoalan operasional nyata:

1. **AI Ticket Manager:**
   * Aplikasi otomasi helpdesk yang memanfaatkan model AI untuk membaca deskripsi keluhan pengguna, menentukan tingkat urgensi secara otomatis, dan mengarahkan tiket ke divisi teknis yang relevan.
2. **FitSmart AI Assistant:**
   * Platform rekomendasi nutrisi dan kalori berbasis preferensi diet dan aktivitas harian pengguna.
3. **Sertifikasi AI Resmi:**
   * Memegang sertifikat resmi **Dasar AI (Artificial Intelligence Basics)** dan **Dasar Prompt Engineering** dari Dicoding Indonesia.
   * Terbiasa dengan integrasi REST API penyedia Large Language Model (LLM) seperti Google Gemini dan OpenAI.`,
    links: [
      { label: "Buka AI Ticket Manager", url: "/projects/ai-ticket-manager" },
      { label: "Buka Proyek FitSmart", url: "/projects/fitsmart" },
      { label: "Lihat Sertifikat AI di Halaman Kredensial", url: "/certificates" },
    ],
  },

  // =========================================================================
  // 7. BOOKS & PUBLICATIONS
  // =========================================================================
  BOOKS: {
    title: "Karya Buku: 2 Buku Teknis Resmi Terbitan Adyvka",
    text: `**Adyvka telah menulis dan menerbitkan 2 buku teknis resmi.**

Kedua buku ini diterbitkan untuk membantu siswa pemula belajar rekayasa perangkat lunak tanpa rasa takut:

1. **Buku 1: Membuat Game 2D Tanpa Coding (100 Halaman, Ber-ISBN)**
   * **Materi:** Panduan visual programming menggunakan Scratch untuk siswa pemula.
   * **Fokus:** Mengajarkan konsep dasar algoritma, percabangan logika, sistem koordinat layar, dan animasi interaktif melalui pembuatan game yang seru.
   * **Format:** Buku cetak dan modul PDF interaktif.

2. **Buku 2: Membuat Website Modern dengan Framework (Ber-ISBN)**
   * **Materi:** Panduan langkah demi langkah implementasi HTML5, CSS3, dan framework styling modern.
   * **Fokus:** Menjelaskan cara membangun tata letak web responsif, tipografi bersih, dan arsitektur komponen frontend yang siap pakai di dunia industri.

Kedua e-book dapat langsung dibaca secara online melalui fitur PDF reader interaktif di website ini.`,
    links: [
      { label: "Baca Buku Membuat Game 2D", url: "/publications/buku-membuat-game-tanpa-coding" },
      { label: "Baca Buku Membuat Website", url: "/publications/buku-membuat-website-dengan-framework" },
    ],
  },

  // =========================================================================
  // 8. ACADEMICS & GPA
  // =========================================================================
  GPA_ACADEMIC: {
    title: "Prestasi Akademik: Nilai Rapot 96 / 100 GPA",
    text: `**Nilai rapot Adyvka pada semester terakhir (Semester 4) adalah 96 / 100 GPA.**

Pencapaian ini mencatatkan predikat **Academic Honors (Peringkat Kehormatan Akademik)** di jurusan Rekayasa Perangkat Lunak SMK IDN Boarding School.

Fakta penting di balik nilai 96/100:
* **Penguasaan Komprehensif:** Nilai 96/100 mencerminkan pemahaman mendalam dalam mata pelajaran rekayasa perangkat lunak, arsitektur basis data, clean code, dan algoritma.
* **Tanggung Jawab Industri Simultan:** Nilai ini diraih berbarengan saat Adyvka aktif memimpin arsitektur sistem enterprise telekomunikasi Databank ERP di PT Intisel dan platform internal di PT Ardyanda.
* **Kedisiplinan Waktu:** Di usianya yang baru 17 tahun, Adyvka membuktikan bahwa performa akademik puncak dan penyelesaian proyek nyata dapat diraih beriringan tanpa kompromi.`,
    links: [
      { label: "Baca Biografi Lengkap di Halaman About", url: "/about" },
      { label: "Lihat Rekam Jejak Pengalaman", url: "/experience" },
    ],
  },

  // =========================================================================
  // 9. AGE, EDUCATION & LOCATION
  // =========================================================================
  AGE_INFO: {
    title: "Usia & Latar Belakang Adyvka",
    text: `**Adyvka saat ini berusia 17 tahun.**

* **Tahun Lahir:** 2008
* **Domisili:** Depok, Jawa Barat, Indonesia
* **Mulai Coding:** Sejak usia 13 tahun (tahun 2021)
* **Pengalaman Rekayasa:** 5+ tahun pengalaman membangun sistem digital

Meskipun masih berusia 17 tahun, Adyvka telah dipercaya memimpin arsitektur sistem enterprise nasional, menerbitkan 2 buku resmi, melatih dewan guru, dan solo backpacker melintasi 3 negara Asia Tenggara.`,
    links: [
      { label: "Buka Halaman About", url: "/about" },
    ],
  },

  EDUCATION: {
    title: "Pendidikan & Sekolah Adyvka",
    text: `**Adyvka bersekolah di SMK IDN Boarding School.**

* **Tingkat:** Kelas XII (Siswa Tingkat Akhir)
* **Jurusan:** Rekayasa Perangkat Lunak (Software Engineering)
* **Rekor Akademik:** Nilai rapot **96 / 100 GPA** di Semester 4 (Academic Honors)
* **Sistem Sekolah:** Asrama terpadu (boarding school) yang melatih kemandirian, etos kerja profesional, dan penguasaan teknologi industri.
* **Kepemimpinan Sekolah:** Dipercaya menjabat sebagai Ketua Divisi Acara OSIS SMK IDN dan mengoordinasi festival teknologi nasional IT FEST 2025 dengan lebih dari 500 peserta.`,
    links: [
      { label: "Baca Selengkapnya di Halaman About", url: "/about" },
    ],
  },

  LOCATION_DOMICILE: {
    title: "Lokasi & Domisili Rafif Sava Adyvka Pratama",
    text: `**Domisili & Wilayah Kerja Adyvka**

* **Domisili Saat Ini:** Depok, Jawa Barat, Indonesia (Kawasan Metropolitan Jabodetabek).
* **Zona Waktu:** Asia/Jakarta (UTC+07 · WIB).
* **Fleksibilitas Kerja:**
  * **Remote:** Siap bekerja secara penuh dengan tim di seluruh Indonesia maupun luar negeri dengan ritme kerja asinkronus yang disiplin.
  * **On-Site / Hybrid:** Terbuka untuk pertemuan tatap muka, rapat pemangku kepentingan, atau penempatan di area Jabodetabek dan Bandung.`,
    links: [
      { label: "Kunjungi Halaman Kontak", url: "/contact" },
      { label: "Buka Halaman About", url: "/about" },
    ],
  },

  // =========================================================================
  // 10. CERTIFICATES & ACHIEVEMENTS
  // =========================================================================
  CERTIFICATES: {
    title: "Sertifikasi Internasional & Kredensial Resmi (22+ Kredensial)",
    text: `**Sertifikasi Internasional & Kredensial Resmi Adyvka**

Adyvka memiliki sertifikasi resmi terverifikasi dari institusi pendidikan dan teknologi global terdepan:

* **Harvard University (CS50x):**
  * *CS50: Introduction to Computer Science*, menguasai dasar algoritma mendalam, struktur data memori rendah bahasa C, basis data SQL, dan rekayasa web Python.
* **Amazon Web Services (AWS):**
  * *AWS Cloud Practitioner Essentials*, menguasai fondasi arsitektur cloud, keamanan AWS IAM, dan komputasi terdistribusi.
* **Dicoding Indonesia & DBS Foundation:**
  * Coding Camp Full Stack Developer
  * Pengembang Backend Developer Profesional (Node.js & Rest API)
  * Pengembang Frontend Web Developer & React Web Developer
  * Pemrograman JavaScript & Python Fundamentals
  * Pemrograman Dasar C & Logika Komputasi
  * Dasar Analisis Data & Prompt Engineering AI
  * Manajemen Kode Dasar Git & GitHub
* **Skilvul & Lainnya:**
  * Dasar UI/UX Design Figma & English Proficiency Assessment.`,
    links: [
      { label: "Lihat Seluruh Sertifikat", url: "/certificates" },
    ],
  },

  ACHIEVEMENTS: {
    title: "Prestasi & Penghargaan Kompetisi Tingkat Nasional",
    text: `**Prestasi Kompetisi Tingkat Nasional yang Diraih Adyvka**

Adyvka telah membuktikan keunggulan rekayasa dan inovasinya di berbagai ajang bergengsi:

1. **Juara 1 Lomba Web Design Nasional (ICOMFEST 2025):**
   * Meraih Juara 1 Nasional lewat karya platform **PusakaKu** (pelestarian permainan dan senjata tradisional nusantara berbasis gamifikasi).
2. **Juara 2 Lomba Desain Web Nasional (PNBITC#18 Politeknik Negeri Bali):**
   * Meraih Juara 2 tingkat nasional bersaing dengan ratusan tim mahasiswa dan siswa berprestasi se-Indonesia di ajang Information Technology Competition Politeknik Negeri Bali.
3. **Top 5 Grand Finalist Lomba Web Dev Nasional (Universitas Lampung 2024):**
   * Meraih Juara 4 Nasional dengan platform **SemuaBisa**, menjadi satu-satunya kontingen SMK yang berhasil bersaing melawan mahasiswa teknik perguruan tinggi.
4. **Best Poster Award di IDN Boarding School:**
   * Penghargaan desain grafis dan hierarki tipografi terbaik pada festival seni sekolah.`,
    links: [
      { label: "Buka Halaman Prestasi", url: "/achievements" },
      { label: "Detail Juara 2 PNBITC Bali", url: "/achievements/2nd-place-national-web-design-competition-pnbitc" },
      { label: "Detail Juara 1 ICOMFEST", url: "/achievements/1st-place-national-web-design-competition" },
    ],
  },

  // =========================================================================
  // 11. TECH STACK & SKILLS
  // =========================================================================
  TECH_STACK: {
    title: "Keahlian Teknis & Tech Stack Adyvka",
    text: `**Teknologi & Bahasa Pemrograman yang Dikuasai Adyvka**

Adyvka menguasai spektrum rekayasa perangkat lunak end-to-end:

* **Frontend & Antarmuka:**
  * Next.js 16 (App Router), React 19, TypeScript, JavaScript (ESNext).
  * Tailwind CSS v4, CSS Modules, Framer Motion, Desain Sistem Responsif.
  * Wireframing, User Flow, dan Desain Sistem Figma.
* **Backend & Arsitektur API:**
  * NestJS (Modular Monolith), Express.js, Node.js, Laravel 12.
  * Prisma ORM, RESTful API Design, JWT Token Rotation, Middleware Governance.
  * Role-Based Access Control (RBAC) bertingkat.
* **Basis Data & Infrastruktur Cloud:**
  * PostgreSQL, MySQL, Redis Caching.
  * Docker Containerization, Git & GitHub Actions CI/CD Pipeline, AWS, Vercel.
* **Mobile Development:**
  * Dart & Flutter, Kodular, Android Architecture, GPS Geofencing.`,
    links: [
      { label: "Lihat Stack di Halaman About", url: "/about" },
    ],
  },

  // =========================================================================
  // 12. RECRUITER & VALUE PROPOSITION
  // =========================================================================
  STRENGTHS_WHY_HIRE: {
    title: "Kelebihan Utama & Alasan Merekrut Adyvka",
    text: `**Mengapa Merekrut Rafif Sava Adyvka Pratama?**

Adyvka membawa nilai pembeda yang sangat langka dibandingkan kandidat sebaya bahkan lulusan sarjana:

1. **Pengalaman Lapangan Nyata Sejak Dini (Enterprise-Tested):**
   Di usia 17 tahun, Adyvka sudah memimpin 4 engineer membangun Databank ERP telekomunikasi di PT Intisel, mengintegrasikan bot scraping Huawei ISDP, dan sistem persetujuan digital 3 tahap.
2. **Keseimbangan Akademik & Profesional Puncak:**
   Meraih nilai rapot **96 / 100 GPA** (Academic Honors) di semester 4 SMK IDN Boarding School sambil memegang tanggung jawab sistem produksi industri.
3. **Kemandirian & Ketahanan Karakter (High Grit & High Agency):**
   Terbiasa menghadapi tantangan berat tanpa bergantung pada orang lain, dibuktikan melalui solo backpacker 3 negara di usia 15 tahun dan survival bisnis di Semarang dengan modal nol rupiah.
4. **Pedagogi & Komunikasi Unggul:**
   Penulis 2 buku teknis resmi dan telah dipercaya melatih dewan guru, kepala sekolah, serta ratusan siswa di 9 institusi.
5. **Keahlian Kode Bersih & Arsitektur Berkelanjutan:**
   Menghindari legacy technical debt dengan menerapkan modular monolith, validasi schema Zod, dan perlindungan RBAC ketat.`,
    links: [
      { label: "Buka Halaman About", url: "/about" },
      { label: "Hubungi Adyvka untuk Peluang Karier", url: "/contact" },
    ],
  },

  CV_RESUME: {
    title: "Download CV & Resume Resmi Adyvka",
    text: `**Curriculum Vitae (CV) & Resume Resmi Adyvka**

CV resmi Rafif Sava Adyvka Pratama merangkum seluruh rekam jejak profesional, kompetensi teknis, publikasi buku, dan pencapaian kompetisi:

* **Isi CV:** Ringkasan 4 pengalaman kerja industri, kepemimpinan Databank ERP di PT Intisel, 18 proyek rilis, 2 buku resmi, 22+ sertifikasi, dan nilai rapot 96/100.
* **Unduh Langsung:** Anda dapat mengunduh dokumen resmi CV Adyvka langsung melalui tombol unduh di halaman About atau menghubungi langsung via email.`,
    links: [
      { label: "Buka Halaman About untuk Download CV", url: "/about" },
      { label: "Kirim Email Permintaan Resume", url: "mailto:rafifdyvka07@gmail.com" },
    ],
  },

  WORK_AVAILABILITY: {
    title: "Status Ketersediaan & Format Kerja (Remote / Hybrid / On-Site)",
    text: `**Status Ketersediaan & Format Kerja Adyvka**

Adyvka siap berkontribusi dalam tim teknologi berkinerja tinggi:

* **Status:** Terbuka untuk peluang Full-Time, Kontrak Sistem Enterprise, Magang Lanjutan, maupun Freelance Terarah.
* **Peran yang Dicari:**
  * Full Stack Developer / Software Engineer
  * Frontend Engineer (Next.js / React / TypeScript)
  * Backend Engineer (NestJS / Node.js / PostgreSQL / REST API)
  * Systems Architect Junior
* **Format Kerja:**
  * **Remote:** Tersedia untuk tim remote di zona waktu manapun dengan ritme kerja transparan.
  * **Hybrid / On-Site:** Fleksibel untuk area Jabodetabek dan Bandung.`,
    links: [
      { label: "Hubungi Adyvka di Halaman Contact", url: "/contact" },
      { label: "Buka Profil About", url: "/about" },
    ],
  },

  RATES_AND_PRICING: {
    title: "Tarif, Estimasi Biaya & Layanan Rekayasa Adyvka",
    text: `**Tarif Jasa Freelance & Konsultasi Perangkat Lunak Adyvka**

Adyvka menerapkan pendekatan **value-based pricing** yang transparan dan proporsional terhadap dampak bisnis:

* **Faktor Penentu Tarif:**
  1. Kompleksitas arsitektur perangkat lunak (landing page modern, sistem ERP korporat, aplikasi mobile, integrasi AI).
  2. Kebutuhan integrasi pihak ketiga (payment gateway, bot scraping, hardware presensi).
  3. Batas waktu pengerjaan dan SLA dukungan purna jual.
* **Langkah Konsultasi:**
  Untuk mendiskusikan kebutuhan sistem, penandatanganan NDA, atau meminta estimasi penawaran harga resmi tanpa biaya komitmen, Anda dapat langsung mengirimkan ringkasan proyek melalui WhatsApp atau email resmi.`,
    links: [
      { label: "Kirim Pesan di Halaman Kontak", url: "/contact" },
      { label: "Kirim Email Langsung", url: "mailto:rafifdyvka07@gmail.com" },
    ],
  },

  ENGLISH_FLUENCY: {
    title: "Kemahiran Bahasa Inggris & Komunikasi Internasional",
    text: `**Kemahiran Bahasa Inggris Adyvka**

* **Sertifikasi:** Memiliki sertifikat resmi **English Proficiency Assessment** dari Dicoding Indonesia.
* **Penerapan Praktis:**
  * Mampu membaca, mencerna, dan mengimplementasikan dokumentasi teknis standar internasional berbahasa Inggris tanpa kendala.
  * Terbiasa berkomunikasi langsung dengan masyarakat mancanegara saat melakukan ekspedisi solo backpacker melintasi Singapura, Malaysia, dan Thailand.
  * Menulis clean code, commit messages Git, dan dokumentasi arsitektur sistem dalam bahasa Inggris standar industri.`,
    links: [
      { label: "Lihat Sertifikat di Halaman Kredensial", url: "/certificates" },
    ],
  },

  HOBBIES_INTERESTS: {
    title: "Aktivitas & Minat Adyvka di Luar Coding",
    text: `**Kehidupan & Aktivitas Adyvka di Luar Dunia Koding**

Untuk menjaga keseimbangan hidup dan ketajaman berpikir, Adyvka rutin melakukan:

1. **Solo Backpacking & Menjelajah Tempat Baru:** Menikmati petualangan mandiri, mempelajari budaya lokal, dan melatih kemampuan adaptasi di lingkungan baru.
2. **Membaca Buku Literasi Sains & Kepemimpinan:** Mendalami wawasan arsitektur sistem, efisiensi bisnis, dan psikologi komunikasi.
3. **Aksi Kerelawanan & Sosial:** Terlibat dalam kegiatan Barmus Voluntrip dan aksi sosial mengajar anak-anak di daerah pelosok.
4. **Olahraga & Kebugaran:** Menjaga kebugaran fisik demi menunjang ketahanan kerja mental saat memimpin proyek rekayasa intensif.`,
    links: [
      { label: "Kisah Backpacker 3 Negara", url: "/experience/singapore-malaysia-thailand-backpacker-3-country" },
      { label: "Buka Halaman About", url: "/about" },
    ],
  },

  VISION_FUTURE_GOALS: {
    title: "Visi & Aspirasi Karier Masa Depan Adyvka",
    text: `**Visi & Aspirasi Masa Depan Rafif Sava Adyvka Pratama**

* **Visi Jangka Panjang:** Menjadi **World-Class Systems Architect** yang memimpin perancangan sistem terdistribusi berskala besar dengan keandalan tinggi (high availability) dan nol toleransi kegagalan data.
* **Misi Teknologi:** Membangun kedaulatan perangkat lunak di Indonesia melalui standardisasi arsitektur modern, clean code, serta mendidik talenta muda berikutnya agar berdaya saing global.
* **Prinsip Hidup:** "High agency, integrity, continuous learning, and software that creates real human impact."`,
    links: [
      { label: "Baca Selengkapnya di Halaman About", url: "/about" },
    ],
  },

  // =========================================================================
  // 13. CONTACT & GENERAL PROFILE
  // =========================================================================
  CONTACT: {
    title: "Kontak & Peluang Kolaborasi",
    text: `**Cara Menghubungi Rafif Sava Adyvka Pratama**

Adyvka terbuka untuk peluang rekrutmen tim engineering, kontrak sistem enterprise, maupun konsultasi arsitektur perangkat lunak:

* **Email Resmi:** [rafifdyvka07@gmail.com](mailto:rafifdyvka07@gmail.com)
* **LinkedIn:** [linkedin.com/in/adyvka-pratama](https://www.linkedin.com/in/adyvka-pratama/)
* **GitHub:** [github.com/adyvka31](https://github.com/adyvka31)
* **YouTube:** [@adyvkapratama](https://www.youtube.com/@adyvkapratama)
* **Instagram:** [@adyvkaa](https://instagram.com/adyvkaa)
* **TikTok:** [@adypraa31](https://www.tiktok.com/@adypraa31)
* **Domisili:** Depok, Jawa Barat, Indonesia (Tersedia untuk kerja Remote & Hybrid)

Anda juga dapat mengirimkan pesan langsung melalui formulir di halaman Contact.`,
    links: [
      { label: "Kunjungi Halaman Kontak", url: "/contact" },
      { label: "Kirim Email Langsung", url: "mailto:rafifdyvka07@gmail.com" },
    ],
  },

  BIO_IDENTITY: {
    title: "Biografi & Profil Lengkap Adyvka",
    text: `**Profil Lengkap Rafif Sava Adyvka Pratama (Adyvka)**

* **Nama Lengkap:** Rafif Sava Adyvka Pratama
* **Nama Panggilan:** Adyvka
* **Usia:** 17 Tahun (Kelahiran 2008)
* **Pendidikan:** SMK IDN Boarding School, Rekayasa Perangkat Lunak (Nilai Rapot 96/100 GPA)
* **Peran Utama:** Lead Systems Engineer & Project Manager di PT Intisel Prodaktifakom
* **Portofolio:** 18 proyek lengkap, 20 rekam jejak pengalaman, dan 2 buku teknis terbitan resmi
* **Prinsip Rekayasa:** High-agency, kedisiplinan, grit, dan arsitektur kode bersih tanpa legacy debt.`,
    links: [
      { label: "Buka Profil Halaman About", url: "/about" },
      { label: "Lihat Portofolio Proyek", url: "/projects" },
    ],
  },

  OVERVIEW_FALLBACK: {
    title: "Informasi Lengkap Rafif Sava Adyvka Pratama",
    text: `Terima kasih atas pertanyaannya! Rafif Sava Adyvka Pratama (Adyvka) adalah Software Engineer dan Systems Architect berusia 17 tahun dari Depok, Jawa Barat.

Ringkasan poin utama tentang Adyvka:
* **Pengalaman Komprehensif (20 Rekam Jejak):** Terdiri dari 4 pengalaman kerja profesional, 10 pengalaman mengajar guru & siswa, dan 6 pengalaman kepemimpinan & survival.
* **Jumlah Projek (18 Proyek):** Termasuk Databank ERP telekomunikasi, CV. Richo Bahari, Terastani, dan KEPK FK UMJ.
* **Prestasi Akademik:** Berhasil meraih nilai rapot **96 / 100 GPA** di Semester 4 SMK IDN Boarding School.
* **Karya Publikasi:** Penulis **2 buku teknis resmi** dan instruktur di 9 institusi pendidikan.
* **Solo Backpacker:** Menjelajahi 3 negara (Singapura, Malaysia, Thailand) di usia 15 tahun secara mandiri.
* **Sertifikasi:** CS50 Harvard University dan AWS Cloud Practitioner.

Silakan pilih topik saran di atas atau tanyakan hal spesifik lainnya!`,
    links: [
      { label: "Buka Halaman Tentang Adyvka", url: "/about" },
      { label: "Buka Seluruh Pengalaman", url: "/experience" },
      { label: "Buka Katalog 18 Proyek", url: "/projects" },
      { label: "Hubungi Adyvka", url: "/contact" },
    ],
  },
};

// =========================================================================
// PRECISION INTENT RESOLVER
// =========================================================================
export function findBestAnswer(rawQuery) {
  if (!rawQuery || typeof rawQuery !== "string") {
    return KNOWLEDGE_REGISTRY.OVERVIEW_FALLBACK;
  }

  const normalized = normalizeText(rawQuery);
  const tokens = new Set(normalized.split(/\s+/));

  // -------------------------------------------------------------------------
  // PRIORITY 1: ULTRA-SPECIFIC KEYWORD TRIGGERS
  // -------------------------------------------------------------------------

  // Specific Company: CV. Richo Bahari
  if (tokens.has("richo") || tokens.has("bahari") || tokens.has("richobahari")) {
    return KNOWLEDGE_REGISTRY.CV_RICHO_BAHARI_DETAIL;
  }

  // Teacher Training: SMPN 25 Depok & Teachers
  if (normalized.includes("smpn 25") || (tokens.has("guru") && (tokens.has("latih") || tokens.has("pelatihan") || tokens.has("ajar")))) {
    return KNOWLEDGE_REGISTRY.SMPN25_TEACHER_TRAINING;
  }

  // CV / Resume Download (ensure not confused with CV Richo Bahari)
  if ((tokens.has("cv") && !tokens.has("richo") && !tokens.has("bahari")) || tokens.has("resume") || (tokens.has("download") && !tokens.has("buku"))) {
    return KNOWLEDGE_REGISTRY.CV_RESUME;
  }

  // Rates, Fees, Pricing
  if (tokens.has("tarif") || tokens.has("harga") || tokens.has("biaya") || tokens.has("rate") || tokens.has("budget") || tokens.has("fee")) {
    return KNOWLEDGE_REGISTRY.RATES_AND_PRICING;
  }

  // Work Availability, Remote, Onsite, Open to Work/Hire
  if (
    tokens.has("remote") || tokens.has("onsite") || tokens.has("hybrid") || tokens.has("wfh") || 
    normalized.includes("on site") || normalized.includes("open untuk") || normalized.includes("open to work") ||
    normalized.includes("status kerja") || (tokens.has("bisa") && (tokens.has("hire") || tokens.has("rekrut"))) ||
    (tokens.has("kapan") && tokens.has("kerja")) || normalized.includes("siap kerja") || normalized.includes("ketersediaan kerja")
  ) {
    return KNOWLEDGE_REGISTRY.WORK_AVAILABILITY;
  }

  // English Fluency
  if (tokens.has("inggris") || tokens.has("english")) {
    return KNOWLEDGE_REGISTRY.ENGLISH_FLUENCY;
  }

  // Hobbies / Outside coding
  if (tokens.has("hobi") || (tokens.has("luar") && (tokens.has("koding") || tokens.has("coding") || tokens.has("kerja"))) || normalized.includes("selain coding") || normalized.includes("selain koding")) {
    return KNOWLEDGE_REGISTRY.HOBBIES_INTERESTS;
  }

  // Vision, Ambitions, Future Goals
  if (tokens.has("visi") || tokens.has("cita") || tokens.has("misi") || tokens.has("tujuan") || normalized.includes("masa depan") || tokens.has("aspirasi") || tokens.has("future")) {
    return KNOWLEDGE_REGISTRY.VISION_FUTURE_GOALS;
  }

  // Domicile & Location (excluding educational/work contexts)
  if (
    tokens.has("domisili") || normalized.includes("tempat tinggal") || 
    (tokens.has("tinggal") && !tokens.has("sekolah") && !tokens.has("kelas")) || 
    ((tokens.has("lokasi") || tokens.has("depok") || tokens.has("dimana")) && 
     !tokens.has("guru") && !tokens.has("smpn") && !tokens.has("sekolah") && 
     !tokens.has("kerja") && !tokens.has("mengajar") && !tokens.has("magang") && !tokens.has("proyek"))
  ) {
    return KNOWLEDGE_REGISTRY.LOCATION_DOMICILE;
  }

  // -------------------------------------------------------------------------
  // PRIORITY 2: SPECIFIC PROJECT INQUIRIES
  // -------------------------------------------------------------------------
  if (tokens.has("databank") || tokens.has("isdp")) {
    return KNOWLEDGE_REGISTRY.DATABANK_DETAIL;
  }
  if (tokens.has("kepk") || normalized.includes("klirens etik") || (tokens.has("etik") && tokens.has("riset")) || (tokens.has("umj") && !tokens.has("lomba") && !tokens.has("juara"))) {
    return KNOWLEDGE_REGISTRY.KEPK_DETAIL;
  }
  if (tokens.has("terastani") || tokens.has("tani") || tokens.has("agrikultur") || tokens.has("pertanian")) {
    return KNOWLEDGE_REGISTRY.TERASTANI_DETAIL;
  }
  if (tokens.has("ruangtumbuh") || normalized.includes("ruang tumbuh") || tokens.has("mental") || tokens.has("psikologi")) {
    return KNOWLEDGE_REGISTRY.RUANGTUMBUH_DETAIL;
  }
  if (tokens.has("pusakaku") || tokens.has("pusaka") || tokens.has("icomfest")) {
    return KNOWLEDGE_REGISTRY.PUSAKAKU_DETAIL;
  }
  if (tokens.has("semuabisa") || normalized.includes("semua bisa") || tokens.has("unila") || normalized.includes("universitas lampung")) {
    return KNOWLEDGE_REGISTRY.SEMUABISA_DETAIL;
  }
  if (tokens.has("richobahari") || normalized.includes("richo bahari") || tokens.has("kontraktor") || tokens.has("baja")) {
    return KNOWLEDGE_REGISTRY.CV_RICHO_BAHARI_DETAIL;
  }
  if (tokens.has("mobile") || tokens.has("android") || tokens.has("flutter") || tokens.has("attendance") || tokens.has("presensi") || tokens.has("scanner") || tokens.has("quran")) {
    return KNOWLEDGE_REGISTRY.MOBILE_APPS;
  }
  if (tokens.has("ai") || tokens.has("artificial") || tokens.has("intelligence") || tokens.has("prompt") || tokens.has("fitsmart")) {
    return KNOWLEDGE_REGISTRY.AI_CAPABILITIES;
  }

  // -------------------------------------------------------------------------
  // PRIORITY 3: SPECIFIC EXPERIENCE & EVENT INQUIRIES
  // -------------------------------------------------------------------------
  if (tokens.has("intisel")) {
    return KNOWLEDGE_REGISTRY.PT_INTISEL_DETAIL;
  }
  if (tokens.has("ardyanda")) {
    return KNOWLEDGE_REGISTRY.PT_ARDYANDA_DETAIL;
  }
  if (normalized.includes("smpn 25") || (tokens.has("guru") && (tokens.has("latih") || tokens.has("pelatihan") || tokens.has("ajar")))) {
    return KNOWLEDGE_REGISTRY.SMPN25_TEACHER_TRAINING;
  }
  if (normalized.includes("it fest") || tokens.has("itfest")) {
    return KNOWLEDGE_REGISTRY.IT_FEST_DETAIL;
  }
  if (tokens.has("voluntrip") || tokens.has("barmus")) {
    return KNOWLEDGE_REGISTRY.BARMUS_VOLUNTRIP_DETAIL;
  }
  if (normalized.includes("live in") || tokens.has("pedesaan") || (tokens.has("desa") && tokens.has("petani"))) {
    return KNOWLEDGE_REGISTRY.LIVE_IN_DETAIL;
  }
  if (tokens.has("semarang") || (tokens.has("survival") && !tokens.has("backpacker"))) {
    return KNOWLEDGE_REGISTRY.SEMARANG_SURVIVAL_DETAIL;
  }
  if (tokens.has("backpacker") || tokens.has("singapura") || tokens.has("malaysia") || tokens.has("thailand") || normalized.includes("3 negara")) {
    return KNOWLEDGE_REGISTRY.BACKPACKER_DETAIL;
  }

  // -------------------------------------------------------------------------
  // PRIORITY 4: AWARDS & COMPETITIONS
  // -------------------------------------------------------------------------
  if (
    tokens.has("prestasi") || tokens.has("lomba") || tokens.has("juara") || 
    tokens.has("kompetisi") || tokens.has("pnbitc") || tokens.has("award") || 
    tokens.has("menang") || tokens.has("finalis")
  ) {
    return KNOWLEDGE_REGISTRY.ACHIEVEMENTS;
  }

  // -------------------------------------------------------------------------
  // PRIORITY 5: PROJECT QUANTITY & CATALOG
  // -------------------------------------------------------------------------
  const isProjectRef = tokens.has("proyek") || tokens.has("karya") || tokens.has("portfolio") || tokens.has("portofolio") || tokens.has("aplikasi");
  const isQuantityRef = tokens.has("berapa") || tokens.has("jumlah") || tokens.has("total") || tokens.has("hitung");
  const isListRef = normalized.includes("apa saja") || tokens.has("daftar") || tokens.has("list") || tokens.has("sebutkan") || tokens.has("katalog") || tokens.has("rincian");

  if (isProjectRef && isQuantityRef) {
    return KNOWLEDGE_REGISTRY.COUNT_PROJECTS;
  }
  if (isProjectRef && isListRef) {
    return KNOWLEDGE_REGISTRY.LIST_PROJECTS;
  }

  // -------------------------------------------------------------------------
  // PRIORITY 6: TRACK-BASED EXPERIENCES
  // -------------------------------------------------------------------------
  const isExperienceQuery = tokens.has("pengalaman") || tokens.has("experience") || normalized.includes("rekam jejak");

  // Teaching Experience
  const isTeachingContext = tokens.has("mengajar") || tokens.has("instruktur") || tokens.has("workshop") || tokens.has("pelatihan") || tokens.has("murid") || tokens.has("siswa");
  if (isTeachingContext) {
    return KNOWLEDGE_REGISTRY.TEACHING_EXPERIENCE;
  }

  // Leadership & Organization
  const isLeadershipContext = tokens.has("organisasi") || tokens.has("kepemimpinan") || tokens.has("leadership") || tokens.has("osis") || tokens.has("ketua") || tokens.has("kepanitiaan");
  if (isLeadershipContext) {
    return KNOWLEDGE_REGISTRY.LEADERSHIP_EXPERIENCE;
  }

  // Corporate Work Experience
  const isWorkContext = tokens.has("kerja") || tokens.has("kantor") || tokens.has("perusahaan") || tokens.has("magang") || tokens.has("internship") || tokens.has("freelance");
  if (isWorkContext) {
    return KNOWLEDGE_REGISTRY.WORK_EXPERIENCE;
  }

  // General All Experiences
  if (isExperienceQuery || normalized.includes("pernah apa saja")) {
    return KNOWLEDGE_REGISTRY.ALL_EXPERIENCES;
  }

  // -------------------------------------------------------------------------
  // PRIORITY 7: STRENGTHS, RECRUITMENT & VALUE PROPOSITION
  // -------------------------------------------------------------------------
  if (
    tokens.has("kelebihan") || tokens.has("kekuatan") || tokens.has("keunggulan") || 
    normalized.includes("why hire") || (tokens.has("kenapa") && (tokens.has("rekrut") || tokens.has("hire") || tokens.has("pilih"))) || 
    (tokens.has("mengapa") && (tokens.has("rekrut") || tokens.has("hire") || tokens.has("pilih"))) || tokens.has("spesialisasi") ||
    normalized.includes("dibanding sarjana") || normalized.includes("dibanding lulusan")
  ) {
    return KNOWLEDGE_REGISTRY.STRENGTHS_WHY_HIRE;
  }

  // Contact
  if (
    tokens.has("kontak") || tokens.has("hubungi") || tokens.has("email") || 
    tokens.has("reach") || tokens.has("linkedin") || tokens.has("whatsapp") || 
    tokens.has("wa") || tokens.has("hire") || tokens.has("rekrut")
  ) {
    return KNOWLEDGE_REGISTRY.CONTACT;
  }

  // Books
  if (tokens.has("buku") || tokens.has("book") || tokens.has("modul") || tokens.has("publikasi") || tokens.has("scratch")) {
    return KNOWLEDGE_REGISTRY.BOOKS;
  }

  // GPA / Rapot
  if (tokens.has("rapot") || tokens.has("nilai") || tokens.has("gpa") || tokens.has("ipk") || normalized.includes("semester 4") || tokens.has("96") || tokens.has("akademik") || tokens.has("honors")) {
    return KNOWLEDGE_REGISTRY.GPA_ACADEMIC;
  }

  // Age / Birthday
  if (tokens.has("umur") || tokens.has("usia") || normalized.includes("kapan lahir") || normalized.includes("tahun lahir") || tokens.has("kelahiran") || tokens.has("birth")) {
    return KNOWLEDGE_REGISTRY.AGE_INFO;
  }

  // School / Education
  if (tokens.has("sekolah") || tokens.has("pendidikan") || tokens.has("smk") || tokens.has("idn") || tokens.has("kuliah") || tokens.has("jurusan")) {
    return KNOWLEDGE_REGISTRY.EDUCATION;
  }

  // Certificates
  if (tokens.has("sertifikat") || tokens.has("certificate") || tokens.has("cs50") || tokens.has("harvard") || tokens.has("aws") || tokens.has("dicoding")) {
    return KNOWLEDGE_REGISTRY.CERTIFICATES;
  }

  // Tech Stack / Skills
  if (
    tokens.has("stack") || tokens.has("teknologi") || tokens.has("bahasa") || 
    tokens.has("tools") || tokens.has("skill") || tokens.has("skills") || 
    tokens.has("keahlian") || tokens.has("coding") || tokens.has("koding") || 
    tokens.has("framework") || tokens.has("database") || tokens.has("frontend") || 
    tokens.has("backend") || tokens.has("react") || tokens.has("nestjs") ||
    tokens.has("nextjs") || tokens.has("postgresql") || tokens.has("docker")
  ) {
    return KNOWLEDGE_REGISTRY.TECH_STACK;
  }

  // Bio / Identity
  if (tokens.has("siapa") || tokens.has("siapakah") || tokens.has("profil") || tokens.has("biodata") || tokens.has("biografi") || tokens.has("who")) {
    return KNOWLEDGE_REGISTRY.BIO_IDENTITY;
  }

  // -------------------------------------------------------------------------
  // PRIORITY 8: CORPUS FALLBACK SEARCH
  // -------------------------------------------------------------------------
  const meaningfulWords = [...tokens].filter((w) => !STOPWORDS.has(w) && w.length >= 3);
  if (meaningfulWords.length > 0) {
    let bestMatchKey = null;
    let maxHits = 0;

    for (const [key, item] of Object.entries(KNOWLEDGE_REGISTRY)) {
      if (key === "OVERVIEW_FALLBACK") continue;
      const corpus = (item.title + " " + item.text).toLowerCase();
      let hits = 0;
      for (const word of meaningfulWords) {
        if (corpus.includes(word)) {
          hits++;
        }
      }
      if (hits > maxHits) {
        maxHits = hits;
        bestMatchKey = key;
      }
    }

    if (bestMatchKey && maxHits >= 1) {
      return KNOWLEDGE_REGISTRY[bestMatchKey];
    }
  }

  return KNOWLEDGE_REGISTRY.OVERVIEW_FALLBACK;
}
