# express-sse
Real-time Express streaming API leveraging Server Sent Events (SSE) 

### Example
```bash

# start
$ yarn start

# subscribe
$ curl -XGET "http://localhost:3000/eventstream"

# publish
$ curl -XPOST "http://localhost:3000/message" -d "some message"

```
