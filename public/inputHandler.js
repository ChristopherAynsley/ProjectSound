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

window.onload = init;
//module.exports.groupNameValid = groupNameValid;
