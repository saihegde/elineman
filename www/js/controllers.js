angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $rootScope, $ionicPush, $ionicUser) {
  // Nothing to see here.
})

.controller('JobsCtrl', function($scope, $rootScope, $ionicPush, $ionicUser) {
  // Nothing to see here.
})

.controller('CalculatorCtrl', function($scope, $rootScope, $ionicPush, $ionicUser) {
    $scope.wires = [
  {
    "id":"1",
    "awg":"0000",
    "diameterMil":"460",
    "circularMil":"211,592",
    "area":"107",
    "diameter":"11.7"
  },
  {
    "id":"2",
    "awg":"000",
    "diameterMil":"410",
    "circularMil":"167,800",
    "area":"85",
    "diameter":"10.4"
  },
  {
    "id":"3",
    "awg":"00",
    "diameterMil":"365",
    "circularMil":"133,072",
    "area":"67.4",
    "diameter":"9.27"
  },
  {
    "id":"4",
    "awg":"0",
    "diameterMil":"325",
    "circularMil":"105,531",
    "area":"53.5",
    "diameter":"8.25"
  },
  {
    "id":"5",
    "awg":"1",
    "diameterMil":"289",
    "circularMil":"83,690",
    "area":"42.4",
    "diameter":"7.35"
  },
  {
    "id":"6",
    "awg":"2",
    "diameterMil":"258",
    "circularMil":"66,369",
    "area":"33.6",
    "diameter":"6.54"
  },
  {
    "id":"7",
    "awg":"3",
    "diameterMil":"229",
    "circularMil":"52,633",
    "area":"26.7",
    "diameter":"5.83"
  },
  {
    "id":"8",
    "awg":"4",
    "diameterMil":"204",
    "circularMil":"41,740",
    "area":"21.2",
    "diameter":"5.19"
  },
  {
    "id":"9",
    "awg":"5",
    "diameterMil":"182",
    "circularMil":"33,101",
    "area":"16.8",
    "diameter":"4.62"
  },
  {
    "id":"10",
    "awg":"6",
    "diameterMil":"162",
    "circularMil":"26,251",
    "area":"13.3",
    "diameter":"4.12"
  },
  {
    "id":"11",
    "awg":"7",
    "diameterMil":"144",
    "circularMil":"20,818",
    "area":"10.5",
    "diameter":"3.67"
  },
  {
    "id":"12",
    "awg":"8",
    "diameterMil":"128",
    "circularMil":"16,509",
    "area":"8.37",
    "diameter":"3.26"
  },
  {
    "id":"13",
    "awg":"9",
    "diameterMil":"114",
    "circularMil":"13,092",
    "area":"6.63",
    "diameter":"2.91"
  },
  {
    "id":"14",
    "awg":"10",
    "diameterMil":"102",
    "circularMil":"10,383",
    "area":"5.26",
    "diameter":"2.59"
  },
  {
    "id":"15",
    "awg":"11",
    "diameterMil":"90.7",
    "circularMil":"8,234",
    "area":"4.17",
    "diameter":"2.31"
  },
  {
    "id":"16",
    "awg":"12",
    "diameterMil":"80.8",
    "circularMil":"6,530",
    "area":"3.31",
    "diameter":"2.05"
  },
  {
    "id":"17",
    "awg":"13",
    "diameterMil":"72",
    "circularMil":"5,178",
    "area":"2.62",
    "diameter":"1.83"
  },
  {
    "id":"18",
    "awg":"14",
    "diameterMil":"64.1",
    "circularMil":"4,107",
    "area":"2.08",
    "diameter":"1.63"
  },
  {
    "id":"19",
    "awg":"15",
    "diameterMil":"57.1",
    "circularMil":"3,257",
    "area":"1.65",
    "diameter":"1.45"
  },
  {
    "id":"20",
    "awg":"16",
    "diameterMil":"50.8",
    "circularMil":"2,583",
    "area":"1.31",
    "diameter":"1.29"
  },
  {
    "id":"21",
    "awg":"17",
    "diameterMil":"45.3",
    "circularMil":"2,048",
    "area":"1.04",
    "diameter":"1.15"
  },
  {
    "id":"22",
    "awg":"20",
    "diameterMil":"32",
    "circularMil":"1,022",
    "area":"0.518",
    "diameter":"0.812"
  },
  {
    "id":"23",
    "awg":"21",
    "diameterMil":"28.5",
    "circularMil":"810.1",
    "area":"0.41",
    "diameter":"0.723"
  },
  {
    "id":"24",
    "awg":"22",
    "diameterMil":"25.3",
    "circularMil":"642.4",
    "area":"0.326",
    "diameter":"0.644"
  },
  {
    "id":"25",
    "awg":"23",
    "diameterMil":"22.6",
    "circularMil":"509.5",
    "area":"0.258",
    "diameter":"0.573"
  },
  {
    "id":"26",
    "awg":"24",
    "diameterMil":"20.1",
    "circularMil":"404",
    "area":"0.205",
    "diameter":"0.511"
  },
  {
    "id":"27",
    "awg":"25",
    "diameterMil":"17.9",
    "circularMil":"320.4",
    "area":"0.162",
    "diameter":"0.455"
  }
]
})

.controller('SnapitCtrl', function($scope, $rootScope, $ionicPush, $ionicUser) {
    $scope.images = [];
 
    $scope.loadImages = function() {
        $scope.images.push({id: 0, src: "http://www.gazette.net/storyimage/PN/20120425/NEWS/704259698/AR/0/AR-704259698.jpg"});
        $scope.images.push({id: 1, src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNHq7ga5VHIMnqUeulVxkEKogg-x9qdEnN1AYMbpHZHe-XOGYL"});
        $scope.images.push({id: 2, src: "http://www.privateline.com/OSP/FirstGTElineman.jpg"});
        $scope.images.push({id: 3, src: "http://www.ashley-chicot.com/assets/John-640.jpg"});
        for(var i = 4; i < 100; i++) {
            $scope.images.push({id: i, src: "http://placehold.it/50x50"});
        }
    }
})

.controller('UserCtrl', function($scope, $rootScope, $ionicUser) {
  /**
   * Identifies a new user with the Ionic User service (read the docs at http://docs.ionic.io/identify/). This should be
   * called before any other registrations take place.
   **/
  $scope.identifyUser = function() {
    console.log('Ionic User: Identifying with Ionic User service');

    var user = $ionicUser.get();
    if(!user.user_id) {
      // Set your user_id here, or generate a random one.
      user.user_id = $ionicUser.generateGUID()
    };

    // Add some metadata to your user object.
    angular.extend(user, {
      name: 'Ionitron',
      message: 'I come from planet Ion'
    });

    // Identify your user with the Ionic User Service
    $ionicUser.identify(user).then(function(){
      alert('Successfully identified user ' + user.name + '\n ID ' + user.user_id);
    });
  };
})

.controller('PushCtrl', function($http, $scope, $rootScope, $ionicPush, $ionicApp) {
  // Put your private API key here to be able to send push notifications from within the app.
  // TODO: Add your private API key here if you want to push from your device.
  $scope.privateKey = '';

  // Write your own code here to handle new device tokens from push notification registration as they come in.
  $rootScope.$on('$cordovaPush:tokenReceived', function(event, data) {
    alert("Successfully registered token " + data.token);
    console.log('Ionic Push: Got token ', data.token, data.platform);
    $scope.token = data.token;
  });

  /**
   * Registers the currently identified Ionic User for push notifications on the current device. This should either pass
   * a user object to identify or be called after $ionicUser.identify()
   * (read the docs at http://docs.ionic.io/push/installation/).
   **/
  $scope.pushRegister = function() {
    console.log('Ionic Push: Registering user');

    // Register with the Ionic Push service.  All parameters are optional.
    $ionicPush.register({
      canShowAlert: true, //Should new pushes show an alert on your screen?
      canSetBadge: true, //Should new pushes be allowed to update app icon badges?
      canPlaySound: true, //Should notifications be allowed to play a sound?
      canRunActionsOnWake: true, // Whether to run auto actions outside the app,
      onNotification: function(notification) {
        // Handle new push notifications here
        // console.log(notification);
        return true;
      }
    }).then(function(deviceToken) {
      //Save the device token, if necessary
    });
  };

  /**
   * If you've added your Private API Key, you can send a push notification directly fro the current device.  Since the
   * app iwll be open when this happens, you probably will not see the notification handled by the OS, but it should
   * still be handled by whatever function you define.
   **/
  $scope.sendPush = function() {
    if ($scope.privateKey) {
      alert('A notification will be sent to you 5 seconds after you close this alert.  They can take a few minutes to arrive.');
      var appId = $ionicApp.getApp().app_id;
      var auth = btoa($scope.privateKey + ':'); // Base64 encode your key
      var req = {
        method: 'POST',
        url: $ionicApp.getValue('push_api_server') + '/api/v1/push',
        headers: {
          'Content-Type': 'application/json',
          'X-Ionic-Application-Id': appId,
          'Authorization': 'basic ' + auth
        },
        data: {
          "tokens": [$scope.token],
          "notification": {
            "alert":"Hello World!"
          }
        }
      };

      setTimeout(function(){
        $http(req).success(function(resp){
            console.log("Ionic Push: Push success!");
          }).error(function(error){
            console.log("Ionic Push: Push error...");
          });
      }, 5000);
    } else {
      alert('Uh-oh!  To use this function, add your Private API Key to line 36 of controllers.js');
    }
  };
})

.controller('AnalyticsCtrl', function($scope, $ionicAnalytics) {

  // Track a fake purchase event.
  $scope.trackPurchase = function() {
    console.log("Ionic Analytics: Tracking a fake purchase.");
    $ionicAnalytics.track('purchase', {
      item_id: 101,
      item_name: 'A-Trak player'
    });
    alert('Tracked purchase of A_Trak player ID 101.');
  };

  // Track a fake review event
  $scope.trackReview = function() {
    console.log("Ionic Analytics: Tracking a fake review.");
    $ionicAnalytics.track('review', {
      star_rating: 5,
      reviewer_name: 'John',
      content: 'Awesome app!'
    });
    alert('Tracked 5-star review from John, "Awesome app!"');
  };
})

.controller('DeployCtrl', function($scope, $rootScope, $ionicDeploy) {
  $scope.updateMinutes = 2;

  // Handle action when update is available
  $rootScope.$on('$ionicDeploy:updateAvailable', function() {
    console.log('Ionic Deploy: New update available!');
    $scope.hasUpdate = true;
  });

  // Stop checking for updates form Ionic Deploy
  $scope.stopCheckingForUpdates = function() {
    $ionicDeploy.unwatch();
  };

  // Update app code with new release from Ionic Deploy
  $scope.doUpdate = function() {
    $ionicDeploy.update().then(function(res) {
      console.log('Ionic Deploy: Update Success! ', res);
    }, function(err) {
      console.log('Ionic Deploy: Update error! ', err);
    }, function(prog) {
      console.log('Ionic Deploy: Progress... ', prog);
    });
  };

  // Check Ionic Deploy for new code
  $scope.checkForUpdates = function() {
    console.log('Ionic Deploy: Checking for updates');
    $ionicDeploy.check().then(function(hasUpdate) {
      console.log('Ionic Deploy: Update available: ' + hasUpdate);
      $rootScope.lastChecked = new Date();
      $scope.hasUpdate = hasUpdate;
    }, function(err) {
      console.error('Ionic Deploy: Unable to check for updates', err);
    });
  }
});
