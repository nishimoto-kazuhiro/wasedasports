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

// 画面遷移警告
document.addEventListener('DOMContentLoaded', () => {
  let isInputChanged = false;

  // 1. input や textarea などの入力変更を検知
  const inputs = document.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      isInputChanged = true; // 入力されたらフラグをオン
    });
  });

  // 2. ページ離脱（リロードや遷移）の時に警告を表示
  window.addEventListener('beforeunload', (event) => {
    if (isInputChanged) {
      // ブラウザに標準警告を出させるための必須処理
      event.preventDefault();
      event.returnValue = ''; // 一部のブラウザ（Chrome等）で必要
    }
  });

  // 3. フォーム送信時（保存など）は警告を出さないようにする処理
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', () => {
      isInputChanged = false; // 送信時はフラグをオフにして警告をスキップ
    });
  }
});


// はてなボタンの設定
function toggleHelp(id) {
  var el = document.getElementById(id);
  if (!el) return;
  
  // 非表示なら表示、表示中なら非表示に切り替え
  if (el.style.display === "none" || el.style.display === "") {
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}