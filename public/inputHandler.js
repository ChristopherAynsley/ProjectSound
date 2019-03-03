

//Tests if group name is valid
function groupNameValid(name){
  if (typeof name === "string" && name.length <= 50) {
    return true;
  }
  return false;
}
