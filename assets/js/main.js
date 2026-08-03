// =============================
// ===ヘッダー用スクリプト==========
// =============================
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('js-hamburger');
  const nav = document.getElementById('js-nav');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
  });

  // メニュー内のリンクをクリックした時に自動で閉じる処理
  const navLinks = nav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('is-active');
      nav.classList.remove('is-active');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const main = document.querySelector('main'); // mainタグがない場合は表示領域のクラス名に変更

  function adjustMainPadding() {
    if (header && main) {
      // ヘッダーの実際の高さを取得
      const headerHeight = header.offsetHeight;
      // mainの上部余白に設定
      main.style.paddingTop = headerHeight + 'px';
    }
  }

  // ページ読み込み時と画面サイズ変更時に実行
  adjustMainPadding();
  window.addEventListener('resize', adjustMainPadding);
});