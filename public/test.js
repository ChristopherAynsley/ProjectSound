
let nameFunc = require('public.inputHandler.groupNameValid')

QUnit.test( "groupNameValid", function() {
equals(nameFunc("aopkdepaokepaokdkpeokdpeoakdpokapokdpoaekdoepkpoqkepoqk"),false,  "Passed!" );
});
