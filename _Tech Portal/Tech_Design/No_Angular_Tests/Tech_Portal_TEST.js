$(document).ready(()=>{
  var img = SVG('techy-bg')
  $.get()
});

app = angular.module('IntApp', []);

const SAMPLESENTENCE = /*html*/`<em>Lorem Ipsum</em> is a set of latin filler text that is often used during development to fill out information.`;
const SAMPLEPARAGRAPH = /*html*/`
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate lacus sit amet purus pulvinar, eu semper ligula imperdiet. Aliquam ut ipsum nec mi dapibus gravida. Pellentesque ornare vehicula suscipit. In tristique massa erat. Duis id sem neque. Aenean pretium dui vitae ante sollicitudin porta sed nec nulla. Curabitur dapibus purus risus, quis bibendum odio placerat molestie. Curabitur suscipit libero nulla, nec aliquet leo commodo et.</p>
<p>In porta felis a lectus lacinia iaculis. Ut consequat ultrices interdum. Duis vitae metus sed est accumsan sollicitudin. Quisque dictum augue at mi sodales, eu aliquam mi tincidunt. Cras rhoncus ornare orci, ut blandit sapien pellentesque euismod. Phasellus vestibulum purus ante, ac euismod elit tincidunt sit amet. Suspendisse dignissim orci nec arcu viverra, vitae hendrerit leo blandit. Vivamus tincidunt nulla gravida nulla egestas, quis iaculis eros congue. In hac habitasse platea dictumst. Integer gravida imperdiet tortor, nec eleifend dolor auctor at. Duis sodales leo augue, vel dignissim enim varius ut.</p>
<p>Integer vulputate ultricies lorem, ut tincidunt ligula sodales non. Sed sit amet tellus felis. Nulla eget pellentesque neque. Cras libero urna, rutrum id nulla viverra, tempor consequat quam. Sed tristique mattis ultricies. Vestibulum convallis, lectus et tempor fermentum, ante tellus euismod leo, ut vestibulum nulla turpis at purus. Maecenas tempor sagittis ligula nec mattis. Quisque varius egestas neque sit amet facilisis. Cras lectus metus, convallis et aliquet ac, rhoncus sed massa. Donec eu erat diam. In faucibus est id mi commodo, nec elementum purus lacinia. Pellentesque at elit eu nisl vestibulum gravida eu non nibh.</p>
<p>Nunc tempor est et tincidunt ullamcorper. Ut sit amet diam eu metus facilisis interdum. Etiam pellentesque lacus sit amet purus molestie placerat. In laoreet sapien et venenatis egestas. Praesent malesuada ipsum mi, vel faucibus quam gravida sed. Proin in porttitor diam. Suspendisse potenti. Quisque vestibulum facilisis tellus, a eleifend dolor efficitur eget. Pellentesque egestas scelerisque tincidunt. Quisque a ipsum tincidunt erat pharetra bibendum ut eu justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus eu pharetra risus. Morbi lectus ex, pulvinar in dui in, porta dignissim justo. Etiam nec diam non lacus aliquam placerat at a massa. Duis tempor risus et risus ultricies ultricies. Phasellus non consequat nunc, ac rhoncus lorem.</p>
<p>Vestibulum non velit eu eros mattis imperdiet. Maecenas non lorem justo. Vivamus finibus, nulla eu blandit facilisis, nisl magna tristique odio, a laoreet dui felis sit amet mi. Maecenas tristique, justo eget molestie dictum, dui dolor aliquam nisl, in bibendum orci orci at orci. Etiam ut mollis diam, ut elementum nisi. Aenean vel tortor ornare, convallis leo id, fermentum mauris. Donec pharetra aliquet velit et dignissim. Praesent in nisl venenatis, consectetur nunc id, volutpat ligula. Duis ligula sem, convallis id mattis non, imperdiet nec risus. Duis a felis risus.</p>
`;
app.controller('IntCtrl', ['$scope', '$sce', function($scope, $sce) {

  $scope.library = {
    'Partner' : {
      'desc': $sce.trustAsHtml( /*HTML*/`
        <p>Open to all security integrators, manufacturers, software providers, and other affiliates and stakeholders interested in solving critical issues in the sport and entertainment safety and security industry. Government and academic national laboratories are encouraged to join.</p>
        <ul>
        <li><strong>Make a dedicated commitment to the National Lab </strong></li>
        <li><strong>Research - </strong>Perform collaborative and sponsored R&amp;D on subjects related to sport and entertainment security facilities, equipment, processes and personnel.</li>
        <li><strong>Become a member to the International Sport Security Strategic Partners with INTERPOL</strong></li>
        <li><strong>Access to the Sport Technology Knowledge Portal &ndash; </strong>Comprehensive repository of good practices and an online collaborative platform where experts in the field can share, discuss, analyze and publish information on the evolving aspects of sport technology</li>
        <li><strong>Participate in National Security Events - </strong>Present Case Studies and educate professionals at the Annual National Sport Safety and Security Conference, National Summits and through other available channels</li>
        <li><strong>Training Academy </strong>- Utilize a simulated operation center to test and apply safety and security best -practices for training and exercise capabilities</li>
        <li><strong>Technology Applications - </strong>Perform laboratory testing on related products and services with <em>Product Reviews</em>, <em>Product Assessments</em>, and <em>Showcases</em></li>
        </ul>
        <p>Investment:&nbsp; $18,000 per year for Global Investment (INTERPOL)</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $12,000 per year for Domestic Investment</p>
        <p>&nbsp;</p>
      `),
    },
    'Associate' : {
      'desc': $sce.trustAsHtml(`
        <p>Open to all academia, architects, master planners, designers, federal agencies, consultants, and trade alliances stakeholders engaged in supporting the advances of sport and entertainment security solutions.</p>
        <ul>
        <li><strong>Make a dedicated commitment to the National Lab </strong></li>
        <li><strong>Access to the Sport Technology Knowledge Portal &ndash; </strong>Comprehensive repository of good practices and an online collaborative platform where experts in the field can share, discuss, analyze and publish information on the evolving aspects of sport technology</li>
        <li><strong>Technology Applications - </strong>Perform laboratory testing on related products and services with <em>Product Reviews</em>, <em>Product Assessments</em>, and <em>Showcases</em></li>
        </ul>
        <p>Investment: $9,000 per year</p>
      `),
    },
    'Friend': {
      'desc': $sce.trustAsHtml(`
        <p>Open to those technology corporations interested in seeking knowledge, and information relative to sport and entertainment technology.</p>
        <p>Exclusively for technology corporations that have a principal function of goods and services to the sports and entertainment safety and security industry.&nbsp;</p>
        <ul>
        <li><strong>Access to the Sport Technology Knowledge Portal &ndash; </strong>Comprehensive repository of good practices and an online collaborative platform where experts in the field can share, discuss, analyze and publish information on the evolving aspects of sport technology</li>
        </ul>
        <p>Investment: $1,000 per year</p>
      `),    

    },
  }

  $scope.libkeys = Object.entries($scope.library);



  /*Pop Win Controller (pwItem)
    VARIABLES:
      Obj: Shallow copy of the current library entry
      Par: Parent of obj's key
      History: Array of keys used for traversing backwards and forwards in your search
      tracker: tracks the current index of history: -1 means empty history
    FUNCTIONS:
      set: PARAMS: string that is the key for the object to set
          sets obj with the associated library entry, cuts off the forward history and pushes the new key, sets tracker to new key
      reset: purges all variables to default
  */

}])


//top tabs of each section
.directive('myTabs', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: ['$scope', function MyTabsController($scope) {
      var panes = $scope.panes = [];

      $scope.select = function(pane) {
        angular.forEach(panes, function(pane) {
          pane.selected = false;
        });
        pane.selected = true;
      }

      this.addPane = function(pane) {
        if(panes.length === 0) {
          $scope.select(pane);
        }
        panes.push(pane);
      };
    }],
    template: /*html*/`
    <div class="tabbable">
      <ul class="nav nav-tabs">
        <li class="underlined" ng-repeat="pane in panes" ng-class="{active:pane.selected}">
          <button class="btns" ng-click="select(pane)" type="button">{{pane.title}}</button>
        </li>
      </ul>
      <div class="tab-content" ng-transclude></div>
    </div>
    `
  }
})
//pane under each set of tabs, fills with data pulled from library
.directive('myPane', function() {
  return {
    require: '^^myTabs',
    restrict: 'E',
    transclude: true,
    scope: {
      title: '@'
    },
    link: function(scope, element, attrs, tabsCtrl) {
      tabsCtrl.addPane(scope);
    },
    template: /*html*/`
    <div class="tab-pane" ng-show="selected">
      <div class="local-flex" ng-transclude></div>
    </div>
    `
  };
})


// SLIDER 2 =============================================================
var slider = tns({
  container: '.my-slider2',
  items: 6,
  slideBy: 'page',
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 5000,
  controlsContainer: "#customize-controls",
  autoplayText: ["▶", "❚❚"],
  controlsText: ["‹", "›"],
  speed: 900,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 2
      },
      800: {
          items: 3
      },
      950: {
          items: 3
      },
      1100: {
          items: 4
      },
      1200: {
          items: 4
      },
      1500: {
          items: 5
      },

  }
});
