import { useEffect, useState } from 'react';
import Pt from './pages/Pt';
import En from './pages/En';
import { Locale } from './config/i18n.content';

export default function App() {
  const [currentLocale, setCurrentLocale] = useState<Locale>('en');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname.toLowerCase();
      if (pathname.startsWith('/pt') || pathname.startsWith('/solucoes')) {
        setCurrentLocale('pt');
      } else {
        setCurrentLocale('en');
      }
    }
  }, []);

  return currentLocale === 'en' ? <En /> : <Pt />;
}
