// langsung eksekusi begitu di-download
document.documentElement.classList.add('loading');

const loadPartial = (url, selector) =>
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load ${url}`);
      return res.text();
    })
    .then(html => {
      document.querySelector(selector).innerHTML = html;
    });

Promise.all([
  loadPartial('partials/header.html', '#header'),
  loadPartial('partials/footer.html', '#footer')
])
  .catch(console.error)
  .finally(() => {
    // tampilkan halaman setelah semua partial di-inject
    document.documentElement.classList.remove('loading');
  });
