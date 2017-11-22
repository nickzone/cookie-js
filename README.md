cookiejs 一个简单的cookie框架
===========================

Api
---

### 设置cookie
```js
Cookies.set(cookieName, cookieVal, opts)
```
opts 可取值
```js
{
  expiredays: 'days number'         // 过期时间（天），如果没有定义，cookie会在对话结束时过期 
  path：'path'                      // (例如 '/', '/mydir') 如果没有定义，默认为当前文档位置的路径。
  maxAge：'max-age-in-seconds'      // (例如一年为60*60*24*365)
  domain:'domain'                   // (例如 'example.com'， '.example.com' (包括所有子域名))
}
```

### 获取cookie
```js
Cookies.get(cookieName)
```

### 删除cookie
```js
Cookie.remove(cookieName)
```
