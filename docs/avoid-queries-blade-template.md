# Avoid queries in Blade templates

### Do not execute queries in Blade templates and use eager loading (N + 1 problem)

Bad (for 100 users, 101 DB queries will be executed):

```php
@foreach (User::all() as $user)
{% raw %}   {{ $user->profile->name }}{% endraw %}
@endforeach
```

Good (for 100 users, 2 DB queries will be executed):

```php
$users = User::with('profile')->get();

...

@foreach ($users as $user)
{% raw %}   {{ $user->profile->name }}{% endraw %}
@endforeach
```
