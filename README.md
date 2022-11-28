> Of course, you can preview it via [一杯玺茶xt - ovirgo.com](https://ovirgo.com/) 🥳

It's just a simple & pure theme. 🎉🎉🎉 Enjoy it.

## Overview

**Cool Style**

<img src="images/1.jpg" width="" style="float: left;" />

<img src="images/2.jpg" width="" style="float: left;" />


**Pure Style**

<img src="images/q1.jpg" width="" style="float: left;" />

<img src="images/q2.jpg" width="" style="float: left;" />



## Features In-built

**1、A highlight TOC with relative headline, like this:**

<img src="images/d1.jpg" width="" style="float: left;" />

<img src="images/d2.jpg" width="" style="float: left;" />


**2、A simple and realtime local search.**

<img src="images/7.jpg" width="" style="float: left;" />

<img src="images/8.jpg" width="" style="float: left;" />



## Tips

Maybe you need to create some `.md` files which are necessary for right routes, like:

| Markdown File        | Route      |
| -------------------- | ---------- |
| `content/nav.md`     | `/nav`     |
| `content/search.md`  | `/search`  |
| `content/archive.md` | `/archive` |

## Quick Start

First, let's try to start a interesting journey.

```sh
cd YOUR_SITE_DIR	# your local site workspace
git clone https://github.com/loveminimal/hugo-theme-virgo.git themes/virgo
# OR
cd YOUR_SITE_DIR/themes
git submodule add https://github.com/loveminimal/hugo-theme-virgo.git virgo
```

> Which one to choose? If you have this question, just choose the first. 😏

Then, update your `config.toml` of site, like this:

```
baseURL = 'https://ovirgo.com/'
languageCode = 'zh-cn'
title = 'Virgo'

theme = 'virgo'
hasCJKLanguage = true
summaryLength = 80    # default 70
paginate = 24         # better 4 * 3 * times
enableGitInfo = true

[params]
    author = '一杯玺茶xt'

    # active fadeIn animate when load page
    hasActiveAnimate = true      

    # active cool style, be cool but take up more resources, and
    # if you want to replace default background image, just 
    # rename it `default.jpg` and place it into `/static/imgs/bg` dir, like `/static/imgs/bg/default.jpg`.
    hasActiveCool = true

    # For a better experience, we use localstorage to keep theme dark status, so
    # if you set dark as `true` but has no effect, you
    # should clear local storage of current site. And
    # in general, there has no any questions when you use it firstly.
    dark = false

    # Fold/Unfold code blocks, default `false`, and
    # if `true` ，all code blocks will be folded when page load.
    # It will be always true in Mobile view no matter what's your setting.
    hasFoldAllCodeBlocks = false

    # active english view, default chinese
    en = false

    slogan = 'Life is just a joker.'        # your site slogan below title

    # like the following items that you need create a relative markdown file
    # -----------------------------------
    # Search - search.md
    # Nav - nav.md 
    # Archive - archive.md
    # About - about.md or about/index.md
    # Idea posts/idea.md 
    # Wiki - posts/wiki.md
    # -----------------------------------
    # Now, you can customize the menu as you want, and
    # update the order index number like 00,01,23... you can sort the items.
    # ⚓🐶🎉👀💡👓🐌
    [params.menu]
        [params.menu.00]
            active = true
            path = '/nav'
            en = 'Nav'
            zh = '导航'
            icon = '🎯'
        [params.menu.11]
            active = true
            path = '/search'
            en = 'Search'
            zh = '搜索'
            icon = '🔎'
        [params.menu.22]
            active = true
            path = '/posts'
            en = 'Posts'
            zh = '文章'
            icon = '📜'
        [params.menu.33]
            active = true
            path = '/archive'
            en = 'Archive'
            zh = '归档'
            icon = '🎉'
        [params.menu.44]
            active = true
            path = '/wiki'
            en = 'Wiki'
            zh = '百科'
            icon = '🚀'
        [params.menu.55]
            active = true
            path = '/about'
            en = 'About'
            zh = '关于'
            icon = '🐌'

    [params.svg]
        color = '#6c757d'                   # icon color of breadcrumb '#666'  # '#5a29e4' 
    
    [params.img]
        # Img of home page - if not jpg, rename it, and
        # place it inio `static/imgs/` dir
        # In-built : lightcolor, girl, wukong, and tux
        # src = 'wukong'
        width = 999
        # and if not want to show img but some words, just 
        # comment `src = 'xxx'`, and input your words:
        # words = "Stay hungry, Stay foolish. Your time is limited, so don't waste it living someone else's life. Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary. -- Steve Jobs."
        # words = "多少事，从来急；天地转，光阴迫。一万年太久，只争朝夕。 -- 教员"
        # words = "你当然会幸福，毕竟我双手合十的愿望都是你。"
        words = "一个人能控制的，掌握最多主动权的，只是自己。 是的，‘控制’和‘影响’，这就是‘对已’和‘对人’的最大区别！"

    [params.contact]
        icp = '豫ICP备2022002918号-1'          # beian number
        icplink = '//beian.miit.gov.cn'
        weibo = '6867589681'                # e.g. https://weibo.com/u/6867589681
        wechat = 'imgs/bg/wechat.jpg'       # Wechat QR, choose your path
        email = 'loveminimal@outlook.com'
        github = 'loveminimal'              # e.g. https://github.com/loveminimal
        bilibili = '11608450'               # e.g. https://space.bilibili.com/11608450
        # twitter = 'loveminimal'             # e.g. https://twitter.com/loveminimal
        # facebook = 'loveminimal'            # e.g. https://facebook.com/loveminimal
        # youtube = 'loveminimal'             # e.g. https://youtube.com/user/loveminimal
        color = '#696969'                   # icon color of contact #5d2f86

[markup]
    [markup.asciidocExt]
        preserveTOC = true
    [markup.highlight]
        style = "github"
        lineNos = false
    [markup.tableOfContents]
        endLevel = 3
        ordered = false
        startLevel = 2
    [markup.goldmark]
        [markup.goldmark.renderer]
            unsafe = true



```

And if you want to use nav page, you may need construct it like this:

```md
---
title: "Nav"
draft: false
---

## ⚓ 

⚓ O virgo, just do the right thing S.
<div class="nav">

🌞 我的 MINE
- [mineitem one](/)
- [mineitem two](/archive)
- [mineitem three](https://nav-item-three.com)
 

🔨 工具 TOOLs
- [toolitem three](https://nav-item-three.com)


📑 文档 DOCs
- [docitem one](/)
- [docitem two](/archive)
- [docitem three](https://nav-item-three.com)

🍺 博客 BLOGs
- [blogitem one](/)
- [blogitem two](/archive)
- [blogitem three](https://nav-item-three.com)

🎉 休闲 LEISURE
- [leisureitem one](/)
- [leisureitem three](https://nav-item-three.com)

🎧 影视 MOVIEs
- [movieitem one](/)
- [movieitem three](https://nav-item-three.com)

🧲 友链 LINKs
- [navitem two](/archive)
- [navitem three](https://nav-item-three.com)

</div>

## 🔖 

🔖 Bookmarks InboX

<div class="bookmark">

- bookmark item one https://bookmark-item-one.com
- bookmark item two https://bookmark-item-two.com
- bookmark item three https://bookmark-item-three.com

</div>
```

Now, just run `hugo server -D` to enjoy it.
