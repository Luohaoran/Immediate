//cookie
function setCookie(key, value, day) {

    if (day !== 0) {
        var expires = day * 24 * 60 * 60 * 1000;
        var date = new Date(+new Date() + expires);
        document.cookie =`${key}=${escape(value)};expires=${date.toUTCString()}`
    } else {
        document.cookie = `${key}=${escape(value)}`;
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
//session
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
function delSession(key) {
    sessionStorage.removeItem(key)
}
//local
function setLocal(key,val) {
    localStorage.setItem(key,JSON.stringify(val))
}
function getLocal(key) {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (err) {
        return localStorage.getItem(key);
    }

}
function delLocal(key) {
    localStorage.removeItem(key);
}
export default {
    setSession:setSession,
    getSession:getSession,
    delSession:delSession,
    setCookie: setCookie,
    getCookie: getCookie,
    delCookie: delCookie,
    getLocal:getLocal,
    setLocal:setLocal,
    delLocal:delLocal,
}
