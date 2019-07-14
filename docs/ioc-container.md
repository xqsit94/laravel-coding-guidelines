---
layout: default
title: Use IoC Container for Long Term Projects
nav_order: 12
---

## Use IoC container or facades instead of new Class.

new Class syntax creates tight coupling between classes and complicates testing. Use IoC container or facades instead.

Bad:

```php
$user = new User;
$user->create($request->validated());
```

Good:

```php
public function __construct(User $user)
{
    $this->user = $user;
}

....

$this->user->create($request->validated());
```
