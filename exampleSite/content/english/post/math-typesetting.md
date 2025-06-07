---
author: Hugo Authors
title: Math Typesetting
date: 2025-02-23
description: A brief guide to setup and use KaTeX
---

For math typesetting in a Hugo project, you can leverage hugo's internal [\(\KaTeX\)](https://katex.org/) rendering engine.

<!--more-->

If you want to use mathematical or chemical equations in your site, enable the [Goldmark passthrough extension](https://gohugo.io/render-hooks/passthrough/) and define delimiters for block and inline formulae in your config file:

**`hugo.toml`**

```toml
[markup]
  [markup.goldmark]
    [markup.goldmark.extensions]
      [markup.goldmark.extensions.passthrough]
        enable = true
        [markup.goldmark.extensions.passthrough.delimiters]
          block = [['\[', '\]'], ['$$', '$$']]
          inline = [['\(', '\)']]
```

Afterwards you can author formulae using the standard \(\LaTeX\) syntax:

### Examples

Inline math: \(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887… \)

Block math:

$$
\tag*{(1)} \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots}}}
$$

Chemical equations:

\[
\tag*{(2)} \ce{Zn^2+ <=>[+ 2OH-][+ 2H+] $\underset{\text{amphoteric hydroxide}}{\ce{Zn(OH)2 v}}$ <=>[+ 2OH-][+ 2H+] $\underset{\text{tetrahydroxozincate}}{\ce{[Zn(OH)4]^2-}}$}
\]

**Note:** Use the online reference of [Supported TeX Functions](https://katex.org/docs/supported.html)
