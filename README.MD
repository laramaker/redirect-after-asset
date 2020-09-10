#### Redirection to external url
By default, after creating, updating, and deleting resources nova allows you to modify the behavior of the redirection, but only when the url is related to laravel nova, they are because laravel nova uses vue-router

This package will allow you to redirect the user to an external url or your own url in laravel application, you do not need to add the routes to the laravel nova vue-router

It is fully compatible with the methods of Customizing Redirect Behavior
https://nova.laravel.com/docs/2.0/resources/#customizing-redirect-behavior

#### Installation
`composer require laramaker/redirect-after-asset`

#### Usage
When using the methods to modify the redirection of your resources, as follows:
`redirectAfterCreate`, `redirectAfterUpdate`, and `redirectAfterDelete`

You must return the redirection like this:
```php
/**
 * Return the location to redirect the user after creation.
 *
 * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
 * @param  \Laravel\Nova\Resource  $resource
 * @return string
 */
public static function redirectAfterCreate(NovaRequest $request, $resource)
{
    //Example: return 'redirectAfter?to=https://myapp.test/@username
    return '/redirectAfter?to=' $yourUrlWithHttpOrHttps;
}
```

As you can see, the special route that takes care of redirecting is:
`redirectAfter?to=`

If you have any questions, write me rvalenzuelaferrada@gmail.com
