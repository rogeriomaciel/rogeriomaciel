import { useState } from 'react';
import { Locale, i18nContent } from '../config/i18n.content';
import { MenuIcon, XIcon, ArrowRightIcon } from './Icons';
import { ThemeToggle } from './ThemeToggle';

export function Navbar({ locale = 'pt' }: { locale?: Locale }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = i18nContent[locale];

  const navLinks = [
    { label: t.nav.pillars, href: '#pilares' },
    { label: t.nav.github, href: '#github' },
    { label: t.nav.kadoshCase, href: '#kadosh-case' },
    { label: t.nav.timeline, href: '#trajetoria' },
    { label: t.nav.faq, href: '#faq' },
  ];

  const whatsappMsg =
    locale === 'en'
      ? 'Hello Rogério! I visited your architecture portal and would like to discuss platform engineering / advisory for my team.'
      : 'Olá Rogério! Vi seu portal de engenharia e gostaria de conversar sobre consultoria de arquitetura / automação para a minha empresa.';

  const whatsappUrl = `https://wa.me/${t.profile.whatsappDigits}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* LOGO / BRAND */}
        <a href="#top" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center font-bold text-slate-950 font-mono shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:scale-105 transition-transform">
            RM
          </div>
          <div>
            <div className="text-sm font-bold text-slate-100 group-hover:text-emerald-400 transition-colors tracking-tight flex items-center gap-2">
              <span>{t.profile.shortName}</span>
              <span className="hidden sm:inline-block text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {t.profile.roleBadge}
              </span>
            </div>
            <div className="text-[11px] text-slate-400 hidden sm:block font-mono">
              {t.profile.title}
            </div>
          </div>
        </a>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-slate-300 tracking-wide uppercase font-mono">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-emerald-400 transition-colors py-1 relative group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-200" />
            </a>
          ))}
        </nav>

        {/* STATUS, LANGUAGE SWITCHER & ACTIONS */}
        <div className="flex items-center gap-3">
          {/* Status Indicator */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{t.nav.statusText}</span>
          </div>

          {/* LANGUAGE SWITCHER */}
          <div className="flex items-center rounded-lg bg-white/[0.04] border border-white/[0.08] p-0.5 font-mono text-xs">
            <a
              href="/pt/"
              className={`px-2.5 py-1 rounded-md transition-all ${
                locale === 'pt'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Versão em Português"
            >
              PT
            </a>
            <a
              href="/en/"
              className={`px-2.5 py-1 rounded-md transition-all ${
                locale === 'en'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="English International Version"
            >
              EN
            </a>
          </div>

          <ThemeToggle />

          {/* Primary CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold font-mono tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] active:scale-[0.98]"
          >
            <span>{t.nav.consultCta}</span>
            <ArrowRightIcon className="w-3.5 h-3.5 text-slate-950" />
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-white/[0.04] border border-white/[0.08] focus:outline-none"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07090E]/98 border-b border-white/[0.08] px-4 pt-4 pb-6 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
            <span className="text-xs font-mono text-slate-400">Language / Idioma:</span>
            <div className="flex items-center gap-2 font-mono text-xs">
              <a
                href="/pt/"
                className={`px-3 py-1 rounded ${
                  locale === 'pt' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-300'
                }`}
              >
                Português (PT)
              </a>
              <a
                href="/en/"
                className={`px-3 py-1 rounded ${
                  locale === 'en' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-300'
                }`}
              >
                English (EN)
              </a>
            </div>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono text-slate-300 hover:text-emerald-400 py-2 border-b border-white/[0.04]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-500 text-slate-950 text-sm font-bold font-mono"
            >
              <span>{t.nav.consultCta}</span>
              <ArrowRightIcon className="w-4 h-4 text-slate-950" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
