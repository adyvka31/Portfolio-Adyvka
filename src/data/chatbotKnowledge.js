// =========================================================================
// CHATBOT KNOWLEDGE BASE & BILINGUAL INTENT ENGINE (EN & ID)
// Authoritative dataset covering 100% of portfolio records across all domains:
// - 18 Software Engineering Projects (with full architecture, stack & links)
// - 20 Verified Experiences (4 Work, 10 Teaching & Faculty Training, 6 Leadership/Survival)
// - 23 Official Certifications (Harvard CS50, AWS, Git/GitHub, React, SQL, etc.)
// - 4 National Competition Achievements (PNBITC Bali, ICOMFEST 1st, UNILA, Poster)
// - 2 Published Programming Books
// Automatically detects query language (English vs Bahasa Indonesia)
// Strictly adheres to punctuation rule: NO em-dash or semicolon in sentences
// =========================================================================

export const ADYVKA_PROFILE = {
  name: "Rafif Sava Adyvka Pratama",
  alias: "Adyvka",
  age: 17,
  birthYear: 2008,
  birthPlace: "Depok, West Java, Indonesia",
  codingSince: 2021,
  yearsOfExperience: "5+ Years",
  totalProjects: 18,
  totalBooks: 2,
  totalExperiences: 20,
  workExperiencesCount: 4,
  teachingExperiencesCount: 10,
  leadershipExperiencesCount: 6,
  totalCertificates: 23,
  nationalAwardsCount: 4,
  location: "Depok, West Java, Indonesia",
  timezone: "UTC+07 (WIB)",
  religion: "Islam",
  school: "SMK IDN Boarding School",
  grade: "Grade 12 (Final Year)",
  major: "Software Engineering (Rekayasa Perangkat Lunak)",
  gpa: "96 / 100",
  gpaNote: "Semester 4 report card with Academic Honors",
  currentRole: "Lead Systems Engineer & Project Manager at PT Intisel Prodaktifakom",
  email: "rafifdyvka07@gmail.com",
  phone: "+62 821-1313-9664",
  whatsapp: "https://wa.me/6282113139664",
  linkedin: "https://www.linkedin.com/in/adyvka-pratama/",
  github: "https://github.com/adyvka31",
  youtube: "https://www.youtube.com/@adyvkapratama",
  instagram: "https://instagram.com/adyvkaa",
  tiktok: "https://www.tiktok.com/@adypraa31",
  portfolioUrl: "https://adyvkapratama.my.id",
};

export const QUICK_SUGGESTIONS = [
  { id: "ardyanda", label: "💼 Magang PT Ardyanda", query: "ceritakan pengalaman detail adyvka magang di pt ardyanda digital inovasi" },
  { id: "git_cert", label: "📜 Sertifikat Git & GitHub", query: "sertifikat belajar dasar git dengan github belajar apa dan apa yang didapat" },
  { id: "all_exp", label: "🌟 All 20 Experiences", query: "tell me about all 20 experiences of adyvka in engineering teaching and leadership" },
  { id: "count_proj", label: "🚀 18 Projects Catalog", query: "how many projects has adyvka worked on and what are they" },
  { id: "teaching_smpn25", label: "👨‍🏫 Pelatihan Guru SMPN 25", query: "ceritakan pengalaman adyvka melatih guru dan kepala sekolah di smpn 25 depok" },
  { id: "cs50", label: "🎓 Harvard CS50 Credential", query: "tell me about adyvka harvard cs50 certificate" },
  { id: "backpacker", label: "🌍 Solo Backpacker 3 Negara", query: "ceritakan pengalaman solo backpacker 3 negara singapura malaysia thailand" },
  { id: "databank", label: "⚡ Databank ERP (PT Intisel)", query: "tell me about databank erp project at pt intisel" },
  { id: "awards", label: "🏆 Juara Lomba Nasional", query: "apa saja prestasi juara lomba web design adyvka di pnbitc bali dan icomfest" },
  { id: "books", label: "📚 2 Published Books", query: "buku apa saja yang sudah ditulis dan diterbitkan oleh adyvka" },
  { id: "gpa", label: "🎓 Rapot 96/100 & Akademik", query: "berapa nilai rapot ipk adyvka dan pencapaian akademiknya" },
  { id: "stack", label: "🛠️ Tech Stack & Skills", query: "what is adyvka tech stack and engineering skills" },
  { id: "why_hire", label: "⭐ Kenapa Merekrut Adyvka", query: "mengapa harus merekrut adyvka dan apa keunggulannya" },
  { id: "cv", label: "📄 Unduh CV & Kontak", query: "bagaimana cara download cv dan menghubungi adyvka" },
];

export function detectLanguage(text) {
  if (!text || typeof text !== "string") return "id";
  const lower = text.toLowerCase().trim();

  // Strong Indonesian question openers & greetings
  const idOpeners = [
    "apa ", "apakah ", "siapa ", "siapakah ", "berapa ", "bagaimana ", "gimana ",
    "kenapa ", "mengapa ", "ceritakan ", "jelaskan ", "sebutkan ", "tolong ",
    "bisa ", "halo ", "hai ", "kapan ", "dimana ", "di mana ", "adakah ", "cara ",
    "dimanakah ", "ke mana ", "dari mana ", "asal ", "tentang ", "mau ", "tanya ",
    "minta ", "kasih ", "berikan ", "ada ", "sudahkah ", "pernahkah ",
    "assalamu", "selamat "
  ];
  if (idOpeners.some((prefix) => lower.startsWith(prefix))) {
    return "id";
  }

  // Strong English question openers & greetings
  const enOpeners = [
    "who ", "what ", "how ", "why ", "when ", "where ", "which ", "tell me ",
    "can you ", "could you ", "show me ", "list ", "explain ", "describe ",
    "is ", "are ", "do ", "does ", "did ", "hello ", "hi ", "hey ", "where is ",
    "where was ", "how old ", "how many ", "what is ", "who is ", "can adyvka ",
    "give me ", "download ", "view ", "show ", "tell ", "share ", "is he ",
    "can i ", "can we ", "where does ", "what are ", "who are ", "how much ",
    "current ", "national ", "academic ", "why should ", "why choose "
  ];
  if (enOpeners.some((prefix) => lower.startsWith(prefix))) {
    return "en";
  }

  const words = lower.replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
  if (words.length === 0) return "id";

  const ID_INDICATORS = new Set([
    "yang", "di", "ke", "dari", "ini", "itu", "dan", "atau", "untuk", "pada", "oleh",
    "ada", "tidak", "bukan", "sudah", "belum", "lagi", "bisa", "kamu", "anda", "dia",
    "beliau", "saya", "aku", "kami", "kita", "mereka", "projek", "proyek", "kerja",
    "pengalaman", "lomba", "juara", "sekolah", "kuliah", "jurusan", "rapot", "nilai",
    "buku", "tulis", "buat", "bikin", "ajar", "mengajar", "guru", "siswa", "murid",
    "tarif", "gaji", "biaya", "harga", "kelebihan", "keunggulan", "tentang", "kontak",
    "hubungi", "umur", "usia", "tahun", "domisili", "tinggal", "sertifikat", "prestasi",
    "seluruh", "pilar", "rekam", "jejak", "didapat", "dipelajari", "magang", "kasbon",
    "unduh", "cara", "minta", "dapat", "penghargaan", "dimana", "kemana", "darimana",
    "mana", "kapan", "siapa", "siapakah", "apa", "apakah", "kenapa", "mengapa",
    "bagaimana", "gimana", "berapa", "lahir", "kelahiran", "tempat", "asal", "asli",
    "orang", "halo", "hai", "dong", "sih", "ya", "kok", "nih", "tuh", "gak", "nggak",
    "ga", "udah", "udh", "dah", "blm", "tau", "tahu", "kasih", "tolong", "bener",
    "ingin", "mau", "punya", "bocoran", "tanya", "tanyakan", "jelaskan", "sebutkan",
    "ceritakan", "kenal", "gmn", "beneran", "nomor", "no", "wa", "telepon", "telp",
    "tlp", "hp", "surel", "alamat", "biodata", "profil", "biografi", "agama", "islam",
    "muslim", "keyakinan", "keluarga", "orangtua", "ayah", "ibu", "bapak", "saudara",
    "adik", "kakak", "teman", "hobi", "minat", "keahlian", "kemampuan", "skill",
    "karya", "portofolio", "porto", "tautan", "akun", "medsos", "sosmed", "depok",
    "bogor", "jakarta", "bandung", "indonesia", "jawa", "barat", "smk", "sma", "smp",
    "sd", "idn", "boarding", "santri", "pesantren", "organisasi", "osis", "panitia",
    "koordinator", "lulusan", "kelulusan", "rekrut", "merekrut", "alasan", "pilih",
    "memilih", "makasih", "makasi", "terimakasih", "terima", "keren", "mantap", "hebat",
    "top", "assalamualaikum", "assalamu", "alaikum"
  ]);

  const EN_INDICATORS = new Set([
    "the", "a", "an", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had",
    "do", "does", "did", "to", "of", "in", "for", "on", "with", "at", "by", "from",
    "about", "into", "through", "during", "before", "after", "and", "or", "but", "if",
    "this", "that", "these", "those", "i", "you", "he", "she", "it", "we", "they",
    "my", "your", "his", "her", "their", "our", "him", "project", "projects", "app", "apps",
    "application", "applications", "experience", "experiences", "work", "job", "jobs",
    "career", "teaching", "teach", "taught", "instructor", "mentor", "school", "schools",
    "gpa", "grade", "grades", "score", "scores", "academic", "book", "books", "award",
    "awards", "competition", "competitions", "won", "winner", "wins", "certificate",
    "certificates", "certification", "certifications", "credential", "credentials",
    "license", "licenses", "contact", "reach", "hire", "skills", "stack", "rate", "rates",
    "pricing", "fee", "fees", "cost", "costs", "charge", "charges", "charging", "remote",
    "hybrid", "available", "availability", "age", "old", "born", "birth", "birthday",
    "birthplace", "many", "much", "total", "count", "where", "when", "who", "whom", "what",
    "how", "why", "which", "tell", "show", "give", "can", "could", "would", "should",
    "will", "place", "city", "country", "living", "located", "based", "residence",
    "residing", "hometown", "details", "overview", "summary", "recommend", "hobbies",
    "hobby", "free", "time", "leisure", "vision", "goals", "goal", "plans", "aspirations",
    "faith", "religion", "family", "parents", "parent", "father", "mother", "dad", "mom",
    "sibling", "siblings", "brother", "sister", "download", "resume", "cv", "curriculum",
    "vitae", "thanks", "thank", "awesome", "great", "job", "impressive", "amazing",
    "fantastic", "brilliant", "technologies", "technology", "framework", "frameworks",
    "languages", "language", "code", "coding", "software", "developer", "engineer",
    "engineering", "internship", "intern", "contract", "freelance", "fulltime", "parttime",
    "open", "strengths", "strength", "choose", "help", "assist", "capabilities", "bot",
    "ai", "assistant", "national", "international", "championship", "profile", "account",
    "number", "email", "phone", "call", "whatsapp", "linkedin", "github", "instagram",
    "youtube", "tiktok", "social", "socials", "handle", "channel", "studies", "studied",
    "student", "authored", "author", "writer", "published", "publish", "solo", "backpacker",
    "backpacking", "survival", "leadership", "leader", "lead", "organize", "organizer",
    "event", "events", "current"
  ]);

  let idScore = 0;
  let enScore = 0;

  for (const w of words) {
    if (ID_INDICATORS.has(w)) idScore++;
    if (EN_INDICATORS.has(w)) enScore++;
  }

  if (enScore > idScore && enScore >= 1) return "en";
  if (idScore > enScore && idScore >= 1) return "id";

  const ID_EXCLUSIVE = new Set([
    "yang", "di", "ke", "dari", "ini", "itu", "dan", "atau", "untuk", "pada", "oleh",
    "ada", "tidak", "bukan", "sudah", "belum", "lagi", "bisa", "kamu", "anda", "dia",
    "beliau", "saya", "aku", "kami", "kita", "mereka", "dong", "sih", "ya", "kah", "pun",
    "udah", "udh", "dah", "blm", "tau", "tahu", "gimana", "gmn", "apa", "apakah", "siapa",
    "kenapa", "mengapa", "berapa", "kapan", "dimana", "mana", "kok", "nih", "tuh", "gak",
    "nggak", "ga", "makasih", "terimakasih", "alamat", "akun", "unduh", "minta", "ceritakan",
    "pengalaman", "proyek", "projek", "kerja", "lomba", "juara", "sekolah", "kuliah", "jurusan",
    "rapot", "nilai", "buku", "tulis", "buat", "bikin", "ajar", "mengajar", "guru", "tarif",
    "gaji", "biaya", "harga", "kelebihan", "keunggulan", "tentang", "kontak", "hubungi", "umur",
    "usia", "tahun", "domisili", "tinggal", "sertifikat", "prestasi", "lahir", "kelahiran",
    "tempat", "asal", "orangtua", "keluarga", "ayah", "ibu", "bapak", "saudara", "hobi",
    "minat", "cita", "impian", "tujuan", "bantu", "banget"
  ]);

  if (words.some((w) => ID_EXCLUSIVE.has(w))) {
    return "id";
  }

  if (enScore >= 1) return "en";

  const idAffixPattern = /^(me|ber|di|ter|pe|se)[a-z]+|[a-z]+(kan|an|nya|ku|mu|lah|kah)$/;
  if (words.some((w) => idAffixPattern.test(w) && !EN_INDICATORS.has(w))) {
    return "id";
  }

  // Default to Indonesian in ambiguous cases on this Indonesian portfolio
  if (enScore === 0) return "id";

  return "en";
}

const STOPWORDS = new Set([
  "adyvka", "rafif", "sava", "pratama", "dia", "ia", "beliau", "kamu", "anda", 
  "tentang", "dari", "oleh", "yang", "di", "ke", "dan", "adalah", "apakah", 
  "apa", "gimana", "bagaimana", "dong", "sih", "ya", "kah", "pun", "ada", 
  "ini", "itu", "seorang", "si", "pada", "untuk", "cara", "saja", "aja", 
  "banyak", "punya", "bisa", "tolong", "coba", "jelaskan", "sebutkan", "semua",
  "the", "is", "are", "was", "were", "be", "been", "has", "have", "had", "do",
  "does", "did", "tell", "me", "about", "can", "you", "what", "how", "who", "why",
  "where", "when", "which", "with", "for", "from", "and", "or", "but", "in", "on", "at"
]);

export function normalizeText(text) {
  if (!text || typeof text !== "string") return "";
  let clean = text.toLowerCase();
  clean = clean.replace(/[^a-z0-9\s]/g, " ");

  // Normalizations for contact, social, and communications
  clean = clean.replace(/\bwhatsapp\b/g, "whatsapp");
  clean = clean.replace(/\bno\s+wa\b/g, "whatsapp");
  clean = clean.replace(/\bnomor\s+wa\b/g, "whatsapp");
  clean = clean.replace(/\bwa\s+adyvka\b/g, "whatsapp");
  clean = clean.replace(/\bno\s+telepon\b/g, "telepon");
  clean = clean.replace(/\bnomor\s+telepon\b/g, "telepon");
  clean = clean.replace(/\bno\s+hp\b/g, "telepon");
  clean = clean.replace(/\bnomor\s+hp\b/g, "telepon");
  clean = clean.replace(/\bphone\s+number\b/g, "telepon");
  clean = clean.replace(/\bhandphone\b/g, "telepon");
  clean = clean.replace(/\btelp\b/g, "telepon");
  clean = clean.replace(/\btlp\b/g, "telepon");
  clean = clean.replace(/\bsurel\b/g, "email");
  clean = clean.replace(/\balamat\s+email\b/g, "email");
  clean = clean.replace(/\bakun\s+ig\b/g, "instagram");
  clean = clean.replace(/\blink\s+ig\b/g, "instagram");
  clean = clean.replace(/\bakun\s+yt\b/g, "youtube");
  clean = clean.replace(/\bchannel\s+youtube\b/g, "youtube");

  // Normalizations for greetings, appreciation, bot identity
  clean = clean.replace(/\bassalamu\s+alaikum\b/g, "halo");
  clean = clean.replace(/\bassalamualaikum\b/g, "halo");
  clean = clean.replace(/\bselamat\s+pagi\b/g, "halo");
  clean = clean.replace(/\bselamat\s+siang\b/g, "halo");
  clean = clean.replace(/\bselamat\s+sore\b/g, "halo");
  clean = clean.replace(/\bselamat\s+malam\b/g, "halo");
  clean = clean.replace(/\bgood\s+morning\b/g, "halo");
  clean = clean.replace(/\bgood\s+afternoon\b/g, "halo");
  clean = clean.replace(/\bgood\s+evening\b/g, "halo");
  clean = clean.replace(/\bterima\s+kasih\b/g, "terimakasih");
  clean = clean.replace(/\bmakasih\s+banyak\b/g, "terimakasih");
  clean = clean.replace(/\bthank\s+you\b/g, "terimakasih");
  clean = clean.replace(/\bthanks\s+a\s+lot\b/g, "terimakasih");
  clean = clean.replace(/\bkamu\s+siapa\b/g, "botidentity");
  clean = clean.replace(/\bsiapa\s+kamu\b/g, "botidentity");
  clean = clean.replace(/\bbot\s+apa\b/g, "botidentity");
  clean = clean.replace(/\basisten\s+apa\b/g, "botidentity");
  clean = clean.replace(/\bwho\s+are\s+you\b/g, "botidentity");
  clean = clean.replace(/\bwhat\s+can\s+you\s+do\b/g, "botidentity");

  // Normalizations for faith, religion, family, origins
  clean = clean.replace(/\bapa\s+agama\b/g, "agama");
  clean = clean.replace(/\bagama\s+apa\b/g, "agama");
  clean = clean.replace(/\bkeyakinan\b/g, "agama");
  clean = clean.replace(/\bkepercayaan\b/g, "agama");
  clean = clean.replace(/\borang\s+tua\b/g, "keluarga");
  clean = clean.replace(/\borangtua\b/g, "keluarga");
  clean = clean.replace(/\blatar\s+belakang\s+keluarga\b/g, "keluarga");
  clean = clean.replace(/\bmasa\s+kecil\b/g, "keluarga");
  clean = clean.replace(/\btempat\s+lahir\b/g, "lahir");
  clean = clean.replace(/\blahir\s+dimana\b/g, "lahir");
  clean = clean.replace(/\bdimana\s+lahir\b/g, "lahir");
  clean = clean.replace(/\btanggal\s+lahir\b/g, "lahir");
  clean = clean.replace(/\bkapan\s+lahir\b/g, "lahir");
  clean = clean.replace(/\btahun\s+lahir\b/g, "lahir");
  clean = clean.replace(/\bwhere\s+born\b/g, "lahir");
  clean = clean.replace(/\bwhere\s+was\s+born\b/g, "lahir");
  clean = clean.replace(/\btempat\s+tinggal\b/g, "domisili");
  clean = clean.replace(/\btinggal\s+dimana\b/g, "domisili");
  clean = clean.replace(/\bdimana\s+tinggal\b/g, "domisili");
  clean = clean.replace(/\basal\s+mana\b/g, "domisili");
  clean = clean.replace(/\bdari\s+mana\b/g, "domisili");

  // Normalizations for tech stack & languages
  clean = clean.replace(/\bbahasa\s+pemrograman\b/g, "bahasakoding");
  clean = clean.replace(/\bbahasa\s+koding\b/g, "bahasakoding");
  clean = clean.replace(/\bprogramming\s+language\b/g, "bahasakoding");
  clean = clean.replace(/\bprogramming\s+languages\b/g, "bahasakoding");
  clean = clean.replace(/\bfront\s+end\b/g, "frontend");
  clean = clean.replace(/\bback\s+end\b/g, "backend");
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
  clean = clean.replace(/\bgajinya\b/g, "tarif");
  clean = clean.replace(/\bharganya\b/g, "tarif");
  clean = clean.replace(/\bbiayanya\b/g, "tarif");
  clean = clean.replace(/\bfeenya\b/g, "tarif");
  clean = clean.replace(/\bratenya\b/g, "tarif");
  clean = clean.replace(/\bpricing\b/g, "tarif");
  clean = clean.replace(/\brates?\b/g, "tarif");
  clean = clean.replace(/\bunduh\s+cv\b/g, "cv");
  clean = clean.replace(/\bdownload\s+cv\b/g, "cv");
  clean = clean.replace(/\bminta\s+cv\b/g, "cv");
  clean = clean.replace(/\bunduh\s+resume\b/g, "cv");
  clean = clean.replace(/\bdownload\s+resume\b/g, "cv");

  // =========================================================================
  // EXTENSIVE ENGLISH SYNONYMS & NORMALIZATION
  // =========================================================================

  // English Greetings & Gratitude
  clean = clean.replace(/\bthank\s+you\s+so\s+much\b/g, "terimakasih");
  clean = clean.replace(/\bthank\s+you\s+very\s+much\b/g, "terimakasih");
  clean = clean.replace(/\bthanks\s+a\s+lot\b/g, "terimakasih");
  clean = clean.replace(/\bthank\s+you\b/g, "terimakasih");
  clean = clean.replace(/\bmany\s+thanks\b/g, "terimakasih");
  clean = clean.replace(/\bmuch\s+appreciated\b/g, "terimakasih");
  clean = clean.replace(/\bappreciate\s+it\b/g, "terimakasih");
  clean = clean.replace(/\bcheers\b/g, "terimakasih");
  clean = clean.replace(/\bawesome\s+job\b/g, "terimakasih");
  clean = clean.replace(/\bgreat\s+job\b/g, "terimakasih");
  clean = clean.replace(/\bgood\s+job\b/g, "terimakasih");
  clean = clean.replace(/\bwell\s+done\b/g, "terimakasih");
  clean = clean.replace(/\bimpressive\s+work\b/g, "terimakasih");
  clean = clean.replace(/\bawesome\b/g, "terimakasih");
  clean = clean.replace(/\bamazing\b/g, "terimakasih");
  clean = clean.replace(/\bfantastic\b/g, "terimakasih");
  clean = clean.replace(/\bbrilliant\b/g, "terimakasih");

  // English Bot Identity
  clean = clean.replace(/\bwho\s+are\s+you\b/g, "botidentity");
  clean = clean.replace(/\bwhat\s+are\s+you\b/g, "botidentity");
  clean = clean.replace(/\bwhat\s+is\s+your\s+name\b/g, "botidentity");
  clean = clean.replace(/\bwho\s+made\s+you\b/g, "botidentity");
  clean = clean.replace(/\bwho\s+created\s+you\b/g, "botidentity");
  clean = clean.replace(/\bwhat\s+can\s+you\s+do\b/g, "botidentity");
  clean = clean.replace(/\bhow\s+can\s+you\s+help\b/g, "botidentity");
  clean = clean.replace(/\bhow\s+can\s+you\s+assist\b/g, "botidentity");
  clean = clean.replace(/\bwhat\s+are\s+your\s+capabilities\b/g, "botidentity");
  clean = clean.replace(/\bwhat\s+can\s+i\s+ask\b/g, "botidentity");

  // English Contact, Social & Reach Out
  clean = clean.replace(/\bhow\s+can\s+i\s+contact\b/g, "kontak");
  clean = clean.replace(/\bhow\s+to\s+contact\b/g, "kontak");
  clean = clean.replace(/\bhow\s+can\s+i\s+reach\b/g, "kontak");
  clean = clean.replace(/\bhow\s+to\s+reach\b/g, "kontak");
  clean = clean.replace(/\bget\s+in\s+touch\b/g, "kontak");
  clean = clean.replace(/\breach\s+out\b/g, "kontak");
  clean = clean.replace(/\bcontact\s+info\b/g, "kontak");
  clean = clean.replace(/\bcontact\s+information\b/g, "kontak");
  clean = clean.replace(/\bcontact\s+details\b/g, "kontak");
  clean = clean.replace(/\bwhatsapp\s+number\b/g, "whatsapp");
  clean = clean.replace(/\bwa\s+number\b/g, "whatsapp");
  clean = clean.replace(/\bchat\s+on\s+whatsapp\b/g, "whatsapp");
  clean = clean.replace(/\bphone\s+number\b/g, "telepon");
  clean = clean.replace(/\btelephone\s+number\b/g, "telepon");
  clean = clean.replace(/\bcell\s+phone\b/g, "telepon");
  clean = clean.replace(/\bmobile\s+number\b/g, "telepon");
  clean = clean.replace(/\bemail\s+address\b/g, "email");
  clean = clean.replace(/\bsend\s+email\b/g, "email");
  clean = clean.replace(/\bdrop\s+an\s+email\b/g, "email");
  clean = clean.replace(/\bgithub\s+account\b/g, "kontak github");
  clean = clean.replace(/\bgithub\s+profile\b/g, "kontak github");
  clean = clean.replace(/\bgithub\s+link\b/g, "kontak github");
  clean = clean.replace(/\bhis\s+github\b/g, "kontak github");
  clean = clean.replace(/\blinkedin\s+account\b/g, "kontak linkedin");
  clean = clean.replace(/\blinkedin\s+profile\b/g, "kontak linkedin");
  clean = clean.replace(/\blinkedin\s+link\b/g, "kontak linkedin");
  clean = clean.replace(/\bhis\s+linkedin\b/g, "kontak linkedin");
  clean = clean.replace(/\binstagram\s+profile\b/g, "kontak instagram");
  clean = clean.replace(/\binstagram\s+account\b/g, "kontak instagram");
  clean = clean.replace(/\bhis\s+instagram\b/g, "kontak instagram");
  clean = clean.replace(/\byoutube\s+channel\b/g, "kontak youtube");
  clean = clean.replace(/\bhis\s+youtube\b/g, "kontak youtube");
  clean = clean.replace(/\btiktok\s+account\b/g, "kontak tiktok");
  clean = clean.replace(/\bhis\s+tiktok\b/g, "kontak tiktok");
  clean = clean.replace(/\bsocial\s+media\b/g, "kontak");
  clean = clean.replace(/\bsocial\s+profiles?\b/g, "kontak");
  clean = clean.replace(/\bsocials\b/g, "kontak");

  // English Resume / CV
  clean = clean.replace(/\bdownload\s+cv\b/g, "cv");
  clean = clean.replace(/\bdownload\s+resume\b/g, "cv");
  clean = clean.replace(/\bget\s+cv\b/g, "cv");
  clean = clean.replace(/\bget\s+resume\b/g, "cv");
  clean = clean.replace(/\bview\s+cv\b/g, "cv");
  clean = clean.replace(/\bview\s+resume\b/g, "cv");
  clean = clean.replace(/\bcurriculum\s+vitae\b/g, "cv");
  clean = clean.replace(/\bpdf\s+resume\b/g, "cv");
  clean = clean.replace(/\bcv\s+pdf\b/g, "cv");

  // English Birth, Age, Origins & Domicile
  clean = clean.replace(/\bwhere\s+was\s+(?:adyvka\s+|he\s+)?born\b/g, "lahir");
  clean = clean.replace(/\bwhere\s+is\s+he\s+born\b/g, "lahir");
  clean = clean.replace(/\bplace\s+of\s+birth\b/g, "lahir");
  clean = clean.replace(/\bbirth\s+place\b/g, "lahir");
  clean = clean.replace(/\bbirthplace\b/g, "lahir");
  clean = clean.replace(/\bbirth\s+city\b/g, "lahir");
  clean = clean.replace(/\bnative\s+city\b/g, "lahir");
  clean = clean.replace(/\bhow\s+old\s+is\s+(?:he|adyvka)\b/g, "umur");
  clean = clean.replace(/\bwhat\s+is\s+his\s+age\b/g, "umur");
  clean = clean.replace(/\bwhen\s+was\s+(?:he|adyvka)\s+born\b/g, "lahir umur");
  clean = clean.replace(/\bdate\s+of\s+birth\b/g, "lahir umur");
  clean = clean.replace(/\bbirth\s+date\b/g, "lahir umur");
  clean = clean.replace(/\byear\s+of\s+birth\b/g, "lahir umur");
  clean = clean.replace(/\bbirth\s+year\b/g, "lahir umur");
  clean = clean.replace(/\bwhere\s+does\s+(?:he|adyvka)\s+live\b/g, "domisili");
  clean = clean.replace(/\bwhere\s+is\s+(?:he|adyvka)\s+located\b/g, "domisili");
  clean = clean.replace(/\bwhere\s+is\s+(?:he|adyvka)\s+based\b/g, "domisili");
  clean = clean.replace(/\bwhat\s+city\s+is\s+he\s+from\b/g, "domisili");
  clean = clean.replace(/\bcurrent\s+residence\b/g, "domisili");
  clean = clean.replace(/\bcurrent\s+location\b/g, "domisili");
  clean = clean.replace(/\bcity\s+of\s+residence\b/g, "domisili");
  clean = clean.replace(/\bwhere\s+is\s+his\s+home\b/g, "domisili");
  clean = clean.replace(/\bresidence\b/g, "domisili");
  clean = clean.replace(/\bresiding\b/g, "domisili");
  clean = clean.replace(/\bhometown\b/g, "domisili");

  // English Faith & Family
  clean = clean.replace(/\bwhat\s+is\s+his\s+religion\b/g, "agama");
  clean = clean.replace(/\bwhat\s+religion\b/g, "agama");
  clean = clean.replace(/\bwhat\s+is\s+his\s+faith\b/g, "agama");
  clean = clean.replace(/\bis\s+he\s+muslim\b/g, "agama");
  clean = clean.replace(/\breligious\s+beliefs?\b/g, "agama");
  clean = clean.replace(/\bspiritual\s+beliefs?\b/g, "agama");
  clean = clean.replace(/\btell\s+me\s+about\s+his\s+family\b/g, "keluarga");
  clean = clean.replace(/\bwho\s+are\s+his\s+parents\b/g, "keluarga");
  clean = clean.replace(/\bhis\s+family\b/g, "keluarga");
  clean = clean.replace(/\bfather\s+and\s+mother\b/g, "keluarga");
  clean = clean.replace(/\bhis\s+parents\b/g, "keluarga");
  clean = clean.replace(/\bdoes\s+he\s+have\s+siblings\b/g, "keluarga");
  clean = clean.replace(/\bhis\s+siblings\b/g, "keluarga");
  clean = clean.replace(/\bchildhood\s+background\b/g, "keluarga");
  clean = clean.replace(/\bupbringing\b/g, "keluarga");
  clean = clean.replace(/\bfather\b/g, "keluarga");
  clean = clean.replace(/\bmother\b/g, "keluarga");
  clean = clean.replace(/\bparents?\b/g, "keluarga");
  clean = clean.replace(/\bsiblings?\b/g, "keluarga");
  clean = clean.replace(/\bbrothers?\b/g, "keluarga");
  clean = clean.replace(/\bsisters?\b/g, "keluarga");

  // English Projects & Applications
  clean = clean.replace(/\bhow\s+many\s+projects\b/g, "jumlahproyek");
  clean = clean.replace(/\bhow\s+many\s+apps\b/g, "jumlahproyek");
  clean = clean.replace(/\bhow\s+many\s+applications\b/g, "jumlahproyek");
  clean = clean.replace(/\bnumber\s+of\s+projects\b/g, "jumlahproyek");
  clean = clean.replace(/\btotal\s+projects\b/g, "jumlahproyek");
  clean = clean.replace(/\btotal\s+apps\b/g, "jumlahproyek");
  clean = clean.replace(/\blist\s+all\s+projects\b/g, "katalogproyek");
  clean = clean.replace(/\blist\s+projects\b/g, "katalogproyek");
  clean = clean.replace(/\bshow\s+all\s+projects\b/g, "katalogproyek");
  clean = clean.replace(/\bshow\s+projects\b/g, "katalogproyek");
  clean = clean.replace(/\bwhat\s+applications\s+has\s+he\s+built\b/g, "katalogproyek");
  clean = clean.replace(/\bwhat\s+apps\s+has\s+he\s+built\b/g, "katalogproyek");
  clean = clean.replace(/\bwhat\s+projects\s+has\s+he\s+built\b/g, "katalogproyek");
  clean = clean.replace(/\bwhat\s+has\s+he\s+built\b/g, "katalogproyek");
  clean = clean.replace(/\ball\s+projects\b/g, "katalogproyek");
  clean = clean.replace(/\bproject\s+catalog\b/g, "katalogproyek");
  clean = clean.replace(/\bproject\s+list\b/g, "katalogproyek");
  clean = clean.replace(/\bapplications?\b/g, "proyek");
  clean = clean.replace(/\bapps?\b/g, "proyek");
  clean = clean.replace(/\bbuilt\b/g, "buat");
  clean = clean.replace(/\bcreated\b/g, "buat");
  clean = clean.replace(/\bdeveloped\b/g, "buat");

  // English Tech Stack & Skills
  clean = clean.replace(/\bwhat\s+is\s+his\s+tech\s+stack\b/g, "techstack");
  clean = clean.replace(/\btech\s+stack\b/g, "techstack");
  clean = clean.replace(/\bwhat\s+technologies\s+does\s+he\s+use\b/g, "techstack");
  clean = clean.replace(/\btechnologies\s+used\b/g, "techstack");
  clean = clean.replace(/\bwhat\s+frameworks\s+does\s+he\s+master\b/g, "techstack");
  clean = clean.replace(/\bframeworks\s+used\b/g, "techstack");
  clean = clean.replace(/\bwhat\s+programming\s+languages\b/g, "techstack");
  clean = clean.replace(/\bprogramming\s+languages?\b/g, "techstack");
  clean = clean.replace(/\bcoding\s+languages?\b/g, "techstack");
  clean = clean.replace(/\bdeveloper\s+skills\b/g, "techstack");
  clean = clean.replace(/\btechnical\s+skills\b/g, "techstack");
  clean = clean.replace(/\btechnologies\b/g, "teknologi");
  clean = clean.replace(/\btechnology\b/g, "teknologi");
  clean = clean.replace(/\bframeworks?\b/g, "framework");

  // English Rates, Pricing & Availability
  clean = clean.replace(/\bhow\s+much\s+does\s+he\s+charge\b/g, "tarif");
  clean = clean.replace(/\bwhat\s+are\s+his\s+rates\b/g, "tarif");
  clean = clean.replace(/\bwhat\s+does\s+he\s+charge\b/g, "tarif");
  clean = clean.replace(/\bhourly\s+rate\b/g, "tarif");
  clean = clean.replace(/\bservice\s+fee\b/g, "tarif");
  clean = clean.replace(/\bservice\s+cost\b/g, "tarif");
  clean = clean.replace(/\bpricing\s+model\b/g, "tarif");
  clean = clean.replace(/\bproject\s+price\b/g, "tarif");
  clean = clean.replace(/\bcost\s+of\s+service\b/g, "tarif");
  clean = clean.replace(/\bcharge\b/g, "tarif");
  clean = clean.replace(/\bcharges\b/g, "tarif");
  clean = clean.replace(/\bcharging\b/g, "tarif");
  clean = clean.replace(/\bcost\b/g, "tarif");
  clean = clean.replace(/\bcosts\b/g, "tarif");
  clean = clean.replace(/\bfee\b/g, "tarif");
  clean = clean.replace(/\bfees\b/g, "tarif");
  clean = clean.replace(/\bis\s+he\s+available\b/g, "ketersediaankerja");
  clean = clean.replace(/\bwork\s+availability\b/g, "ketersediaankerja");
  clean = clean.replace(/\bopen\s+to\s+work\b/g, "ketersediaankerja");
  clean = clean.replace(/\bfreelance\s+availability\b/g, "ketersediaankerja");
  clean = clean.replace(/\bavailable\s+for\s+freelance\b/g, "ketersediaankerja");
  clean = clean.replace(/\bcan\s+i\s+hire\s+him\b/g, "ketersediaankerja");
  clean = clean.replace(/\bhire\s+full\s*time\b/g, "ketersediaankerja");
  clean = clean.replace(/\bhire\s+part\s*time\b/g, "ketersediaankerja");
  clean = clean.replace(/\bfull\s*time\b/g, "fulltime");
  clean = clean.replace(/\bpart\s*time\b/g, "parttime");
  clean = clean.replace(/\bavailability\b/g, "ketersediaankerja");

  // English Strengths & Why Hire
  clean = clean.replace(/\bwhy\s+should\s+i\s+hire\b/g, "kelebihan hire");
  clean = clean.replace(/\bwhy\s+hire\s+(?:adyvka|him)\b/g, "kelebihan hire");
  clean = clean.replace(/\bwhy\s+choose\s+(?:adyvka|him)\b/g, "kelebihan hire");
  clean = clean.replace(/\bcore\s+strengths\b/g, "kelebihan");
  clean = clean.replace(/\bkey\s+strengths\b/g, "kelebihan");
  clean = clean.replace(/\bcompetitive\s+edge\b/g, "kelebihan");
  clean = clean.replace(/\breasons\s+to\s+hire\b/g, "kelebihan hire");
  clean = clean.replace(/\bwhat\s+makes\s+him\s+unique\b/g, "kelebihan");
  clean = clean.replace(/\bvalue\s+proposition\b/g, "kelebihan");

  // English Hobbies & Free Time
  clean = clean.replace(/\bwhat\s+does\s+he\s+do\s+in\s+his\s+free\s+time\b/g, "hobi");
  clean = clean.replace(/\bfree\s+time\b/g, "hobi");
  clean = clean.replace(/\bspare\s+time\b/g, "hobi");
  clean = clean.replace(/\bleisure\s+activities\b/g, "hobi");
  clean = clean.replace(/\bleisure\b/g, "hobi");
  clean = clean.replace(/\bpassions\b/g, "hobi");
  clean = clean.replace(/\bhobbies\b/g, "hobi");
  clean = clean.replace(/\bhobby\b/g, "hobi");
  clean = clean.replace(/\binterests?\b/g, "hobi");

  // English Vision & Goals
  clean = clean.replace(/\bfuture\s+goals\b/g, "visi");
  clean = clean.replace(/\bcareer\s+vision\b/g, "visi");
  clean = clean.replace(/\bcareer\s+goals\b/g, "visi");
  clean = clean.replace(/\bfuture\s+plans\b/g, "visi");
  clean = clean.replace(/\bengineering\s+aspirations\b/g, "visi");
  clean = clean.replace(/\blong\s+term\s+vision\b/g, "visi");
  clean = clean.replace(/\baspirations?\b/g, "visi");
  clean = clean.replace(/\bvisions?\b/g, "visi");
  clean = clean.replace(/\bgoals?\b/g, "visi");

  // English Academics, GPA & School
  clean = clean.replace(/\bwhat\s+is\s+his\s+gpa\b/g, "rapot");
  clean = clean.replace(/\bwhat\s+are\s+his\s+grades\b/g, "rapot");
  clean = clean.replace(/\bacademic\s+scores?\b/g, "rapot");
  clean = clean.replace(/\breport\s+card\b/g, "rapot");
  clean = clean.replace(/\bacademic\s+standing\b/g, "rapot");
  clean = clean.replace(/\bacademic\s+records?\b/g, "rapot");
  clean = clean.replace(/\bgrades?\b/g, "rapot");
  clean = clean.replace(/\bscores?\b/g, "rapot");
  clean = clean.replace(/\bwhere\s+did\s+he\s+study\b/g, "sekolah");
  clean = clean.replace(/\bwhat\s+school\b/g, "sekolah");
  clean = clean.replace(/\bvocational\s+high\s+school\b/g, "sekolah smk");
  clean = clean.replace(/\bwhat\s+is\s+his\s+major\b/g, "sekolah jurusan");
  clean = clean.replace(/\bfield\s+of\s+study\b/g, "sekolah jurusan");
  clean = clean.replace(/\bhigh\s+schools?\b/g, "sekolah");

  // English Awards & Competitions
  clean = clean.replace(/\bnational\s+competitions?\s+won\b/g, "lomba");
  clean = clean.replace(/\bawards?\s+won\b/g, "lomba");
  clean = clean.replace(/\bcompetitions?\s+won\b/g, "lomba");
  clean = clean.replace(/\bchampionships?\s+won\b/g, "lomba");
  clean = clean.replace(/\bnational\s+awards?\b/g, "lomba");
  clean = clean.replace(/\bchampionships?\b/g, "lomba");
  clean = clean.replace(/\bcompetitions?\b/g, "lomba");
  clean = clean.replace(/\bawards?\b/g, "lomba");
  clean = clean.replace(/\btrophies\b/g, "lomba");
  clean = clean.replace(/\btrophy\b/g, "lomba");

  // English Certificates & Books
  clean = clean.replace(/\bhow\s+many\s+certificates\b/g, "sertifikat");
  clean = clean.replace(/\btotal\s+certificates\b/g, "sertifikat");
  clean = clean.replace(/\blist\s+certificates\b/g, "sertifikat");
  clean = clean.replace(/\bverified\s+credentials\b/g, "sertifikat");
  clean = clean.replace(/\bcredentials?\b/g, "sertifikat");
  clean = clean.replace(/\blicenses?\b/g, "sertifikat");
  clean = clean.replace(/\bhas\s+he\s+published\s+(?:any\s+)?books?\b/g, "buku");
  clean = clean.replace(/\bwhat\s+books\s+has\s+he\s+written\b/g, "buku");
  clean = clean.replace(/\bbooks?\s+authored\b/g, "buku");
  clean = clean.replace(/\bpublished\s+books?\b/g, "buku");
  clean = clean.replace(/\bpublished\s+author\b/g, "buku");

  return clean.split(/\s+/).filter(Boolean).join(" ");
}

export const KNOWLEDGE_REGISTRY = {
  PT_ARDYANDA_DETAIL: {
    id: {
      title: `Pengalaman Kerja di PT Ardyanda Digital Inovasi (Full Stack Intern)`,
      text: `**Magang Full Stack Developer di PT Ardyanda Digital Inovasi**

Pengalaman magang korporat satu tahun penuh (Juli 2026 – Januari 2027) di PT Ardyanda Digital Inovasi (Software Engineering & Digital Solutions):

* **Proses Rekrutmen 5 Tahap:** Terpilih melalui seleksi kompetitif magang wajib kelas 12 SMK setelah satu bulan melamar massal dan melalui 5 putaran wawancara ketat menguji ketahanan mental dan fondasi rekayasa perangkat lunak.
* **Perkembangan Peran (Backend ke Full Stack):** Awalnya direkrut sebagai Backend Developer Intern. Karena kecepatan belajar tinggi dan selalu menuntaskan tugas sebelum tenggat waktu, dengan cepat dipromosikan memegang tanggung jawab Full Stack Developer lintas frontend, backend, dan komunikasi klien.
* **Rekayasa Sistem Finansial Internal:**
  * **Sistem Payroll Presisi 100%:** Mengotomasi kalkulasi penggajian bulanan dengan validasi matematis ketat bebas selisih hitung, terintegrasi absensi dan tunjangan variabel.
  * **Mesin Kasbon Karyawan:** Merancang sistem pinjaman/kasbon (cash advance) dengan alur persetujuan bertingkat (multi-level approvals) dan pemotongan saldo otomatis.
  * **Buku Kas Umum:** Membangun pencatatan akuntansi dan arus kas masuk/keluar untuk visibilitas keuangan perusahaan secara real-time.
* **Proyek Klien Multi-Sektor:**
  * **Platform Rumah Sakit/Kesehatan:** Mengembangkan modul administrasi pasien dan alur informasi medis.
  * **ERP Manajemen Masjid:** Mendigitalkan jadwal operasional, wakaf, dan pencatatan keuangan komunitas.
  * **Modular CMS:** Membangun antarmuka dashboard untuk mempermudah staf non-teknis klien mengelola konten web dengan aman.
* **Peran Komunikasi & Kepemimpinan Budaya:**
  * Mewakili tim engineering dalam stakeholder meetings bersama klien untuk menerjemahkan kebutuhan bisnis menjadi spesifikasi teknis.
  * Dipercaya menjadi Master of Ceremonies (MC) dan panitia inti perayaan HUT Kemerdekaan RI di hadapan jajaran pimpinan dan dewan direksi perusahaan.
* **Nilai & Pembelajaran Nyata:** Tidak pernah membatasi diri dengan label 'anak magang', cepat beradaptasi dengan stack baru, serta membuktikan bahwa kemampuan komunikasi publik melipatgandakan nilai seorang software engineer.`,
      links: [
        {
                "label": "Detail Pengalaman PT Ardyanda",
                "url": "/experience/pt-ardyanda-digital-inovasi-full-stack-developer-internship"
        }
],
    },
    en: {
      title: `Full Stack Internship at PT Ardyanda Digital Inovasi`,
      text: `**Full Stack Developer Internship at PT Ardyanda Digital Inovasi**

A mandatory 1-year corporate vocational internship (Jul 2026 – Jan 2027) at PT Ardyanda Digital Inovasi (Software Engineering & Digital Solutions):

* **Rigorous 5-Round Selection:** Placed after a month of nationwide mass applications and 5 intensive interview rounds testing technical foundation and resilience.
* **Role Expansion (Backend to Full Stack):** Originally hired as Backend Intern, rapidly elevated to Full Stack Developer within weeks due to high learning velocity and delivering ahead of schedule.
* **Internal Enterprise Financial Suite:**
  * **100% Payroll Precision:** Automated monthly payroll calculation factoring attendance, allowances, and tax withholding without ledger discrepancies.
  * **Employee Cash Advance Engine:** Architected loan disbursement workflows with multi-level approvals and automated balance deductions.
  * **General Accounting Ledger:** Built real-time cash flow visibility and financial audit trails.
* **Multi-Domain Client Platforms:**
  * **Healthcare Management:** Developed clinical records and patient administration modules.
  * **Mosque ERP System:** Digitized community operational schedules, endowments, and financial transparency.
  * **Modular CMS:** Structured dynamic administration dashboards for client non-technical teams.
* **Client Representation & Cultural Leadership:**
  * Represented the engineering team in client stakeholder syncs to convert business needs into technical architecture.
  * Appointed Master of Ceremonies (MC) for corporate Independence Day celebrations before C-level executives.
* **Core Takeaways:** Refusing to let an 'intern' title limit initiative, mastering unfamiliar technology on the fly, and compounding engineering impact through executive communication.`,
      links: [
        {
                "label": "PT Ardyanda Full Experience Details",
                "url": "/experience/pt-ardyanda-digital-inovasi-full-stack-developer-internship"
        }
],
    },
  },
  PT_INTISEL_DETAIL: {
    id: {
      title: `Pengalaman Kerja di PT Intisel Prodaktifakom (Lead Systems Engineer & PM Databank ERP)`,
      text: `**PT Intisel Prodaktifakom: Lead Systems Engineer & Project Manager Databank ERP**

Di PT Intisel Prodaktifakom, Adyvka memimpin perancangan dan implementasi Databank ERP, sistem audit infrastruktur telekomunikasi skala enterprise:

* **Kepemimpinan Tim:** Memimpin 4 software engineer (2 backend dan 2 frontend) dari tahap penentuan spesifikasi arsitektur hingga produksi rilis.
* **Otomasi Huawei ISDP Web Scraping Bot:** Mengembangkan bot otomatisasi menggunakan Python dan browser automation untuk menarik data survei site menara telekomunikasi dari portal Huawei ISDP, mengeliminasi pekerjaan rekap manual berjam-jam menjadi beberapa detik.
* **Digital Approval 3 Tahap:** Merancang alur persetujuan audit berjenjang (Auditor Lapangan → Quality Controller → Project Manager) dengan validasi foto geolokasi dan tanda tangan digital.
* **Skala & Keandalan Operasional:** Menangani data survei lebih dari 1.000 site BTS di seluruh Indonesia dengan jaminan ketersediaan sistem 99.8% uptime.
* **Arsitektur Teknis:** Next.js, TypeScript, PostgreSQL, Prisma ORM, Redis Caching, Docker containerization, dan REST API terproteksi JWT serta Role-Based Access Control (RBAC).`,
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
      title: `Lead Systems Engineer & Project Manager at PT Intisel Prodaktifakom`,
      text: `**PT Intisel Prodaktifakom: Lead Systems Engineer & Databank ERP Project Manager**

At PT Intisel Prodaktifakom, Adyvka directed the end-to-end architecture and rollout of Databank ERP, an enterprise telecommunications infrastructure audit platform:

* **Engineering Team Leadership:** Led a squad of 4 software engineers across frontend and backend lifecycles.
* **Huawei ISDP Automated Scraping Bot:** Built high-throughput Python automation to extract telecom site survey files directly from Huawei ISDP, reducing manual reporting from hours to seconds.
* **3-Tier Digital Approval Workflow:** Structured sequential verification checkpoints (Field Auditor → QC Specialist → Project Manager) with geographic coordinate checks and digital signoffs.
* **Production Scale & Reliability:** Processed field audit telemetry across 1,000+ cellular base stations across Indonesia with 99.8% SLA availability.
* **Architecture Stack:** Next.js, TypeScript, PostgreSQL, Prisma ORM, Redis caching, Docker containerization, and granular RBAC authorization.`,
      links: [
        {
                "label": "PT Intisel Full Experience Details",
                "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
        },
        {
                "label": "Databank ERP System Case Study",
                "url": "/projects/databank"
        }
],
    },
  },
  CV_RICHO_BAHARI_DETAIL: {
    id: {
      title: `Pengalaman Kerja di CV. Richo Bahari (Frontend Developer & UI/UX Architect)`,
      text: `**CV. Richo Bahari: Frontend Developer & UI/UX Architect**

Adyvka merancang dan mengimplementasikan portal platform korporat interaktif untuk CV. Richo Bahari (General Contractor & Industrial Services):

* **Katalog Layanan Industri Berat:** Merancang presentasi visual untuk pekerjaan konstruksi sipil, mechanical electrical plumbing (MEP), fabrikasi baja, dan industrial warehouse racking.
* **Kepatuhan Standar Keselamatan:** Mengintegrasikan dokumentasi kepatuhan keselamatan kerja K3 (Zero Accident Policy) dan sertifikasi manajemen mutu ISO 9001:2015 ke dalam presentasi digital klien.
* **Optimasi Performa Web Modern:** Dibangun menggunakan Next.js 16, React 19, Tailwind CSS v4, dan React Compiler, menghasilkan skor performa Google Lighthouse 99/100 dengan sub-second latency.
* **SEO & Static Site Generation (SSG):** Menerapkan optimasi metadata dan OpenGraph untuk memperkuat visibilitas profil perusahaan kontraktor di mesin pencari industri.`,
      links: [
        {
                "label": "Detail Pengalaman CV Richo Bahari",
                "url": "/experience/cv-richo-bahari-frontend-developer-freelance"
        },
        {
                "label": "Studi Kasus Web Richo Bahari",
                "url": "/projects/richobahari"
        }
],
    },
    en: {
      title: `Frontend Developer & UI/UX Architect at CV. Richo Bahari`,
      text: `**CV. Richo Bahari: Frontend Developer & UI/UX Architect**

Adyvka engineered the corporate industrial platform and digital asset portfolio for CV. Richo Bahari (General Contractor & Industrial Services):

* **Industrial Engineering Catalog:** Visualized civil engineering, structural steel fabrication, MEP installations, and heavy industrial racking systems.
* **Safety & Compliance Integration:** Highlighted occupational health and safety protocols (K3 Zero Accident) alongside ISO 9001:2015 quality assurance certifications.
* **Ultra-Fast Performance:** Built on Next.js 16, React 19, Tailwind CSS v4, and React Compiler, clocking 99/100 Lighthouse ratings with sub-second page loads.
* **Search Engine Visibility:** Engineered clean semantic HTML and automated SSG routines to capture enterprise B2B contractor procurement queries.`,
      links: [
        {
                "label": "CV Richo Bahari Experience",
                "url": "/experience/cv-richo-bahari-frontend-developer-freelance"
        },
        {
                "label": "Richo Bahari Platform Case Study",
                "url": "/projects/richobahari"
        }
],
    },
  },
  KEPK_UMJ_DETAIL: {
    id: {
      title: `Pengalaman Kerja Kontrak di FK Universitas Muhammadiyah Jakarta (SIM KEPK)`,
      text: `**Fakultas Kedokteran UMJ: Full Stack Engineer Sistem Klirens Etik KEPK**

Adyvka dipercaya mengarsiteki dan membangun sistem informasi tata kelola etik riset kesehatan (SIM KEPK) untuk Komite Etik Penelitian Kesehatan Fakultas Kedokteran Universitas Muhammadiyah Jakarta:

* **Kepatuhan Standar Internasional:** Sistem dirancang sesuai pedoman regulasi etik riset kesehatan dunia WHO dan CIOMS 2016.
* **Alur Multi-Reviewer Otomatis:** Mengotomasi alur penugasan protokol penelitian kepada reviewer independen, pencatatan revisi, dan penentuan keputusan etik (Exempted, Expedited, Full Board).
* **Penerbitan Sertifikat Klirens Digital:** Menghasilkan dokumen sertifikat persetujuan etik digital resmi ber-QR Code dengan verifikasi keabsahan instan.
* **Keamanan Data & Privasi Medis:** Menerapkan otentikasi multi-faktor (2FA) Fortify, Role-Based Access Control Spatie, dan enkripsi data protokol riset klinis.
* **Teknologi:** Laravel 12, PHP 8.2, Tailwind CSS v4, MySQL, DomPDF, dan infrastruktur cloud AWS.`,
      links: [
        {
                "label": "Detail Pengalaman FK UMJ",
                "url": "/experience/universitas-muhammadiyah-jakarta-full-stack-engineer-contract"
        },
        {
                "label": "Studi Kasus Sistem KEPK UMJ",
                "url": "/projects/kepk"
        }
],
    },
    en: {
      title: `Full Stack Engineer Contract at Faculty of Medicine UMJ (SIM KEPK)`,
      text: `**Faculty of Medicine UMJ: Full Stack Engineer for Research Ethics Governance**

Adyvka architected and delivered the centralized ethical clearance evaluation platform (SIM KEPK) for the Health Research Ethics Committee of Universitas Muhammadiyah Jakarta:

* **WHO & CIOMS 2016 Compliance:** Engineered workflow logic strictly complying with international medical research standards.
* **Automated Multi-Tier Review:** Built automated reviewer routing, blinded evaluations, revision logs, and protocol decision engines.
* **Digital Clearance Issuance:** Automated certified PDF issuance featuring cryptographic verification and tamper-evident QR codes.
* **Enterprise Security & Privacy:** Integrated Laravel Fortify 2FA, granular Spatie RBAC, and sanitized document storage for clinical proposals.
* **Core Tech Stack:** Laravel 12, PHP 8.2, Tailwind CSS v4, MySQL, DomPDF, and AWS cloud hosting.`,
      links: [
        {
                "label": "FK UMJ Full Experience Details",
                "url": "/experience/universitas-muhammadiyah-jakarta-full-stack-engineer-contract"
        },
        {
                "label": "SIM KEPK Governance Platform Case Study",
                "url": "/projects/kepk"
        }
],
    },
  },
  SMPN25_TEACHER_TRAINING: {
    id: {
      title: `Pengalaman Mengajar di SMPN 25 Depok (Pelatihan Guru & Kepala Sekolah)`,
      text: `**SMPN 25 Depok: Pelatihan Aplikasi Mobile untuk Dewan Guru & Kepala Sekolah**

* **Pencapaian Usia 16 Tahun:** Dipercaya memimpin workshop teknologi intensif selama sepekan untuk dewan guru dan kepala sekolah di SMPN 25 Depok saat masih duduk di kelas 10 SMK.
* **Menembus Batas Psikologis:** Berdiri di hadapan para pendidik senior yang telah mengajar puluhan tahun, menjembatani pedagogi konvensional dengan logika aplikasi modern.
* **Visual Block Programming:** Mengajarkan pembuatan aplikasi media pembelajaran Android menggunakan Kodular tanpa kerumitan sintaks koding teks.
* **Karya Nyata yang Dihasilkan:** Setiap guru berhasil merancang dan mengompilasi APK aplikasi pembelajaran interaktif dan kuis digital yang langsung dapat diujicobakan kepada murid di ruang kelas.`,
      links: [
        {
                "label": "Detail Pengalaman SMPN 25 Depok",
                "url": "/experience/smpn-45-app-development-instructor"
        }
],
    },
    en: {
      title: `Faculty & Principal Technology Training at SMPN 25 Depok`,
      text: `**SMPN 25 Depok: Faculty Teacher & Principal Mobile App Workshop**

* **Milestone at Age 16:** Commissioned to direct a week-long mobile technology workshop for senior educators and the school principal while still in Grade 10.
* **Bridging Generational Barriers:** Stood before educators with decades of teaching experience, transforming traditional teaching methods into event-driven mobile logic.
* **Event-Driven Visual Logic:** Guided faculty through block-based Android architecture via Kodular without syntax intimidation.
* **Shipped Classroom Deliverables:** Every participating educator successfully compiled and deployed interactive Android quiz tools directly onto classroom tablets.`,
      links: [
        {
                "label": "SMPN 25 Training Details",
                "url": "/experience/smpn-45-app-development-instructor"
        }
],
    },
  },
  SMA_LAZUARDI_DETAIL: {
    id: {
      title: `Pengalaman Mengajar di SMA Lazuardi GCS (Web Dev Instructor & Squad Lead)`,
      text: `**SMA Lazuardi Global Compassionate School: Lead Web Dev Trainer & Squad Lead**

* **Program IDN Mengajar:** Memimpin inisiatif workshop rekayasa web frontend untuk 20 siswa klub IT SMA Lazuardi GCS Depok.
* **Kepemimpinan Squad:** Menyusun proposal outreach mandiri, survei lab komputer, dan memimpin squad asisten pengajar lintas keahlian (desain grafis dan jaringan).
* **Kurikulum Terapan:** Mengajarkan semantik HTML5, CSS layouting (Flexbox & Grid), dasar UI/UX, dan alur kerja developer profesional menggunakan Visual Studio Code.
* **Hasil:** Seluruh peserta pemula berhasil memublikasikan website profil pribadi pertama mereka.`,
      links: [
        {
                "label": "Detail Pengalaman SMA Lazuardi",
                "url": "/experience/sma-lazuardi-gcs-web-development-instructor"
        }
],
    },
    en: {
      title: `Web Development Instructor & Squad Lead at SMA Lazuardi GCS`,
      text: `**SMA Lazuardi GCS: Lead Web Dev Trainer & Cross-Discipline Squad Lead**

* **IDN Mengajar Outreach:** Led an intensive frontend web engineering workshop for 20 high school IT club students at SMA Lazuardi Global Compassionate School.
* **End-to-End Leadership:** Authored the curriculum syllabus, conducted on-site lab surveys, and coordinated a cross-functional squad of student instructors.
* **Applied Curriculum:** Taught semantic HTML5, modern CSS layouts (Flexbox & Grid), UI/UX wireframing, and VS Code developer workflows.
* **Student Impact:** Guided complete coding beginners to code and publish their very first personal portfolio websites.`,
      links: [
        {
                "label": "SMA Lazuardi Case Study",
                "url": "/experience/sma-lazuardi-gcs-web-development-instructor"
        }
],
    },
  },
  SMPN_45_DETAIL: {
    id: {
      title: `Pengalaman Mengajar di SMPN 45 Jakarta (Mobile App Development Instructor)`,
      text: `**SMPN 45 Jakarta: Instruktur Pengembangan Aplikasi Mobile**

* **Pelatihan Siswa SMP:** Mengajarkan logika komputasi dan perancangan aplikasi Android interaktif kepada para siswa SMPN 45.
* **Platform Kodular:** Memanfaatkan visual event-driven blocks untuk mengajarkan logika variabel, percabangan IF/ELSE, dan manipulasi antarmuka mobile.`,
      links: [
        {
                "label": "Detail Mengajar SMPN 45",
                "url": "/experience/smpn-45-app-development-instructor"
        }
],
    },
    en: {
      title: `Mobile App Development Instructor at SMPN 45 Jakarta`,
      text: `**SMPN 45 Jakarta: Mobile Application Development Instructor**

* **Youth Tech Enablement:** Taught computational logic and interactive Android application design to middle school students.
* **Kodular Platform:** Deployed event-driven visual logic blocks to teach control flows, conditional statements, and UI component styling.`,
      links: [
        {
                "label": "SMPN 45 Experience Details",
                "url": "/experience/smpn-45-app-development-instructor"
        }
],
    },
  },
  SMP_INS_DEPOK_DETAIL: {
    id: {
      title: `Pengalaman Mengajar di SMP INS Depok (Block Programming & Mobile App)`,
      text: `**SMP INS Depok: Instruktur Pemrograman Visual & Mobile App**

* **Pelatihan 30+ Santri:** Membimbing lebih dari 30 santri SMP memahami dasar-dasar logika pemrograman komputer dan pembuatan aplikasi mobile.
* **Buku Referensi:** Menggunakan materi dari buku karyanya *Membuat Game Tanpa Coding* sebagai acuan visual logika komputasi.`,
      links: [
        {
                "label": "Detail Mengajar SMP INS Depok",
                "url": "/experience/smp-ins-depok-app-development-instructor"
        }
],
    },
    en: {
      title: `Visual Programming & Mobile App Instructor at SMP INS Depok`,
      text: `**SMP INS Depok: Visual Programming & Mobile App Instructor**

* **30+ Students Mentored:** Guided over 30 junior high students in core computational algorithms and mobile app architecture.
* **Author's Curriculum:** Deployed chapters from his published book *Making Games Without Coding* as the visual reference framework.`,
      links: [
        {
                "label": "SMP INS Depok Details",
                "url": "/experience/smp-ins-depok-app-development-instructor"
        }
],
    },
  },
  SEMUT_SEMUT_DETAIL: {
    id: {
      title: `Pengalaman Mengajar di Semut-Semut The Natural School (Game Development)`,
      text: `**Semut-Semut The Natural School: Instruktur Pengembangan Game 2D**

* **Sekolah Alam Berkarakter:** Melatih para siswa memahami konsep game engine Construct, sistem koordinat 2D, collision physics, dan game loop.
* **Karya Permainan Siswa:** Setiap kelompok siswa berhasil merancang dan memainkan game arkade interaktif buatan mereka sendiri.`,
      links: [
        {
                "label": "Detail Mengajar Semut-Semut",
                "url": "/experience/semut-semut-the-natural-school-game-development-instructor"
        }
],
    },
    en: {
      title: `2D Game Development Instructor at Semut-Semut The Natural School`,
      text: `**Semut-Semut The Natural School: 2D Game Development Instructor**

* **Creative Computational Logic:** Taught middle school cohorts fundamental game architecture using Construct, 2D physics, and game loops.
* **Playable Deliverables:** Student groups successfully built, playtested, and demonstrated their own functional arcade games.`,
      links: [
        {
                "label": "Semut-Semut Details",
                "url": "/experience/semut-semut-the-natural-school-game-development-instructor"
        }
],
    },
  },
  HAJRABYADL_DETAIL: {
    id: {
      title: `Pengalaman Mengajar di Hajrabyadl (Web Development Instructor)`,
      text: `**Hajrabyadl: Instruktur Frontend Coding & Layout Web Responsif**

* **Workshop Web Development:** Membimbing siswa dalam memahami struktur web modern, tata letak semantik HTML5, dan teknik CSS responsif lintas perangkat.`,
      links: [
        {
                "label": "Detail Mengajar Hajrabyadl",
                "url": "/experience/hajrabyadl-web-development-instructor"
        }
],
    },
    en: {
      title: `Web Development Instructor at Hajrabyadl`,
      text: `**Hajrabyadl: Frontend Coding & Responsive Web Instructor**

* **Applied Frontend Training:** Mentored students in responsive web architecture, semantic layouting, and modern CSS frameworks across devices.`,
      links: [
        {
                "label": "Hajrabyadl Details",
                "url": "/experience/hajrabyadl-web-development-instructor"
        }
],
    },
  },
  AL_ANSHAR_DESIGN_DETAIL: {
    id: {
      title: `Pengalaman Mengajar di Al-Anshar (App Design Instructor - Figma UI/UX)`,
      text: `**Al-Anshar Boarding School: Instruktur Desain Aplikasi & UI/UX**

* **Desain Antarmuka Digital:** Melatih para santri dalam menggunakan Figma untuk wireframing, pemilihan palet warna, tipografi digital, dan pembuatan prototipe interaktif.`,
      links: [
        {
                "label": "Detail Al-Anshar App Design",
                "url": "/experience/al-anshar-app-design-instructor"
        }
],
    },
    en: {
      title: `App Design Instructor (Figma UI/UX) at Al-Anshar Boarding School`,
      text: `**Al-Anshar Boarding School: UI/UX App Design Instructor**

* **Digital Interface Design:** Guided students in Figma wireframing, color theory, typography hierarchy, and clickable mobile prototypes.`,
      links: [
        {
                "label": "Al-Anshar Design Details",
                "url": "/experience/al-anshar-app-design-instructor"
        }
],
    },
  },
  AL_ANSHAR_GAME_DETAIL: {
    id: {
      title: `Pengalaman Mengajar di Al-Anshar (Game Development Instructor)`,
      text: `**Al-Anshar Boarding School: Instruktur Logika Game 2D**

* **Pendidikan Logika Game:** Membimbing 25+ santri asrama membangun game arkade 2D dari kanvas kosong hingga rilis playable game.`,
      links: [
        {
                "label": "Detail Al-Anshar Game Development",
                "url": "/experience/al-anshar-game-development-instructor"
        }
],
    },
    en: {
      title: `Game Development Instructor at Al-Anshar Boarding School`,
      text: `**Al-Anshar Boarding School: 2D Game Development Instructor**

* **Arcade Logic Engineering:** Instructed 25+ boarding school students in designing, scripting, and deploying complete 2D arcade games.`,
      links: [
        {
                "label": "Al-Anshar Game Dev Details",
                "url": "/experience/al-anshar-game-development-instructor"
        }
],
    },
  },
  MTS_YASMINE_DETAIL: {
    id: {
      title: `Pengalaman Mengajar di MTs Yasmine (Graphic Design Instructor)`,
      text: `**MTs Yasmine: Instruktur Desain Grafis & Komposisi Visual**

* **Literasi Visual:** Mengajarkan teori warna, hierarki tipografi, dan penyusunan poster publikasi digital media sekolah.`,
      links: [
        {
                "label": "Detail Mengajar MTs Yasmine",
                "url": "/experience/mts-yasmine-design-instructor"
        }
],
    },
    en: {
      title: `Graphic Design Instructor at MTs Yasmine`,
      text: `**MTs Yasmine: Graphic Design & Visual Layout Instructor**

* **Visual Literacy:** Taught layout composition, color theory, and digital asset design for school publications.`,
      links: [
        {
                "label": "MTs Yasmine Details",
                "url": "/experience/mts-yasmine-design-instructor"
        }
],
    },
  },
  GRIYYA_SUNNAH_DETAIL: {
    id: {
      title: `Pengalaman Mengajar di Griyya Sunnah (Game Development Instructor)`,
      text: `**Griyya Sunnah: Instruktur Logika Komputasi & Game 2D**

* **Computational Thinking:** Mengenalkan dasar logika percabangan, perulangan, dan pemecahan masalah algoritma melalui game interaktif.`,
      links: [
        {
                "label": "Detail Mengajar Griyya Sunnah",
                "url": "/experience/griyya-sunnah-game-development-instructor"
        }
],
    },
    en: {
      title: `Computational Logic & Game Instructor at Griyya Sunnah`,
      text: `**Griyya Sunnah: Computational Logic & Game Instructor**

* **Computational Thinking:** Introduced basic conditional loops, collision triggers, and algorithmic problem-solving through interactive 2D games.`,
      links: [
        {
                "label": "Griyya Sunnah Details",
                "url": "/experience/griyya-sunnah-game-development-instructor"
        }
],
    },
  },
  BACKPACKER_DETAIL: {
    id: {
      title: `Pengalaman Ekspedisi: Solo Backpacker 3 Negara (Singapura, Malaysia, Thailand)`,
      text: `**Solo Backpacker 3 Negara: Singapura, Malaysia, Thailand**

* **Seleksi Terpilih di Usia 15 Tahun:** Terpilih sebagai salah satu dari hanya 9 delegasi terbaik dari ratusan pendaftar program IDN International Backpacker.
* **100% Didanai Mandiri (Self-Funded):** Seluruh tiket penerbangan, transit antar-negara, akomodasi, dan konsumsi dibiayai mandiri dari hasil tabungan freelance koding dan desain tanpa membebani orang tua.
* **Kemandirian Navigasi Internasional:** Menavigasi sistem transit multi-negara (MRT, bus lintas perbatasan, kereta antar-kota) secara independen.
* **Komunikasi Global:** Melakukan wawancara langsung dengan warga lokal dalam bahasa Inggris dan memecahkan berbagai tantangan situasi darurat di lapangan.`,
      links: [
        {
                "label": "Studi Kasus Solo Backpacker",
                "url": "/experience/singapore-malaysia-thailand-backpacker-3-country"
        }
],
    },
    en: {
      title: `Solo Backpacker Across 3 Countries (Singapore, Malaysia, Thailand)`,
      text: `**Solo Backpacker Across 3 Countries: Singapore, Malaysia, Thailand**

* **Top 9 Selection at Age 15:** Selected among only 9 delegates out of hundreds of applicants for the IDN International Backpacker program.
* **100% Self-Funded via Freelance:** Financed entirely from savings earned through freelance web development and design without parental financial aid.
* **International Cross-Border Transit:** Independently navigated international transport networks (MRT lines, cross-border express buses, regional rail).
* **Conversational Fluency & Crisis Solving:** Conducted field interviews with locals in English and resolved real-world transit crises under pressure.`,
      links: [
        {
                "label": "Solo Backpacker Case Study",
                "url": "/experience/singapore-malaysia-thailand-backpacker-3-country"
        }
],
    },
  },
  SEMARANG_SURVIVAL_DETAIL: {
    id: {
      title: `Pengalaman Survival: Business & Life Survival di Semarang (PT Intisel)`,
      text: `**PT Intisel Semarang: Business & Life Survival Program**

* **Tantangan Modal Nol Rupiah (Rp 0):** Diterjunkan langsung ke kota Semarang bersama tim dengan modal awal nol rupiah untuk menguji ketangguhan mental dan daya juang.
* **Inisiatif Bisnis Nyata:** Berhasil bertahan hidup dan menghasilkan profit bersih melalui perdagangan langsung serta logistik telekomunikasi lapangan.`,
      links: [
        {
                "label": "Detail Survival Semarang",
                "url": "/experience/pt-intisel-semarang-business-life-survival"
        }
],
    },
    en: {
      title: `Business & Life Survival in Semarang (PT Intisel)`,
      text: `**PT Intisel Semarang: Business & Life Survival Challenge**

* **Zero Capital Survival:** Deployed to Semarang with Rp 0 initial cash capital to test entrepreneurial tenacity, grit, and psychological composure.
* **Positive Cash Flow Generated:** Successfully sustained lodging and food through agile direct commerce and telecommunications logistical support.`,
      links: [
        {
                "label": "Semarang Survival Details",
                "url": "/experience/pt-intisel-semarang-business-life-survival"
        }
],
    },
  },
  IT_FEST_DETAIL: {
    id: {
      title: `Pengalaman Kepemimpinan: Koordinator Acara Kompetisi IT FEST 2025`,
      text: `**IT FEST 2025: Koordinator Acara Kompetisi Teknologi Nasional**

* **Skala Nasional 500+ Peserta:** Memimpin divisi kepanitiaan acara festival teknologi tingkat nasional yang melibatkan lebih dari 500 peserta dari berbagai penjuru nusantara.
* **Manajemen Panggung & Operasional:** Mengatur jalannya rundown, sinkronisasi juri teknis, dan penyelesaian kendala di lapangan secara sigap.`,
      links: [
        {
                "label": "Detail IT FEST 2025",
                "url": "/experience/it-fest-2025-competition-event-coordinator"
        }
],
    },
    en: {
      title: `Competition Event Coordinator at IT FEST 2025`,
      text: `**IT FEST 2025: National Tech Competition Event Coordinator**

* **Nationwide Scale (500+ Competitors):** Led operational and stage coordination for a national technology festival hosting over 500 participants across Indonesia.
* **Crisis Coordination:** Managed stage rundowns, technical judging briefings, and live emergency problem-solving.`,
      links: [
        {
                "label": "IT FEST 2025 Details",
                "url": "/experience/it-fest-2025-competition-event-coordinator"
        }
],
    },
  },
  OSIS_LEADERSHIP_DETAIL: {
    id: {
      title: `Pengalaman Kepemimpinan: Ketua Divisi Acara OSIS SMK IDN (2 Periode)`,
      text: `**OSIS SMK IDN Boarding School: Ketua Divisi Acara (2 Periode Berturut-turut)**

* **Kepemimpinan 2 Periode:** Dipercaya memimpin divisi acara selama 2 periode dalam merancang dan mengeksekusi puluhan agenda besar sekolah berasrama.
* **Manajemen Waktu & Empati:** Mengarahkan ratusan santri dengan kepemimpinan empatik di sela-sela jadwal koding dan proyek teknik yang padat.`,
      links: [
        {
                "label": "Detail Kepemimpinan OSIS",
                "url": "/experience/idn-student-council-event-division-leader"
        }
],
    },
    en: {
      title: `Student Council Event Division Leader (2 Terms) at SMK IDN`,
      text: `**Student Council Event Division Leader (2 Terms) at SMK IDN**

* **2 Consecutive Terms:** Directed event conceptualization, budgeting, stage production, and emergency handling for all major campus events.
* **Empathetic Leadership:** Directed hundreds of boarding students with composure while maintaining rigorous engineering deliverables.`,
      links: [
        {
                "label": "Student Council Details",
                "url": "/experience/idn-student-council-event-division-leader"
        }
],
    },
  },
  BARMUS_VOLUNTRIP_DETAIL: {
    id: {
      title: `Pengalaman Sosial: Barmus Voluntrip (Volunteer Event Organizer)`,
      text: `**Barmus Voluntrip: Koordinator Relawan & Dokumentasi Sosial Kemanusiaan**

* **Aksi Sosial Pedesaan:** Mengorganisir program bakti sosial, edukasi teknologi, dan bantuan kemanusiaan ke masyarakat pelosok dan panti asuhan.`,
      links: [
        {
                "label": "Detail Barmus Voluntrip",
                "url": "/experience/barmus-voluntrip-volunteer-event-organizer"
        }
],
    },
    en: {
      title: `Volunteer Event Organizer at Barmus Voluntrip`,
      text: `**Barmus Voluntrip: Volunteer Event Coordinator & Media Producer**

* **Community Outreach:** Organized social volunteer campaigns, youth tech workshops, and humanitarian aid across underserved communities.`,
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
      title: `Pengalaman Sosial: Live In Rural Immersion (Pedesaan Jawa Barat)`,
      text: `**IDN Boarding School Live In: Penyerapan Sosial di Pedesaan Jawa Barat**

* **Hidup Bersama Petani:** Tinggal dan membaur selama sepekan penuh bersama keluarga petani tradisional di pelosok desa.
* **Karakter Empati:** Menumbuhkan rasa syukur, kerendahan hati, dan empati mendalam yang melandasi filosofi pembuatan perangkat lunak yang memanusiakan pengguna.`,
      links: [
        {
                "label": "Detail Live In Pedesaan",
                "url": "/experience/idn-boarding-school-live-in-rural-immersion"
        }
],
    },
    en: {
      title: `Rural Immersion (Live In) in Rural West Java`,
      text: `**IDN Boarding School: Rural Immersion Program (Live In)**

* **Living with Farming Families:** Lived for a full week integrated with a traditional agrarian family in rural West Java.
* **Humility & Empathy:** Built lasting social empathy and grounded perspective that directly shapes his user-first engineering philosophy.`,
      links: [
        {
                "label": "Live In Details",
                "url": "/experience/idn-boarding-school-live-in-rural-immersion"
        }
],
    },
  },

  CERT_CS50: {
    id: {
      title: `Sertifikat: CS50: Introduction to Computer Science (Harvard University)`,
      text: `**Sertifikat Resmi: CS50: Introduction to Computer Science**

* **Institusi Penerbit:** Harvard University
* **Waktu & Kredensial:** Diterbitkan Oct 2025 (ID Kredensial: \`CS50x-2025-HARVARD\`)
* **Beban Pembelajaran:** 120+ Hours · Verified Curriculum
* **Bidang Keahlian:** Computer Science & Systems

**Apa yang Dipelajari & Kurikulum Utama:**
Harvard University's flagship computer science curriculum covering algorithmic problem-solving, computational thinking, low-level memory allocation, and software architecture across C, Python, SQL, and web technologies.
* **Keahlian yang Dikuasai:** Algorithms, Data Structures, C, Python, SQL, Memory Management, Systems Thinking
* Algorithmic complexity, sorting/searching paradigms, and Big-O notation
* Manual pointer arithmetic, heap vs. stack memory allocation, and buffer safety in C
* Relational database schema modeling, queries, and ACID transactions in SQL
* Full-stack web application engineering with Python, Flask, and asynchronous JavaScript

**Apa yang Didapatkan & Implementasi Nyata:**
Rebuilt fundamental mental models of runtime execution by understanding raw memory allocations and pointer mechanics in C. This low-level grounding directly elevates debugging speed and memory efficiency in modern web and mobile apps.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/cs50-introduction-to-computer-science"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://cs50.harvard.edu/certificates/"
        }
],
    },
    en: {
      title: `Certificate: CS50: Introduction to Computer Science (Harvard University)`,
      text: `**Verified Credential: CS50: Introduction to Computer Science**

* **Issuing Body:** Harvard University
* **Issue Date & Credential ID:** Oct 2025 (ID: \`CS50x-2025-HARVARD\`)
* **Verified Effort:** 120+ Hours · Verified Curriculum
* **Specialization Track:** Computer Science & Systems

**Curriculum & What Was Learned:**
Harvard University's flagship computer science curriculum covering algorithmic problem-solving, computational thinking, low-level memory allocation, and software architecture across C, Python, SQL, and web technologies.
* **Core Skills Mastered:** Algorithms, Data Structures, C, Python, SQL, Memory Management, Systems Thinking
* Algorithmic complexity, sorting/searching paradigms, and Big-O notation
* Manual pointer arithmetic, heap vs. stack memory allocation, and buffer safety in C
* Relational database schema modeling, queries, and ACID transactions in SQL
* Full-stack web application engineering with Python, Flask, and asynchronous JavaScript

**Takeaways & Practical Application:**
Rebuilt fundamental mental models of runtime execution by understanding raw memory allocations and pointer mechanics in C. This low-level grounding directly elevates debugging speed and memory efficiency in modern web and mobile apps.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/cs50-introduction-to-computer-science"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://cs50.harvard.edu/certificates/"
        }
],
    },
  },
  CERT_CODING_CAMP: {
    id: {
      title: `Sertifikat: Coding Camp: Full Stack Developer (Dicoding Indonesia × DBS Foundation)`,
      text: `**Sertifikat Resmi: Coding Camp: Full Stack Developer**

* **Institusi Penerbit:** Dicoding Indonesia × DBS Foundation
* **Waktu & Kredensial:** Diterbitkan Apr 2026 (ID Kredensial: \`DICODING-DBS-FS-2026\`)
* **Beban Pembelajaran:** 90+ Hours · Corporate Sponsored
* **Bidang Keahlian:** Full Stack Web Engineering

**Apa yang Dipelajari & Kurikulum Utama:**
Intensive corporate-sponsored full-stack bootcamp focused on production-grade web application architecture, spanning RESTful API design, modern React frontend patterns, secure authentication, and CI/CD deployment.
* **Keahlian yang Dikuasai:** React, Node.js, Express, REST APIs, JWT Auth, PostgreSQL, Full Stack Architecture
* Decoupled full-stack architecture with Express backend and React frontend
* Client-side state management, optimistic UI updates, and intelligent caching
* Secure JWT-based authentication, CORS policies, and SQL/XSS input sanitization
* Automated integration testing and production containerized deployment pipelines

**Apa yang Didapatkan & Implementasi Nyata:**
Established industry standards for architecting scalable full-stack applications, directly influencing my development process across freelance client projects and internal school business suites.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/coding-camp-full-stack-developer"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
    en: {
      title: `Certificate: Coding Camp: Full Stack Developer (Dicoding Indonesia × DBS Foundation)`,
      text: `**Verified Credential: Coding Camp: Full Stack Developer**

* **Issuing Body:** Dicoding Indonesia × DBS Foundation
* **Issue Date & Credential ID:** Apr 2026 (ID: \`DICODING-DBS-FS-2026\`)
* **Verified Effort:** 90+ Hours · Corporate Sponsored
* **Specialization Track:** Full Stack Web Engineering

**Curriculum & What Was Learned:**
Intensive corporate-sponsored full-stack bootcamp focused on production-grade web application architecture, spanning RESTful API design, modern React frontend patterns, secure authentication, and CI/CD deployment.
* **Core Skills Mastered:** React, Node.js, Express, REST APIs, JWT Auth, PostgreSQL, Full Stack Architecture
* Decoupled full-stack architecture with Express backend and React frontend
* Client-side state management, optimistic UI updates, and intelligent caching
* Secure JWT-based authentication, CORS policies, and SQL/XSS input sanitization
* Automated integration testing and production containerized deployment pipelines

**Takeaways & Practical Application:**
Established industry standards for architecting scalable full-stack applications, directly influencing my development process across freelance client projects and internal school business suites.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/coding-camp-full-stack-developer"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
  },
  CERT_FRONTEND_WEB: {
    id: {
      title: `Sertifikat: Frontend Web Developer (Dicoding Indonesia)`,
      text: `**Sertifikat Resmi: Frontend Web Developer**

* **Institusi Penerbit:** Dicoding Indonesia
* **Waktu & Kredensial:** Diterbitkan Mar 2026 (ID Kredensial: \`DICODING-FE-2026-DEV\`)
* **Beban Pembelajaran:** 60+ Hours · Professional Track
* **Bidang Keahlian:** Modern Frontend Architecture

**Apa yang Dipelajari & Kurikulum Utama:**
Professional certification validating mastery over responsive web development, modern CSS layout paradigms, DOM manipulation, client-side data binding, and web performance optimization.
* **Keahlian yang Dikuasai:** HTML5, CSS3, JavaScript, Responsive Design, Accessibility (a11y), DOM Manipulation
* Semantic HTML5 architecture and WCAG AA accessibility compliance standards
* Modern layout systems leveraging Flexbox, multi-column CSS Grid, and custom properties
* Vanilla JavaScript DOM traversal, event delegation, and asynchronous REST streaming
* Fluid responsive typography and breakpoint choreographies for cross-device resilience

**Apa yang Didapatkan & Implementasi Nyata:**
Formed the bedrock of my UI engineering precision, ensuring that all client and portfolio applications achieve sub-second load times and maintain flawless layout responsiveness across mobile and desktop.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/frontend-web-developer"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
    en: {
      title: `Certificate: Frontend Web Developer (Dicoding Indonesia)`,
      text: `**Verified Credential: Frontend Web Developer**

* **Issuing Body:** Dicoding Indonesia
* **Issue Date & Credential ID:** Mar 2026 (ID: \`DICODING-FE-2026-DEV\`)
* **Verified Effort:** 60+ Hours · Professional Track
* **Specialization Track:** Modern Frontend Architecture

**Curriculum & What Was Learned:**
Professional certification validating mastery over responsive web development, modern CSS layout paradigms, DOM manipulation, client-side data binding, and web performance optimization.
* **Core Skills Mastered:** HTML5, CSS3, JavaScript, Responsive Design, Accessibility (a11y), DOM Manipulation
* Semantic HTML5 architecture and WCAG AA accessibility compliance standards
* Modern layout systems leveraging Flexbox, multi-column CSS Grid, and custom properties
* Vanilla JavaScript DOM traversal, event delegation, and asynchronous REST streaming
* Fluid responsive typography and breakpoint choreographies for cross-device resilience

**Takeaways & Practical Application:**
Formed the bedrock of my UI engineering precision, ensuring that all client and portfolio applications achieve sub-second load times and maintain flawless layout responsiveness across mobile and desktop.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/frontend-web-developer"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
  },
  CERT_DATA_ANALYST: {
    id: {
      title: `Sertifikat: Belajar Dasar Data Analyst (Dicoding Indonesia)`,
      text: `**Sertifikat Resmi: Belajar Dasar Data Analyst**

* **Institusi Penerbit:** Dicoding Indonesia
* **Waktu & Kredensial:** Diterbitkan 2024 (ID Kredensial: \`DICODING-DA-2024-BASE\`)
* **Beban Pembelajaran:** 40+ Hours · Foundational Track
* **Bidang Keahlian:** Data Analytics & Visualization

**Apa yang Dipelajari & Kurikulum Utama:**
Comprehensive foundation in data lifecycle management, data cleansing, statistical exploration, and insight extraction for informed product and engineering decisions.
* **Keahlian yang Dikuasai:** Data Analysis, Data Cleansing, Data Visualization, Spreadsheets, Statistics, Data Wrangling
* Data wrangling, deduplication, and anomaly identification workflows
* Descriptive statistical summaries (variance, standard deviation, frequency distribution)
* Data visualization design principles and narrative dashboard construction
* Translating raw telemetry datasets into actionable engineering and product KPIs

**Apa yang Didapatkan & Implementasi Nyata:**
Enabled structured interpretation of application telemetry and user engagement data, allowing me to build data-informed features and track performance metrics across interactive web applications.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/belajar-dasar-data-analyst"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
    en: {
      title: `Certificate: Belajar Dasar Data Analyst (Dicoding Indonesia)`,
      text: `**Verified Credential: Belajar Dasar Data Analyst**

* **Issuing Body:** Dicoding Indonesia
* **Issue Date & Credential ID:** 2024 (ID: \`DICODING-DA-2024-BASE\`)
* **Verified Effort:** 40+ Hours · Foundational Track
* **Specialization Track:** Data Analytics & Visualization

**Curriculum & What Was Learned:**
Comprehensive foundation in data lifecycle management, data cleansing, statistical exploration, and insight extraction for informed product and engineering decisions.
* **Core Skills Mastered:** Data Analysis, Data Cleansing, Data Visualization, Spreadsheets, Statistics, Data Wrangling
* Data wrangling, deduplication, and anomaly identification workflows
* Descriptive statistical summaries (variance, standard deviation, frequency distribution)
* Data visualization design principles and narrative dashboard construction
* Translating raw telemetry datasets into actionable engineering and product KPIs

**Takeaways & Practical Application:**
Enabled structured interpretation of application telemetry and user engagement data, allowing me to build data-informed features and track performance metrics across interactive web applications.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/belajar-dasar-data-analyst"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
  },
  CERT_BACKEND: {
    id: {
      title: `Sertifikat: Belajar Membuat Aplikasi Back-End (Dicoding Indonesia)`,
      text: `**Sertifikat Resmi: Belajar Membuat Aplikasi Back-End**

* **Institusi Penerbit:** Dicoding Indonesia
* **Waktu & Kredensial:** Diterbitkan 2024 (ID Kredensial: \`DICODING-BE-2024-REST\`)
* **Beban Pembelajaran:** 55+ Hours · Intermediate Track
* **Bidang Keahlian:** Backend Engineering & REST APIs

**Apa yang Dipelajari & Kurikulum Utama:**
Technical certification in server-side development with Node.js and Hapi framework, emphasizing RESTful API architecture, HTTP methods, payload validation, and clean architectural separation.
* **Keahlian yang Dikuasai:** Node.js, Hapi Framework, RESTful API, Postman, Backend Architecture, JSON APIs
* RESTful route routing, query parameters, and dynamic path parameters
* Payload validation with schema validators (Joi) and proper HTTP status codes
* In-memory caching and persistent storage integration for CRUD workflows
* Postman automated API testing collections and contract integration validation

**Apa yang Didapatkan & Implementasi Nyata:**
Provided the architectural blueprint for designing predictable RESTful endpoints, used extensively during backend development for company dashboards and national competition platforms.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/belajar-membuat-aplikasi-back-end"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
    en: {
      title: `Certificate: Belajar Membuat Aplikasi Back-End (Dicoding Indonesia)`,
      text: `**Verified Credential: Belajar Membuat Aplikasi Back-End**

* **Issuing Body:** Dicoding Indonesia
* **Issue Date & Credential ID:** 2024 (ID: \`DICODING-BE-2024-REST\`)
* **Verified Effort:** 55+ Hours · Intermediate Track
* **Specialization Track:** Backend Engineering & REST APIs

**Curriculum & What Was Learned:**
Technical certification in server-side development with Node.js and Hapi framework, emphasizing RESTful API architecture, HTTP methods, payload validation, and clean architectural separation.
* **Core Skills Mastered:** Node.js, Hapi Framework, RESTful API, Postman, Backend Architecture, JSON APIs
* RESTful route routing, query parameters, and dynamic path parameters
* Payload validation with schema validators (Joi) and proper HTTP status codes
* In-memory caching and persistent storage integration for CRUD workflows
* Postman automated API testing collections and contract integration validation

**Takeaways & Practical Application:**
Provided the architectural blueprint for designing predictable RESTful endpoints, used extensively during backend development for company dashboards and national competition platforms.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/belajar-membuat-aplikasi-back-end"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
  },
  CERT_GIT_GITHUB: {
    id: {
      title: `Sertifikat: Belajar Dasar Git dengan GitHub (Dicoding Indonesia)`,
      text: `**Sertifikat Resmi: Belajar Dasar Git dengan GitHub**

* **Institusi Penerbit:** Dicoding Indonesia
* **Waktu & Kredensial:** Diterbitkan 2024 (ID Kredensial: \`DICODING-GIT-2024-HUB\`)
* **Beban Pembelajaran:** 30+ Hours · Foundational Track
* **Bidang Keahlian:** DevOps & Version Control

**Apa yang Dipelajari & Kurikulum Utama:**
Rigorous curriculum covering distributed version control with Git and collaborative open-source workflows on GitHub.
* **Keahlian yang Dikuasai:** Git, GitHub, Branching, Merge Conflicts, Version Control, Code Review
* Branching strategies (feature branches, hotfixes, and trunk-based workflows)
* Resolving complex merge conflicts and rebasing commits cleanly
* Atomic commit discipline and descriptive semantic commit messaging
* Pull Request workflows, peer code reviews, and remote repository synchronization

**Apa yang Didapatkan & Implementasi Nyata:**
Instilled clean version control hygiene that eliminated code collisions and streamlined collaboration across all competition engineering teams and open-source contributions.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/belajar-dasar-git-dengan-github"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
    en: {
      title: `Certificate: Belajar Dasar Git dengan GitHub (Dicoding Indonesia)`,
      text: `**Verified Credential: Belajar Dasar Git dengan GitHub**

* **Issuing Body:** Dicoding Indonesia
* **Issue Date & Credential ID:** 2024 (ID: \`DICODING-GIT-2024-HUB\`)
* **Verified Effort:** 30+ Hours · Foundational Track
* **Specialization Track:** DevOps & Version Control

**Curriculum & What Was Learned:**
Rigorous curriculum covering distributed version control with Git and collaborative open-source workflows on GitHub.
* **Core Skills Mastered:** Git, GitHub, Branching, Merge Conflicts, Version Control, Code Review
* Branching strategies (feature branches, hotfixes, and trunk-based workflows)
* Resolving complex merge conflicts and rebasing commits cleanly
* Atomic commit discipline and descriptive semantic commit messaging
* Pull Request workflows, peer code reviews, and remote repository synchronization

**Takeaways & Practical Application:**
Instilled clean version control hygiene that eliminated code collisions and streamlined collaboration across all competition engineering teams and open-source contributions.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/belajar-dasar-git-dengan-github"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
  },
  CERT_GRAPHIC_DESIGN: {
    id: {
      title: `Sertifikat: Graphic Design Fundamentals (Canva / Course)`,
      text: `**Sertifikat Resmi: Graphic Design Fundamentals**

* **Institusi Penerbit:** Canva / Course
* **Waktu & Kredensial:** Diterbitkan 2023 (ID Kredensial: \`CANVA-DESIGN-2023\`)
* **Beban Pembelajaran:** 25+ Hours · Creative Track
* **Bidang Keahlian:** Visual Design & Composition

**Apa yang Dipelajari & Kurikulum Utama:**
Core principles of graphic design, color psychology, visual hierarchy, layout grid systems, and brand consistency for digital and print media.
* **Keahlian yang Dikuasai:** Graphic Design, Canva, Color Theory, Visual Hierarchy, Typography, Composition
* Color theory, harmony palettes, and contrast accessibility guidelines
* Grid alignment, white space balance, and focal point orchestration
* Typography pairings (display typefaces vs. body copy legibility)
* Multi-format asset exporting for cross-platform marketing collateral

**Apa yang Didapatkan & Implementasi Nyata:**
Helped bridge the gap between engineering and visual aesthetics, leading directly to winning the Best Poster Award at the Idul Adha Festival and crafting polished portfolio visuals.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/graphic-design-fundamentals"
        }
],
    },
    en: {
      title: `Certificate: Graphic Design Fundamentals (Canva / Course)`,
      text: `**Verified Credential: Graphic Design Fundamentals**

* **Issuing Body:** Canva / Course
* **Issue Date & Credential ID:** 2023 (ID: \`CANVA-DESIGN-2023\`)
* **Verified Effort:** 25+ Hours · Creative Track
* **Specialization Track:** Visual Design & Composition

**Curriculum & What Was Learned:**
Core principles of graphic design, color psychology, visual hierarchy, layout grid systems, and brand consistency for digital and print media.
* **Core Skills Mastered:** Graphic Design, Canva, Color Theory, Visual Hierarchy, Typography, Composition
* Color theory, harmony palettes, and contrast accessibility guidelines
* Grid alignment, white space balance, and focal point orchestration
* Typography pairings (display typefaces vs. body copy legibility)
* Multi-format asset exporting for cross-platform marketing collateral

**Takeaways & Practical Application:**
Helped bridge the gap between engineering and visual aesthetics, leading directly to winning the Best Poster Award at the Idul Adha Festival and crafting polished portfolio visuals.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/graphic-design-fundamentals"
        }
],
    },
  },
  CERT_C_MEMULAI: {
    id: {
      title: `Sertifikat: Memulai Pemrograman Dengan C (Dicoding Indonesia)`,
      text: `**Sertifikat Resmi: Memulai Pemrograman Dengan C**

* **Institusi Penerbit:** Dicoding Indonesia
* **Waktu & Kredensial:** Diterbitkan 2023 (ID Kredensial: \`DICODING-C-2023-START\`)
* **Beban Pembelajaran:** 45+ Hours · Foundational Track
* **Bidang Keahlian:** Low-Level Programming

**Apa yang Dipelajari & Kurikulum Utama:**
Foundational programming course in C covering syntax fundamentals, basic data types, memory representations, control structures, and modular function architecture.
* **Keahlian yang Dikuasai:** C Language, Control Flow, Memory Basics, Pointers Intro, Structured Programming
* Primitive datatypes, memory size allocations, and explicit type casting
* Control flow constructs (nested conditionals, iteration loops, switch statements)
* Custom modular functions, pass-by-value semantics, and lexical scope boundaries
* Arrays, character buffers, and basic terminal input/output operations

**Apa yang Didapatkan & Implementasi Nyata:**
Provided deep appreciation for compile-time vs runtime execution, laying an indispensable foundation before tackling CS50 and modern web runtimes.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/memulai-pemrograman-dengan-c"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
    en: {
      title: `Certificate: Memulai Pemrograman Dengan C (Dicoding Indonesia)`,
      text: `**Verified Credential: Memulai Pemrograman Dengan C**

* **Issuing Body:** Dicoding Indonesia
* **Issue Date & Credential ID:** 2023 (ID: \`DICODING-C-2023-START\`)
* **Verified Effort:** 45+ Hours · Foundational Track
* **Specialization Track:** Low-Level Programming

**Curriculum & What Was Learned:**
Foundational programming course in C covering syntax fundamentals, basic data types, memory representations, control structures, and modular function architecture.
* **Core Skills Mastered:** C Language, Control Flow, Memory Basics, Pointers Intro, Structured Programming
* Primitive datatypes, memory size allocations, and explicit type casting
* Control flow constructs (nested conditionals, iteration loops, switch statements)
* Custom modular functions, pass-by-value semantics, and lexical scope boundaries
* Arrays, character buffers, and basic terminal input/output operations

**Takeaways & Practical Application:**
Provided deep appreciation for compile-time vs runtime execution, laying an indispensable foundation before tackling CS50 and modern web runtimes.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/memulai-pemrograman-dengan-c"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
  },
  CERT_UIUX_DESIGN: {
    id: {
      title: `Sertifikat: Dasar UI/UX Design (Figma Course)`,
      text: `**Sertifikat Resmi: Dasar UI/UX Design**

* **Institusi Penerbit:** Figma Course
* **Waktu & Kredensial:** Diterbitkan 2023 (ID Kredensial: \`FIGMA-UIUX-2023-BASE\`)
* **Beban Pembelajaran:** 35+ Hours · Design Track
* **Bidang Keahlian:** UI/UX & Product Design

**Apa yang Dipelajari & Kurikulum Utama:**
Practical design curriculum exploring user-centered design methodologies, wireframing, interactive prototyping, and scalable Figma design systems.
* **Keahlian yang Dikuasai:** Figma, UI/UX Design, Auto Layout, Design Systems, Wireframing, Prototyping
* Auto-layout mechanics, responsive constraints, and component variants
* Design tokens (color swatches, typography scales, spacing grids)
* Interactive micro-prototyping with smart animations and easing curves
* User empathy mapping, persona development, and wireframe ideation

**Apa yang Didapatkan & Implementasi Nyata:**
Transformed my development approach into a design-first mindset, allowing me to prototype complete interactive mockups in Figma before writing a single line of React code.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/dasar-ui-ux-design"
        }
],
    },
    en: {
      title: `Certificate: Dasar UI/UX Design (Figma Course)`,
      text: `**Verified Credential: Dasar UI/UX Design**

* **Issuing Body:** Figma Course
* **Issue Date & Credential ID:** 2023 (ID: \`FIGMA-UIUX-2023-BASE\`)
* **Verified Effort:** 35+ Hours · Design Track
* **Specialization Track:** UI/UX & Product Design

**Curriculum & What Was Learned:**
Practical design curriculum exploring user-centered design methodologies, wireframing, interactive prototyping, and scalable Figma design systems.
* **Core Skills Mastered:** Figma, UI/UX Design, Auto Layout, Design Systems, Wireframing, Prototyping
* Auto-layout mechanics, responsive constraints, and component variants
* Design tokens (color swatches, typography scales, spacing grids)
* Interactive micro-prototyping with smart animations and easing curves
* User empathy mapping, persona development, and wireframe ideation

**Takeaways & Practical Application:**
Transformed my development approach into a design-first mindset, allowing me to prototype complete interactive mockups in Figma before writing a single line of React code.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/dasar-ui-ux-design"
        }
],
    },
  },
  CERT_PYTHON_FUND: {
    id: {
      title: `Sertifikat: Python Fundamentals (DQLab)`,
      text: `**Sertifikat Resmi: Python Fundamentals**

* **Institusi Penerbit:** DQLab
* **Waktu & Kredensial:** Diterbitkan 2024 (ID Kredensial: \`DQLAB-PY-2024-FUND\`)
* **Beban Pembelajaran:** 30+ Hours · Data Track
* **Bidang Keahlian:** Data Science & Scripting

**Apa yang Dipelajari & Kurikulum Utama:**
Essential Python programming curriculum focusing on data structures, control logic, modular libraries, and basic data manipulation routines.
* **Keahlian yang Dikuasai:** Python, Data Structures, Scripting, Data Parsing, Automation
* Native collections: lists, dictionaries, tuples, sets and mutation rules
* List comprehensions and lambda transformations for concise workflows
* Reading and parsing CSV, JSON, and structured data files
* Foundations of numerical computing and scripting automation

**Apa yang Didapatkan & Implementasi Nyata:**
Accelerated my ability to write rapid automation scripts, test data transformations, and interact with machine learning APIs.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/python-fundamentals"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://www.dqlab.id"
        }
],
    },
    en: {
      title: `Certificate: Python Fundamentals (DQLab)`,
      text: `**Verified Credential: Python Fundamentals**

* **Issuing Body:** DQLab
* **Issue Date & Credential ID:** 2024 (ID: \`DQLAB-PY-2024-FUND\`)
* **Verified Effort:** 30+ Hours · Data Track
* **Specialization Track:** Data Science & Scripting

**Curriculum & What Was Learned:**
Essential Python programming curriculum focusing on data structures, control logic, modular libraries, and basic data manipulation routines.
* **Core Skills Mastered:** Python, Data Structures, Scripting, Data Parsing, Automation
* Native collections: lists, dictionaries, tuples, sets and mutation rules
* List comprehensions and lambda transformations for concise workflows
* Reading and parsing CSV, JSON, and structured data files
* Foundations of numerical computing and scripting automation

**Takeaways & Practical Application:**
Accelerated my ability to write rapid automation scripts, test data transformations, and interact with machine learning APIs.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/python-fundamentals"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://www.dqlab.id"
        }
],
    },
  },
  CERT_JS_DASAR: {
    id: {
      title: `Sertifikat: Belajar Dasar Pemrograman JavaScript (Dicoding Indonesia)`,
      text: `**Sertifikat Resmi: Belajar Dasar Pemrograman JavaScript**

* **Institusi Penerbit:** Dicoding Indonesia
* **Waktu & Kredensial:** Diterbitkan 2024 (ID Kredensial: \`DICODING-JS-2024-CORE\`)
* **Beban Pembelajaran:** 50+ Hours · Foundational Track
* **Bidang Keahlian:** Frontend & JavaScript Runtime

**Apa yang Dipelajari & Kurikulum Utama:**
Modern ECMAScript (ES6+) programming fundamentals, covering lexical scope, closures, event loops, promises, and functional array operations.
* **Keahlian yang Dikuasai:** JavaScript, ES6+, Asynchronous JS, Promises, Functional Programming, Event Loop
* ES6+ syntax: destructuring, rest/spread operators, and arrow functions
* Asynchronous programming: Callbacks, Promises, and async/await mechanics
* Object-oriented and functional programming paradigms in JavaScript
* Node.js environment basics and npm package management ecosystem

**Apa yang Didapatkan & Implementasi Nyata:**
Mastered asynchronous control flows and JavaScript internals, providing the core competency needed to build production React web apps.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/belajar-dasar-pemrograman-javascript"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
    en: {
      title: `Certificate: Belajar Dasar Pemrograman JavaScript (Dicoding Indonesia)`,
      text: `**Verified Credential: Belajar Dasar Pemrograman JavaScript**

* **Issuing Body:** Dicoding Indonesia
* **Issue Date & Credential ID:** 2024 (ID: \`DICODING-JS-2024-CORE\`)
* **Verified Effort:** 50+ Hours · Foundational Track
* **Specialization Track:** Frontend & JavaScript Runtime

**Curriculum & What Was Learned:**
Modern ECMAScript (ES6+) programming fundamentals, covering lexical scope, closures, event loops, promises, and functional array operations.
* **Core Skills Mastered:** JavaScript, ES6+, Asynchronous JS, Promises, Functional Programming, Event Loop
* ES6+ syntax: destructuring, rest/spread operators, and arrow functions
* Asynchronous programming: Callbacks, Promises, and async/await mechanics
* Object-oriented and functional programming paradigms in JavaScript
* Node.js environment basics and npm package management ecosystem

**Takeaways & Practical Application:**
Mastered asynchronous control flows and JavaScript internals, providing the core competency needed to build production React web apps.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/belajar-dasar-pemrograman-javascript"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
  },
  CERT_AWS_CLOUD: {
    id: {
      title: `Sertifikat: Cloud Practitioner Essentials (Amazon Web Services (AWS))`,
      text: `**Sertifikat Resmi: Cloud Practitioner Essentials**

* **Institusi Penerbit:** Amazon Web Services (AWS)
* **Waktu & Kredensial:** Diterbitkan 2024 (ID Kredensial: \`AWS-CP-2024-CLOUD\`)
* **Beban Pembelajaran:** 40+ Hours · Cloud Foundations
* **Bidang Keahlian:** Cloud Architecture & Infrastructure

**Apa yang Dipelajari & Kurikulum Utama:**
Official AWS curriculum introducing cloud computing concepts, AWS security models, compute services (EC2, Lambda), storage (S3), and networking fundamentals (VPC).
* **Keahlian yang Dikuasai:** AWS, Cloud Computing, IAM Security, S3 Storage, EC2, Serverless Architecture
* Cloud value proposition, high availability, and fault tolerance fundamentals
* AWS Shared Responsibility Model and IAM security access policies
* Compute & Storage: Elastic Compute Cloud (EC2), S3 bucket architecture
* Cloud cost optimization, billing models, and serverless computing overview

**Apa yang Didapatkan & Implementasi Nyata:**
Established foundational understanding of cloud deployment architectures, allowing informed infrastructure decisions for web applications and client hosting.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/cloud-practitioner-essentials"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://aws.amazon.com"
        }
],
    },
    en: {
      title: `Certificate: Cloud Practitioner Essentials (Amazon Web Services (AWS))`,
      text: `**Verified Credential: Cloud Practitioner Essentials**

* **Issuing Body:** Amazon Web Services (AWS)
* **Issue Date & Credential ID:** 2024 (ID: \`AWS-CP-2024-CLOUD\`)
* **Verified Effort:** 40+ Hours · Cloud Foundations
* **Specialization Track:** Cloud Architecture & Infrastructure

**Curriculum & What Was Learned:**
Official AWS curriculum introducing cloud computing concepts, AWS security models, compute services (EC2, Lambda), storage (S3), and networking fundamentals (VPC).
* **Core Skills Mastered:** AWS, Cloud Computing, IAM Security, S3 Storage, EC2, Serverless Architecture
* Cloud value proposition, high availability, and fault tolerance fundamentals
* AWS Shared Responsibility Model and IAM security access policies
* Compute & Storage: Elastic Compute Cloud (EC2), S3 bucket architecture
* Cloud cost optimization, billing models, and serverless computing overview

**Takeaways & Practical Application:**
Established foundational understanding of cloud deployment architectures, allowing informed infrastructure decisions for web applications and client hosting.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/cloud-practitioner-essentials"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://aws.amazon.com"
        }
],
    },
  },
  CERT_REACT: {
    id: {
      title: `Sertifikat: Belajar Membuat Aplikasi Web dengan React (Dicoding Indonesia)`,
      text: `**Sertifikat Resmi: Belajar Membuat Aplikasi Web dengan React**

* **Institusi Penerbit:** Dicoding Indonesia
* **Waktu & Kredensial:** Diterbitkan 2025 (ID Kredensial: \`DICODING-REACT-2025-DEV\`)
* **Beban Pembelajaran:** 60+ Hours · Intermediate Track
* **Bidang Keahlian:** Frontend Component Architecture

**Apa yang Dipelajari & Kurikulum Utama:**
Comprehensive React framework certification covering declarative UI paradigms, component composition, hooks, state isolation, and controlled forms.
* **Keahlian yang Dikuasai:** React.js, React Hooks, State Management, Virtual DOM, Component Lifecycle, SPA
* Component lifecycles and modern React Hooks (useState, useEffect, useMemo, useRef)
* Unidirectional data flow, prop drilling avoidance, and state lifting patterns
* Virtual DOM reconciliation, key prop semantics, and rendering optimization
* Client-side routing and asynchronous REST data fetching

**Apa yang Didapatkan & Implementasi Nyata:**
Directly underpins this portfolio website, PusakaKu, and multiple national competition platforms engineered with component-driven architecture.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/belajar-membuat-aplikasi-web-dengan-react"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
    en: {
      title: `Certificate: Belajar Membuat Aplikasi Web dengan React (Dicoding Indonesia)`,
      text: `**Verified Credential: Belajar Membuat Aplikasi Web dengan React**

* **Issuing Body:** Dicoding Indonesia
* **Issue Date & Credential ID:** 2025 (ID: \`DICODING-REACT-2025-DEV\`)
* **Verified Effort:** 60+ Hours · Intermediate Track
* **Specialization Track:** Frontend Component Architecture

**Curriculum & What Was Learned:**
Comprehensive React framework certification covering declarative UI paradigms, component composition, hooks, state isolation, and controlled forms.
* **Core Skills Mastered:** React.js, React Hooks, State Management, Virtual DOM, Component Lifecycle, SPA
* Component lifecycles and modern React Hooks (useState, useEffect, useMemo, useRef)
* Unidirectional data flow, prop drilling avoidance, and state lifting patterns
* Virtual DOM reconciliation, key prop semantics, and rendering optimization
* Client-side routing and asynchronous REST data fetching

**Takeaways & Practical Application:**
Directly underpins this portfolio website, PusakaKu, and multiple national competition platforms engineered with component-driven architecture.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/belajar-membuat-aplikasi-web-dengan-react"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
  },
  CERT_PYTHON_MEMULAI: {
    id: {
      title: `Sertifikat: Memulai Pemrograman Dengan Python (Dicoding Indonesia)`,
      text: `**Sertifikat Resmi: Memulai Pemrograman Dengan Python**

* **Institusi Penerbit:** Dicoding Indonesia
* **Waktu & Kredensial:** Diterbitkan 2024 (ID Kredensial: \`DICODING-PY-2024-INIT\`)
* **Beban Pembelajaran:** 35+ Hours · Foundational Track
* **Bidang Keahlian:** Python Fundamentals

**Apa yang Dipelajari & Kurikulum Utama:**
Introductory course into the Python programming language, focusing on clear code formatting (PEP 8), variable handling, data structures, and conditional logic.
* **Keahlian yang Dikuasai:** Python, PEP 8, Exception Handling, Scripting, Problem Solving
* Python clean code conventions and PEP 8 formatting guidelines
* Robust exception handling with try/except/finally blocks
* Function definitions, default arguments, and return types
* Standard library modules: math, datetime, random, and os interactions

**Apa yang Didapatkan & Implementasi Nyata:**
Strengthened algorithmic problem solving and provided the versatility to build backend scripts and utility tools quickly.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/memulai-pemrograman-dengan-python"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
    en: {
      title: `Certificate: Memulai Pemrograman Dengan Python (Dicoding Indonesia)`,
      text: `**Verified Credential: Memulai Pemrograman Dengan Python**

* **Issuing Body:** Dicoding Indonesia
* **Issue Date & Credential ID:** 2024 (ID: \`DICODING-PY-2024-INIT\`)
* **Verified Effort:** 35+ Hours · Foundational Track
* **Specialization Track:** Python Fundamentals

**Curriculum & What Was Learned:**
Introductory course into the Python programming language, focusing on clear code formatting (PEP 8), variable handling, data structures, and conditional logic.
* **Core Skills Mastered:** Python, PEP 8, Exception Handling, Scripting, Problem Solving
* Python clean code conventions and PEP 8 formatting guidelines
* Robust exception handling with try/except/finally blocks
* Function definitions, default arguments, and return types
* Standard library modules: math, datetime, random, and os interactions

**Takeaways & Practical Application:**
Strengthened algorithmic problem solving and provided the versatility to build backend scripts and utility tools quickly.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/memulai-pemrograman-dengan-python"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
  },
  CERT_WEB_DASAR: {
    id: {
      title: `Sertifikat: Belajar Dasar Pemrograman Web (Dicoding Indonesia)`,
      text: `**Sertifikat Resmi: Belajar Dasar Pemrograman Web**

* **Institusi Penerbit:** Dicoding Indonesia
* **Waktu & Kredensial:** Diterbitkan 2024 (ID Kredensial: \`DICODING-WEB-2024-BASE\`)
* **Beban Pembelajaran:** 40+ Hours · Foundational Track
* **Bidang Keahlian:** Web Fundamentals

**Apa yang Dipelajari & Kurikulum Utama:**
Core web standards course focused on HTML5 semantics, CSS styling principles, box model mastery, and building cross-browser responsive layouts.
* **Keahlian yang Dikuasai:** HTML5, CSS3, Box Model, Semantic Web, Responsive Layouts
* Semantic HTML structure (header, main, section, article, footer, nav)
* CSS box model (margin, padding, border, content box dimensions)
* Positioning schemes (relative, absolute, fixed, sticky) and z-index contexts
* Media queries and fluid layouts built without heavy frameworks

**Apa yang Didapatkan & Implementasi Nyata:**
Instilled deep respect for raw web standards, avoiding framework dependency for simple layout challenges.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/belajar-dasar-pemrograman-web"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
    en: {
      title: `Certificate: Belajar Dasar Pemrograman Web (Dicoding Indonesia)`,
      text: `**Verified Credential: Belajar Dasar Pemrograman Web**

* **Issuing Body:** Dicoding Indonesia
* **Issue Date & Credential ID:** 2024 (ID: \`DICODING-WEB-2024-BASE\`)
* **Verified Effort:** 40+ Hours · Foundational Track
* **Specialization Track:** Web Fundamentals

**Curriculum & What Was Learned:**
Core web standards course focused on HTML5 semantics, CSS styling principles, box model mastery, and building cross-browser responsive layouts.
* **Core Skills Mastered:** HTML5, CSS3, Box Model, Semantic Web, Responsive Layouts
* Semantic HTML structure (header, main, section, article, footer, nav)
* CSS box model (margin, padding, border, content box dimensions)
* Positioning schemes (relative, absolute, fixed, sticky) and z-index contexts
* Media queries and fluid layouts built without heavy frameworks

**Takeaways & Practical Application:**
Instilled deep respect for raw web standards, avoiding framework dependency for simple layout challenges.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/belajar-dasar-pemrograman-web"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
  },
  CERT_LOGIKA: {
    id: {
      title: `Sertifikat: Pengenalan ke Logika Pemrograman (Dicoding Indonesia)`,
      text: `**Sertifikat Resmi: Pengenalan ke Logika Pemrograman**

* **Institusi Penerbit:** Dicoding Indonesia
* **Waktu & Kredensial:** Diterbitkan 2023 (ID Kredensial: \`DICODING-LOGIC-2023-CS\`)
* **Beban Pembelajaran:** 20+ Hours · Foundational Track
* **Bidang Keahlian:** Computational Logic & Algorithms

**Apa yang Dipelajari & Kurikulum Utama:**
Introductory curriculum establishing computational thinking, flowchart modeling, pseudocode conventions, and boolean logic.
* **Keahlian yang Dikuasai:** Computational Thinking, Pseudocode, Flowcharts, Boolean Logic, Algorithms
* Algorithmic thinking and step-by-step problem decomposition
* Boolean algebra, truth tables, and conditional logic operators
* Flowcharts, sequence diagrams, and dry-run execution traces
* Iteration patterns, loop termination conditions, and edge cases

**Apa yang Didapatkan & Implementasi Nyata:**
Sharpened core problem-solving discipline, making debugging intuitive and structured rather than guess-and-check.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/pengenalan-ke-logika-pemrograman"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
    en: {
      title: `Certificate: Pengenalan ke Logika Pemrograman (Dicoding Indonesia)`,
      text: `**Verified Credential: Pengenalan ke Logika Pemrograman**

* **Issuing Body:** Dicoding Indonesia
* **Issue Date & Credential ID:** 2023 (ID: \`DICODING-LOGIC-2023-CS\`)
* **Verified Effort:** 20+ Hours · Foundational Track
* **Specialization Track:** Computational Logic & Algorithms

**Curriculum & What Was Learned:**
Introductory curriculum establishing computational thinking, flowchart modeling, pseudocode conventions, and boolean logic.
* **Core Skills Mastered:** Computational Thinking, Pseudocode, Flowcharts, Boolean Logic, Algorithms
* Algorithmic thinking and step-by-step problem decomposition
* Boolean algebra, truth tables, and conditional logic operators
* Flowcharts, sequence diagrams, and dry-run execution traces
* Iteration patterns, loop termination conditions, and edge cases

**Takeaways & Practical Application:**
Sharpened core problem-solving discipline, making debugging intuitive and structured rather than guess-and-check.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/pengenalan-ke-logika-pemrograman"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
  },
  CERT_C_SKILVUL: {
    id: {
      title: `Sertifikat: Pemrograman Dasar C (Skilvul)`,
      text: `**Sertifikat Resmi: Pemrograman Dasar C**

* **Institusi Penerbit:** Skilvul
* **Waktu & Kredensial:** Diterbitkan 2023 (ID Kredensial: \`SKILVUL-C-2023-BASE\`)
* **Beban Pembelajaran:** 25+ Hours · Foundational Track
* **Bidang Keahlian:** C Programming

**Apa yang Dipelajari & Kurikulum Utama:**
Practical C programming course covering input/output streams, conditional branching, repetitive loops, and multi-dimensional arrays.
* **Keahlian yang Dikuasai:** C, Skilvul, Loops & Arrays, Functions, Syntax & Logic
* Standard input/output streams with printf and scanf formatting
* Dynamic memory concepts, array indexing, and bounds safety
* Modular functions, header files, and standard C library utilization
* Structured logic implementations for arithmetic problem solving

**Apa yang Didapatkan & Implementasi Nyata:**
Reinforced early coding skills and mathematical programming techniques in my first year of vocational high school.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/pemrograman-dasar-c"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://skilvul.com"
        }
],
    },
    en: {
      title: `Certificate: Pemrograman Dasar C (Skilvul)`,
      text: `**Verified Credential: Pemrograman Dasar C**

* **Issuing Body:** Skilvul
* **Issue Date & Credential ID:** 2023 (ID: \`SKILVUL-C-2023-BASE\`)
* **Verified Effort:** 25+ Hours · Foundational Track
* **Specialization Track:** C Programming

**Curriculum & What Was Learned:**
Practical C programming course covering input/output streams, conditional branching, repetitive loops, and multi-dimensional arrays.
* **Core Skills Mastered:** C, Skilvul, Loops & Arrays, Functions, Syntax & Logic
* Standard input/output streams with printf and scanf formatting
* Dynamic memory concepts, array indexing, and bounds safety
* Modular functions, header files, and standard C library utilization
* Structured logic implementations for arithmetic problem solving

**Takeaways & Practical Application:**
Reinforced early coding skills and mathematical programming techniques in my first year of vocational high school.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/pemrograman-dasar-c"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://skilvul.com"
        }
],
    },
  },
  CERT_PROMPT_ENG: {
    id: {
      title: `Sertifikat: Dasar Prompt Engineering (AI Course)`,
      text: `**Sertifikat Resmi: Dasar Prompt Engineering**

* **Institusi Penerbit:** AI Course
* **Waktu & Kredensial:** Diterbitkan 2025 (ID Kredensial: \`AI-PROMPT-2025-SPEC\`)
* **Beban Pembelajaran:** 20+ Hours · AI Specialization
* **Bidang Keahlian:** Generative AI & LLM Systems

**Apa yang Dipelajari & Kurikulum Utama:**
Modern course on prompt design, few-shot prompting, chain-of-thought elicitation, system instructions, and LLM output guardrailing.
* **Keahlian yang Dikuasai:** Prompt Engineering, LLMs, Generative AI, Chain of Thought, System Prompts, AI Guardrails
* Zero-shot, one-shot, and few-shot contextual prompting techniques
* Chain-of-thought (CoT) and step-by-step reasoning prompts for complex tasks
* System prompts, role definitions, and strict behavioral safety boundaries
* Structured JSON output extraction from multimodal LLMs

**Apa yang Didapatkan & Implementasi Nyata:**
Directly applied when integrating Google Gemini AI virtual doctors in FitSmart and cultural AI concierges in JavaIsland.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/dasar-prompt-engineering"
        }
],
    },
    en: {
      title: `Certificate: Dasar Prompt Engineering (AI Course)`,
      text: `**Verified Credential: Dasar Prompt Engineering**

* **Issuing Body:** AI Course
* **Issue Date & Credential ID:** 2025 (ID: \`AI-PROMPT-2025-SPEC\`)
* **Verified Effort:** 20+ Hours · AI Specialization
* **Specialization Track:** Generative AI & LLM Systems

**Curriculum & What Was Learned:**
Modern course on prompt design, few-shot prompting, chain-of-thought elicitation, system instructions, and LLM output guardrailing.
* **Core Skills Mastered:** Prompt Engineering, LLMs, Generative AI, Chain of Thought, System Prompts, AI Guardrails
* Zero-shot, one-shot, and few-shot contextual prompting techniques
* Chain-of-thought (CoT) and step-by-step reasoning prompts for complex tasks
* System prompts, role definitions, and strict behavioral safety boundaries
* Structured JSON output extraction from multimodal LLMs

**Takeaways & Practical Application:**
Directly applied when integrating Google Gemini AI virtual doctors in FitSmart and cultural AI concierges in JavaIsland.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/dasar-prompt-engineering"
        }
],
    },
  },
  CERT_KARIER: {
    id: {
      title: `Sertifikat: Meniti Karier Sebagai Software Developer (Dicoding Indonesia)`,
      text: `**Sertifikat Resmi: Meniti Karier Sebagai Software Developer**

* **Institusi Penerbit:** Dicoding Indonesia
* **Waktu & Kredensial:** Diterbitkan 2024 (ID Kredensial: \`DICODING-CAREER-2024\`)
* **Beban Pembelajaran:** 15+ Hours · Professional Track
* **Bidang Keahlian:** Software Engineering & Industry Standards

**Apa yang Dipelajari & Kurikulum Utama:**
Comprehensive industry orientation covering software engineering roles, team methodologies (Agile/Scrum), code quality standards, and professional ethics.
* **Keahlian yang Dikuasai:** Software Development, Agile & Scrum, SDLC, Code Standards, Tech Career
* Software development lifecycles (SDLC) and sprint planning methodologies
* Understanding cross-functional roles (Product, QA, DevOps, Engineering)
* Engineering ethics, intellectual property, and documentation standards
* Building professional tech portfolios and technical communication

**Apa yang Didapatkan & Implementasi Nyata:**
Guided my team leadership style during national hackathons and prepared me to seamlessly transition into corporate internships.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/meniti-karier-sebagai-software-developer"
        },
        {
                "label": "Verifikasi Kredensial Resmi",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
    en: {
      title: `Certificate: Meniti Karier Sebagai Software Developer (Dicoding Indonesia)`,
      text: `**Verified Credential: Meniti Karier Sebagai Software Developer**

* **Issuing Body:** Dicoding Indonesia
* **Issue Date & Credential ID:** 2024 (ID: \`DICODING-CAREER-2024\`)
* **Verified Effort:** 15+ Hours · Professional Track
* **Specialization Track:** Software Engineering & Industry Standards

**Curriculum & What Was Learned:**
Comprehensive industry orientation covering software engineering roles, team methodologies (Agile/Scrum), code quality standards, and professional ethics.
* **Core Skills Mastered:** Software Development, Agile & Scrum, SDLC, Code Standards, Tech Career
* Software development lifecycles (SDLC) and sprint planning methodologies
* Understanding cross-functional roles (Product, QA, DevOps, Engineering)
* Engineering ethics, intellectual property, and documentation standards
* Building professional tech portfolios and technical communication

**Takeaways & Practical Application:**
Guided my team leadership style during national hackathons and prepared me to seamlessly transition into corporate internships.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/meniti-karier-sebagai-software-developer"
        },
        {
                "label": "Verify Credential Online",
                "url": "https://www.dicoding.com/certificates"
        }
],
    },
  },
  CERT_FINANCIAL: {
    id: {
      title: `Sertifikat: Financial Literacy Fundamentals (Finance Course)`,
      text: `**Sertifikat Resmi: Financial Literacy Fundamentals**

* **Institusi Penerbit:** Finance Course
* **Waktu & Kredensial:** Diterbitkan 2023 (ID Kredensial: \`FIN-LIT-2023-BASE\`)
* **Beban Pembelajaran:** 20+ Hours · Foundational Track
* **Bidang Keahlian:** Financial Economics & Literacy

**Apa yang Dipelajari & Kurikulum Utama:**
Foundational course exploring budgeting principles, cash flow management, digital transaction security, and personal financial modeling.
* **Keahlian yang Dikuasai:** Financial Literacy, Budgeting, Cash Flow, Economics, Risk Management
* Income vs expenditure tracking and allocation models
* Basic investment vehicles, risk profiles, and compound interest
* Digital payment gateways and security best practices
* Financial discipline and project budget forecasting

**Apa yang Didapatkan & Implementasi Nyata:**
Helped develop financial discipline and commercial awareness when scoping freelance client project budgets and contract terms.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/financial-literacy-fundamentals"
        }
],
    },
    en: {
      title: `Certificate: Financial Literacy Fundamentals (Finance Course)`,
      text: `**Verified Credential: Financial Literacy Fundamentals**

* **Issuing Body:** Finance Course
* **Issue Date & Credential ID:** 2023 (ID: \`FIN-LIT-2023-BASE\`)
* **Verified Effort:** 20+ Hours · Foundational Track
* **Specialization Track:** Financial Economics & Literacy

**Curriculum & What Was Learned:**
Foundational course exploring budgeting principles, cash flow management, digital transaction security, and personal financial modeling.
* **Core Skills Mastered:** Financial Literacy, Budgeting, Cash Flow, Economics, Risk Management
* Income vs expenditure tracking and allocation models
* Basic investment vehicles, risk profiles, and compound interest
* Digital payment gateways and security best practices
* Financial discipline and project budget forecasting

**Takeaways & Practical Application:**
Helped develop financial discipline and commercial awareness when scoping freelance client project budgets and contract terms.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/financial-literacy-fundamentals"
        }
],
    },
  },
  CERT_AI_BASICS: {
    id: {
      title: `Sertifikat: Artificial Intelligence Basics (AI Academy)`,
      text: `**Sertifikat Resmi: Artificial Intelligence Basics**

* **Institusi Penerbit:** AI Academy
* **Waktu & Kredensial:** Diterbitkan 2024 (ID Kredensial: \`AI-ACADEMY-2024-BASE\`)
* **Beban Pembelajaran:** 30+ Hours · Foundational Track
* **Bidang Keahlian:** Artificial Intelligence & Machine Learning

**Apa yang Dipelajari & Kurikulum Utama:**
Broad exploration of artificial intelligence concepts, machine learning taxonomies (supervised, unsupervised, reinforcement), neural networks, and AI ethics.
* **Keahlian yang Dikuasai:** Artificial Intelligence, Machine Learning, Neural Networks, NLP, Computer Vision, AI Ethics
* Supervised vs unsupervised learning paradigms and cost functions
* Computer vision and natural language processing pipelines
* Deep learning fundamentals and neural network architectures
* Ethical considerations, bias mitigation, and responsible AI deployment

**Apa yang Didapatkan & Implementasi Nyata:**
Provided the conceptual clarity necessary to evaluate when to deploy heuristic algorithms vs deep learning models in real-world applications.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/artificial-intelligence-basics"
        }
],
    },
    en: {
      title: `Certificate: Artificial Intelligence Basics (AI Academy)`,
      text: `**Verified Credential: Artificial Intelligence Basics**

* **Issuing Body:** AI Academy
* **Issue Date & Credential ID:** 2024 (ID: \`AI-ACADEMY-2024-BASE\`)
* **Verified Effort:** 30+ Hours · Foundational Track
* **Specialization Track:** Artificial Intelligence & Machine Learning

**Curriculum & What Was Learned:**
Broad exploration of artificial intelligence concepts, machine learning taxonomies (supervised, unsupervised, reinforcement), neural networks, and AI ethics.
* **Core Skills Mastered:** Artificial Intelligence, Machine Learning, Neural Networks, NLP, Computer Vision, AI Ethics
* Supervised vs unsupervised learning paradigms and cost functions
* Computer vision and natural language processing pipelines
* Deep learning fundamentals and neural network architectures
* Ethical considerations, bias mitigation, and responsible AI deployment

**Takeaways & Practical Application:**
Provided the conceptual clarity necessary to evaluate when to deploy heuristic algorithms vs deep learning models in real-world applications.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/artificial-intelligence-basics"
        }
],
    },
  },
  CERT_GDG: {
    id: {
      title: `Sertifikat: Google Developer Groups Participant (Google Developer Groups)`,
      text: `**Sertifikat Resmi: Google Developer Groups Participant**

* **Institusi Penerbit:** Google Developer Groups
* **Waktu & Kredensial:** Diterbitkan 2024 (ID Kredensial: \`GDG-PARTICIPANT-2024\`)
* **Beban Pembelajaran:** Industry Participation
* **Bidang Keahlian:** Community & Technical Keynotes

**Apa yang Dipelajari & Kurikulum Utama:**
Active participation in Google Developer Groups tech summits, engaging with developer advocates on modern web technologies, Android, Cloud, and Gemini APIs.
* **Keahlian yang Dikuasai:** Google Developer Groups, Tech Community, Web Standards, Cloud Workshops, Networking
* Keynote sessions on modern web performance and Core Web Vitals
* Hands-on workshops on Google Cloud and Firebase real-time integrations
* Networking with senior industry engineers and open-source contributors
* Best practices for building scalable, accessible web products

**Apa yang Didapatkan & Implementasi Nyata:**
Broadened technical horizons through direct interaction with community leaders, inspiring adoption of bleeding-edge web tooling and cloud patterns.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/google-developer-groups-participant"
        }
],
    },
    en: {
      title: `Certificate: Google Developer Groups Participant (Google Developer Groups)`,
      text: `**Verified Credential: Google Developer Groups Participant**

* **Issuing Body:** Google Developer Groups
* **Issue Date & Credential ID:** 2024 (ID: \`GDG-PARTICIPANT-2024\`)
* **Verified Effort:** Industry Participation
* **Specialization Track:** Community & Technical Keynotes

**Curriculum & What Was Learned:**
Active participation in Google Developer Groups tech summits, engaging with developer advocates on modern web technologies, Android, Cloud, and Gemini APIs.
* **Core Skills Mastered:** Google Developer Groups, Tech Community, Web Standards, Cloud Workshops, Networking
* Keynote sessions on modern web performance and Core Web Vitals
* Hands-on workshops on Google Cloud and Firebase real-time integrations
* Networking with senior industry engineers and open-source contributors
* Best practices for building scalable, accessible web products

**Takeaways & Practical Application:**
Broadened technical horizons through direct interaction with community leaders, inspiring adoption of bleeding-edge web tooling and cloud patterns.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/google-developer-groups-participant"
        }
],
    },
  },
  CERT_ENGLISH: {
    id: {
      title: `Sertifikat: English Proficiency Assessment (English Language Course)`,
      text: `**Sertifikat Resmi: English Proficiency Assessment**

* **Institusi Penerbit:** English Language Course
* **Waktu & Kredensial:** Diterbitkan 2024 (ID Kredensial: \`ENG-PROF-2024-ASSESS\`)
* **Beban Pembelajaran:** Intermediate / Professional Communication
* **Bidang Keahlian:** Language & Professional Communication

**Apa yang Dipelajari & Kurikulum Utama:**
Standardized evaluation of English reading comprehension, technical writing, listening, and spoken conversational fluency in professional settings.
* **Keahlian yang Dikuasai:** English Proficiency, Technical Writing, Professional Communication, Public Speaking, Reading Comprehension
* Technical documentation reading and API specification comprehension
* Professional email correspondence, pull request reviews, and sprint standup communication
* Listening comprehension across diverse international accents
* Verbal presentation and pitching of software architectures

**Apa yang Didapatkan & Implementasi Nyata:**
Equipped me with fluent English communication required for consuming international technical documentation, writing clean codebases, and speaking confidently during cross-cultural initiatives.`,
      links: [
        {
                "label": "Lihat Studi Kasus Sertifikat",
                "url": "/certificates/english-proficiency-assessment"
        }
],
    },
    en: {
      title: `Certificate: English Proficiency Assessment (English Language Course)`,
      text: `**Verified Credential: English Proficiency Assessment**

* **Issuing Body:** English Language Course
* **Issue Date & Credential ID:** 2024 (ID: \`ENG-PROF-2024-ASSESS\`)
* **Verified Effort:** Intermediate / Professional Communication
* **Specialization Track:** Language & Professional Communication

**Curriculum & What Was Learned:**
Standardized evaluation of English reading comprehension, technical writing, listening, and spoken conversational fluency in professional settings.
* **Core Skills Mastered:** English Proficiency, Technical Writing, Professional Communication, Public Speaking, Reading Comprehension
* Technical documentation reading and API specification comprehension
* Professional email correspondence, pull request reviews, and sprint standup communication
* Listening comprehension across diverse international accents
* Verbal presentation and pitching of software architectures

**Takeaways & Practical Application:**
Equipped me with fluent English communication required for consuming international technical documentation, writing clean codebases, and speaking confidently during cross-cultural initiatives.`,
      links: [
        {
                "label": "View Certificate Case Study",
                "url": "/certificates/english-proficiency-assessment"
        }
],
    },
  },

  RICHO_BAHARI_DETAIL: {
    id: {
      title: `Proyek: CV. Richo Bahari (Corporate Profile & Industrial Engineering Project Catalog)`,
      text: `**Proyek: CV. Richo Bahari (Corporate Profile & Industrial Engineering Project Catalog)**

* **Ringkasan Sistem:** Official corporate web platform and digital portfolio for CV. Richo Bahari, a General Contractor and Industrial Engineering firm operating across West Java and Jabodetabek. Built with Next.js 16, React 19, and Tailwind CSS v4 to showcase civil construction, industrial MEP, steel fabrication, and heavy-duty storage racking under K3 Zero Accident standards.
* **Tahun Peluncuran:** 2025
* **Teknologi Utama:** Next.js 16, React 19, Tailwind CSS v4, TypeScript, React Compiler, PostCSS, SEO & SSG, Industrial EPC

**Fitur & Arsitektur Utama:**
* **Corporate Credibility & Modern Identity:** Digital flagship presenting engineering capabilities, safety standards, and worksite credibility.
* **Structured Industrial Case Studies:** Verified project breakdowns (roads, racks, factories, and jigs) with client names, challenges, and measurable results.
* **Next.js 16 & React 19 Architecture:** Server-side rendering, Tailwind CSS v4, and automatic React memoization for fast load times and clean SEO.
* **K3 Zero Accident & Safety Standards:** Highlights strict safety protocols and standard operating procedures required by multinational industrial clients.

**Metrik Kunci & Performa (KPIs):**
* **Zero Acc.:** K3 Safety Record - Absolute zero-accident commitment across all field sites
* **5 Pillars:** Industrial Services - Civil, Mechanical, Electrical, Fabrication, and Racking
* **100%:** Next.js 16 App Router - Cutting-edge React 19 & Tailwind v4 with React Compiler
* **2 Prov.:** Operational Hubs - Serving West Java (Sukabumi, Cikarang) and Jabodetabek
* **Turnkey:** Delivery Model - Single point of accountability from survey to handover
* **< 1.2s:** Page Load Time - Sub-second LCP optimized via Next.js server components`,
      links: [
        {
                "label": "Studi Kasus Proyek CV. Richo Bahari",
                "url": "/projects/richobahari"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/CentraDev-Team/RichoBahariCompro"
        }
],
    },
    en: {
      title: `Project: CV. Richo Bahari (Corporate Profile & Industrial Engineering Project Catalog)`,
      text: `**Project: CV. Richo Bahari (Corporate Profile & Industrial Engineering Project Catalog)**

* **System Overview:** Official corporate web platform and digital portfolio for CV. Richo Bahari, a General Contractor and Industrial Engineering firm operating across West Java and Jabodetabek. Built with Next.js 16, React 19, and Tailwind CSS v4 to showcase civil construction, industrial MEP, steel fabrication, and heavy-duty storage racking under K3 Zero Accident standards.
* **Delivered Year:** 2025
* **Core Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, TypeScript, React Compiler, PostCSS, SEO & SSG, Industrial EPC

**Core Architecture & Features:**
* **Corporate Credibility & Modern Identity:** Digital flagship presenting engineering capabilities, safety standards, and worksite credibility.
* **Structured Industrial Case Studies:** Verified project breakdowns (roads, racks, factories, and jigs) with client names, challenges, and measurable results.
* **Next.js 16 & React 19 Architecture:** Server-side rendering, Tailwind CSS v4, and automatic React memoization for fast load times and clean SEO.
* **K3 Zero Accident & Safety Standards:** Highlights strict safety protocols and standard operating procedures required by multinational industrial clients.

**Key Metrics & Performance (KPIs):**
* **Zero Acc.:** K3 Safety Record - Absolute zero-accident commitment across all field sites
* **5 Pillars:** Industrial Services - Civil, Mechanical, Electrical, Fabrication, and Racking
* **100%:** Next.js 16 App Router - Cutting-edge React 19 & Tailwind v4 with React Compiler
* **2 Prov.:** Operational Hubs - Serving West Java (Sukabumi, Cikarang) and Jabodetabek
* **Turnkey:** Delivery Model - Single point of accountability from survey to handover
* **< 1.2s:** Page Load Time - Sub-second LCP optimized via Next.js server components`,
      links: [
        {
                "label": "CV. Richo Bahari Project Case Study",
                "url": "/projects/richobahari"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/CentraDev-Team/RichoBahariCompro"
        }
],
    },
  },
  TERASTANI_DETAIL: {
    id: {
      title: `Proyek: TerasTani (Decentralized Urban Micro-Farm Operating System & AI Precision Agriculture)`,
      text: `**Proyek: TerasTani (Decentralized Urban Micro-Farm Operating System & AI Precision Agriculture)**

* **Ringkasan Sistem:** A decentralized urban micro-farm operating system designed to reduce post-harvest loss and retail fragmentation. Aligned with UN SDGs (2, 11, 12, 13), TerasTani aggregates balcony and yard harvests within 200–500m into communal RW crate hubs with AI leaf spectrometry and smart escrow settlement.
* **Tahun Peluncuran:** 2026
* **Teknologi Utama:** React 19, Vite 8, Node.js 20, Express 5, PostgreSQL, Supabase, Tailwind CSS v4, Computer Vision AI, Smart Escrow, IoT Telemetry

**Fitur & Arsitektur Utama:**
* **Decentralized Hub Crate Topology:** Aggregates small residential harvests into bulk commercial crates within a 200–500m walking radius.
* **Computer Vision Leaf Spectrometry:** In-browser canvas color-space analysis evaluating leaf vitality and locking purchase prices without external GPU APIs.
* **Smart Escrow Financial Security:** Locks distributor funds in advance and automatically releases payouts to grower wallets upon weighing verification.
* **Live IoT Microclimate Telemetry:** Streams temperature, humidity, light, and pH data with parallel background fetchers to eliminate loading flicker.

**Metrik Kunci & Performa (KPIs):**
* **200-500m:** Walking Radius - Zero-mile micro-transport connecting home gardens to RW hub
* **Grade A+:** Computer Vision AI - Canvas pixel spectrometry estimating SPAD & leaf chlorosis
* **Smart Escrow:** Financial Settlement - Locked distributor funds automatically disbursed upon weighing
* **4 SDGs:** Global Alignment - SDG 2 (Zero Hunger), 11 (Cities), 12 (Production), 13 (Climate)
* **4 Land Types:** Precision Agronomy - Balconies, residential yards, concrete rooftops, and vertical walls
* **1-Click:** Role Switcher - Seamless perspective toggle: Citizen Cultivator to Partner Distributor`,
      links: [
        {
                "label": "Studi Kasus Proyek TerasTani",
                "url": "/projects/terastani"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/TerasTani"
        }
],
    },
    en: {
      title: `Project: TerasTani (Decentralized Urban Micro-Farm Operating System & AI Precision Agriculture)`,
      text: `**Project: TerasTani (Decentralized Urban Micro-Farm Operating System & AI Precision Agriculture)**

* **System Overview:** A decentralized urban micro-farm operating system designed to reduce post-harvest loss and retail fragmentation. Aligned with UN SDGs (2, 11, 12, 13), TerasTani aggregates balcony and yard harvests within 200–500m into communal RW crate hubs with AI leaf spectrometry and smart escrow settlement.
* **Delivered Year:** 2026
* **Core Tech Stack:** React 19, Vite 8, Node.js 20, Express 5, PostgreSQL, Supabase, Tailwind CSS v4, Computer Vision AI, Smart Escrow, IoT Telemetry

**Core Architecture & Features:**
* **Decentralized Hub Crate Topology:** Aggregates small residential harvests into bulk commercial crates within a 200–500m walking radius.
* **Computer Vision Leaf Spectrometry:** In-browser canvas color-space analysis evaluating leaf vitality and locking purchase prices without external GPU APIs.
* **Smart Escrow Financial Security:** Locks distributor funds in advance and automatically releases payouts to grower wallets upon weighing verification.
* **Live IoT Microclimate Telemetry:** Streams temperature, humidity, light, and pH data with parallel background fetchers to eliminate loading flicker.

**Key Metrics & Performance (KPIs):**
* **200-500m:** Walking Radius - Zero-mile micro-transport connecting home gardens to RW hub
* **Grade A+:** Computer Vision AI - Canvas pixel spectrometry estimating SPAD & leaf chlorosis
* **Smart Escrow:** Financial Settlement - Locked distributor funds automatically disbursed upon weighing
* **4 SDGs:** Global Alignment - SDG 2 (Zero Hunger), 11 (Cities), 12 (Production), 13 (Climate)
* **4 Land Types:** Precision Agronomy - Balconies, residential yards, concrete rooftops, and vertical walls
* **1-Click:** Role Switcher - Seamless perspective toggle: Citizen Cultivator to Partner Distributor`,
      links: [
        {
                "label": "TerasTani Project Case Study",
                "url": "/projects/terastani"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/TerasTani"
        }
],
    },
  },
  KEPK_DETAIL: {
    id: {
      title: `Proyek: SIM KEPK FK UMJ (Web-Based Academic Research Ethics Management & WHO/CIOMS Clearance Platform)`,
      text: `**Proyek: SIM KEPK FK UMJ (Web-Based Academic Research Ethics Management & WHO/CIOMS Clearance Platform)**

* **Ringkasan Sistem:** A full-stack academic research ethics governance platform developed for the Faculty of Medicine, Universitas Muhammadiyah Jakarta (FK UMJ). Standardized to WHO/CIOMS 2016 and national KEPPKN guidelines, it digitizes the full ethical clearance lifecycle from submission to post-approval.
* **Tahun Peluncuran:** 2025
* **Teknologi Utama:** Laravel 12, PHP 8.2, Tailwind CSS v4, MySQL, Fortify 2FA, Spatie RBAC, DomPDF, AWS Cloud

**Fitur & Arsitektur Utama:**
* **Dynamic Subtype Strategy Pattern:** Uses Strategy Resolver to route Clinical, Non-Clinical, Animal, and Social protocols to specialized validation pipelines.
* **Draft Mode & Relational Integrity:** Allows progressive form saving with nullable fields, protected by MySQL transactions and 24 backed medical enums.
* **Chapter-by-Chapter AJAX Evaluation:** Enables ethics reviewers to score and critique individual protocol sections asynchronously without page reloads.
* **Institutional Reviewer Guardrails:** Enforces a 24-hour assignment cooldown and a minimum 3-reviewer quorum for high-risk Full Board studies.

**Metrik Kunci & Performa (KPIs):**
* **100%:** WHO/CIOMS Compliance - Full alignment with CIOMS 2016 7 ethical standards & 41 criteria
* **4-Stage:** Research Subtypes - Clinical Trials, Non-Clinical, Animal Testing (3R), and Community Social
* **24-Hour:** Workload Guard - Automated cooldown prevents reviewer fatigue and conflict of interest
* **6 Roles:** Granular RBAC - Admin, Chairman, Vice Chair, Secretariat, Reviewer, and Researcher
* **10 Berkas:** Attachment Verification - Proposal, informed consent, instruments, budget, CV, and bank slips
* **A4 DomPDF:** Official Certification - Instant tamper-evident Ethical Clearance PDF with dynamic QR verification`,
      links: [
        {
                "label": "Studi Kasus Proyek SIM KEPK FK UMJ",
                "url": "/projects/kepk"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/kepk-backend"
        }
],
    },
    en: {
      title: `Project: SIM KEPK FK UMJ (Web-Based Academic Research Ethics Management & WHO/CIOMS Clearance Platform)`,
      text: `**Project: SIM KEPK FK UMJ (Web-Based Academic Research Ethics Management & WHO/CIOMS Clearance Platform)**

* **System Overview:** A full-stack academic research ethics governance platform developed for the Faculty of Medicine, Universitas Muhammadiyah Jakarta (FK UMJ). Standardized to WHO/CIOMS 2016 and national KEPPKN guidelines, it digitizes the full ethical clearance lifecycle from submission to post-approval.
* **Delivered Year:** 2025
* **Core Tech Stack:** Laravel 12, PHP 8.2, Tailwind CSS v4, MySQL, Fortify 2FA, Spatie RBAC, DomPDF, AWS Cloud

**Core Architecture & Features:**
* **Dynamic Subtype Strategy Pattern:** Uses Strategy Resolver to route Clinical, Non-Clinical, Animal, and Social protocols to specialized validation pipelines.
* **Draft Mode & Relational Integrity:** Allows progressive form saving with nullable fields, protected by MySQL transactions and 24 backed medical enums.
* **Chapter-by-Chapter AJAX Evaluation:** Enables ethics reviewers to score and critique individual protocol sections asynchronously without page reloads.
* **Institutional Reviewer Guardrails:** Enforces a 24-hour assignment cooldown and a minimum 3-reviewer quorum for high-risk Full Board studies.

**Key Metrics & Performance (KPIs):**
* **100%:** WHO/CIOMS Compliance - Full alignment with CIOMS 2016 7 ethical standards & 41 criteria
* **4-Stage:** Research Subtypes - Clinical Trials, Non-Clinical, Animal Testing (3R), and Community Social
* **24-Hour:** Workload Guard - Automated cooldown prevents reviewer fatigue and conflict of interest
* **6 Roles:** Granular RBAC - Admin, Chairman, Vice Chair, Secretariat, Reviewer, and Researcher
* **10 Berkas:** Attachment Verification - Proposal, informed consent, instruments, budget, CV, and bank slips
* **A4 DomPDF:** Official Certification - Instant tamper-evident Ethical Clearance PDF with dynamic QR verification`,
      links: [
        {
                "label": "SIM KEPK FK UMJ Project Case Study",
                "url": "/projects/kepk"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/kepk-backend"
        }
],
    },
  },
  DATABANK_DETAIL: {
    id: {
      title: `Proyek: Databank ERP (Enterprise Telecom & Vendor Management System)`,
      text: `**Proyek: Databank ERP (Enterprise Telecom & Vendor Management System)**

* **Ringkasan Sistem:** An end-to-end enterprise platform unifying large-scale telecom field operations, purchase order tracking, implementation documents, acceptance and invoicing, automated Huawei ISDP bot scraping, outsource vendor management with 3-stage sequential digital signature approvals, and geofenced attendance integrated into payroll.
* **Tahun Peluncuran:** 2025
* **Teknologi Utama:** React, Vite, NestJS, PostgreSQL, TypeScript, PrismaORM, Docker, CI/CD

**Fitur & Arsitektur Utama:**
* **Field Operations & Project Support:** Installation status tracking, multi-tier Job Order (JO) approval workflows, Official Handover Certificates (BAST), and site coordinate verification.
* **Procurement & Subcontractor Management:** Centralized database for outsource purchase orders, phased payment terms (Down Payment, Milestone 1, Final Settlement), and task item quota validation.
* **Huawei ISDP Scraping & Automation:** Headless browser scraping pipeline intercepting and extracting real-time datasets from the Huawei ISDP portal without manual labor.
* **Workforce Geolocation & Payroll:** GPS geofenced daily attendance with cryptographically verified server-time, automated national holiday detection, and integrated overtime payroll calculation.

**Metrik Kunci & Performa (KPIs):**
* **50,000+:** Data Rows Rendered - Lag-free virtualized table rendering via React Virtuoso
* **Active:** Build Status - Core modules in active engineering delivery
* **4,328:** SKUs Migrated - Zero reconciliation error via shadow dual-write
* **65:** Granular Permissions - Dual-layer RBAC + Individual user overrides
* **3-Stage:** Sequential Approval - PS/SS → RPM → SPM with digital canvas signatures
* **3:** Languages Supported - ID, EN, ZH (instant runtime i18n switch)`,
      links: [
        {
                "label": "Studi Kasus Proyek Databank ERP",
                "url": "/projects/databank"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "#"
        }
],
    },
    en: {
      title: `Project: Databank ERP (Enterprise Telecom & Vendor Management System)`,
      text: `**Project: Databank ERP (Enterprise Telecom & Vendor Management System)**

* **System Overview:** An end-to-end enterprise platform unifying large-scale telecom field operations, purchase order tracking, implementation documents, acceptance and invoicing, automated Huawei ISDP bot scraping, outsource vendor management with 3-stage sequential digital signature approvals, and geofenced attendance integrated into payroll.
* **Delivered Year:** 2025
* **Core Tech Stack:** React, Vite, NestJS, PostgreSQL, TypeScript, PrismaORM, Docker, CI/CD

**Core Architecture & Features:**
* **Field Operations & Project Support:** Installation status tracking, multi-tier Job Order (JO) approval workflows, Official Handover Certificates (BAST), and site coordinate verification.
* **Procurement & Subcontractor Management:** Centralized database for outsource purchase orders, phased payment terms (Down Payment, Milestone 1, Final Settlement), and task item quota validation.
* **Huawei ISDP Scraping & Automation:** Headless browser scraping pipeline intercepting and extracting real-time datasets from the Huawei ISDP portal without manual labor.
* **Workforce Geolocation & Payroll:** GPS geofenced daily attendance with cryptographically verified server-time, automated national holiday detection, and integrated overtime payroll calculation.

**Key Metrics & Performance (KPIs):**
* **50,000+:** Data Rows Rendered - Lag-free virtualized table rendering via React Virtuoso
* **Active:** Build Status - Core modules in active engineering delivery
* **4,328:** SKUs Migrated - Zero reconciliation error via shadow dual-write
* **65:** Granular Permissions - Dual-layer RBAC + Individual user overrides
* **3-Stage:** Sequential Approval - PS/SS → RPM → SPM with digital canvas signatures
* **3:** Languages Supported - ID, EN, ZH (instant runtime i18n switch)`,
      links: [
        {
                "label": "Databank ERP Project Case Study",
                "url": "/projects/databank"
        },
        {
                "label": "View Source Code / Demo",
                "url": "#"
        }
],
    },
  },
  RUANGTUMBUH_DETAIL: {
    id: {
      title: `Proyek: RuangTumbuh (Time Banking Educational Ecosystem & Mentorship Platform)`,
      text: `**Proyek: RuangTumbuh (Time Banking Educational Ecosystem & Mentorship Platform)**

* **Ringkasan Sistem:** A peer-to-peer educational platform built on the Time Banking paradigm, where one hour of learning any discipline holds equal value to one hour of teaching. Powered by atomic PostgreSQL time-wallet transactions, real-time Socket.io communication, an interactive Matter.js 2D physics engine, and Google Gemini AI assistance.
* **Tahun Peluncuran:** 2025
* **Teknologi Utama:** React, Vite, Express, PostgreSQL, Prisma, Socket.io, Gemini AI, Matter.js, Docker

**Fitur & Arsitektur Utama:**
* **Time Wallet Banking Engine:** A cashless peer-to-peer knowledge exchange. Every new user receives 30 free minutes upon signup, trading learning hours instead of currency with atomic escrow and instant refunds.
* **Interactive 2D Physics & Kinetic UX:** Hero canvas powered by Matter.js rigid-body physics, Lenis smooth inertia scrolling, and Framer Motion spring micro-interactions creating a playful, engaging feel.
* **Real-time Messaging & Community Hub:** JWT-authenticated WebSocket pipeline via Socket.io, supporting low-latency 1-on-1 private mentoring chat and 5 topic-focused public community groups.
* **Google Gemini AI Copilot:** Embedded AI assistant leveraging gemini-flash-latest with custom system instructions to guide students, recommend mentors, and resolve time wallet queries.

**Metrik Kunci & Performa (KPIs):**
* **1 : 1:** Time Value Parity - 1 hour of design = 1 hour of physics across all courses
* **100%:** Atomic Guarantee - Zero partial writes or balance drift via prisma.$transaction
* **26:** Curated Disciplines - Dynamic courses across engineering, design, and science
* **<200ms:** p95 API Latency - High-throughput Express 5 backend deployed on Railway
* **30 Min:** Session Safeguard - Automated idle logout guarding active time balances
* **100%:** Contract Parity - Shared Zod schemas across client forms and server parsers`,
      links: [
        {
                "label": "Studi Kasus Proyek RuangTumbuh",
                "url": "/projects/ruangtumbuh"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://ruang-tumbuh.vercel.app/"
        }
],
    },
    en: {
      title: `Project: RuangTumbuh (Time Banking Educational Ecosystem & Mentorship Platform)`,
      text: `**Project: RuangTumbuh (Time Banking Educational Ecosystem & Mentorship Platform)**

* **System Overview:** A peer-to-peer educational platform built on the Time Banking paradigm, where one hour of learning any discipline holds equal value to one hour of teaching. Powered by atomic PostgreSQL time-wallet transactions, real-time Socket.io communication, an interactive Matter.js 2D physics engine, and Google Gemini AI assistance.
* **Delivered Year:** 2025
* **Core Tech Stack:** React, Vite, Express, PostgreSQL, Prisma, Socket.io, Gemini AI, Matter.js, Docker

**Core Architecture & Features:**
* **Time Wallet Banking Engine:** A cashless peer-to-peer knowledge exchange. Every new user receives 30 free minutes upon signup, trading learning hours instead of currency with atomic escrow and instant refunds.
* **Interactive 2D Physics & Kinetic UX:** Hero canvas powered by Matter.js rigid-body physics, Lenis smooth inertia scrolling, and Framer Motion spring micro-interactions creating a playful, engaging feel.
* **Real-time Messaging & Community Hub:** JWT-authenticated WebSocket pipeline via Socket.io, supporting low-latency 1-on-1 private mentoring chat and 5 topic-focused public community groups.
* **Google Gemini AI Copilot:** Embedded AI assistant leveraging gemini-flash-latest with custom system instructions to guide students, recommend mentors, and resolve time wallet queries.

**Key Metrics & Performance (KPIs):**
* **1 : 1:** Time Value Parity - 1 hour of design = 1 hour of physics across all courses
* **100%:** Atomic Guarantee - Zero partial writes or balance drift via prisma.$transaction
* **26:** Curated Disciplines - Dynamic courses across engineering, design, and science
* **<200ms:** p95 API Latency - High-throughput Express 5 backend deployed on Railway
* **30 Min:** Session Safeguard - Automated idle logout guarding active time balances
* **100%:** Contract Parity - Shared Zod schemas across client forms and server parsers`,
      links: [
        {
                "label": "RuangTumbuh Project Case Study",
                "url": "/projects/ruangtumbuh"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://ruang-tumbuh.vercel.app/"
        }
],
    },
  },
  FITSMART_DETAIL: {
    id: {
      title: `Proyek: FitSmart (AI-Powered Preventive Healthcare & Clinical Lifestyle Platform)`,
      text: `**Proyek: FitSmart (AI-Powered Preventive Healthcare & Clinical Lifestyle Platform)**

* **Ringkasan Sistem:** A lightweight, client-centric digital healthcare platform designed to democratize preventive medicine. Powered by Google Gemini Pro API with strict clinical domain guardrails, a 24-modal disease diagnostic encyclopedia, evidence-based nutrition science indexing 16+ superfoods, and discipline-specific athletic conditioning routines.
* **Tahun Peluncuran:** 2024
* **Teknologi Utama:** HTML5, CSS3, JavaScript, Gemini Pro AI, FontAwesome

**Fitur & Arsitektur Utama:**
* **Gemini Pro AI Medical Assistant:** Direct REST integration with Google Gemini Pro API featuring deterministic temperature parameters, animated thinking states, and error fallback handling.
* **Clinical Disease & Diagnostic Hub:** 24 modular interactive popups detailing etiology, diagnostic symptoms, clinical treatments, and lifestyle prevention for 6 critical diseases.
* **Nutritional Science & Superfoods:** Comprehensive dietary guidelines indexing 16+ nutrient profiles from cruciferous greens to antioxidant superfoods and cardiovascular omega-3 proteins.
* **Discipline-Specific Athletic Engine:** Dynamic activity guides detailing sports conditioning (Basketball, Soccer, Badminton) and calisthenics routines with zero external runtime dependencies.

**Metrik Kunci & Performa (KPIs):**
* **< 1.2s:** Gemini API Response - Optimized prompt payload with zero temperature for clinical accuracy
* **24:** Diagnostic Modals - Granular symptom, pathology, and therapy popups across 6 conditions
* **100%:** Domain Gating - Strict lexical whitelist rejecting out-of-scope health queries
* **3 Pillars:** Wellness Matrix - Unified ecosystem: Clinical Education · Dietetics · Active Fitness
* **0ms:** Zero-Build Latency - Pure vanilla web execution without runtime framework overhead
* **3,000ms:** Anti-Spam Window - Client-side request lock preventing API quota exhaustion`,
      links: [
        {
                "label": "Studi Kasus Proyek FitSmart",
                "url": "/projects/fitsmart"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/FitSmart"
        }
],
    },
    en: {
      title: `Project: FitSmart (AI-Powered Preventive Healthcare & Clinical Lifestyle Platform)`,
      text: `**Project: FitSmart (AI-Powered Preventive Healthcare & Clinical Lifestyle Platform)**

* **System Overview:** A lightweight, client-centric digital healthcare platform designed to democratize preventive medicine. Powered by Google Gemini Pro API with strict clinical domain guardrails, a 24-modal disease diagnostic encyclopedia, evidence-based nutrition science indexing 16+ superfoods, and discipline-specific athletic conditioning routines.
* **Delivered Year:** 2024
* **Core Tech Stack:** HTML5, CSS3, JavaScript, Gemini Pro AI, FontAwesome

**Core Architecture & Features:**
* **Gemini Pro AI Medical Assistant:** Direct REST integration with Google Gemini Pro API featuring deterministic temperature parameters, animated thinking states, and error fallback handling.
* **Clinical Disease & Diagnostic Hub:** 24 modular interactive popups detailing etiology, diagnostic symptoms, clinical treatments, and lifestyle prevention for 6 critical diseases.
* **Nutritional Science & Superfoods:** Comprehensive dietary guidelines indexing 16+ nutrient profiles from cruciferous greens to antioxidant superfoods and cardiovascular omega-3 proteins.
* **Discipline-Specific Athletic Engine:** Dynamic activity guides detailing sports conditioning (Basketball, Soccer, Badminton) and calisthenics routines with zero external runtime dependencies.

**Key Metrics & Performance (KPIs):**
* **< 1.2s:** Gemini API Response - Optimized prompt payload with zero temperature for clinical accuracy
* **24:** Diagnostic Modals - Granular symptom, pathology, and therapy popups across 6 conditions
* **100%:** Domain Gating - Strict lexical whitelist rejecting out-of-scope health queries
* **3 Pillars:** Wellness Matrix - Unified ecosystem: Clinical Education · Dietetics · Active Fitness
* **0ms:** Zero-Build Latency - Pure vanilla web execution without runtime framework overhead
* **3,000ms:** Anti-Spam Window - Client-side request lock preventing API quota exhaustion`,
      links: [
        {
                "label": "FitSmart Project Case Study",
                "url": "/projects/fitsmart"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/FitSmart"
        }
],
    },
  },
  JAVAISLAND_DETAIL: {
    id: {
      title: `Proyek: JavaIsland (AI-Powered Cultural Heritage & Tourism Portal for Java)`,
      text: `**Proyek: JavaIsland (AI-Powered Cultural Heritage & Tourism Portal for Java)**

* **Ringkasan Sistem:** An interactive cultural preservation and tourism platform dedicated to Java Island. Engineered with Vue.js-driven 3D mouse parallax city exploration, Google's Gemini 1.5 Flash generative AI concierge ('Tanya Jawa') with bilingual domain guardrails, imperial historical chronicles, and traditional culinary archives.
* **Tahun Peluncuran:** 2023
* **Teknologi Utama:** HTML5, CSS3, Tailwind CSS, Vue.js, Gemini 1.5 Flash, JavaScript

**Fitur & Arsitektur Utama:**
* **Gemini 1.5 Flash AI Concierge:** Integrated low-latency LLM endpoint delivering culturally accurate answers with bilingual keyword gating and graceful error recovery.
* **Reactive 3D Parallax Card Engine:** Vue.js mathematical pointer tracking generating real-time 3D isometric rotation and depth illusions without heavy WebGL overhead.
* **Cultural Heritage & Historical Archives:** Comprehensive documentation of imperial Javanese history, royal court ceremonies, and UNESCO-recognized intangible cultural traditions.
* **Gastronomy & Destination Discovery:** Dedicated culinary origin breakdowns paired with multi-parameter destination filters for prospective domestic and international travelers.

**Metrik Kunci & Performa (KPIs):**
* **< 950ms:** Gemini Flash AI Latency - Fast streaming REST inference via gemini-1.5-flash-latest
* **24 Terms:** Bilingual Whitelist Gating - Restricts queries to Indonesian & English cultural keywords
* **8 Cities:** 3D Parallax Tilt Cards - Interactive mouse-tracking perspective transforms in Vue.js
* **9 Domains:** Tourism Category Filters - Volcanoes, heritage temples, crater lakes, coastlines, palaces
* **60 FPS:** Fluid CSS Motion Engine - Infinite marquee carousel and floating ambient cloud drift
* **100%:** Viewport Adaptability - Fluid layout across mobile, tablet, and widescreen displays`,
      links: [
        {
                "label": "Studi Kasus Proyek JavaIsland",
                "url": "/projects/javaisland"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/JavaIsland"
        }
],
    },
    en: {
      title: `Project: JavaIsland (AI-Powered Cultural Heritage & Tourism Portal for Java)`,
      text: `**Project: JavaIsland (AI-Powered Cultural Heritage & Tourism Portal for Java)**

* **System Overview:** An interactive cultural preservation and tourism platform dedicated to Java Island. Engineered with Vue.js-driven 3D mouse parallax city exploration, Google's Gemini 1.5 Flash generative AI concierge ('Tanya Jawa') with bilingual domain guardrails, imperial historical chronicles, and traditional culinary archives.
* **Delivered Year:** 2023
* **Core Tech Stack:** HTML5, CSS3, Tailwind CSS, Vue.js, Gemini 1.5 Flash, JavaScript

**Core Architecture & Features:**
* **Gemini 1.5 Flash AI Concierge:** Integrated low-latency LLM endpoint delivering culturally accurate answers with bilingual keyword gating and graceful error recovery.
* **Reactive 3D Parallax Card Engine:** Vue.js mathematical pointer tracking generating real-time 3D isometric rotation and depth illusions without heavy WebGL overhead.
* **Cultural Heritage & Historical Archives:** Comprehensive documentation of imperial Javanese history, royal court ceremonies, and UNESCO-recognized intangible cultural traditions.
* **Gastronomy & Destination Discovery:** Dedicated culinary origin breakdowns paired with multi-parameter destination filters for prospective domestic and international travelers.

**Key Metrics & Performance (KPIs):**
* **< 950ms:** Gemini Flash AI Latency - Fast streaming REST inference via gemini-1.5-flash-latest
* **24 Terms:** Bilingual Whitelist Gating - Restricts queries to Indonesian & English cultural keywords
* **8 Cities:** 3D Parallax Tilt Cards - Interactive mouse-tracking perspective transforms in Vue.js
* **9 Domains:** Tourism Category Filters - Volcanoes, heritage temples, crater lakes, coastlines, palaces
* **60 FPS:** Fluid CSS Motion Engine - Infinite marquee carousel and floating ambient cloud drift
* **100%:** Viewport Adaptability - Fluid layout across mobile, tablet, and widescreen displays`,
      links: [
        {
                "label": "JavaIsland Project Case Study",
                "url": "/projects/javaisland"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/JavaIsland"
        }
],
    },
  },
  PUSAKAKU_DETAIL: {
    id: {
      title: `Proyek: Pusakaku (Digital Preservation of Indonesian Traditional Folk Games & Cultural Heritage)`,
      text: `**Proyek: Pusakaku (Digital Preservation of Indonesian Traditional Folk Games & Cultural Heritage)**

* **Ringkasan Sistem:** An educational cultural heritage platform engineered to revive and preserve Indonesia's endangered traditional folk games. Combines rich historical ethnography, psychomotor and cognitive development analyses, an interactive 10-stage gamified assessment quiz engine, and custom display typography.
* **Tahun Peluncuran:** 2023
* **Teknologi Utama:** HTML5, CSS3, Tailwind CSS, JavaScript, Interactive Quiz, Custom Typography

**Fitur & Arsitektur Utama:**
* **Gamified Cultural Assessment:** Dynamic 10-stage quiz state machine evaluating traditional folk game comprehension with automated scoring and constructive feedback.
* **Anthropological Game Archives:** Detailed dossiers on Congklak, Egrang, Kelereng, and Layang-Layang analyzing origins, cultural philosophies, and physical benefits.
* **Kinetic Marquee & Visual UX:** Dual-lane infinite carousel displaying regional folk activities with hardware-accelerated CSS animations and responsive hover overlays.
* **Cultural Preservation Advocacy:** Structured educational initiative promoting traditional physical play as a healthier, community-oriented alternative to excessive screen time.

**Metrik Kunci & Performa (KPIs):**
* **10 Steps:** Interactive Quiz Engine - Real-time scoring and feedback evaluation in game.js
* **8+ Games:** Traditional Activities Indexed - From Congklak and Egrang to Gobak Sodor and Bentengan
* **4 Dossiers:** Dedicated Deep-Dive Portals - Comprehensive history, physics, and rules documentation
* **6 Breakpoints:** Responsive Tailwind Matrix - Custom screens from xs (250px) to 2xl (1536px)
* **60 FPS:** GPU-Accelerated Marquee - Fluid keyframe translations without layout recalculation
* **0ms:** Zero-Build Runtime Latency - Pure vanilla web execution on static edge CDN`,
      links: [
        {
                "label": "Studi Kasus Proyek Pusakaku",
                "url": "/projects/pusakaku"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/Pusakaku"
        }
],
    },
    en: {
      title: `Project: Pusakaku (Digital Preservation of Indonesian Traditional Folk Games & Cultural Heritage)`,
      text: `**Project: Pusakaku (Digital Preservation of Indonesian Traditional Folk Games & Cultural Heritage)**

* **System Overview:** An educational cultural heritage platform engineered to revive and preserve Indonesia's endangered traditional folk games. Combines rich historical ethnography, psychomotor and cognitive development analyses, an interactive 10-stage gamified assessment quiz engine, and custom display typography.
* **Delivered Year:** 2023
* **Core Tech Stack:** HTML5, CSS3, Tailwind CSS, JavaScript, Interactive Quiz, Custom Typography

**Core Architecture & Features:**
* **Gamified Cultural Assessment:** Dynamic 10-stage quiz state machine evaluating traditional folk game comprehension with automated scoring and constructive feedback.
* **Anthropological Game Archives:** Detailed dossiers on Congklak, Egrang, Kelereng, and Layang-Layang analyzing origins, cultural philosophies, and physical benefits.
* **Kinetic Marquee & Visual UX:** Dual-lane infinite carousel displaying regional folk activities with hardware-accelerated CSS animations and responsive hover overlays.
* **Cultural Preservation Advocacy:** Structured educational initiative promoting traditional physical play as a healthier, community-oriented alternative to excessive screen time.

**Key Metrics & Performance (KPIs):**
* **10 Steps:** Interactive Quiz Engine - Real-time scoring and feedback evaluation in game.js
* **8+ Games:** Traditional Activities Indexed - From Congklak and Egrang to Gobak Sodor and Bentengan
* **4 Dossiers:** Dedicated Deep-Dive Portals - Comprehensive history, physics, and rules documentation
* **6 Breakpoints:** Responsive Tailwind Matrix - Custom screens from xs (250px) to 2xl (1536px)
* **60 FPS:** GPU-Accelerated Marquee - Fluid keyframe translations without layout recalculation
* **0ms:** Zero-Build Runtime Latency - Pure vanilla web execution on static edge CDN`,
      links: [
        {
                "label": "Pusakaku Project Case Study",
                "url": "/projects/pusakaku"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/Pusakaku"
        }
],
    },
  },
  SEMUABISA_DETAIL: {
    id: {
      title: `Proyek: SemuaBisa (Inclusive EdTech Ecosystem & Youth Digital Career Platform)`,
      text: `**Proyek: SemuaBisa (Inclusive EdTech Ecosystem & Youth Digital Career Platform)**

* **Ringkasan Sistem:** An inclusive digital education ecosystem and workforce development platform built for the Unila 2024 National Web Design Competition by Team Deadliner. Empowers Indonesian youth to master modern digital competencies through 100% free bootcamps across 8 tech disciplines, accessible university degree pathways with Alpine.js tabs, a freelance digital services hub, and verified tech career job boards.
* **Tahun Peluncuran:** 2024
* **Teknologi Utama:** HTML5, CSS3, Tailwind CSS, DaisyUI, Alpine.js, JavaScript

**Fitur & Arsitektur Utama:**
* **Industry-Aligned Tech Bootcamps:** Comprehensive curriculum tracks across 8 core digital disciplines designed to take beginners to junior-ready engineering competence.
* **Higher Education & Scholarship Navigator:** Alpine.js keyboard-accessible tabbed roadmap matching students with academic tech programs and financial scholarships.
* **Digital Services Freelance Hub:** Marketplace platform allowing students and certified alumni to monetize their technical skills with real enterprise clients.
* **Curated Tech Job Board:** Direct recruitment channels partnering with top tech industry innovators to place junior developers into internships and full-time careers.

**Metrik Kunci & Performa (KPIs):**
* **8 Tracks:** Specialized Tech Bootcamps - Web, Mobile, ML, Data, UI/UX, Cyber, Game, Marketing
* **100% Free:** Youth Scholarship Access - Zero tuition barrier for aspiring Indonesian students
* **4 Pillars:** Unified Career Ecosystem - Bootcamps · University · Freelance · Job Board
* **4 Domains:** Keyboard-Navigable Tabs - Alpine.js ARIA tablist for academic roadmaps
* **60 FPS:** AOS Kinetic Scroll Reveals - Smooth viewport entry with hardware-accelerated transforms
* **3 Engineers:** Team Deadliner Collaboration - Built for National Web Design Competition Unila 2024`,
      links: [
        {
                "label": "Studi Kasus Proyek SemuaBisa",
                "url": "/projects/semua-bisa"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/SemuaBisa-Web"
        }
],
    },
    en: {
      title: `Project: SemuaBisa (Inclusive EdTech Ecosystem & Youth Digital Career Platform)`,
      text: `**Project: SemuaBisa (Inclusive EdTech Ecosystem & Youth Digital Career Platform)**

* **System Overview:** An inclusive digital education ecosystem and workforce development platform built for the Unila 2024 National Web Design Competition by Team Deadliner. Empowers Indonesian youth to master modern digital competencies through 100% free bootcamps across 8 tech disciplines, accessible university degree pathways with Alpine.js tabs, a freelance digital services hub, and verified tech career job boards.
* **Delivered Year:** 2024
* **Core Tech Stack:** HTML5, CSS3, Tailwind CSS, DaisyUI, Alpine.js, JavaScript

**Core Architecture & Features:**
* **Industry-Aligned Tech Bootcamps:** Comprehensive curriculum tracks across 8 core digital disciplines designed to take beginners to junior-ready engineering competence.
* **Higher Education & Scholarship Navigator:** Alpine.js keyboard-accessible tabbed roadmap matching students with academic tech programs and financial scholarships.
* **Digital Services Freelance Hub:** Marketplace platform allowing students and certified alumni to monetize their technical skills with real enterprise clients.
* **Curated Tech Job Board:** Direct recruitment channels partnering with top tech industry innovators to place junior developers into internships and full-time careers.

**Key Metrics & Performance (KPIs):**
* **8 Tracks:** Specialized Tech Bootcamps - Web, Mobile, ML, Data, UI/UX, Cyber, Game, Marketing
* **100% Free:** Youth Scholarship Access - Zero tuition barrier for aspiring Indonesian students
* **4 Pillars:** Unified Career Ecosystem - Bootcamps · University · Freelance · Job Board
* **4 Domains:** Keyboard-Navigable Tabs - Alpine.js ARIA tablist for academic roadmaps
* **60 FPS:** AOS Kinetic Scroll Reveals - Smooth viewport entry with hardware-accelerated transforms
* **3 Engineers:** Team Deadliner Collaboration - Built for National Web Design Competition Unila 2024`,
      links: [
        {
                "label": "SemuaBisa Project Case Study",
                "url": "/projects/semua-bisa"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/SemuaBisa-Web"
        }
],
    },
  },
  IDNCOURSE_DETAIL: {
    id: {
      title: `Proyek: IDNCourse (Modern Tech E-Learning Platform & Interactive Course Hub)`,
      text: `**Proyek: IDNCourse (Modern Tech E-Learning Platform & Interactive Course Hub)**

* **Ringkasan Sistem:** A collaborative online technology education platform built for competition by a 3-developer team. Features category-based animated course filtering across 6 technical tracks (C#, Python, Web Dev, AI, Data Science, Android), interactive curriculum modal popups, dynamic localStorage session management, and responsive CSS grid architectures.
* **Tahun Peluncuran:** 2023
* **Teknologi Utama:** HTML5, CSS3, JavaScript, Animation Engine, LocalStorage

**Fitur & Arsitektur Utama:**
* **Animated Course Filter Engine:** Vanilla JavaScript animation pipeline dynamically coordinating exit and entrance keyframes for seamless technology category switching.
* **Structured Course Catalog & Syllabi:** Modular course cards with enrollment counters, rating badges, and modal overlays detailing learning outcomes.
* **Collaborative Team Architecture:** Built as a competition collaboration uniting dedicated front-end engineering, back-end API thinking, and modern visual design.
* **Session Persistence & Interactive FAQ:** Client-side localStorage session hydration paired with accordion-based knowledge discovery.

**Metrik Kunci & Performa (KPIs):**
* **500ms:** Filter Transition Window - Coordinated fadeOutDown & fadeInUp CSS transitions
* **6 Tracks:** Core Technology Disciplines - Web, AI, Data Science, C#, Python, Mobile Android
* **5 Portals:** Dedicated Multi-Page Views - Home, About, Course, Team, Bootcamp, and Login
* **3 Developers:** Collaborative Student Team - Adyvka (Front-End), Abdullah (Back-End), Rosan (Design)
* **0ms:** Zero-Build Load Latency - Pure vanilla web execution without runtime bundle overhead
* **100%:** Responsive Adaptability - Custom CSS Flexbox and Grid layouts across all viewports`,
      links: [
        {
                "label": "Studi Kasus Proyek IDNCourse",
                "url": "/projects/idncourse"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/IDNCourse-Web"
        }
],
    },
    en: {
      title: `Project: IDNCourse (Modern Tech E-Learning Platform & Interactive Course Hub)`,
      text: `**Project: IDNCourse (Modern Tech E-Learning Platform & Interactive Course Hub)**

* **System Overview:** A collaborative online technology education platform built for competition by a 3-developer team. Features category-based animated course filtering across 6 technical tracks (C#, Python, Web Dev, AI, Data Science, Android), interactive curriculum modal popups, dynamic localStorage session management, and responsive CSS grid architectures.
* **Delivered Year:** 2023
* **Core Tech Stack:** HTML5, CSS3, JavaScript, Animation Engine, LocalStorage

**Core Architecture & Features:**
* **Animated Course Filter Engine:** Vanilla JavaScript animation pipeline dynamically coordinating exit and entrance keyframes for seamless technology category switching.
* **Structured Course Catalog & Syllabi:** Modular course cards with enrollment counters, rating badges, and modal overlays detailing learning outcomes.
* **Collaborative Team Architecture:** Built as a competition collaboration uniting dedicated front-end engineering, back-end API thinking, and modern visual design.
* **Session Persistence & Interactive FAQ:** Client-side localStorage session hydration paired with accordion-based knowledge discovery.

**Key Metrics & Performance (KPIs):**
* **500ms:** Filter Transition Window - Coordinated fadeOutDown & fadeInUp CSS transitions
* **6 Tracks:** Core Technology Disciplines - Web, AI, Data Science, C#, Python, Mobile Android
* **5 Portals:** Dedicated Multi-Page Views - Home, About, Course, Team, Bootcamp, and Login
* **3 Developers:** Collaborative Student Team - Adyvka (Front-End), Abdullah (Back-End), Rosan (Design)
* **0ms:** Zero-Build Load Latency - Pure vanilla web execution without runtime bundle overhead
* **100%:** Responsive Adaptability - Custom CSS Flexbox and Grid layouts across all viewports`,
      links: [
        {
                "label": "IDNCourse Project Case Study",
                "url": "/projects/idncourse"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/IDNCourse-Web"
        }
],
    },
  },
  COFFEESHOP_DETAIL: {
    id: {
      title: `Proyek: Coffeee Shop (Artisan Coffee Brand Experience & Modern Retail Showcase Landing)`,
      text: `**Proyek: Coffeee Shop (Artisan Coffee Brand Experience & Modern Retail Showcase Landing)**

* **Ringkasan Sistem:** A contemporary artisan coffee retail and branch showcase web platform engineered with Tailwind CSS, Flowbite UI architecture, and AOS scroll-triggered animation choreography. Features dynamic beverage catalog cards with multi-size drink volume selectors, interactive coffee bean showcase hover effects, multi-city branch locator cards (Depok, Central Jakarta, Bandung), and a responsive team endorsement grid.
* **Tahun Peluncuran:** 2023
* **Teknologi Utama:** HTML5, Tailwind CSS, Flowbite, AOS (Animate On Scroll), JavaScript, Responsive UI

**Fitur & Arsitektur Utama:**
* **Tailwind Utility Architecture:** Streamlined component-level styling built with Tailwind utility classes for minimal footprint and maximum aesthetic coherence.
* **Interactive E-Commerce Sizing:** Product cards featuring dynamic cup size selection (S/M/L), star rating aggregates, and direct checkout call-to-actions.
* **Multi-Location Branch Network:** Structured branch discovery cards highlighting physical café locations across major urban centers with engagement statistics.
* **AOS Scroll Choreography:** Layered entrance motion choreography providing subtle directional fades as visitors browse through menu categories.

**Metrik Kunci & Performa (KPIs):**
* **0.5s:** Hover Transition Latency - Hardware-accelerated CSS ease transitions on roast cards
* **3 Cities:** Retail Branch Footprint - Strategic café locations across Depok, Jakarta Pusat, and Bandung
* **3 Sizes:** Interactive Cup Sizing - Dynamic Small (S), Medium (M), and Large (L) order selections
* **3 Roasts:** Curated Blend Showcase - Americano Dark Roasting, Brazilian Coffee Milk, and Vanilla Latte
* **60 FPS:** Scroll Animation Fidelity - Hardware-accelerated AOS (Animate On Scroll) motion triggers
* **100%:** Mobile Viewport Fluidity - Responsive utility grid adapting from 320px mobile to 4K displays`,
      links: [
        {
                "label": "Studi Kasus Proyek Coffeee Shop",
                "url": "/projects/coffeee-shop"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/Coffeee-Shop"
        }
],
    },
    en: {
      title: `Project: Coffeee Shop (Artisan Coffee Brand Experience & Modern Retail Showcase Landing)`,
      text: `**Project: Coffeee Shop (Artisan Coffee Brand Experience & Modern Retail Showcase Landing)**

* **System Overview:** A contemporary artisan coffee retail and branch showcase web platform engineered with Tailwind CSS, Flowbite UI architecture, and AOS scroll-triggered animation choreography. Features dynamic beverage catalog cards with multi-size drink volume selectors, interactive coffee bean showcase hover effects, multi-city branch locator cards (Depok, Central Jakarta, Bandung), and a responsive team endorsement grid.
* **Delivered Year:** 2023
* **Core Tech Stack:** HTML5, Tailwind CSS, Flowbite, AOS (Animate On Scroll), JavaScript, Responsive UI

**Core Architecture & Features:**
* **Tailwind Utility Architecture:** Streamlined component-level styling built with Tailwind utility classes for minimal footprint and maximum aesthetic coherence.
* **Interactive E-Commerce Sizing:** Product cards featuring dynamic cup size selection (S/M/L), star rating aggregates, and direct checkout call-to-actions.
* **Multi-Location Branch Network:** Structured branch discovery cards highlighting physical café locations across major urban centers with engagement statistics.
* **AOS Scroll Choreography:** Layered entrance motion choreography providing subtle directional fades as visitors browse through menu categories.

**Key Metrics & Performance (KPIs):**
* **0.5s:** Hover Transition Latency - Hardware-accelerated CSS ease transitions on roast cards
* **3 Cities:** Retail Branch Footprint - Strategic café locations across Depok, Jakarta Pusat, and Bandung
* **3 Sizes:** Interactive Cup Sizing - Dynamic Small (S), Medium (M), and Large (L) order selections
* **3 Roasts:** Curated Blend Showcase - Americano Dark Roasting, Brazilian Coffee Milk, and Vanilla Latte
* **60 FPS:** Scroll Animation Fidelity - Hardware-accelerated AOS (Animate On Scroll) motion triggers
* **100%:** Mobile Viewport Fluidity - Responsive utility grid adapting from 320px mobile to 4K displays`,
      links: [
        {
                "label": "Coffeee Shop Project Case Study",
                "url": "/projects/coffeee-shop"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/Coffeee-Shop"
        }
],
    },
  },
  MYSTYLE_DETAIL: {
    id: {
      title: `Proyek: MyStyle (Modern Fashion E-Commerce & Curated Apparel Storefront)`,
      text: `**Proyek: MyStyle (Modern Fashion E-Commerce & Curated Apparel Storefront)**

* **Ringkasan Sistem:** A contemporary fashion e-commerce storefront engineered with Tailwind CSS v4 and bespoke micro-interactions. Features a 9-portal multi-page architecture spanning editorial storefront discovery, interactive apparel sizing and color swatch customizers, comprehensive shopping bag management with promo vouchers, and dedicated patron profile portals.
* **Tahun Peluncuran:** 2023
* **Teknologi Utama:** HTML5, Tailwind CSS v4, CSS3, JavaScript, Micro-Interactions, Custom Fonts

**Fitur & Arsitektur Utama:**
* **Tailwind CSS v4 Engine:** Modern utility-first architecture compiled with Tailwind v4 for instant stylesheet execution and minimal footprint.
* **Interactive Commerce Workflow:** End-to-end shopping journey spanning product variant selectors, cart quantity toggles, and voucher integrations.
* **Custom Micro-Interaction Physics:** Bespoke CSS hover overlays (#pembungkus) providing smooth gradient fades, text strokes, and button lifts.
* **Full Customer Account Suite:** Integrated patron profile management, address editing, and simulated Google OAuth onboarding.

**Metrik Kunci & Performa (KPIs):**
* **9 Portals:** Multi-Page Architecture - Storefront, catalog, cart, detail, account, edit, auth views
* **0.5s:** Micro-Interaction Latency - Hardware-accelerated CSS ease transitions on collection cards
* **10 Categories:** Curated Fashion Tracks - T-shirts, shirts, jackets, pants, footwear, and accessories
* **4 Sizes:** Garment Fit Variations - SM, M, L, and XL tailored apparel sizing configurations
* **v4.0:** Tailwind CSS Engine - Modern zero-config stylesheet engine with @import 'tailwindcss'
* **100%:** Mobile Viewport Fluidity - Responsive utility grid adapting from 320px mobile to 4K displays`,
      links: [
        {
                "label": "Studi Kasus Proyek MyStyle",
                "url": "/projects/mystyle"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/MyStyle"
        }
],
    },
    en: {
      title: `Project: MyStyle (Modern Fashion E-Commerce & Curated Apparel Storefront)`,
      text: `**Project: MyStyle (Modern Fashion E-Commerce & Curated Apparel Storefront)**

* **System Overview:** A contemporary fashion e-commerce storefront engineered with Tailwind CSS v4 and bespoke micro-interactions. Features a 9-portal multi-page architecture spanning editorial storefront discovery, interactive apparel sizing and color swatch customizers, comprehensive shopping bag management with promo vouchers, and dedicated patron profile portals.
* **Delivered Year:** 2023
* **Core Tech Stack:** HTML5, Tailwind CSS v4, CSS3, JavaScript, Micro-Interactions, Custom Fonts

**Core Architecture & Features:**
* **Tailwind CSS v4 Engine:** Modern utility-first architecture compiled with Tailwind v4 for instant stylesheet execution and minimal footprint.
* **Interactive Commerce Workflow:** End-to-end shopping journey spanning product variant selectors, cart quantity toggles, and voucher integrations.
* **Custom Micro-Interaction Physics:** Bespoke CSS hover overlays (#pembungkus) providing smooth gradient fades, text strokes, and button lifts.
* **Full Customer Account Suite:** Integrated patron profile management, address editing, and simulated Google OAuth onboarding.

**Key Metrics & Performance (KPIs):**
* **9 Portals:** Multi-Page Architecture - Storefront, catalog, cart, detail, account, edit, auth views
* **0.5s:** Micro-Interaction Latency - Hardware-accelerated CSS ease transitions on collection cards
* **10 Categories:** Curated Fashion Tracks - T-shirts, shirts, jackets, pants, footwear, and accessories
* **4 Sizes:** Garment Fit Variations - SM, M, L, and XL tailored apparel sizing configurations
* **v4.0:** Tailwind CSS Engine - Modern zero-config stylesheet engine with @import 'tailwindcss'
* **100%:** Mobile Viewport Fluidity - Responsive utility grid adapting from 320px mobile to 4K displays`,
      links: [
        {
                "label": "MyStyle Project Case Study",
                "url": "/projects/mystyle"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/MyStyle"
        }
],
    },
  },
  DELIFOOD_DETAIL: {
    id: {
      title: `Proyek: DeliFood (Real-Time Mobile E-Commerce & Food Delivery Platform)`,
      text: `**Proyek: DeliFood (Real-Time Mobile E-Commerce & Food Delivery Platform)**

* **Ringkasan Sistem:** A responsive, real-time mobile food ordering application built with Flutter and Cloud Firestore. Powered by asynchronous snapshot streams for live catalog synchronization, atomic cart quantity deduplication, dynamic wishlist management, and a 4-stage visual delivery tracking pipeline.
* **Tahun Peluncuran:** 2024
* **Teknologi Utama:** Flutter, Dart, Firebase, Cloud Firestore, Provider, Material 3

**Fitur & Arsitektur Utama:**
* **Stream-Driven Reactive UI:** Every core view subscribes directly to Cloud Firestore snapshots via StreamBuilder, updating catalog items, cart quantities, and wishlist states instantaneously without manual pull-to-refresh.
* **Smart Basket & Deduplication Engine:** Intelligent cart operations check for existing items in user collections, auto-incrementing quantity (quantity + 1) on duplicate picks and supporting swipe-to-dismiss deletion.
* **Dual-Write Identity & Profile Security:** Secure Firebase Authentication combined with atomic Firestore user document writes storing demographic metadata, birth dates via date picker, and server timestamps.
* **4-Stage Visual Delivery Stepper:** Comprehensive order lifecycle tracking guiding customers from order placement to doorstep arrival, complete with granular transit checkpoints and horizontal item summaries.

**Metrik Kunci & Performa (KPIs):**
* **0ms:** Sync Latency - Instant reactive UI updates via Firebase Stream listeners
* **100%:** Duplicate Free - Smart cart query auto-increments quantity instead of duplicating
* **4-Stage:** Delivery Stepper - Payment → Packaging → In Transit → Delivered lifecycle
* **5:** App Domains - Home, Wishlist, Smart Basket, Order Tracking, and Profile
* **60 FPS:** Hero Animation - Smooth Material 3 Hero widget image transitions
* **Dual:** Auth Registration - Firebase Auth + Firestore user profile dual-write`,
      links: [
        {
                "label": "Studi Kasus Proyek DeliFood",
                "url": "/projects/delifood"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/DeliFood"
        }
],
    },
    en: {
      title: `Project: DeliFood (Real-Time Mobile E-Commerce & Food Delivery Platform)`,
      text: `**Project: DeliFood (Real-Time Mobile E-Commerce & Food Delivery Platform)**

* **System Overview:** A responsive, real-time mobile food ordering application built with Flutter and Cloud Firestore. Powered by asynchronous snapshot streams for live catalog synchronization, atomic cart quantity deduplication, dynamic wishlist management, and a 4-stage visual delivery tracking pipeline.
* **Delivered Year:** 2024
* **Core Tech Stack:** Flutter, Dart, Firebase, Cloud Firestore, Provider, Material 3

**Core Architecture & Features:**
* **Stream-Driven Reactive UI:** Every core view subscribes directly to Cloud Firestore snapshots via StreamBuilder, updating catalog items, cart quantities, and wishlist states instantaneously without manual pull-to-refresh.
* **Smart Basket & Deduplication Engine:** Intelligent cart operations check for existing items in user collections, auto-incrementing quantity (quantity + 1) on duplicate picks and supporting swipe-to-dismiss deletion.
* **Dual-Write Identity & Profile Security:** Secure Firebase Authentication combined with atomic Firestore user document writes storing demographic metadata, birth dates via date picker, and server timestamps.
* **4-Stage Visual Delivery Stepper:** Comprehensive order lifecycle tracking guiding customers from order placement to doorstep arrival, complete with granular transit checkpoints and horizontal item summaries.

**Key Metrics & Performance (KPIs):**
* **0ms:** Sync Latency - Instant reactive UI updates via Firebase Stream listeners
* **100%:** Duplicate Free - Smart cart query auto-increments quantity instead of duplicating
* **4-Stage:** Delivery Stepper - Payment → Packaging → In Transit → Delivered lifecycle
* **5:** App Domains - Home, Wishlist, Smart Basket, Order Tracking, and Profile
* **60 FPS:** Hero Animation - Smooth Material 3 Hero widget image transitions
* **Dual:** Auth Registration - Firebase Auth + Firestore user profile dual-write`,
      links: [
        {
                "label": "DeliFood Project Case Study",
                "url": "/projects/delifood"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/DeliFood"
        }
],
    },
  },
  AI_TICKET_DETAIL: {
    id: {
      title: `Proyek: AI Ticket Manager (Intelligent Task Orchestration, Real-Time Cloud Firestore & Google Gemini AI Synthesis)`,
      text: `**Proyek: AI Ticket Manager (Intelligent Task Orchestration, Real-Time Cloud Firestore & Google Gemini AI Synthesis)**

* **Ringkasan Sistem:** A cross-platform intelligent task and ticket lifecycle management mobile application built with Flutter, Firebase Authentication, Cloud Firestore, and Google Generative AI (Gemini Flash & Gemini Pro fallback). Features secure multi-tenant user isolation (users/{uid}/tasks), real-time live data streaming, natural language task summarization, dynamic user prompt injection, comprehensive task lifecycle tracking (Open, In Progress, Done), date-time scheduling, and responsive state management with Provider.
* **Tahun Peluncuran:** 2024
* **Teknologi Utama:** Flutter, Dart, Firebase, Gemini API, Provider, Cloud Firestore

**Fitur & Arsitektur Utama:**
* **Google Gemini LLM Task Synthesis Engine:** Deep integration with google_generative_ai: ^0.4.7 utilizing Gemini models to synthesize complex tasks into concise executive summaries with support for dynamic custom user prompts and automated model fallbacks.
* **Real-Time Cloud Firestore Multi-Tenant Pipeline:** Reactive data architecture powered by StreamBuilder subscribing to users/{uid}/tasks collections, providing instantaneous cloud synchronization, automatic offline caching, and server timestamping.
* **Provider Reactive State Management Architecture:** Decoupled state management leveraging Provider and ChangeNotifier (TicketProvider), isolating AI inference operations, loading states, and localized ticket collections from the presentation layer.
* **Secure Identity Governance via Firebase Auth:** Enterprise user authentication managing session persistence, display name updates, and client-side error handling translating raw Firebase exceptions into intuitive user feedback.`,
      links: [
        {
                "label": "Studi Kasus Proyek AI Ticket Manager",
                "url": "/projects/ai-ticket-manager"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/AI-Generator-App"
        }
],
    },
    en: {
      title: `Project: AI Ticket Manager (Intelligent Task Orchestration, Real-Time Cloud Firestore & Google Gemini AI Synthesis)`,
      text: `**Project: AI Ticket Manager (Intelligent Task Orchestration, Real-Time Cloud Firestore & Google Gemini AI Synthesis)**

* **System Overview:** A cross-platform intelligent task and ticket lifecycle management mobile application built with Flutter, Firebase Authentication, Cloud Firestore, and Google Generative AI (Gemini Flash & Gemini Pro fallback). Features secure multi-tenant user isolation (users/{uid}/tasks), real-time live data streaming, natural language task summarization, dynamic user prompt injection, comprehensive task lifecycle tracking (Open, In Progress, Done), date-time scheduling, and responsive state management with Provider.
* **Delivered Year:** 2024
* **Core Tech Stack:** Flutter, Dart, Firebase, Gemini API, Provider, Cloud Firestore

**Core Architecture & Features:**
* **Google Gemini LLM Task Synthesis Engine:** Deep integration with google_generative_ai: ^0.4.7 utilizing Gemini models to synthesize complex tasks into concise executive summaries with support for dynamic custom user prompts and automated model fallbacks.
* **Real-Time Cloud Firestore Multi-Tenant Pipeline:** Reactive data architecture powered by StreamBuilder subscribing to users/{uid}/tasks collections, providing instantaneous cloud synchronization, automatic offline caching, and server timestamping.
* **Provider Reactive State Management Architecture:** Decoupled state management leveraging Provider and ChangeNotifier (TicketProvider), isolating AI inference operations, loading states, and localized ticket collections from the presentation layer.
* **Secure Identity Governance via Firebase Auth:** Enterprise user authentication managing session persistence, display name updates, and client-side error handling translating raw Firebase exceptions into intuitive user feedback.`,
      links: [
        {
                "label": "AI Ticket Manager Project Case Study",
                "url": "/projects/ai-ticket-manager"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/AI-Generator-App"
        }
],
    },
  },
  ATTENDANCE_DETAIL: {
    id: {
      title: `Proyek: Attendance App (On-Device Biometric Face Verification & Mobile Task Attendance System)`,
      text: `**Proyek: Attendance App (On-Device Biometric Face Verification & Mobile Task Attendance System)**

* **Ringkasan Sistem:** A cross-platform mobile attendance and productivity platform built with Flutter, Firebase, and Google ML Kit. Combines real-time on-device biometric facial landmark detection via hardware camera streams, live cloud task synchronization through Cloud Firestore, reactive GetX theme management, and stateless Firebase Authentication.
* **Tahun Peluncuran:** 2024
* **Teknologi Utama:** Flutter, Dart, Firebase, Google ML Kit, GetX, Camera API

**Fitur & Arsitektur Utama:**
* **On-Device Biometric Face Verification:** Integrates Google ML Kit face detection directly with camera hardware streams. Analyzes facial landmarks, contours, and presence in real time with sub-120ms inference latency and zero cloud data leaks.
* **Stream-Driven Cloud Firestore Engine:** Employs persistent StreamBuilder listeners on user-scoped Firestore collections. Delivers real-time CRUD reactivity, automated timestamp auditing, and dynamic category task count recalculations.
* **Reactive State & Instant Theme Engine:** Utilizes GetX reactive observables (isTheme.obs) to decouple theme state from widget lifecycles. Users switch seamlessly between custom high-contrast light and dark themes with zero redraw lag.
* **Stateless Auth & Password Recovery:** Secured with Firebase Authentication supporting email/password registration, persistent session tokens via authStateChanges(), and self-service automated password reset pipelines.

**Metrik Kunci & Performa (KPIs):**
* **< 120ms:** On-Device ML Latency - Hardware-accelerated Google ML Kit face landmark & contour evaluation
* **0ms:** Sync Latency - Instant reactive UI updates via Firebase Firestore real-time snapshot streams
* **100%:** Biometric Privacy - Zero biometric face images uploaded to cloud, with 100% processed locally on-device
* **4 Domains:** Dynamic Categories - Design, Sport, Meet, and Work with automated counter calculation
* **Reactive:** GetX Theme Engine - One-tap instantaneous switching between custom Light and Dark themes
* **Dual Guard:** Auth & Security - Stateless Firebase Auth credentials paired with user-isolated Firestore rules`,
      links: [
        {
                "label": "Studi Kasus Proyek Attendance App",
                "url": "/projects/attendance-app"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/Attendance-App"
        }
],
    },
    en: {
      title: `Project: Attendance App (On-Device Biometric Face Verification & Mobile Task Attendance System)`,
      text: `**Project: Attendance App (On-Device Biometric Face Verification & Mobile Task Attendance System)**

* **System Overview:** A cross-platform mobile attendance and productivity platform built with Flutter, Firebase, and Google ML Kit. Combines real-time on-device biometric facial landmark detection via hardware camera streams, live cloud task synchronization through Cloud Firestore, reactive GetX theme management, and stateless Firebase Authentication.
* **Delivered Year:** 2024
* **Core Tech Stack:** Flutter, Dart, Firebase, Google ML Kit, GetX, Camera API

**Core Architecture & Features:**
* **On-Device Biometric Face Verification:** Integrates Google ML Kit face detection directly with camera hardware streams. Analyzes facial landmarks, contours, and presence in real time with sub-120ms inference latency and zero cloud data leaks.
* **Stream-Driven Cloud Firestore Engine:** Employs persistent StreamBuilder listeners on user-scoped Firestore collections. Delivers real-time CRUD reactivity, automated timestamp auditing, and dynamic category task count recalculations.
* **Reactive State & Instant Theme Engine:** Utilizes GetX reactive observables (isTheme.obs) to decouple theme state from widget lifecycles. Users switch seamlessly between custom high-contrast light and dark themes with zero redraw lag.
* **Stateless Auth & Password Recovery:** Secured with Firebase Authentication supporting email/password registration, persistent session tokens via authStateChanges(), and self-service automated password reset pipelines.

**Key Metrics & Performance (KPIs):**
* **< 120ms:** On-Device ML Latency - Hardware-accelerated Google ML Kit face landmark & contour evaluation
* **0ms:** Sync Latency - Instant reactive UI updates via Firebase Firestore real-time snapshot streams
* **100%:** Biometric Privacy - Zero biometric face images uploaded to cloud, with 100% processed locally on-device
* **4 Domains:** Dynamic Categories - Design, Sport, Meet, and Work with automated counter calculation
* **Reactive:** GetX Theme Engine - One-tap instantaneous switching between custom Light and Dark themes
* **Dual Guard:** Auth & Security - Stateless Firebase Auth credentials paired with user-isolated Firestore rules`,
      links: [
        {
                "label": "Attendance App Project Case Study",
                "url": "/projects/attendance-app"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/Attendance-App"
        }
],
    },
  },
  QR_SCANNER_DETAIL: {
    id: {
      title: `Proyek: QR Guest Manager (Real-Time Event Check-In, Dynamic QR Code Engine & Mobile Ticketing System)`,
      text: `**Proyek: QR Guest Manager (Real-Time Event Check-In, Dynamic QR Code Engine & Mobile Ticketing System)**

* **Ringkasan Sistem:** A high-throughput cross-platform event ticketing and guest check-in mobile application built with Flutter, Firebase Authentication, and Dio REST API integration. Features real-time camera QR scanning via mobile_scanner, on-the-fly QR code vector generation with qr_flutter, photo gallery barcode analysis, dual-mode light/dark theme engine, and atomic ticket status reconciliation.
* **Tahun Peluncuran:** 2024
* **Teknologi Utama:** Flutter, Dart, Firebase, Mobile Scanner, Dio, QR Flutter

**Fitur & Arsitektur Utama:**
* **Real-Time Hardware Barcode Vision:** Integrates mobile_scanner with native camera sensor streams, detecting standard and inverted QR codes in sub-80ms with customized reticle boundary feedback.
* **Dual Ingestion: Camera & Photo Gallery:** Empowers event operators to scan physical QR codes directly through the live camera viewfinder or extract QR payloads from saved smartphone photos via ImagePicker.
* **On-The-Fly Vector QR Code Generation:** Generates high-resolution vector QR graphics instantaneously on-device using qr_flutter, enabling instant ticket sharing and preview without external API dependencies.
* **Resilient Networking & Duplicate Lock:** Backed by Dio HTTP client connecting to a Vercel-hosted REST API with automated double-scan prevention, humanized error mapping, and optimistic local state updates.

**Metrik Kunci & Performa (KPIs):**
* **< 80ms:** Scan Recognition - Native hardware-accelerated barcode decoding via mobile_scanner
* **100%:** Duplicate Prevention - Atomic scan processing guard prevents duplicate ticket redeems
* **Dual-Channel:** Scanning Ingestion - Camera live viewfinder & photo gallery barcode decoding
* **0ms:** Local State Latency - Instant in-memory ticket status update upon successful API redemption
* **Vector:** QR Generation - Lossless on-the-fly QR generation via qr_flutter with custom sizing
* **Dual Theme:** Light & Dark Mode - System-level theme switching with ValueNotifier and Material 3 design`,
      links: [
        {
                "label": "Studi Kasus Proyek QR Guest Manager",
                "url": "/projects/qr-scanner"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/QR_Scanner_App"
        }
],
    },
    en: {
      title: `Project: QR Guest Manager (Real-Time Event Check-In, Dynamic QR Code Engine & Mobile Ticketing System)`,
      text: `**Project: QR Guest Manager (Real-Time Event Check-In, Dynamic QR Code Engine & Mobile Ticketing System)**

* **System Overview:** A high-throughput cross-platform event ticketing and guest check-in mobile application built with Flutter, Firebase Authentication, and Dio REST API integration. Features real-time camera QR scanning via mobile_scanner, on-the-fly QR code vector generation with qr_flutter, photo gallery barcode analysis, dual-mode light/dark theme engine, and atomic ticket status reconciliation.
* **Delivered Year:** 2024
* **Core Tech Stack:** Flutter, Dart, Firebase, Mobile Scanner, Dio, QR Flutter

**Core Architecture & Features:**
* **Real-Time Hardware Barcode Vision:** Integrates mobile_scanner with native camera sensor streams, detecting standard and inverted QR codes in sub-80ms with customized reticle boundary feedback.
* **Dual Ingestion: Camera & Photo Gallery:** Empowers event operators to scan physical QR codes directly through the live camera viewfinder or extract QR payloads from saved smartphone photos via ImagePicker.
* **On-The-Fly Vector QR Code Generation:** Generates high-resolution vector QR graphics instantaneously on-device using qr_flutter, enabling instant ticket sharing and preview without external API dependencies.
* **Resilient Networking & Duplicate Lock:** Backed by Dio HTTP client connecting to a Vercel-hosted REST API with automated double-scan prevention, humanized error mapping, and optimistic local state updates.

**Key Metrics & Performance (KPIs):**
* **< 80ms:** Scan Recognition - Native hardware-accelerated barcode decoding via mobile_scanner
* **100%:** Duplicate Prevention - Atomic scan processing guard prevents duplicate ticket redeems
* **Dual-Channel:** Scanning Ingestion - Camera live viewfinder & photo gallery barcode decoding
* **0ms:** Local State Latency - Instant in-memory ticket status update upon successful API redemption
* **Vector:** QR Generation - Lossless on-the-fly QR generation via qr_flutter with custom sizing
* **Dual Theme:** Light & Dark Mode - System-level theme switching with ValueNotifier and Material 3 design`,
      links: [
        {
                "label": "QR Guest Manager Project Case Study",
                "url": "/projects/qr-scanner"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/QR_Scanner_App"
        }
],
    },
  },
  NEWS_APP_DETAIL: {
    id: {
      title: `Proyek: News App (Real-Time Multi-Source News Reader & Reactive Bookmark Platform)`,
      text: `**Proyek: News App (Real-Time Multi-Source News Reader & Reactive Bookmark Platform)**

* **Ringkasan Sistem:** A high-performance cross-platform digital journalism and news curation mobile application built with Flutter, GetX reactive state management, and REST API integration. Streams live breaking news across 8 categories from CNN Indonesia via Vercel endpoints, featuring zero-latency client-side substring search filtering, ISO-8601 calendar date querying with localized Indonesian formatting, reactive bookmark persistence, dynamic dark/light theme switching, and fluid Lottie vector onboarding animations.
* **Tahun Peluncuran:** 2024
* **Teknologi Utama:** Flutter, Dart, GetX, REST API, Lottie, HTTP

**Fitur & Arsitektur Utama:**
* **REST API Live Stream Ingestion:** Direct asynchronous HTTP client consuming CNN Indonesia news data from https://berita-indo-api.vercel.app/v1/cnn-news/ with dynamic endpoint parameter routing, robust status code validation, and resilient JSON map parsing.
* **GetX Reactive Architecture & State Management:** Clean separation of presentation and business logic utilizing NewsController extending GetxController, observable variables (.obs) for allNews, filteredNews, bookMarks, and isLoading, wrapped in surgical Obx widget rebuilders.
* **Multi-Faceted Search & Calendar Date Filtering:** Real-time search listener tracking user input to perform case-insensitive headline substring matching combined with native showDatePicker calendar selection comparing ISO-8601 year, month, and day.
* **Immersive Editorial UI & Dynamic Theming:** Material Design 3 visual language featuring CustomScrollView with flexible SliverAppBar hero headers, category pills, reading duration badges, dynamic dark/light theme switching, and Lottie vector splash screen.`,
      links: [
        {
                "label": "Studi Kasus Proyek News App",
                "url": "/projects/news-app"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/News-App"
        }
],
    },
    en: {
      title: `Project: News App (Real-Time Multi-Source News Reader & Reactive Bookmark Platform)`,
      text: `**Project: News App (Real-Time Multi-Source News Reader & Reactive Bookmark Platform)**

* **System Overview:** A high-performance cross-platform digital journalism and news curation mobile application built with Flutter, GetX reactive state management, and REST API integration. Streams live breaking news across 8 categories from CNN Indonesia via Vercel endpoints, featuring zero-latency client-side substring search filtering, ISO-8601 calendar date querying with localized Indonesian formatting, reactive bookmark persistence, dynamic dark/light theme switching, and fluid Lottie vector onboarding animations.
* **Delivered Year:** 2024
* **Core Tech Stack:** Flutter, Dart, GetX, REST API, Lottie, HTTP

**Core Architecture & Features:**
* **REST API Live Stream Ingestion:** Direct asynchronous HTTP client consuming CNN Indonesia news data from https://berita-indo-api.vercel.app/v1/cnn-news/ with dynamic endpoint parameter routing, robust status code validation, and resilient JSON map parsing.
* **GetX Reactive Architecture & State Management:** Clean separation of presentation and business logic utilizing NewsController extending GetxController, observable variables (.obs) for allNews, filteredNews, bookMarks, and isLoading, wrapped in surgical Obx widget rebuilders.
* **Multi-Faceted Search & Calendar Date Filtering:** Real-time search listener tracking user input to perform case-insensitive headline substring matching combined with native showDatePicker calendar selection comparing ISO-8601 year, month, and day.
* **Immersive Editorial UI & Dynamic Theming:** Material Design 3 visual language featuring CustomScrollView with flexible SliverAppBar hero headers, category pills, reading duration badges, dynamic dark/light theme switching, and Lottie vector splash screen.`,
      links: [
        {
                "label": "News App Project Case Study",
                "url": "/projects/news-app"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/News-App"
        }
],
    },
  },
  QURAN_APP_DETAIL: {
    id: {
      title: `Proyek: Quran App (Digital Al-Quran Reader, Arabic Typography Engine & Reactive Bookmark Suite)`,
      text: `**Proyek: Quran App (Digital Al-Quran Reader, Arabic Typography Engine & Reactive Bookmark Suite)**

* **Ringkasan Sistem:** A modern, responsive digital Holy Quran mobile application built with Flutter, GetX reactive state management, and REST API integration. Features 114 surah directory browsing, responsive search querying across Latin names and surah numbers, comprehensive ayat reader with authentic Arabic calligraphy typography and HTML transliteration formatting, reactive bookmark curation, dynamic dark/light system theming, and an efficient controller-based architectural pattern.
* **Tahun Peluncuran:** 2024
* **Teknologi Utama:** Flutter, Dart, GetX, REST API, HTML, HTTP

**Fitur & Arsitektur Utama:**
* **RESTful Scripture Ingestion Engine:** Asynchronous HTTP client consuming Quranic surah and ayat data from https://quran-api.santrikoding.com/api/surah/ with dynamic surah number querying (/api/surah/{number}) and JSON array mapping.
* **GetX Reactive State & Theme Architecture:** Clean controller-based pattern utilizing QuranController extending GetxController, managing reactive observables (url.obs, isTheme.obs, search.obs, bookMarks.obs) with granular Obx widget rebuilders.
* **Multi-Attribute Search & Dynamic Grid Layout:** Dual-attribute client-side filtering matching lowercase Latin names (nama_latin) and surah sequence numbers (nomor) rendered through an adaptive SliverGridDelegateWithMaxCrossAxisExtent grid.
* **Rich Typography & HTML Transliteration Parser:** Integration with flutter_html: ^3.0.0 parsing HTML-formatted pronunciation markup alongside authentic Arabic typography (item['ar']) and circular verse counters.`,
      links: [
        {
                "label": "Studi Kasus Proyek Quran App",
                "url": "/projects/quran-app"
        },
        {
                "label": "Lihat Repositori / Demo",
                "url": "https://github.com/adyvka31/Quran-App"
        }
],
    },
    en: {
      title: `Project: Quran App (Digital Al-Quran Reader, Arabic Typography Engine & Reactive Bookmark Suite)`,
      text: `**Project: Quran App (Digital Al-Quran Reader, Arabic Typography Engine & Reactive Bookmark Suite)**

* **System Overview:** A modern, responsive digital Holy Quran mobile application built with Flutter, GetX reactive state management, and REST API integration. Features 114 surah directory browsing, responsive search querying across Latin names and surah numbers, comprehensive ayat reader with authentic Arabic calligraphy typography and HTML transliteration formatting, reactive bookmark curation, dynamic dark/light system theming, and an efficient controller-based architectural pattern.
* **Delivered Year:** 2024
* **Core Tech Stack:** Flutter, Dart, GetX, REST API, HTML, HTTP

**Core Architecture & Features:**
* **RESTful Scripture Ingestion Engine:** Asynchronous HTTP client consuming Quranic surah and ayat data from https://quran-api.santrikoding.com/api/surah/ with dynamic surah number querying (/api/surah/{number}) and JSON array mapping.
* **GetX Reactive State & Theme Architecture:** Clean controller-based pattern utilizing QuranController extending GetxController, managing reactive observables (url.obs, isTheme.obs, search.obs, bookMarks.obs) with granular Obx widget rebuilders.
* **Multi-Attribute Search & Dynamic Grid Layout:** Dual-attribute client-side filtering matching lowercase Latin names (nama_latin) and surah sequence numbers (nomor) rendered through an adaptive SliverGridDelegateWithMaxCrossAxisExtent grid.
* **Rich Typography & HTML Transliteration Parser:** Integration with flutter_html: ^3.0.0 parsing HTML-formatted pronunciation markup alongside authentic Arabic typography (item['ar']) and circular verse counters.`,
      links: [
        {
                "label": "Quran App Project Case Study",
                "url": "/projects/quran-app"
        },
        {
                "label": "View Source Code / Demo",
                "url": "https://github.com/adyvka31/Quran-App"
        }
],
    },
  },

  ACHIEV_PNBITC: {
    id: {
      title: `Juara 2 Nasional (National Runner-Up) - PNBITC#18 Politeknik Negeri Bali`,
      text: `**Juara 2 Nasional Web Design Competition: PNBITC#18 2026**

* **Institusi Penyelenggara:** Politeknik Negeri Bali (PNBITC#18).
* **Kategori & Tingkat:** Web Design Competition (Tingkat Nasional, Mahasiswa & Umum).
* **Tantangan Sprint 1 Bulan:** Dibangun dan diselesaikan dari nol dalam sprint berintensitas tinggi selama bulan September 2026 di sela-sela jadwal padat magang korporat kelas 12 SMK.
* **Mengungguli Kampus Nasional:** Berhasil meraih podium Juara 2 Nasional mengungguli ratusan tim mahasiswa teknik dari berbagai universitas terkemuka di seluruh Indonesia.
* **Teknologi:** React, JavaScript, Tailwind CSS, UI/UX Design Figma.`,
      links: [
        {
                "label": "Detail Juara 2 PNBITC Bali",
                "url": "/achievements/2nd-place-national-web-design-competition-pnbitc"
        },
        {
                "label": "Artikel Resmi IDN di Bali",
                "url": "https://idn.sch.id/smk-dkv-terbaik-bogor-siswa-idn-tembus-final-kompetisi-it-di-bali/"
        }
],
    },
    en: {
      title: `2nd Place National Runner-Up - PNBITC#18 Politeknik Negeri Bali`,
      text: `**2nd Place National Web Design Competition: PNBITC#18 2026**

* **Host Institution:** Politeknik Negeri Bali (PNBITC#18).
* **Category & Tier:** National Web Design Competition (Collegiate & Public).
* **High-Stakes 1-Month Sprint:** Engineered and shipped from scratch in September 2026 while balancing a demanding corporate 12th-grade internship.
* **Outperforming University Contenders:** Earned a podium finish over 100+ collegiate and public engineering teams across the country.
* **Tech Stack:** React, JavaScript, Tailwind CSS, UI/UX Design Figma.`,
      links: [
        {
                "label": "PNBITC Bali Award Details",
                "url": "/achievements/2nd-place-national-web-design-competition-pnbitc"
        },
        {
                "label": "Official Press Release",
                "url": "https://idn.sch.id/smk-dkv-terbaik-bogor-siswa-idn-tembus-final-kompetisi-it-di-bali/"
        }
],
    },
  },
  ACHIEV_ICOMFEST: {
    id: {
      title: `Juara 1 Nasional (1st Place Champion) - ICOMFEST 2025 Universitas Ahmad Dahlan`,
      text: `**Juara 1 Nasional Web Design Competition: ICOMFEST 2025**

* **Institusi Penyelenggara:** Universitas Ahmad Dahlan (UAD) Yogyakarta.
* **Karya Pemenang: Pusakaku:** Platform pelestarian warisan budaya nusantara berbasis Three.js dengan rendering artefak 3D interaktif real-time.
* **Keunggulan:** Dinilai juri unggul dalam orisinalitas konsep, kedalaman interaktivitas 3D, fluiditas animasi Framer Motion, dan misi pelestarian budaya bangsa.`,
      links: [
        {
                "label": "Detail Juara 1 ICOMFEST",
                "url": "/achievements/1st-place-national-web-design-competition"
        },
        {
                "label": "Studi Kasus Proyek Pusakaku 3D",
                "url": "/projects/pusakaku"
        }
],
    },
    en: {
      title: `1st Place National Champion - ICOMFEST 2025 Universitas Ahmad Dahlan`,
      text: `**1st Place National Web Design Champion: ICOMFEST 2025**

* **Host Institution:** Universitas Ahmad Dahlan (UAD) Yogyakarta.
* **Winning Platform: Pusakaku:** Interactive 3D Indonesian cultural heritage platform powered by Three.js artifact rendering and gamified discovery.
* **Evaluation Criteria:** Commended for spatial interactive innovation, flawless 60 FPS performance, and authentic national preservation impact.`,
      links: [
        {
                "label": "ICOMFEST Champion Details",
                "url": "/achievements/1st-place-national-web-design-competition"
        },
        {
                "label": "Pusakaku 3D Cultural Case Study",
                "url": "/projects/pusakaku"
        }
],
    },
  },
  ACHIEV_UNILA: {
    id: {
      title: `Finalis Nasional (Top 5 Finalist) - UNILA 2025 (SemuaBisa)`,
      text: `**Top 5 Finalis Nasional Web Development: UNILA 2025**

* **Penyelenggara:** Universitas Lampung (UNILA).
* **Karya: SemuaBisa:** Platform inklusi digital yang dirancang khusus dengan standar aksesibilitas tertinggi (WCAG AAA) untuk tunanetra, tunarungu, dan disabilitas motorik.`,
      links: [
        {
                "label": "Detail Finalis UNILA",
                "url": "/achievements/finalist-national-web-dev-competition"
        },
        {
                "label": "Studi Kasus Proyek SemuaBisa",
                "url": "/projects/semua-bisa"
        }
],
    },
    en: {
      title: `Top 5 National Finalist - UNILA 2025 (SemuaBisa Accessibility Platform)`,
      text: `**Top 5 National Finalist: UNILA 2025 Web Competition**

* **Host Institution:** Universitas Lampung (UNILA).
* **Platform: SemuaBisa:** Digital accessibility platform built to rigorous WCAG AAA compliance standards for users with visual, auditory, and motor impairments.`,
      links: [
        {
                "label": "UNILA Finalist Case Study",
                "url": "/achievements/finalist-national-web-dev-competition"
        },
        {
                "label": "SemuaBisa Accessibility Platform",
                "url": "/projects/semua-bisa"
        }
],
    },
  },
  ACHIEV_POSTER: {
    id: {
      title: `Best Poster Design Award - Festival Kreatif IDN Boarding School`,
      text: `**Juara 1 Desain Poster Kreatif (Best Poster Award)**

* **Penyelenggara:** SMK IDN Boarding School.
* **Pencapaian:** Meraih predikat poster terbaik berkat keunggulan tata letak visual, teori tipografi, dan komposisi hierarki grafis.`,
      links: [
        {
                "label": "Lihat Halaman Prestasi",
                "url": "/achievements"
        }
],
    },
    en: {
      title: `Best Poster Design Award - SMK IDN Boarding School`,
      text: `**1st Place Best Poster Design Award**

* **Host Institution:** SMK IDN Boarding School.
* **Recognition:** Awarded 1st place for excellence in graphic composition, typography hierarchy, and visual branding.`,
      links: [
        {
                "label": "View Achievements",
                "url": "/achievements"
        }
],
    },
  },
  BOOK_GAME_SCRATCH: {
    id: {
      title: `Buku Resmi: Membuat Game Tanpa Coding dengan MIT Scratch (125 Halaman)`,
      text: `**Buku: Membuat Game Tanpa Coding (125 Halaman)**

* **Penulis:** Rafif Sava Adyvka Pratama.
* **Penerbit:** SMK IDN Boarding School (Januari 2023 · Format Digital PDF Interaktif).
* **Tujuan Buku:** Membantu pemula dan generasi muda memahami konsep logika komputasi tanpa rasa takut terhadap kesalahan sintaks, menggunakan kanvas visual MIT Scratch 3.0.
* **5 Game Lengkap yang Dibangun:**
  1. Pong Klasik (Mekanika pantulan dan koordinat)
  2. Catch the Apples (Event loop dan kalkulasi skor)
  3. Platformer Jump (Gravitasi dan collision physics balok)
  4. Pacman (Navigasi labirin dan pergerakan patroli hantu mandiri)
  5. Block Breaker (Sudut pantulan paddle dan pola penghancuran balok)
* **Dampak Komunitas:** Digunakan sebagai buku panduan kurikulum resmi di SMK IDN dan berbagai workshop yang melatih 300+ siswa di Depok dan Jakarta.`,
      links: [
        {
                "label": "Detail Buku Membuat Game Tanpa Coding",
                "url": "/publications/buku-membuat-game-tanpa-coding"
        },
        {
                "label": "Unduh Buku Lengkap (PDF)",
                "url": "/publications/buku-membuat-game-tanpa-coding-adyvka.pdf"
        }
],
    },
    en: {
      title: `Published Book: Making Games Without Coding with MIT Scratch (125 Pages)`,
      text: `**Published Book: Making Games Without Coding (125 Pages)**

* **Author:** Rafif Sava Adyvka Pratama.
* **Publisher:** SMK IDN Boarding School (January 2023 · Interactive Digital PDF).
* **Pedagogical Purpose:** Demystifies algorithmic computational logic for young learners through MIT Scratch 3.0 visual canvas, bypassing cryptic syntax errors.
* **5 Complete Playable Games Engineered:**
  1. Classic Pong (Bouncing physics and coordinate systems)
  2. Fruit Catch (Event loops and score calculators)
  3. Platformer Jump (Gravity simulation and collision boundaries)
  4. Pacman (Maze navigation and autonomous ghost patrol AI)
  5. Brick Breaker (Paddle deflection physics and brick grid algorithms)
* **Real-World Impact:** Adopted as core curriculum across community workshops training 300+ middle and high school students.`,
      links: [
        {
                "label": "Making Games Book Details",
                "url": "/publications/buku-membuat-game-tanpa-coding"
        },
        {
                "label": "Download Full Book (PDF)",
                "url": "/publications/buku-membuat-game-tanpa-coding-adyvka.pdf"
        }
],
    },
  },
  BOOK_WEB_FRAMEWORK: {
    id: {
      title: `Buku Resmi: Membuat Website Modern dengan Framework CSS & JS`,
      text: `**Buku: Membuat Website Modern dengan Framework**

* **Penulis:** Rafif Sava Adyvka Pratama.
* **Fokus Kurikulum:** Rekayasa web modern responsif, semantik HTML5, CSS layouting (Grid & Flexbox), dan penerapan utility-first framework dengan Tailwind CSS.
* **Sasaran Pembaca:** Pelajar vokasi dan pemula yang ingin memahami standar pengembangan web profesional dari kanvas kosong hingga deployment.`,
      links: [
        {
                "label": "Detail Buku Website Modern",
                "url": "/publications/buku-membuat-website-dengan-framework"
        }
],
    },
    en: {
      title: `Published Book: Building Modern Websites with Frameworks`,
      text: `**Published Book: Building Modern Websites with Frameworks**

* **Author:** Rafif Sava Adyvka Pratama.
* **Curriculum Focus:** Modern responsive web architecture, semantic HTML5, CSS Grid/Flexbox layouts, and Tailwind CSS utility styling.
* **Audience:** Vocational engineering students and self-taught developers learning industry-standard web engineering.`,
      links: [
        {
                "label": "Modern Website Book Details",
                "url": "/publications/buku-membuat-website-dengan-framework"
        }
],
    },
  },

  ALL_EXPERIENCES: {
    id: {
      title: `Total Pengalaman: 20 Rekam Jejak Terverifikasi dalam 3 Pilar`,
      text: `**Adyvka memiliki total 20 rekam jejak pengalaman terverifikasi dalam 3 pilar utama.**

Rekam jejak Adyvka memadukan rekayasa perangkat lunak skala enterprise, dedikasi mengajar, dan kepemimpinan organisasi nyata:

1. **4 Pengalaman Kerja Profesional (Work Experience):**
   * **PT Intisel Prodaktifakom:** Lead Systems Engineer & Project Manager sistem Databank ERP (memimpin 4 engineer, otomasi Huawei ISDP bot scraping, approval digital 3 tahap).
   * **PT Ardyanda Digital Inovasi:** Full Stack Developer Intern (payroll presisi 100%, sistem pinjaman kasbon karyawan, buku kas keuangan, dan penghubung klien).
   * **CV. Richo Bahari:** Frontend Developer & UI/UX Architect (platform industri Next.js 16 berstandar K3 Zero Accident & ISO 9001).
   * **Fakultas Kedokteran Universitas Muhammadiyah Jakarta:** Full Stack Engineer Contract (sistem klirens etik riset medis KEPK FK UMJ berstandar WHO dan CIOMS).

2. **10 Pengalaman Mengajar & Pelatihan Teknologi (Teaching & Mentorship):**
   * **SMPN 25 Depok:** Memberikan pelatihan langsung kepada dewan guru dan kepala sekolah mengenai implementasi media pembelajaran digital modern.
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
                "label": "Detail Pengalaman PT Ardyanda",
                "url": "/experience/pt-ardyanda-digital-inovasi-full-stack-developer-internship"
        },
        {
                "label": "Detail Pengalaman PT Intisel",
                "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
        },
        {
                "label": "Detail Solo Backpacker 3 Negara",
                "url": "/experience/singapore-malaysia-thailand-backpacker-3-country"
        }
],
    },
    en: {
      title: `Total Experience: 20 Verified Records Across 3 Strategic Pillars`,
      text: `**Adyvka holds a total of 20 verified experience records across 3 strategic pillars.**

His journey bridges enterprise software engineering, community technology mentorship, and authentic organizational leadership:

1. **4 Professional Work Experiences:**
   * **PT Intisel Prodaktifakom:** Lead Systems Engineer and Project Manager for Databank ERP (leading 4 engineers, Huawei ISDP web scraping bot, and 3-stage digital approvals).
   * **PT Ardyanda Digital Inovasi:** Full Stack Developer Intern (100% precision payroll, employee loan management, financial cash ledger, and client communication).
   * **CV. Richo Bahari:** Frontend Developer and UI/UX Architect (Next.js 16 industrial platform adhering to Zero Accident K3 and ISO 9001 standards).
   * **Faculty of Medicine Universitas Muhammadiyah Jakarta:** Full Stack Engineer Contract (SIM KEPK medical research ethical clearance system compliant with WHO and CIOMS standards).

2. **10 Teaching and Technology Mentorship Experiences:**
   * **SMPN 25 Depok:** Conducted direct digital training for the school principal and faculty teachers on modern interactive learning media.
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
                "label": "PT Ardyanda Internship Details",
                "url": "/experience/pt-ardyanda-digital-inovasi-full-stack-developer-internship"
        },
        {
                "label": "PT Intisel Enterprise Case Study",
                "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
        },
        {
                "label": "Solo Backpacker 3 Countries Case Study",
                "url": "/experience/singapore-malaysia-thailand-backpacker-3-country"
        }
],
    },
  },
  WORK_EXPERIENCE: {
    id: {
      title: `4 Pengalaman Kerja Profesional (Work Experience)`,
      text: `**4 Pengalaman Kerja Profesional Adyvka di Industri & Institusi**

Adyvka telah mengemban tanggung jawab teknik tingkat lanjut di empat lingkungan kerja profesional:

1. **PT Intisel Prodaktifakom (Lead Systems Engineer & Project Manager):**
   * Memimpin perancangan Databank ERP, sistem audit infrastruktur telekomunikasi nasional.
   * Memimpin 4 software engineer dan membangun bot web scraping otomatis Huawei ISDP.
   * Mengintegrasikan persetujuan digital berjenjang 3 tahap untuk lebih dari 1.000 site BTS.

2. **PT Ardyanda Digital Inovasi (Full Stack Developer Intern):**
   * Lolos melalui 5 tahap wawancara ketat untuk magang wajib kelas 12 SMK.
   * Cepat dipromosikan dari backend ke Full Stack Developer karena kecepatan belajar tinggi.
   * Membangun sistem payroll otomatis 100% presisi, mesin kasbon karyawan, modul platform RS, dan ERP masjid.
   * Menjadi Master of Ceremonies (MC) pada acara resmi perayaan kemerdekaan perusahaan.

3. **CV. Richo Bahari (Frontend Developer & UI/UX Architect):**
   * Mengembangkan portal web industri Next.js 16 berkecepatan tinggi untuk kontraktor umum dan EPC.
   * Mengintegrasikan kepatuhan keselamatan kerja K3 (Zero Accident Policy) dan standar ISO 9001:2015.

4. **Fakultas Kedokteran Universitas Muhammadiyah Jakarta (Full Stack Engineer Contract):**
   * Mengarsiteki SIM KEPK FK UMJ, platform klirens etik riset kesehatan berstandar WHO dan CIOMS 2016.
   * Mengotomasi alur peninjauan multi-reviewer dan penerbitan sertifikat etik digital resmi ber-QR Code.`,
      links: [
        {
                "label": "Buka Halaman Pengalaman",
                "url": "/experience"
        },
        {
                "label": "Detail PT Ardyanda",
                "url": "/experience/pt-ardyanda-digital-inovasi-full-stack-developer-internship"
        },
        {
                "label": "Detail PT Intisel",
                "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
        }
],
    },
    en: {
      title: `4 Professional Work Experiences`,
      text: `**Adyvka's 4 Corporate and Institutional Work Experiences**

Adyvka has delivered high-impact engineering across 4 professional environments:

1. **PT Intisel Prodaktifakom (Lead Systems Engineer & Project Manager):**
   * Architected Databank ERP for nationwide telecom site audit operations.
   * Led a team of 4 engineers and built automated Huawei ISDP web scraping bots.
   * Deployed a 3-tier approval pipeline auditing over 1,000 cellular BTS sites.

2. **PT Ardyanda Digital Inovasi (Full Stack Developer Intern):**
   * Earned vocational placement through 5 rigorous interview rounds.
   * Promoted from backend intern to full-stack engineer, representing the team in client meetings.
   * Built 100% precision payroll systems, employee advance loans, hospital modules, and mosque ERPs.
   * Served as company Master of Ceremonies (MC) for corporate celebrations.

3. **CV. Richo Bahari (Frontend Developer & UI/UX Architect):**
   * Engineered an ultra-fast Next.js 16 industrial platform for a general contractor and EPC firm.
   * Embedded occupational safety (K3 Zero Accident) and ISO 9001:2015 compliance catalogs.

4. **Faculty of Medicine Universitas Muhammadiyah Jakarta (Full Stack Engineer Contract):**
   * Architected SIM KEPK medical research ethical clearance platform under WHO/CIOMS 2016 guidelines.
   * Automated multi-reviewer assignments and official certified digital clearances.`,
      links: [
        {
                "label": "View Experience Page",
                "url": "/experience"
        },
        {
                "label": "PT Ardyanda Details",
                "url": "/experience/pt-ardyanda-digital-inovasi-full-stack-developer-internship"
        },
        {
                "label": "PT Intisel Details",
                "url": "/experience/pt-intisel-prodaktifakom-full-stack-engineer-freelance"
        }
],
    },
  },
  TEACHING_EXPERIENCE: {
    id: {
      title: `10 Pengalaman Mengajar & Pelatihan Teknologi (Teaching & Mentorship)`,
      text: `**10 Pengalaman Mengajar & Kontribusi Edukasi Adyvka**

Adyvka telah dipercaya membagikan ilmu teknis dan memimpin pelatihan di berbagai institusi pendidikan:

1. **SMPN 25 Depok (Pelatihan Guru & Kepala Sekolah):** Melatih dewan guru dan kepala sekolah mengenai pembuatan media ajar digital Android menggunakan Kodular di usia 16 tahun.
2. **SMA Lazuardi GCS:** Instruktur dan Squad Lead workshop pengembangan web frontend modern (HTML5, CSS layouting, VS Code) untuk 20 siswa klub IT.
3. **SMPN 45 Jakarta:** Instruktur pengembangan aplikasi mobile untuk pelajar menggunakan Kodular.
4. **SMP INS Depok:** Pelatihan pemrograman visual dan pengembangan aplikasi Android bagi 30+ santri.
5. **Semut-Semut The Natural School:** Pengajaran logika pemrograman game 2D dan game loop dengan Construct.
6. **Hajrabyadl:** Instruktur frontend coding dan layouting web responsif.
7. **Al-Anshar Boarding School (App Design):** Pelatihan desain antarmuka Figma UI/UX untuk pelajar.
8. **Al-Anshar Boarding School (Game Development):** Pelatihan logika pembuatan game 2D hingga rilis playable game bagi 25+ santri.
9. **MTs Yasmine:** Pelatihan desain grafis dan komposisi visual media sekolah.
10. **Griyya Sunnah:** Pengenalan computational thinking dan logika game 2D.`,
      links: [
        {
                "label": "Jelajahi Pengalaman Mengajar",
                "url": "/experience"
        },
        {
                "label": "Detail Pelatihan Guru SMPN 25 Depok",
                "url": "/experience/smpn-45-app-development-instructor"
        },
        {
                "label": "Detail Workshop SMA Lazuardi",
                "url": "/experience/sma-lazuardi-gcs-web-development-instructor"
        }
],
    },
    en: {
      title: `10 Teaching & Technology Mentorship Experiences`,
      text: `**Adyvka's 10 Teaching and Technology Mentorship Records**

Adyvka has spearheaded workshops and digital literacy initiatives across numerous academic institutions:

1. **SMPN 25 Depok (Faculty Teacher Training):** Trained senior school faculty and the principal on building interactive mobile teaching tools with Kodular at age 16.
2. **SMA Lazuardi GCS:** Lead instructor and squad lead for modern frontend web engineering (HTML5, CSS, VS Code) for 20 IT club students.
3. **SMPN 45 Jakarta:** Mobile application development instructor for students using Kodular.
4. **SMP INS Depok:** Visual programming and Android application workshop for 30+ students.
5. **Semut-Semut The Natural School:** 2D game logic and game loop instruction with Construct.
6. **Hajrabyadl:** Modern responsive web development and CSS layout training.
7. **Al-Anshar Boarding School (App Design):** Figma UI/UX interface design training.
8. **Al-Anshar Boarding School (Game Development):** 2D arcade game architecture and publication for 25+ students.
9. **MTs Yasmine:** Graphic design and visual composition instruction.
10. **Griyya Sunnah:** Computational thinking and interactive game logic training.`,
      links: [
        {
                "label": "Explore Teaching Experiences",
                "url": "/experience"
        },
        {
                "label": "SMPN 25 Depok Teacher Training Details",
                "url": "/experience/smpn-45-app-development-instructor"
        },
        {
                "label": "SMA Lazuardi Workshop Details",
                "url": "/experience/sma-lazuardi-gcs-web-development-instructor"
        }
],
    },
  },
  LEADERSHIP_EXPERIENCE: {
    id: {
      title: `6 Pengalaman Kepemimpinan, Ekspedisi & Survival (Leadership)`,
      text: `**6 Rekam Jejak Kepemimpinan, Ekspedisi & Ketangguhan Adyvka**

Kepemimpinan Adyvka ditempa melalui aksi nyata di lapangan:

1. **Solo Backpacker 3 Negara (Singapura, Malaysia, Thailand):** Terpilih sebagai 1 dari 9 delegasi di usia 15 tahun. 100% dibiayai mandiri dari hasil freelance koding dan desain, menavigasi rute transit internasional dan wawancara bahasa Inggris secara independen.
2. **Business & Life Survival di Semarang (PT Intisel):** Diterjunkan ke kota Semarang dengan modal awal Rp 0, berhasil bertahan hidup dan menghasilkan profit bersih lewat inisiatif bisnis nyata dan logistik telekomunikasi.
3. **Ketua Divisi Acara OSIS SMK IDN (2 Periode):** Memimpin divisi acara selama dua periode berturut-turut dalam merancang konsep, rundown panggung, dan manajemen krisis puluhan acara besar sekolah berasrama.
4. **Koordinator Acara Kompetisi IT FEST 2025:** Memimpin kelancaran teknis festival teknologi nasional dengan lebih dari 500 peserta dari seluruh Indonesia.
5. **Barmus Voluntrip:** Koordinator relawan dan dokumentasi kegiatan sosial kemanusiaan ke masyarakat pelosok.
6. **Live In Pedesaan:** Tinggal dan membaur sepekan penuh bersama keluarga petani tradisional di pelosok pedesaan Jawa Barat.`,
      links: [
        {
                "label": "Lihat Rekam Jejak Kepemimpinan",
                "url": "/experience"
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
      title: `6 Leadership, Expedition & Survival Records`,
      text: `**Adyvka's 6 Leadership, Expedition and Survival Milestones**

Adyvka's leadership has been tested through genuine adversity and high-stakes field execution:

1. **Solo Backpacker Across 3 Countries (Singapore, Malaysia, Thailand):** Selected among 9 top delegates at age 15. 100% self-funded through freelance coding savings, independently navigating international borders and conducting conversational field interviews in English.
2. **Business and Life Survival in Semarang (PT Intisel):** Deployed to Semarang with Rp 0 initial cash capital, achieving positive cash flow and survival through agile trading and telecom logistics.
3. **Student Council Event Division Leader (SMK IDN):** Led event operations for 2 consecutive terms, orchestrating stage rundowns, logistics, and emergency response for major campus initiatives.
4. **Event Coordinator for IT FEST 2025:** Directed technical operations for a national tech competition involving 500+ participants nationwide.
5. **Barmus Voluntrip:** Field volunteer coordinator and media producer for rural community outreach.
6. **Rural Immersion (Live In):** Lived and worked for a full week alongside traditional farming families in rural West Java.`,
      links: [
        {
                "label": "View Leadership Records",
                "url": "/experience"
        },
        {
                "label": "Solo Backpacker Case Study",
                "url": "/experience/singapore-malaysia-thailand-backpacker-3-country"
        },
        {
                "label": "Student Council Leadership",
                "url": "/experience/idn-student-council-event-division-leader"
        }
],
    },
  },
  COUNT_PROJECTS: {
    id: {
      title: `Total Proyek: 18 Karya Rekayasa Perangkat Lunak Terverifikasi`,
      text: `**Adyvka telah merancang dan membangun total 18 proyek perangkat lunak terverifikasi.**

Portofolionya mencakup sistem enterprise multi-tenant, platform kesehatan berskala nasional, kecerdasan buatan (AI), aplikasi mobile, hingga solusi web modern:

* **Sistem Enterprise & Tata Kelola:**
  1. Databank ERP (PT Intisel Prodaktifakom)
  2. SIM KEPK FK UMJ (Klirens Etik Riset Medis WHO/CIOMS)
  3. TerasTani (Decentralized Urban Agriculture OS)
  4. RuangTumbuh (Pediatric Development & Mental Health Telemedicine)
  5. CV. Richo Bahari (Industrial EPC Contractor Platform)

* **Juara Kompetisi Nasional:**
  6. Pusakaku (Juara 1 Nasional ICOMFEST 2025 - Interactive 3D Web Culture)
  7. SemuaBisa (Finalis Nasional UNILA - Aksesibilitas WCAG AAA untuk Disabilitas)

* **Solusi AI, Mobile & Komersial:**
  8. FitSmart (AI Healthcare & Clinical Nutrition Assistant dengan Gemini Pro)
  9. AI Ticket Manager (Ticketing Support dengan Analisis Sentimen NLP)
  10. JavaIsland (Portal Interaktif Pariwisata dan Budaya Nusantara)
  11. IDNCourse (Platform EdTech Pendidikan Vokasi)
  12. Coffeee Shop (Modern Coffee Ecommerce & Order Tracking)
  13. MyStyle (Fashion Ecommerce Platform)
  14. DeliFood (On-Demand Food Ordering Web Platform)
  15. Attendance App (Sistem Presensi GPS Geofencing & Kamera Verifikasi)
  16. QR Guest Manager (Pemindai QR Presensi Event Kecepatan Tinggi)
  17. News App (Portal Berita Real-Time dengan Kurasi Topik)
  18. Quran App (Aplikasi Al-Quran Digital Lengkap dengan Audio Murottal)

Seluruh proyek dapat dijelajahi lengkap dengan arsitektur dan repositorinya di halaman Projects.`,
      links: [
        {
                "label": "Jelajahi Katalog 18 Proyek",
                "url": "/projects"
        }
],
    },
    en: {
      title: `Total Projects: 18 Verified Software Engineering Works`,
      text: `**Adyvka has engineered a total of 18 verified production-grade software projects.**

His portfolio spans enterprise systems, healthcare governance, artificial intelligence, mobile applications, and modern web platforms:

* **Enterprise & Governance Platforms:**
  1. Databank ERP (PT Intisel Prodaktifakom)
  2. SIM KEPK FK UMJ (WHO/CIOMS Compliant Medical Ethics Platform)
  3. TerasTani (Decentralized Urban Agriculture OS)
  4. RuangTumbuh (Pediatric Telemedicine Platform)
  5. CV. Richo Bahari (Heavy Industrial EPC Portal)

* **National Competition Award Winners:**
  6. Pusakaku (1st Place National Champion at ICOMFEST 2025 - 3D Cultural Platform)
  7. SemuaBisa (National Finalist at UNILA - WCAG AAA Accessibility for Disabled Users)

* **AI, Mobile & Commercial Solutions:**
  8. FitSmart (AI Clinical Nutrition Assistant with Google Gemini Pro)
  9. AI Ticket Manager (Support Ticket Routing with NLP Sentiment Analysis)
  10. JavaIsland (Interactive Indonesian Cultural Heritage Portal)
  11. IDNCourse (Vocational Tech Education Platform)
  12. Coffeee Shop (Specialty Coffee Ecommerce)
  13. MyStyle (Fashion & Lifestyle Ecommerce Catalog)
  14. DeliFood (On-Demand Food Ordering System)
  15. Attendance App (GPS Geofencing Mobile Attendance Platform)
  16. QR Guest Manager (High-Speed Event QR Ticket Scanner)
  17. News App (Real-Time News Aggregator)
  18. Quran App (Digital Al-Quran Reader with Audio Recitations)

Explore detailed architectural breakdowns and source code on the Projects page.`,
      links: [
        {
                "label": "Explore 18 Projects Catalog",
                "url": "/projects"
        }
],
    },
  },
  LIST_PROJECTS: {
    id: {
      title: `Katalog Lengkap 18 Proyek Rekayasa Perangkat Lunak Adyvka`,
      text: `**Katalog 18 Proyek Rekayasa Perangkat Lunak Adyvka**

Berikut adalah daftar lengkap 18 proyek yang telah dibangun dan dirilis:

1. **Databank ERP:** ERP audit site telekomunikasi nasional (Next.js, TypeScript, PostgreSQL, Prisma, Redis, Docker).
2. **SIM KEPK FK UMJ:** Tata kelola klirens etik medis WHO/CIOMS 2016 (Laravel 12, MySQL, Spatie RBAC, AWS).
3. **TerasTani:** OS pertanian urban desentralisasi dengan AI computer vision dan smart escrow (React 19, Supabase, Express).
4. **RuangTumbuh:** Skrining tumbuh kembang anak dan telemedis kesehatan mental (React, Express, PostgreSQL).
5. **Pusakaku:** Platform budaya 3D interaktif (Juara 1 Nasional ICOMFEST 2025, Three.js, React).
6. **SemuaBisa:** Platform aksesibilitas WCAG AAA untuk penyandang disabilitas (Finalis Nasional UNILA).
7. **CV. Richo Bahari:** Platform profil kontraktor industri bersertifikasi K3 & ISO 9001 (Next.js 16, React 19).
8. **FitSmart:** Asisten kesehatan preventif bertenaga AI Gemini Pro dengan 24 modal diagnostik.
9. **AI Ticket Manager:** Sistem otomasi tiket dukungan pelanggan dengan analisis sentimen NLP.
10. **JavaIsland:** Portal pariwisata dan eksplorasi budaya pulau Jawa berbasis peta interaktif.
11. **IDNCourse:** Platform kursus koding dan keahlian vokasi digital.
12. **Coffeee Shop:** Ecommerce pemesanan kopi artisanal dengan pelacakan pesanan real-time.
13. **MyStyle:** Katalog belanja fashion modern dengan validasi stok dinamis.
14. **DeliFood:** Aplikasi web pemesanan makanan cepat saji dan manajemen keranjang belanja.
15. **Attendance App:** Aplikasi mobile presensi berbasis radius GPS geofencing dan verifikasi kamera.
16. **QR Guest Manager:** Pemindai kode QR berkecepatan tinggi untuk presensi dan validasi tamu acara.
17. **News App:** Pembaca berita real-time dengan filter kategori dan pemuatan konten instan.
18. **Quran App:** Aplikasi Al-Quran digital dengan teks ayat Arab, terjemahan, dan pemutar audio murottal.`,
      links: [
        {
                "label": "Buka Halaman Seluruh Proyek",
                "url": "/projects"
        }
],
    },
    en: {
      title: `Complete Catalog of Adyvka's 18 Software Projects`,
      text: `**Complete Catalog of Adyvka's 18 Software Engineering Projects**

A comprehensive directory of all 18 production systems and applications engineered by Adyvka:

1. **Databank ERP:** Telecom infrastructure audit platform (Next.js, TypeScript, PostgreSQL, Prisma, Redis, Docker).
2. **SIM KEPK FK UMJ:** WHO/CIOMS 2016 compliant medical ethical clearance system (Laravel 12, MySQL, Spatie RBAC, AWS).
3. **TerasTani:** Decentralized urban farming OS with computer vision crop diagnostics (React 19, Supabase, Express).
4. **RuangTumbuh:** Pediatric screening and developmental telemedicine platform (React, Express, PostgreSQL).
5. **Pusakaku:** 3D interactive cultural preservation platform (1st Place National Champion ICOMFEST 2025).
6. **SemuaBisa:** WCAG AAA accessibility platform for people with disabilities (National Finalist UNILA).
7. **CV. Richo Bahari:** Industrial EPC general contractor platform adhering to K3 and ISO 9001 (Next.js 16, React 19).
8. **FitSmart:** Gemini Pro AI clinical wellness assistant featuring 24 diagnostic modals.
9. **AI Ticket Manager:** Support ticketing platform with NLP sentiment routing and automated suggestions.
10. **JavaIsland:** Interactive cultural tourism and exploration portal with rich media guides.
11. **IDNCourse:** Digital vocational learning management system for tech skills.
12. **Coffeee Shop:** Artisanal coffee ecommerce with live order tracking.
13. **MyStyle:** Modern apparel ecommerce catalog with real-time inventory counter.
14. **DeliFood:** On-demand food ordering platform with dynamic menu filters.
15. **Attendance App:** Mobile attendance system with GPS geofence radius enforcement and selfie verification.
16. **QR Guest Manager:** High-speed event attendee check-in and QR ticket validation tool.
17. **News App:** Breaking news reader with category filtering and bookmarking.
18. **Quran App:** Digital Quran platform featuring full 114 Surahs and audio recitations.`,
      links: [
        {
                "label": "Explore Projects Catalog",
                "url": "/projects"
        }
],
    },
  },
  CERTIFICATES: {
    id: {
      title: `23 Sertifikasi Profesional & Akademik Internasional`,
      text: `**23 Sertifikasi Profesional & Akademik Terverifikasi Adyvka**

Adyvka memegang total 23 sertifikat resmi yang memvalidasi keahlian teknis dari institusi global dan nasional terkemuka:

* **Computer Science & Sistem Tingkat Rendah:**
  * **CS50: Introduction to Computer Science (Harvard University):** Kurikulum ilmu komputer unggulan dunia (Algoritma, Alokasi Memori C, Python, SQL, Struktur Data).
  * **Memulai Pemrograman Dengan C & Pemrograman Dasar C (Dicoding & Skilvul):** Fondasi pointer, alokasi memori heap/stack, dan logika komputasi murni.

* **Full Stack & Cloud Architecture:**
  * **Coding Camp: Full Stack Developer (Dicoding × DBS Foundation):** Bootcamp intensif 90+ jam rekayasa web Express, React, RESTful API, dan PostgreSQL.
  * **Cloud Practitioner Essentials (Amazon Web Services / AWS):** Arsitektur cloud computing, EC2, S3, RDS, IAM, keamanan, dan reliabilitas server.
  * **Belajar Membuat Aplikasi Back-End (Dicoding):** RESTful API berstandar industri dengan Hapi.js/Express dan pengujian Postman.
  * **Frontend Web Developer & Aplikasi Web dengan React (Dicoding):** Komponen modern, state management, SPA architecture, dan WCAG accessibility.

* **DevOps & Rekayasa Perangkat Lunak:**
  * **Belajar Dasar Git dengan GitHub (Dicoding):** Branching strategies, rebase, resolusi merge conflict, dan open-source collaboration.
  * **Belajar Dasar Data Analyst & Python Fundamentals (Dicoding & DQLab):** Data wrangling, statistika, manipulasi dataset, dan visualisasi.
  * **Dasar Prompt Engineering & Artificial Intelligence Basics (AI Academy):** Rekayasa prompt LLM terstruktur, few-shot learning, dan etika AI.

Anda dapat menanyakan detail materi dan capaian dari setiap sertifikat spesifik secara langsung kepada saya.`,
      links: [
        {
                "label": "Lihat Daftar Seluruh Sertifikat",
                "url": "/certificates"
        }
],
    },
    en: {
      title: `23 Professional & Academic Certifications`,
      text: `**Adyvka's 23 Verified Professional and Academic Certifications**

Adyvka holds 23 credentials validating technical rigor across computer science, software engineering, and cloud systems:

* **Computer Science & Low-Level Foundations:**
  * **CS50: Introduction to Computer Science (Harvard University):** Harvard's flagship CS curriculum covering memory management in C, algorithms, Big-O complexity, Python, and SQL.
  * **C Programming Foundations (Dicoding & Skilvul):** Manual pointer arithmetic, data structures, and runtime efficiency.

* **Full Stack & Cloud Engineering:**
  * **Coding Camp: Full Stack Developer (Dicoding × DBS Foundation):** 90+ hours corporate-sponsored bootcamp covering decoupled Express APIs, React, and PostgreSQL.
  * **Cloud Practitioner Essentials (Amazon Web Services / AWS):** Cloud architecture, EC2, S3, RDS, IAM security, and distributed infrastructure.
  * **Backend Application Development (Dicoding):** Industrial RESTful API contracts, validation middleware, and automated endpoint testing.
  * **Frontend Web Developer & Modern React (Dicoding):** Semantic HTML5, CSS Grid layouting, state management, and WCAG accessibility standards.

* **DevOps, Data Analytics & AI:**
  * **Git with GitHub Fundamentals (Dicoding):** Clean commit hygiene, rebase workflows, merge conflict resolution, and PR reviews.
  * **Data Analyst Foundations & Python (Dicoding & DQLab):** Data cleansing, exploratory analysis, and data modeling.
  * **Prompt Engineering & AI Foundations (AI Academy):** LLM instruction tuning, few-shot prompting patterns, and deterministic reasoning.

You can ask me about any specific certificate to explore what was learned and achieved.`,
      links: [
        {
                "label": "View All 23 Certificates",
                "url": "/certificates"
        }
],
    },
  },
  ACHIEVEMENTS: {
    id: {
      title: `Penghargaan & Prestasi Kompetisi Web Tingkat Nasional`,
      text: `**Prestasi Kompetisi Rekayasa Web Tingkat Nasional**

Adyvka telah mengukir prestasi di berbagai kejuaraan teknologi tingkat nasional:

1. **Juara 1 Nasional (1st Place Champion) - ICOMFEST 2025:**
   * Diselenggarakan oleh Universitas Ahmad Dahlan (UAD) Yogyakarta pada kategori National Web Design Competition.
   * Merancang dan meluncurkan **Pusakaku**, platform pelestarian warisan budaya nusantara dengan eksplorasi artefak 3D interaktif.

2. **Juara 2 Nasional (2nd Place Runner-Up) - PNBITC#18 2026:**
   * Diselenggarakan oleh Politeknik Negeri Bali pada kompetisi teknologi berskala nasional.
   * Dibangun dari nol dalam sprint berintensitas tinggi selama 1 bulan di sela-sela jadwal padat magang korporat kelas 12 SMK, bersaing mengungguli tim mahasiswa dan perguruan tinggi seluruh Indonesia.

3. **Finalis Nasional (Top 5 National Finalist) - UNILA 2025:**
   * Diselenggarakan oleh Universitas Lampung pada ajang National Web Development Competition.
   * Membangun **SemuaBisa**, platform inklusif berstandar aksesibilitas disabilitas WCAG AAA.

4. **Best Poster Award (Juara Desain Poster):**
   * Penghargaan poster terbaik pada festival kreatif SMK IDN Boarding School.`,
      links: [
        {
                "label": "Lihat Halaman Prestasi",
                "url": "/achievements"
        },
        {
                "label": "Detail Juara 2 PNBITC Bali",
                "url": "/achievements/2nd-place-national-web-design-competition-pnbitc"
        },
        {
                "label": "Detail Juara 1 ICOMFEST UAD",
                "url": "/achievements/1st-place-national-web-design-competition"
        }
],
    },
    en: {
      title: `National Web Competition Awards & Honors`,
      text: `**Adyvka's National Engineering & Web Design Honors**

Adyvka has consistently earned podium placements at prestigious collegiate and public competitions:

1. **1st Place National Champion - ICOMFEST 2025:**
   * Hosted by Universitas Ahmad Dahlan (UAD) Yogyakarta in the National Web Design Competition.
   * Engineered **Pusakaku**, an interactive 3D cultural preservation platform featuring real-time artifact exploration.

2. **2nd Place National Runner-Up - PNBITC#18 2026:**
   * Hosted by Politeknik Negeri Bali in their flagship national technology competition.
   * Built and delivered from scratch in a 1-month sprint during a demanding Grade 12 corporate internship, outperforming university engineering teams nationwide.

3. **National Finalist (Top 5) - UNILA 2025:**
   * Hosted by Universitas Lampung in their National Web Development Competition.
   * Architected **SemuaBisa**, an accessibility-first platform built to WCAG AAA standards for users with visual and motor disabilities.

4. **Best Poster Design Award:**
   * Awarded 1st place in the campus creative media design festival at SMK IDN Boarding School.`,
      links: [
        {
                "label": "View Achievements Page",
                "url": "/achievements"
        },
        {
                "label": "PNBITC Bali Runner-Up Details",
                "url": "/achievements/2nd-place-national-web-design-competition-pnbitc"
        },
        {
                "label": "ICOMFEST UAD Champion Details",
                "url": "/achievements/1st-place-national-web-design-competition"
        }
],
    },
  },
  BOOKS: {
    id: {
      title: `2 Buku Pemrograman Resmi yang Telah Diterbitkan`,
      text: `**2 Buku Pemrograman Karya Rafif Sava Adyvka Pratama**

Adyvka telah menulis dan menerbitkan dua buku teknis untuk mengedukasi generasi muda dalam dunia rekayasa perangkat lunak:

1. **Membuat Game Tanpa Coding (125 Halaman):**
   * Diterbitkan oleh SMK IDN Boarding School pada Januari 2023 dalam format buku panduan digital kurikulum resmi.
   * Dirancang untuk mengajarkan dasar logika ilmu komputer kepada pemula tanpa intimidasi sintaks melalui kanvas visual MIT Scratch 3.0.
   * Membimbing pembaca langkah demi langkah membangun 5 game arkade lengkap (Pong, Catch the Apples, Platformer Jump, Pacman, dan Block Breaker).
   * Telah digunakan sebagai kurikulum acuan di berbagai workshop yang melatih lebih dari 300 siswa di Depok dan Jakarta.

2. **Membuat Website Modern dengan Framework (Buku Panduan Web Frontend):**
   * Panduan komprehensif bagi pelajar dan pemula untuk memahami arsitektur web modern, semantik HTML5, CSS Grid/Flexbox, dan utility-first styling dengan Tailwind CSS.
   * Menjelaskan prinsip mobile-first design, fluid responsiveness, dan deployment website ke platform cloud publik.`,
      links: [
        {
                "label": "Detail Buku Membuat Game Tanpa Coding",
                "url": "/publications/buku-membuat-game-tanpa-coding"
        },
        {
                "label": "Detail Buku Membuat Website dengan Framework",
                "url": "/publications/buku-membuat-website-dengan-framework"
        }
],
    },
    en: {
      title: `2 Published Programming Books`,
      text: `**2 Published Programming Books Authored by Adyvka**

Adyvka has authored and published two technical textbooks designed to empower younger learners:

1. **Making Games Without Coding (125 Pages):**
   * Published by SMK IDN Boarding School in January 2023 as an official curriculum guide.
   * Demystifies computer science logic for young beginners through MIT Scratch's visual block canvas, avoiding cryptic syntax errors.
   * Guides learners through creating 5 complete playable games (Pong, Fruit Catch, Platformer, Pacman, and Brick Breaker).
   * Adopted across community workshops training over 300 middle and high school students.

2. **Building Modern Websites with Frameworks:**
   * A practical guide teaching responsive web design, semantic HTML5 structure, CSS Grid/Flexbox layouts, and Tailwind CSS utility workflows.
   * Emphasizes mobile-first choreography and production web deployment best practices.`,
      links: [
        {
                "label": "View Making Games Book Details",
                "url": "/publications/buku-membuat-game-tanpa-coding"
        },
        {
                "label": "View Modern Website Book Details",
                "url": "/publications/buku-membuat-website-dengan-framework"
        }
],
    },
  },
  GPA_ACADEMIC: {
    id: {
      title: `Nilai Rapot & Prestasi Akademik (IPK 96 / 100)`,
      text: `**Rekor Akademik & Nilai Rapot Adyvka: 96 / 100**

Adyvka mempertahankan standar prestasi akademik yang sangat tinggi di SMK IDN Boarding School:

* **Nilai Rapot Semester 4:** Meraih rata-rata nilai **96 dari 100** dengan predikat Academic Honors.
* **Jurusan:** Rekayasa Perangkat Lunak (Software Engineering).
* **Keseimbangan Nyata:** Nilai luar biasa ini dicapai secara konsisten sembari memimpin proyek korporat Databank ERP, menjalani magang industri, menulis buku, dan memenangkan kompetisi nasional.
* **Karakter Belajar:** Memadukan penguasaan teori ilmu komputer mendalam dengan kemampuan eksekusi teknis yang cepat dan berdisiplin tinggi.`,
      links: [
        {
                "label": "Lihat Profil Lengkap di Halaman About",
                "url": "/about"
        }
],
    },
    en: {
      title: `Academic Standing & GPA Honors (96 / 100)`,
      text: `**Academic Standing & GPA: 96 / 100 with Academic Honors**

Adyvka maintains an exceptional academic standing at SMK IDN Boarding School:

* **Semester 4 Academic Report:** Holds a **96 out of 100** cumulative average with Academic Honors.
* **Major:** Software Engineering (Rekayasa Perangkat Lunak).
* **High-Paced Balance:** Achieved while simultaneously directing enterprise ERP systems, working corporate internships, authoring textbooks, and winning national hackathons.
* **Academic Discipline:** Reflects a steadfast work ethic where deep theoretical computer science is continually applied to production-grade deliverables.`,
      links: [
        {
                "label": "View Full Profile on About Page",
                "url": "/about"
        }
],
    },
  },
  TECH_STACK: {
    id: {
      title: `Keahlian Teknis & Tech Stack (Polyglot Systems Engineer)`,
      text: `**Keahlian Teknis & Tech Stack Adyvka**

Adyvka adalah seorang polyglot engineer yang memandang bahasa pemrograman sebagai alat yang dipilih secara cermat sesuai karakteristik masalah yang diselesaikan:

* **Bahasa & Runtimes:** TypeScript, JavaScript (Node.js, Bun), Python, PHP, Dart, C, C++, SQL.
* **Arsitektur Sistem:** Clean Architecture, SOLID Principles, System Design, Distributed Systems, Domain-Driven Design (DDD), Modular Monorepos.
* **Backend & API:** NestJS, Express.js, Laravel 12, RESTful APIs, Microservices, Event-Driven Architecture, RBAC & Security.
* **Basis Data & Penyimpanan:** PostgreSQL, MySQL, Prisma ORM, Supabase, Redis Caching, Firebase Firestore, Optimasi Query & Indeks.
* **Frontend & Mobile:** Next.js (15 & 16), React 19, Flutter (Android & iOS), Tailwind CSS (v3 & v4), Framer Motion.
* **Cloud, DevOps & Infrastruktur:** Docker & Docker Compose, AWS (EC2, S3, RDS), Nginx, Git & GitHub CI/CD, Linux Server Management.`,
      links: [
        {
                "label": "Lihat Arsenal Teknis di Halaman About",
                "url": "/about"
        }
],
    },
    en: {
      title: `Technical Arsenal & Polyglot Stack`,
      text: `**Adyvka's Technical Arsenal & Engineering Stack**

Adyvka operates as a polyglot engineer, selecting tools deliberately based on architectural demands:

* **Languages & Runtimes:** TypeScript, JavaScript (Node.js, Bun), Python, PHP, Dart, C, C++, SQL.
* **Software Architecture:** Clean Architecture, SOLID Principles, Distributed Systems, Domain-Driven Design (DDD), Modular Monorepos.
* **Backend & Systems:** NestJS, Express.js, Laravel 12, RESTful APIs, Event-Driven Systems, RBAC & Token Security.
* **Databases & Storage:** PostgreSQL, MySQL, Prisma ORM, Supabase, Redis Caching, Firebase Firestore, Query Optimization.
* **Frontend & Mobile:** Next.js (15 & 16), React 19, Flutter (iOS & Android), Tailwind CSS (v3 & v4), Framer Motion.
* **Cloud, DevOps & Infra:** Docker & Docker Compose, AWS (EC2, S3, RDS), Nginx, Git/GitHub CI/CD, Linux Administration.`,
      links: [
        {
                "label": "Explore Technical Arsenal on About Page",
                "url": "/about"
        }
],
    },
  },
  STRENGTHS_WHY_HIRE: {
    id: {
      title: `Mengapa Memilih & Merekrut Adyvka (Keunggulan Utama)`,
      text: `**Mengapa Perusahaan & Klien Memilih Bekerja Sama dengan Adyvka**

Berikut adalah nilai pembeda utama yang dibawa Adyvka ke dalam setiap tim:

1. **Kecepatan Adaptasi Stack Tanpa Batas:** Memasuki lingkungan kerja dengan teknologi asing bukanlah halangan. Di PT Ardyanda, ia membuktikan akselerasi kilat dari backend intern menjadi Full Stack Developer andalan dalam hitungan minggu.
2. **Kepemilikan Penuh (End-to-End Ownership):** Dari perancangan skema database, penulisan API, optimasi performa frontend, hingga memimpin tim 4 engineer di PT Intisel, ia terbiasa mengawal proyek hingga tuntas dengan standar tertinggi.
3. **Komunikasi & Kepemimpinan:** Tidak bersembunyi di balik terminal. Terbiasa memimpin rapat dengan pemangku kepentingan klien, melatih dewan guru senior di SMPN 25, hingga menjadi Master of Ceremonies (MC) resmi perusahaan.
4. **Ketangguhan Karakter Nyata (Real Grit):** Membiayai sendiri ekspedisi 3 negara di usia 15 tahun melalui tabungan freelance dan bertahan hidup di Semarang dengan modal Rp 0 membuktikan kemandirian dan daya juangnya.
5. **Standar Kode Bersih Tanpa Kompromi:** Selalu menerapkan Clean Architecture, prinsip SOLID, dan penulisan kode berdisiplin tinggi yang mudah dirawat oleh engineer berikutnya.`,
      links: [
        {
                "label": "Tentang Filosofi Adyvka",
                "url": "/about"
        },
        {
                "label": "Hubungi Langsung untuk Peluang Kerja",
                "url": "/contact"
        }
],
    },
    en: {
      title: `Why Hire Adyvka: Core Value Proposition & Strengths`,
      text: `**Why Teams and Clients Choose to Work with Adyvka**

Key strengths that define Adyvka's engineering impact:

1. **Unrivaled Learning Agility:** Entering unfamiliar stacks is treated as an accelerated masterclass. At PT Ardyanda, he rapidly bridged unfamiliar codebases, elevating from backend intern to full-stack feature lead within weeks.
2. **True End-to-End Ownership:** From database schema design and API contracts to fluid UI animations and leading a team of 4 engineers at PT Intisel, he holds himself to the highest production standards.
3. **Executive Communication & Leadership:** Comfortable in stakeholder meetings, translating business requirements into technical specs, training senior educators, and speaking on stage as company MC.
4. **Proven Grit and Independence:** 100% self-funding solo backpacking across 3 countries at 15 and surviving in Semarang with Rp 0 demonstrates rare tenacity and poise under pressure.
5. **Clean Architecture Mindset:** Relentless discipline for clean architecture, type safety, and code maintainability that scales gracefully over time.`,
      links: [
        {
                "label": "Explore Engineering Philosophy",
                "url": "/about"
        },
        {
                "label": "Contact for Opportunities",
                "url": "/contact"
        }
],
    },
  },
  BIO_IDENTITY: {
    id: {
      title: `Profil Lengkap & Filosofi Rafif Sava Adyvka Pratama`,
      text: `**Siapakah Rafif Sava Adyvka Pratama (Adyvka)?**

Rafif Sava Adyvka Pratama (dikenal secara luas sebagai Adyvka) adalah seorang Software Engineer dan Systems Architect berusia 17 tahun yang berbasis di Depok, Jawa Barat, Indonesia:

* **Titik Awal di Usia 13 Tahun:** Mulai menulis baris kode pertama di usia 13 tahun, bukan karena mengejar tren teknologi sesaat, melainkan karena jatuh cinta pada seni mengubah layar terminal kosong menjadi solusi nyata bagi permasalahan manusia.
* **Peran Saat Ini:** Lead Systems Engineer & Project Manager sistem Databank ERP di PT Intisel Prodaktifakom, serta siswa tahun terakhir di SMK IDN Boarding School (Jurusan Rekayasa Perangkat Lunak) dengan rekor akademik IPK 96/100.
* **Filosofi Rekayasa:** Menganggap bahasa dan framework hanyalah alat yang dipilih untuk menghormati karakteristik masalah. Perangkat lunak hebat ditentukan oleh kejelasan (clarity), ketahanan (resilience), dan rasa hormat yang mendalam kepada pengguna akhir.
* **Karakter di Luar Koding:** Mandiri secara finansial melalui kerja freelance, menulis dua buku pemrograman resmi untuk pemula, dan memimpin dengan empati serta integritas tanpa kompromi.`,
      links: [
        {
                "label": "Pelajari Selengkapnya di Halaman About",
                "url": "/about"
        },
        {
                "label": "Lihat Portofolio Proyek",
                "url": "/projects"
        }
],
    },
    en: {
      title: `Who is Rafif Sava Adyvka Pratama (Adyvka)?`,
      text: `**Who is Rafif Sava Adyvka Pratama (Adyvka)?**

Rafif Sava Adyvka Pratama (known online as Adyvka) is a 17-year-old Software Engineer and Systems Architect based in Depok, West Java, Indonesia:

* **Started at Age 13:** Wrote his first line of code at 13, not to chase tech hype, but to turn an empty terminal into software that solves genuine human problems.
* **Current Roles:** Lead Systems Engineer & Project Manager for Databank ERP at PT Intisel Prodaktifakom, and final-year student in Software Engineering at SMK IDN Boarding School with a 96/100 GPA standing.
* **Engineering Philosophy:** Treats programming languages and frameworks as deliberate tools rather than personal identities. Great software is defined by clarity, resilience, and respect for the user.
* **Beyond the Terminal:** Self-funded solo international travel at 15, published two programming textbooks, and holds himself to uncompromising standards with quiet discipline.`,
      links: [
        {
                "label": "Read Full Story on About Page",
                "url": "/about"
        },
        {
                "label": "Explore Systems Portfolio",
                "url": "/projects"
        }
],
    },
  },
  AGE_INFO: {
    id: {
      title: `Usia, Kelahiran & Domisili Adyvka`,
      text: `**Usia, Kelahiran & Domisili Adyvka**

* **Usia Saat Ini:** 17 Tahun (Kelahiran tahun 2008).
* **Tempat Lahir:** Depok, Jawa Barat, Indonesia.
* **Tempat Asal / Domisili:** Depok, Jawa Barat, Indonesia.
* **Mulai Belajar Koding:** Sejak usia 13 tahun (tahun 2021).
* **Pengalaman:** Lebih dari 5 tahun eksplorasi mendalam dalam rekayasa perangkat lunak, sistem terdistribusi, dan aplikasi mobile.
* **Pendidikan:** Siswa tingkat akhir (Kelas 12) di SMK IDN Boarding School jurusan Rekayasa Perangkat Lunak.`,
      links: [
        {
          "label": "Lihat Profil di Halaman About",
          "url": "/about"
        }
      ],
    },
    en: {
      title: `Age, Birth & Origin Details`,
      text: `**Adyvka's Age, Birth & Background**

* **Current Age:** 17 Years Old (Born in 2008).
* **Place of Birth:** Depok, West Java, Indonesia.
* **Origin / Domicile:** Depok, West Java, Indonesia.
* **Coding Journey:** Started at age 13 (in 2021).
* **Experience:** 5+ years of software architecture, distributed systems, and full-stack development.
* **Education:** Final-year high school student (Grade 12) at SMK IDN Boarding School majoring in Software Engineering.`,
      links: [
        {
          "label": "View About Profile",
          "url": "/about"
        }
      ],
    },
  },
  EDUCATION: {
    id: {
      title: `Pendidikan & Sekolah Adyvka (SMK IDN Boarding School)`,
      text: `**Pendidikan & Latar Belakang Sekolah Adyvka**

* **Sekolah:** SMK IDN Boarding School (Bogor/Depok, Jawa Barat).
* **Tingkat:** Kelas 12 (Tahun Terakhir).
* **Jurusan:** Rekayasa Perangkat Lunak (Software Engineering / RPL).
* **Nilai Rapot:** Meraih nilai rata-rata **96 / 100** pada Semester 4 dengan Academic Honors.
* **Budaya Pendidikan:** Lingkungan sekolah berasrama berbasis teknologi intensif dan nilai-nilai karakter kemandirian, melatih kemampuan adaptasi tinggi di bawah tekanan.`,
      links: [
        {
          "label": "Profil Akademik",
          "url": "/about"
        }
      ],
    },
    en: {
      title: `Education & Schooling (SMK IDN Boarding School)`,
      text: `**Adyvka's Academic Education & High School Background**

* **School:** SMK IDN Boarding School (West Java, Indonesia).
* **Grade:** Grade 12 (Final Year).
* **Major:** Software Engineering (Rekayasa Perangkat Lunak).
* **Academic Record:** Maintains a **96 / 100** cumulative GPA standing with Academic Honors.
* **Environment:** An intensive technology boarding school combining modern engineering practices with deep character discipline.`,
      links: [
        {
          "label": "View Academic Profile",
          "url": "/about"
        }
      ],
    },
  },
  LOCATION_DOMICILE: {
    id: {
      title: `Lokasi Domisili, Tempat Lahir & Zona Waktu`,
      text: `**Lokasi Domisili, Tempat Lahir & Zona Waktu Adyvka**

* **Tempat Tinggal / Domisili:** Depok, Jawa Barat, Indonesia.
* **Tempat Lahir:** Depok, Jawa Barat, Indonesia (kelahiran tahun 2008).
* **Zona Waktu:** UTC+07 (Waktu Indonesia Barat / WIB).
* **Fleksibilitas Kerja:** Terbiasa berkolaborasi secara remote lintas zona waktu, maupun bekerja on-site / hybrid di wilayah Jabodetabek.`,
      links: [
        {
          "label": "Hubungi Adyvka",
          "url": "/contact"
        }
      ],
    },
    en: {
      title: `Location, Birthplace & Working Timezone`,
      text: `**Adyvka's Location, Birthplace & Work Availability**

* **Current Residence / Domicile:** Depok, West Java, Indonesia.
* **Place of Birth:** Depok, West Java, Indonesia (born in 2008).
* **Timezone:** UTC+07 (WIB / Western Indonesia Time).
* **Work Arrangement:** Experienced with remote team collaboration across time zones as well as hybrid/on-site arrangements in the Greater Jakarta area.`,
      links: [
        {
          "label": "Get in Touch",
          "url": "/contact"
        }
      ],
    },
  },
  CV_RESUME: {
    id: {
      title: `Unduh CV & Resume Resmi Rafif Sava Adyvka Pratama`,
      text: `**Unduh CV & Resume Resmi Adyvka**

CV resmi Rafif Sava Adyvka Pratama memuat ringkasan rekam jejak profesional, keahlian teknis, dan portofolio enterprise:

* **Tautan Langsung:** Anda dapat mengunduh dokumen CV format PDF berkualitas tinggi melalui tombol di bawah.
* **Isi CV:** Mencakup rekam jejak PT Intisel Prodaktifakom, PT Ardyanda, CV Richo Bahari, KEPK UMJ, sertifikasi Harvard CS50, dan prestasi kompetisi nasional.`,
      links: [
        {
          "label": "Unduh CV Resmi (PDF)",
          "url": "/assets/RafifSavaAdyvkaPratama_CV.pdf"
        },
        {
          "label": "Kunjungi Halaman Kontak",
          "url": "/contact"
        }
      ],
    },
    en: {
      title: `Download Official CV & Resume of Adyvka`,
      text: `**Download Official Resume & CV of Adyvka**

Adyvka's verified resume outlines his engineering experience, technical skills, and systems portfolio:

* **Direct PDF Download:** You can download the high-resolution PDF resume directly below.
* **Contents:** Summarizes work at PT Intisel, PT Ardyanda, CV Richo Bahari, KEPK UMJ, Harvard CS50 credential, and national championship awards.`,
      links: [
        {
          "label": "Download Official CV (PDF)",
          "url": "/assets/RafifSavaAdyvkaPratama_CV.pdf"
        },
        {
          "label": "Contact Page",
          "url": "/contact"
        }
      ],
    },
  },
  CONTACT: {
    id: {
      title: `Kontak Resmi, WhatsApp & Media Sosial Adyvka`,
      text: `**Saluran Kontak Resmi & Media Sosial Adyvka**

Anda dapat menghubungi Adyvka secara langsung untuk peluang kerja, konsultasi teknis, atau kolaborasi proyek:

* **WhatsApp / Telepon:** +62 821-1313-9664
* **Email:** rafifdyvka07@gmail.com
* **GitHub:** https://github.com/adyvka31
* **LinkedIn:** https://www.linkedin.com/in/adyvka-pratama/
* **Instagram:** https://instagram.com/adyvkaa
* **YouTube:** https://www.youtube.com/@adyvkapratama
* **TikTok:** https://www.tiktok.com/@adypraa31
* **Website Portofolio:** https://adyvkapratama.my.id

Anda juga dapat mengirimkan pesan langsung melalui formulir pesan di halaman Contact.`,
      links: [
        {
          "label": "Hubungi via WhatsApp (+62 821-1313-9664)",
          "url": "https://wa.me/6282113139664"
        },
        {
          "label": "Kirim Email Langsung",
          "url": "mailto:rafifdyvka07@gmail.com"
        },
        {
          "label": "Kunjungi Halaman Kontak",
          "url": "/contact"
        }
      ],
    },
    en: {
      title: `Official Contact, WhatsApp & Social Profiles`,
      text: `**Official Contact Details & Social Channels**

Feel free to connect directly with Adyvka for engineering opportunities, contract consulting, or collaborations:

* **WhatsApp / Phone:** +62 821-1313-9664
* **Email:** rafifdyvka07@gmail.com
* **GitHub:** https://github.com/adyvka31
* **LinkedIn:** https://www.linkedin.com/in/adyvka-pratama/
* **Instagram:** https://instagram.com/adyvkaa
* **YouTube:** https://www.youtube.com/@adyvkapratama
* **TikTok:** https://www.tiktok.com/@adypraa31
* **Portfolio URL:** https://adyvkapratama.my.id

You can also submit an inquiry through the interactive message form on the Contact page.`,
      links: [
        {
          "label": "Chat on WhatsApp (+62 821-1313-9664)",
          "url": "https://wa.me/6282113139664"
        },
        {
          "label": "Send Direct Email",
          "url": "mailto:rafifdyvka07@gmail.com"
        },
        {
          "label": "Open Contact Page",
          "url": "/contact"
        }
      ],
    },
  },
  WORK_AVAILABILITY: {
    id: {
      title: `Ketersediaan Kerja & Peluang Karier 2026`,
      text: `**Ketersediaan Kerja & Peluang Karier Adyvka**

* **Status:** Terbuka untuk peluang kerja baru (Available for new opportunities · 2026).
* **Format Kerja:** Full-Time, Kontrak, Part-Time, atau Proyek Konsultasi Freelance.
* **Mode Kerja:** Remote di seluruh dunia, maupun Hybrid / On-Site di wilayah Jabodetabek.
* **Fokus Peran:** Full Stack Engineer, Systems Architect, Backend Engineer, atau Technical Lead.`,
      links: [
        {
                "label": "Diskusikan Peluang di Halaman Kontak",
                "url": "/contact"
        }
],
    },
    en: {
      title: `Work Availability & 2026 Opportunities`,
      text: `**Adyvka's Work Availability & Career Engagement**

* **Current Status:** Open for new opportunities in 2026.
* **Engagement Models:** Full-Time, Contract Engineering, Part-Time, or Technical Consulting.
* **Work Modality:** Global Remote or Hybrid/On-Site in the Greater Jakarta metropolitan area.
* **Target Roles:** Full Stack Engineer, Systems Architect, Backend Developer, or Lead Engineer.`,
      links: [
        {
                "label": "Discuss Opportunities on Contact Page",
                "url": "/contact"
        }
],
    },
  },
  RATES_AND_PRICING: {
    id: {
      title: `Tarif & Biaya Jasa Rekayasa Perangkat Lunak`,
      text: `**Skema Tarif & Biaya Layanan Adyvka**

Biaya disesuaikan dengan cakupan arsitektur, tenggat waktu, dan kompleksitas sistem:

* **Fixed Scope / Project-Based:** Model harga tetap berdasarkan deliverable yang telah disepakati bersama.
* **Hourly / Retainer:** Fleksibel untuk pendampingan teknis, konsultasi arsitektur, atau sprint berkelanjutan.
* **Komitmen:** Memberikan estimasi yang transparan, bebas biaya tersembunyi, dengan jaminan arsitektur clean dan dokumentasi menyeluruh.`,
      links: [
        {
                "label": "Minta Penawaran di Halaman Kontak",
                "url": "/contact"
        }
],
    },
    en: {
      title: `Rates & Engineering Pricing Models`,
      text: `**Adyvka's Pricing Structure & Engagement Rates**

Pricing is tailored to architectural complexity, timelines, and business scope:

* **Fixed Scope / Deliverable-Based:** Milestone-based pricing for clearly defined platforms.
* **Retainer / Hourly Advisory:** Flexible arrangements for ongoing system architecture or development sprints.
* **Commitment:** Transparent estimates, clean documentation, and production-grade delivery without hidden costs.`,
      links: [
        {
                "label": "Request a Quote on Contact Page",
                "url": "/contact"
        }
],
    },
  },
  ENGLISH_FLUENCY: {
    id: {
      title: `Kemampuan Bahasa Inggris & Komunikasi Profesional`,
      text: `**Kemampuan Bahasa Inggris & Komunikasi Internasional**

* **Kemampuan:** Fasih dalam komunikasi teknis, dokumentasi sistem, dan percakapan profesional bahasa Inggris.
* **Sertifikasi:** Memegang sertifikasi resmi English Proficiency Assessment.
* **Pengalaman Nyata:** Memimpin wawancara lapangan langsung dengan warga mancanegara saat solo backpacking di Singapura, Malaysia, dan Thailand di usia 15 tahun.`,
      links: [
        {
                "label": "Lihat Sertifikat Bahasa Inggris",
                "url": "/certificates/english-proficiency-assessment"
        }
],
    },
    en: {
      title: `English Fluency & Global Communication`,
      text: `**Adyvka's English Proficiency & International Communication**

* **Fluency:** Highly proficient in technical architectural writing, documentation, and spoken communication.
* **Certification:** Holds a verified English Proficiency Assessment credential.
* **Field Evidence:** Successfully navigated multi-border transit and conducted conversational field interviews in English during solo travels across Singapore, Malaysia, and Thailand at 15.`,
      links: [
        {
                "label": "View English Certificate",
                "url": "/certificates/english-proficiency-assessment"
        }
],
    },
  },
  HOBBIES_INTERESTS: {
    id: {
      title: `Minat & Kegiatan di Luar Waktu Koding`,
      text: `**Minat & Kegiatan Adyvka di Luar Terminal**

* **Solo Backpacking & Petualangan:** Menjelajahi tempat baru, mengamati budaya lokal, dan menguji kemampuan navigasi mandiri.
* **Menulis & Edukasi:** Menuangkan pemikiran komputasi ke dalam buku panduan yang mudah dipahami pemula.
* **Public Speaking & Berbicara di Depan Umum:** Berbagi wawasan, memandu jalannya acara resmi sebagai MC, dan memotivasi pelajar muda.
* **Eksplorasi Hardware & Sains:** Mengamati cara kerja sistem fisik dan teknologi mutakhir.`,
      links: [
        {
                "label": "Cerita Lengkap di Halaman About",
                "url": "/about"
        }
],
    },
    en: {
      title: `Hobbies & Personal Interests`,
      text: `**Adyvka's Interests Beyond the Screen**

* **Solo Travel & Exploration:** Navigating unfamiliar transit systems and exploring multicultural communities.
* **Technical Writing & Teaching:** Translating complex computing logic into accessible books for young learners.
* **Public Speaking & MCing:** Hosting corporate events and facilitating educational workshops.
* **Hardware & Systems Science:** Investigating physical computing mechanics and modern technology ecosystems.`,
      links: [
        {
                "label": "Read Personal Story on About",
                "url": "/about"
        }
],
    },
  },
  VISION_FUTURE_GOALS: {
    id: {
      title: `Visi Jangka Panjang & Masa Depan`,
      text: `**Visi Jangka Panjang Adyvka**

Adyvka berkomitmen menjadi Systems Architect kelas dunia yang mampu merancang infrastruktur perangkat lunak berkala besar yang tahan uji, berintegritas tinggi, dan memberikan dampak nyata bagi jutaan pengguna di seluruh dunia.`,
      links: [
        {
                "label": "Halaman About",
                "url": "/about"
        }
],
    },
    en: {
      title: `Long-Term Vision & Engineering Aspirations`,
      text: `**Adyvka's Long-Term Engineering Vision**

Adyvka aims to become a world-class Systems Architect, engineering resilient, high-integrity distributed infrastructure that empowers millions of users globally.`,
      links: [
        {
                "label": "About Page",
                "url": "/about"
        }
],
    },
  },
  AI_CAPABILITIES: {
    id: {
      title: `Kemampuan Rekayasa AI & Machine Learning`,
      text: `**Keahlian Rekayasa AI & Machine Learning Adyvka**

Adyvka mengintegrasikan kecerdasan buatan ke dalam produk perangkat lunak nyata:

* **FitSmart Platform:** Mengintegrasikan model Google Gemini Pro dengan guardrails ketat untuk asisten kesehatan preventif dan analisis nutrisi klinis.
* **AI Ticket Manager:** Memanfaatkan HuggingFace NLP inference untuk analisis sentimen otomatis dan penentuan prioritas tiket dukungan pelanggan.
* **TerasTani OS:** Menerapkan computer vision untuk deteksi dini penyakit tanaman dan kesehatan daun sayuran perkotaan.
* **Prompt Engineering:** Memegang sertifikasi Dasar Prompt Engineering dengan pemahaman mendalam tentang few-shot prompting dan temperature tuning.`,
      links: [
        {
                "label": "Lihat Proyek FitSmart AI",
                "url": "/projects/fitsmart"
        },
        {
                "label": "Lihat AI Ticket Manager",
                "url": "/projects/ai-ticket-manager"
        }
],
    },
    en: {
      title: `AI & Machine Learning Engineering Capabilities`,
      text: `**Adyvka's AI and Machine Learning Capabilities**

Adyvka actively embeds production artificial intelligence into practical software platforms:

* **FitSmart Healthcare:** Google Gemini Pro integration with deterministic medical guardrails and zero-temperature clinical reasoning.
* **AI Ticket Manager:** HuggingFace NLP models for automated sentiment analysis and ticket priority routing.
* **TerasTani Urban OS:** Computer vision pipelines for crop leaf pathology detection.
* **Prompt Architecture:** Certified in prompt engineering, leveraging few-shot patterns and chain-of-thought system prompts.`,
      links: [
        {
                "label": "FitSmart AI Health Case Study",
                "url": "/projects/fitsmart"
        },
        {
                "label": "AI Ticket Manager Case Study",
                "url": "/projects/ai-ticket-manager"
        }
],
    },
  },
  MOBILE_APPS: {
    id: {
      title: `Portofolio Pengembangan Aplikasi Mobile (Flutter & Android)`,
      text: `**Portofolio Rekayasa Aplikasi Mobile Adyvka**

Adyvka memiliki rekam jejak kuat dalam membangun aplikasi mobile lintas platform:

* **Attendance App:** Sistem presensi mobile berbasis GPS geofencing dan verifikasi foto selfie untuk mencegah pemalsuan absensi.
* **QR Guest Manager:** Pemindai kode QR berkecepatan tinggi untuk validasi tiket tamu acara.
* **Quran App:** Aplikasi Al-Quran mobile lengkap dengan tajwid, pemutar audio, dan penanda ayat favorit.
* **News App:** Pembaca berita mobile dengan caching offline dan sinkronisasi REST API.
* **Pendidikan Mobile:** Telah melatih dewan guru SMPN 25 Depok dan puluhan santri dalam merancang aplikasi Android interaktif.`,
      links: [
        {
                "label": "Katalog Proyek Mobile",
                "url": "/projects"
        }
],
    },
    en: {
      title: `Mobile Application Portfolio (Flutter & Android)`,
      text: `**Adyvka's Mobile Engineering Portfolio**

Adyvka has engineered and shipped high-performance cross-platform mobile solutions:

* **Attendance App:** Mobile attendance system with GPS geofence radius enforcement and real-time photo verification.
* **QR Guest Manager:** High-throughput QR code scanner for event ticket check-ins.
* **Quran App:** Elegant digital Quran reader with audio recitation streaming and responsive typography.
* **News App:** Native mobile news reader with offline caching and category feeds.
* **Mobile Mentorship:** Trained educators at SMPN 25 Depok and dozens of students in building interactive Android tools.`,
      links: [
        {
                "label": "Explore Mobile Projects",
                "url": "/projects"
        }
],
    },
  },
  RELIGION_FAITH: {
    id: {
      title: `Agama & Nilai Keyakinan Adyvka`,
      text: `**Agama & Nilai Keyakinan Rafif Sava Adyvka Pratama (Adyvka)**

Adyvka memeluk agama **Islam (Muslim)** dan mengintegrasikan nilai-nilai kejujuran, adab, serta disiplin dalam setiap aspek rekayasa perangkat lunak:

* **Pendidikan Berbasis Pesantren Teknologi:** Menempuh pendidikan kejuruan di SMK IDN Boarding School, sekolah berasrama yang memadukan keahlian rekayasa teknologi informasi dengan pembinaan karakter dan adab Islami.
* **Karya Nyata Bernafaskan Nilai Positif:**
  * **Quran App:** Mengembangkan aplikasi mobile Al-Qur'an digital lengkap dengan tipografi mushaf Arab presisi, pemutar audio murottal, penanda bacaan terakhir, dan antarmuka ramah pengguna.
  * **ERP Manajemen Masjid:** Merancang modul pencatatan jadwal, administrasi wakaf, dan sistem keuangan masjid saat menjalani magang di PT Ardyanda Digital Inovasi.
* **Pengabdian & Pelatihan di Komunitas Islami:** Berpengalaman mengajar dan melatih di berbagai institusi keagamaan dan sekolah Islam terkemuka, seperti SMA Lazuardi Global Compassionate School, SMP INS Depok, SD/SMP Al-Anshar, Griyya Sunnah, dan Hajrabyadl.
* **Etika Kerja (Akhlak & Grit):** Menjunjung tinggi transparansi, amanah profesional, serta pantang menyerah dalam memecahkan masalah rekayasa sistem yang kompleks.`,
      links: [
        { label: "Lihat Proyek Quran App", url: "/projects/quran-app" },
        { label: "Profil di Halaman About", url: "/about" }
      ],
    },
    en: {
      title: `Adyvka's Faith & Core Principles`,
      text: `**Adyvka's Faith & Ethical Principles**

Rafif Sava Adyvka Pratama (Adyvka) is a practicing **Muslim** who integrates humility, discipline, and uncompromising ethics into modern software engineering:

* **Islamic Tech Boarding School:** Educated at SMK IDN Boarding School in West Java, an intensive technology campus that combines enterprise software engineering with moral character discipline.
* **Engineering with Purpose:**
  * **Digital Quran App:** Built a modern Islamic recitation platform featuring Arabic typography, high-fidelity audio streams, and reactive bookmark management.
  * **Mosque Community ERP:** Engineered financial and operational management modules for mosques during his corporate internship at PT Ardyanda Digital Inovasi.
* **Community Service & Mentorship:** Mentored junior students and delivered tech training across Islamic educational institutions including SMA Lazuardi GIS, SMP INS Depok, Al-Anshar, and Griyya Sunnah.
* **Core Work Ethic:** Rooted in honesty, personal integrity, and quiet discipline without cutting corners.`,
      links: [
        { label: "View Quran App Project", url: "/projects/quran-app" },
        { label: "Read About Profile", url: "/about" }
      ],
    },
  },
  FAMILY_BACKGROUND: {
    id: {
      title: `Latar Belakang Keluarga & Nilai Kemandirian`,
      text: `**Latar Belakang Keluarga & Masa Tumbuh Adyvka**

Adyvka dibesarkan dalam lingkungan keluarga yang hangat dan suportif di Depok, Jawa Barat:

* **Tumbuh di Depok:** Lahir dan dibesarkan di Kota Depok, Jawa Barat, dengan dukungan keluarga yang selalu menanamkan nilai adab, kerendahan hati, dan keuletan berusaha.
* **Kemandirian Sejak Usia Dini:** Mulai tertarik pada dunia teknologi dan koding sejak umur 13 tahun pada tahun 2021. Berkat ketekunan belajar mandiri dan mengerjakan berbagai proyek freelance, Adyvka mampu membiayai sendiri ekspedisi solo backpacker melintasi 3 negara (Singapura, Malaysia, Thailand) di usia 15 tahun tanpa membebani orang tua.
* **Keseimbangan Tanggung Jawab:** Selalu menjaga amanah keluarga dengan tetap memprioritaskan prestasi akademik sekolah, terbukti dari raihan nilai rapot 96/100 (Academic Honors) di SMK IDN Boarding School sambil aktif memimpin proyek teknologi enterprise.
* **Pribadi yang Tenang & Tangguh:** Dikenal sebagai sosok yang santun, pekerja keras, tidak banyak bicara namun selalu membuktikan kemampuan melalui karya nyata berkualitas tinggi.`,
      links: [
        { label: "Kisah Ekspedisi Solo Backpacker", url: "/experience/singapore-malaysia-thailand-backpacker-3-country" },
        { label: "Halaman Profil Lengkap", url: "/about" }
      ],
    },
    en: {
      title: `Family Roots & Personal Resilience`,
      text: `**Adyvka's Family Background & Personal Foundations**

Adyvka was raised in a warm and supportive family environment in Depok, West Java, Indonesia:

* **Roots in Depok:** Born and raised in Depok, where his family instilled core values of humility, moral discipline, and self-reliance from an early age.
* **Early Self-Reliance:** Fell in love with programming at age 13 in 2021. Through disciplined self-study and contract freelance earnings, he completely self-funded his international solo backpacking expedition through Singapore, Malaysia, and Thailand at age 15 without placing financial burden on his parents.
* **Academic Integrity:** Honored family expectations by maintaining top-tier academic excellence, graduating as a high-honors student with a 96/100 GPA at SMK IDN Boarding School while leading corporate engineering deliverables.
* **Character & Quiet Grit:** Known by peers and mentors as humble, disciplined, and relentlessly focused on high-craftsmanship output.`,
      links: [
        { label: "Solo Backpacker Expedition Details", url: "/experience/singapore-malaysia-thailand-backpacker-3-country" },
        { label: "Read About Profile", url: "/about" }
      ],
    },
  },
  GREETINGS: {
    id: {
      title: `Halo! Selamat Datang di Portofolio Adyvka`,
      text: `**Halo! Selamat datang di portofolio resmi Rafif Sava Adyvka Pratama (Adyvka)**

Saya adalah asisten virtual cerdas yang siap membantu Anda mengenal seluruh rekam jejak, keahlian, dan karya Adyvka secara lengkap:

* **18 Proyek Rekayasa:** Databank ERP (PT Intisel), SIM KEPK FK UMJ, RuangTumbuh, DeliFood, FitSmart AI, dll.
* **20 Pengalaman Terverifikasi:** Magang Full Stack di PT Ardyanda, Systems Engineer PT Intisel, melatih guru SMPN 25 Depok, workshop SMA Lazuardi, hingga ekspedisi solo backpacker 3 negara.
* **23 Sertifikat Internasional:** Harvard CS50, AWS Cloud Practitioner, Dicoding Full Stack & React, dll.
* **Prestasi & Publikasi:** Juara 1 Nasional ICOMFEST 2025, Juara 2 PNBITC Bali, serta 2 buku pemrograman resmi yang sudah diterbitkan.
* **Karier & Kontak:** Nilai rapot 96/100, ketersediaan kerja remote/freelance, unduh CV resmi, nomor WhatsApp, dan email.

Silakan ajukan pertanyaan apa pun yang ingin Anda ketahui!`,
      links: [
        { label: "Jelajahi Proyek", url: "/projects" },
        { label: "Lihat Rekam Jejak Pengalaman", url: "/experience" },
        { label: "Hubungi Adyvka", url: "/contact" }
      ],
    },
    en: {
      title: `Hello! Welcome to Adyvka's Official Portfolio`,
      text: `**Hello and welcome to Rafif Sava Adyvka Pratama's (Adyvka) Portfolio**

I am the interactive assistant here to help you explore every aspect of Adyvka's work, engineering architecture, and background:

* **18 Shipped Projects:** Databank ERP (PT Intisel), SIM KEPK FK UMJ, RuangTumbuh, DeliFood, FitSmart AI, etc.
* **20 Real-World Experiences:** PT Ardyanda full-stack internship, PT Intisel lead systems engineer, faculty training at SMPN 25 Depok, SMA Lazuardi workshop, and 3-country solo backpacking.
* **23 Verified Credentials:** Harvard CS50, AWS Cloud Practitioner, Dicoding React, Backend, etc.
* **National Honors & Books:** 1st Place National ICOMFEST 2025, 2nd Place PNBITC Bali, and 2 published books.
* **Career & Contact:** 96/100 GPA record, remote/freelance availability, official CV download, WhatsApp, and email.

Feel free to ask me anything about Adyvka!`,
      links: [
        { label: "Explore Projects", url: "/projects" },
        { label: "Browse Experiences", url: "/experience" },
        { label: "Contact Adyvka", url: "/contact" }
      ],
    },
  },
  BOT_IDENTITY: {
    id: {
      title: `Tentang Asisten Virtual Portofolio Adyvka`,
      text: `**Tentang Asisten Pintar Portofolio Adyvka**

Saya adalah asisten AI interaktif yang terhubung langsung dengan seluruh basis data portofolio **Rafif Sava Adyvka Pratama (Adyvka)**:

* **Akurasi 100% Sesuai Data Asli:** Saya dilatih untuk memahami seluruh detail teknis 18 proyek aplikasi, arsitektur database, 20 pengalaman profesional, 23 sertifikat resmi, dan 4 penghargaan lomba nasional Adyvka tanpa halusinasi.
* **Dukungan Dua Bahasa:** Anda dapat bertanya menggunakan Bahasa Indonesia maupun Bahasa Inggris dengan gaya bahasa kasual, percakapan sehari-hari, hingga istilah teknis mendalam.
* **Tujuan Asisten:** Membantu recruiter, calon klien, kolaborator, dan pengunjung menjelajahi profil Adyvka dengan cepat, nyaman, dan transparan.`,
      links: [
        { label: "Pelajari Lebih Lanjut di Halaman About", url: "/about" },
        { label: "Hubungi Adyvka Langsung", url: "/contact" }
      ],
    },
    en: {
      title: `About Adyvka's Interactive AI Assistant`,
      text: `**About Adyvka's Portfolio Interactive Assistant**

I am the dedicated AI assistant built directly into **Rafif Sava Adyvka Pratama's (Adyvka)** official portfolio:

* **100% Authoritative Knowledge:** Grounded in verified engineering data covering all 18 production projects, database architectures, 20 professional experiences, 23 credentials, and 4 national awards.
* **Bilingual Intelligence:** Fully fluent in both English and Bahasa Indonesia across technical, business, and casual queries.
* **Mission:** To empower recruiters, engineering leads, clients, and fellow developers to discover Adyvka's work with speed, clarity, and depth.`,
      links: [
        { label: "Read About Profile", url: "/about" },
        { label: "Get in Touch", url: "/contact" }
      ],
    },
  },
  GRATITUDE_THANKS: {
    id: {
      title: `Sama-sama! Senang Bisa Membantu`,
      text: `**Sama-sama! Senang sekali bisa membantu Anda**

Terima kasih atas apresiasi dan kunjungan Anda ke portofolio resmi **Rafif Sava Adyvka Pratama (Adyvka)**.

Jika Anda tertarik untuk mendiskusikan peluang kerja, proyek rekayasa sistem terdistribusi, atau kerja sama freelance, Anda dapat menghubungi Adyvka kapan saja melalui saluran kontak di bawah.`,
      links: [
        { label: "Hubungi via WhatsApp", url: "https://wa.me/6282113139664" },
        { label: "Kirim Email Langsung", url: "mailto:rafifdyvka07@gmail.com" },
        { label: "Kunjungi Halaman Kontak", url: "/contact" }
      ],
    },
    en: {
      title: `You're Welcome! Happy to Help`,
      text: `**You're Very Welcome! Happy to Help**

Thank you for visiting **Rafif Sava Adyvka Pratama's (Adyvka)** portfolio and showing interest in his work.

If you have an engineering contract, career opportunity, or system architecture challenge you would like to discuss, feel free to reach out directly anytime!`,
      links: [
        { label: "Chat on WhatsApp", url: "https://wa.me/6282113139664" },
        { label: "Send an Email", url: "mailto:rafifdyvka07@gmail.com" },
        { label: "Open Contact Page", url: "/contact" }
      ],
    },
  },
  OVERVIEW_FALLBACK: {
    id: {
      title: `Asisten Pintar Portofolio Rafif Sava Adyvka Pratama (Adyvka)`,
      text: `**Halo! Saya adalah Asisten Portofolio Interaktif Rafif Sava Adyvka Pratama (Adyvka).**

Saya memiliki pemahaman menyeluruh terhadap seluruh rekam jejak, proyek, sertifikat, dan pengalaman Adyvka:

* **Sistem Enterprise & 18 Proyek:** Databank ERP (PT Intisel), SIM KEPK FK UMJ, TerasTani, RuangTumbuh, CV Richo Bahari, FitSmart, Pusakaku, SemuaBisa, dll.
* **Pengalaman Kerja Profesional:** Magang korporat di PT Ardyanda (payroll 100% presisi, kasbon, RS, MC), PT Intisel (Lead Engineer), CV Richo Bahari, dan FK UMJ.
* **Pengalaman Mengajar & Pelatihan Guru:** Melatih dewan guru SMPN 25 Depok di usia 16 tahun, SMA Lazuardi GCS, SMP INS Depok, Semut-Semut, dll.
* **Sertifikasi Global:** 23 Sertifikat resmi termasuk Harvard University CS50, AWS Cloud Practitioner, Dicoding × DBS Coding Camp, Git & GitHub, React, Python, C, dll.
* **Prestasi & Ekspedisi:** Juara 1 Nasional ICOMFEST 2025, Juara 2 Nasional PNBITC Bali, Solo Backpacker 3 Negara di usia 15 tahun, dan IPK 96/100.
* **2 Buku Pemrograman:** Penulis buku resmi *Membuat Game Tanpa Coding* dan *Membuat Website Modern*.

Silakan tanyakan hal apa pun mengenai proyek, sertifikat, atau pengalaman spesifik Adyvka dalam **Bahasa Indonesia** atau **English**!`,
      links: [
        {
                "label": "Katalog 18 Proyek",
                "url": "/projects"
        },
        {
                "label": "20 Rekam Jejak Pengalaman",
                "url": "/experience"
        },
        {
                "label": "23 Sertifikat Terverifikasi",
                "url": "/certificates"
        },
        {
                "label": "Unduh CV Resmi",
                "url": "/assets/RafifSavaAdyvkaPratama_CV.pdf"
        }
],
    },
    en: {
      title: `Rafif Sava Adyvka Pratama (Adyvka) Portfolio Assistant`,
      text: `**Hello! I am the interactive assistant for Rafif Sava Adyvka Pratama (Adyvka).**

I have complete access to verified details across all of Adyvka's work, projects, certificates, and achievements:

* **Enterprise Architecture & 18 Projects:** Databank ERP (PT Intisel), SIM KEPK FK UMJ, TerasTani, RuangTumbuh, CV Richo Bahari, FitSmart, Pusakaku, SemuaBisa, etc.
* **Corporate Work Experience:** Full Stack Internship at PT Ardyanda (100% precision payroll, loans, hospital systems, MC), Lead Systems Engineer at PT Intisel, CV Richo Bahari, and FK UMJ.
* **Teaching & Mentorship:** Faculty teacher training at SMPN 25 Depok at age 16, SMA Lazuardi GCS, SMP INS Depok, Semut-Semut, etc.
* **Global Certifications:** 23 verified credentials including Harvard University CS50, AWS Cloud Practitioner, Dicoding × DBS Coding Camp, Git with GitHub, React, etc.
* **Achievements & Grit:** 1st Place National Champion ICOMFEST 2025, 2nd Place Runner-Up PNBITC Bali, 100% self-funded 3-country solo backpacker at 15, and 96/100 GPA.
* **2 Published Books:** Author of *Making Games Without Coding* and *Modern Websites with Frameworks*.

Feel free to ask me anything about any specific project, experience, or certificate in **English** or **Bahasa Indonesia**!`,
      links: [
        {
                "label": "Explore 18 Projects",
                "url": "/projects"
        },
        {
                "label": "20 Verified Experiences",
                "url": "/experience"
        },
        {
                "label": "23 Credentials",
                "url": "/certificates"
        },
        {
                "label": "Download CV",
                "url": "/assets/RafifSavaAdyvkaPratama_CV.pdf"
        }
],
    },
  },

};

export function findBestAnswer(rawQuery) {
  const lang = detectLanguage(rawQuery);
  const normalized = normalizeText(rawQuery);
  const words = normalized.split(/\s+/).filter(Boolean);
  const tokens = new Set(words);

  let matchedCard = null;

  // -------------------------------------------------------------------------
  // PRIORITY 0: GREETINGS, BOT IDENTITY, GRATITUDE & DIRECT CONTACT
  // -------------------------------------------------------------------------

  // 1. Greetings (Halo, Hai, Assalamu'alaikum, Good Morning/Afternoon/Evening)
  if (
    tokens.has("halo") || tokens.has("hai") || tokens.has("hei") || tokens.has("hello") || tokens.has("hi") || tokens.has("hey") ||
    normalized.includes("assalamu alaikum") || normalized.includes("assalamualaikum") ||
    normalized.includes("selamat pagi") || normalized.includes("selamat siang") || normalized.includes("selamat sore") || normalized.includes("selamat malam") ||
    normalized.includes("good morning") || normalized.includes("good afternoon") || normalized.includes("good evening")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.GREETINGS;
  }

  // 2. Bot Identity & Capabilities
  else if (
    tokens.has("botidentity") ||
    normalized.includes("siapa kamu") || normalized.includes("kamu siapa") ||
    normalized.includes("bot apa") || normalized.includes("asisten apa") ||
    normalized.includes("who are you") || normalized.includes("what can you do") ||
    normalized.includes("bisa bantu apa") || normalized.includes("apa saja yang bisa ditanyakan") ||
    normalized.includes("kemampuan bot") || normalized.includes("fitur chatbot")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.BOT_IDENTITY;
  }

  // 3. Gratitude & Appreciation
  else if (
    tokens.has("terimakasih") || tokens.has("makasih") || tokens.has("makasi") || tokens.has("tengkyu") ||
    tokens.has("thanks") || normalized.includes("thank you") ||
    tokens.has("keren") || tokens.has("mantap") || tokens.has("hebat") ||
    tokens.has("awesome") || tokens.has("amazing") || tokens.has("impressive") || tokens.has("fantastic") || tokens.has("brilliant") ||
    normalized.includes("awesome job") || normalized.includes("great job") || normalized.includes("good job") || normalized.includes("well done")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.GRATITUDE_THANKS;
  }

  // 4. Contact, WhatsApp, Phone, Email & Direct Social Reach Out
  else if (
    tokens.has("whatsapp") || tokens.has("wa") || tokens.has("telepon") || tokens.has("phone") || tokens.has("call") || tokens.has("hp") ||
    tokens.has("surel") || tokens.has("email") || tokens.has("kontak") || tokens.has("contact") || tokens.has("reach") ||
    normalized.includes("nomor wa") || normalized.includes("no wa") || normalized.includes("nomor telepon") || normalized.includes("no telepon") ||
    normalized.includes("nomor hp") || normalized.includes("chat wa") || normalized.includes("hubungi") ||
    normalized.includes("kontak resmi") || normalized.includes("reach out") || normalized.includes("contact him") || normalized.includes("how can i contact") ||
    ((tokens.has("github") || tokens.has("linkedin") || tokens.has("instagram") || tokens.has("tiktok") || tokens.has("youtube")) &&
     (tokens.has("akun") || tokens.has("account") || tokens.has("profile") || tokens.has("profil") || tokens.has("link") || tokens.has("url") || tokens.has("handle") || tokens.has("sosmed") || tokens.has("medsos") || tokens.has("kontak") || tokens.has("contact") || tokens.has("mana") || tokens.has("apa") || tokens.has("channel") || tokens.has("show") || tokens.has("give") || tokens.has("lihat") || tokens.has("his") || tokens.has("adyvka")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CONTACT;
  }

  // 5. CV / Resume Download
  else if (
    (tokens.has("cv") || tokens.has("resume") || normalized.includes("download cv") || normalized.includes("unduh cv") ||
     normalized.includes("unduh resume") || normalized.includes("download resume") || normalized.includes("minta cv")) &&
    !tokens.has("richo") && !tokens.has("bahari")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CV_RESUME;
  }

  // 6. Religion & Faith
  else if (
    tokens.has("agama") || tokens.has("islam") || tokens.has("muslim") || tokens.has("keyakinan") ||
    tokens.has("religion") || tokens.has("faith") || tokens.has("spiritual") || tokens.has("ibadah") ||
    normalized.includes("agama apa") || normalized.includes("apa agama")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.RELIGION_FAITH;
  }

  // 7. Family Background & Upbringing
  else if (
    tokens.has("keluarga") || tokens.has("orangtua") || tokens.has("family") || tokens.has("parents") || tokens.has("parent") ||
    tokens.has("ayah") || tokens.has("ibu") || tokens.has("bapak") || tokens.has("saudara") ||
    tokens.has("father") || tokens.has("mother") || tokens.has("dad") || tokens.has("mom") ||
    tokens.has("siblings") || tokens.has("sibling") || tokens.has("brother") || tokens.has("sister") ||
    normalized.includes("orang tua") || normalized.includes("latar belakang keluarga") || normalized.includes("masa kecil") ||
    normalized.includes("father and mother") || normalized.includes("his parents") || normalized.includes("his family")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.FAMILY_BACKGROUND;
  }

  // -------------------------------------------------------------------------
  // PRIORITY 1: SPECIFIC ENTITY MATCHING - INDIVIDUAL PROJECTS (18 CARDS)
  // Check unique project names first before general corporate/work matches
  // -------------------------------------------------------------------------

  // 1. Databank ERP
  else if (
    tokens.has("databank") || normalized.includes("databank erp") || (tokens.has("isdp") && tokens.has("scraping"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.DATABANK_DETAIL;
  }

  // 2. SIM KEPK FK UMJ Project
  else if (
    (tokens.has("kepk") || normalized.includes("sim kepk") || normalized.includes("klirens etik") || normalized.includes("ethical clearance")) &&
    !normalized.includes("pengalaman kerja")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.KEPK_DETAIL;
  }

  // 3. FitSmart AI Health
  else if (
    tokens.has("fitsmart") || normalized.includes("fit smart") || normalized.includes("gemini health")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.FITSMART_DETAIL;
  }

  // 4. TerasTani Urban OS
  else if (
    tokens.has("terastani") || normalized.includes("teras tani") || (tokens.has("tani") && tokens.has("urban"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.TERASTANI_DETAIL;
  }

  // 5. RuangTumbuh
  else if (
    tokens.has("ruangtumbuh") || normalized.includes("ruang tumbuh") || (tokens.has("mental") && tokens.has("health") && tokens.has("proyek"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.RUANGTUMBUH_DETAIL;
  }

  // 6. Java Island Explorer
  else if (
    normalized.includes("java island") || normalized.includes("javaisland") || tokens.has("javaisland")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.JAVAISLAND_DETAIL;
  }

  // 7. Pusakaku
  else if (
    tokens.has("pusakaku") || (tokens.has("pusaka") && (tokens.has("proyek") || tokens.has("budaya")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.PUSAKAKU_DETAIL;
  }

  // 8. SemuaBisa
  else if (
    tokens.has("semuabisa") || normalized.includes("semua bisa") || (tokens.has("disabilitas") && tokens.has("proyek"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.SEMUABISA_DETAIL;
  }

  // 9. IDN Course LMS
  else if (
    tokens.has("idncourse") || normalized.includes("idn course")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.IDNCOURSE_DETAIL;
  }

  // 10. Coffee Shop
  else if (
    normalized.includes("coffee shop") || tokens.has("coffeeshop") || (tokens.has("kopi") && tokens.has("proyek"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.COFFEESHOP_DETAIL;
  }

  // 11. MyStyle Shoes
  else if (
    tokens.has("mystyle") || (tokens.has("sepatu") && tokens.has("proyek"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.MYSTYLE_DETAIL;
  }

  // 12. DeliFood
  else if (
    tokens.has("delifood") || normalized.includes("deli food")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.DELIFOOD_DETAIL;
  }

  // 13. AI Ticket Manager
  else if (
    normalized.includes("ai ticket") || normalized.includes("ticket manager") || (tokens.has("ticket") && tokens.has("huggingface"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.AI_TICKET_DETAIL;
  }

  // 14. Attendance App (GPS Geofence Mobile)
  else if (
    tokens.has("attendance") || (tokens.has("absensi") && (tokens.has("mobile") || tokens.has("geofence") || tokens.has("selfie")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ATTENDANCE_DETAIL;
  }

  // 15. QR Scanner / Guest Manager
  else if (
    normalized.includes("qr guest") || normalized.includes("qr scanner") || (tokens.has("qr") && (tokens.has("scanner") || tokens.has("tamu") || tokens.has("tiket")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.QR_SCANNER_DETAIL;
  }

  // 16. News App
  else if (
    normalized.includes("news app") || (tokens.has("berita") && tokens.has("mobile"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.NEWS_APP_DETAIL;
  }

  // 17. Quran App
  else if (
    tokens.has("quran") || normalized.includes("al quran") || normalized.includes("al-quran")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.QURAN_APP_DETAIL;
  }

  // 18. CV Richo Bahari Platform (as project)
  else if (
    tokens.has("richo") && (tokens.has("proyek") || tokens.has("project") || tokens.has("platform") || tokens.has("website"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.RICHO_BAHARI_DETAIL;
  }

  // -------------------------------------------------------------------------
  // PRIORITY 2: SPECIFIC ENTITY MATCHING - CERTIFICATES (23 INDIVIDUAL CARDS)
  // Check explicit certificate keywords to avoid colliding with skills/accounts
  // -------------------------------------------------------------------------

  // 1. Git with GitHub (Dicoding)
  else if (
    (tokens.has("git") || tokens.has("github")) &&
    (tokens.has("sertifikat") || tokens.has("certificate") || tokens.has("lisensi") || tokens.has("kursus") || tokens.has("course") || normalized.includes("dasar git") || normalized.includes("git github") || normalized.includes("belajar git")) &&
    !tokens.has("akun") && !tokens.has("link") && !tokens.has("profil") && !tokens.has("url") && !tokens.has("hubungi") && !tokens.has("contact")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_GIT_GITHUB;
  }

  // 2. CS50 Harvard
  else if (
    tokens.has("cs50") || tokens.has("cs50x") || tokens.has("harvard") || normalized.includes("cs 50")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_CS50;
  }

  // 3. AWS Cloud Practitioner
  else if (
    tokens.has("aws") || normalized.includes("cloud practitioner") || normalized.includes("amazon web services")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_AWS_CLOUD;
  }

  // 4. Coding Camp Full Stack (Dicoding x DBS)
  else if (
    tokens.has("dbs") || normalized.includes("coding camp") || (tokens.has("camp") && tokens.has("fullstack"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_CODING_CAMP;
  }

  // 5. Frontend Web Developer (Dicoding)
  else if (
    normalized.includes("sertifikat frontend") || normalized.includes("sertifikat front end") || (tokens.has("frontend") && tokens.has("dicoding"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_FRONTEND_WEB;
  }

  // 6. Data Analyst (Dicoding)
  else if (
    normalized.includes("data analyst") || normalized.includes("data analisis") || (tokens.has("analyst") && tokens.has("sertifikat"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_DATA_ANALYST;
  }

  // 7. Backend Developer (Dicoding)
  else if (
    (normalized.includes("aplikasi back end") || normalized.includes("aplikasi backend") || (tokens.has("backend") && tokens.has("dicoding"))) &&
    (tokens.has("sertifikat") || tokens.has("certificate") || tokens.has("kursus"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_BACKEND;
  }

  // 8. Graphic Design (Canva/Fundamentals)
  else if (
    normalized.includes("graphic design") || normalized.includes("desain grafis") || (tokens.has("grafis") && tokens.has("sertifikat"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_GRAPHIC_DESIGN;
  }

  // 9. UI/UX Design (Skilvul)
  else if (
    (normalized.includes("ui ux") || normalized.includes("ui/ux") || tokens.has("figma")) && (tokens.has("skilvul") || tokens.has("sertifikat"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_UIUX_DESIGN;
  }

  // 10. React (Dicoding)
  else if (
    (tokens.has("react") || tokens.has("reactjs")) &&
    (tokens.has("sertifikat") || tokens.has("certificate") || tokens.has("kursus") || tokens.has("course") || tokens.has("lisensi") || normalized.includes("belajar membuat aplikasi web dengan react"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_REACT;
  }

  // 11. JavaScript Dasar (Dicoding)
  else if (
    (tokens.has("javascript") || tokens.has("js")) &&
    (tokens.has("sertifikat") || tokens.has("certificate") || normalized.includes("dasar javascript") || normalized.includes("dasar js") || tokens.has("dicoding"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_JS_DASAR;
  }

  // 12. Web Dasar HTML CSS (Dicoding)
  else if (
    (normalized.includes("web dasar") || normalized.includes("dasar web") || (tokens.has("html") && tokens.has("css"))) &&
    (tokens.has("sertifikat") || tokens.has("certificate") || tokens.has("dicoding"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_WEB_DASAR;
  }

  // 13. C Skilvul (Specific)
  else if (
    (tokens.has("c") && tokens.has("skilvul")) || (tokens.has("c") && normalized.includes("dasar c") && tokens.has("sertifikat"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_C_SKILVUL;
  }

  // 14. C Dicoding
  else if (
    tokens.has("c") && (tokens.has("sertifikat") || tokens.has("certificate") || tokens.has("dicoding")) &&
    (tokens.has("pemrograman") || tokens.has("programming") || normalized.includes("pemrograman c"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_C_MEMULAI;
  }

  // 15. Python Fundamentals (DQLab / Skilvul)
  else if (
    tokens.has("python") && (tokens.has("fundamentals") || tokens.has("dqlab")) && (tokens.has("sertifikat") || tokens.has("certificate"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_PYTHON_FUND;
  }

  // 16. Python Memulai (Dicoding)
  else if (
    tokens.has("python") && (tokens.has("dicoding") || tokens.has("sertifikat") || tokens.has("certificate"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_PYTHON_MEMULAI;
  }

  // 17. Logika Pemrograman (Dicoding)
  else if (
    tokens.has("logika") || normalized.includes("logika pemrograman") || normalized.includes("programming logic")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_LOGIKA;
  }

  // 18. Prompt Engineering (Dicoding)
  else if (
    normalized.includes("prompt engineering") || normalized.includes("prompt engineer")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_PROMPT_ENG;
  }

  // 19. Karier Software Developer (Dicoding)
  else if (
    normalized.includes("meniti karier") || (tokens.has("karier") && tokens.has("developer"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_KARIER;
  }

  // 20. Financial Literacy (Dicoding)
  else if (
    normalized.includes("financial literacy") || normalized.includes("literasi keuangan") || (tokens.has("keuangan") && tokens.has("sertifikat"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_FINANCIAL;
  }

  // 21. AI Basics (Dicoding)
  else if (
    (normalized.includes("dasar ai") || normalized.includes("artificial intelligence basics")) && (tokens.has("sertifikat") || tokens.has("certificate"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_AI_BASICS;
  }

  // 22. Google Developer Groups (GDG)
  else if (
    tokens.has("gdg") || normalized.includes("google developer") || normalized.includes("developer groups")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_GDG;
  }

  // 23. English Proficiency Assessment
  else if (
    normalized.includes("english proficiency") || normalized.includes("kemampuan bahasa inggris") || (tokens.has("english") && tokens.has("assessment"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERT_ENGLISH;
  }

  // -------------------------------------------------------------------------
  // PRIORITY 3: SPECIFIC WORK, TEACHING & LEADERSHIP EXPERIENCES
  // -------------------------------------------------------------------------

  // 1. PT Ardyanda Digital Inovasi (Magang 1 Tahun)
  else if (
    tokens.has("ardyanda") || normalized.includes("pt ardyanda") || normalized.includes("magang ardyanda") ||
    (tokens.has("payroll") && (tokens.has("kasbon") || tokens.has("presisi") || tokens.has("100")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.PT_ARDYANDA_DETAIL;
  }

  // 2. PT Intisel Prodaktifakom (Work Experience)
  else if (
    tokens.has("intisel") || normalized.includes("pt intisel") || (tokens.has("intisel") && tokens.has("freelance"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.PT_INTISEL_DETAIL;
  }

  // 3. CV Richo Bahari (Work Experience)
  else if (
    tokens.has("richo") || normalized.includes("richo bahari") || normalized.includes("cv richo")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CV_RICHO_BAHARI_DETAIL;
  }

  // 4. SIM KEPK FK UMJ (Work Experience Contract)
  else if (
    (tokens.has("umj") || tokens.has("muhammadiyah") || normalized.includes("fakultas kedokteran umj")) &&
    !normalized.includes("proyek saja")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.KEPK_UMJ_DETAIL;
  }

  // 5. SMPN 25 Depok (Teacher & Principal Training)
  else if (
    normalized.includes("smpn 25") || normalized.includes("smp 25") ||
    (tokens.has("guru") && tokens.has("kepala") && tokens.has("sekolah")) ||
    (tokens.has("pelatihan") && tokens.has("guru") && tokens.has("depok"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.SMPN25_TEACHER_TRAINING;
  }

  // 6. SMA Lazuardi GCS
  else if (
    tokens.has("lazuardi") || normalized.includes("sma lazuardi")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.SMA_LAZUARDI_DETAIL;
  }

  // 7. SMPN 45 Bandung
  else if (
    normalized.includes("smpn 45") || normalized.includes("smp 45")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.SMPN_45_DETAIL;
  }

  // 8. SMP INS Depok
  else if (
    tokens.has("ins") || normalized.includes("smp ins")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.SMP_INS_DEPOK_DETAIL;
  }

  // 9. Sekolah Semut-Semut The Natural School
  else if (
    tokens.has("semut") || normalized.includes("semut semut") || normalized.includes("the natural school")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.SEMUT_SEMUT_DETAIL;
  }

  // 10. Hajrabyadl
  else if (
    tokens.has("hajrabyadl") || normalized.includes("hajra byadl") || tokens.has("hajra")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.HAJRABYADL_DETAIL;
  }

  // 11. SD/SMP Al-Anshar App Design
  else if (
    (tokens.has("anshar") || tokens.has("alanshar")) && (tokens.has("design") || tokens.has("desain") || tokens.has("figma"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.AL_ANSHAR_DESIGN_DETAIL;
  }

  // 12. SD/SMP Al-Anshar Game Development
  else if (
    (tokens.has("anshar") || tokens.has("alanshar")) && (tokens.has("game") || tokens.has("scratch"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.AL_ANSHAR_GAME_DETAIL;
  }

  // 13. MTs Yasmine
  else if (
    tokens.has("yasmine") || normalized.includes("mts yasmine")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.MTS_YASMINE_DETAIL;
  }

  // 14. Griyya Sunnah
  else if (
    tokens.has("griyya") || tokens.has("griya") || normalized.includes("griyya sunnah")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.GRIYYA_SUNNAH_DETAIL;
  }

  // 15. Solo Backpacker 3 Countries
  else if (
    tokens.has("backpacker") || tokens.has("backpacking") ||
    normalized.includes("solo backpacker") || normalized.includes("3 negara") || normalized.includes("tiga negara") ||
    (tokens.has("singapura") && tokens.has("malaysia"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.BACKPACKER_DETAIL;
  }

  // 16. Business & Life Survival Semarang
  else if (
    tokens.has("semarang") || normalized.includes("life survival") || normalized.includes("business survival") ||
    (tokens.has("survival") && (tokens.has("semarang") || tokens.has("bisnis") || tokens.has("nol rupiah")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.SEMARANG_SURVIVAL_DETAIL;
  }

  // 17. Event Division Leader OSIS SMK IDN
  else if (
    tokens.has("osis") || normalized.includes("divisi acara") || normalized.includes("osis smk idn")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.OSIS_LEADERSHIP_DETAIL;
  }

  // 18. Event Coordinator IT FEST 2025
  else if (
    (tokens.has("fest") || tokens.has("festival")) && (tokens.has("koordinator") || tokens.has("panitia") || tokens.has("lead") || tokens.has("coordinator"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.IT_FEST_DETAIL;
  }

  // 19. Barmus Voluntrip
  else if (
    tokens.has("barmus") || tokens.has("voluntrip") || normalized.includes("relawan barmus")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.BARMUS_VOLUNTRIP_DETAIL;
  }

  // 20. Live In Pedesaan
  else if (
    tokens.has("livein") || normalized.includes("live in") || normalized.includes("petani tradisional") || (tokens.has("pedesaan") && tokens.has("petani"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.LIVE_IN_DETAIL;
  }

  // -------------------------------------------------------------------------
  // PRIORITY 4: SPECIFIC ACHIEVEMENTS & BOOKS
  // -------------------------------------------------------------------------

  // 1. PNBITC #18 Bali (Juara 2 Nasional)
  else if (
    tokens.has("pnbitc") || (tokens.has("bali") && (tokens.has("lomba") || tokens.has("juara") || tokens.has("politeknik")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ACHIEV_PNBITC;
  }

  // 2. ICOMFEST 2025 (Juara 1 Nasional)
  else if (
    tokens.has("icomfest") || (tokens.has("icom") && tokens.has("fest")) || (tokens.has("juara") && tokens.has("1") && tokens.has("nasional"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ACHIEV_ICOMFEST;
  }

  // 3. UNILA National Finalist
  else if (
    tokens.has("unila") || normalized.includes("universitas lampung")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ACHIEV_UNILA;
  }

  // 4. Poster Competition
  else if (
    tokens.has("poster") && (tokens.has("lomba") || tokens.has("juara") || tokens.has("penghargaan") || tokens.has("desain"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ACHIEV_POSTER;
  }

  // 5. Book 1: Game Making Without Coding
  else if (
    tokens.has("buku") && (tokens.has("game") || tokens.has("scratch") || tokens.has("construct") || tokens.has("tanpa coding"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.BOOK_GAME_SCRATCH;
  }

  // 6. Book 2: Modern Web Development with Frameworks
  else if (
    tokens.has("buku") && (tokens.has("web") || tokens.has("website") || tokens.has("framework") || tokens.has("modern"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.BOOK_WEB_FRAMEWORK;
  }

  // -------------------------------------------------------------------------
  // PRIORITY 5: CATEGORY OVERVIEWS & GENERAL DOMAINS
  // -------------------------------------------------------------------------
  // All 20 Experiences
  else if (
    normalized.includes("semua pengalaman") || normalized.includes("total pengalaman") || 
    normalized.includes("20 pengalaman") || normalized.includes("all experiences") || 
    normalized.includes("3 pilar") || (tokens.has("pengalaman") && tokens.has("semua")) ||
    normalized.includes("seluruh 20 pengalaman")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ALL_EXPERIENCES;
  }

  // Project Count (e.g. berapa banyak projek yang sudah dikerjakan, how many projects has adyvka built)
  else if (
    tokens.has("jumlahproyek") ||
    (((tokens.has("how") && (tokens.has("many") || tokens.has("much"))) || tokens.has("berapa") || tokens.has("jumlah") || tokens.has("total") || tokens.has("18")) &&
     (tokens.has("proyek") || tokens.has("projek") || tokens.has("project") || tokens.has("projects") || tokens.has("aplikasi") || tokens.has("built") || tokens.has("app") || tokens.has("apps") || tokens.has("applications") || tokens.has("made"))) ||
    normalized.includes("how many project") || normalized.includes("how many app")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.COUNT_PROJECTS;
  }

  // Project Catalog / List
  else if (
    tokens.has("katalogproyek") || tokens.has("katalog") || normalized.includes("daftar proyek") || normalized.includes("list project") ||
    normalized.includes("list all projects") || normalized.includes("show all projects") || normalized.includes("what applications has he built") ||
    normalized.includes("what apps has he built") || normalized.includes("what has he built") ||
    normalized.includes("proyek apa saja") || normalized.includes("apa saja proyek") || 
    (tokens.has("sebutkan") && tokens.has("proyek")) || (tokens.has("proyek") && tokens.has("portofolio")) ||
    (tokens.has("all") && (tokens.has("projects") || tokens.has("apps") || tokens.has("applications") || tokens.has("proyek")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.LIST_PROJECTS;
  }

  // Work Experiences (Overview)
  else if (
    normalized.includes("pengalaman kerja") || normalized.includes("work experience") || 
    normalized.includes("pekerjaan") || (tokens.has("kerja") && (tokens.has("kantor") || tokens.has("perusahaan") || tokens.has("industri")))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.WORK_EXPERIENCE;
  }

  // Teaching Experiences (Overview)
  else if (
    tokens.has("mengajar") || tokens.has("teaching") || tokens.has("guru") || tokens.has("mentorship") || 
    tokens.has("pelatihan") || normalized.includes("pengalaman mengajar") || tokens.has("instruktur")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.TEACHING_EXPERIENCE;
  }

  // Leadership Experiences (Overview)
  else if (
    tokens.has("kepemimpinan") || tokens.has("leadership") || tokens.has("organisasi") || tokens.has("ekspedisi")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.LEADERSHIP_EXPERIENCE;
  }

  // Certificates Overview
  else if (
    tokens.has("sertifikat") || tokens.has("certificate") || tokens.has("certificates") || tokens.has("sertifikasi") || tokens.has("certification")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.CERTIFICATES;
  }

  // Achievements Overview
  else if (
    tokens.has("prestasi") || tokens.has("penghargaan") || tokens.has("lomba") || tokens.has("juara") || 
    tokens.has("award") || tokens.has("awards") || tokens.has("competition") || tokens.has("competitions")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ACHIEVEMENTS;
  }

  // Books Overview
  else if (
    tokens.has("buku") || tokens.has("book") || tokens.has("books") || tokens.has("penulis") || tokens.has("author") || tokens.has("publikasi")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.BOOKS;
  }

  // GPA / Academic Record (96/100)
  else if (
    tokens.has("gpa") || tokens.has("ipk") || tokens.has("rapot") || tokens.has("nilai") || 
    tokens.has("grade") || tokens.has("grades") || tokens.has("akademik") || tokens.has("academic") || tokens.has("96")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.GPA_ACADEMIC;
  }

  // Rates & Pricing (checked before general tech stack)
  else if (
    tokens.has("tarif") || tokens.has("harga") || tokens.has("biaya") || tokens.has("gaji") || 
    tokens.has("fee") || tokens.has("fees") || tokens.has("rate") || tokens.has("rates") || tokens.has("pricing") ||
    tokens.has("charge") || tokens.has("charges") || tokens.has("cost") || tokens.has("costs") ||
    normalized.includes("biaya jasa") || normalized.includes("tarif koding") || normalized.includes("tarif projek") ||
    normalized.includes("how much does he charge") || normalized.includes("what are his rates") || normalized.includes("service fee")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.RATES_AND_PRICING;
  }

  // Work Availability & Employment Model
  else if (
    tokens.has("ketersediaankerja") || tokens.has("availability") || tokens.has("available") || tokens.has("ketersediaan") ||
    tokens.has("remote") || tokens.has("freelance") || tokens.has("part-time") || tokens.has("full-time") ||
    tokens.has("parttime") || tokens.has("fulltime") || tokens.has("kontrak") ||
    normalized.includes("ketersediaan kerja") || normalized.includes("open to work") || normalized.includes("available for freelance") ||
    normalized.includes("can i hire") || normalized.includes("hire him") || normalized.includes("open for hire")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.WORK_AVAILABILITY;
  }

  // English Fluency & Communication
  else if (
    tokens.has("inggris") || tokens.has("english") ||
    normalized.includes("bahasa inggris") || normalized.includes("kemampuan bahasa inggris")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.ENGLISH_FLUENCY;
  }

  // Mobile Applications
  else if (
    tokens.has("mobile") || tokens.has("flutter") || tokens.has("android") || (tokens.has("aplikasi") && tokens.has("hp"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.MOBILE_APPS;
  }

  // AI Capabilities
  else if (
    tokens.has("ai") || tokens.has("artificial") || tokens.has("intelligence") || tokens.has("gemini") || tokens.has("llm")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.AI_CAPABILITIES;
  }

  // Hobbies & Interests
  else if (
    tokens.has("hobi") || tokens.has("hobby") || tokens.has("hobbies") || tokens.has("minat") || 
    tokens.has("leisure") || tokens.has("interest") || tokens.has("interests") || tokens.has("luang") ||
    normalized.includes("free time") || normalized.includes("spare time") || normalized.includes("in his free time")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.HOBBIES_INTERESTS;
  }

  // Vision & Future Goals
  else if (
    tokens.has("visi") || tokens.has("vision") || tokens.has("cita") || normalized.includes("cita cita") ||
    tokens.has("impian") || tokens.has("tujuan") || tokens.has("goal") || tokens.has("goals") || tokens.has("future")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.VISION_FUTURE_GOALS;
  }

  // Strengths & Why Hire
  else if (
    tokens.has("kelebihan") || tokens.has("keunggulan") || tokens.has("kekuatan") || 
    tokens.has("hire") || tokens.has("rekrut") || normalized.includes("why hire") || 
    (tokens.has("kenapa") && (tokens.has("rekrut") || tokens.has("hire") || tokens.has("pilih"))) ||
    (tokens.has("mengapa") && (tokens.has("rekrut") || tokens.has("hire") || tokens.has("pilih"))) ||
    normalized.includes("alasan merekrut") || normalized.includes("alasan memilih")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.STRENGTHS_WHY_HIRE;
  }

  // Bio & Identity
  else if (
    tokens.has("siapa") || tokens.has("siapakah") || tokens.has("who") || tokens.has("profil") || 
    tokens.has("profile") || tokens.has("biodata") || tokens.has("biografi") || tokens.has("biography") || 
    (tokens.has("about") && tokens.has("adyvka"))
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.BIO_IDENTITY;
  }

  // Age, Birthday & Birthplace
  else if (
    tokens.has("umur") || tokens.has("usia") || tokens.has("age") || tokens.has("old") || 
    tokens.has("lahir") || tokens.has("kelahiran") || tokens.has("birth") || tokens.has("born") || tokens.has("birthday") ||
    normalized.includes("tahun lahir") || normalized.includes("kapan lahir") || normalized.includes("lahir dimana") ||
    normalized.includes("dimana lahir") || normalized.includes("tempat lahir") || normalized.includes("tanggal lahir") ||
    normalized.includes("where was adyvka born") || normalized.includes("where born") || normalized.includes("birth place") ||
    normalized.includes("birthplace")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.AGE_INFO;
  }

  // Education & School
  else if (
    tokens.has("sekolah") || tokens.has("school") || tokens.has("pendidikan") || tokens.has("education") || 
    tokens.has("smk") || tokens.has("idn") || tokens.has("jurusan") || tokens.has("major") || tokens.has("kuliah")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.EDUCATION;
  }

  // Location & Domicile & Origin
  else if (
    tokens.has("domisili") || tokens.has("tinggal") || tokens.has("lokasi") || tokens.has("kota") || 
    tokens.has("asal") || tokens.has("alamat") || tokens.has("rumah") || tokens.has("location") ||
    tokens.has("residence") || tokens.has("residing") || tokens.has("hometown") ||
    (tokens.has("where") && (tokens.has("live") || tokens.has("lives") || tokens.has("located") || tokens.has("based") || tokens.has("from"))) ||
    normalized.includes("tempat tinggal") || normalized.includes("tinggal dimana") || normalized.includes("dimana tinggal") ||
    normalized.includes("asal mana") || normalized.includes("berasal dari") ||
    normalized.includes("where does he live") || normalized.includes("where is he based") ||
    normalized.includes("current residence") || normalized.includes("city of residence") || normalized.includes("what city is he from")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.LOCATION_DOMICILE;
  }

  // Tech Stack & Engineering Skills (General Catch-all for coding skills)
  else if (
    tokens.has("techstack") || tokens.has("stack") || tokens.has("teknologi") || tokens.has("technology") || tokens.has("technologies") ||
    tokens.has("skills") || tokens.has("skill") || tokens.has("keahlian") || tokens.has("koding") || tokens.has("programming") ||
    tokens.has("tools") || tokens.has("framework") || tokens.has("frameworks") || tokens.has("database") || tokens.has("databases") ||
    tokens.has("frontend") || tokens.has("backend") || tokens.has("fullstack") ||
    tokens.has("nestjs") || tokens.has("nextjs") || tokens.has("postgresql") || tokens.has("docker") || tokens.has("typescript") ||
    tokens.has("react") || tokens.has("reactjs") || tokens.has("laravel") || tokens.has("prisma") || tokens.has("tailwind") ||
    tokens.has("bahasakoding") || (tokens.has("bahasa") && !tokens.has("inggris") && !tokens.has("english")) || tokens.has("pemrograman") ||
    normalized.includes("bahasa pemrograman") || normalized.includes("programming language") || normalized.includes("programming languages") ||
    normalized.includes("coding language") || normalized.includes("coding languages") ||
    normalized.includes("dikuasai") || normalized.includes("bisa koding") || normalized.includes("menguasai") ||
    normalized.includes("tech stack") || normalized.includes("what technologies") || normalized.includes("what frameworks") ||
    normalized.includes("dikuasai") || normalized.includes("bisa koding") || normalized.includes("menguasai")
  ) {
    matchedCard = KNOWLEDGE_REGISTRY.TECH_STACK;
  }

  // -------------------------------------------------------------------------
  // PRIORITY 6: CORPUS SEARCH FALLBACK
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
