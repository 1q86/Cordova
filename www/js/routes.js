angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.category', {
    url: '/Category',
    views: {
      'tab5': {
        templateUrl: 'templates/category.html',
        controller: 'categoryCtrl'
      }
    }
  })

  .state('tabsController.author', {
    url: '/Author',
    views: {
      'tab5': {
        templateUrl: 'templates/author.html',
        controller: 'authorCtrl'
      }
    }
  })

  .state('tabsController.download', {
    url: '/Download',
    views: {
      'tab3': {
        templateUrl: 'templates/download.html',
        controller: 'downloadCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/Login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signUp', {
    url: '/Sign Up',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

  .state('userInfo', {
    url: '/User Info',
    templateUrl: 'templates/userInfo.html',
    controller: 'userInfoCtrl'
  })

  .state('about', {
    url: '/About',
    templateUrl: 'templates/about.html',
    controller: 'aboutCtrl'
  })

  .state('feedback', {
    url: '/page9',
    templateUrl: 'templates/feedback.html',
    controller: 'feedbackCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.authorResult'
      2) Using $state.go programatically:
        $state.go('tabsController.authorResult');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/Author Result
      /page1/tab5/Author Result
      /page1/tab3/Author Result
  */
  .state('tabsController.authorResult', {
    url: '/Author Result',
    views: {
      'tab1': {
        templateUrl: 'templates/authorResult.html',
        controller: 'authorResultCtrl'
      },
      'tab5': {
        templateUrl: 'templates/authorResult.html',
        controller: 'authorResultCtrl'
      },
      'tab3': {
        templateUrl: 'templates/authorResult.html',
        controller: 'authorResultCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.paperList'
      2) Using $state.go programatically:
        $state.go('tabsController.paperList');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/Paper List
      /page1/tab5/Paper List
      /page1/tab3/Paper List
  */
  .state('tabsController.paperList', {
    url: '/Paper List',
    views: {
      'tab1': {
        templateUrl: 'templates/paperList.html',
        controller: 'paperListCtrl'
      },
      'tab5': {
        templateUrl: 'templates/paperList.html',
        controller: 'paperListCtrl'
      },
      'tab3': {
        templateUrl: 'templates/paperList.html',
        controller: 'paperListCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.categoryResult'
      2) Using $state.go programatically:
        $state.go('tabsController.categoryResult');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/Category Result
      /page1/tab5/Category Result
      /page1/tab3/Category Result
  */
  .state('tabsController.categoryResult', {
    url: '/Category Result',
    views: {
      'tab1': {
        templateUrl: 'templates/categoryResult.html',
        controller: 'categoryResultCtrl'
      },
      'tab5': {
        templateUrl: 'templates/categoryResult.html',
        controller: 'categoryResultCtrl'
      },
      'tab3': {
        templateUrl: 'templates/categoryResult.html',
        controller: 'categoryResultCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.singleChoice'
      2) Using $state.go programatically:
        $state.go('tabsController.singleChoice');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/Single Choice
      /page1/tab5/Single Choice
      /page1/tab3/Single Choice
  */
  .state('tabsController.singleChoice', {
    url: '/Single Choice',
    views: {
      'tab1': {
        templateUrl: 'templates/singleChoice.html',
        controller: 'singleChoiceCtrl'
      },
      'tab5': {
        templateUrl: 'templates/singleChoice.html',
        controller: 'singleChoiceCtrl'
      },
      'tab3': {
        templateUrl: 'templates/singleChoice.html',
        controller: 'singleChoiceCtrl'
      }
    }
  })

  .state('systemSet', {
    url: '/System Set',
    templateUrl: 'templates/systemSet.html',
    controller: 'systemSetCtrl'
  })

  .state('tabsController.mine', {
    url: '/Mine',
    views: {
      'tab3': {
        templateUrl: 'templates/mine.html',
        controller: 'mineCtrl'
      }
    }
  })

  .state('tabsController.favourite', {
    url: '/Favourite',
    views: {
      'tab3': {
        templateUrl: 'templates/favourite.html',
        controller: 'favouriteCtrl'
      }
    }
  })

  .state('tabsController.wrong', {
    url: '/Wrong',
    views: {
      'tab3': {
        templateUrl: 'templates/wrong.html',
        controller: 'wrongCtrl'
      }
    }
  })

  .state('tabsController.statistic', {
    url: '/Statistic',
    views: {
      'tab3': {
        templateUrl: 'templates/statistic.html',
        controller: 'statisticCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.tag'
      2) Using $state.go programatically:
        $state.go('tabsController.tag');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/Tag
      /page1/tab5/Tag
  */
  .state('tabsController.tag', {
    url: '/Tag',
    views: {
      'tab1': {
        templateUrl: 'templates/tag.html',
        controller: 'tagCtrl'
      },
      'tab5': {
        templateUrl: 'templates/tag.html',
        controller: 'tagCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.queryResult'
      2) Using $state.go programatically:
        $state.go('tabsController.queryResult');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/Query Result
      /page1/tab5/Query Result
      /page1/tab3/Query Result
  */
  .state('tabsController.queryResult', {
    url: '/Query Result',
    views: {
      'tab1': {
        templateUrl: 'templates/queryResult.html',
        controller: 'queryResultCtrl'
      },
      'tab5': {
        templateUrl: 'templates/queryResult.html',
        controller: 'queryResultCtrl'
      },
      'tab3': {
        templateUrl: 'templates/queryResult.html',
        controller: 'queryResultCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.subCategory'
      2) Using $state.go programatically:
        $state.go('tabsController.subCategory');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/Sub Category
      /page1/tab5/Sub Category
  */
  .state('tabsController.subCategory', {
    url: '/Sub Category',
    views: {
      'tab1': {
        templateUrl: 'templates/subCategory.html',
        controller: 'subCategoryCtrl'
      },
      'tab5': {
        templateUrl: 'templates/subCategory.html',
        controller: 'subCategoryCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.paperSet'
      2) Using $state.go programatically:
        $state.go('tabsController.paperSet');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/Result
      /page1/tab5/Result
      /page1/tab3/Result
  */
  .state('tabsController.paperSet', {
    url: '/Result',
    views: {
      'tab1': {
        templateUrl: 'templates/paperSet.html',
        controller: 'paperSetCtrl'
      },
      'tab5': {
        templateUrl: 'templates/paperSet.html',
        controller: 'paperSetCtrl'
      },
      'tab3': {
        templateUrl: 'templates/paperSet.html',
        controller: 'paperSetCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.titleList'
      2) Using $state.go programatically:
        $state.go('tabsController.titleList');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/Title List
      /page1/tab5/Title List
      /page1/tab3/Title List
  */
  .state('tabsController.titleList', {
    url: '/Title List',
    views: {
      'tab1': {
        templateUrl: 'templates/titleList.html',
        controller: 'titleListCtrl'
      },
      'tab5': {
        templateUrl: 'templates/titleList.html',
        controller: 'titleListCtrl'
      },
      'tab3': {
        templateUrl: 'templates/titleList.html',
        controller: 'titleListCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.answer'
      2) Using $state.go programatically:
        $state.go('tabsController.answer');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/Answer
      /page1/tab5/Answer
      /page1/tab3/Answer
  */
  .state('tabsController.answer', {
    url: '/Answer',
    views: {
      'tab1': {
        templateUrl: 'templates/answer.html',
        controller: 'answerCtrl'
      },
      'tab5': {
        templateUrl: 'templates/answer.html',
        controller: 'answerCtrl'
      },
      'tab3': {
        templateUrl: 'templates/answer.html',
        controller: 'answerCtrl'
      }
    }
  })

  .state('shareApp', {
    url: '/Share App',
    templateUrl: 'templates/shareApp.html',
    controller: 'shareAppCtrl'
  })

  .state('password', {
    url: '/Password',
    templateUrl: 'templates/password.html',
    controller: 'passwordCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.paperShare'
      2) Using $state.go programatically:
        $state.go('tabsController.paperShare');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/Paper Share
      /page1/tab5/Paper Share
      /page1/tab3/Paper Share
  */
  .state('tabsController.paperShare', {
    url: '/Paper Share',
    views: {
      'tab1': {
        templateUrl: 'templates/paperShare.html',
        controller: 'paperShareCtrl'
      },
      'tab5': {
        templateUrl: 'templates/paperShare.html',
        controller: 'paperShareCtrl'
      },
      'tab3': {
        templateUrl: 'templates/paperShare.html',
        controller: 'paperShareCtrl'
      }
    }
  })

  .state('tabsController.queryList', {
    url: '/Query List',
    views: {
      'tab5': {
        templateUrl: 'templates/queryList.html',
        controller: 'queryListCtrl'
      }
    }
  })

  .state('tabsController.home', {
    url: '/Home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.publishList', {
    url: '/Publish List',
    views: {
      'tab2': {
        templateUrl: 'templates/publishList.html',
        controller: 'publishListCtrl'
      }
    }
  })

  .state('tabsController.rankList', {
    url: '/Rank List',
    views: {
      'tab1': {
        templateUrl: 'templates/rankList.html',
        controller: 'rankListCtrl'
      }
    }
  })

  .state('tabsController.myPublish', {
    url: '/My Publish',
    views: {
      'tab3': {
        templateUrl: 'templates/myPublish.html',
        controller: 'myPublishCtrl'
      }
    }
  })

  .state('tabsController.rankByTitle', {
    url: '/Rank By Title',
    views: {
      'tab1': {
        templateUrl: 'templates/rankByTitle.html',
        controller: 'rankByTitleCtrl'
      }
    }
  })

  .state('tabsController.rankByCategory', {
    url: '/Rank By Category',
    views: {
      'tab1': {
        templateUrl: 'templates/rankByCategory.html',
        controller: 'rankByCategoryCtrl'
      }
    }
  })

  .state('tabsController.rankByAuthor', {
    url: '/Rank By Author',
    views: {
      'tab1': {
        templateUrl: 'templates/rankByAuthor.html',
        controller: 'rankByAuthorCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/Home')

  

});