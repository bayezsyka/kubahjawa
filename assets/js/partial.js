async function includeCommon() {
    // ambil common.html
    const resp = await fetch('common.html');
    const txt  = await resp.text();
    // buat container sementara
    const tmp = document.createElement('div');
    tmp.innerHTML = txt;
  
    // 1) Inject head‐tags ke <head>
    const headTags = tmp.querySelectorAll('meta, title, link, script');
    headTags.forEach(node => {
      // jangan inject ulang partials.js sendiri
      if (node.src && node.src.includes('partials.js')) return;
      document.head.appendChild(node.cloneNode(true));
    });
  
    // 2) Inject <nav> di paling atas <body>
    const nav = tmp.querySelector('nav');
    if (nav) document.body.insertBefore(nav.cloneNode(true), document.body.firstChild);
  
    // 3) Inject <footer> di akhir <body>
    const footer = tmp.querySelector('footer');
    if (footer) document.body.appendChild(footer.cloneNode(true));
  }
  
  // jalankan saat DOM siap
  document.addEventListener('DOMContentLoaded', includeCommon);
  