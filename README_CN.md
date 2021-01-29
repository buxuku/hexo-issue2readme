# hexo-issue2readme
[![NPM version](https://badge.fury.io/js/hexo-issue2readme.svg)](https://www.npmjs.com/package/hexo-issue2readme)

##### [English](./README.md)

把issue上面的文章生成到readme文档中

你可以把这个文档放置在你的仓库里

### 特性

* 自定义readme模板,使用的是nunjucks模板引擎
* 只生成指定含有指定标签的issue
* issue标签顺序可自定义

### 安装

```shell
npm i hexo-issue2readme -S
```

### 配置

修改或者添加以下配置在根目录的`_config.yml文件中`

```yaml
issue2readme:
  owner: buxuku # github 拥有者
  repo: github-api # github仓库名
  auth: xxxx # github auth token. 也可以通过环境变量 `process.env.GITHUB_TOKEN`来获取
  template: readme.njk # readme模板文件名, 默认: readme.njk
  labels: # 需要展示的标签数据,只有打了这些标签的issue才会展示到readme中
    - frontend
    - python
```

### 使用

```shell
hexo issue2readme
```


你需要创建一个模板文件放在hexo的根目录下面,在模板文件里,你可以使用`moment`方法,以及一个列表数据,列表数据大概长成这个样子
```json
[
  {
    "title": "前端",
    "list": [
      {
        "url": "https://api.github.com/repos/buxuku/github-api/issues/58",
        "repository_url": "https://api.github.com/repos/buxuku/github-api",
        "labels_url": "https://api.github.com/repos/buxuku/github-api/issues/58/labels{/name}",
        "comments_url": "https://api.github.com/repos/buxuku/github-api/issues/58/comments",
        "events_url": "https://api.github.com/repos/buxuku/github-api/issues/58/events",
        "html_url": "https://github.com/buxuku/github-api/issues/58",
        "id": 796102047,
        "node_id": "MDU6SXNzdWU3OTYxMDIwNDc=",
        "number": 58,
        "title": "正则表达式速记口诀",
        "user": {
          "login": "buxuku",
          "id": 7866330,
          "node_id": "MDQ6VXNlcjc4NjYzMzA=",
          "avatar_url": "https://avatars.githubusercontent.com/u/7866330?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/buxuku",
          "html_url": "https://github.com/buxuku",
          "followers_url": "https://api.github.com/users/buxuku/followers",
          "following_url": "https://api.github.com/users/buxuku/following{/other_user}",
          "gists_url": "https://api.github.com/users/buxuku/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/buxuku/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/buxuku/subscriptions",
          "organizations_url": "https://api.github.com/users/buxuku/orgs",
          "repos_url": "https://api.github.com/users/buxuku/repos",
          "events_url": "https://api.github.com/users/buxuku/events{/privacy}",
          "received_events_url": "https://api.github.com/users/buxuku/received_events",
          "type": "User",
          "site_admin": false
        },
        "labels": [
          {
            "id": 2695511444,
            "node_id": "MDU6TGFiZWwyNjk1NTExNDQ0",
            "url": "https://api.github.com/repos/buxuku/github-api/labels/Gitalk",
            "name": "Gitalk",
            "color": "ededed",
            "default": false,
            "description": null
          },
          {
            "id": 2695518869,
            "node_id": "MDU6TGFiZWwyNjk1NTE4ODY5",
            "url": "https://api.github.com/repos/buxuku/github-api/labels/regexp",
            "name": "regexp",
            "color": "ededed",
            "default": false,
            "description": null
          },
          {
            "id": 2695512777,
            "node_id": "MDU6TGFiZWwyNjk1NTEyNzc3",
            "url": "https://api.github.com/repos/buxuku/github-api/labels/%E5%89%8D%E7%AB%AF",
            "name": "前端",
            "color": "ededed",
            "default": false,
            "description": null
          }
        ],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [],
        "milestone": null,
        "comments": 0,
        "created_at": "2021-01-28T15:20:43Z",
        "updated_at": "2021-01-28T15:20:44Z",
        "closed_at": null,
        "author_association": "OWNER",
        "active_lock_reason": null,
        "body": "\n#### 这是一个正则的助记口诀/顺口溜,让我们用30分钟时间来轻松背下难记的正则\n\n\n\n欢迎通过issue提交更好的口诀或者补充未提到的正则表达式\n\n<!--more-->\n\n## 首先先奉上口诀:\n\n> 从前有个傻大三,\n\n> 哇塞,日子过得特别难 `\\w\\s\\r\\z\\d\\t\\b\\n`\n\n> 人傻人穷只有捡破烂\n\n> 做梦都想变成大富豪,就不用再出来捡破烂 `\\W\\S\\D\\B`\n\n> 每天哼着歌儿出去捡破烂\n\n> 两手叉着腰,左手捡了右手又捡 `a|b`\n\n> 你问他捡到钱没 `?`\n\n> 左手回答得还行,右手被问得头冒金星 `+` `*`\n\n> 只有装进袋子把数字标 `{n}`\n\n> 关上门来把金银财宝往屋里搬 `[abc]`\n\n> 脑袋儿被门夹了不知道啥东西要选 `[^abc]`\n\n> 钢镚儿一碗,铁镚儿一碗 `(abc)`\n\n> 没问题的打个标记,好知道有好多钱 `(?<name>)`\n\n> 有问题的放一边,挤破脑袋也还要向前再看一眼 `(?=exp)` `(?!exp)` `(?<=)` `(?<!)`\n\n> 剩下的铜钱儿用线串 `[a-zA-Z0-9]`\n\n> 一不小心遇到地头蛇,一顿拷问被吓得赶紧溜回家 `+?` `*?`\n\n\n## 释义\n\n### 嘴巴儿尖尖,句句都是钱\n\n\n尖尖代表`^`符号,钱代表`$`符号\n\n傻大三这个人一张嘴说话,句句都是以钱收尾\n\n**所以我们get到了**\n\n| 正则表达式 | 描述             | 示例                         |\n| ---------- | ---------------- | ---------------------------- |\n| `^`        | 匹配字符串的开始 | `^acb` 匹配以abc开头的字符串 |\n| `$`        | 匹配字符串结尾   | `abc$`匹配以abc结尾的字符串  |\n\n\n\n### 哇塞,日子过得特别难.\n\n\n\n在正则里面有许多的元字符,这里收集了比较常用的一些,取元字符的来当声母,用来助记这些元字符,当然,我们更明白元字符所对应的英文单词,就无须死背元字符所对应的的内容了.\n\n**所以我们get到了一大串的元字符**\n\n| 代码 | 描述                                                         | 对应文字 | 对应单词      |\n| ---- | ------------------------------------------------------------ | -------- | ------------- |\n| `\\w` | 匹配一个单词的组成部分,字符,数字,下划线.(是否匹配中文视操作系统和应用环境而定) | 哇       | Word          |\n| `\\s` | 匹配空白符                                                   | 塞       | Space         |\n| `\\r` | 回车                                                         | 日       | Enter         |\n| `\\z` | 字符串结尾(类似$，但不受处理多行选项的影响)                  | 子       | ?             |\n|      | 过                                                           | 过       |               |\n| `\\d` | 数字                                                         | 得       | Digital       |\n| `\\t` | tab制表符                                                    | 特       | Tabulator key |\n| `\\b` | 边界,单词分界位置                                            | 别       | Boundary      |\n| `\\n` | 换行符                                                       | 难       | Line feed     |\n| `.`  | 点号(相当于句号),在一个段落中,以它结尾,它包括了前的各种符号,但不匹配换行符.因为换行就是新段落了 | .        |               |\n\n\n\n### 做梦都想变成大富豪,就不用再出来捡破烂\n\n\n\n变成大富豪,表示元字符变成了大写字母\n\n就不用再出来破烂,表示不再匹配,相当于对以上小写的元字符取反\n\n\n\n**所以我们get到了**\n\n| 代码 | 描述                                                         |\n| ---- | ------------------------------------------------------------ |\n| `\\W` | 匹配一个非单词的组成部分,字符,数字,下划线.(是否匹配中文视操作系统和应用环境而定) |\n| `\\S` | 匹配非空白符                                                 |\n| `\\D` | 非数字                                                       |\n| `\\B` | 非边界,单词分界位置                                          |\n\n\n\n### 两手叉着腰,左手捡了右手又捡\n\n\n\n这一表示正则里面的分枝匹配,形如`a|b`表示两边或的匹配关系,即可以匹配`a`也可以匹配`b`\n\n傻大三捡垃圾,左边有就左手捡到,右边有,就右手捡起来.\n\n\n\n### 你问他捡到钱没?左手回答得还行,右手被问得头冒金星,只有装进袋子把数字标\n\n问到捡到钱没,这是一个问句,回答应该是是与否,代表0或者1,所以有正则`?`匹配0次或者1次\n\n因为他左手刚刚捡到了一块垃圾,所以他傻傻地也知道左手捡到有东西,在数学里面就是用正号`+`表示,至少有一个.\n\n被问得头冒金星,他也不知道右手到底有没有捡到有东西了.金星用`*`表示,可能没有捡到有,也可能捡到很多\n\n只好数一下装进袋子里面,用数字标上有多少.袋子用`{}`表示,数字用`n`表示有多少个.得到完整的正则表达式`{n}`即表示前面的匹配`n`次\n\n**于是我们get到的正则的匹配模式**\n\n| 代码    | 描述                              |\n| ------- | --------------------------------- |\n| `+`     | 匹配至少一次                      |\n| `*`     | 匹配0次或者多次                   |\n| `?`     | 匹配零次或者一次                  |\n| `{n}`   | 匹配n次                           |\n| `{n,m}` | 匹配n到m次                        |\n| `{n,}`  | 匹配n次或者更多次,没有m代表无穷尽 |\n\n\n\n### 关上门来把金银财宝往屋里搬,脑袋儿被门夹了不知道啥东西要选\n\n关上门表示`[]`符号,关在里面的金银财宝,都可以往屋里搬,所以表达式`[abc]`表示匹配`abc`任意一个.\n\n结果傻大三的头`^`不小心被门给夹住了,不知道要这些金银财宝了.所以表达式`[^abc]`表示匹配不是`abc`这些字符的.\n\n\n\n### 钢镚儿一碗,铁镚儿一碗\n\n\n\n碗用`()`表示,傻大三还是知道对这些垃圾进行分类,也就是正则里面的分组,分组之后,不仅可以用于前面的匹配模式,也可以用于后面的反向引用和零宽匹配及更多的功能.\n\n比如`(abc){2}`表示匹配连续的两个`abc`即`abcabc`\n\n\n\n### 没问题的打个标记,好知道有好多钱\n\n傻大三对碗打个标记,以免有疑问`?`时才好知道有好多钱,所以有正则表达式形式`(?<name>exp)`,打好标记之后,在后续就可以通过这个标记来识别引用了.\n\n比如`\\b(?<Word>\\w+)\\b\\s+\\k<Word>\\b`表示匹配连续重复的单词,比如`go go`.如果不打标记,默认使用数字来识别,每个分组会自动拥有一个**组号**，规则是：从左向右，以分组的左括号为标志，第一个出现的分组的组号为1，第二个为2，以此类推。所以这个表达式不打标记的写法就是`\\b(\\w+)\\b\\s+\\1\\b`\n\n\n\n### 有问题的放一边,挤破脑袋也还要向前再看一眼\n\n有问题`?`的,有可能是真钢镚,即等号`=`表示,有可能不是真钢镚,即非`!`表示\n\n放一边,表示只匹配了,但不参与捕获.和前面的`^`,`$`,`\\b`一样,是属于零宽断言,它们 本身不匹配任何字符,只是对 \"字符串的两头\" 或者 \"字符之间的缝隙\" 附加了一个条件.\n\n于是有正预测先行断言`(?=exp)`,表示断言自身出现的位置后面能匹配表达式,比如`\\b\\w+(?=ed\\b)`表示匹配以`ed`结尾的单词,但不包含`ed`;\n\n同理有负预测先行断言`(?!exp)`,和上面的意思相反,即不能满足表达式.比如`\\b\\w*e(?!d)\\w*\\b`表示匹配包含`e`的单词,但同时`e`后面不能跟着字符`d`.它和`\\b\\w*e[^d]\\w*\\b`的区别是,后者的`[^d]`会参与一次匹配,比如它会匹配上`e,abc`,因为里面的`,`参与了`[^d]`的匹配.\n\n\n\n挤破脑袋向前`<`,前面说的是先行断言,即先匹配上前面的表达式.相反的,挤破脑袋往前面去就变成了后发断言.即有\n\n正预测后发断言`(?<=exp)`表示断言自身出现的位置前端能匹配表达式`exp`\n\n负预测后发断言`(?<!exp)`表示断言自身出现的位置前面不匹配表达式`exp`\n\n零宽断言是先满足匹配其自身表达式后,再获取断言里面的表达式是否满足. 比如`(?<=\\d{4})\\d+(?=\\d{4})`去匹配`1234567890`,先匹配上`\\d+`,再判断`(?<=\\d{4}`和`(?=d{4})`,于是最终的匹配结果是`56`.\n\n\n\n**综合以上三条,我们对于正则分组,可以再总结一下**\n\n| 代码           | 描述                                                 |\n| -------------- | ---------------------------------------------------- |\n| `(exp)`        | 分组匹配,后续可以通过`\\n`进行反向引用                |\n| `(?<word>exp)` | 分组匹配命名,后续可以通过`\\k<word>`进行反向引用      |\n| `(?:exp)`      | 只分组,不生成分组编号,也不捕获.相当于只看一眼`:`而已 |\n| `(?=exp)`      | 匹配`exp`前面的位置                                  |\n| `(?!exp)`      | 匹配后面不是跟的`exp`的位置                          |\n| `(?<=exp)`     | 匹配`exp`后面的后面                                  |\n| `(?<!exp)`     | 匹配前面不是跟的`exp`的位置                          |\n\n\n\n### 剩下的铜钱儿用线串\n\n\n\n用线`-`串,表示把铜钱儿都串起来了,就是正则里面的`[a-zA-Z0-9]`这种表示方法,表示`a`到`z`的全部大小写字母和`0`到`9`的全部数字.\n\n\n\n### 一顿拷问被吓得赶紧溜回家\n\n遇到地头蛇拷问`?`,溜回家不再捡垃圾,就是正则里面的遇到`?`由默认的贪婪匹配变成了非贪婪(惰性)匹配.\n\n比如对于字符串`aabaab`用正则`a.*b`会匹配上整个字符串,因为它是贪婪匹配的,里面的`.*`会尽可能长的进行匹配.\n\n而`a.*?b`则只会匹配`aab`.因为对于`.*`遇到了`?`号,就被变成了非贪婪匹配了.\n\n\n\n**于是结合前面的匹配模式,我们可以get到**\n\n| 代码     | 描述                                               |\n| -------- | -------------------------------------------------- |\n| `+?`     | 匹配至少一次,但尽可能少地匹配                      |\n| `*?`     | 匹配0次或者多次,但尽可能少地匹配                   |\n| `??`     | 匹配零次或者一次,但尽可能少地匹配                  |\n| `{n,m}?` | 匹配n到m次,但尽可能少地匹配                        |\n| `{n,}?`  | 匹配n次或者更多次,没有m代表无穷尽,但尽可能少地匹配 |\n\n\n\n\n\n#### 参考\n\n[《正则表达式必知必会》](https://u.jd.com/t0YyaYQ)\n\n[正则表达式30分钟入门教程](https://deerchao.cn/tutorials/regex/regex.htm)\n\n[正则表达式MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)\n\n",
        "performed_via_github_app": null
      },
      {
        "url": "https://api.github.com/repos/buxuku/github-api/issues/57",
        "repository_url": "https://api.github.com/repos/buxuku/github-api",
        "labels_url": "https://api.github.com/repos/buxuku/github-api/issues/57/labels{/name}",
        "comments_url": "https://api.github.com/repos/buxuku/github-api/issues/57/comments",
        "events_url": "https://api.github.com/repos/buxuku/github-api/issues/57/events",
        "html_url": "https://github.com/buxuku/github-api/issues/57",
        "id": 796102005,
        "node_id": "MDU6SXNzdWU3OTYxMDIwMDU=",
        "number": 57,
        "title": "mockjs使用的一些技巧",
        "user": {
          "login": "buxuku",
          "id": 7866330,
          "node_id": "MDQ6VXNlcjc4NjYzMzA=",
          "avatar_url": "https://avatars.githubusercontent.com/u/7866330?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/buxuku",
          "html_url": "https://github.com/buxuku",
          "followers_url": "https://api.github.com/users/buxuku/followers",
          "following_url": "https://api.github.com/users/buxuku/following{/other_user}",
          "gists_url": "https://api.github.com/users/buxuku/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/buxuku/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/buxuku/subscriptions",
          "organizations_url": "https://api.github.com/users/buxuku/orgs",
          "repos_url": "https://api.github.com/users/buxuku/repos",
          "events_url": "https://api.github.com/users/buxuku/events{/privacy}",
          "received_events_url": "https://api.github.com/users/buxuku/received_events",
          "type": "User",
          "site_admin": false
        },
        "labels": [
          {
            "id": 2695511444,
            "node_id": "MDU6TGFiZWwyNjk1NTExNDQ0",
            "url": "https://api.github.com/repos/buxuku/github-api/labels/Gitalk",
            "name": "Gitalk",
            "color": "ededed",
            "default": false,
            "description": null
          },
          {
            "id": 2695518754,
            "node_id": "MDU6TGFiZWwyNjk1NTE4NzU0",
            "url": "https://api.github.com/repos/buxuku/github-api/labels/c86059229d44534a80266570ada4bf1e",
            "name": "c86059229d44534a80266570ada4bf1e",
            "color": "ededed",
            "default": false,
            "description": null
          },
          {
            "id": 2695518752,
            "node_id": "MDU6TGFiZWwyNjk1NTE4NzUy",
            "url": "https://api.github.com/repos/buxuku/github-api/labels/mock",
            "name": "mock",
            "color": "ededed",
            "default": false,
            "description": null
          },
          {
            "id": 2695512777,
            "node_id": "MDU6TGFiZWwyNjk1NTEyNzc3",
            "url": "https://api.github.com/repos/buxuku/github-api/labels/%E5%89%8D%E7%AB%AF",
            "name": "前端",
            "color": "ededed",
            "default": false,
            "description": null
          }
        ],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [],
        "milestone": null,
        "comments": 0,
        "created_at": "2021-01-28T15:20:40Z",
        "updated_at": "2021-01-28T15:20:41Z",
        "closed_at": null,
        "author_association": "OWNER",
        "active_lock_reason": null,
        "body": "\n整理一下自己在项目用使用mockjs时的一些小技巧\n\n<!--more-->\n\n# 生成固定两位数的金额式数字\n\n```\n@float(1, 100,2,2)\n```\n\n=> `69.32`\n\n# 生成一张随机图片，图片颜色随机，图片上显示随机汉字\n\n```\n@image(50x50,@color,@cword)\n```\n\n=>`http://dummyimage.com/50x50/f27979&text=量`\n\n# 生成时间戳\n\n这个可以巧妙地使用mockjs的function功能\n\n```\nfunction() {\n      return new Date().getTime()\n}\n```\n\n=> `1507804275240`\n\n# 生成固定格式的数据，如有一定生成规则的单号\n\n这个可以巧妙地使用mockjs的正则功能\n\n```\n/PO\\d{19}/\n```\n\n=>`PO5478965874589658741`\n\n",
        "performed_via_github_app": null
      }
    ]
  }
]
```

比如readme模板文件可以这样 :

```template
{%- for c in labels %}
## {{c.title}}
{%- for p in c.list %}
#### [{{ moment(p.updated_at).format('YYYY-MM-DD') }}] [{{p.title}}]({{p.html_url}})
{%- endfor %}
{%- endfor %}
```

 可以参考 [github.com/buxuku/buxuku.github.io](https://github.com/buxuku/buxuku.github.io)


### 注意的点

* 你需要在这里 [generate new token](https://github.com/settings/tokens) 为插件生成一个token. 如果你是通过tranvis ci工具来使用这个插件,你不应该把这个token放在你仓库的任何地方.
  你应该把它导出为一个环境变量.就像`export GITHUB_TOKEN=xxx`这样.

  如果你使用的是travis ci (.com),你可以通过以下的操作方法来生成一个安全的环境变量
```bash
brew install travis
travis login --pro --github-token xxxx 
travis encrypt --pro GITHUB_TOKEN="xxx" --add
```  


## License

MIT
