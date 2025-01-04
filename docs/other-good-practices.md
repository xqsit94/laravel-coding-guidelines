# Other good practices

Never put any logic in routes files.

Minimize usage of vanilla PHP in Blade templates.

Use [laravel pint](https://laravel.com/docs/pint) for `PHP Code Style Fixer`

Use in-memory DB for testing.

Do not override standard framework features to avoid problems related to updating the framework version and many other issues.

Use modern PHP syntax where possible, but don't forget about readability.

Avoid using View Composers and similar tools unless you really know what you're doing. In most cases, there is a better way to solve the problem.
