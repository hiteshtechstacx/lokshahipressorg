import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { realPressClippings } from '../../data/newsAndEditorial';

export function MediaCoverage() {
  const { lang } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const clippingImages = [
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0.2-hVgu4X76jUFd201E7zBdPqVsJ25wXk.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0.1-2K7d7ZZsvVEpxt8dR31lwwWb0V0Eug.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0.3-Jogr8dMKM2wfZXApSKjtt2Ipa9uoaN.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0.5-OUqHyNmEhLpRUmGhKrH0FF316P0OK0.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0.4-p2octuouPCofN5F725O3prDLDVi6Zt.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-mT1pxCXptDN376cM2UW1Am7iLDqBTy.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-QM8N3fPa7QO1bekWuaJu2oK6qLShaG.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-y2zjj0342VG2lPjlmvVnprUxhVw03x.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-PEVnjTYYU47WWWuL0bOduge9VNUQla.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-37hlqIypEhwBIubazFmmapiYxW91tv.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.5-dqwmXhrxoBgcpbWPGRZuyvaNSMQR4O.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-eOLlAh7z7rKBmKUkhLPd8r5QGWvwTk.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-TFN1jgNET9aCevU8tjKXrW6OHdtEn2.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-y7baYHYusgjS5TUmASjU5Koxamx0r1.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-9LpzGdRKkxmJCAOKSxx87y4ZlTABe9.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-J4SMTvYoqpCWn9nP5HL9Q5xbJY9uR5.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-oa5FcsJpjvjUDsy9odjMd0yswAUjLh.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-C18BYdEq4mTeqqNe80PWJn5o3RNR9X.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-5vuPKrWBcJmXm9ooUkUyhznlRwD91P.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-oOwBnLslD8anbr1yvoSoUaVfh4MM0E.jpeg',
  ];

  // Duplicated list for seamless infinite looping autoscroll
  const scrollArticles = [...realPressClippings, ...realPressClippings];

  // Pause scrolling while hovered or touched
  const isScrollingPaused = isPaused;

  // Continuous smooth autoscroll loop
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();
    let scrollPos = scrollRef.current ? scrollRef.current.scrollLeft : 0;

    const step = (now: number) => {
      const el = scrollRef.current;
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      if (el && !isScrollingPaused) {
        scrollPos += 45 * dt; // 45px/second smooth movement
        const halfWidth = el.scrollWidth / 2;
        if (scrollPos >= halfWidth) {
          scrollPos -= halfWidth;
        }
        el.scrollLeft = scrollPos;
      } else if (el) {
        scrollPos = el.scrollLeft;
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isScrollingPaused]);

  return (
    <section id="media-coverage" className="border-b border-[#172A4A]/10 bg-white py-14">
      <div className="mx-auto w-full max-w-6xl px-4 text-left">
        {/* Section Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E30620] text-white text-xs font-black">
              ★
            </span>
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#E30620]">
              {lang === 'mr' ? 'वृत्तपत्र व मीडिया कव्हरेज' : 'PRESS & MEDIA COVERAGE'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#172A4A]">
            {lang === 'mr' ? 'प्रमुख वृत्तपत्रांमधील बातम्या व प्रसिद्धी' : 'Leading News Outlets on Lokshahi Press Federation'}
          </h2>
          <p className="mt-1 text-xs text-[#172A4A]/70 font-medium">
            {lang === 'mr'
              ? 'देशभरातील प्रतिष्ठित वृत्तपत्रे, वृत्तसंस्था व वृत्तवाहिन्यांनी घेतलेली महासंघाच्या कार्याची दखल.'
              : 'National and regional press coverage chronicling our campaigns, conventions, and media rights advocacy.'}
          </p>
        </div>

        {/* Continuous Smooth Auto-Scroller of Cards */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 select-none touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {scrollArticles.map((article, idx) => (
            <article
              key={`${article.id}-${idx}`}
              className="w-[270px] sm:w-80 h-72 sm:h-80 shrink-0 bg-white p-4 sm:p-5 rounded-2xl border-2 border-[#172A4A]/15 shadow-xs flex flex-col justify-between"
            >
              {/* 1. Only Date at top */}
              <div className="flex items-center justify-between pb-3 border-b border-[#172A4A]/10 text-xs">
                <span className="font-bold text-[#172A4A] tracking-wide text-xs sm:text-sm">
                  {lang === 'mr' ? article.dateMr : article.dateEn}
                </span>
                <span className="text-[10px] font-bold text-[#E30620] uppercase bg-[#E30620]/5 px-2 py-0.5 rounded border border-[#E30620]/20">
                  {article.source}
                </span>
              </div>

              {/* Press clipping image */}
              <div className="my-3 flex-1 min-h-[140px] overflow-hidden rounded-xl border border-[#172A4A]/15 bg-[#F7F3EC]">
                <img
                  src={clippingImages[article.id - 1] ?? clippingImages[0]}
                  alt={lang === 'mr' ? `${article.source} मधील बातमी` : `Press coverage from ${article.source}`}
                  className="h-full w-full object-cover object-top"
                  loading={idx < realPressClippings.length ? 'eager' : 'lazy'}
                />
              </div>

              <h3 className="line-clamp-2 text-sm font-black leading-snug text-[#172A4A]">
                {lang === 'mr' ? article.headlineMr : article.headlineEn}
              </h3>

              {/* Coverage label */}
              <div
                className="pt-3 border-t border-[#172A4A]/10 w-full flex items-center justify-between text-xs font-black text-[#E30620] cursor-default select-none pointer-events-none"
                aria-disabled="true"
              >
                <span className="tracking-wide">
                  {lang === 'mr' ? 'सविस्तर बातमी वाचा' : 'Read Full Coverage'}
                </span>
                <span className="text-base" aria-hidden="true">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
