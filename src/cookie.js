(function () {
    'use strict';

    /**
     * 内部方法：使用原始字符串设置cookie
     * @param {string} cookieStr cookie设置字符串
     */
    function _setCookie(cookieStr) {
        document.cookie = cookieStr;
    }

    /**
     * 设置cookie
     * @param {string} cookie_name cookie名
     * @param {*} cookie_val cookie值
     * @param {*} opts cookie参数
     */
    function set(cookie_name, cookie_val, opts) {
        var expiredays = opts.expiredays,
            expiresDate = new Date();

        expiresDate.setDate(expiresDate.getDate() + (expiredays ? expiredays : 0));

        _setCookie(
            cookie_name +
            '=' +
            cookie_val +
            (expiredays ? 'expires=' + expiresDate.toGMTString() : ''));
    }

    /**
     * 获取特定cookie的值
     * @param {string} cookie_name cookie名
     * @return {string} cookie值
     */
    function get(cookie_name) {
        var cookie = document.cookie,
            c_start = cookie.indexOf(cookie_name),
            c_end,
            c_extend;

        if (c_start === -1) {
            return undefined;
        }

        c_end = cookie.indexOf(';', c_start);
        c_extend = cookie.indexOf(':', c_start);

        if (c_extend !== -1) {
            c_end = Math.min(c_end, c_extend);
        }

        return cookie.substring(c_start, c_end);
    }
    // TODO
    function getAll(cookie_name) {

    }


    function remove(cookie_name) {
        set(cookie_name,get(cookie_name),{
            expiredays: -1
        })
    }

    var Cookie = {
        set: set,
        get: get,
        remove: remove
    };

    window.Cookie = Cookie;
})();