

; (function (window) {
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
        var exs = [],
            cookieStr;

        if (opts) {
            if (opts.expiredays) {
                var expiresDate = new Date();

                expiresDate.setDate(expiresDate.getDate() + opts.expiredays);
                exs.push(['expires', expiresDate.toGMTString()].join('='));
            }else if(opts.path) {
                exs.push(['path',opts.path].join('='));
            }
        }

        cookieStr = cookie_name + '=' + cookie_val + ';' + exs.join(';');
        _setCookie(cookieStr);
    }

    /**
     * 获取cookie
     * @param {string} cookie_name cookie名
     * @return {string} cookie值
     */
    function get(cookie_name) {
        var cookie = document.cookie,
            c_start = cookie.indexOf(cookie_name),
            v_start,
            c_end;

        if (c_start === -1) {
            return undefined;
        }

        v_start = cookie.indexOf('=', c_start) + 1;
        c_end = cookie.indexOf(';', c_start) > 0 ? cookie.indexOf(';', c_start) : cookie.length;

        return cookie.substring(v_start, c_end);
    }

    /**
     * 删除cookie
     * @param {string} cookie_name 需要删除的cookie名
     */
    function remove(cookie_name) {
        set(cookie_name, get(cookie_name), {
            expiredays: -1
        });
    }

    var Cookies = {
        set: set,
        get: get,
        remove: remove
    };

    window.Cookies = Cookies;
})(window);