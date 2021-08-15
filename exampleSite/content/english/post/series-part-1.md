---
author: Hugo Authors
title: Series Part 1
date: 2021-08-14
description: A brief guide to how to setup series part 1
series:
  - series-setup
---

In this first part of the series we'll show you how to create a series

<!--more-->

As a first step we need to add series as a taxonomy. We can do this by editing the `config.toml`.  
Note: We always need to define the existing taxonomies as well.

```toml
[taxonomies]
    category = "categories"
    series = "series"
    tag = "tags"
```

Now we have the series enabled, the next thing we need to do is add the series name in the FrontMatter.
For our example we'll use this post and the next part.

As you can see we've set the series to `series-setup`. We also do the same in the next parts of the series.  
This end results should be a Front Matter that looks similar to this:

```md
---
author: Hugo Authors
title: Series Part 1
date: 2021-08-14
description: A brief guide to how to setup series part 1
series:
  - series-setup
---
```

Each individual post will now also show the other posts in the series under the `Posts in this Series` heading.
