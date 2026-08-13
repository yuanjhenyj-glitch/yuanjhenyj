/* 元眞覺修道場｜正式網址導覽修正
   作用：把網站內部 HTML 導覽統一導向正式網域，避免跳到 GitHub Pages 專案網址。
*/
(function () {
    "use strict";

    const SITE = "https://yuanjhenyj.com.tw/";

    const pages = {
        "": "index.html",
        "index.html": "index.html",
        "about.html": "about.html",
        "share.html": "share.html",
        "share01.html": "share01.html",
        "share02.html": "share02.html",
        "share03.html": "share03.html",
        "chaoshan.html": "chaoshan.html",
        "donate.html": "donate.html",
        "contact.html": "contact.html"
    };

    function getPageName(href) {
        try {
            const url = new URL(href, window.location.href);
            const path = url.pathname.replace(/\/+$/, "");
            const last = path.split("/").pop() || "index.html";
            return last.toLowerCase();
        } catch (e) {
            return null;
        }
    }

    function fixLinks() {
        document.querySelectorAll("a[href]").forEach(function (a) {
            const href = a.getAttribute("href");
            if (!href) return;

            // 保留外部網站、電話、Email、錨點等連結
            if (
                href.startsWith("#") ||
                href.startsWith("mailto:") ||
                href.startsWith("tel:") ||
                href.startsWith("javascript:") ||
                /^https?:\/\//i.test(href) && !href.includes("github.io")
            ) return;

            const page = getPageName(href);
            if (page && pages[page]) {
                a.href = SITE + pages[page];
            }
        });
    }

    // 載入頁面時先修正一次
    fixLinks();

    // 某些瀏覽器/快取環境會稍後改寫 DOM，再補一次
    window.addEventListener("load", fixLinks);

    // 防止點擊時仍使用舊的 GitHub Pages 路徑
    document.addEventListener("click", function (event) {
        const a = event.target.closest("a[href]");
        if (!a) return;

        const page = getPageName(a.href);
        if (page && pages[page]) {
            const target = SITE + pages[page];

            // 只攔截網站內頁，避免影響外部連結
            if (a.href !== target) {
                event.preventDefault();
                window.location.href = target;
            }
        }
    }, true);
})();
