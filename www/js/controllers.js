angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();
})

.controller('HomeCtrl', function ($scope, $rootScope, $ionicPush, $ionicUser) {
    // Nothing to see here.
})

.controller('JobsCtrl', function ($scope, $rootScope, $ionicPush, $ionicUser) {
    // Nothing to see here.
})

.controller('CalculatorCtrl', function ($http, $scope, $rootScope, $ionicPush, $ionicUser) {
    $http.get("json/wire-sizes.json").success(function (results) {
      $scope.wires=results;
    });
    $scope.singlePhaseKvaRatings = ["10", "15", "25", "37.5", "50", "75", "100"];
    $scope.singlePhaseCircuitVoltages = ["120", "240", "480", "2400", "7200", "7620", "7960", "14400", "19920"];
    $scope.threePhaseKvaRatings = ["30", "45", "75", "112.5", "150", "225", "300"];
    $scope.threePhaseCircuitVoltages = ["208", "240", "480", "4160", "124720", "13200", "13800", "24500", "34500"];
})

.controller('SnapitCtrl', function ($scope, $rootScope, $ionicPush, $ionicUser) {
    $scope.images = [];

    $scope.loadImages = function () {
        $scope.images.push({
            id: 0,
            src: "http://www.gazette.net/storyimage/PN/20120425/NEWS/704259698/AR/0/AR-704259698.jpg"
        });
        $scope.images.push({
            id: 1,
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNHq7ga5VHIMnqUeulVxkEKogg-x9qdEnN1AYMbpHZHe-XOGYL"
        });
        $scope.images.push({
            id: 2,
            src: "http://www.privateline.com/OSP/FirstGTElineman.jpg"
        });
        $scope.images.push({
            id: 3,
            src: "http://www.ashley-chicot.com/assets/John-640.jpg"
        });
        for (var i = 4; i < 100; i++) {
            $scope.images.push({
                id: i,
                src: "http://placehold.it/50x50"
            });
        }
    }
})

.controller('UserCtrl', function ($scope, $rootScope, $ionicUser) {
    /**
     * Identifies a new user with the Ionic User service (read the docs at http://docs.ionic.io/identify/). This should be
     * called before any other registrations take place.
     **/
    $scope.identifyUser = function () {
        console.log('Ionic User: Identifying with Ionic User service');

        var user = $ionicUser.get();
        if (!user.user_id) {
            // Set your user_id here, or generate a random one.
            user.user_id = $ionicUser.generateGUID()
        };

        // Add some metadata to your user object.
        angular.extend(user, {
            name: 'Ionitron',
            message: 'I come from planet Ion'
        });

        // Identify your user with the Ionic User Service
        $ionicUser.identify(user).then(function () {
            alert('Successfully identified user ' + user.name + '\n ID ' + user.user_id);
        });
    };
})

.controller('PushCtrl', function ($http, $scope, $rootScope, $ionicPush, $ionicApp) {
    // Put your private API key here to be able to send push notifications from within the app.
    // TODO: Add your private API key here if you want to push from your device.
    $scope.privateKey = '';

    // Write your own code here to handle new device tokens from push notification registration as they come in.
    $rootScope.$on('$cordovaPush:tokenReceived', function (event, data) {
        alert("Successfully registered token " + data.token);
        console.log('Ionic Push: Got token ', data.token, data.platform);
        $scope.token = data.token;
    });

    /**
     * Registers the currently identified Ionic User for push notifications on the current device. This should either pass
     * a user object to identify or be called after $ionicUser.identify()
     * (read the docs at http://docs.ionic.io/push/installation/).
     **/
    $scope.pushRegister = function () {
        console.log('Ionic Push: Registering user');

        // Register with the Ionic Push service.  All parameters are optional.
        $ionicPush.register({
            canShowAlert: true, //Should new pushes show an alert on your screen?
            canSetBadge: true, //Should new pushes be allowed to update app icon badges?
            canPlaySound: true, //Should notifications be allowed to play a sound?
            canRunActionsOnWake: true, // Whether to run auto actions outside the app,
            onNotification: function (notification) {
                // Handle new push notifications here
                // console.log(notification);
                return true;
            }
        }).then(function (deviceToken) {
            //Save the device token, if necessary
        });
    };

    /**
     * If you've added your Private API Key, you can send a push notification directly fro the current device.  Since the
     * app iwll be open when this happens, you probably will not see the notification handled by the OS, but it should
     * still be handled by whatever function you define.
     **/
    $scope.sendPush = function () {
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
                        "alert": "Hello World!"
                    }
                }
            };

            setTimeout(function () {
                $http(req).success(function (resp) {
                    console.log("Ionic Push: Push success!");
                }).error(function (error) {
                    console.log("Ionic Push: Push error...");
                });
            }, 5000);
        } else {
            alert('Uh-oh!  To use this function, add your Private API Key to line 36 of controllers.js');
        }
    };
})

.controller('AnalyticsCtrl', function ($scope, $ionicAnalytics) {

    // Track a fake purchase event.
    $scope.trackPurchase = function () {
        console.log("Ionic Analytics: Tracking a fake purchase.");
        $ionicAnalytics.track('purchase', {
            item_id: 101,
            item_name: 'A-Trak player'
        });
        alert('Tracked purchase of A_Trak player ID 101.');
    };

    // Track a fake review event
    $scope.trackReview = function () {
        console.log("Ionic Analytics: Tracking a fake review.");
        $ionicAnalytics.track('review', {
            star_rating: 5,
            reviewer_name: 'John',
            content: 'Awesome app!'
        });
        alert('Tracked 5-star review from John, "Awesome app!"');
    };
})

.controller('DeployCtrl', function ($scope, $rootScope, $ionicDeploy) {
    $scope.updateMinutes = 2;

    // Handle action when update is available
    $rootScope.$on('$ionicDeploy:updateAvailable', function () {
        console.log('Ionic Deploy: New update available!');
        $scope.hasUpdate = true;
    });

    // Stop checking for updates form Ionic Deploy
    $scope.stopCheckingForUpdates = function () {
        $ionicDeploy.unwatch();
    };

    // Update app code with new release from Ionic Deploy
    $scope.doUpdate = function () {
        $ionicDeploy.update().then(function (res) {
            console.log('Ionic Deploy: Update Success! ', res);
        }, function (err) {
            console.log('Ionic Deploy: Update error! ', err);
        }, function (prog) {
            console.log('Ionic Deploy: Progress... ', prog);
        });
    };

    // Check Ionic Deploy for new code
    $scope.checkForUpdates = function () {
        console.log('Ionic Deploy: Checking for updates');
        $ionicDeploy.check().then(function (hasUpdate) {
            console.log('Ionic Deploy: Update available: ' + hasUpdate);
            $rootScope.lastChecked = new Date();
            $scope.hasUpdate = hasUpdate;
        }, function (err) {
            console.error('Ionic Deploy: Unable to check for updates', err);
        });
    }
});
