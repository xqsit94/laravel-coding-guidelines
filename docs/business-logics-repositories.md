# Business logic should be in repository class

A controller must have only one responsibility, so move business logic from controllers to repository classes.

Bad:

```php
public function store(Request $request): Redirect
{
    if ($request->hasFile('image')) {
        $request->file('image')->move(public_path('images') . 'temp');
    }
    
    ....
}
```

Good:

```php
public function store(Request $request): Redirect
{
    $this->articleRepository->handleUploadedImage($request->file('image'));

    ....
}

class ArticleRepository
{
    public function handleUploadedImage($image): void
    {
        if (!is_null($image)) {
            $image->move(public_path('images') . 'temp');
        }
    }
}
```
