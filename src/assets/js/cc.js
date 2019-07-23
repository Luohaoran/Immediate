function setCookie(key, value, day) {
    if (day !== 0) {
        var expires = day * 24 * 60 * 60 * 1000;
        var date = new Date(+new Date() + expires);
        document.cookie = key + "=" + escape(value) + ";expires=" + date.toUTCString();
    } else {
        document.cookie = key + "=" + escape(value);
    }
}
function getCookie(key) {
    var arr;
    var reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
function delCookie(key) {
    setCookie(key, ' ', -1);
}
function setSession(key, val) {
    sessionStorage.setItem(key, JSON.stringify(val))
}
function getSession(key) {
    try {
        return JSON.parse(sessionStorage.getItem(key));
    } catch (err) {
        return sessionStorage.getItem(key);
    }
}
export default {
    setSession:setSession,
    getSession:getSession,
    delSession() {
        localStorage.clear();
    },
    setCookie: setCookie,
    getCookie: getCookie,
    delCookie: delCookie,
}
