// $(document).ready(()=>{
//   var img = SVG('techy-bg')
//   $.get()
// });

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
      'desc': [
        $sce.trustAsHtml( /*HTML*/`<p>Open to all security integrators, manufacturers, software providers, and other affiliates and stakeholders interested in solving critical issues in the sport and entertainment safety and security industry. Government and academic national laboratories are encouraged to join.</p>
        `), 
        $sce.trustAsHtml( /*HTML*/`
        <p>Investment:<br>
         $18,000 per year for Global Investment (INTERPOL)<br>
         $12,000 per year for Domestic Investment</p>
        <p>&nbsp;</p>`)
      ],
      'benefits': [0,1,2,3,4,5,6],
    },
    // 'Associate' : {
    //   'desc': [
    //     $sce.trustAsHtml(`
    //     <p>Open to all academia, architects, master planners, designers, federal agencies, consultants, and trade alliances stakeholders engaged in supporting the advances of sport and entertainment security solutions.</p>
    //     `), 
    //     $sce.trustAsHtml( /*HTML*/`
    //     <p>Investment: $9,000 per year</p>
    //   `)],
    //   'benefits': [0,3,5],
    // },
    // 'Friend': {
    //   'desc': [
    //     $sce.trustAsHtml(`
    //     <p>Open to those technology corporations interested in seeking knowledge, and information relative to sport and entertainment technology.</p>
    //     <p>Exclusively for technology corporations that have a principal function of goods and services to the sports and entertainment safety and security industry.&nbsp;</p>
    //     `), 
    //     $sce.trustAsHtml( /*HTML*/`
    //     <p>Investment: $1,000 per year</p>
    //   `)],    
    //   'benefits': [0],
    // }
  }
  

  $scope.benefits = [
    $sce.trustAsHtml(`<strong>Make a dedicated commitment to the National Lab </strong>`),
    $sce.trustAsHtml(`<strong>Become a member to the International Sport Security Strategic Partners with INTERPOL</strong>`),
    $sce.trustAsHtml(`<strong>Research - </strong>Perform collaborative and sponsored R&amp;D on subjects related to sport and entertainment security facilities, equipment, processes and personnel.`),
    $sce.trustAsHtml(`<strong>Access to the Sport Technology Knowledge Portal &ndash; </strong>Comprehensive repository of good practices and an online collaborative platform where experts in the field can share, discuss, analyze and publish information on the evolving aspects of sport technology`),
    $sce.trustAsHtml(`<strong>Participate in National Security Events - </strong>Present Case Studies and educate professionals at the Annual National Sport Safety and Security Conference, National Summits and through other available channels`),
    $sce.trustAsHtml(`<strong>Training Academy </strong>- Utilize a simulated operation center to test and apply safety and security best -practices for training and exercise capabilities`),
    $sce.trustAsHtml(`<strong>Technology Applications - </strong>Perform laboratory testing on related products and services with <em>Product Reviews</em>, <em>Product Assessments</em>, and <em>Showcases</em>`),
  ];

  // $scope.libkeys = Object.entries($scope.library);

}])


//top tabs of each section
.directive('tabsContainer', function() {
  return {
    restrict: 'E', //restrict to element notation (<tabs-container/> vs <div tabs-container/> or as an attribute)
    // transclude: true,
    scope: {    // including this property makes everything local and contains the scope, so we have to include library and benefits through attributes
      lib: '=',  // we use just = because the name "lib" is the same as the attribute that we pass library to
      benefits: '=',
    },
    controller: ['$scope', function MyTabsController($scope) {
      //Objective: Use a tag that tells the rest of the scope what the active tab is, move items in and out depending on the tab clicked
      $scope.libkeys = Object.entries($scope.lib);
      $scope.emitted = $scope.libkeys[0][0];


      $scope.emit = (item) => {
        $scope.emitted = item;
        // console.log($scope.emitted, lib[$scope.emitted].benefits);
      }
    }],
    template: /*html*/`
    <div class="tabbable">
      <a class="tomst" href="https://teams.microsoft.com/" target="_blank" rel="noopener noreferrer" >Open MS Teams</a>
      <ul class="nav nav-tabs">
        <li class="underlined" ng-repeat="(key, val) in lib">
          <button ng-attr-id="{{key}}" class="btns" ng-class="{highlight:(emitted==key)}" ng-click="emit(key)" type="button">{{key}}</button>
        </li>
      </ul>
      <div class="tab_content">

        <div class="layered">
          <div ng-repeat="(key, val) in lib" ng-class={FADE:(emitted!==key)} ng-bind-html="val.desc[0]"></div>
        </div>
        <ul class="benefits">
          <li ng-repeat="(indx, val) in benefits" ng-class={SHOOP:!lib[emitted].benefits.includes(indx)} ng-bind-html="val"></li><!--  -->
        </ul>
        <div class="layered">
          <div ng-repeat="(key, val) in lib" ng-class={FADE:(emitted!==key)} ng-bind-html="val.desc[1]"></div>
        </div>
        <!-- divs that slide in and out based on what is being emmitted -->
      </div>
    </div>
    `
  }
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
