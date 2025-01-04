# Don't repeat yourself (DRY)

Reuse code when you can. SRP is helping you to avoid duplication. Also, reuse Blade templates, use Eloquent scopes etc.

Bad:

```php
public function getActive(): Collection
{
    return $this->where('verified', 1)->whereNull('deleted_at')->get();
}

public function getArticles(): Collection
{
    return $this->whereHas('user', function ($query) {
            $query->where('verified', 1)->whereNull('deleted_at');
        })->get();
}

```

Good:

```php
public function scopeActive(Builder $query): Builder
{
    return $query->where('verified', 1)->whereNull('deleted_at');
}

public function getActive(): Collection
{
    return $this->active()->get();
}

public function getArticles(): Collection
{
    return $this->whereHas('user', function ($query) {
            $query->active();
        })->get();
}
```
