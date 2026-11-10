// =========================================================================
// CHATBOT KNOWLEDGE BASE & BILINGUAL INTENT ENGINE (EN & ID)
// Authoritative dataset covering 100% of portfolio records across all domains
// Automatically detects query language (English vs Bahasa Indonesia)
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
  location: "Depok, West Java, Indonesia",
  timezone: "UTC+07 (WIB)",
  school: "SMK IDN Boarding School",
  grade: "Grade 12 (Final Year)",
  major: "Software Engineering (Rekayasa Perangkat Lunak)",
  gpa: "96 / 100",
  gpaNote: "Semester 4 report card with Academic Honors",
  currentRole: "Lead Systems Engineer & Project Manager at PT Intisel Prodaktifakom",
  email: "rafifdyvka07@gmail.com",
  linkedin: "https://www.linkedin.com/in/adyvka-pratama/",
  github: "https://github.com/adyvka31",
  youtube: "https://www.youtube.com/@adyvkapratama",
  instagram: "https://instagram.com/adyvkaa",
  tiktok: "https://www.tiktok.com/@adypraa31",
  portfolioUrl: "https://adyvka.my.id",
};

export const QUICK_SUGGESTIONS = [
  { id: "all_exp", label: "🌟 All 20 Experiences", query: "tell me about all 20 experiences of adyvka in engineering teaching and leadership" },
  { id: "count_proj", label: "🚀 How Many Projects? (18)", query: "how many projects has adyvka worked on" },
  { id: "work", label: "💼 Work Experience", query: "tell me about adyvka work experience at pt intisel ardyanda and richo bahari" },
  { id: "teaching", label: "👨‍🏫 Teaching & Mentorship", query: "tell me about adyvka teaching and teacher training at smpn 25 depok" },
  { id: "leadership", label: "👑 Leadership & Organizations", query: "what are adyvka leadership and student council experiences" },
  { id: "backpacker", label: "🌍 Solo Backpacker 3 Countries", query: "tell me about adyvka solo backpacking across 3 countries" },
  { id: "gpa", label: "🎓 GPA & Academics (96/100)", query: "what is adyvka gpa and academic honors" },
  { id: "databank", label: "⚡ Databank ERP (PT Intisel)", query: "tell me about databank erp project at pt intisel" },
  { id: "awards", label: "🏆 National Competition Awards", query: "what web design competition awards has adyvka won" },
  { id: "books", label: "📚 2 Published Books", query: "how many books has adyvka written and what are they about" },
  { id: "cs50", label: "📜 CS50 & Certifications", query: "what international certifications does adyvka have" },
  { id: "stack", label: "🛠️ Tech Stack & Skills", query: "what is adyvka tech stack and engineering skills" },
  { id: "why_hire", label: "⭐ Why Hire Adyvka", query: "why should we hire adyvka and what are his top strengths" },
  { id: "cv", label: "📄 Download CV & Contact", query: "how can i download cv and contact adyvka" },
];

export function detectLanguage(text) {
  if (!text || typeof text !== "string") return "en";
  const lower = text.toLowerCase().trim();

  // Strong Indonesian question openers & greeting
  const idOpeners = [
    "apa ", "apakah ", "siapa ", "siapakah ", "berapa ", "bagaimana ", "gimana ",
    "kenapa ", "mengapa ", "ceritakan ", "jelaskan ", "sebutkan ", "tolong ",
    "bisa ", "halo ", "hai ", "kapan ", "dimana ", "di mana ", "adakah "
  ];
  if (idOpeners.some((prefix) => lower.startsWith(prefix))) {
    return "id";
  }

  // Strong English question openers & greeting
  const enOpeners = [
    "who ", "what ", "how ", "why ", "when ", "where ", "which ", "tell me ",
    "can you ", "could you ", "show me ", "list ", "explain ", "describe ",
    "is ", "are ", "do ", "does ", "did ", "hello ", "hi ", "hey "
  ];
  if (enOpeners.some((prefix) => lower.startsWith(prefix))) {
    return "en";
  }

  const words = lower.replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
  if (words.length === 0) return "en";

  const ID_INDICATORS = new Set([
    "yang", "di", "ke", "dari", "ini", "itu", "dan", "atau", "untuk", "pada", "oleh",
    "ada", "tidak", "bukan", "sudah", "belum", "lagi", "bisa", "kamu", "anda", "dia",
    "beliau", "saya", "aku", "kami", "kita", "mereka", "projek", "proyek", "kerja",
    "pengalaman", "lomba", "juara", "sekolah", "kuliah", "jurusan", "rapot", "nilai",
    "buku", "tulis", "buat", "bikin", "ajar", "mengajar", "guru", "siswa", "murid",
    "tarif", "gaji", "biaya", "harga", "kelebihan", "keunggulan", "tentang", "kontak",
    "hubungi", "umur", "usia", "tahun", "domisili", "tinggal", "sertifikat", "prestasi",
    "seluruh", "pilar", "rekam", "jejak"
  ]);

  const EN_INDICATORS = new Set([
    "the", "a", "an", "is", "are", "was", "were", "be", "been", "have", "has", "had",
    "do", "does", "did", "to", "of", "in", "for", "on", "with", "at", "by", "from",
    "about", "into", "through", "during", "before", "after", "and", "or", "but", "if",
    "this", "that", "these", "those", "i", "you", "he", "she", "it", "we", "they",
    "my", "your", "his", "their", "our", "project", "projects", "experience", "experiences",
    "work", "job", "career", "teaching", "school", "gpa", "grade", "score", "book",
    "books", "award", "awards", "certificate", "certificates", "certification",
    "contact", "email", "reach", "hire", "skills", "stack", "rate", "rates",
    "pricing", "remote", "hybrid", "available", "age", "old", "born", "many", "much", "total"
  ]);

  let idScore = 0;
  let enScore = 0;

  for (const w of words) {
    if (ID_INDICATORS.has(w)) idScore++;
    if (EN_INDICATORS.has(w)) enScore++;
  }

  if (idScore > enScore) return "id";
  if (enScore > idScore) return "en";
  if (words.some((w) => ID_INDICATORS.has(w))) return "id";

  // Default to English since portfolio is in English
  return "en";
}

const STOPWORDS = new Set([
  "adyvka", "rafif", "sava", "pratama", "dia", "ia", "beliau", "kamu", "anda", 
  "tentang", "dari", "oleh", "yang", "di", "ke", "dan", "adalah", "apakah", 
  "apa", "gimana", "bagaimana", "dong", "sih", "ya", "kah", "pun", "ada", 
  "ini", "itu", "seorang", "si", "pada", "untuk", "cara", "saja", "aja", 
  "banyak", "punya", "bisa", "tolong", "coba", "jelaskan", "sebutkan", "semua",
  "the", "is", "are", "tell", "me", "about", "can", "you", "what", "how", "who", "why"
]);

function normalizeText(text) {
  if (!text || typeof text !== "string") return "";
  let clean = text.toLowerCase();
  clean = clean.replace(/[^a-z0-9\s]/g, " ");

  // Indonesian & English word normalizations
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
  clean = clean.replace(/\bcertificates?\b/g, "sertifikat");
  clean = clean.replace(/\bcertifications?\b/g, "sertifikat");
  clean = clean.replace(/\bkeunggulannya\b/g, "kelebihan");
  clean = clean.replace(/\bkekuatannya\b/g, "kelebihan");
  clean = clean.replace(/\bkelebihannya\b/g, "kelebihan");
  clean = clean.replace(/\bmerekrut\b/g, "rekrut");
  clean = clean.replace(/\bdirekrut\b/g, "rekrut");
  clean = clean.replace(/\brecruit\b/g, "hire");
  clean = clean.replace(/\brecruiting\b/g, "hire");
  clean = clean.replace(/\bstrengths?\b/g, "kelebihan");
  clean = clean.replace(/\bdibikin\b/g, "buat");
  clean = clean.replace(/\bbikin\b/g, "buat");
  clean = clean.replace(/\bmembuat\b/g, "buat");
  clean = clean.replace(/\bdibuat\b/g, "buat");
  clean = clean.replace(/\bmenulis\b/g, "tulis");
  clean = clean.replace(/\bditulis\b/g, "tulis");
  clean = clean.replace(/\bbukunya\b/g, "buku");
  clean = clean.replace(/\bbooks?\b/g, "buku");
  clean = clean.replace(/\bumurnya\b/g, "umur");
  clean = clean.replace(/\busianya\b/g, "usia");
  clean = clean.replace(/\bsekolahnya\b/g, "sekolah");
  clean = clean.replace(/\bpendidikannya\b/g, "pendidikan");
  clean = clean.replace(/\bpengalamannya\b/g, "pengalaman");
  clean = clean.replace(/\bexperiences?\b/g, "pengalaman");
  clean = clean.replace(/\bprestasinya\b/g, "prestasi");
  clean = clean.replace(/\bjuaranya\b/g, "juara");
  clean = clean.replace(/\bkejuaraan\b/g, "lomba");
  clean = clean.replace(/\bperlombaan\b/g, "lomba");
  clean = clean.replace(/\bawards?\b/g, "lomba");
  clean = clean.replace(/\bcompetitions?\b/g, "lomba");
  clean = clean.replace(/\bdomisilinya\b/g, "domisili");
  clean = clean.replace(/\btempat tinggal\b/g, "domisili");
  clean = clean.replace(/\btinggalnya\b/g, "domisili");
  clean = clean.replace(/\bgajinya\b/g, "tarif");
  clean = clean.replace(/\bharganya\b/g, "tarif");
  clean = clean.replace(/\bbiayanya\b/g, "tarif");
  clean = clean.replace(/\bfeenya\b/g, "tarif");
  clean = clean.replace(/\bratenya\b/g, "tarif");
  clean = clean.replace(/\bpricing\b/g, "tarif");
  clean = clean.replace(/\brates?\b/g, "tarif");

  return clean.split(/\s+/).filter(Boolean).join(" ");
}

export const KNOWLEDGE_REGISTRY = {
  ALL_EXPERIENCES: {
    id: {
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
      {
              "label": "Buka Halaman Seluruh Pengalaman",
              "url": "/experience"
      },
      {
              "label": "Detail Pengalaman PT Intisel",
              "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
      },
      {
              "label": "Detail Solo Backpacker 3 Negara",
              "url": "/experience/singapore-malaysia-thailand-backpacker-3-country"
      },
      {
              "label": "Detail OSIS Event Division Leader",
              "url": "/experience/idn-student-council-event-division-leader"
      }
],
    },
    en: {
      title: "Total Experience: 20 Verified Records Across 3 Strategic Pillars",
      text: `**Adyvka holds a total of 20 verified experience records across 3 strategic pillars.**

His journey bridges enterprise software engineering, community technology mentorship, and authentic organizational leadership:

1. **4 Professional Work Experiences:**
   * **PT Intisel Prodaktifakom:** Lead Systems Engineer and Project Manager for Databank ERP (leading 4 engineers, Huawei ISDP web scraping bot, and 3-stage digital approvals).
   * **PT Ardyanda Digital Inovasi:** Full Stack Developer Intern (100% precision payroll, employee loan management, financial cash ledger, and client communication).
   * **CV. Richo Bahari:** Frontend Developer and UI/UX Architect (Next.js 16 industrial platform adhering to Zero Accident K3 and ISO 9001 standards).
   * **Faculty of Medicine Universitas Muhammadiyah Jakarta:** Full Stack Engineer Contract (SIM KEPK medical research ethical clearance system compliant with WHO and CIOMS standards).

2. **10 Teaching and Technology Mentorship Experiences:**
   * **SMPN 25 Depok:** Conducted direct digital training for the **school principal and faculty teachers** on modern interactive learning media.
   * **SMA Lazuardi Global Compassionate School:** Instructor for modern frontend web development (HTML5, CSS layout, UI/UX design).
   * **SMPN 45 Jakarta:** Mobile application development instructor for students using Kodular.
   * **Semut-Semut The Natural School:** Computational logic and educational game development with Construct.
   * **Hajrabyadl, SMP INS Depok, Al-Anshar, Griyya Sunnah, MTs Yasmine:** Instructor for Figma interface design, web engineering, and foundational programming.

3. **6 Leadership, Expedition and Survival Experiences:**
   * **Solo Backpacker Across 3 Countries (Singapore, Malaysia, Thailand):** Explored 3 countries entirely on his own at age 15, 100% self-funded from freelance coding and design savings.
   * **Business and Life Survival in Semarang (PT Intisel):** Deployed to Semarang with zero initial cash capital, generating net income through telecom logistics and real business initiatives.
   * **Student Council Event Division Leader (SMK IDN):** Served 2 consecutive terms directing concept, rundown, stage coordination, and crisis handling for all major school events.
   * **Event Coordinator for IT FEST 2025:** Led technical execution of a national technology festival with 500+ participants across Indonesia.
   * **Barmus Voluntrip:** Volunteer event organizer and media documenter for social outreach in underserved rural communities.
   * **Rural Immersion (Live In):** Lived for a full week integrated with a traditional farming family in rural West Java.

All 20 records feature comprehensive photographic documentation and case studies on the Experience page.`,
      links: [
      {
              "label": "View All Experiences",
              "url": "/experience"
      },
      {
              "label": "PT Intisel Enterprise Case Study",
              "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
      },
      {
              "label": "Solo Backpacker 3 Countries Case Study",
              "url": "/experience/singapore-malaysia-thailand-backpacker-3-country"
      },
      {
              "label": "Student Council Leadership",
              "url": "/experience/idn-student-council-event-division-leader"
      }
],
    },
  },

  TEACHING_EXPERIENCE: {
    id: {
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
      {
              "label": "Lihat Semua Rekam Jejak Mengajar",
              "url": "/experience"
      },
      {
              "label": "Detail Workshop SMA Lazuardi GCS",
              "url": "/experience/sma-lazuardi-gcs-web-development-instructor"
      },
      {
              "label": "Detail Workshop SMPN 45",
              "url": "/experience/smpn-45-app-development-instructor"
      },
      {
              "label": "Detail Semut-Semut Natural School",
              "url": "/experience/semut-semut-the-natural-school-game-development-instructor"
      }
],
    },
    en: {
      title: "10 Teaching and Technology Mentorship Experiences",
      text: `**10 Teaching and Technology Mentorship Records by Adyvka**

Adyvka has been trusted to lead technical workshops and teacher training across multiple educational institutions:

1. **SMPN 25 Depok (Faculty Teachers and School Principal Training):**
   * Led intensive digital transformation training for educators on interactive learning media and web-based classroom management.
2. **SMA Lazuardi Global Compassionate School (Web Development Instructor):**
   * Mentored high school students in modern web layouts with semantic HTML5, CSS responsive design, and UI/UX fundamentals.
3. **SMPN 45 Jakarta (Mobile App Development Instructor):**
   * Taught mobile architecture and block programming fundamentals using Kodular.
4. **Semut-Semut The Natural School (Game Development Instructor):**
   * Guided young learners through computational logic, branching algorithms, and 2D mechanics with Construct.
5. **Hajrabyadl (Web Development Instructor):**
   * Taught frontend web development and algorithmic problem-solving for 23+ students.
6. **SMP INS Depok (Mobile App Instructor):**
   * Hands-on workshop on mobile app prototyping for junior high students.
7. **Al-Anshar (App Design and Game Development Instructor):**
   * Mentored students in Figma UI wireframing and game programming logic.
8. **Griyya Sunnah (Game Development Instructor):**
   * Computational thinking and visual logic workshop with Scratch.
9. **MTs Yasmine (Graphic Design Instructor):**
   * Workshop on digital illustration, typography, and UI aesthetics.

For Adyvka, teaching is the ultimate test of understanding: translating complex architectural concepts into clear, empathetic, and actionable lessons.`,
      links: [
      {
              "label": "View All Teaching Records",
              "url": "/experience"
      },
      {
              "label": "SMA Lazuardi Workshop Details",
              "url": "/experience/sma-lazuardi-gcs-web-development-instructor"
      },
      {
              "label": "SMPN 45 Workshop Details",
              "url": "/experience/smpn-45-app-development-instructor"
      },
      {
              "label": "Semut-Semut School Details",
              "url": "/experience/semut-semut-the-natural-school-game-development-instructor"
      }
],
    },
  },

  SMPN25_TEACHER_TRAINING: {
    id: {
      title: "Pelatihan Dewan Guru & Kepala Sekolah di SMPN 25 Depok",
      text: `**Pelatihan Guru & Kepala Sekolah oleh Adyvka di SMPN 25 Depok**

Salah satu pencapaian kepemimpinan edukasi paling berkesan bagi Adyvka adalah dipercaya memimpin pelatihan teknologi untuk para pendidik:

* **Audiens:** Dewan guru dan Kepala Sekolah SMPN 25 Depok.
* **Materi Inti:** Transformasi pembelajaran digital, pembuatan media ajar multimedia interaktif, dan optimalisasi platform web modern untuk manajemen kelas.
* **Keunikan:** Sesi ini dipimpin langsung oleh Adyvka saat masih berstatus siswa SMK, membuktikan kematangan komunikasi, penguasaan materi teknis yang diakui publik, serta rasa percaya diri dalam mentransfer ilmu kepada audiens senior secara santun dan profesional.`,
      links: [
      {
              "label": "Buka Halaman Experience",
              "url": "/experience"
      },
      {
              "label": "Tentang Adyvka di Halaman About",
              "url": "/about"
      }
],
    },
    en: {
      title: "Faculty and Principal Training at SMPN 25 Depok",
      text: `**Faculty and Principal Technology Workshop at SMPN 25 Depok**

One of Adyvka's most distinctive leadership achievements was conducting technology workshops directly for senior educators:

* **Audience:** Faculty teachers and the School Principal of SMPN 25 Depok.
* **Core Curriculum:** Digital educational transformation, interactive multimedia teaching tools, and web-based classroom productivity.
* **Uniqueness:** Conducted while Adyvka was still a vocational high school student, demonstrating mature communication, authoritative subject mastery, and natural composure in mentoring senior professionals.`,
      links: [
      {
              "label": "Open Experience Page",
              "url": "/experience"
      },
      {
              "label": "About Adyvka Profile",
              "url": "/about"
      }
],
    },
  },

  LEADERSHIP_EXPERIENCE: {
    id: {
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
      {
              "label": "Detail OSIS Event Division Leader",
              "url": "/experience/idn-student-council-event-division-leader"
      },
      {
              "label": "Detail IT FEST 2025 Coordinator",
              "url": "/experience/it-fest-2025-competition-event-coordinator"
      },
      {
              "label": "Detail Barmus Voluntrip Organizer",
              "url": "/experience/barmus-voluntrip-volunteer-event-organizer"
      }
],
    },
    en: {
      title: "Leadership and Organizational Track Record",
      text: `**Leadership and Organizational Track Record of Adyvka**

Adyvka holds a proven track record of strategic leadership in student governance and national events:

1. **Student Council Event Division Leader (SMK IDN Boarding School):**
   * Served 2 consecutive terms directing full-scale event production, minute-by-minute rundowns, stage operations, and real-time crisis management for major school initiatives.
2. **IT FEST 2025 Event Coordinator:**
   * Directed overall event operations for a national technology festival hosting 500+ student and university participants across Indonesia.
3. **Barmus Voluntrip (Volunteer Event Organizer):**
   * Organized humanitarian social outreach in remote rural villages, managing community logistics and media documentation.
4. **Rural Immersion Program (Live In):**
   * Lived with a traditional farming family for one full week in rural West Java, cultivating social empathy, teamwork, and humility.

These leadership experiences give Adyvka exceptional team coordination, calm composure under pressure, and clear communication when steering engineering squads.`,
      links: [
      {
              "label": "Student Council Leadership Details",
              "url": "/experience/idn-student-council-event-division-leader"
      },
      {
              "label": "IT FEST 2025 Coordinator Details",
              "url": "/experience/it-fest-2025-competition-event-coordinator"
      },
      {
              "label": "Barmus Voluntrip Organizer Details",
              "url": "/experience/barmus-voluntrip-volunteer-event-organizer"
      }
],
    },
  },

  IT_FEST_DETAIL: {
    id: {
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
      {
              "label": "Detail IT FEST 2025 Coordinator",
              "url": "/experience/it-fest-2025-competition-event-coordinator"
      },
      {
              "label": "Buka Halaman Experience",
              "url": "/experience"
      }
],
    },
    en: {
      title: "IT FEST 2025 Leadership (500+ National Participants)",
      text: `**IT FEST 2025: National Tech Festival with 500+ Participants**

As Event Coordinator for IT FEST 2025, Adyvka managed large-scale operational execution:

* **Scale:** Over 500 participants from high schools and universities across Indonesia.
* **Competitions:** Web design, application development, UI/UX design, and English speech competitions.
* **Core Responsibilities:**
  * Formulated technical competition rubrics and jury assessment guidelines.
  * Coordinated a 15+ member committee team across logistics, stage, media, and technical tracks.
  * Resolved real-time operational bottlenecks swiftly without disrupting the master event schedule.`,
      links: [
      {
              "label": "IT FEST 2025 Coordinator Details",
              "url": "/experience/it-fest-2025-competition-event-coordinator"
      },
      {
              "label": "Open Experience Page",
              "url": "/experience"
      }
],
    },
  },

  BARMUS_VOLUNTRIP_DETAIL: {
    id: {
      title: "Pengabdian Sosial: Barmus Voluntrip",
      text: `**Barmus Voluntrip: Pengabdian Sosial & Edukasi Pelosok**

Adyvka mendedikasikan energinya dalam kegiatan kemanusiaan melalui program Barmus Voluntrip:

* **Peran:** Volunteer Event Organizer dan Dokumentator Lapangan.
* **Fokus Kegiatan:** Menyalurkan bantuan pangan, mengajar anak-anak pelosok desa mengenai literasi digital dasar, dan mengelola alur logistik pembagian donasi agar tepat sasaran.
* **Dampak Karakter:** Menanamkan empati sosial mendalam bahwa teknologi pada akhirnya harus melayani kemanusiaan dan membantu mereka yang membutuhkan.`,
      links: [
      {
              "label": "Detail Barmus Voluntrip Organizer",
              "url": "/experience/barmus-voluntrip-volunteer-event-organizer"
      }
],
    },
    en: {
      title: "Social Outreach: Barmus Voluntrip",
      text: `**Barmus Voluntrip: Humanitarian Aid and Rural Education**

Adyvka contributed actively to humanitarian community development through Barmus Voluntrip:

* **Role:** Volunteer Event Organizer and Field Documenter.
* **Focus Areas:** Distributing staple food aid, teaching rural village children basic digital literacy, and streamlining distribution logistics.
* **Impact:** Grounded Adyvka in the belief that technological excellence must ultimately serve real human needs and uplift communities.`,
      links: [
      {
              "label": "Barmus Voluntrip Details",
              "url": "/experience/barmus-voluntrip-volunteer-event-organizer"
      }
],
    },
  },

  LIVE_IN_DETAIL: {
    id: {
      title: "Program Live In Pedesaan IDN Boarding School",
      text: `**Live In Pedesaan Tradisional: Menempa Kerendahan Hati & Empati Sosial**

Program Live In adalah kurikulum pembentukan karakter mandiri di SMK IDN Boarding School:

* **Durasi:** Satu pekan penuh tinggal bersama keluarga petani lokal di pelosok pedesaan Jawa Barat.
* **Kegiatan Harian:** Membantu mencangkul dan menanam padi di sawah, menjaga warung keluarga asuh, dan membersihkan fasilitas masjid desa.
* **Pelajaran Penting:** Mengajarkan ketangguhan fisik, rasa syukur, dan adaptasi sosial cepat di lingkungan yang jauh dari kenyamanan fasilitas perkotaan modern.`,
      links: [
      {
              "label": "Buka Detail Live In Pedesaan",
              "url": "/experience/idn-boarding-school-live-in-rural-immersion"
      }
],
    },
    en: {
      title: "Rural Immersion Program (Live In IDN Boarding School)",
      text: `**Traditional Rural Immersion: Cultivating Humility and Social Empathy**

The Live In program is a cornerstone character curriculum at SMK IDN Boarding School:

* **Duration:** One full week living with a local farming family in rural West Java.
* **Daily Activities:** Assisting in rice paddy cultivation, supporting family store operations, and maintaining village community facilities.
* **Key Takeaway:** Forged physical stamina, gratitude, and rapid social adaptability in an environment far removed from modern urban comforts.`,
      links: [
      {
              "label": "View Rural Immersion Details",
              "url": "/experience/idn-boarding-school-live-in-rural-immersion"
      }
],
    },
  },

  LIFE_SURVIVAL_EXPERIENCE: {
    id: {
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
      {
              "label": "Buka Kisah Backpacker 3 Negara",
              "url": "/experience/singapore-malaysia-thailand-backpacker-3-country"
      },
      {
              "label": "Buka Kisah Survival Semarang",
              "url": "/experience/pt-intisel-semarang-business-life-survival"
      },
      {
              "label": "Buka Kisah Live In Pedesaan",
              "url": "/experience/idn-boarding-school-live-in-rural-immersion"
      }
],
    },
    en: {
      title: "Expedition, Resilience and Survival Track Record",
      text: `**Character Resilience: Solo Backpacker 3 Countries and Semarang Survival**

Adyvka's engineering character is anchored in real-world challenges that test self-reliance and endurance:

1. **Solo Backpacker Across 3 Countries (Singapore, Malaysia, Thailand):**
   * Completed at age **15 years old (Grade 9)**.
   * **100% Self-Funded:** All flights, accommodation, and daily expenses were funded entirely from freelance coding and graphic design savings.
   * **Total Independence:** Navigated international routes solo, processed land and air immigration clearances, navigated language barriers, and managed a strict daily budget.

2. **Business and Life Survival in Semarang (PT Intisel):**
   * Deployed directly to Semarang with **zero initial cash capital**.
   * Challenged to survive, secure shelter, build local business networks, and generate net earnings through telecom logistics and real commerce.

3. **Traditional Rural Immersion (Live In):**
   * Immersed for a full week living and farming alongside rural families without urban technology conveniences.`,
      links: [
      {
              "label": "Solo Backpacker 3 Countries Case Study",
              "url": "/experience/singapore-malaysia-thailand-backpacker-3-country"
      },
      {
              "label": "Semarang Business Survival Case Study",
              "url": "/experience/pt-intisel-semarang-business-life-survival"
      },
      {
              "label": "Rural Immersion Details",
              "url": "/experience/idn-boarding-school-live-in-rural-immersion"
      }
],
    },
  },

  BACKPACKER_DETAIL: {
    id: {
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
      {
              "label": "Detail Lengkap Solo Backpacker 3 Negara",
              "url": "/experience/singapore-malaysia-thailand-backpacker-3-country"
      }
],
    },
    en: {
      title: "Solo Backpacker Across 3 Countries (Singapore, Malaysia, Thailand)",
      text: `**Solo Backpacker Across 3 Countries at Age 15**

At age 15, Adyvka completed an independent solo expedition across Singapore, Malaysia, and Thailand:

* **100% Self-Funded:** Funded completely with personal savings earned from freelance web development, logo design, and UI wireframing. Zero parental funding.
* **Itinerary and Navigation:**
  * Singapore: Transit systems, smart city infrastructure, and urban navigation.
  * Malaysia: Cross-border land transit via Johor Bahru, Kuala Lumpur, and Penang.
  * Thailand: Southern border crossing via Hat Yai and Bangkok transit hubs.
* **Character Value:** Proven crisis resolution, strict budget discipline, cross-cultural confidence, and fearlessness when encountering completely unfamiliar environments.`,
      links: [
      {
              "label": "Solo Backpacker 3 Countries Case Study",
              "url": "/experience/singapore-malaysia-thailand-backpacker-3-country"
      },
      {
              "label": "Explore About Profile",
              "url": "/about"
      }
],
    },
  },

  SEMARANG_SURVIVAL_DETAIL: {
    id: {
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
      {
              "label": "Detail Survival Semarang",
              "url": "/experience/pt-intisel-semarang-business-life-survival"
      }
],
    },
    en: {
      title: "Business and Life Survival in Semarang (PT Intisel)",
      text: `**Business and Life Survival Challenge in Semarang: Surviving with Zero Capital**

An intensive survival and real-world business program organized with PT Intisel Prodaktifakom:

* **Core Challenge:** Deployed to Semarang with **zero starting cash**, tasked with securing food, shelter, and generating net profits.
* **Strategy and Execution:**
  * Partnered with local merchants, telecom teams, and logistics networks.
  * Executed practical business initiatives and field operations to build sustainable daily cash flow.
* **Result:** Achieved positive net revenue while demonstrating resourcefulness, negotiation capability, and mental fortitude under pressure.`,
      links: [
      {
              "label": "Semarang Survival Case Study",
              "url": "/experience/pt-intisel-semarang-business-life-survival"
      },
      {
              "label": "PT Intisel Work Experience",
              "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
      }
],
    },
  },

  WORK_EXPERIENCE: {
    id: {
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
      {
              "label": "Buka Semua Pengalaman Kerja",
              "url": "/experience"
      },
      {
              "label": "Detail PT Intisel",
              "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
      },
      {
              "label": "Detail PT Ardyanda",
              "url": "/experience/pt-ardyanda-digital-inovasi-full-stack-developer-internship"
      },
      {
              "label": "Detail CV. Richo Bahari",
              "url": "/experience/cv-richo-bahari-frontend-developer-freelance"
      },
      {
              "label": "Detail FK UMJ",
              "url": "/experience/universitas-muhammadiyah-jakarta-full-stack-engineer-contract"
      }
],
    },
    en: {
      title: "Professional Engineering Experience (4 Companies and Institutions)",
      text: `**4 Verified Professional Work Experiences of Adyvka**

Adyvka has delivered mission-critical software solutions across corporate, industrial, and academic sectors:

1. **PT Intisel Prodaktifakom (Lead Systems Engineer and Project Manager):**
   * Engineered the **Databank ERP** ecosystem, managing operational analytics, Huawei ISDP web scraping bots, and a 3-tier digital approval workflow for large-scale telecom logistics.
2. **PT Ardyanda Digital Inovasi (Full Stack Developer Intern):**
   * Built internal enterprise software with 100% precision payroll calculation, automated employee loan ledgers, and financial records.
3. **CV. Richo Bahari (Frontend Developer and UI/UX Architect):**
   * Developed an industrial heavy-equipment procurement platform in Next.js 16 adhering to ISO 9001 and K3 Zero Accident safety governance.
4. **Faculty of Medicine Universitas Muhammadiyah Jakarta (Full Stack Engineer Contract):**
   * Developed the SIM KEPK medical research ethical clearance system compliant with WHO and CIOMS 2016 ethics frameworks.`,
      links: [
      {
              "label": "PT Intisel Case Study",
              "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
      },
      {
              "label": "PT Ardyanda Case Study",
              "url": "/experience/pt-ardyanda-digital-inovasi-full-stack-developer-internship"
      },
      {
              "label": "CV. Richo Bahari Case Study",
              "url": "/experience/cv-richo-bahari-frontend-developer-freelance"
      },
      {
              "label": "FK UMJ Medical Ethics Case Study",
              "url": "/experience/universitas-muhammadiyah-jakarta-full-stack-engineer-contract"
      }
],
    },
  },

  PT_INTISEL_DETAIL: {
    id: {
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
      {
              "label": "Detail Pengalaman PT Intisel",
              "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
      },
      {
              "label": "Studi Kasus Proyek Databank ERP",
              "url": "/projects/databank"
      }
],
    },
    en: {
      title: "Track Record at PT Intisel Prodaktifakom (Lead Engineer and PM)",
      text: `**Lead Systems Engineer and PM for Databank ERP at PT Intisel Prodaktifakom**

Adyvka led the complete architectural evolution of Databank ERP, the enterprise backbone for telecom site operations:

* **Leadership Role:** Lead Systems Engineer and Project Manager supervising a team of 4 engineers.
* **Core Achievements:**
  * Built an automated web scraping bot integrating with Huawei ISDP, saving hundreds of engineering hours per month.
  * Designed a 3-tier digital approval pipeline ensuring transparent PO and vendor tracking.
  * Implemented virtualized data tables rendering thousands of telecom site records with sub-second response times.`,
      links: [
      {
              "label": "PT Intisel Full Experience Details",
              "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
      },
      {
              "label": "Databank ERP Deep-Dive",
              "url": "/projects/databank"
      }
],
    },
  },

  PT_ARDYANDA_DETAIL: {
    id: {
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
      {
              "label": "Detail Pengalaman PT Ardyanda",
              "url": "/experience/pt-ardyanda-digital-inovasi-full-stack-developer-internship"
      }
],
    },
    en: {
      title: "Full Stack Internship at PT Ardyanda Digital Inovasi",
      text: `**Full Stack Developer Internship at PT Ardyanda Digital Inovasi**

At PT Ardyanda Digital Inovasi, Adyvka engineered internal operational software:

* **100% Payroll Precision:** Built an automated salary and deduction engine with strict mathematical validation.
* **Employee Loan Management:** Structured installment tracking with real-time balance calculations.
* **Finance and Accounting Ledger:** Created intuitive bookkeeping modules for cash flow visibility.
* **Direct Client Interaction:** Bridged technical requirements directly with operational stakeholders.`,
      links: [
      {
              "label": "PT Ardyanda Full Experience Details",
              "url": "/experience/pt-ardyanda-digital-inovasi-full-stack-developer-internship"
      }
],
    },
  },

  CV_RICHO_BAHARI_DETAIL: {
    id: {
      title: "Studi Kasus: CV. Richo Bahari Platform Industri",
      text: `**CV. Richo Bahari: Transformasi Digital Kontraktor Sipil & Fabrikasi Baja**

Adyvka memimpin rekayasa frontend dan arsitektur UI/UX untuk CV. Richo Bahari bersama CentraDev Team:

* **Klien:** Kontraktor umum terkemuka di Jawa Barat yang melayani 5 pilar bisnis (konstruksi sipil, mekanikal-elektrikal, fabrikasi baja berat, dan armada logistik).
* **Solusi Teknologi:**
  * Dibangun menggunakan **Next.js 16 (App Router), React 19, dan Tailwind CSS v4**.
  * Mengubah tumpukan brosur PDF lama menjadi katalog interaktif modern yang responsif dan cepat dibuka di perangkat mobile lapangan.
  * Menampilkan standar keselamatan kerja K3 Zero Accident dan sertifikasi mutu ISO 9001 secara terstruktur untuk meyakinkan klien korporat.`,
      links: [
      {
              "label": "Detail Proyek CV. Richo Bahari",
              "url": "/projects/richobahari"
      },
      {
              "label": "Detail Pengalaman Richo Bahari",
              "url": "/experience/cv-richo-bahari-frontend-developer-freelance"
      }
],
    },
    en: {
      title: "Case Study: CV. Richo Bahari Industrial Platform",
      text: `**Frontend Architecture and UI/UX for CV. Richo Bahari**

Adyvka engineered the digital enterprise platform for CV. Richo Bahari, an industrial maritime supplier:

* **Tech Stack:** Next.js 16, TypeScript, Tailwind CSS, Framer Motion.
* **Compliance Standards:** Adherence to ISO 9001 quality management and Zero Accident K3 industrial workplace safety.
* **Key Features:** Structured maritime technical equipment catalogs, dynamic quote requests, and an executive digital showcase.`,
      links: [
      {
              "label": "CV. Richo Bahari Full Case Study",
              "url": "/experience/cv-richo-bahari-frontend-developer-freelance"
      },
      {
              "label": "Richo Bahari Project Details",
              "url": "/projects/richobahari"
      }
],
    },
  },

  COUNT_PROJECTS: {
    id: {
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
      {
              "label": "Buka Katalog 18 Proyek",
              "url": "/projects"
      },
      {
              "label": "Lihat Databank ERP",
              "url": "/projects/databank"
      },
      {
              "label": "Lihat KEPK FK UMJ",
              "url": "/projects/kepk"
      },
      {
              "label": "Lihat Terastani ERP",
              "url": "/projects/terastani"
      }
],
    },
    en: {
      title: "Total Projects: 18 Verified Engineering Projects",
      text: `**Adyvka has built exactly 18 verified software engineering projects.**

Every project is fully documented across the portfolio catalog with architectural specifications:

* **1 Enterprise ERP:** Databank Ecosystem (PT Intisel Prodaktifakom).
* **1 Medical Research Ethics Platform:** SIM KEPK (Faculty of Medicine Universitas Muhammadiyah Jakarta).
* **6 Full-Stack Web Applications:** TerasTani ERP, RuangTumbuh, IDN Course, DeliFood, Coffeee Shop, JavaIsland.
* **4 Mobile and Android Apps:** Al-Quran Digital Player, QR Scanner Utility, Attendance Tracker, Breaking News App.
* **2 National Award-Winning Projects:** PusakaKu (1st Place National Champion ICOMFEST 2025) and SemuaBisa (Top 5 National Finalist UNILA 2024).
* **4 AI and Production Utilities:** AI Neural Image Generator, AI Ticket Incident Manager, Fitsmart, and MyStyle.

Explore interactive case studies and live demos on the Projects page.`,
      links: [
      {
              "label": "Explore All 18 Projects",
              "url": "/projects"
      },
      {
              "label": "Databank ERP Case Study",
              "url": "/projects/databank"
      },
      {
              "label": "SIM KEPK Ethics Case Study",
              "url": "/projects/kepk"
      },
      {
              "label": "PusakaKu National Champion",
              "url": "/projects/pusakaku"
      }
],
    },
  },

  LIST_PROJECTS: {
    id: {
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
      {
              "label": "Jelajahi Semua Proyek",
              "url": "/projects"
      }
],
    },
    en: {
      title: "Full Catalog of Adyvka's 18 Engineering Projects",
      text: `**Full Directory of Adyvka's 18 Software Engineering Projects**

All 18 projects are categorized below:

1. **Enterprise, Medical and Supply Chain Ecosystems:**
   * **Databank ERP Ecosystem (PT Intisel):** Operational metrics, Huawei ISDP scraper bot, and 3-stage digital approvals.
   * **SIM KEPK FK UMJ:** Medical research ethical review system compliant with WHO and CIOMS 2016 standards.
   * **TerasTani:** Agricultural B2B supply chain ERP connecting farmers with direct distributors.

2. **National Award-Winning Digital Platforms:**
   * **PusakaKu:** Interactive 3D Indonesian cultural heritage encyclopedia (1st Place National Champion ICOMFEST 2025).
   * **SemuaBisa:** Accessible learning management system for students with disabilities (Top 5 National Finalist UNILA 2024).

3. **Modern Web Applications:**
   * **RuangTumbuh:** Mental health consultation platform with private journaling and crisis hotlines.
   * **IDN Course:** Interactive programming learning platform with code playgrounds.
   * **DeliFood:** Food order delivery and multi-vendor kitchen ordering system.
   * **Coffeee Shop:** Artisanal cafe ordering and table reservation web app.
   * **JavaIsland:** Javanese cultural tourism portal with interactive destination guides.

4. **Android and Mobile Utility Applications:**
   * **Al-Quran Digital:** Recitation audio companion and surah reader.
   * **QR Code Scanner:** Real-time camera scanner utility with history logging.
   * **Attendance App:** Geofenced student check-in system with facial verification.
   * **News Portal App:** Breaking headlines mobile reader with category feeds.

5. **AI Platforms and Production Utilities:**
   * **AI Neural Image Generator:** Generative text-to-image synthesis interface.
   * **AI Ticket Incident Manager:** Automated IT support ticket classification with Hugging Face transformers.
   * **Fitsmart:** Personalized fitness routine tracker with nutritional analytics.
   * **MyStyle:** Personal wardrobe management and outfit recommendation platform.`,
      links: [
      {
              "label": "Explore Projects Catalog",
              "url": "/projects"
      },
      {
              "label": "Databank ERP Case Study",
              "url": "/projects/databank"
      },
      {
              "label": "PusakaKu 3D Portal",
              "url": "/projects/pusakaku"
      },
      {
              "label": "SIM KEPK Medical Ethics",
              "url": "/projects/kepk"
      }
],
    },
  },

  DATABANK_DETAIL: {
    id: {
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
      {
              "label": "Buka Detail Proyek Databank ERP",
              "url": "/projects/databank"
      }
],
    },
    en: {
      title: "Case Study: Databank ERP Ecosystem (PT Intisel)",
      text: `**Databank ERP Ecosystem: Enterprise Backbone at PT Intisel Prodaktifakom**

Adyvka served as Lead Systems Engineer and Project Manager directing the Databank ERP architecture:

* **Scope and Mission:** Centralizing operations, telecom tower equipment tracking, procurement POs, and Huawei ISDP integration for telecommunication infrastructure teams.
* **Key Innovations:**
  * **Automated ISDP Scraping Bot:** Headless scraper that fetches and synchronizes daily equipment logs from Huawei ISDP, saving over 80 engineer-hours monthly.
  * **3-Tier Role Governance:** Distinct operational pipelines for field technicians, regional coordinators, and executive finance approval.
  * **High-Throughput Virtualization:** Render tables capable of handling 10,000+ data rows with zero frame drops using TanStack Virtual.`,
      links: [
      {
              "label": "Databank Full Case Study",
              "url": "/projects/databank"
      },
      {
              "label": "PT Intisel Work Experience",
              "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
      }
],
    },
  },

  KEPK_DETAIL: {
    id: {
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
      {
              "label": "Buka Detail Proyek KEPK",
              "url": "/projects/kepk"
      },
      {
              "label": "Detail Kontrak Kerja di FK UMJ",
              "url": "/experience/universitas-muhammadiyah-jakarta-full-stack-engineer-contract"
      }
],
    },
    en: {
      title: "Case Study: SIM KEPK FK UMJ (Medical Research Ethical Clearance)",
      text: `**SIM KEPK FK UMJ: Medical Research Ethical Clearance Platform**

Adyvka engineered the official ethics review management system for the Faculty of Medicine at Universitas Muhammadiyah Jakarta:

* **Global Standards Compliance:** Built in accordance with World Health Organization (WHO) and Council for International Organizations of Medical Sciences (CIOMS 2016) ethical guidelines.
* **Dual Independent Reviewer Protocol:** Ensures research protocols undergo blinded independent peer reviews before receiving ethics certificates.
* **Document Audit Trails:** Cryptographic protocol verification, immutable revision histories, and digital certificate generation.`,
      links: [
      {
              "label": "SIM KEPK Project Details",
              "url": "/projects/kepk"
      },
      {
              "label": "UMJ Contract Experience",
              "url": "/experience/universitas-muhammadiyah-jakarta-full-stack-engineer-contract"
      }
],
    },
  },

  TERASTANI_DETAIL: {
    id: {
      title: "Studi Kasus: TerasTani ERP Rantai Pasok Agrikultur",
      text: `**TerasTani: Platform Rantai Pasok & Multi-Gudang Agrikultur**

TerasTani adalah platform fullstack yang dirancang untuk memotong rantai distribusi panjang komoditas hasil bumi:

* **Tantangan:** Ketimpangan harga yang diterima petani kecil dibanding harga beli konsumen akhir akibat perantara berlapis.
* **Solusi Rekayasa:**
  * Sistem inventaris multi-gudang (multi-warehouse) dengan pembaruan stok real-time.
  * Dasbor analitik tren permintaan komoditas pasar bagi kelompok tani.
  * Tata kelola pesanan terpadu dengan konfirmasi pembayaran otomatis.`,
      links: [
      {
              "label": "Buka Detail Proyek TerasTani",
              "url": "/projects/terastani"
      }
],
    },
    en: {
      title: "Case Study: TerasTani Agriculture Supply Chain ERP",
      text: `**TerasTani: B2B Agricultural Supply Chain and Price Transparency**

TerasTani is a full-stack platform designed to eliminate predatory middlemen in the agricultural supply chain:

* **Problem Solved:** Direct connections between rural crop farmers and urban wholesale distributors.
* **Core Capabilities:** Real-time wholesale market commodity pricing, temperature-sensitive inventory tracking, and transparent batch logistics.
* **Architecture:** React frontend, Node.js REST API, PostgreSQL database with indexed pricing queries.`,
      links: [
      {
              "label": "TerasTani Project Details",
              "url": "/projects/terastani"
      },
      {
              "label": "Explore All Projects",
              "url": "/projects"
      }
],
    },
  },

  RUANGTUMBUH_DETAIL: {
    id: {
      title: "Studi Kasus: RuangTumbuh Platform Kesehatan Mental",
      text: `**RuangTumbuh: Platform Skrining & Booking Telekonsultasi Psikologi**

RuangTumbuh dirancang untuk mempermudah akses layanan konseling psikologi secara aman dan terjangkau:

* **Fitur Utama:**
  * Kuesioner skrining kesehatan mental interaktif dengan kalkulasi skor indikator otomatis.
  * Sistem penjadwalan sesi tatap muka dan telekonsultasi bersama konselor profesional.
  * Enkripsi data privasi rekam medis pengguna untuk menjaga kerahasiaan sesi konseling.`,
      links: [
      {
              "label": "Buka Detail Proyek RuangTumbuh",
              "url": "/projects/ruangtumbuh"
      }
],
    },
    en: {
      title: "Case Study: RuangTumbuh Mental Health Platform",
      text: `**RuangTumbuh: Secure Mental Health and Wellness Platform**

RuangTumbuh provides accessible, confidential psychological counseling and emotional wellness tools:

* **Key Features:** Secure psychologist consultation scheduling, client-side encrypted mood journals, guided mindfulness sessions, and 24/7 emergency crisis hotlines.
* **Privacy and Security:** Strict end-to-end data segregation to protect sensitive patient records.`,
      links: [
      {
              "label": "RuangTumbuh Project Details",
              "url": "/projects/ruangtumbuh"
      }
],
    },
  },

  PUSAKAKU_DETAIL: {
    id: {
      title: "Studi Kasus: PusakaKu (Juara 1 Nasional ICOMFEST 2025)",
      text: `**PusakaKu: Platform Preservasi Budaya & Permainan Tradisional Nusantara**

PusakaKu adalah platform interaktif yang meraih penghargaan tertinggi **Juara 1 Lomba Web Design Nasional ICOMFEST 2025**:

* **Misi:** Menyelamatkan warisan permainan dan senjata tradisional Indonesia dari kepunahan di era digital.
* **Keunggulan Desain & Fitur:**
  * Ensiklopedia etnografi digital dengan visualisasi 2D interaktif.
  * Mesin gamifikasi dan kuis interaktif untuk mengenalkan aturan permainan tradisional kepada generasi muda.
  * Antarmuka responsif berperforma tinggi yang memikat dewan juri nasional.`,
      links: [
      {
              "label": "Buka Detail Proyek PusakaKu",
              "url": "/projects/pusakaku"
      },
      {
              "label": "Lihat Penghargaan Juara 1 ICOMFEST",
              "url": "/achievements/1st-place-national-web-design-competition"
      }
],
    },
    en: {
      title: "Case Study: PusakaKu (1st Place National Champion ICOMFEST 2025)",
      text: `**PusakaKu: 1st Place Winner at National ICOMFEST 2025**

PusakaKu is an interactive 3D web platform preserving Indonesian cultural heritage:

* **Achievement:** **1st Place National Champion** in Web Design Competition at ICOMFEST 2025, Universitas Mercu Buana.
* **Technical Highlights:** Three.js 3D artifact visualization, spatial audio folklore narration, interactive regional maps, and performance-tuned asset delivery.
* **Judges Praise:** Outstanding design fidelity, buttery 60fps 3D rendering, and meaningful educational value.`,
      links: [
      {
              "label": "PusakaKu Project Details",
              "url": "/projects/pusakaku"
      },
      {
              "label": "1st Place Trophy Details",
              "url": "/achievements/1st-place-national-web-design-competition"
      }
],
    },
  },

  SEMUABISA_DETAIL: {
    id: {
      title: "Studi Kasus: SemuaBisa (Top 5 Finalis Nasional UNILA 2024)",
      text: `**SemuaBisa: Platform Pembelajaran Inklusif & Adaptif**

SemuaBisa meraih predikat **Top 5 Grand Finalist (Juara 4) Nasional Web Development Competition di Universitas Lampung (UNILA)**:

* **Pencapaian Spesial:** Adyvka dan tim menjadi **satu-satunya tim SMK** yang berhasil menembus babak final, bersaing langsung melawan tim-tim mahasiswa teknik dari universitas terkemuka se-Indonesia.
* **Fitur Utama:**
  * Fitur aksesibilitas tinggi untuk pengguna berkebutuhan khusus (dukungan pembaca layar, kontras tinggi, navigasi keyboard).
  * Modul belajar modular dengan pelacakan progres pemahaman materi.`,
      links: [
      {
              "label": "Buka Detail Proyek SemuaBisa",
              "url": "/projects/semua-bisa"
      },
      {
              "label": "Lihat Prestasi Finalis UNILA",
              "url": "/achievements/finalist-national-web-dev-competition"
      }
],
    },
    en: {
      title: "Case Study: SemuaBisa (Top 5 National Finalist UNILA 2024)",
      text: `**SemuaBisa: Top 5 National Finalist at Universitas Lampung 2024**

SemuaBisa is an accessible learning management platform engineered for students with diverse physical and cognitive needs:

* **Achievement:** **Top 5 National Finalist** in National Web Development Competition at Universitas Lampung.
* **Accessibility Features:** WCAG 2.1 AAA compliance, OpenDyslexic typography toggle, high-contrast color palettes, full keyboard navigation, and screen-reader optimizations.`,
      links: [
      {
              "label": "SemuaBisa Project Details",
              "url": "/projects/semua-bisa"
      },
      {
              "label": "National Finalist Award Details",
              "url": "/achievements/finalist-national-web-dev-competition"
      }
],
    },
  },

  MOBILE_APPS: {
    id: {
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
      {
              "label": "Lihat Attendance App",
              "url": "/projects/attendance-app"
      },
      {
              "label": "Lihat QR Scanner",
              "url": "/projects/qr-scanner"
      },
      {
              "label": "Lihat Quran App",
              "url": "/projects/quran-app"
      },
      {
              "label": "Lihat News App",
              "url": "/projects/news-app"
      }
],
    },
    en: {
      title: "Mobile and Android Application Portfolio",
      text: `**Mobile and Android Applications Built by Adyvka**

Adyvka has engineered 4 native and utility mobile applications:

1. **Al-Quran Digital:** Complete Quranic recitation companion with offline audio caching, tajweed guides, and search.
2. **QR Scanner Utility:** High-speed barcode and QR code reader with history export and deep-link handling.
3. **Attendance Tracker:** Geofenced student check-in system with selfie verification and reporting.
4. **News Portal App:** Real-time news reader powered by RESTful feeds and personalized bookmarking.`,
      links: [
      {
              "label": "Al-Quran App Details",
              "url": "/projects/quran-app"
      },
      {
              "label": "QR Scanner Details",
              "url": "/projects/qr-scanner"
      },
      {
              "label": "Attendance App Details",
              "url": "/projects/attendance-app"
      },
      {
              "label": "News App Details",
              "url": "/projects/news-app"
      }
],
    },
  },

  AI_CAPABILITIES: {
    id: {
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
      {
              "label": "Buka AI Ticket Manager",
              "url": "/projects/ai-ticket-manager"
      },
      {
              "label": "Buka Proyek FitSmart",
              "url": "/projects/fitsmart"
      },
      {
              "label": "Lihat Sertifikat AI di Halaman Kredensial",
              "url": "/certificates"
      }
],
    },
    en: {
      title: "AI and Machine Learning Engineering Capabilities",
      text: `**AI and Machine Learning Engineering Capabilities**

Adyvka actively integrates modern AI into production software architectures:

* **Neural Image Generation:** Built an intuitive platform leveraging diffusion model endpoints for real-time creative asset synthesis.
* **AI Ticket Incident Manager:** Automated IT support ticket triage using Hugging Face transformer models for sentiment and priority routing.
* **Practical AI Engineering:** Fine-tuning prompts, embedding generation, semantic retrieval (RAG), and cost-efficient LLM API orchestrations.`,
      links: [
      {
              "label": "AI Ticket Manager Details",
              "url": "/projects/ai-ticket-manager"
      },
      {
              "label": "Explore Projects Catalog",
              "url": "/projects"
      }
],
    },
  },

  BOOKS: {
    id: {
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
      {
              "label": "Baca Buku Membuat Game 2D",
              "url": "/publications/buku-membuat-game-tanpa-coding"
      },
      {
              "label": "Baca Buku Membuat Website",
              "url": "/publications/buku-membuat-website-dengan-framework"
      }
],
    },
    en: {
      title: "Published Works: 2 Technical Books Authored by Adyvka",
      text: `**2 Official Technical Books Published by Adyvka**

Adyvka is an author of 2 published technical books:

1. **Membuat Game 2D Tanpa Coding dengan Construct:**
   * 8 comprehensive chapters guiding complete beginners through sprite animation, visual physics, collision mechanics, audio integration, and publishing games to itch.io.
2. **Membuat Website Modern dengan Framework:**
   * 8 structured chapters teaching semantic HTML5, CSS component architecture, JavaScript fundamentals, responsive layouts, and modern frontend frameworks.

Both books include interactive sample chapters available directly on the Publications page.`,
      links: [
      {
              "label": "Read Construct Game Book",
              "url": "/publications/buku-membuat-game-tanpa-coding"
      },
      {
              "label": "Read Modern Website Book",
              "url": "/publications/buku-membuat-website-dengan-framework"
      }
],
    },
  },

  GPA_ACADEMIC: {
    id: {
      title: "Prestasi Akademik: Nilai Rapot 96 / 100 GPA",
      text: `**Nilai rapot Adyvka pada semester terakhir (Semester 4) adalah 96 / 100 GPA.**

Pencapaian ini mencatatkan predikat **Academic Honors (Peringkat Kehormatan Akademik)** di jurusan Rekayasa Perangkat Lunak SMK IDN Boarding School.

Fakta penting di balik nilai 96/100:
* **Penguasaan Komprehensif:** Nilai 96/100 mencerminkan pemahaman mendalam dalam mata pelajaran rekayasa perangkat lunak, arsitektur basis data, clean code, dan algoritma.
* **Tanggung Jawab Industri Simultan:** Nilai ini diraih berbarengan saat Adyvka aktif memimpin arsitektur sistem enterprise telekomunikasi Databank ERP di PT Intisel dan platform internal di PT Ardyanda.
* **Kedisiplinan Waktu:** Di usianya yang baru 17 tahun, Adyvka membuktikan bahwa performa akademik puncak dan penyelesaian proyek nyata dapat diraih beriringan tanpa kompromi.`,
      links: [
      {
              "label": "Baca Biografi Lengkap di Halaman About",
              "url": "/about"
      },
      {
              "label": "Lihat Rekam Jejak Pengalaman",
              "url": "/experience"
      }
],
    },
    en: {
      title: "Academic Standing: 96 / 100 GPA and Academic Honors",
      text: `**Academic Standing: 96 / 100 GPA and Academic Honors**

Adyvka maintains top academic performance at SMK IDN Boarding School:

* **Cumulative GPA:** **96 / 100** (Semester 4 official grade record).
* **Major:** Software Engineering (Rekayasa Perangkat Lunak).
* **Academic Honors:** Top-tier standing in database engineering, algorithms, frontend development, and systems programming.
* **Practical Excellence:** Backed by real-world enterprise deployments, national competition podiums, and international certifications.`,
      links: [
      {
              "label": "Explore About Profile",
              "url": "/about"
      },
      {
              "label": "View Verified Certificates",
              "url": "/certificates"
      }
],
    },
  },

  AGE_INFO: {
    id: {
      title: "Usia & Latar Belakang Adyvka",
      text: `**Adyvka saat ini berusia 17 tahun.**

* **Tahun Lahir:** 2008
* **Domisili:** Depok, Jawa Barat, Indonesia
* **Mulai Coding:** Sejak usia 13 tahun (tahun 2021)
* **Pengalaman Rekayasa:** 5+ tahun pengalaman membangun sistem digital

Meskipun masih berusia 17 tahun, Adyvka telah dipercaya memimpin arsitektur sistem enterprise nasional, menerbitkan 2 buku resmi, melatih dewan guru, dan solo backpacker melintasi 3 negara Asia Tenggara.`,
      links: [
      {
              "label": "Buka Halaman About",
              "url": "/about"
      }
],
    },
    en: {
      title: "Age and Background of Rafif Sava Adyvka Pratama",
      text: `**Age and Personal Background of Adyvka**

* **Full Name:** Rafif Sava Adyvka Pratama (known professionally as **Adyvka**).
* **Age:** 17 years old (born 2008).
* **Coding Experience:** Actively coding since 2021 (5+ years of software engineering experience).
* **Education:** Final year (Grade 12) Software Engineering student at SMK IDN Boarding School.
* **Enterprise Credibility:** Led engineering for Databank ERP at PT Intisel, interned at PT Ardyanda, authored 2 technical books, and solo-backpacked across 3 nations at age 15.`,
      links: [
      {
              "label": "Explore About Profile",
              "url": "/about"
      },
      {
              "label": "View All Experiences",
              "url": "/experience"
      }
],
    },
  },

  EDUCATION: {
    id: {
      title: "Pendidikan & Sekolah Adyvka",
      text: `**Adyvka bersekolah di SMK IDN Boarding School.**

* **Tingkat:** Kelas XII (Siswa Tingkat Akhir)
* **Jurusan:** Rekayasa Perangkat Lunak (Software Engineering)
* **Rekor Akademik:** Nilai rapot **96 / 100 GPA** di Semester 4 (Academic Honors)
* **Sistem Sekolah:** Asrama terpadu (boarding school) yang melatih kemandirian, etos kerja profesional, dan penguasaan teknologi industri.
* **Kepemimpinan Sekolah:** Dipercaya menjabat sebagai Ketua Divisi Acara OSIS SMK IDN dan mengoordinasi festival teknologi nasional IT FEST 2025 dengan lebih dari 500 peserta.`,
      links: [
      {
              "label": "Baca Selengkapnya di Halaman About",
              "url": "/about"
      }
],
    },
    en: {
      title: "Education and Academic Background",
      text: `**Education Background of Adyvka**

* **School:** **SMK IDN Boarding School**, Jonggol, West Java, Indonesia.
* **Major:** Software Engineering (Rekayasa Perangkat Lunak).
* **Grade:** Final Year (Grade 12 / Year 3).
* **Core Curriculum:** Full-stack web engineering, mobile development, Linux server administration, database architecture, and project management.
* **Campus Culture:** Intensive boarding school model emphasizing independence, discipline, moral integrity, and collaborative technical execution.`,
      links: [
      {
              "label": "Explore About Profile",
              "url": "/about"
      },
      {
              "label": "View Verified Certificates",
              "url": "/certificates"
      }
],
    },
  },

  LOCATION_DOMICILE: {
    id: {
      title: "Lokasi & Domisili Rafif Sava Adyvka Pratama",
      text: `**Domisili & Wilayah Kerja Adyvka**

* **Domisili Saat Ini:** Depok, Jawa Barat, Indonesia (Kawasan Metropolitan Jabodetabek).
* **Zona Waktu:** Asia/Jakarta (UTC+07 · WIB).
* **Fleksibilitas Kerja:**
  * **Remote:** Siap bekerja secara penuh dengan tim di seluruh Indonesia maupun luar negeri dengan ritme kerja asinkronus yang disiplin.
  * **On-Site / Hybrid:** Terbuka untuk pertemuan tatap muka, rapat pemangku kepentingan, atau penempatan di area Jabodetabek dan Bandung.`,
      links: [
      {
              "label": "Kunjungi Halaman Kontak",
              "url": "/contact"
      },
      {
              "label": "Buka Halaman About",
              "url": "/about"
      }
],
    },
    en: {
      title: "Location and Domicile",
      text: `**Location, Domicile and Work Availability**

* **Primary Location:** Depok, West Java, Indonesia.
* **Time Zone:** UTC+07 (Western Indonesia Time / WIB).
* **Work Models:**
  * **Remote:** Available globally for remote engineering contracts and international collaboration.
  * **Hybrid / On-Site:** Readily available across the Greater Jakarta area (Jakarta, Bogor, Depok, Tangerang, Bekasi).`,
      links: [
      {
              "label": "Contact Adyvka",
              "url": "/contact"
      },
      {
              "label": "Download Official CV",
              "url": "/about"
      }
],
    },
  },

  CERTIFICATES: {
    id: {
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
      {
              "label": "Lihat Seluruh Sertifikat",
              "url": "/certificates"
      }
],
    },
    en: {
      title: "International Certifications and Verified Credentials (22+ Credentials)",
      text: `**22+ Verified Professional Certifications Held by Adyvka**

Adyvka holds top-tier international and national credentials:

1. **Harvard University:** CS50 Introduction to Computer Science (C, Python, SQL, Memory, Algorithms).
2. **Amazon Web Services (AWS):** AWS Cloud Practitioner Essentials.
3. **Dicoding Professional Learning Paths:**
   * Front-End Web Developer and React Web Developer.
   * Back-End Developer and JavaScript Programming.
   * Python Programming and Data Analysis Fundamentals.
   * Artificial Intelligence and Prompt Engineering.
4. **Skilvul:** UI/UX Design Fundamentals.
5. **English Proficiency:** EF SET 84/100 (C2 Proficient equivalent).`,
      links: [
      {
              "label": "Explore All 22+ Certificates",
              "url": "/certificates"
      },
      {
              "label": "CS50 Harvard Credential",
              "url": "/certificates/cs50-introduction-to-computer-science"
      },
      {
              "label": "AWS Cloud Credential",
              "url": "/certificates/cloud-practitioner-essentials"
      }
],
    },
  },

  ACHIEVEMENTS: {
    id: {
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
      {
              "label": "Buka Halaman Prestasi",
              "url": "/achievements"
      },
      {
              "label": "Detail Juara 2 PNBITC Bali",
              "url": "/achievements/2nd-place-national-web-design-competition-pnbitc"
      },
      {
              "label": "Detail Juara 1 ICOMFEST",
              "url": "/achievements/1st-place-national-web-design-competition"
      }
],
    },
    en: {
      title: "National Competition Awards and Honors",
      text: `**National Competition Awards and Podiums Won by Adyvka**

Adyvka has consistently placed at top national technology competitions:

1. **1st Place National Champion:** Web Design Competition at ICOMFEST 2025, Universitas Mercu Buana Jakarta (PusakaKu 3D Platform).
2. **2nd Place Runner-Up:** National Web Design Competition at PNB IT Competition 2024, Politeknik Negeri Bali.
3. **Top 5 National Finalist:** Web Development Competition at Universitas Lampung 2024 (SemuaBisa Accessible Platform).
4. **Best Graphic Poster Award:** IDN Boarding School Annual Exhibition.`,
      links: [
      {
              "label": "View All Achievements",
              "url": "/achievements"
      },
      {
              "label": "1st Place ICOMFEST Details",
              "url": "/achievements/1st-place-national-web-design-competition"
      },
      {
              "label": "2nd Place PNB ITC Details",
              "url": "/achievements/2nd-place-national-web-design-competition-pnbitc"
      }
],
    },
  },

  TECH_STACK: {
    id: {
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
      {
              "label": "Lihat Stack di Halaman About",
              "url": "/about"
      }
],
    },
    en: {
      title: "Technical Stack and Engineering Competencies",
      text: `**Technical Stack and Engineering Mastery**

Adyvka's engineering stack spans modern full-stack development, cloud architecture, and systems programming:

* **Frontend:** React 19, Next.js 16 (App Router), TypeScript, JavaScript (ESNext), Tailwind CSS, Framer Motion, Three.js, TanStack Virtual.
* **Backend:** Node.js, NestJS, Express.js, Python, RESTful API design, Web Scraping Bots (Puppeteer).
* **Databases:** PostgreSQL, MySQL, Supabase, Redis, Prisma ORM, Drizzle ORM.
* **Cloud and DevOps:** Docker, AWS (S3, EC2, IAM), Vercel, Git, GitHub Actions, Linux administration.
* **UI/UX and Design:** Figma, Wireframing, Component Systems, Design Tokens, Responsive Design.`,
      links: [
      {
              "label": "View About Profile",
              "url": "/about"
      },
      {
              "label": "Explore Enterprise Projects",
              "url": "/projects"
      }
],
    },
  },

  STRENGTHS_WHY_HIRE: {
    id: {
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
      {
              "label": "Buka Halaman About",
              "url": "/about"
      },
      {
              "label": "Hubungi Adyvka untuk Peluang Karier",
              "url": "/contact"
      }
],
    },
    en: {
      title: "Key Strengths and Why You Should Hire Adyvka",
      text: `**Why Hire Adyvka? Key Value Propositions**

1. **Proven Enterprise Reliability:** Led development of Databank ERP at PT Intisel, handling mission-critical telecom site records and automation.
2. **Unusually Mature Leadership:** Experienced project manager, two-term student council event division leader, and instructor trusted to train faculty teachers.
3. **High Execution Speed and Ownership:** Deep self-learning velocity, demonstrated by publishing 2 books, earning CS50, and building 18 projects by age 17.
4. **Resilient Character:** Tested through solo backpacking across 3 nations at age 15 and surviving zero-capital business trials.`,
      links: [
      {
              "label": "Download Official CV",
              "url": "/about"
      },
      {
              "label": "View Work Experience",
              "url": "/experience"
      },
      {
              "label": "Contact Adyvka Directly",
              "url": "/contact"
      }
],
    },
  },

  CV_RESUME: {
    id: {
      title: "Download CV & Resume Resmi Adyvka",
      text: `**Curriculum Vitae (CV) & Resume Resmi Adyvka**

CV resmi Rafif Sava Adyvka Pratama merangkum seluruh rekam jejak profesional, kompetensi teknis, publikasi buku, dan pencapaian kompetisi:

* **Isi CV:** Ringkasan 4 pengalaman kerja industri, kepemimpinan Databank ERP di PT Intisel, 18 proyek rilis, 2 buku resmi, 22+ sertifikasi, dan nilai rapot 96/100.
* **Unduh Langsung:** Anda dapat mengunduh dokumen resmi CV Adyvka langsung melalui tombol unduh di halaman About atau menghubungi langsung via email.`,
      links: [
      {
              "label": "Buka Halaman About untuk Download CV",
              "url": "/about"
      },
      {
              "label": "Kirim Email Permintaan Resume",
              "url": "mailto:rafifdyvka07@gmail.com"
      }
],
    },
    en: {
      title: "Official CV and Resume Download",
      text: `**Download Official CV and Resume of Adyvka**

Adyvka's complete CV highlights 5+ years of programming experience, 18 projects, 20 verified experiences, and 22+ credentials.

You can download the official PDF directly from the portfolio or get in touch for custom employment inquiries.`,
      links: [
      {
              "label": "Download PDF CV (Direct)",
              "url": "/assets/RafifSavaAdyvkaPratama_CV.pdf"
      },
      {
              "label": "Contact Page",
              "url": "/contact"
      },
      {
              "label": "LinkedIn Profile",
              "url": "https://www.linkedin.com/in/adyvka-pratama/"
      }
],
    },
  },

  WORK_AVAILABILITY: {
    id: {
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
      {
              "label": "Hubungi Adyvka di Halaman Contact",
              "url": "/contact"
      },
      {
              "label": "Buka Profil About",
              "url": "/about"
      }
],
    },
    en: {
      title: "Work Availability and Engagement Formats",
      text: `**Work Availability and Engagement Models**

* **Status:** Open for new professional engagements, high-impact freelance projects, and employment opportunities.
* **Engagement Formats:**
  * **Remote (Worldwide):** Fully equipped for asynchronous and real-time remote engineering across global time zones.
  * **Hybrid / On-Site:** Available in the Greater Jakarta region (Jakarta, Bogor, Depok, Tangerang, Bekasi).
* **Roles:** Junior/Mid Full Stack Engineer, Frontend Architect, Systems Engineer, or Technical Consultant.`,
      links: [
      {
              "label": "Contact for Work Opportunities",
              "url": "/contact"
      },
      {
              "label": "View Work Experience",
              "url": "/experience"
      }
],
    },
  },

  RATES_AND_PRICING: {
    id: {
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
      {
              "label": "Kirim Pesan di Halaman Kontak",
              "url": "/contact"
      },
      {
              "label": "Kirim Email Langsung",
              "url": "mailto:rafifdyvka07@gmail.com"
      }
],
    },
    en: {
      title: "Rates, Pricing Estimates and Services",
      text: `**Rates, Pricing Estimates and Engineering Services**

Adyvka provides transparent project-based and retainer pricing models:

* **Production Web MVP / Company Profile:** Estimated between IDR 2,500,000 to IDR 6,000,000 (1 to 2 weeks turnaround).
* **Custom Enterprise Systems / Internal ERP:** Estimated between IDR 7,500,000 to IDR 20,000,000+ depending on architectural complexity, role governance, and third-party integrations.
* **Technical Advisory / UI/UX Design Audits:** Flexible hourly or milestone-based retainers.

All pricing includes clean source code delivery, responsive optimization, and post-launch deployment support.`,
      links: [
      {
              "label": "Request a Project Quote",
              "url": "/contact"
      },
      {
              "label": "View Enterprise Projects",
              "url": "/projects"
      }
],
    },
  },

  ENGLISH_FLUENCY: {
    id: {
      title: "Kemahiran Bahasa Inggris & Komunikasi Internasional",
      text: `**Kemahiran Bahasa Inggris Adyvka**

* **Sertifikasi:** Memiliki sertifikat resmi **English Proficiency Assessment** dari Dicoding Indonesia.
* **Penerapan Praktis:**
  * Mampu membaca, mencerna, dan mengimplementasikan dokumentasi teknis standar internasional berbahasa Inggris tanpa kendala.
  * Terbiasa berkomunikasi langsung dengan masyarakat mancanegara saat melakukan ekspedisi solo backpacker melintasi Singapura, Malaysia, dan Thailand.
  * Menulis clean code, commit messages Git, dan dokumentasi arsitektur sistem dalam bahasa Inggris standar industri.`,
      links: [
      {
              "label": "Lihat Sertifikat di Halaman Kredensial",
              "url": "/certificates"
      }
],
    },
    en: {
      title: "English Proficiency and Global Communication",
      text: `**English Proficiency and International Communication**

* **Assessment Score:** **84 / 100 on EF SET** (Certified C2 Proficient equivalent).
* **Technical Fluency:** Writes architectural documentation, API contracts, and code reviews entirely in standard English.
* **Global Readiness:** Confidently communicates with international teams, handles overseas client requirements, and collaborates across remote time zones.`,
      links: [
      {
              "label": "English Proficiency Certificate",
              "url": "/certificates/english-proficiency-assessment"
      },
      {
              "label": "About Adyvka Profile",
              "url": "/about"
      }
],
    },
  },

  HOBBIES_INTERESTS: {
    id: {
      title: "Aktivitas & Minat Adyvka di Luar Coding",
      text: `**Kehidupan & Aktivitas Adyvka di Luar Dunia Koding**

Untuk menjaga keseimbangan hidup dan ketajaman berpikir, Adyvka rutin melakukan:

1. **Solo Backpacking & Menjelajah Tempat Baru:** Menikmati petualangan mandiri, mempelajari budaya lokal, dan melatih kemampuan adaptasi di lingkungan baru.
2. **Membaca Buku Literasi Sains & Kepemimpinan:** Mendalami wawasan arsitektur sistem, efisiensi bisnis, dan psikologi komunikasi.
3. **Aksi Kerelawanan & Sosial:** Terlibat dalam kegiatan Barmus Voluntrip dan aksi sosial mengajar anak-anak di daerah pelosok.
4. **Olahraga & Kebugaran:** Menjaga kebugaran fisik demi menunjang ketahanan kerja mental saat memimpin proyek rekayasa intensif.`,
      links: [
      {
              "label": "Kisah Backpacker 3 Negara",
              "url": "/experience/singapore-malaysia-thailand-backpacker-3-country"
      },
      {
              "label": "Buka Halaman About",
              "url": "/about"
      }
],
    },
    en: {
      title: "Hobbies and Interests Outside Engineering",
      text: `**Hobbies and Personal Interests Outside Coding**

When away from the terminal, Adyvka enjoys activities that broaden his perspectives:

* **Solo Travel and Backpacking:** Exploring new cities, experiencing local cultures, and navigating unfamiliar geographies independently.
* **Street and Architectural Photography:** Documenting urban transit, human interactions, and minimalist architecture.
* **Reading Non-Fiction:** Books on business leadership, biographical memoirs, psychology, and systems design.
* **Specialty Coffee:** Exploring artisanal roasts and manual brew methods.`,
      links: [
      {
              "label": "Solo Backpacker 3 Countries Case Study",
              "url": "/experience/singapore-malaysia-thailand-backpacker-3-country"
      },
      {
              "label": "About Adyvka Profile",
              "url": "/about"
      }
],
    },
  },

  VISION_FUTURE_GOALS: {
    id: {
      title: "Visi & Aspirasi Karier Masa Depan Adyvka",
      text: `**Visi & Aspirasi Masa Depan Rafif Sava Adyvka Pratama**

* **Visi Jangka Panjang:** Menjadi **World-Class Systems Architect** yang memimpin perancangan sistem terdistribusi berskala besar dengan keandalan tinggi (high availability) dan nol toleransi kegagalan data.
* **Misi Teknologi:** Membangun kedaulatan perangkat lunak di Indonesia melalui standardisasi arsitektur modern, clean code, serta mendidik talenta muda berikutnya agar berdaya saing global.
* **Prinsip Hidup:** "High agency, integrity, continuous learning, and software that creates real human impact."`,
      links: [
      {
              "label": "Baca Selengkapnya di Halaman About",
              "url": "/about"
      }
],
    },
    en: {
      title: "Vision and Future Career Aspirations",
      text: `**Vision and Future Aspirations of Adyvka**

Adyvka is driven by the mission to build resilient, human-centered technology that creates tangible societal value:

* **Engineering Excellence:** Continuing to build mission-critical enterprise systems and high-throughput web applications.
* **Community Leadership:** Mentoring the next generation of engineers and expanding digital literacy across Southeast Asia.
* **Global Impact:** Contributing to prominent open-source ecosystems and collaborating on international software products.`,
      links: [
      {
              "label": "Explore About Profile",
              "url": "/about"
      },
      {
              "label": "Contact Adyvka",
              "url": "/contact"
      }
],
    },
  },

  CONTACT: {
    id: {
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
      {
              "label": "Kunjungi Halaman Kontak",
              "url": "/contact"
      },
      {
              "label": "Kirim Email Langsung",
              "url": "mailto:rafifdyvka07@gmail.com"
      }
],
    },
    en: {
      title: "Contact and Collaboration Opportunities",
      text: `**Get in Touch with Rafif Sava Adyvka Pratama**

Adyvka is actively welcoming project inquiries, technical collaborations, and hiring discussions:

* **Direct Email:** rafifdyvka07@gmail.com
* **LinkedIn:** linkedin.com/in/adyvka-pratama
* **GitHub:** github.com/adyvka31
* **Location:** Depok, West Java, Indonesia (Open to remote worldwide)
* **Response Time:** Typically within 24 hours on business days`,
      links: [
      {
              "label": "Go to Contact Form",
              "url": "/contact"
      },
      {
              "label": "Connect on LinkedIn",
              "url": "https://www.linkedin.com/in/adyvka-pratama/"
      },
      {
              "label": "Explore GitHub Profile",
              "url": "https://github.com/adyvka31"
      }
],
    },
  },

  BIO_IDENTITY: {
    id: {
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
      {
              "label": "Buka Profil Halaman About",
              "url": "/about"
      },
      {
              "label": "Lihat Portofolio Proyek",
              "url": "/projects"
      }
],
    },
    en: {
      title: "Biography and Profile Overview of Adyvka",
      text: `**Biography and Profile Overview of Rafif Sava Adyvka Pratama**

Rafif Sava Adyvka Pratama (known as **Adyvka**) is a 17-year-old software engineer and author from Depok, Indonesia:

* **Education:** Final year (Grade 12) Software Engineering student at SMK IDN Boarding School with a 96/100 GPA.
* **Proven Track Record:** Built 18 verified engineering projects, completed 20 experiences across corporate engineering, teaching, and leadership, and earned 22+ professional credentials including Harvard CS50 and AWS Cloud Practitioner.
* **Published Author:** Author of 2 published technical books on game engineering and web framework development.
* **Leadership and Life:** Led Databank ERP engineering at PT Intisel, trained school faculty at SMPN 25 Depok, and solo-backpacked across 3 countries at age 15.`,
      links: [
      {
              "label": "Read Full About Story",
              "url": "/about"
      },
      {
              "label": "View All 18 Projects",
              "url": "/projects"
      },
      {
              "label": "View All 20 Experiences",
              "url": "/experience"
      }
],
    },
  },

  OVERVIEW_FALLBACK: {
    id: {
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
      {
              "label": "Buka Halaman Tentang Adyvka",
              "url": "/about"
      },
      {
              "label": "Buka Seluruh Pengalaman",
              "url": "/experience"
      },
      {
              "label": "Buka Katalog 18 Proyek",
              "url": "/projects"
      },
      {
              "label": "Hubungi Adyvka",
              "url": "/contact"
      }
],
    },
    en: {
      title: "Adyvka Portfolio Assistant",
      text: `**Adyvka Portfolio Assistant Directory**

Here is what you can ask me about Rafif Sava Adyvka Pratama (Adyvka):

* **Projects (18 total):** Ask about Databank ERP, KEPK UMJ, PusakaKu, SemuaBisa, or full-stack web and mobile apps.
* **Experience (20 total):** Ask about corporate work (PT Intisel, PT Ardyanda, CV Richo Bahari), teaching workshops, or student council leadership.
* **Life and Character:** Ask about solo backpacking across 3 nations at age 15 or the Semarang survival challenge.
* **Academics and Credentials:** Ask about his 96/100 GPA, CS50 Harvard, AWS certification, or 2 published books.
* **Hiring and Collaboration:** Ask about work availability, tech stack, rates, or how to download his CV.

Feel free to choose a suggestion chip or type your question in English or Bahasa Indonesia!`,
      links: [
      {
              "label": "Explore About Profile",
              "url": "/about"
      },
      {
              "label": "View All Experiences",
              "url": "/experience"
      },
      {
              "label": "View 18 Projects",
              "url": "/projects"
      },
      {
              "label": "Contact Adyvka",
              "url": "/contact"
      }
],
    },
  },

};

// =========================================================================
// BILINGUAL PRECISION INTENT RESOLVER
// =========================================================================
export function findBestAnswer(rawQuery) {
  const lang = detectLanguage(rawQuery);

  if (!rawQuery || typeof rawQuery !== "string") {
    const card = KNOWLEDGE_REGISTRY.OVERVIEW_FALLBACK[lang] || KNOWLEDGE_REGISTRY.OVERVIEW_FALLBACK.en;
    return { ...card, lang };
  }

  const normalized = normalizeText(rawQuery);
  const tokens = new Set(normalized.split(/\s+/));

  let matchedCard = null;

  // -------------------------------------------------------------------------
  // PRIORITY 1: ULTRA-SPECIFIC KEYWORD TRIGGERS
  // -------------------------------------------------------------------------

  // Specific Company: CV. Richo Bahari
  if (tokens.has("richo") || tokens.has("bahari") || tokens.has("richobahari")) {
    matchedCard = KNOWLEDGE_REGISTRY.CV_RICHO_BAHARI_DETAIL;
  }

  // Teacher Training: SMPN 25 Depok & Teachers
  else if (
    normalized.includes("smpn 25") ||
    (tokens.has("guru") && (tokens.has("latih") || tokens.has("pelatihan") || tokens.has("ajar"))) ||
    (tokens.has("teacher") && (tokens.has("training") || tokens.has("faculty") || tokens.has("principal") || tokens.has("teach")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.SMPN25_TEACHER_TRAINING;
  }

  // CV / Resume Download (ensure not confused with CV Richo Bahari)
  else if (
    ((tokens.has("cv") || tokens.has("resume")) && !tokens.has("richo") && !tokens.has("bahari")) ||
    (tokens.has("download") && !tokens.has("buku"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CV_RESUME;
  }

  // Rates, Fees, Pricing
  else if (
    tokens.has("tarif") || tokens.has("harga") || tokens.has("biaya") ||
    tokens.has("rate") || tokens.has("rates") || tokens.has("budget") ||
    tokens.has("fee") || tokens.has("fees") || tokens.has("pricing") || tokens.has("salary") || tokens.has("cost")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.RATES_AND_PRICING;
  }

  // Work Availability, Remote, Onsite, Open to Work/Hire
  else if (
    tokens.has("remote") || tokens.has("onsite") || tokens.has("hybrid") || tokens.has("wfh") || 
    tokens.has("available") || tokens.has("availability") ||
    normalized.includes("on site") || normalized.includes("open untuk") || normalized.includes("open to work") ||
    normalized.includes("status kerja") || (tokens.has("bisa") && (tokens.has("hire") || tokens.has("rekrut"))) ||
    (tokens.has("kapan") && tokens.has("kerja")) || normalized.includes("siap kerja") || normalized.includes("ketersediaan kerja") ||
    normalized.includes("work remotely") || normalized.includes("work hybrid")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.WORK_AVAILABILITY;
  }

  // English Fluency
  else if (tokens.has("inggris") || tokens.has("english") || tokens.has("toefl") || tokens.has("ielts") || tokens.has("efset")) {
    matchedCard = KNOWLEDGE_REGISTRY.ENGLISH_FLUENCY;
  }

  // Hobbies / Outside coding
  else if (
    tokens.has("hobi") || tokens.has("hobby") || tokens.has("hobbies") ||
    (tokens.has("luar") && (tokens.has("koding") || tokens.has("coding") || tokens.has("kerja"))) ||
    normalized.includes("selain coding") || normalized.includes("selain koding") || normalized.includes("outside coding")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.HOBBIES_INTERESTS;
  }

  // Future Vision & Goals
  else if (
    tokens.has("visi") || tokens.has("vision") || tokens.has("cita") || tokens.has("goals") ||
    tokens.has("aspirasi") || tokens.has("aspiration") || tokens.has("future") ||
    normalized.includes("masa depan") || normalized.includes("tujuan hidup")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.VISION_FUTURE_GOALS;
  }

  // IT FEST 2025
  else if (normalized.includes("it fest") || normalized.includes("itfest")) {
    matchedCard = KNOWLEDGE_REGISTRY.IT_FEST_DETAIL;
  }

  // Barmus Voluntrip
  else if (tokens.has("barmus") || tokens.has("voluntrip")) {
    matchedCard = KNOWLEDGE_REGISTRY.BARMUS_VOLUNTRIP_DETAIL;
  }

  // Live In Pedesaan
  else if (normalized.includes("live in") || (tokens.has("pedesaan") && !tokens.has("lomba")) || normalized.includes("rural immersion")) {
    matchedCard = KNOWLEDGE_REGISTRY.LIVE_IN_DETAIL;
  }

  // Solo Backpacker 3 Negara
  else if (
    tokens.has("backpacker") || tokens.has("backpacking") || (tokens.has("solo") && (tokens.has("travel") || tokens.has("trip"))) ||
    ((tokens.has("singapura") || tokens.has("singapore") || tokens.has("thailand") || tokens.has("malaysia")) && !tokens.has("proyek"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.BACKPACKER_DETAIL;
  }

  // Semarang Survival
  else if (
    tokens.has("semarang") || 
    ((tokens.has("survival") || tokens.has("bertahan")) && !tokens.has("backpacker") && !tokens.has("travel"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.SEMARANG_SURVIVAL_DETAIL;
  }

  // Specific Company: PT Intisel Prodaktifakom
  else if (tokens.has("intisel") || tokens.has("prodaktifakom")) {
    matchedCard = KNOWLEDGE_REGISTRY.PT_INTISEL_DETAIL;
  }

  // Specific Company: PT Ardyanda
  else if (tokens.has("ardyanda")) {
    matchedCard = KNOWLEDGE_REGISTRY.PT_ARDYANDA_DETAIL;
  }

  // -------------------------------------------------------------------------
  // PRIORITY 2: SPECIFIC PROJECT DEEP-DIVES
  // -------------------------------------------------------------------------
  else if (tokens.has("databank")) {
    matchedCard = KNOWLEDGE_REGISTRY.DATABANK_DETAIL;
  }
  else if (tokens.has("kepk") || tokens.has("umj") || normalized.includes("medis") || normalized.includes("medical") || normalized.includes("etik riset")) {
    matchedCard = KNOWLEDGE_REGISTRY.KEPK_DETAIL;
  }
  else if (tokens.has("terastani") || tokens.has("pertanian") || tokens.has("petani") || tokens.has("agriculture")) {
    matchedCard = KNOWLEDGE_REGISTRY.TERASTANI_DETAIL;
  }
  else if (tokens.has("ruangtumbuh") || tokens.has("psikolog") || tokens.has("mental") || tokens.has("konseling")) {
    matchedCard = KNOWLEDGE_REGISTRY.RUANGTUMBUH_DETAIL;
  }
  else if (tokens.has("pusakaku") || tokens.has("icomfest") || (tokens.has("budaya") && tokens.has("3d"))) {
    matchedCard = KNOWLEDGE_REGISTRY.PUSAKAKU_DETAIL;
  }
  else if (tokens.has("semuabisa") || tokens.has("unila") || tokens.has("disabilitas") || tokens.has("accessibility") || tokens.has("disability")) {
    matchedCard = KNOWLEDGE_REGISTRY.SEMUABISA_DETAIL;
  }

  // -------------------------------------------------------------------------
  // PRIORITY 3: DOMAIN-SPECIFIC TECHNICAL CATEGORIES
  // -------------------------------------------------------------------------
  else if (tokens.has("ai") || tokens.has("ml") || tokens.has("machine") || tokens.has("huggingface") || tokens.has("diffusion") || tokens.has("artificial")) {
    matchedCard = KNOWLEDGE_REGISTRY.AI_CAPABILITIES;
  }
  else if (
    tokens.has("mobile") || tokens.has("android") || tokens.has("flutter") || tokens.has("kodular") ||
    tokens.has("quran") || tokens.has("scanner") || tokens.has("barcode") || tokens.has("attendance") || tokens.has("presensi")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.MOBILE_APPS;
  }

  // -------------------------------------------------------------------------
  // PRIORITY 4: GEOGRAPHY, LOCATION & DOMICILE
  // -------------------------------------------------------------------------
  else if (
    tokens.has("domisili") || tokens.has("tinggal") || tokens.has("alamat") || tokens.has("lokasi") || tokens.has("kota") ||
    tokens.has("depok") || tokens.has("location") || tokens.has("where") || tokens.has("live") || tokens.has("city") || tokens.has("based")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.LOCATION_DOMICILE;
  }

  // -------------------------------------------------------------------------
  // PRIORITY 5: AWARDS, HONORS & COMPETITIONS
  // -------------------------------------------------------------------------
  else if (
    tokens.has("lomba") || tokens.has("juara") || tokens.has("prestasi") || tokens.has("menang") ||
    tokens.has("award") || tokens.has("awards") || tokens.has("competition") || tokens.has("competitions") ||
    tokens.has("champion") || tokens.has("pnbitc") || tokens.has("podium") || tokens.has("trophy")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ACHIEVEMENTS;
  }

  // -------------------------------------------------------------------------
  // PRIORITY 6: PROJECT OVERVIEWS (COUNT VS LIST)
  // -------------------------------------------------------------------------
  else if (
    (tokens.has("proyek") || tokens.has("project")) &&
    (tokens.has("berapa") || tokens.has("jumlah") || tokens.has("total") || tokens.has("count") || tokens.has("many") || tokens.has("much") || tokens.has("18"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.COUNT_PROJECTS;
  }
  else if (
    (tokens.has("proyek") || tokens.has("project")) &&
    (tokens.has("daftar") || tokens.has("apa saja") || tokens.has("list") || tokens.has("katalog") || tokens.has("catalog") || tokens.has("semua") || tokens.has("all"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.LIST_PROJECTS;
  }

  // -------------------------------------------------------------------------
  // PRIORITY 7: TRACK-BASED EXPERIENCES
  // -------------------------------------------------------------------------
  else if (
    tokens.has("mengajar") || tokens.has("instruktur") || tokens.has("workshop") || tokens.has("pelatihan") || 
    tokens.has("teaching") || tokens.has("teacher") || tokens.has("teach") || tokens.has("mentorship")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.TEACHING_EXPERIENCE;
  }
  else if (
    tokens.has("organisasi") || tokens.has("kepemimpinan") || tokens.has("leadership") || tokens.has("osis") || 
    tokens.has("ketua") || tokens.has("organization") || tokens.has("council")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.LEADERSHIP_EXPERIENCE;
  }
  else if (
    tokens.has("kerja") || tokens.has("kantor") || tokens.has("perusahaan") || tokens.has("magang") || 
    tokens.has("internship") || tokens.has("freelance") || tokens.has("work") || tokens.has("job") || tokens.has("career") || tokens.has("corporate")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.WORK_EXPERIENCE;
  }
  else if (
    tokens.has("pengalaman") || tokens.has("experience") || tokens.has("experiences") || 
    normalized.includes("rekam jejak") || normalized.includes("pernah apa saja") || tokens.has("20")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ALL_EXPERIENCES;
  }

  // -------------------------------------------------------------------------
  // PRIORITY 8: STRENGTHS, RECRUITMENT & VALUE PROPOSITION
  // -------------------------------------------------------------------------
  else if (
    tokens.has("kelebihan") || tokens.has("kekuatan") || tokens.has("keunggulan") || 
    tokens.has("hire") || tokens.has("rekrut") || tokens.has("merekrut") || tokens.has("strength") || tokens.has("strengths") ||
    normalized.includes("why hire") || (tokens.has("kenapa") && (tokens.has("rekrut") || tokens.has("hire") || tokens.has("pilih"))) || 
    (tokens.has("mengapa") && (tokens.has("rekrut") || tokens.has("hire") || tokens.has("pilih"))) || tokens.has("spesialisasi")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.STRENGTHS_WHY_HIRE;
  }

  // Contact
  else if (
    tokens.has("kontak") || tokens.has("hubungi") || tokens.has("contact") || tokens.has("email") || 
    tokens.has("reach") || tokens.has("linkedin") || tokens.has("whatsapp") || tokens.has("wa")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CONTACT;
  }

  // Books
  else if (
    tokens.has("buku") || tokens.has("book") || tokens.has("modul") || tokens.has("publikasi") || 
    tokens.has("publication") || tokens.has("published") || tokens.has("author") || tokens.has("scratch")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.BOOKS;
  }

  // GPA / Rapot
  else if (
    tokens.has("rapot") || tokens.has("nilai") || tokens.has("gpa") || tokens.has("ipk") || 
    tokens.has("grade") || tokens.has("grades") || tokens.has("score") || tokens.has("honors") ||
    normalized.includes("semester 4") || tokens.has("96") || tokens.has("akademik") || tokens.has("academic")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.GPA_ACADEMIC;
  }

  // Age / Birthday
  else if (
    tokens.has("umur") || tokens.has("usia") || tokens.has("age") || tokens.has("old") || 
    normalized.includes("kapan lahir") || normalized.includes("tahun lahir") || tokens.has("kelahiran") || tokens.has("birth")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.AGE_INFO;
  }

  // School / Education
  else if (
    tokens.has("sekolah") || tokens.has("pendidikan") || tokens.has("school") || tokens.has("education") || 
    tokens.has("smk") || tokens.has("idn") || tokens.has("kuliah") || tokens.has("college") || tokens.has("jurusan") || tokens.has("major")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.EDUCATION;
  }

  // Certificates
  else if (
    tokens.has("sertifikat") || tokens.has("certificate") || tokens.has("certificates") || tokens.has("certification") ||
    tokens.has("cs50") || tokens.has("harvard") || tokens.has("aws") || tokens.has("dicoding") || tokens.has("skilvul")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERTIFICATES;
  }

  // Tech Stack / Skills
  else if (
    tokens.has("stack") || tokens.has("teknologi") || tokens.has("technology") || tokens.has("technologies") ||
    tokens.has("tools") || tokens.has("skill") || tokens.has("skills") || tokens.has("keahlian") || 
    tokens.has("coding") || tokens.has("koding") || tokens.has("framework") || tokens.has("database") || 
    tokens.has("frontend") || tokens.has("backend") || tokens.has("react") || tokens.has("nestjs") ||
    tokens.has("nextjs") || tokens.has("postgresql") || tokens.has("docker") || tokens.has("typescript")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.TECH_STACK;
  }

  // Bio / Identity
  else if (
    tokens.has("siapa") || tokens.has("siapakah") || tokens.has("who") || tokens.has("profil") || 
    tokens.has("profile") || tokens.has("biodata") || tokens.has("biografi") || tokens.has("biography") || tokens.has("about")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.BIO_IDENTITY;
  }

  // -------------------------------------------------------------------------
  // PRIORITY 9: CORPUS SEARCH FALLBACK
  // -------------------------------------------------------------------------
  else {
    const meaningfulWords = [...tokens].filter((w) => !STOPWORDS.has(w) && w.length >= 3);
    if (meaningfulWords.length > 0) {
      let bestMatchKey = null;
      let maxHits = 0;

      for (const [key, item] of Object.entries(KNOWLEDGE_REGISTRY)) {
        if (key === "OVERVIEW_FALLBACK") continue;
        const corpus = (
          (item.id?.title || "") + " " + (item.id?.text || "") + " " +
          (item.en?.title || "") + " " + (item.en?.text || "")
        ).toLowerCase();

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
        matchedCard = KNOWLEDGE_REGISTRY[bestMatchKey];
      }
    }
  }

  const finalCard = matchedCard || KNOWLEDGE_REGISTRY.OVERVIEW_FALLBACK;
  const localized = finalCard[lang] || finalCard.en || finalCard.id;

  return {
    title: localized.title,
    text: localized.text,
    links: localized.links,
    lang,
  };
}
