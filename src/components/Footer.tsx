
import React from "react";
import { MapPin, Mail, Phone, Instagram, Facebook, Linkedin } from "lucide-react";
import { useLocale } from "../context/LocaleContext";

const Footer = () => {
  const { t, locale } = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`mt-12 bg-violet-deep/10 backdrop-blur-lg py-12 ${locale === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location Info */}
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-4 text-violet-deep">{t('footer.touch')}</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="text-violet-light mr-2 h-5 w-5" />
                <p className="text-violet-bright/80 font-lora">Dubai, UAE</p>
              </div>
              <div className="flex items-center">
                <Phone className="text-violet-light mr-2 h-5 w-5" />
                <p className="text-violet-bright/80 font-lora">+971 50 123 4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-violet-light mr-2 h-5 w-5" />
                <p className="text-violet-bright/80 font-lora">info@mammadmamadov.com</p>
              </div>
            </div>
          </div>

          {/* Empty space for layout balance */}
          <div></div>

          {/* Connect section */}
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-4 text-violet-deep">{t('footer.connect')}</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-violet-light text-violet-bright/80 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-violet-light text-violet-bright/80 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-violet-light text-violet-bright/80 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center">
          <p className="text-violet-bright/60 font-lora text-sm">
            &copy; {currentYear} MAMMAD MAMADOV. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
