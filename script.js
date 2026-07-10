// ===== THEME (DARK MODE) =====
(function(){
  const root = document.documentElement;
  function applyTheme(mode){
    if(mode === 'dark'){ root.classList.add('dark'); }
    else { root.classList.remove('dark'); }
    try { localStorage.setItem('nesr-theme', mode); } catch(e){}
  }
  let saved = null;
  try { saved = localStorage.getItem('nesr-theme'); } catch(e){}
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));

  document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    if(themeToggle){
      themeToggle.addEventListener('click', () => {
        const isDark = root.classList.contains('dark');
        applyTheme(isDark ? 'light' : 'dark');
      });
    }

    // Mobile menu toggle
    const burger = document.getElementById('burgerBtn');
    const navLinks = document.getElementById('navLinks');
    if(burger && navLinks){
      burger.addEventListener('click', () => navLinks.classList.toggle('open'));
      navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => navLinks.classList.remove('open'));
      });
    }

    // Scroll reveal
    const revealEls = document.querySelectorAll('.reveal');
    if(revealEls.length){
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealEls.forEach(el => io.observe(el));
    }

    // Order form -> redirect to WhatsApp with prefilled message
    const orderForm = document.getElementById('orderForm');
    if(orderForm){
      const nameInput = orderForm.querySelector('input[name="fullName"]');
      const phoneInput = orderForm.querySelector('input[name="phone"]');

      if(nameInput){
        nameInput.addEventListener('input', () => {
          nameInput.value = nameInput.value.replace(/[^A-Za-z\u0621-\u064A ]+/g, '');
          nameInput.setCustomValidity('');
        });
        nameInput.addEventListener('invalid', () => {
          nameInput.setCustomValidity('اكتب حروف بس بالعربي أو الإنجليزي');
        });
      }
      if(phoneInput){
        phoneInput.addEventListener('input', () => {
          phoneInput.value = phoneInput.value.replace(/\D+/g, '');
          phoneInput.setCustomValidity('');
        });
        phoneInput.addEventListener('invalid', () => {
          phoneInput.setCustomValidity('اكتب أرقام بس');
        });
      }

      const orderInput = orderForm.querySelector('input[name="order"]');
      const notesTextarea = orderForm.querySelector('textarea[name="notes"]');
      const productName = new URLSearchParams(window.location.search).get('product');
      if(productName && orderInput && !orderInput.value.trim()){
        orderInput.value = productName;
      }

      orderForm.addEventListener('submit', (e) => {
        if(!orderForm.checkValidity()){
          e.preventDefault();
          orderForm.reportValidity();
          return;
        }

        e.preventDefault();
        const name = nameInput ? nameInput.value.trim() : '';
        const phone = phoneInput ? phoneInput.value.trim() : '';
        const address = orderForm.querySelector('input[name="address"]').value.trim();
        const order = orderInput ? orderInput.value.trim() : '';
        const notes = notesTextarea ? notesTextarea.value.trim() : '';
        const msg = `طلب جديد من موقع نسر البرية\nالاسم: ${name}\nالتليفون: ${phone}\nالعنوان: ${address}\nالطلب: ${order}\nملاحظات: ${notes}`;
        window.open(`https://wa.me/201090213723?text=${encodeURIComponent(msg)}`, '_blank');
      });
    }
  });
})();
