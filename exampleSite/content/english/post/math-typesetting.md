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

### Mathematical formulae inside code blocks

As an alternative to the standard syntax used above, formulae can also be
authored using a
[GLFM math block](https://docs.gitlab.com/ee/user/markdown.html#math):

````markdown
The probability of getting \(k\) heads when flipping \(n\) coins is:

```math
\tag*{(1)} P(E) = {n \choose k} p^k (1-p)^{n-k}
```
````

This `math` block renders to:

The probability of getting \(k\) heads when flipping \(n\) coins is:

```math
\tag*{(1)}  P(E) = {n \choose k} p^k (1-p)^{n-k}
```

### Chemical equations inside code blocks

You can use a code block adorned with `chem` in order to render
a chemical equation:

````markdown
```chem
\tag*{(2)} \ce{Hg^2+ ->[I-]  $\underset{\mathrm{red}}{\ce{HgI2}}$  ->[I-]  $\underset{\mathrm{red}}{\ce{[Hg^{II}I4]^2-}$}
```
````

This `chem` block renders to:

<!-- prettier-ignore-start -->
```chem
\tag*{(2)} \ce{Hg^2+ ->[I-]  $\underset{\mathrm{red}}{\ce{HgI2}}$  ->[I-]  $\underset{\mathrm{red}}{\ce{[Hg^{II}I4]^2-}}$}
```
<!-- prettier-ignore-end -->
