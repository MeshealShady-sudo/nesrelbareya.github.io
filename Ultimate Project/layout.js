// ===== SHARED LAYOUT: header, footer, whatsapp float =====
// Usage: call NESR_renderLayout('home'|'menu'|'gallery'|'order'|'blank') on each page
// before script.js runs (or DOMContentLoaded), passing which nav link is "current".

function NESR_renderLayout(currentPage){
  const logo = (typeof NESR_ASSETS !== 'undefined') ? NESR_ASSETS.logo : '';

  const navItems = [
    { href: 'index.html', label: 'الرئيسية', key: 'home' },
    { href: 'blank.html', label: 'صفحة جديدة', key: 'blank' },
    { href: 'menu.html', label: 'المنيو', key: 'menu' },
    { href: 'gallery.html', label: 'صورنا', key: 'gallery' },
    { href: 'order.html', label: 'اطلب دلوقتي', key: 'order' },
  ];

  const navLinksHTML = navItems.map(item => {
    const cls = item.key === currentPage ? ' class="current"' : '';
    return `<a href="${item.href}"${cls}>${item.label}</a>`;
  }).join('\n');

  const headerHTML = `
  <div class="topbar">
    <div class="marquee" id="marquee">
      <span>أكتر من 6 آلاف عضو في جروبنا</span>
      <span>أكل بيتي طازة كل يوم</span>
      <span>اطلب من غير ما تطبخ</span>
      <span>نسر البرية للأكل الجاهز</span>
      <span>أكتر من 6 آلاف عضو في جروبنا</span>
      <span>أكل بيتي طازة كل يوم</span>
      <span>اطلب من غير ما تطبخ</span>
      <span>نسر البرية للأكل الجاهز</span>
    </div>
  </div>
  <header>
    <div class="nav">
      <a href="index.html" class="brand">
        <img src="${logo}">
        <div class="brand-name">نسر البرية<small>للأكل الجاهز</small></div>
      </a>

      <nav class="nav-links" id="navLinks">
        ${navLinksHTML}
      </nav>

      <div class="nav-right">
        <button class="theme-toggle" id="themeToggle" aria-label="تبديل الوضع الليلي">
          <svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
          <svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>
        </button>
        <button class="burger" id="burgerBtn" aria-label="فتح القائمة">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>`;

  const footerHTML = `
  <footer>
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-brand">
            <img src="${logo}">
            <b>نسر البرية للأكل الجاهز</b>
          </div>
          <p>أكل بيتي طازة، جاهز على طول لبيتك. بنطبخ يوميًا بمكونات مختارة عشان نوصلك أحسن طعم.</p>
          <div class="footer-social">
            <a href="https://www.facebook.com/groups/558806414271710/" target="_blank" rel="noopener" aria-label="فيسبوك">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z"/></svg>
            </a>
            <a href="https://wa.me/201090213723" target="_blank" rel="noopener" aria-label="واتساب">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Z"/></svg>
            </a>
          </div>
        </div>
        <div class="footer-col">
          <h5>روابط سريعة</h5>
          <ul>
            <li><a href="index.html">الرئيسية</a></li>
            <li><a href="menu.html">المنيو</a></li>
            <li><a href="gallery.html">صورنا</a></li>
            <li><a href="order.html">اطلب دلوقتي</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>المنيو</h5>
          <ul>
            <li><a href="menu.html#chicken">دجاج ولحوم</a></li>
            <li><a href="menu.html#produce">خضار طازة</a></li>
            <li><a href="menu.html#sides">أصناف جاهزة</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>تواصل معانا</h5>
          <p>واتساب: 01090213723<br>متاحين يوميًا من 11 ص لـ 12 م</p>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 نسر البرية للأكل الجاهز. جميع الحقوق محفوظة.</span>
        <span>صُمم بحب لعشاق الأكل الجاهز 🦅</span>
      </div>
    </div>
  </footer>

  <a href="https://wa.me/201090213723" target="_blank" rel="noopener" class="wa-float" aria-label="تواصل واتساب">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.6.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5C10.1 9 9.6 7.7 9.4 7.2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3Z"/><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.3c-1.6 0-3.1-.4-4.5-1.2l-.3-.2-3.1.8.8-3-.2-.3a8.3 8.3 0 1 1 7.3 3.9Z"/></svg>
  </a>`;

  const headerMount = document.getElementById('siteHeader');
  const footerMount = document.getElementById('siteFooter');
  if(headerMount) headerMount.innerHTML = headerHTML;
  if(footerMount) footerMount.innerHTML = footerHTML;
}
