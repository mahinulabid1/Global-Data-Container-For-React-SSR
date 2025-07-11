# Global-Data-Container-For-React-SSR
A little frustrated over props drilling. I want a data state that I can easily access anywhere in my app. This little module utilizes the react useContext hook to make a global data container.


# how to use it
```typescript
export interface AppProps {
  data1?: string
  data2?: string
}


export default function App() {
  const {data, addChange} = useGlobalData<AppProps>()
  // addChange({data1:"hello world"})

  useEffect(() => {

    addChange({data1:"hello world"})

  }, []);

  useEffect(() => {

  }, []);

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://cdn.shopify.com/" />
        <link
          rel="stylesheet"
          href="https://cdn.shopify.com/static/fonts/inter/v4/styles.css"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <GlobalDataProvider>
          <Outlet />


        <ScrollRestoration />
        <Scripts />
        </GlobalDataProvider>
      </body>
    </html>
  );
}


```
