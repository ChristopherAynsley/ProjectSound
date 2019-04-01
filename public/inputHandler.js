//Global Variables
let errorBox;

//On page load
function init() {
  errorBox = document.getElementById('error');
}

//Tests if group name is valid
function groupNameValid(name) {
  return (typeof name === "string" && name.length <= 50 && name.length > 2)
}

//Sends new group info to get added to the server
//TODO Swap else into if and then remove else
function addGroup(newGroup, owner = "default", visibility = false) {
  console.log(newGroup)
  if (groupNameValid(newGroup)) {
    //send to server
    errorBox.textContent = "";
    return true;
  } else {
    errorBox.textContent =
      "Please ensure you enter text content under the length of 50 characters";
    return false;
  }
}

//Sends a group name to the server to search for groups
function searchPublicGroups(groupName) {
  if (!groupNameValid(groupName)) {
    errorBox.textContent =
      "Please ensure you enter text content under the length of 50 characters";
    return;
  }
  //Send Search Query to server
}

function handleFiles(file) {
  //TODO Send file to server and location of file to be placed ect ect
}

//TEST FUNCTION Gets the image and then displays the image on the page
async function displayImage() {
  let request = await fetch("../media/soundsync.png");
  let location = document.getElementById("picholder");
  let imageELe = new Image();
  imageELe.className = 'testimage';
  location.appendChild(imageELe);
  imageELe.src = request.url;
}

// TEST FUNCTION to get data from server ect ect
async function doFetch(url, intervalToCancel) {
  try {
    let resp = await fetch(url);
    if (!resp.ok) throw new Error('error');
    return await resp.json();
  } catch (e) {
    console.error('error fetching ', url);
    console.error('refresh page to try again');
    clearInterval(intervalToCancel);
    return null;
  }
}


//Post a single image
function postImage(image) {
  // TODO: Once pages built a little more, make location a variable passed into the function
  let location = document.getElementById("picholder");
  let imageELe = new Image();
  imageELe.className = 'testimage';
  location.appendChild(imageELe);
  imageELe.src = ("../media/groupimages/" + image);
}

//Posts all images in imagelist utilising postImage function
async function postAllImages() {
  let resp = await fetch("/imagelist");
  let allImages = await resp.json();
  allImages.forEach(image => {
    postImage(image);
  });
}

//Posts a single audio track to the page
function postSong(song, locationid){
  let location = document.getElementById(locationid);
  let audioEle = new Audio();
  audioEle.controls = 'controls';
  audioEle.src = ("../media/music/" + song);
  location.appendChild(audioEle);
}

//Posts all audio tracks available using the postSong function
async function postAllMusic(loc) {
  let resp = await fetch("/audiolist");
  let allMusic = await resp.json();
  allMusic.forEach(song => {
    postSong(song, loc);
  });
}


function onSignIn(googleUser) {
  const profile = googleUser.getBasicProfile();
  const el = document.getElementById('greeting');
  el.textContent = '– Hello ' + profile.getName() + '!';

  callServer();
}
async function signOut() {
  await gapi.auth2.getAuthInstance().signOut();
  console.log('User signed out.');
  const el = document.getElementById('greeting');
  el.textContent = 'Bye!';
}

async function callServer() {
  const token = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token;

  const el = document.getElementById('server-response');
  el.textContent = 'loading…';

  const fetchOptions = {
    credentials: 'same-origin',
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + token },
  };
  const response = await fetch('/login', fetchOptions);
  if (!response.ok) {
    // handle the error
    el.textContent = "Server error:\n" + response.status;
    return;
  }

  // handle the response
  const data = await response.text();
  console.log('setting text content: ' + data);
  el.textContent = data;
}

window.onload = init;
//module.exports.groupNameValid = groupNameValid;
