# IsomorphicReactwithRouter4

To handle routes Isomorphically in React we are going to take help of react router dom module
- It has Static Router & Browser Router
- We use Static Router in Server side & Browser Router in Client side

``` javascript
// divert all the requests from express route handler to React Router handler
app.get('*', (req,res) => {
    res.send(renderer(req));
});
```

Then On server side, 
indexjs ---> rendererjs --->routes ---> homejs 
``` javascript
export default (req) => {
    const content = renderToString(
        <StaticRouter location={req.path} context={{}}>
            <Routes/>
        </StaticRouter>
    );
        
    return `
        <html>
            <head>
                <title>react ssr app</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
}
```

On client side,
clientjs --> routes --->
``` javascript
ReactDOM.hydrate(
<BrowserRouter> 
    <Routes />
</BrowserRouter>
, document.querySelector('#root')
);
```


So ROutes kept simple to be served Isomorphically
```javascript
import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';

export default () => {
  return (
      <div>
          <Route exact path ="/" component = {Home} />
          <Route path="/hi" component={() => 'Hi'} />
      </div>
  )
}

```
