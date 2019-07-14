---
layout: default
title: Do not get data from the .env file directly
nav_order: 13
---

## Do not get data from the .env file directly

Pass the data to config files instead and then use the `config()` helper function to use the data in an application.

Bad:

```php
$apiKey = env('API_KEY');
```

Good:

```php
// config/api.php
'key' => env('API_KEY'),

// Use the data
$apiKey = config('api.key');
```