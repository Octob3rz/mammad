
import React from 'react';
import { useLocale } from '../context/LocaleContext';
import { Check, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { motion } from 'framer-motion';

const LanguageSelector = () => {
  const { locale, setLocale } = useLocale();

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'العربية', flag: '🇦🇪' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  ];

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/20">
        <Globe size={16} className="text-white" />
        <span className="text-white text-sm">{currentLanguage.flag} {currentLanguage.name}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white/95 backdrop-blur-md border border-violet-light/20 w-48">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setLocale(lang.code as 'en' | 'ar' | 'ru' | 'tr')}
          >
            <motion.span 
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              className="text-base"
            >
              {lang.flag}
            </motion.span>
            <span className="flex-1">{lang.name}</span>
            {locale === lang.code && <Check size={16} className="text-violet-deep" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
