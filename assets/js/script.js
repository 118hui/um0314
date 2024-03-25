'use strict';

/**
 * navbar toggle in mobile
 */

const /** {NodeElement} */ $navbar = document.querySelector('[data-navbar]');
const /** {NodeElement} */ $navToggler = document.querySelector('[data-nav-toggler]');

$navToggler.addEventListener('click', () => $navbar.classList.toggle('active'));

/**
 * Header scroll state 先不使用這效果
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

document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton');
    const toastContainer = document.querySelector('.toast-container');

    submitButton.addEventListener('click', function(e) {
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





// 系統檢核是否具有會員資格
document.getElementById('checkMembershipBtn').addEventListener('click', function() {
    // 發送檢核會員資格的請求
    // 可以使用 fetch 或 XMLHttpRequest 等方式向後端發送請求，接收後端的回應
    fetch('/check-membership', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // 可以傳遞相關的資料，例如會員資料等
            })
        })
        .then(response => response.json())
        .then(data => {
            // 根據後端返回的結果執行相應的操作，例如顯示提示信息或跳轉頁面等
            if (data.isMember) {
                alert('您已具有會員資格！');
            } else {
                alert('您尚未具有會員資格，請先註冊或登入！');
                // 可以進行跳轉至註冊或登入頁面等操作
            }
        })
        .catch(error => {
            console.error('檢核會員資格時發生錯誤：', error);
        });
});



// 系統檢核是否填過諮詢表單
document.getElementById('checkConsultationFormBtn').addEventListener('click', function() {
    // 發送檢核填過諮詢表單的請求
    // 可以使用 fetch 或 XMLHttpRequest 等方式向後端發送請求，接收後端的回應
    fetch('/check-consultation-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // 可以傳遞相關的資料，例如表單資料等
            })
        })
        .then(response => response.json())
        .then(data => {
            // 根據後端返回的結果執行相應的操作，例如顯示提示信息或跳轉頁面等
            if (data.hasFilledForm) {
                alert('您已填過諮詢表單！');
            } else {
                alert('您尚未填過諮詢表單，請先填寫！');
                // 可以進行跳轉至填寫表單頁面等操作
            }
        })
        .catch(error => {
            console.error('檢核填過諮詢表單時發生錯誤：', error);
        });
});



// 系統檢核是否完成匯款
document.getElementById('checkPaymentCompletionBtn').addEventListener('click', function() {
    // 發送檢核完成匯款的請求
    // 可以使用 fetch 或 XMLHttpRequest 等方式向後端發送請求，接收後端的回應
    fetch('/check-payment-completion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // 可以傳遞相關的資料，例如匯款資訊等
            })
        })
        .then(response => response.json())
        .then(data => {
            // 根據後端返回的結果執行相應的操作，例如顯示提示信息或跳轉頁面等
            if (data.hasCompletedPayment) {
                alert('您已完成匯款！');
            } else {
                alert('您尚未完成匯款，請確認後再操作！');
                // 可以進行相應的操作，例如重新填寫匯款資訊等
            }
        })
        .catch(error => {
            console.error('檢核完成匯款時發生錯誤：', error);
        });
});


//首頁搜尋
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 防止表單默認提交行為

    const form = event.target;
    const wantTo = form.querySelector('[name="want-to"]').value;
    const propertyType = form.querySelector('[name="property-type"]').value;

    // 構建目標 HTML 頁面的文件名
    let targetPage = '';

    if (wantTo === 'buy' && propertyType === 'any') {
        targetPage = 'dog_1.html';
    } else if (wantTo === 'sell' && propertyType === 'houses') {
        targetPage = 'target_page_2.html';
    }
    // 添加更多條件或設置其他目標頁面的文件名

    // 導向至目標頁面
    window.location.href = targetPage;
});