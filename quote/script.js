// const axios = require("axios");
const dt = document.querySelector(".dt");

async function fetch() {
  const url = "https://type.fit/api/quotes";
  const resdata = await axios.get(url);

  const dat = await resdata.data;

  return ui(dat);
}

fetch();

const ui = (data) => {
  let ut = ``;

  ut = `<h1>${data[0].text}  by  ---------------------------------------> ${data[0].author}</h1>
  `;

  dt.innerHTML = ut;
};

