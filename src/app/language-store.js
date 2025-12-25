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
    
    //vedio
    abouttext:"بريشر نحن شركة مصرية متخصصة في استيراد قطع غيار السيارات عالية الجودة من الصين. نحرص على توفير منتجات موثوقة بأسعار تنافسية لتلبية احتياجات السوق المصري. نعمل مع أفضل المصانع والموردين لضمان معايير الجودة والأمان. هدفنا هو تقديم خدمة مميزة تضمن لعملائنا الثقة والاعتمادية في كل تعامل.",

    //  button
    button_more:"أقرأ المزيد",

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


    //vedio
    abouttext:"Pressure we are an Egyptian company specialized in importing high quality auto parts from China. We are keen to provide reliable products at competitive prices to meet the needs of the Egyptian market. We work with the best factories and suppliers to ensure quality and safety standards. Our goal is to provide a distinctive service that guarantees our customers confidence and reliability in every transaction.",

     //  button
    button_more:"Read more"
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

     //vedio
     abouttext:"Pressure nous sommes une société égyptienne spécialisée dans l'importation de pièces automobiles de haute qualité en provenance de Chine. Nous tenons à fournir des produits fiables à des prix compétitifs pour répondre aux besoins du marché égyptien. Nous travaillons avec les meilleures usines et fournisseurs pour garantir des normes de qualité et de sécurité. Notre objectif est de fournir un service distinctif qui garantit à nos clients confiance et fiabilité dans chaque transaction.",

    //  button
    button_more:"En savoir plus"

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

     //vedio
     abouttext:"我们是一家埃及公司，专门从中国进口高品质的汽车零部件。 我们热衷于以具有竞争力的价格提供可靠的产品，以满足埃及市场的需求。 我们与最好的工厂和供应商合作，以确保质量和安全标准。 我们的目标是提供一个独特的服务，保证我们的客户在每一笔交易的信心和可靠性。",

    //  button
    button_more:"阅读更多"
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