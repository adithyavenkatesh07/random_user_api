async function getRandomUser() {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const user = data.results[0];
    console.log(user);
    displayUser(user);
}

function displayUser(user) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const location = document.getElementById('location');
    const profileImage = document.querySelector('.profile-image');
    const dob = document.getElementById('dob');

    name.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
    email.innerText = `${user.email}`;
    phone.innerText = `${user.phone}`;
    location.innerText = `${user.location.country}`;
    profileImage.style.backgroundImage = `url('${user.picture.large}')`;
    dob.innerText = `${user.dob.date.split('T')[0]}`;
}

getRandomUser();