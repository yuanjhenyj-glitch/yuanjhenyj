元眞覺修道場｜網站網址修正

問題：
網站目前頁面內使用相對網址（例如 share.html、chaoshan.html）。
當瀏覽器或 GitHub Pages 快取把目前頁面解析成 github.io/yuanjhenyj/ 路徑時，
可能導致點擊後跳到錯誤的 GitHub Pages 網址並出現 404。

修法：
1. 把 nav-fix.js 上傳到 GitHub 專案根目錄。
2. 在以下 HTML 檔案的 </body> 前加入：
   <script src="nav-fix.js"></script>

建議至少加入：
index.html
about.html
share.html
share01.html
share02.html
share03.html
chaoshan.html
donate.html
contact.html

修正後所有站內主要頁面都會強制使用：
https://yuanjhenyj.com.tw/

因此：
首頁      -> https://yuanjhenyj.com.tw/
道場介紹  -> https://yuanjhenyj.com.tw/about.html
心得分享  -> https://yuanjhenyj.com.tw/share.html
心得01    -> https://yuanjhenyj.com.tw/share01.html
心得02    -> https://yuanjhenyj.com.tw/share02.html
心得03    -> https://yuanjhenyj.com.tw/share03.html
朝山活動  -> https://yuanjhenyj.com.tw/chaoshan.html
捐款專區  -> https://yuanjhenyj.com.tw/donate.html
聯絡我們  -> https://yuanjhenyj.com.tw/contact.html

不會修改外部網站、電話、Email 或頁面錨點連結。

注意：
這個修正不需要改 CNAME，也不會改你的網站內容。
