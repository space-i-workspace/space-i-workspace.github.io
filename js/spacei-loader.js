(function(){
  // Google Fonts
  var font = document.createElement('link');
  font.rel = 'stylesheet';
  font.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800;900&display=swap';
  document.head.appendChild(font);

  // CSS
  var s = document.createElement('style');
  s.textContent = `
/* ===== 리셋 & 기본 ===== */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
* { font-family: 'Noto Sans KR', sans-serif; }
body { line-height: 1.5; -webkit-text-size-adjust: 100%; word-break: keep-all; }
a { color: inherit; text-decoration: none; }
img, svg, video { display: block; max-width: 100%; height: auto; }
button { font-family: inherit; cursor: pointer; }
table { border-collapse: collapse; }
h1,h2,h3,h4,h5,h6 { font-size: inherit; font-weight: inherit; }
ul, ol { list-style: none; }
input, button, textarea, select { font: inherit; }

/* ===== 색상 변수 ===== */
:root {
  --navy: #1B2A4A;
  --navy-light: #2A3F6A;
  --navy-dark: #111D35;
  --gold: #C8A96E;
  --gold-light: #D4BC8A;
  --gold-dark: #B08D4A;
  --emerald: #10B981;
  --slate-50: #f8fafc;
  --slate-100: #f1f5f9;
  --slate-200: #e2e8f0;
  --slate-300: #cbd5e1;
  --slate-400: #94a3b8;
  --slate-500: #64748b;
  --slate-700: #334155;
  --slate-800: #1e293b;
}

/* ===== 레이아웃 유틸리티 ===== */
.si-container { max-width: 72rem; margin-left: auto; margin-right: auto; padding-left: 1rem; padding-right: 1rem; }
.si-container-lg { max-width: 72rem; margin-left: auto; margin-right: auto; padding-left: 1rem; padding-right: 1rem; }
.si-container-md { max-width: 56rem; margin-left: auto; margin-right: auto; padding-left: 1rem; padding-right: 1rem; }
.si-container-sm { max-width: 48rem; margin-left: auto; margin-right: auto; padding-left: 1rem; padding-right: 1rem; }
.si-container-xs { max-width: 32rem; margin-left: auto; margin-right: auto; padding-left: 1rem; padding-right: 1rem; }
.si-max-w-3xl { max-width: 48rem; margin-left: auto; margin-right: auto; }
.si-max-w-4xl { max-width: 56rem; margin-left: auto; margin-right: auto; }
.si-max-w-5xl { max-width: 64rem; margin-left: auto; margin-right: auto; }
.si-max-w-2xl { max-width: 42rem; margin-left: auto; margin-right: auto; }
.si-max-w-lg { max-width: 32rem; margin-left: auto; margin-right: auto; }
.si-max-w-xl { max-width: 36rem; }

/* ===== Flexbox 유틸리티 ===== */
.si-flex { display: flex; }
.si-flex-col { display: flex; flex-direction: column; }
.si-flex-row { display: flex; flex-direction: row; }
.si-flex-wrap { display: flex; flex-wrap: wrap; }
.si-flex-center { display: flex; align-items: center; justify-content: center; }
.si-flex-between { display: flex; align-items: center; justify-content: space-between; }
.si-items-center { align-items: center; }
.si-items-start { align-items: flex-start; }
.si-items-end { align-items: flex-end; }
.si-items-stretch { align-items: stretch; }
.si-justify-center { justify-content: center; }
.si-justify-between { justify-content: space-between; }
.si-flex-1 { flex: 1 1 0%; }
.si-flex-shrink-0 { flex-shrink: 0; }
.si-inline-flex { display: inline-flex; align-items: center; }

/* ===== Grid 유틸리티 ===== */
.si-grid { display: grid; }
.si-grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
.si-grid-3 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); }
.si-grid-4 { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); }

/* ===== 텍스트 유틸리티 ===== */
.si-text-center { text-align: center; }
.si-text-left { text-align: left; }
.si-text-right { text-align: right; }
.si-font-black { font-weight: 900; }
.si-font-extrabold { font-weight: 800; }
.si-font-bold { font-weight: 700; }
.si-font-semibold { font-weight: 600; }
.si-font-medium { font-weight: 500; }
.si-uppercase { text-transform: uppercase; }
.si-whitespace-nowrap { white-space: nowrap; }
.si-leading-tight { line-height: 1.25; }
.si-leading-relaxed { line-height: 1.625; }
.si-leading-none { line-height: 1; }
.si-tracking-wide { letter-spacing: 0.025em; }
.si-tracking-widest { letter-spacing: 0.1em; }

/* ===== 위치 ===== */
.si-relative { position: relative; }
.si-absolute { position: absolute; }
.si-fixed { position: fixed; }
.si-inset-0 { position: absolute; top: 0; right: 0; bottom: 0; left: 0; }
.si-z-10 { z-index: 10; }
.si-z-20 { z-index: 20; }
.si-z-50 { z-index: 50; }

/* ===== 표시/숨김 ===== */
.si-hidden { display: none; }
.si-block { display: block; }
.si-inline-block { display: inline-block; }
.si-overflow-hidden { overflow: hidden; }
.si-overflow-x-auto { overflow-x: auto; }

/* ===== 이미지 ===== */
.si-object-cover { width: 100%; height: 100%; object-fit: cover; }
.si-object-contain { width: 100%; height: 100%; object-fit: contain; }
.si-aspect-4-3 { aspect-ratio: 4/3; }

/* ===== 둥근 모서리 ===== */
.si-rounded { border-radius: 0.25rem; }
.si-rounded-lg { border-radius: 0.5rem; }
.si-rounded-xl { border-radius: 0.75rem; }
.si-rounded-2xl { border-radius: 1rem; }
.si-rounded-full { border-radius: 9999px; }

/* ===== 그림자 ===== */
.si-shadow-sm { box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); }
.si-shadow { box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1); }
.si-shadow-lg { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1); }
.si-shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }

/* ===== 트랜지션 ===== */
.si-transition { transition: all 0.3s ease; }
.si-transition-transform { transition: transform 0.3s ease; }
.si-transition-colors { transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease; }
.si-hover-scale:hover { transform: scale(1.05); }
.si-hover-scale-110:hover { transform: scale(1.1); }

/* ===== 애니메이션 ===== */
@keyframes bounce {
  0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
  50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); }
}
.si-animate-bounce { animation: bounce 1s infinite; }

/* ===== 스크롤 애니메이션 ===== */
.fade-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}
.fade-up-delay-1 { transition-delay: 0.15s; }
.fade-up-delay-2 { transition-delay: 0.3s; }
.fade-up-delay-3 { transition-delay: 0.45s; }

/* ===== 히어로 섹션 ===== */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.hero-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url('https://space-i-workspace.github.io/assets/images/p35_main.jpg') 30% center/cover no-repeat;
}
.hero-section::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(17,29,53,0.35) 0%, rgba(17,29,53,0.6) 40%, rgba(17,29,53,0.9) 100%);
}

/* ===== CTA 골드 버튼 ===== */
.cta-gold {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 20px 48px;
  border-radius: 100px;
  font-weight: 800;
  font-size: 1.2rem;
  color: #1B2A4A;
  background: linear-gradient(180deg, #F5E6A3 0%, #D4B96E 40%, #C8A96E 60%, #E8D49A 100%);
  border: 2px solid #B08D4A;
  box-shadow: 0 0 0 3px rgba(200,169,110,0.25), 0 6px 24px rgba(200,169,110,0.4), inset 0 1px 0 rgba(255,255,255,0.4);
  transition: all 0.3s ease;
  text-decoration: none;
}
.cta-gold:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 0 3px rgba(200,169,110,0.35), 0 10px 36px rgba(200,169,110,0.55), inset 0 1px 0 rgba(255,255,255,0.4);
}
.cta-gold svg { width: 22px; height: 22px; flex-shrink: 0; }

/* CTA 펄스 애니메이션 + 손가락 이모지 */
@keyframes ctaPulse {
  0%, 100% { box-shadow: 0 0 0 3px rgba(200,169,110,0.25), 0 6px 24px rgba(200,169,110,0.4), inset 0 1px 0 rgba(255,255,255,0.4); }
  50% { box-shadow: 0 0 0 8px rgba(200,169,110,0.15), 0 6px 32px rgba(200,169,110,0.6), inset 0 1px 0 rgba(255,255,255,0.4); }
}
.si-cta-pulse { animation: ctaPulse 2s ease-in-out infinite; }
.si-cta-pulse:hover { animation: none; }
@keyframes fingerTap {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(4px) scale(0.92); }
}
.si-finger {
  font-size: 2.8em;
  display: inline-block;
  animation: fingerTap 0.9s ease-in-out infinite !important;
  margin-left: 10px;
  vertical-align: -0.45em;
}

/* ===== 3초 간편문의 버튼 ===== */
.quick-btn {
  position: fixed;
  top: 12px;
  right: 20px;
  z-index: 9998;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 24px;
  border-radius: 100px;
  font-weight: 800;
  font-size: 0.85rem;
  color: #1B2A4A;
  background: linear-gradient(180deg, #F5E6A3 0%, #D4B96E 40%, #C8A96E 60%, #E8D49A 100%);
  border: 2px solid #B08D4A;
  box-shadow: 0 0 0 2px rgba(200,169,110,0.2), 0 4px 16px rgba(200,169,110,0.35), inset 0 1px 0 rgba(255,255,255,0.4);
  text-decoration: none;
  transform: translateY(-80px);
  opacity: 0;
  transition: transform 0.4s ease, opacity 0.4s ease;
  pointer-events: none;
}
.quick-btn.visible {
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
}
.quick-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 0 2px rgba(200,169,110,0.3), 0 8px 24px rgba(200,169,110,0.5), inset 0 1px 0 rgba(255,255,255,0.4);
}
.quick-btn.visible:hover {
  transform: translateY(-2px);
}

/* ===== 가격 섹션 ===== */
.price-section {
  background: linear-gradient(135deg, #111D35 0%, #1B2A4A 50%, #2A3F6A 100%);
}

/* ===== 구분선 ===== */
.gold-divider {
  width: 60px; height: 3px;
  background: linear-gradient(90deg, #C8A96E, #B08D4A);
  border-radius: 2px; margin: 0 auto;
}

/* ===== 체크 아이템 ===== */
.check-item { display: flex; align-items: center; gap: 16px; font-size: 1.3rem; font-weight: 600; }
.check-icon {
  width: 36px; height: 36px; background: #10b981; color: white;
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-size: 0.9rem; font-weight: 800; flex-shrink: 0;
}

/* ===== POINT 카드 ===== */
.point-tag { background: #2D5016; color: white; font-size: 0.7rem; font-weight: 700; padding: 5px 14px; border-radius: 6px; letter-spacing: 0.5px; }
.point-card { background: white; border-radius: 16px; overflow: hidden; border: 1px solid rgba(0,0,0,0.06); transition: all 0.4s cubic-bezier(0.25,0.46,0.45,0.94); }
.point-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(27,42,74,0.12); border-color: rgba(200,169,110,0.3); }
.point-card .img-wrap { overflow: hidden; }
.point-card img { transition: transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94); }
.point-card:hover img { transform: scale(1.05); }

/* ===== 프로세스 아이콘 ===== */
.process-icon {
  width: 64px; height: 64px; background: rgba(27,42,74,0.05);
  border-radius: 16px; display: flex; align-items: center; justify-content: center;
  margin: 0 auto 12px;
}

/* ===== 스플릿 섹션 ===== */
.split-section { display: grid; grid-template-columns: 1fr 1fr; min-height: 600px; }
.split-section .story-img { overflow: hidden; }
.split-section .story-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94); }
.split-section .story-img:hover img { transform: scale(1.05); }

/* ===== 풀 이미지 오버레이 섹션 ===== */
.photo-section { position: relative; overflow: hidden; }
.photo-section-bg { position: absolute; inset: 0; }
.photo-section-bg img { width: 100%; height: 100%; object-fit: cover; }
.photo-section-overlay { position: absolute; inset: 0; }

/* ===== 태그 알약 ===== */
.tag-pill { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 100px; font-size: 0.8rem; font-weight: 600; }

/* ===== FAQ ===== */
.faq-item { background: white; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; transition: box-shadow 0.3s ease; }
.faq-item:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
.faq-question {
  width: 100%; display: flex; align-items: center; justify-content: space-between;
  padding: 1.25rem 1.5rem; background: none; border: none; cursor: pointer;
  font-size: 1.2rem; font-weight: 600; color: #1B2A4A; text-align: left;
  font-family: inherit; gap: 1rem;
}
.faq-question:hover { background: rgba(27,42,74,0.02); }
.faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.35s ease, padding 0.35s ease; padding: 0 1.5rem; }
.faq-answer p { color: #6b7280; font-size: 1.1rem; line-height: 1.7; }
.faq-item.open .faq-answer { max-height: 300px; padding: 0 1.5rem 1.25rem; }
.faq-item.open .faq-arrow { transform: rotate(180deg); }

/* ===== 비교표 ===== */
.compare-table { width: 100%; border-collapse: separate; border-spacing: 0; }
.compare-table th, .compare-table td { padding: 20px 24px; text-align: center; font-size: 1.25rem; font-weight: 600; }
.compare-table thead th { background: #1B2A4A; color: white; font-weight: 800; font-size: 1.4rem; }
.compare-table thead th:first-child { background: #2A3F6A; border-radius: 12px 0 0 0; }
.compare-table thead th:last-child {
  background: linear-gradient(135deg, #C8A96E, #B08D4A); color: #1B2A4A;
  font-size: 1.6rem; border-radius: 0 12px 0 0; position: relative;
  border-top: 3px solid #ef4444; border-left: 3px solid #ef4444; border-right: 3px solid #ef4444;
  animation: pulseGlow 2s ease-in-out infinite;
}
.compare-table tbody tr { border-bottom: 1px solid #e2e8f0; }
.compare-table tbody tr:hover { background: #f8fafc; }
.compare-table tbody td:first-child { font-weight: 700; color: #1B2A4A; text-align: left; font-size: 1.25rem; }
.compare-table tbody td:last-child { color: #C8A96E; font-weight: 800; font-size: 1.25rem; position: relative; border-left: 3px solid #ef4444; border-right: 3px solid #ef4444; background: rgba(239,68,68,0.03); }
.compare-table tbody td { border-bottom: 1px solid #e2e8f0; }
.compare-table tbody tr:last-child td:last-child { border-bottom: 3px solid #ef4444; }

@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 -4px 12px rgba(239,68,68,0.15), 4px 0 12px rgba(239,68,68,0.15), -4px 0 12px rgba(239,68,68,0.15); }
  50% { box-shadow: 0 -4px 24px rgba(239,68,68,0.4), 4px 0 24px rgba(239,68,68,0.4), -4px 0 24px rgba(239,68,68,0.4); }
}

/* ===== 통계 ===== */
.stat-number { font-size: 2.5rem; font-weight: 900; line-height: 1; }

/* ===== 캐러셀 ===== */
.carousel-track { display: flex; transition: transform 0.5s ease-in-out; }
.carousel-slide { flex-shrink: 0; width: 100%; }
.carousel-slide img { width: 100%; display: block; }
.carousel-prev, .carousel-next {
  position: absolute; top: 50%; transform: translateY(-50%);
  width: 4rem; height: 4rem; border-radius: 9999px;
  background: white; border: 2px solid var(--slate-200);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; z-index: 10; transition: all 0.3s ease;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
}
.carousel-prev { left: -2rem; }
.carousel-next { right: -2rem; }
.carousel-prev:hover, .carousel-next:hover { background: var(--navy); color: white; border-color: var(--navy); }
.carousel-prev svg, .carousel-next svg { width: 2rem; height: 2rem; }
.carousel-dots { display: flex; justify-content: center; gap: 0.625rem; margin-top: 1.5rem; }
.carousel-dots button {
  width: 0.75rem; height: 0.75rem; border-radius: 9999px;
  border: none; cursor: pointer; transition: all 0.3s ease; padding: 0;
}
.carousel-dot-active { background: var(--navy); transform: scale(1.1); }
.carousel-dot-inactive { background: var(--slate-300); }

/* ===== 골드 텍스트 그라디언트 ===== */
.si-gold-gradient-text {
  background: linear-gradient(180deg, #F5E6A3 0%, #C8A96E 50%, #B08D4A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ===== 스트라이크 ===== */
.si-strikethrough {
  position: relative;
  display: inline-block;
}
.si-strikethrough::after {
  content: '';
  position: absolute;
  left: -6px;
  right: -6px;
  top: 50%;
  height: 3px;
  background: #ef4444;
  transform: rotate(-8deg);
}

/* ===== 프로모션 카드 ===== */
.promo-card-pair {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 0;
  max-width: 42rem;
  margin: 0 auto;
}
.promo-card {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 1.75rem 2rem;
}
.promo-card-left {
  border-radius: 1rem 1rem 0 0;
  border-bottom: none;
}
.promo-card-right {
  border-radius: 0 0 1rem 1rem;
  border-top: none;
}
.promo-divider-h { height: 1px; background: rgba(255,255,255,0.1); }
.promo-divider-v { width: 1px; background: rgba(255,255,255,0.1); display: none; }

/* ===== 뱃지 ===== */
.si-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.6);
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
}

/* ===== 프로세스 카드 ===== */
.si-process-card {
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  padding: 1.5rem 2rem;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
}
.si-process-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 2px solid #C8A96E;
}
.si-process-icon svg { width: 2rem; height: 2rem; color: #C8A96E; }

/* ===== 리뷰 카드 ===== */
.si-review-card {
  position: relative;
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1);
}
.si-review-card::after {
  content: '';
  position: absolute;
  bottom: -0.75rem;
  left: 2.5rem;
  width: 1.5rem;
  height: 1.5rem;
  background: white;
  transform: rotate(45deg);
  box-shadow: 3px 3px 3px rgba(0,0,0,0.04);
}

/* ===== 스튜디오 feature 카드 ===== */
.si-feature-card {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 0.75rem;
  padding: 2rem;
  text-align: center;
}

/* ===== 문서 비교 카드 ===== */
.si-doc-card {
  flex: 1;
  max-width: 320px;
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  height: 100%;
}
.si-doc-line { height: 0.5rem; background: var(--slate-100); border-radius: 0.25rem; }
.si-doc-highlight {
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  margin-bottom: 0.75rem;
  background: #FFF8E1;
  border: 1px solid #FFE082;
}
.si-stamp {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -75%);
}
.si-stamp-inner {
  width: 6rem; height: 6rem;
  border-radius: 9999px;
  border: 4px solid #ef4444;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.8);
}
.si-equal-circle {
  width: 3.5rem; height: 3.5rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #C8A96E, #B08D4A);
  border: 2px solid #D4BC8A;
}
.si-match-banner {
  position: relative;
  margin-top: -1.5rem;
  z-index: 20;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
}
.si-match-banner-inner {
  display: inline-block;
  border-radius: 0.75rem;
  padding: 1rem 2.2rem;
  text-align: center;
  background: rgba(255,107,107,0.15);
  border: 3px solid #E53E3E;
  box-shadow: inset 0 0 0 2px transparent, 0 0 0 1px rgba(229,62,62,0.3);
  transform: rotate(-2deg);
  opacity: 1;
}
.si-match-banner-inner p {
  color: #FFFFFF !important;
  font-size: 1.15rem !important;
  font-weight: 900 !important;
  letter-spacing: 0.05em !important;
  text-shadow: none;
}

/* ===== 협약 이미지 카드 ===== */
.si-corebiz-card {
  max-width: 32rem;
  margin: 0 auto;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
  border: 1.5px solid rgba(200,169,110,0.3);
}
.si-corebiz-card img { width: 100%; display: block; }

/* ===== 방패 ===== */
.si-shield-wrapper {
  position: relative;
  z-index: 20;
  display: flex;
  justify-content: center;
  margin-bottom: -36px;
}
.si-shield-svg { filter: drop-shadow(0 0 12px rgba(200,169,110,0.3)); }

/* ===== 소유주 직영 카드 ===== */
.si-owner-card {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  border: 1.5px solid rgba(255,255,255,0.18);
}
.si-owner-card-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
}
.si-owner-card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15,20,35,0.75);
}
.si-owner-card-content {
  position: relative;
  z-index: 10;
  padding: 4rem 2rem 3rem;
}

/* ===== 소통 배경 장식 ===== */
.si-decoration {
  position: absolute;
  color: rgba(255,255,255,0.07);
}

/* ===== 장식 라인 ===== */
.si-gold-line-left {
  position: absolute;
  top: 50%;
  left: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(200,169,110,0.5));
}
.si-gold-line-right {
  position: absolute;
  top: 50%;
  right: 0;
  height: 1px;
  background: linear-gradient(to left, transparent, rgba(200,169,110,0.5));
}

/* ===== 전국최저가 배너 ===== */
.si-ribbon-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  max-width: 36rem;
  margin: 0 auto;
  padding: 0.5rem 0;
}
.si-ribbon-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, #C8A96E);
}
.si-ribbon-line-r {
  background: linear-gradient(90deg, #C8A96E, transparent);
}
.si-ribbon-text {
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: 900;
  letter-spacing: 0.15em;
  background: linear-gradient(180deg, #F5E6A3 0%, #C8A96E 50%, #B08D4A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  white-space: nowrap;
}
.si-ribbon-sparkle {
  position: absolute;
  color: #E8D49A;
  z-index: 3;
  animation: sparkle 2.5s ease-in-out infinite;
  text-shadow: 0 0 8px rgba(200,169,110,0.6);
}
.si-ribbon-sparkle-tl { top: -0.5rem; left: 8%; font-size: 0.9rem; }
.si-ribbon-sparkle-tr { top: -0.3rem; right: 10%; font-size: 0.7rem; animation-delay: 0.8s; }
.si-ribbon-sparkle-bl { bottom: -0.3rem; left: 18%; font-size: 0.6rem; animation-delay: 1.6s; }
.si-ribbon-sparkle-br { bottom: -0.5rem; right: 15%; font-size: 0.85rem; animation-delay: 1.2s; }
@keyframes sparkle {
  0%, 100% { opacity: 0.3; transform: scale(0.7); }
  50% { opacity: 1; transform: scale(1.3); }
}

/* ===== 최종 CTA 버튼 ===== */
.si-final-cta-btn {
  flex: 1;
  min-width: 10rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.25rem 2rem;
  border-radius: 0.75rem;
  font-weight: 800;
  font-size: clamp(1.125rem, 2.5vw, 1.375rem);
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
}
.si-final-cta-btn:hover { opacity: 0.9; transform: translateY(-2px); }

/* ===== 감사 랜딩 페이지 ===== */
.si-thankyou {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(ellipse at 50% 40%, #1B2A4A 0%, #0D1829 70%);
  padding: 3rem 1rem;
}
.si-thankyou-card {
  max-width: 42rem;
  width: 100%;
  padding: 4rem 3rem 3rem;
  border-radius: 1.25rem;
  background: linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%);
  border: 1.5px solid rgba(200,169,110,0.3);
  box-shadow: 0 0 80px rgba(200,169,110,0.1), 0 0 30px rgba(200,169,110,0.05), inset 0 1px 0 rgba(255,255,255,0.08);
  text-align: center;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
.si-thankyou-check {
  width: 5.5rem; height: 5.5rem;
  border: 3px solid #C8A96E;
  border-radius: 9999px;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 2.5rem;
  background: rgba(13,24,41,0.8);
  box-shadow: 0 0 30px rgba(200,169,110,0.25), 0 0 60px rgba(200,169,110,0.1);
}
.si-thankyou-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 700;
  font-size: 1.05rem;
  text-decoration: none;
  transition: all 0.3s ease;
  flex: 1;
  min-width: 0;
}
.si-thankyou-btn:hover { transform: translateY(-2px); }
.si-thankyou-btn-gold {
  background: linear-gradient(180deg, #F5E6A3 0%, #D4B96E 40%, #C8A96E 60%, #E8D49A 100%);
  color: #1B2A4A;
  border: none;
}
.si-thankyou-btn-dark {
  background: transparent;
  color: white;
  border: 1.5px solid rgba(255,255,255,0.3);
}
.si-thankyou-btn-dark:hover { border-color: rgba(255,255,255,0.6); }

/* ===== 후기 밑줄 애니메이션 ===== */
.si-underline {
  background-image: linear-gradient(180deg, rgba(200,169,110,0.35) 0%, rgba(200,169,110,0.35) 100%);
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 0% 40%;
  transition: background-size 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  padding-bottom: 2px;
  font-weight: 700;
  color: #1B2A4A;
}
.visible .si-underline,
.si-review-card.visible .si-underline {
  background-size: 100% 40%;
}

/* ===== 필(pill) 스크롤 버튼 ===== */
.si-pill-btn {
  display: inline-block;
  padding: 1rem 3rem;
  border-radius: 9999px;
  background: rgba(27,42,74,0.85);
  color: rgba(255,255,255,0.8);
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  border: 1.5px solid rgba(255,255,255,0.15);
  transition: all 0.3s ease;
  letter-spacing: 0.02em;
}
.si-pill-btn:hover {
  background: rgba(27,42,74,1);
  border-color: rgba(255,255,255,0.3);
  color: white;
  transform: translateY(-2px);
}
.si-pill-btn-3d {
  display: inline-block;
  padding: 1.1rem 3.5rem;
  border-radius: 9999px;
  background: linear-gradient(180deg, #2a3f66 0%, #1B2A4A 100%);
  color: rgba(255,255,255,0.9);
  font-size: 1.125rem;
  font-weight: 700;
  text-decoration: none;
  border: 1.5px solid rgba(255,255,255,0.12);
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.03em;
  box-shadow: 0 4px 15px rgba(27,42,74,0.4), 0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
}
.si-pill-btn-3d:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(27,42,74,0.5), 0 3px 6px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.15);
}
.si-pill-btn-3d:active {
  transform: translateY(1px);
  box-shadow: 0 2px 8px rgba(27,42,74,0.3), inset 0 1px 3px rgba(0,0,0,0.2);
}

/* ===== 접기/펼치기 ===== */
.si-collapse {
  overflow: hidden;
  height: 0;
  transition: height 0.5s ease;
}
.si-thankyou-btns {
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
}
@media (max-width: 480px) {
  .si-thankyou-btns { flex-direction: column; }
  .si-thankyou-card { padding: 3rem 1.5rem 2.5rem; }
  .si-hero-title { font-size: 1.6rem !important; }
  .si-doc-card { padding: 1.2rem 0.75rem !important; }
  .si-doc-card p { font-size: 0.9rem !important; }
  .si-doc-highlight { padding: 0.5rem 0.5rem !important; }
  .si-doc-highlight p { font-size: 0.8rem !important; }
  .si-stamp-inner { width: 4rem !important; height: 4rem !important; }
  .si-stamp-inner span { font-size: 1rem !important; }
  .si-equal-circle { width: 2.2rem !important; height: 2.2rem !important; }
  .si-equal-circle span { font-size: 0.9rem !important; }
}

/* ===== 카카오 플로팅 ===== */

/* ===== CTA 버튼 그룹 ===== */
.si-cta-group { display: flex; flex-direction: column; gap: 1rem; justify-content: center; }
.si-cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  text-decoration: none;
  border: none;
}
.si-cta-btn:hover { box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }
.si-cta-btn svg { width: 1.5rem; height: 1.5rem; }

/* ===== 체크 리스트 아이템 (상주매니저) ===== */
.si-check-circle {
  width: 3rem; height: 3rem;
  background: #dcfce7;
  color: #059669;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  flex-shrink: 0;
}

/* ===== 미팅룸 태그 ===== */
.si-room-tag {
  padding: 0.25rem 0.75rem;
  background: rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.8);
  border-radius: 9999px;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid rgba(255,255,255,0.2);
}

/* ===== 카페 라운지 feature ===== */
.si-lounge-icon {
  width: 2.5rem; height: 2.5rem;
  background: var(--slate-100);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.si-lounge-icon svg { width: 1.25rem; height: 1.25rem; color: var(--navy); }

/* ===== 기업 로고 아이템 ===== */
.si-logo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s ease;
}
.si-logo-item:hover { transform: scale(1.05); }
.si-logo-box {
  width: 4rem; height: 4rem;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}
.si-logo-box img { width: 100%; height: 100%; }

/* ===== 상단 네비 ===== */
.si-topnav {
  background: var(--navy-dark);
  color: rgba(255,255,255,0.8);
  font-size: 0.875rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  position: relative;
  z-index: 60;
}
.si-topnav-inner {
  max-width: 72rem;
  margin: 0 auto;
  padding: 0.625rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}
.si-topnav a { font-weight: 500; white-space: nowrap; transition: color 0.2s ease; }
.si-topnav a:hover { color: var(--gold); }
.si-topnav-divider { color: rgba(255,255,255,0.2); }

/* ===== 말풍선 (상주매니저 실제 회원 사례) ===== */
.si-speech-bubble {
  position: absolute;
  top: 2rem;
  left: 1.5rem;
  z-index: 20;
  max-width: 340px;
}
.si-speech-bubble-inner {
  position: relative;
  background: white;
  border-radius: 50px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
  padding: 1.5rem 2rem;
}
.si-speech-bubble-tail {
  position: absolute;
  top: -0.6rem;
  right: 2rem;
  left: auto;
  width: 1.5rem;
  height: 1.5rem;
  background: white;
  transform: rotate(45deg);
  box-shadow: -2px -2px 3px rgba(0,0,0,0.04);
}

/* ===== 빌딩 배경 (신뢰 섹션) ===== */
.si-building-bg {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 45%;
  opacity: 0.4;
  overflow: hidden;
}
.si-building-bg img { width: 100%; height: 100%; object-fit: cover; }
.si-building-overlay {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 45%;
  background: linear-gradient(to bottom, rgba(15,26,46,0.4), rgba(27,42,74,0.5), #1B2A4A);
}

/* ===== 서비스 체크 카드 ===== */
.si-service-check-card {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 1rem;
  padding: 3rem 3.5rem;
}
.si-service-check-card .check-item + .check-item { margin-top: 1.75rem; }

/* ===== 지도 섹션 ===== */
.si-map-card {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  border: 1px solid var(--slate-100);
  overflow: hidden;
}
.si-map-iframe { height: 16rem; background: var(--slate-200); position: relative; }
.si-map-iframe iframe { position: absolute; inset: 0; border: 0; }

/* ===== 장식 원형 블러 ===== */
.si-blur-circle {
  position: absolute;
  border-radius: 9999px;
  filter: blur(64px);
}

/* ===== V 구분선 ===== */
.si-v-divider {
  display: flex;
  align-items: flex-start;
  width: 100%;
}
.si-v-divider-line {
  flex: 1;
  height: 2px;
  margin-top: 1px;
}

/* ===== 모바일 말풍선 ===== */
.si-mobile-bubble {
  margin-top: 2.5rem;
  padding: 1.25rem;
  background: var(--slate-50);
  border-radius: 0.75rem;
  border: 1px solid var(--slate-100);
  display: none;
}

/* ===== 반응형 ===== */
@media (min-width: 640px) {
  .promo-card-pair { flex-direction: row; }
  .promo-card-left {
    border-radius: 1rem 0 0 1rem;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    border-right: none;
  }
  .promo-card-right {
    border-radius: 0 1rem 1rem 0;
    border-top: 1px solid rgba(255,255,255,0.1);
    border-left: none;
  }
  .promo-divider-h { display: none; }
  .promo-divider-v { display: block; }
  .si-cta-group { flex-direction: row; }
  .si-grid-sm-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}

@media (min-width: 768px) {
  .si-md-grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .si-md-grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .si-md-grid-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .si-md-grid-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
  .si-md-flex-row { flex-direction: row; }
  .si-md-block { display: block; }
  .si-md-hidden { display: none; }
  .si-md-items-center { align-items: center; }
  .si-md-justify-between { justify-content: space-between; }
  .si-md-order-1 { order: 1; }
  .si-md-order-2 { order: 2; }
  .si-speech-bubble { max-width: 400px; }
  .si-shield-wrapper { margin-bottom: -42px; }
  .si-owner-card-content { padding: 5rem 3.5rem 4rem; }
  .si-map-iframe { height: 20rem; }
  .carousel-prev { left: -5rem; width: 5rem; height: 5rem; }
  .carousel-next { right: -5rem; width: 5rem; height: 5rem; }
  .carousel-prev svg, .carousel-next svg { width: 2.5rem; height: 2.5rem; }
  .si-stamp-inner { width: 7rem; height: 7rem; }
  .si-equal-circle { width: 4rem; height: 4rem; }
  .si-doc-card { padding: 2rem; }
  .si-mobile-bubble { display: none !important; }
}

@media (max-width: 767px) {
  .split-section { grid-template-columns: 1fr; min-height: auto; }
  .hero-section { min-height: 100svh; }
  .si-service-split { flex-direction: column !important; gap: 2rem !important; }
  .si-speech-bubble { max-width: 220px; top: auto; bottom: 1.5rem; left: 1rem; }
  .si-speech-bubble-inner { padding: 0.875rem 1.125rem; border-radius: 1.25rem; }
  .si-speech-bubble-inner p:first-child { font-size: 0.625rem; margin-bottom: 0.25rem; }
  .si-speech-bubble-inner p:last-child { font-size: 0.8rem; }
  .si-speech-bubble-tail { top: -0.5rem; left: auto; right: 1.5rem; transform: rotate(45deg); width: 1.2rem; height: 1.2rem; box-shadow: -2px -2px 3px rgba(0,0,0,0.04); }
  html, body { overflow-x: hidden !important; }
  #footer { overflow-x: hidden !important; }
  #footer * { max-width: 100vw !important; box-sizing: border-box !important; }
  .compare-table { table-layout: fixed; width: 100%; }
  .compare-table th, .compare-table td { padding: 12px 8px !important; font-size: 0.85rem !important; }
  .compare-table thead th { font-size: 0.95rem !important; }
}

/* ===== 카페24 기본 요소 숨김 ===== */
#skipNavigation, #header, #sidebar, #quick, hr.layout,
.layer_shadow, #layoutDimmed,
.smart-banner, [class*="smart-banner"], [data-banner-code],
.xans-layout-banner, .xans-layout-logotop,
.xans-product-listmain, .xans-layout-category,
.section.main_product_category,
#topBanner, .topbanner_area, .top_banner,
.xans-layout-sticker, .sticker, [class*="sticker"],
.xans-layout-headerbot, .xans-layout-headertop,
div[class*="top_banner"], div[class*="topbanner"],
div[class*="announce"], div[class*="notice_bar"],
#kakao-talk-channel-chat-button, .kakao_chat_btn,
#channel-chat-button-iframe, .BtnKakao,
div[id*="channel-chat"], iframe[title*="카카오"],
div[id*="kakao"], iframe[id*="kakao"],
a[id*="kakao-talk"], div[class*="kakao_chat"],
#kakao-talk-channel-chat-button-wrapper,
iframe[src*="kakao"], div[data-channel-public-id],
div[class*="kakao"], a[class*="kakao"],
div[id*="kakao-talk"], div[id*="KakaoTalk"],
img[src*="kakao"], div[style*="kakao"],
[data-kakao], [class*="Kakao"], [id*="Kakao"],
.xans-layout-boardlist, .xans-board-listpackage,
.aside_customer, [class*="customer_"], [class*="boardList"],
.xans-layout-popup, .popup_wrap, .pop_footer,
div[class*="popup"], div[class*="layer_popup"],
.xans-product-popup, .modal_popup { display: none !important; }

/* 모바일 하단 네비 검색/장바구니 숨김 */
.RTMB a[href*="search"], .RTMB a[href*="cart"],
.RTMB a[href*="basket"], .RTMB a[href*="order"],
[class*="toolbar"] a[href*="search"], [class*="toolbar"] a[href*="cart"],
[class*="toolbar"] a[href*="basket"],
nav a[href*="search"], nav a[href*="cart"], nav a[href*="basket"],
.xans-layout-mobileaction a[href*="search"],
.xans-layout-mobileaction a[href*="cart"],
.xans-layout-mobileaction a[href*="basket"],
.xans-layout-mobileaction li:nth-child(2),
.RTMB li:nth-child(2),
[class*="toolbar"] li:nth-child(2),
[class*="bottom"] a[href*="search"],
[class*="bottom"] li:nth-child(2),
[id*="bottom"] a[href*="search"],
[id*="bottom"] li:nth-child(2),
#aside_bottom a[href*="search"],
#aside_bottom li:nth-child(2),
.tnb_area a[href*="search"],
.tnb_area li:nth-child(2),
[class*="tnb"] a[href*="search"],
[class*="tnb"] li:nth-child(2),
[class*="fixed"] a[href*="search"],
[class*="fixed"] li:nth-child(2) { display: none !important; }

/* 모바일 하단 네비 균등 배치 + 홈 가운데 */
.RTMB, .xans-layout-mobileaction, [class*="toolbar"],
#quick_menu, .mobile_footer, #mobile_footer {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
.RTMB > *, .xans-layout-mobileaction > *,
[class*="toolbar"] > * {
  flex: 1 !important;
  text-align: center !important;
}

/* 스크롤 화살표(위/아래) 표시 유지 */

/* ===== 우리 카카오 버튼 ===== */
.si-kakao-float {
  position: fixed;
  bottom: 3.5rem;
  right: 1rem;
  z-index: 9999;
  transition: all 0.3s ease;
}
.si-kakao-float:hover { transform: scale(1.08); }
.si-kakao-float img {
  width: 4rem;
  height: 4rem;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.15));
}

/* 카페24 기본 레이아웃 제한 해제 */
#wrap, #container, #contents {
  width: 100% !important;
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
  float: none !important;
  overflow: visible !important;
}
body {
  background: #ffffff !important;
  margin: 0 !important;
  padding: 0 !important;
}

/* ===== 푸터 표시 & SNS 아이콘 ===== */
#footer { display: block !important; }

.si-sns-icons {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  padding: 1rem 1rem 2rem;
  background: #f9f9f9;
}
.si-sns-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none !important;
  cursor: pointer;
}
.si-sns-item:hover .si-sns-icon { transform: scale(1.12); }
.si-sns-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: #1B2A4A;
  color: #fff;
  transition: all 0.3s ease;
}
.si-sns-icon svg {
  width: 1.5rem;
  height: 1.5rem;
  fill: currentColor;
}
.si-sns-label {
  font-size: 0.75rem;
  font-weight: 500;
  color: #666;
  letter-spacing: 0.02em;
}
.si-sns-instagram .si-sns-icon { background: linear-gradient(135deg, #833AB4, #E1306C, #F77737); }
.si-sns-instagram:hover .si-sns-icon { background: linear-gradient(135deg, #6C2E9A, #C4245A, #D96528); }
.si-sns-youtube .si-sns-icon { background: #FF0000; }
.si-sns-youtube:hover .si-sns-icon { background: #CC0000; }
.si-sns-kakao .si-sns-icon { background: #FEE500; }
.si-sns-kakao .si-sns-icon svg { fill: #3C1E1E; }
.si-sns-kakao:hover .si-sns-icon { background: #E5CF00; }
.si-sns-blog .si-sns-icon { background: #03C75A; }
.si-sns-blog:hover .si-sns-icon { background: #02B351; }
`;
  document.head.appendChild(s);

  // SNS 텍스트 링크 → 아이콘 변환
  var snsIcons = {
    instagram: '<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
    kakao: '<svg viewBox="0 0 24 24"><path d="M12 3c-5.523 0-10 3.582-10 8 0 2.847 1.893 5.34 4.735 6.756-.21.776-.756 2.813-.867 3.246-.138.54.198.533.417.388.171-.114 2.734-1.857 3.841-2.61.598.088 1.218.134 1.874.134 5.523 0 10-3.582 10-8s-4.477-8-10-8z"/></svg>',
    blog: '<svg viewBox="0 0 24 24"><path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/></svg>'
  };

  function transformSnsLinks() {
    var footer = document.getElementById('footer');
    if (!footer) return;

    var snsContainer = footer.querySelector('.sns, .snsArea, [class*="sns"], [class*="Sns"]');
    if (!snsContainer) {
      var links = footer.querySelectorAll('a');
      for (var i = 0; i < links.length; i++) {
        var t = (links[i].textContent || '').trim().toLowerCase();
        if (t === 'instagram' || t === 'youtube' || t === 'kakao' || t === 'blog' ||
            t === '인스타그램' || t === '유튜브' || t === '카카오' || t === '블로그') {
          snsContainer = links[i].parentElement;
          if (snsContainer.tagName === 'LI') snsContainer = snsContainer.parentElement;
          break;
        }
      }
    }
    if (!snsContainer) return;

    var found = {};
    snsContainer.querySelectorAll('a').forEach(function(a) {
      var txt = (a.textContent || '').trim().toLowerCase();
      var href = a.href || '#';
      if (txt.indexOf('instagram') !== -1 || txt.indexOf('인스타') !== -1) found.instagram = href;
      else if (txt.indexOf('youtube') !== -1 || txt.indexOf('유튜브') !== -1) found.youtube = href;
      else if (txt.indexOf('kakao') !== -1 || txt.indexOf('카카오') !== -1) found.kakao = href;
      else if (txt.indexOf('blog') !== -1 || txt.indexOf('블로그') !== -1) found.blog = href;
    });

    var labels = { instagram: 'Instagram', youtube: 'YouTube', kakao: 'KakaoTalk', blog: 'Blog' };
    var iconWrap = document.createElement('div');
    iconWrap.className = 'si-sns-icons';
    ['instagram','youtube','kakao','blog'].forEach(function(key) {
      if (!found[key]) return;
      var a = document.createElement('a');
      a.href = found[key];
      a.target = '_blank';
      a.rel = 'noopener';
      a.className = 'si-sns-item si-sns-' + key;
      a.innerHTML = '<span class="si-sns-icon">' + snsIcons[key] + '</span><span class="si-sns-label">' + labels[key] + '</span>';
      iconWrap.appendChild(a);
    });

    if (iconWrap.children.length > 0) {
      footer.parentElement.insertBefore(iconWrap, footer);
      snsContainer.style.display = 'none';
    }
  }

  // 3초 간편문의 버튼 스크롤 시 노출
  function initQuickBtn() {
    var btn = document.querySelector('.quick-btn');
    if (!btn) return;
    var threshold = window.innerHeight * 0.5;
    window.addEventListener('scroll', function() {
      if (window.scrollY > threshold) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });
  }

  // 모바일 하단 네비 검색 숨김 + 홈 가운데
  function hideBottomNavItems() {
    var allLinks = document.querySelectorAll('a');
    allLinks.forEach(function(a) {
      var href = (a.href || '').toLowerCase();
      if (href.indexOf('search') !== -1 || href.indexOf('cart') !== -1 || href.indexOf('basket') !== -1) {
        a.style.setProperty('display', 'none', 'important');
        if (a.parentElement) {
          a.parentElement.style.setProperty('display', 'none', 'important');
          if (a.parentElement.parentElement && a.parentElement.tagName === 'LI') {
            a.parentElement.style.setProperty('display', 'none', 'important');
          }
        }
      }
    });
    document.querySelectorAll('svg').forEach(function(svg) {
      var parent = svg.closest('a');
      if (parent) {
        var href = (parent.href || '').toLowerCase();
        if (href.indexOf('search') !== -1) {
          parent.style.setProperty('display', 'none', 'important');
          if (parent.parentElement) parent.parentElement.style.setProperty('display', 'none', 'important');
        }
      }
    });
  }
  setTimeout(hideBottomNavItems, 1500);

  function restoreScroll() {
    var saved = sessionStorage.getItem('siScrollY');
    if (saved) {
      sessionStorage.removeItem('siScrollY');
      var target = parseInt(saved);
      [150, 400, 800, 1500].forEach(function(d) {
        setTimeout(function() { window.scrollTo(0, target); }, d);
      });
    }
  }
  window.addEventListener('pageshow', function(e) { if (e.persisted) restoreScroll(); });

  document.addEventListener('click', function(e) {
    var link = e.target.closest('a[href*="thankyou"]');
    if (link) {
      try { sessionStorage.setItem('siScrollY', window.scrollY); } catch(err) {}
    }
  }, true);

  function killKakaoFloat() {
    var sels = [
      '#kakao-talk-channel-chat-button', '#kakao-talk-channel-chat-button-wrapper',
      '#channel-chat-button-iframe', '.kakao_chat_btn', '.BtnKakao',
      'iframe[src*="kakao"]', 'iframe[title*="카카오"]',
      'div[data-channel-public-id]', '[data-kakao]'
    ];
    var q = sels.join(',');
    document.querySelectorAll(q).forEach(function(el) { el.remove(); });
    document.querySelectorAll('div, iframe, a').forEach(function(el) {
      var id = (el.id || '').toLowerCase();
      var cls = (el.className || '').toString().toLowerCase();
      var src = (el.src || el.href || '').toLowerCase();
      if ((id.indexOf('kakao') !== -1 && id.indexOf('si-') === -1) ||
          (cls.indexOf('kakao') !== -1 && cls.indexOf('si-') === -1) ||
          src.indexOf('developers.kakao.com') !== -1 ||
          src.indexOf('channel-chat') !== -1) {
        el.remove();
      }
    });
  }

  function cleanFooterThankyou() {
    var footer = document.getElementById('footer');
    if (!footer) return;
    var ty = footer.querySelector('.si-thankyou, .si-thankyou-card');
    if (ty) {
      var section = ty.closest('section') || ty.closest('.si-thankyou') || ty;
      section.remove();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      transformSnsLinks();
      initQuickBtn();
      restoreScroll();
      killKakaoFloat();
      cleanFooterThankyou();
      setTimeout(killKakaoFloat, 1000);
      setTimeout(killKakaoFloat, 3000);
      setTimeout(killKakaoFloat, 5000);
    });
  } else {
    transformSnsLinks();
    initQuickBtn();
    restoreScroll();
    killKakaoFloat();
    cleanFooterThankyou();
    setTimeout(killKakaoFloat, 1000);
    setTimeout(killKakaoFloat, 3000);
    setTimeout(killKakaoFloat, 5000);
  }
})();
