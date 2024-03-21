'use strict';

/**
 * navbar toggle in mobile
 */

const /** {NodeElement} */ $navbar = document.querySelector('[data-navbar]');
const /** {NodeElement} */ $navToggler = document.querySelector('[data-nav-toggler]');

$navToggler.addEventListener('click', () => $navbar.classList.toggle('active'));

/**
 * Header scroll state
 */

const /** {NodeElement} */ $header = document.querySelector('[data-header]');

window.addEventListener('scroll', (e) => {
  $header.classList[window.scrollY > 50 ? 'add' : 'remove']('active');
});

/**
 * Add to favorite button toggle
 */

const /** {NodeList} */ $toggleBtns = document.querySelectorAll('[data-toggle-btn]');

$toggleBtns.forEach(($toggleBtn) => {
  $toggleBtn.addEventListener('click', () => {
    $toggleBtn.classList.toggle('active');
  });
});
/**
 * 模擬登入
 */
let isLoggedIn = false;

function toggleLogin() {
  isLoggedIn = !isLoggedIn;
  const loginStatus = document.getElementById('loginStatus');
  const loginButton = document.getElementById('loginButton');

  if (isLoggedIn) {
    loginStatus.textContent = '已登入';
    loginButton.textContent = '登出';
  } else {
    loginStatus.textContent = '未登入';
    loginButton.textContent = '登入';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const submitButton = document.getElementById('submitButton');
  const toastContainer = document.querySelector('.toast-container');

  submitButton.addEventListener('click', function (e) {
    e.preventDefault(); // 防止點擊按鈕後跳轉頁面
    showToast('success', '成功！');
  });

  // 顯示 Toast
  function showToast(type, message) {
    const toast = document.createElement('div');
    toast.classList.add('toast', type);
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.display = 'none';
      toast.remove();
    }, 3000); // 3 秒後自動隱藏並移除
  }
});
