const express = require("express");
const axios = require("axios").default;

const app = express();

async function fetch() {
  const url = "https://type.fit/api/quotes";
  const resdata = await axios.get(url);
  const dat = await resdata.data;
  return dat;
}

fetch();

app.get("/quote", async (req, res) => {
  // let num = await Math.floor(Math.random() * (1000 + 1));

  let dat = await fetch();

  res.send(`<h1>${dat[0].text} by --------------------> ${dat[0].author}`);
});

app.listen(process.env.PORT || 8000, () => {
  console.log("Quote of the day");
});
