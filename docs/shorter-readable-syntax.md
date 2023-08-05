---
aside: false
---

# Use shorter and more readable syntax where possible

Bad:

```php
$request->session()->get('cart');
$request->input('name');
```

Good:

```php
session('cart');
$request->name;
```

More examples:

| Common syntax                                                          | Shorter and more readable syntax                   |
|------------------------------------------------------------------------|----------------------------------------------------|
| `Session::get('cart')`                                                 | `session('cart')`                                  |
| `$request->session()->get('cart')`                                     | `session('cart')`                                  |
| `Session::put('cart', $data)`                                          | `session(['cart' => $data])`                       |
| `$request->input('name'), Request::get('name')`                        | `$request->name, request('name')`                  |
| `return Redirect::back()`                                              | `return back()`                                    |
| `is_null($object->relation) ? null : $object->relation->id`            | `optional($object->relation)->id`                  |
| `return view('index')->with('title', $title)->with('client', $client)` | `return view('index', compact('title', 'client'))` |
| `$request->has('value') ? $request->value : 'default';`                | `$request->get('value', 'default')`                |
| `Carbon::now(), Carbon::today()`                                       | `now(), today()`                                   |
| `App::make('Class')`                                                   | `app('Class')`                                     |
| `->where('column', '=', 1)`                                            | `->where('column', 1)`                             |
| `->orderBy('created_at', 'desc')`                                      | `->latest()`                                       |
| `->orderBy('age', 'desc')`                                             | `->latest('age')`                                  |
| `->orderBy('created_at', 'asc')`                                       | `->oldest()`                                       |
| `->select('id', 'name')->get()`                                        | `->get(['id', 'name'])`                            |
| `->first()->name`                                                      | `->value('name')`                                  |
