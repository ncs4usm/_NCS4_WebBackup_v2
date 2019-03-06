app = angular.module('IntApp', []);

app.filter('slice', function() {
  return function(arr, start, end) {
    return arr.slice(start, end)
  }
});

const SAMPLEPARAGRAPH = 'Lorem Ipsum is some awesome stuff here it goes this is some sample text right here'
app.controller('IntCtrl', function($scope) {
  // GENARRAY:
  // This function is used to generate an array from 0 to N skipping by chunk for array iteration in ng-repeat
  // $scope.genArray = (N, chunk = 1) => new Array(Math.ceil(N/chunk)).fill(undefined).map((val,indx) => indx);

  // DATA:
  // Each entry includes an object of objects plus an array containing its keys (used for ng-repeat)

  // needs_to_render = true;
  // if (typeof(Storage) !== "undefined") { //if able to use storage
  //   if(localStorage.getItem('date_stored') && localStorage.getItem('date_stored') ) { //if info is already stored
  //     needs_to_render = false;
  //   }
  // }
  // if(needs_to_render) {
  //   //render tree
  //
  // } else {
  //   //pull info from storage
  // }

  $scope.library = {
    ResearchAreas: {
        'National_Sport_Security_Lab': {
          name: 'National Sport Security Lab',
          text: SAMPLEPARAGRAPH,
          item_link: '',
          sub_projects: [],
        },
        'Training_Academy': {
          name: 'Training Academy (CONCEPT UNDER DEVELOPMENT)',
          text: SAMPLEPARAGRAPH,
          item_link: '',
        },
        'National_Sport_Security_Lab': {
          name: 'Sports Safety and Security Best Practices',
          text: SAMPLEPARAGRAPH,
          item_link: '',
        },
        'Risk_Management_Principles': {
          name: 'Risk Management Principles',
          text: SAMPLEPARAGRAPH,
          item_link: '',
        },
        'Stadium_Twenty25': {
          name: 'Stadium Twenty25 - Building the Future of Sport Safety and Security',
          text: SAMPLEPARAGRAPH,
          item_link: '',
        },
        'Venue': {
          name: 'Venue',
          text: SAMPLEPARAGRAPH,
          item_link: '',
        },
        'Event': {
          name: 'Event',
          text: SAMPLEPARAGRAPH,
          item_link: '',
        },
        'Crowd': {
          name: 'Crowd',
          text: SAMPLEPARAGRAPH,
          item_link: '',
        },
        'Staff': {
          name: 'Staff',
          text: SAMPLEPARAGRAPH,
          item_link: '',
        },
        'Workforce_Development': {
          name: 'Workforce Development',
          text: SAMPLEPARAGRAPH,
          item_link: '',
        },
        'Research_Fellows_Studies': {
          name: 'Research Fellows Studies',
          text: SAMPLEPARAGRAPH,
          item_link: '',
        },
    },
    ImpactAreas: {
        'I_Area_1': {
          name: 'I Area 1',
          text: SAMPLEPARAGRAPH,
          item_link: '',
        },
    },
  }

///
  $scope.Groups = {
    'NSSL': {
      name: 'National Sport Security Lab',
      text: SAMPLEPARAGRAPH,
      item_link: '',
      Projects: [],
    },
    'Training_Academy': {
      name: 'Training Academy',
      text: SAMPLEPARAGRAPH,
      item_link: '',
    },
    'Venue': {
      name: 'Venue',
      text: SAMPLEPARAGRAPH,
      item_link: '',
    },
    'Event': {
      name: 'Event',
      text: SAMPLEPARAGRAPH,
      item_link: '',
    },
    'Crowd': {
      name: 'Crowd',
      text: SAMPLEPARAGRAPH,
      item_link: '',
    },
    'Staff': {
      name: 'Staff',
      text: SAMPLEPARAGRAPH,
      item_link: '',
    },
    'Research_Consorcia': {
      name: 'Research Consorcia',
      text: SAMPLEPARAGRAPH,
      item_link: '',
    },
  };
  // $scope.Groups.keys = Object.keys($scope.Groups)


  $scope.News = {
    'sample_news_1': {
      name: 'Sample News 1',
      text: SAMPLEPARAGRAPH,
      item_link: '',
    },
  };
  $scope.News.keys = Object.keys($scope.News)


  $scope.People = {
    'John_Joeson': {
      name: 'John Joeson',
      text: SAMPLEPARAGRAPH,
      item_link: '',
    },
    'Sammy_Seagon': {
      name: 'Sammy Seagon',
      text: SAMPLEPARAGRAPH,
      item_link: '',
    },
    'Garry_Gaigax': {
      name: 'Garry Gaigax',
      text: SAMPLEPARAGRAPH,
      item_link: '',
    },
    'Olivia_Olson': {
      name: 'Olivia Olson',
      text: SAMPLEPARAGRAPH,
      item_link: '',
    },
    'Barry_Barns': {
      name: 'Barry Barns',
      text: SAMPLEPARAGRAPH,
      item_link: '',
    },
    'Adam_Alexon': {
      name: 'Adam Alexon',
      text: SAMPLEPARAGRAPH,
      item_link: '',
    },
    'Emma_Erret': {
      name: 'Emma Erret',
      text: SAMPLEPARAGRAPH,
      item_link: '',
    },
    'Karry_Ken': {
      name: 'Karry Ken',
      text: SAMPLEPARAGRAPH,
      item_link: '',
    },
    'Harry_Harris': {
      name: 'Harry Harris',
      text: SAMPLEPARAGRAPH,
      item_link: '',
    },
    'Harry_Haarris': {
      name: 'Harry Haarris',
      text: SAMPLEPARAGRAPH,
      item_link: '',
    },
    'Harry_aaaaa': {
      name: 'Harry aaaaa',
      text: SAMPLEPARAGRAPH,
      item_link: '',
    },
  };
  $scope.People.keys = Object.keys($scope.People)

  $scope.Projects = {
    'Stadium_As_An_Ecosystem': {
      name: 'Stadium As An Ecosystem',
      sub_projects: [],
    },
    'Security_Operating_Model': {
      name: 'Security Operating Model',
      text: SAMPLEPARAGRAPH,
      item_link: '',
      sub_projects: [],
      collaborators: [
         $scope.People.Harry_Harris,
         $scope.People.Sammy_Seagon,
       ]
    },
    'Sports_Security_Risk_Model': {
      name: 'Sports Security Risk Model',
      text: SAMPLEPARAGRAPH,
      item_link: '',
      collaborators: [
         $scope.People.Harry_Harris,
         $scope.People.Sammy_Seagon,
       ],
    },
    'Stadium_Operating_Model': {
      name: 'Stadium Operating Model',
      text: SAMPLEPARAGRAPH,
      item_link: '',
      collaborators: [
         $scope.People.Harry_Harris,
         $scope.People.Sammy_Seagon,
       ]
    },
    'Product_Reviews': {
      name: 'Product Reviews',
    },
    'Product_Snapshots': {
      name: 'Product Snapshots',
    },
    'Product_Evaluations': {
      name: 'Product Evaluations',
    },
    'Product_Showcase': {
      name: 'Product Showcase',
    },
    'Whitepapers': {
      name: 'Whitepapers',
    },
  };
  $scope.Projects.keys = Object.keys($scope.Projects)

  //Groups - Link Relevant Info
  $scope.Groups.NSSL.Projects = [
    $scope.Projects.Stadium_As_An_Ecosystem,
  ]

  //Projects - Link Relevant Info
  $scope.Projects.Stadium_As_An_Ecosystem.sub_projects = [
      $scope.Projects.Security_Operating_Model,
  ]
  $scope.Projects.Security_Operating_Model.sub_projects = [
      $scope.Projects.Security_Operating_Model,
  ]

  //Groups&ResearchAreas


});
      // <div swapper-btn class="underlined" objnames="{{obj_names}}" hi-fun="{{hiFun()}}"></div>
app.directive('switchArea', ()=>{
  return {
    template:`
      <div class="underlined" >
        <button class="btns" type="button" ng-click="hiFun()" ng-repeat="name in obj_names">{{name}}</button>
      </div>
      <div>
        <div id='eheh' > click meee</div>
      </div>
    `,
    controller: () => {

    },
    link: (scope, element, attrs) => {
      // console.log(attrs)
      // console.log(element)
      scope.obj_names = scope.$eval(attrs.objnames);
      function hiFun() {
        console.log('hi');
      }
      let buttons = angular.element(element.children()[0])[0].children;
      console.log(buttons)
      for(let i, len=buttons.length; i < len; ++i) {
        console.log(buttons[i])
      }
    },
  }
});
{/* <button class="btns" type="button" ng-repeat="name in obj_names">{{name}}</button> */}
app.directive('swapperBtn', ()=>{
  return {
    template:`

    `,
    link: (scope, element, attrs) => {
      console.log(attrs)
      scope.obj_names = scope.$eval(attrs.objnames);
      scope.hiFun = scope.$eval(attrs.hiFun);
    },
  }
});


app.directive('cardA' , ()=>{
  return{
    template:`
      <div class="local-flex">
        <div class="card" ng-repeat="key in obj_keys" >
          {{key}}
          <h4 style="font-size:1.0em;">{{object[key].name}}</h4>
          <hr>
          <br>
          <p> {{object[key].text}}</p>
        </div>
      </div>
    `,
    link: (scope, element, attrs)=>{
      console.log(attrs.object)
      if(attrs.object){
        scope.object = scope.$eval(attrs.object);
        scope.obj_keys = Object.keys(scope.$eval(attrs.object));
      }
    },
  }
});
