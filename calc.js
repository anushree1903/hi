const first = document.getElementById("fname")
const last = document.getElementById("lname")
const btn = document.querySelector('button')
const matchResults = document.querySelector('.results')

const callApi = (firstName, secondName) => {
  fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${firstName}&sname=${secondName}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "love-calculator.p.rapidapi.com",
      "x-rapidapi-key": "2f5b617ac1mshf7debee4d623250p1f9469jsndde78807ed37"
    }
  })
  .then(response => response.json())
  .then((data) => {
    updateHtml(data)
  })
}


const updateHtml = (data) => {
    matchResults.innerHTML = `<h1>${data.percentage}%</h1><br>
                              <h1>${data.result}</h1>
                              `
}


function checkMatch () {
  callApi(first.value, last.value)
}

btn.addEventListener('click', checkMatch)
