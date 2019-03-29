import * as handlers from "inputHandler"
QUnit.test( "groupNameValid",
  function(){
    QUnit.ok(
      !handlers.groupNameValid("aopkdepaokepaokdkpeokdpeoakdpokapokdpoaekdoepkpoqkepoqk"),
      "Passed!"
      )

})
