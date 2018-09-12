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

#### All subscribers will receive the event payload
```json
{
  "message": "whassup", 
  "timestamp": "2018-09-12T07:25:45.403Z"
}
```
