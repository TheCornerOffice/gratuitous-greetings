let greetings = ["Hello", "Hi", "Hey", "Sup", "Howdy", "Yo", "What's up", "Greetings"]
let greetingDiv = document.getElementById('greeting')
function selectDifferent(array, current) {
  value = array[Math.floor(Math.random() * array.length)]
  return value === current ? selectDifferent(array, current) : value
}
setInterval(() => {
  greetingDiv.innerHTML = selectDifferent(greetings, greetingDiv.innerHTML)
}, 300)
