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
     * 添加trim 支持
     */
    if (!String.prototype.trim) {
        String.prototype.trim = function () {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        };
    }

    /**
     * 设置cookie
     * @param {string} cookieName cookie名
     * @param {*} cookieVal cookie值
     * @param {*} opts cookie参数
     */
    function set(cookieName, cookieVal, opts) {
        var cookieStr = [[cookieName, cookieVal].join('=')];

        if (opts) {
            if (opts.expiredays !== undefined) {
                var expiresDate = new Date();

                expiresDate.setDate(expiresDate.getDate() + opts.expiredays);
                cookieStr.push(['expires', expiresDate.toGMTString()].join('='));
            }

            if (opts.path) {
                cookieStr.push(['path', opts.path].join('='));
            }

            if (opts.maxAge) {
                cookieStr.push(['max-age', opts.maxAge].join('='));
            }

            if (opts.domain) {
                cookieStr.push(['domain', opts.domain].join('='));
            }
        }

        cookieStr = cookieStr.join(';') + ';';
        _setCookie(cookieStr);
    }

    /**
     * 获取cookie
     * @param {string} cookieName cookie名
     * @return {string} cookie值（字符串、对象）
     */
    function get(cookieName) {
        var cookieStr = document.cookie;

        if (cookieName) {
            var c_start = cookieStr.indexOf(cookieName),
                v_start,
                c_end;

            if (c_start === -1) {
                return undefined;
            }

            v_start = cookieStr.indexOf('=', c_start) + 1;
            c_end = cookieStr.indexOf(';', c_start) > 0 ? cookieStr.indexOf(';', c_start) : cookieStr.length;

            return cookieStr.slice(v_start, c_end);

        } else {
            var cookies = cookieStr.split(';'),
                cookieObj = {},
                cookie, name, val;

            if (cookies[0].length === 0) {
                return null;
            }

            for (var i = 0; i < cookies.length; i++) {
                cookie = cookies[i].split('=');
                name = cookie[0].trim();
                val = cookie[1];

                cookieObj[name] = val;
            }

            return cookieObj;
        }
    }

    /**
     * 删除cookie
     * @param {string} cookieName 需要删除的cookie名
     */
    function remove(cookieName) {
        set(cookieName, ' ', {
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
