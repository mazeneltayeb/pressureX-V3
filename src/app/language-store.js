// app/language-store.js
// هذا الملف يحفظ حالة اللغة لجميع المكونات

'use client';

let currentLanguage = 'en';
let listeners = [];

// الترجمة لكامل الموقع
const siteTranslations = {
   ar: {
    // Navigation
    home: "الرئيسية",
    about: "من نحن",
    contact: "اتصل بنا",
    Article:"المقالات",
    Lists:"كسوفات",
    Store:"متجر",
    sign_in: "تسجيل الدخول",
    sign_up: "إنشاء حساب",
    sign_out:"تسجيل الخروج",
    
    /////start home//////
    //vedio
    abouttext:"بريشر نحن شركة مصرية متخصصة في استيراد قطع غيار السيارات عالية الجودة من الصين. نحرص على توفير منتجات موثوقة بأسعار تنافسية لتلبية احتياجات السوق المصري. نعمل مع أفضل المصانع والموردين لضمان معايير الجودة والأمان. هدفنا هو تقديم خدمة مميزة تضمن لعملائنا الثقة والاعتمادية في كل تعامل.",
    //

    //  button
    button_more:"أقرأ المزيد",
    //

    // categorie
    categoriesH1:"فئات المنتجات",
    categoriesP:"في بريشر، نحرص على توفير كافة قطع الغيار لمختلف أجزاء السيارة، بمعايير جودة لا تقبل المساومة.",
    CarBodyParts:"اجزاء جسم السيارة",
    ElectricalParts:"الاجزاء الكهربائية",
    ChassisParts:"اجزاء الهيكل",
    EngineParts:"اجزاء المحرك",
    //

    //Clients//
    customerH1:"عملائنا حول مصر",
    customerP:"نمتلك قاعدة عملاء قوية تمتد عبر جميع محافظات مصر، تعكس ثقة السوق في خدماتنا.",
    ShopName:"",
    Name_of_the_province:"",
    //
   // egyptGovernorates
      cairo: "القاهرة",
      giza: "الجيزة",
      alexandria: "الإسكندرية",
      dakahlia: "الدقهلية",
      red_sea: "البحر الأحمر",
      beheira: "البحيرة",
      fayoum: "الفيوم",
      gharbia: "الغربية",
      ismailia: "الإسماعيلية",
      menofia: "المنوفية",
      minya: "المنيا",
      qalyubia: "القليوبية",
      new_valley: "الوادي الجديد",
      suez: "السويس",
      aswan: "أسوان",
      assiut: "أسيوط",
      beni_suef: "بني سويف",
      port_said: "بورسعيد",
      damietta: "دمياط",
      sharqia: "الشرقية",
      south_sinai: "جنوب سيناء",
      kafr_el_sheikh: "كفر الشيخ",
      matrouh: "مطروح",
      luxor: "الأقصر",
      qena: "قنا",
      north_sinai: "شمال سيناء",
      sohag: "سوهاج",
    //

    /////end home/////

    // Messages
    loading: "جاري التحميل...",
    success: "تم بنجاح!",
    error: "حدث خطأ"
  },
  
  en: {
     // Navigation
    home: "Home",
    about: "About Us",
    contact: "Contact",
    Article:"Articles",
    Lists:"Lists",
    Store:"Store",
    sign_in: "Sign In",
    sign_up: "Sign Up",
    sign_out:"Sign out",

    ///////start home//////
    //vedio
    abouttext:"Pressure we are an Egyptian company specialized in importing high quality auto parts from China. We are keen to provide reliable products at competitive prices to meet the needs of the Egyptian market. We work with the best factories and suppliers to ensure quality and safety standards. Our goal is to provide a distinctive service that guarantees our customers confidence and reliability in every transaction.",


    //button
    button_more:"Read more",

    // categorie
    categoriesH1:"Product Categories",
    categoriesP:"At Pressure, we are keen to provide all spare parts for various parts of the car, with uncompromising quality standards.",
    CarBodyParts:"Car Body Parts",
    ElectricalParts:"Electrical Parts",
    ChassisParts:"Chassis Parts",
    EngineParts:"Engine Parts",

      //Clients//
    customerH1:"Our clients around the egyptian",
    customerP:"We have a strong customer base that extends across all governorates of Egypt, reflecting the market's confidence in our services.",
    ShopName:"",
    Name_of_the_province:"",
    //
     // egyptGovernorates
      cairo: "Cairo",
      giza: "Giza",
      alexandria: "Alexandria",
      dakahlia: "Dakahlia",
      red_sea: "Red Sea",
      beheira: "Beheira",
      fayoum: "Fayoum",
      gharbia: "Gharbia",
      ismailia: "Ismailia",
      menofia: "Menofia",
      minya: "Minya",
      qalyubia: "Qalyubia",
      new_valley: "New Valley",
      suez: "Suez",
      aswan: "Aswan",
      assiut: "Assiut",
      beni_suef: "Beni Suef",
      port_said: "Port Said",
      damietta: "Damietta",
      sharqia: "Sharqia",
      south_sinai: "South Sinai",
      kafr_el_sheikh: "Kafr El Sheikh",
      matrouh: "Matrouh",
      luxor: "Luxor",
      qena: "Qena",
      north_sinai: "North Sinai",
      sohag: "Sohag"

    ///////end home//////
  },
  
  fr: {
     // Navigation
    home: "Accueil",
    about: "À propos",
    contact: "Contact",
    Article:"Articles",
    Lists:"Listes",
    Store:"Magasin",
    sign_in: "Se connecter",
    sign_up: "S'inscrire",
    sign_out:"Déconnectez-vous",


      ///////start home///////
     //vedio
     abouttext:"Pressure nous sommes une société égyptienne spécialisée dans l'importation de pièces automobiles de haute qualité en provenance de Chine. Nous tenons à fournir des produits fiables à des prix compétitifs pour répondre aux besoins du marché égyptien. Nous travaillons avec les meilleures usines et fournisseurs pour garantir des normes de qualité et de sécurité. Notre objectif est de fournir un service distinctif qui garantit à nos clients confiance et fiabilité dans chaque transaction.",

  
    //  button
    button_more:"En savoir plus",

   //categories
     categoriesH1:"Catégories de produits",
     categoriesP:"Chez Pressure, nous tenons à fournir toutes les pièces de rechange pour les différentes parties de la voiture, avec des normes de qualité sans compromis.",
      CarBodyParts:"Pièces de Carrosserie",
      ElectricalParts:"Pièces Électriques",
      ChassisParts:"Pièces de Châssis",
      EngineParts:"Pièces de Moteur",
    ///////end home////////

      //Clients//
    customerH1:"Nos clients autour de l'égyptien",
    customerP:"Nous avons une solide clientèle qui s'étend dans tous les gouvernorats d'Égypte, reflétant la confiance du marché dans nos services.",
    ShopName:"",
    Name_of_the_province:"",
    //
       // egyptGovernorates
      cairo: "Cairo",
      giza: "Giza",
      alexandria: "Alexandria",
      dakahlia: "Dakahlia",
      red_sea: "Red Sea",
      beheira: "Beheira",
      fayoum: "Fayoum",
      gharbia: "Gharbia",
      ismailia: "Ismailia",
      menofia: "Menofia",
      minya: "Minya",
      qalyubia: "Qalyubia",
      new_valley: "New Valley",
      suez: "Suez",
      aswan: "Aswan",
      assiut: "Assiut",
      beni_suef: "Beni Suef",
      port_said: "Port Said",
      damietta: "Damietta",
      sharqia: "Sharqia",
      south_sinai: "South Sinai",
      kafr_el_sheikh: "Kafr El Sheikh",
      matrouh: "Matrouh",
      luxor: "Luxor",
      qena: "Qena",
      north_sinai: "North Sinai",
      sohag: "Sohag"

  },
  
  zh: {
     // Navigation
    home: "主页",
    about: "关于我们",
    contact: "联系我们",
    Article:"文章",
    Lists:"名单",
    Store:"商店",
    sign_in: "登录",
    sign_up: "注册",
    sign_out:"签出和签出",

    /////////start home/////// 

     //vedio
     abouttext:"我们是一家埃及公司，专门从中国进口高品质的汽车零部件。 我们热衷于以具有竞争力的价格提供可靠的产品，以满足埃及市场的需求。 我们与最好的工厂和供应商合作，以确保质量和安全标准。 我们的目标是提供一个独特的服务，保证我们的客户在每一笔交易的信心和可靠性。",

    //  button
    button_more:"阅读更多",

     //categories
    categoriesH1:"产品类别",
    categoriesP:"在压力下，我们热衷于为汽车的各个部件提供所有备件，具有不妥协的质量标准。",
    CarBodyParts:"汽车车身零件",
    ElectricalParts:"电气零件",
    ChassisParts:"底盘零件",
    EngineParts:"发动机零件",

      //Clients//
    customerH1:"我们的客户遍布埃及",
    customerP:"我们拥有强大的客户基础，遍及埃及各省，反映了市场对我们服务的信心。",
    ShopName:"",
    Name_of_the_province:"",
    //
       // egyptGovernorates
      cairo: "Cairo",
      giza: "Giza",
      alexandria: "Alexandria",
      dakahlia: "Dakahlia",
      red_sea: "Red Sea",
      beheira: "Beheira",
      fayoum: "Fayoum",
      gharbia: "Gharbia",
      ismailia: "Ismailia",
      menofia: "Menofia",
      minya: "Minya",
      qalyubia: "Qalyubia",
      new_valley: "New Valley",
      suez: "Suez",
      aswan: "Aswan",
      assiut: "Assiut",
      beni_suef: "Beni Suef",
      port_said: "Port Said",
      damietta: "Damietta",
      sharqia: "Sharqia",
      south_sinai: "South Sinai",
      kafr_el_sheikh: "Kafr El Sheikh",
      matrouh: "Matrouh",
      luxor: "Luxor",
      qena: "Qena",
      north_sinai: "North Sinai",
      sohag: "Sohag"

    ///////end home///////

  }
};

// دالة للحصول على الترجمة
export function t(key) {
  return siteTranslations[currentLanguage]?.[key] || key;
}

// الحصول على اللغة الحالية
export function getCurrentLanguage() {
  return currentLanguage;
}

// تغيير اللغة لجميع المكونات
export function changeSiteLanguage(newLang) {
  console.log(`🌍 تغيير اللغة للموقع كله: ${newLang}`);
  
  // تحديث اللغة الحالية
  currentLanguage = newLang;
  
  // حفظ في localStorage
  localStorage.setItem('site-language', newLang);
  
  // تحديث HTML
  document.documentElement.lang = newLang;
  document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  
  // إعلام جميع المكونات المشتركة
  listeners.forEach(listener => listener(newLang));
}

// الاشتراك في تغييرات اللغة
export function onLanguageChange(callback) {
  listeners.push(callback);
  
  // دالة لإلغاء الاشتراك
  return () => {
    listeners = listeners.filter(l => l !== callback);
  };
}

// تحميل اللغة المحفوظة عند بدء التطبيق
if (typeof window !== 'undefined') {
  const savedLang = localStorage.getItem('site-language') || 'ar';
  currentLanguage = savedLang;
  document.documentElement.lang = savedLang;
  document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
}