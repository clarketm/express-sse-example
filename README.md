# express-sse
Real-time Express streaming API leveraging Server Sent Events (SSE) 

### Example
```bash

# Start
$ yarn start

# Subscribe
$ curl -XGET "http://localhost:3000/eventstream"

# Publish
$ MESSAGE="some message"
$ curl -XPOST "http://localhost:3000/message" -d "$MESSAGE"

```
