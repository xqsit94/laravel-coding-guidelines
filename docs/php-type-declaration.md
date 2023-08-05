# Use PHP Type declaration
PHP supports type declarations since PHP 7, and it's a good practice to utilize them when defining types in Laravel.

Bad:

```php
public function calculateTotal($quantity, $price)
{
    return $quantity * $price;
}
```

Good:

```php
public function calculateTotal(int $quantity, float $price): float
{
    return $quantity * $price;
}
```

**Class type declaration**
```php
public function saveUser(User $user): void
{
    ...
}
```

**DocBlocks as type declaration**
```php
/**
 * Calculate the total.
 *
 * @param int $quantity
 * @param float $price
 * @return float
 */
public function calculateTotal(int $quantity, float $price): float
{
    return $quantity * $price;
}

```
