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
    Research_Areas: {
        'National_Sport_Security_Lab_RA': {
          name: 'National Sport Security Lab',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(/*html*/`
          <ul>
            <li>Mission</li>
            <li>Objective</li>
            <li>Research Capabilities (Slide 9)</li>
          </ul>
            <ul>
              <li>Proof of Concept</li>
              <li>Develop New Processes and Procedures</li>
              <li>Product Review <br />
                <p>
                  Opportunity to engage subject matter experts to assess needs, collect feedback, conduct  preliminary testing and research, a product  application and value to consumers in sports and entertainment safety and security industry.         
                </p>
              </li>
              <li>Product Assessment 
                <ul>
                  <li>Have access to independent impartial testing, and evaluation of product or integrated solutions.</li>
                  <li>The evaluation follows the principles that are meant to assist operators and other users with objective and quantitative reviews of available commercial system and solutions.</li>
                </ul>
              </li>
              <li>Field Testing 
                <ul>
                  <li>An opportunity to showcase the vetted physical security equipment, technology, software, services and training at the National Lab.</li>
                  <li>The showcase includes MM Roberts Stadium (Football), Reed Green Coliseum (Basketball), and Pete Taylor Baseball Park.</li>
                  <li>The showcase also may take place at off campus sites i.e. professional stadium</li>
                </ul>
              </li>
            </ul>

          `),
          sub_projects: [
            'Stadium_As_An_Ecosystem_Prj',
          ],
        },
        'Training_Academy_RA': {
          name: 'Training Academy (CONCEPT UNDER DEVELOPMENT)',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(`
            
          `),
        },
        'Risk_Management_Principles_RA': {
          name: 'Risk Management Principles',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
        },
        'Stadium_Twenty25_RA': {
          name: 'Stadium Twenty25 - Building the Future of Sport Safety and Security',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
        },
        'Venue_RA': {
          name: 'Venue',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
        },
        'Event_RA': {
          name: 'Event',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
        },
        'Crowd_RA': {
          name: 'Crowd',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
        },
        'Staff_RA': {
          name: 'Staff',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
        },
        'Workforce_Development_RA': {
          name: 'Workforce Development',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
        },
        'Research_Fellows_Studies_RA': {
          name: 'Research Fellows Studies',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
        },
    },
    Impact_Areas: {
        'I_Area_1_IA': {
          name: 'I Area 1',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
        },
    },
    Groups: {
        'NSSL_G': {
          name: 'National Sport Security Lab',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
          sub_projects: [
            'Stadium_As_An_Ecosystem_Prj',
            'Sports_Security_Risk_Model_Prj',
          ],
        },
        'Training_Academy_G': {
          name: 'Training Academy',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(/*html*/`
            <ul>
              <li>GOAL:  Provide an intensive, valuable, and prestigious professional development experience that members of the sports safety and security community can share.</li>
              <li>TARGET AUDIENCE:  Senior decision-makers—or their deputies and assistants, and others who by references with an application, demonstrate they are up-and-coming leaders in sports safety and security and in special event planning.
                <ul>
                  <li>Certified Sport Security Professionals (CSSP) are industry leading professionals and thought leaders.</li>
                  <li>Senior decision-makers without CSSP certification with sufficient industry experience.</li>
                  <li>Non-CSSP public sector professionals with relevant experience in special event planning, security, and incident management.</li>
                  <li>Cross-discipline groups associated with specific venues or teams.  The Academy trains venue or team security leadership along with stakeholders and partners from their community, as a group or cohort.</li>
                </ul>
              </li>
              <li>COURSES
                <ul>
                  <li>Core offerings are centered around the six Certified Sport Security Professional certification domains
                    <ul>
                      <li>Business & Facility Management</li>
                      <li>Emergency Planning</li>
                      <li>Emergency Management</li>
                      <li>Legal & Regulatory</li>
                      <li>Crowd Management</li>
                      <li>Security Principles & Practices</li>
                    </ul>
                  </li>
                  <li>Specialized Courses
                    <ul>
                      <li>Advanced Risk Management based on ISO 31000 Risk Management Principles</li>
                      <li>Red Team Operations</li>
                      <li>Security Operations Center technologies and operating concepts</li>
                      <li>Team building</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            `),
        },
        'Applied_Research_G': {
          name: 'Venue',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
          sub_projects: [
            'Stadia_Twenty25_Prj',
            'Sport_Security_Risk_Model_Prj',
          ],
        },
        'Venue_G': {
          name: 'Venue',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
        },
        'Event_G': {
          name: 'Event',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
        },
        'Crowd_G': {
          name: 'Crowd',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
        },
        'Staff_G': {
          name: 'Staff',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
        },
        'Research_Consorcia_G': {
          name: 'Research Consorcia',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
        },
    },
    News: {
        'sample_news_1_N': {
          name: 'Sample News 1',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
        },
    },
    People: {
        'John_Joeson_Ppl': {
          name: 'John Joeson',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
          associatedcards: ['I_Area_1_IA','Training_Academy_RA','Crowd_RA'],
        },
        'Sammy_Seagon_Ppl': {
          name: 'Sammy Seagon',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
          associatedcards: [],
        },
        'Garry_Gaigax_Ppl': {
          name: 'Garry Gaigax',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
          associatedcards: [],
        },
        'Olivia_Olson_Ppl': {
          name: 'Olivia Olson',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
          associatedcards: [],
        },
        'Barry_Barns_Ppl': {
          name: 'Barry Barns',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
          associatedcards: [],
        },
        'Adam_Alexon_Ppl': {
          name: 'Adam Alexon',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
          associatedcards: [],
        },
        'Emma_Erret_Ppl': {
          name: 'Emma Erret',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
          associatedcards: [],
        },
        'Karry_Ken_Ppl': {
          name: 'Karry Ken',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
          associatedcards: [],
        },
        'Harry_Harris_Ppl': {
          name: 'Harry Harris',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
          associatedcards: [],
        },
        'Harry_Haarris_Ppl': {
          name: 'Harry Haarris',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
          associatedcards: [],
        },
        'Harry_aaaaa_Ppl': {
          name: 'Harry aaaaa',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
          associatedcards: [],
        },
    },
    Projects: {
        'Stadium_As_An_Ecosystem_Prj': {
          name: 'Stadium As An Ecosystem',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
          sub_projects: [
            'Security_Operating_Model_Prj',
            'Stadium_Operating_Model_Prj'
          ],
        },
        'Security_Operating_Model_Prj': {
          name: 'Security Operating Model',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(/*html*/`
            Perimeter for a venue or event starts much farther away from the venue
            <ul>
              <li>Shrinks or grows based on the type of event(s) in and around the host venue</li>
              <li>Where does the security perimeter start for events? </li>
              <li>Where does law enforcement end and unarmed security begin? </li>
              <li>How do risk treatment strategies employ technology and where?</li>
            </ul>
          `),
          sub_projects: [
            'Sports_Security_Risk_Model_Prj',
          ],
          collaborators: [
            'Harry_Harris',
            'Sammy_Seagon',
           ]
        },
        'Sports_Security_Risk_Model_Prj': {
          name: 'Sports Security Risk Model',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(/*html*/`
            <ul>
              <li>Interaction and influences of venue, event, staff, and crowd</li>
              <li>Crowd violence, crises, crime, cyber attack, active shooter, and terrorism</li>
              <li>Effect on treatment strategies to mitigate risk</li>
            </ul>
          `),
          collaborators: [
            'Harry_Harris',
            'Sammy_Seagon',
           ],
        },
        'Stadium_Operating_Model_Prj': {
          name: 'Stadium Operating Model',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(/*html*/`
            <ul>
              <li>Assembly areas for supporters and spectators enroute to the venue</li>
              <li>Transportation hubs at the beginning and end of the route</li>
              <li>Pedestrian and parking areas in close proximity to the venue</li>
              <li>“Fan zone” or tailgating areas</li>
              <li>Gates, interior pedestrian areas, the seating bowl, locker rooms, and the pitch</li>
              <li>Critical utility nodes</li>
              <li>Cyber networks and SCADA systems (Supervisory Control and Data Acquisition)</li>
            </ul>
          `),
          collaborators: [
             'Harry_Harris_Ppl',
             'Sammy_Seagon_Ppl',
           ]
        },
        'Stadia_Twenty25_Prj': {
          name: '',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
          sub_projects: [
            'Stadium_Sharing_Platform_Prj',
            'Applications_and_Services_IDMIB_Prj',
          ],
        },
        'Stadium_Sharing_Platform_Prj': {
          name: 'Stadium Sharing Platform',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(/*html*/`
          <ul>
            <li>Geospatial Information System</li>
            <li>Situational Awareness</li>
            <li>Event Management</li>
            <li>Operations</li>
            <li>Intelligence</li>
            <li>Protective Measures</li>
            <li>Spectators</li>
            <li>Credentialing</li>
            <li>Sensors and Sensor Network</li>
            <li>Post Event Analysis</li>
          </ul>
          `),
        },
        'Applications_and_Services_IDMIB_Prj': {
          name: 'Applications and Services for Integration, Data Management, and Identity (Blockchain)',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(/*html*/`
          <ul>
            <li>Intelligence</li>
            <li>Digital Asset Management</li>
            <li>Policy, Plans, and Procedures</li>
            <li>Background checks and staff credentialing</li>
            <li>Data Management and Scheduling</li>
          </ul>
          `),
        },
        'Sport_Security_Risk_Model_Prj': {
          name: 'Sport Security Risk Model Prj',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(SAMPLEPARAGRAPH),
          sub_projects: [
            'VENUE_Prj',
            'EVENT_Prj',
            'STAFF_Prj',
            'CROWD_Prj',
          ],
        },
        'VENUE_Prj': {
          name: 'VENUE',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(/*html*/`
          <ul>
            <li>Sport and Entertainment Risk Assessment Tool</li>
            <li>Safety and security interference in venue design</li>
            <li>Designs for crowd management</li>
            <li>Signage</li>
            <li>Technology as a risk treatment</li>
            <li>Threats and Hazards</li>
            <li>Sport Venue Model – Defense in-depth</li>
          </ul>
          `),
        },
        'EVENT_Prj': {
          name: 'EVENT',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(/*html*/`
          <ul>
            <li>Event model to identify core requirements for specific events</li>
            <li>Sport Venue Model – enhancing the guest experience</li>
            <li>Code of conduct for guests</li>
            <li>Intelligence and information sharing</li>
          </ul>
          `),
        },
        'STAFF_Prj': {
          name: 'STAFF',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(/*html*/`
          <ul>
            <li>Professional Development and Return on Investment</li>
            <li>Police Capacity Building (International)</li>
            <li>Code of conduct</li>
            <li>Recruiting, development and retention strategies</li>
            <li>Training for key stakeholders (i.e., police, fire services, emergency medical services, public safety officials, emergency managers, etc.)</li>
            <li>Safety and security team</li>
            <li>Human rights and policing for sporting events</li>
          </ul>
          `),
        },
        'CROWD_Prj': {
          name: 'CROWD',
          textsample: $sce.trustAsHtml(SAMPLESENTENCE),
          textfull: $sce.trustAsHtml(/*html*/`
          <ul>
            <li>Crowd types</li>
            <li>Movement and management strategies</li>
            <li>Crowd management models</li>
            <li>Influence of crowds on events and staff</li>
            <li>Crowd catastrophes</li>
            <li>Code of Conduct</li>
          </ul>
          `),
        },
        'Product_Reviews_Prj': {
          name: 'Product Reviews',
        },
        'Product_Snapshots_Prj': {
          name: 'Product Snapshots',
        },
        'Product_Evaluations_Prj': {
          name: 'Product Evaluations',
        },
        'Product_Showcase_Prj': {
          name: 'Product Showcase',
        },
        'Whitepapers_Prj': {
          name: 'Whitepapers',
        },

    },
  }

  $scope.libkeys = Object.entries($scope.library);
  $scope.colors = { //you can use the library depth 1 keys with this to get colors
    Research_Areas: '#362589', 
    Impact_Areas: '#79209a', 
    Groups: '#b01b01', 
    News: '#f3402f', 
    People: '#ffa00a', 
    Projects:'#f0dd4d', 
  }

  /* Libsearch
      searches library at depth 2 for a name and returns it
      PARAMS:
          key: Either 
                  1) exact key of a library entry at depth 2 (e.g. Stadium_As_An_Ecosystem_Prj in Projects) or
                  2) name property of a library entry at depth 2.  This might be less exact as if there are multiple with the same name, it will just grab the first
                option 1 by default
          isname: Toggles between the two possible properties of key
                  false by default
          returnkey: Toggles the return value:
                  false(default): returns the whole object that is found
                  true: returns just the key of the object that is found

  */
  $scope.libsearch = function(key, isname=false, returnkey=false) {
    for(let i=0, len=$scope.libkeys.length; i < len; ++i) {
      let itemlist = Object.entries($scope.library[$scope.libkeys[i][0]])
      for(x in itemlist) {
        if(key === ((isname)?(itemlist[x][1].name):(itemlist[x][0]))){ //if isname, 
          let entry = {
            item: null,
            parent: null,
          };
          if(returnkey) entry.item = itemlist[x][0];
          else entry.item = itemlist[x][1];
          entry.parent = $scope.libkeys[i][0];
          return entry;
        }
      }
    }
  }

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
  $scope.pwItem = {
    obj: null,
    par: null,
    history: [],
    tracker: -1,
    set: function(str) {
      let entry = $scope.libsearch(str);
      console.log(entry)
      $scope.pwItem.obj = entry.item;
      $scope.pwItem.par = entry.parent;
      $scope.pwItem.history.splice($scope.pwItem.tracker +1);
      $scope.pwItem.history.push(str);
      $scope.pwItem.tracker += 1;
    },
    reset: function() {
      $scope.pwItem.obj = null;
      $scope.pwItem.par = null;
      $scope.pwItem.history = [];
      $scope.pwItem.tracker = -1;
    },
    navHis: function(direction) { //issue: currently not setting the item and refreshing after the next part is picked
      // console.log(direction, $scope.pwItem.history)
      console.log($scope.pwItem.history)
      console.log($scope.pwItem.tracker)
      if($scope.pwItem.tracker < $scope.pwItem.history.length-1 && direction == 'next'){
        $scope.pwItem.tracker += 1;
        let entry = $scope.libsearch($scope.pwItem.history[$scope.pwItem.tracker]);
        console.log(entry)
        $scope.pwItem.obj = entry.item;
        $scope.pwItem.par = entry.parent;
        // console.log($scope.pwItem.tracker)
      } else if($scope.pwItem.tracker > 0 && direction == 'prev') { //as long as it is not on the last item & not on the first item
        $scope.pwItem.tracker -= 1;
        let entry = $scope.libsearch($scope.pwItem.history[$scope.pwItem.tracker]);
        console.log(entry)
        $scope.pwItem.obj = entry.item;
        $scope.pwItem.par = entry.parent;

        // console.log($scope.pwItem.tracker)
      }
    },
  }
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
// popup window for when a library item is clicked, shows more info
.directive('popWin', ['$document', function($document) {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      'pwItem': '=',
      'library': '=',
      'libsearch': '=',
      'colors': '=',
    },
    link: function(scope, elm, attrs) {
      scope.closewin = function() {
        scope.pwItem.reset()
      }
      scope.swapitem = function(name) {
        scope.pwItem.set(name);
      }
      scope.navigate = function(direction) {
        scope.pwItem.navHis(direction);
      }
      scope.truncate = function(len, str) {
        if(str[20]) return str.substr(0,20) + '...';
        return str;
      }
      scope.log = function(str) { //test function for getting info
        console.log(str);
      }
    },
    template: /*html*/`
      <div>
        <style>
          
        </style>
        <div class='cards-btn-bar'>
          <button type='button' class="pwClose" ng-click="closewin()">&times;</button>
          <div class='navbtnholder'>
            <button type='button' ng-click="navigate('prev')" ng-class="(pwItem.tracker != 0)?'':'greyit'"><</button>
            <button type='button' ng-click="navigate('next')" ng-class="(pwItem.tracker != pwItem.history.length-1)?'':'greyit'">></button>
          </div>
        </div>
        <div class="cards-associated" ng-if="pwItem.obj.associatedcards"> 
          <div class="minicard"
            ng-repeat="x in pwItem.obj.associatedcards" 
            ng-init="obj = libsearch(x)" 
            ng-style="{'border-color': colors[obj.parent],}"
            ng-click="swapitem(x)" ><!--{'border-color': colors[x.parent]}-->
            <!--<button type='button' style="height:10px; width: 10px; background-color: blue;" ng-click="log(x)"></button>-->
            
            <div 
              ng-style="{'color': colors[obj.parent], 'font-size':'1.1em', 'font-weight':'bold',}" 
              ng-init="name = truncate(20, obj.item.name)" 
              ng-mouseenter="name = obj.item.name"
              ng-mouseleave="name = truncate(20, obj.item.name)" >
              {{name}}
            </div>
            <div ng-bind-html="pwItem.obj.textfull"></div>
          </div>
        </div>
        <div class="cards-content-area">
          <!--<span ng-repeat="his in pwItem.history track by $index"> {{his}}<span ng-if="his != pwItem.history[pwItem.history.length-1]"> > </span></span>-->
          <h1>{{pwItem.obj.name}}</h1>

          <div ng-bind-html="pwItem.obj.textfull">{{pwItem.obj}}</div>
          <span class='cards-item-link' ng-repeat="proj in pwItem.obj.sub_projects" ng-click="swapitem(proj)" ng-style="{'border-left': '4px solid '+ colors.Projects, 'padding-left':'3px',}">
              {{library.Projects[proj].name}} <br></span>
        </div>

      </div>
    `
    // ng-click="pwItem.set(proj)"
  }
}]);
