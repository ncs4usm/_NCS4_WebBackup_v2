
"use strict";
var app = angular.module('Homeslider', ['ui.carousel']);


app.controller('slideCtrl', function(scope){
  $scope.items = [1,2,3,4,5]
});
// .run(['Carousel', (Carousel) => {
//   Carousel.setOptions({
//     arrows: true,
//     autoplay: false,
//     autoplaySpeed: 3000,
//     cssEase: 'ease',
//     dots: false,
//
//     easing: 'linear',
//     fade: false,
//     infinite: true,
//     initialSlide: 0,
//
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     speed: 500,
//   });
// }]);
//
// app.controller('SlideCtrl', function($scope){
//   $scope.slides = [
//     {
//       title: 'UAV',
//       small_screen: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Carousel%20Images/Homeslide/Home_Slide_UAV_Forum_980.jpg',
//       big_screen: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Carousel%20Images/Homeslide/Home_Slide_UAV_Forum_2000.jpg',
//       link: 'http://www.ncs4.com/uav',
//     },
//     {
//       title: 'Gameday Security Magazine',
//       small_screen: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Carousel%20Images/Homeslide/Home_Slide_Gameday_Spring_2018_980.jpg',
//       big_screen: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Carousel%20Images/Homeslide/Home_Slide_Gameday_Spring_2018_2000.jpg',
//       link: 'http://www.ncs4.com/knowledgeportal/gameday-security',
//     },
//     {
//       title: 'Conference 2018',
//       small_screen: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Carousel%20Images/Homeslide/conference_slide_980.jpg',
//       big_screen: 'https://higherlogicdownload.s3.amazonaws.com/NCS4/9c6c4d55-e531-4334-a8e4-aa15c3ebd848/UploadedImages/Carousel%20Images/Homeslide/conference_slide_WIDE.jpg',
//       link: 'http://www.cvent.com/events/2018-national-conference/event-summary-1813e9e02fcb4ecb87244c2c73efe04d.aspx',
//     },
//   ];
// });
