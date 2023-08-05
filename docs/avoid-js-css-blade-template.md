# Do not put JS and CSS in Blade templates and do not put any HTML in PHP classes

Bad:

```php
let article = `{% raw %}{{ json_encode($article) }}{% endraw %}`;
```

Better:

```php
<input id="article" type="hidden" value="@json($article)">

Or

<button class="js-fav-article" data-article="@json($article)">{% raw %}{{ $article->name }}{% endraw %}<button>
```

In a Javascript file:

```javascript
let article = $('#article').val();
```

The best way is to use specialized PHP to JS package to transfer the data.
