window.onload = function() {
  document.getElementById('fname').value = '';
  document.getElementById('sname').value = '';
}
const form = document.getElementById('love-form');
const result = document.getElementById('result');
form.addEventListener('submit', (event) => {
event.preventDefault();
const fname = document.getElementById('fname').value;
const sname = document.getElementById('sname').value;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6c9b05ff68msh4821725c1f78ca0p10b0e6jsn3a8c01dbf41f',
    'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
  }
};
fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname}&sname=${sname}`, options)
    .then(response => response.json())
  .then(response => {
  result.textContent = `The love percentage between ${response.fname} and ${response.sname} is ${response.percentage}%!`;
        })
  .catch(err => console.error(err));
});