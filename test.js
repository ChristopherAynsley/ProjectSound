let nameFunc = require('./groupNameValid')

QUnit.test( "groupNameValid", function() {
  equals(nameFunc("aopkdepaokepaokdkpeokdpeoakdpokapokdpoaekdoepkpoqkepoqk"),false,  "Passed!" );
});
