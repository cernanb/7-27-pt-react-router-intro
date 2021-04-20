# Client Side Routing in React

### Traditional routing example - server side

<a href="https://www.berkshirehathaway.com/">Berkshire Hathaway Site</a>

In react, we are only being served 1 large javascript bundle, so there is no way to request a different resource based on the route.

Using javascript, we can manipulate the browser state.

<a href="https://developer.mozilla.org/en-US/docs/Web/API/History_API">Manipulating the Browser History</a>

```
window.history.go(-1) // go back
window.history.go(1)
window.history.pushState({}, null, 'something')
```

## React Router

<a href="https://reactrouter.com/">Docs</a>

### Components

Router
Route
Link
Switch
Redirect

#### Programmatically switching routes
