const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/stream",
  { useNewUrlParser: true }
);

const messageSchema = new mongoose.Schema(
  {
    message: {
      type: String
    },
    timestamp: {
      type: Date,
      default: new Date()
    }
  },
  { versionKey: false }
);

messageSchema.methods.toJSON = function() {
  const { _id, message, timestamp } = this.toObject();
  return { message, timestamp };
};

const Message = mongoose.model("Message", messageSchema);

// app.use(bodyParser.json());
app.use(bodyParser.text({ type: "*/*" }));

app.get("/eventstream", (req, res, next) => {
  res.set({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive"
  });
  app.on("message", data => {
    res.write(`event: message\n`);
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  });
});

app.post("/message", (req, res, next) => {
  const message = req.body;

  console.log("message", message);

  return Message.create(
    new Message({
      message,
      timestamp: new Date()
    })
  )
    .then(m => app.emit("message", m))
    .catch(console.log)
    .finally(() => res.end());
});

app.listen(port, () => {
  console.log(`Express listening on port: ${port}`);
});
