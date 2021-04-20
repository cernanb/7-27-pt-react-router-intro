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

BrowserRouter - Will use this 1 place in our application (and one place only)...at the very top level...and it listens for any route changes in the browser, and makes those changes accessible to any of it's children.

```
<BrowserRouter>
    <App>
</BrowserRouter>
```

Link
Changes the URL we see in the browser. It must have a to prop

```
<Link to="/about">About</Link>
```

Route
Conditionally renders a component based on the route

```
<Route path="/" component={About} />
```

Switch
Wraps your Route components. Renders the first component that matches the browser route.

```
<Switch>
    <Route />
    <Route />
    <Route />
</Switch>
```

#### Programmatically switching routes
