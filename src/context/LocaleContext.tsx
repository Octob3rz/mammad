
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Locale = 'en' | 'ar' | 'ru' | 'tr';

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    'hero.title': 'MAMMAD MAMATOV',
    'hero.subtitle': 'Innovator. Entrepreneur. Visionary.',
    'about.title': 'About Me',
    'about.content': 'Being born in Azerbaijan i cultivated dedication to my work in all aspects since i was born. In my 30s i\'ve been thriving as a director of meet factory and later decided to open an own restaurant in the center of Baku. After that i\'ve been living in Dubai and providing my professional guidance as a real estate agent to many influencial people. There i acquired extremely large circle of contacts that allow me to connect people from different places and unite them for one goal: develop and thrive together. As a visionary entrepreneur with over a decade of experience, I\'ve dedicated my career to pushing the boundaries of entrepreneurship and creating meaningful impact through interactions with people.',
    'vision.title': 'My Vision',
    'vision.content': 'I believe in harnessing the power of social communication to solve real-world problems and create solutions that make a difference in people\'s lives.',
    'achievements.title': 'Achievements',
    'achievements.experience': 'Years Experience',
    'achievements.projects': 'Successful Projects',
    'achievements.revenue': 'Revenue Generated',
    'achievements.clients': 'Happy Clients',
    'journey.title': 'My Journey in Pictures',
    'journey.subtitle': 'Visual highlights from my professional experience and global connections',
    'meat.title': 'MEAT FACTORY DIRECTOR',
    'meat.content': 'Leading operations and innovation in the meat processing industry, establishing efficient production systems and quality control measures.',
    'restaurant.title': 'RESTAURANT OWNER',
    'restaurant.content': 'Successfully established and managed a restaurant in central Baku, creating exceptional dining experiences and building a strong customer base.',
    'connections.title': 'INTERNATIONAL CONNECTIONS',
    'connections.content': 'Built an extensive network spanning Azerbaijan, Dubai, and beyond, facilitating meaningful connections and business opportunities across borders.',
    'realestate.title': 'REAL ESTATE CONSULTANT',
    'realestate.content': 'Providing expert guidance in Dubai\'s real estate market, connecting influential clients with premium properties and investment opportunities.',
    'growth.title': 'COLLABORATIVE GROWTH',
    'growth.content': 'Uniting diverse professionals and businesses toward shared goals of development and success through strategic partnerships and innovative solutions.',
    'footer.touch': 'Get in Touch',
    'footer.connect': 'Connect',
    'footer.rights': 'All rights reserved.',
  },
  ar: {
    'hero.title': 'محمد مماتوف',
    'hero.subtitle': 'مبتكر. رائد أعمال. صاحب رؤية.',
    'about.title': 'عني',
    'about.content': 'بصفتي رائد أعمال ذو رؤية مع أكثر من عقد من الخبرة، لقد كرست حياتي المهنية لدفع حدود ريادة الأعمال وخلق تأثير هادف من خلال التفاعل مع الناس.',
    'vision.title': 'رؤيتي',
    'vision.content': 'أؤمن بتسخير قوة التواصل الاجتماعي لحل المشكلات الواقعية وخلق حلول تُحدث فرقًا في حياة الناس.',
    'achievements.title': 'الإنجازات',
    'achievements.experience': 'سنوات الخبرة',
    'achievements.projects': 'المشاريع الناجحة',
    'achievements.revenue': 'الإيرادات المحققة',
    'achievements.clients': 'العملاء السعداء',
    'journey.title': 'رحلتي في صور',
    'journey.subtitle': 'لمحات بصرية من تجربتي المهنية وعلاقاتي العالمية',
    'meat.title': 'مدير مصنع اللحوم',
    'meat.content': 'قيادة العمليات والابتكار في صناعة تجهيز اللحوم، وإنشاء أنظمة إنتاج فعالة وتدابير مراقبة الجودة.',
    'restaurant.title': 'مالك مطعم',
    'restaurant.content': 'تأسيس وإدارة مطعم ناجح في وسط باكو، وخلق تجارب طعام استثنائية وبناء قاعدة عملاء قوية.',
    'connections.title': 'العلاقات الدولية',
    'connections.content': 'بناء شبكة واسعة تمتد إلى أذربيجان ودبي وما وراءها، تسهيل العلاقات الهادفة وفرص الأعمال عبر الحدود.',
    'realestate.title': 'مستشار عقاري',
    'realestate.content': 'تقديم إرشادات خبيرة في سوق العقارات في دبي، وربط العملاء المؤثرين بالعقارات المميزة وفرص الاستثمار.',
    'growth.title': 'النمو التعاوني',
    'growth.content': 'توحيد المهنيين والشركات المتنوعة نحو أهداف مشتركة للتنمية والنجاح من خلال الشراكات الاستراتيجية والحلول المبتكرة.',
    'footer.touch': 'تواصل معنا',
    'footer.connect': 'اتصل',
    'footer.rights': 'جميع الحقوق محفوظة.',
  },
  ru: {
    'hero.title': 'МАММАД МАМАТОВ',
    'hero.subtitle': 'Инноватор. Предприниматель. Провидец.',
    'about.title': 'Обо мне',
    'about.content': 'Будучи предпринимателем-провидцем с более чем десятилетним опытом, я посвятил свою карьеру расширению границ предпринимательства и созданию значимого влияния через взаимодействие с людьми.',
    'vision.title': 'Моё видение',
    'vision.content': 'Я верю в использование силы социальной коммуникации для решения реальных проблем и создания решений, которые имеют значение в жизни людей.',
    'achievements.title': 'Достижения',
    'achievements.experience': 'Лет опыта',
    'achievements.projects': 'Успешных проектов',
    'achievements.revenue': 'Генерированный доход',
    'achievements.clients': 'Довольных клиентов',
    'journey.title': 'Моё путешествие в картинках',
    'journey.subtitle': 'Визуальные моменты из моего профессионального опыта и глобальных связей',
    'meat.title': 'ДИРЕКТОР МЯСОКОМБИНАТА',
    'meat.content': 'Руководство операциями и инновациями в мясоперерабатывающей промышленности, создание эффективных систем производства и мер контроля качества.',
    'restaurant.title': 'ВЛАДЕЛЕЦ РЕСТОРАНА',
    'restaurant.content': 'Успешно основал и управлял рестораном в центре Баку, создавая исключительные гастрономические впечатления и формируя прочную клиентскую базу.',
    'connections.title': 'МЕЖДУНАРОДНЫЕ СВЯЗИ',
    'connections.content': 'Построил обширную сеть, охватывающую Азербайджан, Дубай и не только, содействуя значимым связям и бизнес-возможностям через границы.',
    'realestate.title': 'КОНСУЛЬТАНТ ПО НЕДВИЖИМОСТИ',
    'realestate.content': 'Предоставление экспертных рекомендаций на рынке недвижимости Дубая, соединение влиятельных клиентов с премиальной недвижимостью и инвестиционными возможностями.',
    'growth.title': 'СОВМЕСТНЫЙ РОСТ',
    'growth.content': 'Объединение различных профессионалов и бизнесов для достижения общих целей развития и успеха через стратегические партнерства и инновационные решения.',
    'footer.touch': 'Связаться',
    'footer.connect': 'Соединиться',
    'footer.rights': 'Все права защищены.',
  },
  tr: {
    'hero.title': 'MAMMAD MAMATOV',
    'hero.subtitle': 'Yenilikçi. Girişimci. Vizyoner.',
    'about.title': 'Hakkımda',
    'about.content': 'On yılı aşkın deneyime sahip vizyoner bir girişimci olarak, kariyerimi girişimciliğin sınırlarını zorlamaya ve insanlarla etkileşimler yoluyla anlamlı etki yaratmaya adadım.',
    'vision.title': 'Vizyonum',
    'vision.content': 'Gerçek dünya problemlerini çözmek ve insanların hayatlarında fark yaratan çözümler oluşturmak için sosyal iletişimin gücünden yararlanmaya inanıyorum.',
    'achievements.title': 'Başarılar',
    'achievements.experience': 'Yıl Deneyim',
    'achievements.projects': 'Başarılı Projeler',
    'achievements.revenue': 'Oluşturulan Gelir',
    'achievements.clients': 'Mutlu Müşteriler',
    'journey.title': 'Resimlerle Yolculuğum',
    'journey.subtitle': 'Profesyonel deneyimimden ve küresel bağlantılarımdan görsel öne çıkanlar',
    'meat.title': 'ET FABRİKASI MÜDÜRÜ',
    'meat.content': 'Et işleme endüstrisinde operasyonları ve inovasyonu yönetmek, verimli üretim sistemleri ve kalite kontrol önlemleri oluşturmak.',
    'restaurant.title': 'RESTORAN SAHİBİ',
    'restaurant.content': 'Bakü\'nün merkezinde başarılı bir şekilde bir restoran kurdum ve yönettim, olağanüstü yemek deneyimleri yarattım ve güçlü bir müşteri tabanı oluşturdum.',
    'connections.title': 'ULUSLARARASI BAĞLANTILAR',
    'connections.content': 'Azerbaycan, Dubai ve ötesini kapsayan geniş bir ağ kurdum, sınırlar ötesi anlamlı bağlantıları ve iş fırsatlarını kolaylaştırdım.',
    'realestate.title': 'EMLAK DANIŞMANI',
    'realestate.content': 'Dubai\'nin gayrimenkul piyasasında uzman rehberlik sağlamak, etkili müşterileri premium mülkler ve yatırım fırsatlarıyla buluşturmak.',
    'growth.title': 'İŞ BİRLİĞİ İLE BÜYÜME',
    'growth.content': 'Stratejik ortaklıklar ve yenilikçi çözümler aracılığıyla çeşitli profesyonelleri ve işletmeleri gelişim ve başarı için ortak hedefler doğrultusunda birleştirmek.',
    'footer.touch': 'İletişime Geçin',
    'footer.connect': 'Bağlantı Kurun',
    'footer.rights': 'Tüm hakları saklıdır.',
  }
};

const LocaleContext = createContext<LocaleContextType>({
  locale: 'en',
  setLocale: () => {},
  t: (key: string) => key,
});

export const useLocale = () => useContext(LocaleContext);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>('en');

  // Effect to handle RTL direction for Arabic
  useEffect(() => {
    const dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = locale;
    console.log(`Language changed to: ${locale}`);
  }, [locale]);

  const t = (key: string): string => {
    if (!translations[locale]) {
      console.warn(`No translations found for locale: ${locale}`);
      return key;
    }
    
    const translation = translations[locale][key as keyof typeof translations[typeof locale]];
    if (!translation) {
      console.warn(`Translation key not found: ${key} in locale: ${locale}`);
      return key;
    }
    
    return translation;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};
