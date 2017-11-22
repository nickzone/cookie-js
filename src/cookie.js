

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
     * @param {string} cookieName cookie名
     * @param {*} cookieVal cookie值
     * @param {*} opts cookie参数
     */
    function set(cookieName, cookieVal, opts) {
        var cookieStr = [[cookieName,cookieVal].join('=')];
        
        if (opts) {
            if (opts.expiredays !== undefined) {
                var expiresDate = new Date();

                expiresDate.setDate(expiresDate.getDate() + opts.expiredays);
                cookieStr.push(['expires', expiresDate.toGMTString()].join('='));
            }
            
            if(opts.path) {
                cookieStr.push(['path',opts.path].join('='));
            }
            
            if(opts.maxAge) {
                cookieStr.push(['max-age',opts.maxAge].join('='));
            }
            
            if(opts.domain) {
                cookieStr.push(['domain',opts.domain].join('='));
            }
        }

        cookieStr = cookieStr.join(';') + ';';
        _setCookie(cookieStr);
    }

    /**
     * 获取cookie
     * @param {string} cookieName cookie名
     * @return {string} cookie值
     */
    function get(cookieName) {
        var cookie = document.cookie,
            c_start = cookie.indexOf(cookieName),
            v_start,
            c_end;

        if (c_start === -1) {
            return undefined;
        }

        v_start = cookie.indexOf('=', c_start) + 1;
        c_end = cookie.indexOf(';', c_start) > 0 ? cookie.indexOf(';', c_start) : cookie.length;

        return cookie.slice(v_start, c_end);
    }

    /**
     * 删除cookie
     * @param {string} cookieName 需要删除的cookie名
     */
    function remove(cookieName) {
        set(cookieName, get(cookieName), {
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
