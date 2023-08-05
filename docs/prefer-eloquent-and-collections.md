# Prefer Eloquent and Laravel Collections

## Prefer to use Eloquent over using Query Builder and raw SQL queries.

Eloquent allows you to write readable and maintainable code. Also, Eloquent has great built-in tools like soft deletes, events, scopes etc.

Bad:

```sql
SELECT *
FROM `articles`
WHERE EXISTS (SELECT *
              FROM `users`
              WHERE `articles`.`user_id` = `users`.`id`
              AND EXISTS (SELECT *
                          FROM `profiles`
                          WHERE `profiles`.`user_id` = `users`.`id`) 
              AND `users`.`deleted_at` IS NULL)
AND `verified` = '1'
AND `active` = '1'
ORDER BY `created_at` DESC
```

Good:

```php
Article::has('user.profile')->verified()->latest()->get();
```

## Prefer collections to arrays
Using collection methods, we abstract away the iteration and filtering logic, making the code more expressive and easier to understand. Laravel collections offer numerous methods, such as map, pluck, groupBy, sum, etc., which makes it easy to perform various data manipulations without having to write custom code.

Bad:

```php
$products = ['pin', 'pen', 'pencil', 'paper'];

$isProductEmpty = count($products) === 0
```

Good:

```php
$products = collect(['pin', 'pen', 'pencil', 'paper']);

$isProductEmpty = $products->isEmpty();
```
