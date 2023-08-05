# Use Accessors and Mutators

Use Accessors and Mutators instead of mutating in controllers and blade

Bad:

```php
{% raw %}{{ Carbon::createFromFormat('Y-d-m H-i', $object->ordered_at)->toDateString() }}{% endraw %}
{% raw %}{{ Carbon::createFromFormat('Y-d-m H-i', $object->ordered_at)->format('m-d') }}{% endraw %}
```

Good:

```php
// Model
protected $dates = ['ordered_at', 'created_at', 'updated_at'];

public function getSomeDateAttribute(DateTime $date): string
{
    return $date->format('m-d');
}

// View
{{ $object->ordered_at->toDateString() }}
{{ $object->ordered_at->some_date }}
```
