/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const getCall = axios.get('https://api.github.com/users/Mad-Mal')
.then(response => {
  let resData = response;
  let finalData = gitCardMaker(resData);
  let cardChild = document.querySelector('.cards').appendChild(finalData);
  return cardChild;
})
.catch(error => console.log(error));

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['charlie-may86', 'RockoGilbert', 'AidanJJenkins', 'danimalcrackz', 'tbauer1979'];

function arrayCardMaker(array) {
  for(let i = 0; i < array.length; i++) {
    let names = array[i];
  
  let getCall2 = axios.get(`https://api.github.com/users/${names}`)
  .then(response => {
    let resData = response
    let finalData = gitCardMaker(resData)
    let cardChild = document.querySelector('.cards').appendChild(finalData)
    return cardChild;
  })
  .catch(error => console.log(error))}
}
console.log(arrayCardMaker(followersArray))

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function gitCardMaker(object) {
  let outerCardDiv = document.createElement('div')
  let cardImg = document.createElement('img')
  let innerCardDiv = document.createElement('div')
    let cardHead = document.createElement('h3')
    let usernameP = document.createElement('p')
    let locationP = document.createElement('p')
    let profileP = document.createElement('p')
      let hrefA = document.createElement('a')
    let followersP = document.createElement('p')
    let followingP = document.createElement('p')
    let bioP = document.createElement('p')

    outerCardDiv.classList.add('card')
    cardImg.src = `${object.data.avatar_url}`
    innerCardDiv.classList.add('card-info')
    cardHead.classList.add('name')
    usernameP.classList.add('username')
    hrefA.href = `${object.data.html_url}`

    cardHead.textContent = `${object.data.name}`
    usernameP.textContent = `${object.data.login}`
    locationP.textContent = `${object.data.location}`
    hrefA.textContent = `${object.data.html_url}`
    followersP.textContent = `${object.data.followers}`
    followingP.textContent = `${object.data.following}`
    bioP.textContent = `${object.data.bio}`

    outerCardDiv.appendChild(cardImg)
    outerCardDiv.appendChild(innerCardDiv)
    innerCardDiv.appendChild(cardHead)
    innerCardDiv.appendChild(usernameP)
    innerCardDiv.appendChild(locationP)
    innerCardDiv.appendChild(profileP)
    profileP.appendChild(hrefA)
    innerCardDiv.appendChild(followersP)
    innerCardDiv.appendChild(followingP)
    innerCardDiv.appendChild(bioP)

    return outerCardDiv;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
