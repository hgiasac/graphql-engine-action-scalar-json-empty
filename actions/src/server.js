const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/response-json", async (req, res) => {
  console.log("/response-json");
  return res.json([
    {
      hello: "world",
    },
  ]);
});

app.post("/response-type", async (req, res) => {
  console.log("/response-type");
  return res.json([
    {
      hello: "world",
      data: {
        foo: "bar",
      },
    },
  ]);
});

app.post("/response-json-item", async (req, res) => {
  console.log("/response-json-item");
  return res.json({
    hello: "world",
  });
});

app.listen(PORT);
