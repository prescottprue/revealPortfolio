angular.module('portfolioApp')
.controller('MainCtrl', function($scope){
  console.log('Main controller');
  $scope.currentSlide = {name:'Home', pages:[{caption:'Click site'}]};

  $scope.projects = [
    {
      background:'#46494c',
      content:'<h2 class="name" style="color:#DCDCDD">John Doe</h2><h4>Project Portfolio</h4><p style="margin-top:20%;"><small style="color:#C5C3C6">Arrow keys to navigate</small><br><small style="color:#C5C3C6"> ESC for overview</small></p>'
    },
    {
      name:'Project 1',
      background:'#46494c',
      pages:[
      //Image with styling
        {
          image:{url:'http://placehold.it/350x150', style:'width:500px; border-style:none; background-color:white;'},
          caption:'Project 1 main caption',
          subCaption:'Click down for more detail'
        },
        //Full screen background
        {
          image:{url:'http://placehold.it/1920x1080'},
          caption:'Look at that full screen image!'
        }
      ]
    },
    {
      name:'Project 2',
      pages:[
        {
          image:{url:'http://placehold.it/350x150', style:'width:500px; border-style:none; background-color:white;'},
          caption:'Another awesome project'
        }
      ]
    }
  ];
  Reveal.addEventListener('slidechanged', function( event ) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    var projectData = $scope.projects[event.indexh];
    var slideData = {project:projectData};
    if(projectData.hasOwnProperty('pages') && projectData.pages.length){
      slideData.slide = projectData.pages[event.indexv];
    }
    $scope.currentSlide = slideData;
    console.log('currentSlide:', $scope.currentSlide);
    $scope.$apply();
  });
});
