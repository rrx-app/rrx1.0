/*function signup(){
  var username = $('#account').val();
  var password = $('#password').val();
  var email = $('email').val();
  
  // LeanCloud - 注册
  // https://leancloud.cn/docs/leanstorage_guide-js.html#注册
  var user = new AV.User();
  user.setUsername(username);
  user.setPassword(password);
  user.setEmail(email);
  user.signUp().then(function (loginedUser) {
    window.location.href = "login.html";
  }, (function (error) {
  	alert(JSON.stringify(error));
  }));
};

/*$(function() {
  $(".form-signup").on('submit', function(e) {
    e.preventDefault();    //阻止事件默认动作
    signup(); 
  });
});
*/
