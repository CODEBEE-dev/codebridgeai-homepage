import { useState, useEffect } from 'react';
import { LogIn, UserPlus, Play, Sparkles, Menu, X, ArrowRight } from 'lucide-react';
import BoomerangVideoBg from './BoomerangVideoBg';

const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4';

const SERIF = '"Cormorant Garamond", "Noto Serif KR", Georgia, serif';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = [
    { href: '#mission', label: '미션' },
    { href: '#services', label: '서비스' },
    { href: '#pricing', label: '요금제' },
  ];

  return (
    <section className="relative w-full min-h-screen sm:h-screen overflow-hidden bg-[#ede9e2]">
      <BoomerangVideoBg src={BG_VIDEO} className="absolute inset-0 w-full h-full" />

      {/* Readability gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20 pointer-events-none z-[1]" />

      {/* ── Nav ── */}
      <nav
        className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 sm:px-8 md:px-12 py-5 sm:py-6"
        aria-label="주요 네비게이션"
      >
        {/* Logo */}
        <a href="/" className="text-[#1a2318]" aria-label="CodeBridgeAI 홈">
          <span className="text-[13px] font-semibold tracking-[0.13em] uppercase">
            CodeBridge
          </span>
          <span className="text-[13px] font-light tracking-[0.13em] uppercase">AI</span>
        </a>

        {/* Desktop pill nav */}
        <div className="hidden lg:flex items-center gap-0.5 rounded-full bg-white/50 backdrop-blur-xl border border-white/40 px-2 py-1.5 shadow-sm">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] px-4 py-2 rounded-full transition-all duration-200 ${
                i === 0
                  ? 'bg-white/90 font-medium text-[#1a2318] shadow-sm'
                  : 'font-normal text-[#4b5b47] hover:text-[#1a2318] hover:bg-white/40'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#edu"
            className="ml-1 inline-flex items-center gap-1.5 bg-[#1a2318] hover:bg-[#2d3d29] text-white text-[13px] font-medium px-5 py-2 rounded-full transition-colors"
          >
            체험하기
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-5 text-[#2d3a2a]">
          <a
            href="#signup"
            className="hidden sm:flex items-center gap-1.5 text-[13px] font-normal tracking-wide hover:opacity-60 transition-opacity"
          >
            <UserPlus className="w-3.5 h-3.5" aria-hidden="true" />
            회원가입
          </a>
          <a
            href="#login"
            className="hidden sm:flex items-center gap-1.5 text-[13px] font-normal tracking-wide hover:opacity-60 transition-opacity"
          >
            <LogIn className="w-3.5 h-3.5" aria-hidden="true" />
            로그인
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden relative w-9 h-9 rounded-full bg-white/50 backdrop-blur-xl border border-white/40 flex items-center justify-center text-[#1a2318] transition-colors hover:bg-white/75"
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={menuOpen}
          >
            <Menu
              className={`w-4 h-4 absolute transition-all duration-300 ${
                menuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100'
              }`}
              aria-hidden="true"
            />
            <X
              className={`w-4 h-4 absolute transition-all duration-300 ${
                menuOpen ? 'opacity-100' : 'opacity-0 -rotate-90 scale-50'
              }`}
              aria-hidden="true"
            />
          </button>
        </div>
      </nav>

      {/* ── Mobile overlay ── */}
      <div
        className={`lg:hidden fixed inset-0 z-20 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[#1a2318]/50 backdrop-blur-sm" />
      </div>

      {/* ── Mobile drawer ── */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-20 w-[78%] max-w-xs bg-[#f5f2ec]/97 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="모바일 메뉴"
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-10">
          <nav className="flex flex-col">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-[22px] font-extralight text-[#1a2318] py-5 border-b border-[#1a2318]/8 tracking-tight transition-all duration-500 ${
                  menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
                }`}
                style={{ transitionDelay: menuOpen ? `${150 + i * 60}ms` : '0ms' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div
            className={`mt-auto flex flex-col gap-3 transition-all duration-500 ${
              menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
            }`}
            style={{ transitionDelay: menuOpen ? '390ms' : '0ms' }}
          >
            <a
              href="#signup"
              className="flex items-center gap-2 text-[13px] font-normal text-[#2d3a2a] sm:hidden"
            >
              <UserPlus className="w-3.5 h-3.5" aria-hidden="true" />
              회원가입
            </a>
            <a
              href="#login"
              className="flex items-center gap-2 text-[13px] font-normal text-[#2d3a2a] sm:hidden"
            >
              <LogIn className="w-3.5 h-3.5" aria-hidden="true" />
              로그인
            </a>
            <a
              href="#edu"
              className="mt-3 inline-flex items-center justify-center gap-1.5 bg-[#1a2318] hover:bg-[#2d3d29] text-white text-[13px] font-medium px-6 py-3.5 rounded-full transition-colors"
            >
              지금 체험하기
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Hero ── */}
      <div className="relative z-10 flex flex-col items-center text-center pt-28 sm:pt-32 md:pt-36 px-4 sm:px-8">
        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#2d3a2a]/20 bg-white/25 backdrop-blur-sm px-4 py-1.5 mb-9 sm:mb-12">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5a9b6a]" />
          <span
            className="text-[11px] font-medium text-[#2d3d29]"
            style={{ fontFamily: SERIF, fontStyle: 'italic', letterSpacing: '0.08em' }}
          >
            AI-Powered Education &amp; Solutions
          </span>
        </div>

        {/* Main heading – two-line weight contrast */}
        <h1 className="flex flex-col items-center">
          <span
            className="block font-extralight text-[#1a2318] text-[2.5rem] sm:text-[3.8rem] md:text-[5rem] lg:text-[6rem] xl:text-[6.8rem] leading-[1.0] tracking-[-0.04em]"
          >
            코드와 사람을
          </span>
          <span
            className="block font-light text-[#336443] text-[2.5rem] sm:text-[3.8rem] md:text-[5rem] lg:text-[6rem] xl:text-[6.8rem] leading-[1.08] tracking-[-0.035em]"
          >
            잇는 미래의 다리
          </span>
        </h1>

        <p className="mt-8 sm:mt-10 text-[#4b5b47]/90 text-[13px] sm:text-[14px] leading-[1.85] max-w-[320px] font-light tracking-wide">
          AI 기반 워크플로우로 교육, 기술,
          <br className="hidden sm:block" /> 그리고 비즈니스를 의미있게 연결합니다.
        </p>
      </div>

      {/* ── Bottom-left CTA ── */}
      <div className="absolute left-6 right-6 sm:right-auto sm:left-8 md:left-12 bottom-8 sm:bottom-10 z-10 max-w-[270px]">
        <div className="flex items-center gap-1.5 mb-3">
          <Sparkles className="w-3 h-3 text-[#3d5638] sm:text-white/75" aria-hidden="true" />
          <span
            className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#3d5638] sm:text-white/75"
            style={{ fontFamily: SERIF, fontStyle: 'italic' }}
          >
            BridgeEngine™
          </span>
        </div>
        <p className="text-[#3d5638]/80 sm:text-white/65 text-[12px] leading-[1.8] mb-5 font-light">
          코딩 교육부터 AI 솔루션까지, 복잡한 워크플로우를 커스텀 코드 없이 자동화합니다.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="#edu"
            className="inline-flex items-center gap-1.5 bg-[#1a2318] sm:bg-white hover:bg-[#2d3d29] sm:hover:bg-white/90 text-white sm:text-[#1a2318] text-[12px] font-medium px-5 py-2.5 rounded-full transition-colors tracking-wide"
          >
            지금 체험하기
          </a>
          <a
            href="#services"
            className="text-[#3d5638] sm:text-white/75 text-[12px] font-light hover:opacity-60 transition-opacity underline-offset-4 hover:underline tracking-wide"
          >
            더 알아보기
          </a>
        </div>
      </div>

      {/* ── Bottom-right video ── */}
      <div className="hidden sm:flex absolute right-8 md:right-12 bottom-10 z-10 items-center gap-2.5 text-white/70 text-[12px]">
        <button
          className="flex items-center justify-center w-7 h-7 rounded-full bg-white/15 border border-white/20 hover:bg-white/25 transition-colors"
          aria-label="소개 영상 재생"
        >
          <Play className="w-3 h-3 fill-white ml-0.5" aria-hidden="true" />
        </button>
        <span style={{ fontFamily: SERIF, fontStyle: 'italic' }}>어떻게 만드나요?</span>
        <span className="text-white/35 tracking-wide">1:35</span>
      </div>
    </section>
  );
}

export default App;
