let favNumber = 21;
let baseURL = "http://numbersapi.com";

// 1.
async function numberFacts() {
  let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
  console.log(data);
}
numberFacts();

// 2.
const favNumbers = [3, 11, 25];
async function multipleNums() {
  let data = await $.getJSON(`${baseURL}/${favNumbers}?json`);
  console.log(data);
}
multipleNums();

// 3.
async function multipleFacts() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
multipleFacts();
