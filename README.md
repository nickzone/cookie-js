cookiejs ：a simple cookie framework
===========================

Api
---
### set specific cookie with opitions (设置cookie)

```js
Cookies.set(cookieName, cookieVal, opts)
```
  opts 参数

```js
{
  expiredays: 'days number'         // 过期时间（天），如果没有定义，cookie会在对话结束时过期 
  path：'path'                      // (例如 '/', '/mydir') 如果没有定义，默认为当前文档位置的路径。
  maxAge：'max-age-in-seconds'      // (例如一年为60*60*24*365)
  domain:'domain'                   // (例如 'example.com'， '.example.com' (包括所有子域名))
}
```

### get specific cookie value or all cookies in a object (获取cookie)

```js
Cookies.get(cookieName)　// 获取指定cookie
Cookie.get() // 获取cookie　键值对
```

### remove specific cookie　(删除cookie)

```js
Cookie.remove(cookieName)
```
