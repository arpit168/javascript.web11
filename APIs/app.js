const URL = " https://dog.ceo/api/breeds/image/random";
const factpara = document.querySelector("#fact");

const getFacts = async () => {
    console.log ("getting data .....");
    let response= await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data[0]);
    factpara.innerText = data[0].text;
};
