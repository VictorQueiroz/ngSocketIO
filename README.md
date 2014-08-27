ngSocketIO
==========

Easy integration of Socket.IO and AngularJS.

### Usage
```
bower install angular-socketio --save
```

```
angular
  .module('app', ['ngSocketIO'])

  .controller('MainCtrl', function ($scope, $socket, Post) {
    $scope.post = new Post;
    $scope.posts = Post.query();
  
    $scope.savePost = function (post) {
      post
        .$save()
        .then(function (post) {
          $scope.$emit('post new', post._id);
        });
    };
    
    $socket().then(function (socket) {
      $scope.$on('post new', function (event, _id) {
        console.log('Emitting event to server...');
      
        return socket.emit('post new', _id);
      });
    
      socket.on('post new', function (post) {
        $scope.posts.push(post);
      });
    });
  });
```
