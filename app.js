const btn = document.querySelector(".btn");

btn.addEventListener("click", function() {
  requestHandler();
});

requestHandler();

function requestHandler() {
  const url = "https://randomuser.me/api";
  fetch(url)
    .then(data => data)
    .then(data => data.json())
    .then(data => {
      const user = data.results[0];
      interfaceHandler(user);
    });
}

function interfaceHandler(user) {
  const userImg = document.querySelector(".user__image");
  const userName = document.querySelector(".user__name");
  const userEmail = document.querySelector(".user__email");
  const userCity = document.querySelector(".user__city");

  userImg.src = user.picture.medium;
  userName.textContent = `Name: ${user.name.first} ${user.name.last}`;
  userEmail.textContent = `Email: ${user.email}`;
  userCity.textContent = `City: ${user.location.city}`;
}
