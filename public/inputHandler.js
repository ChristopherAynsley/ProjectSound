//Tests if group name is valid
function groupNameValid(name){
  return (typeof name === "string" && name.length <= 50)

//Sends new group info to get added to the server
//TODO Swap else into if and then remove else
function addGroup(newGroup, owner = "default", visibility = false){
  if (groupNameValid(newGroup)) {
    //send to server
  }
  else {
    const errorBox = document.getElementById('error');
    errorBox.textContent = "Please ensure you enter text content under the length of 50 characters";
  }
}

//Sends a group name to the server to search for groups
function searchPublicGroups(groupName){
  if (!groupNameValid(groupName)) {
    //TODO finish this
  }
}

module.exports.groupNameValid = groupNameValid
