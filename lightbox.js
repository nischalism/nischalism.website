(function(){
  const backdrop = document.getElementById('lb-backdrop');
  const frame = document.getElementById('lb-frame');
  const img = document.getElementById('lb-image');
  const cap = document.getElementById('lb-caption');
  const closeBtn = document.getElementById('lb-close');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  function openLightbox(src, title){
    img.src = src;
    img.alt = title || '';
    cap.textContent = title || '';
    backdrop.hidden = false;
    frame.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox(){
    frame.hidden = true;
    backdrop.hidden = true;
    img.src = '';
    document.body.style.overflow = '';
  }
  document.addEventListener('click', (e)=>{
    const a = e.target.closest('a.lightbox');
    if(a){
      e.preventDefault();
      openLightbox(a.getAttribute('href'), a.dataset.title);
    }
  });
  backdrop.addEventListener('click', closeLightbox);
  closeBtn.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') closeLightbox();
  });
})();