// loader handling
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById('site-loader') || document.querySelector('.loader-viewport') || document.getElementById('site-loader-mini');
  // fade out any loader elements if present
  const viewports = document.querySelectorAll('.loader-viewport, #site-loader, #site-loader-mini');
  viewports.forEach(vp => {
    vp.style.transition = 'opacity 0.6s ease';
    setTimeout(() => { vp.style.opacity = '0'; setTimeout(()=> vp.style.display = 'none', 650); }, 900);
  });

  // reveal observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

// smooth internal links (if any)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if (t) t.scrollIntoView({behavior:'smooth'});
  });
});

// contact form handler (client-side only)
function handleContact(e){
  e.preventDefault();
  // basic client-side acknowledgement (you can connect to backend or email service later)
  alert("✨ Thank you — your message has been received. I will respond shortly.");
  document.getElementById('contact-form')?.reset();
  return false;
}
