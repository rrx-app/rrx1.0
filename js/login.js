function login() {
  var username = $('#username').val();
  var password = $('#password').val();

  // LeanCloud - 登录
  // https://leancloud.cn/docs/leanstorage_guide-js.html#用户名和密码登录
  AV.User.logIn(username, password).then(function () {
                               mui.openWindow({
                                url:'index.html',
                                id:'index.html'
                            })
  }, function (error) {
    alert(JSON.stringify(error));
  });
};

$(function() {
  $(".mui-input-group").on('submit', function(e) {
    e.preventDefault();
    login();
  });
});