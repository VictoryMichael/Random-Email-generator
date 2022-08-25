async function getRandomUser() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];
    console.log(user)
     displayUsers(user);
}

function displayUsers(user) {
  const name = document.getElementById('name');
  const age = document.getElementById('age');
  const gender = document.getElementById('gender');
  const country = document.getElementById('country');
  const image = document.getElementById('image');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');

name.innerText = ` ${user.name.first} ${user.name.last} `
age.innerText = ` ${user.dob.age} `
gender.innerText = ` ${user.gender} `
email.innerText = ` ${user.email} `
phone.innerText = ` ${user.phone} `
country.innerText = ` ${user.location.country} `
image.setAttribute('src', `${user.picture.large}`)


}

getRandomUser();









