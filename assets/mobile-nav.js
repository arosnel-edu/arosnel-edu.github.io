/* FYRE mobile menu: builds the hamburger button and handles open/close */
(function () {
  var nav = document.querySelector('nav');
  var links = nav && nav.querySelector('.nav-links');
  if (!nav || !links) return;

  var btn = document.createElement('button');
  btn.className = 'fyre-burger';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Open menu');
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML = '<span></span><span></span><span></span>';
  nav.appendChild(btn);

  function setOpen(open) {
    document.body.classList.toggle('fyre-menu-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  btn.addEventListener('click', function () {
    setOpen(!document.body.classList.contains('fyre-menu-open'));
  });

  links.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) setOpen(false);
  });
})();
