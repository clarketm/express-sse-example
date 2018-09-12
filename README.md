# express-sse-example
Real-time Express streaming API leveraging Server Sent Events (SSE) 

### Example

#### Start
```bash
$ npm start
```

#### Subscribe (server-side)
```bash
# GET /eventstream
$ curl -XGET "http://localhost:3000/eventstream"
```

#### Subscribe (client-side)
```js
const es = new EventSource("http://localhost:3000/eventstream");
es.addEventListener("message", event => console.log(JSON.parse(event.data)));
```

#### Publish a "message" event
```bash
# POST /message
$ curl -XPOST "http://localhost:3000/message" -d "some message"
```
