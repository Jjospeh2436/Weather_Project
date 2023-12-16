

// http://api.weatherstack.com/current
// ? access_key = YOUR_ACCESS_KEY
// & query = New York
// & units = m
// & language = en

const getForm = async (event) => {
  event.preventDefault()
  let city = event.target.city.value
  console.log(city)
  const result = await fetch(`http://api.weatherstack.com/current?access_key=a1c3617445fefa64ed84d36390df1230&query=${city}`)
  const data = await result.json()
  console.log(data)
}


let cityForm = document.getElementById("jose")
cityForm.addEventListener("submit", getForm)