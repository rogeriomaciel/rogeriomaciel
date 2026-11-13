import { useEffect, useState } from 'react';
import Pt from './pages/Pt';
import En from './pages/En';
import { Locale } from './config/i18n.content';

export default function App() {
  const [currentLocale, setCurrentLocale] = useState<Locale>('pt');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname.toLowerCase();
      if (pathname.startsWith('/en')) {
        setCurrentLocale('en');
      } else {
        setCurrentLocale('pt');
      }
    }
  }, []);

  return currentLocale === 'en' ? <En /> : <Pt />;
}
