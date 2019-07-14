---
layout: default
title: Use constants and config
nav_order: 10
---

## Use config and language files, constants instead of text in the code

Bad:

```php
public function isNormal()
{
    return $article->type === 'normal';
}

return back()->with('message', 'Your article has been added!');
```

Good:

```php
public function isNormal()
{
    return $article->type === Article::TYPE_NORMAL;
}

return back()->with('message', __('app.article_added'));
```