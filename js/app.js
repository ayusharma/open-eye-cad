'use strict';

var data = [
		{
			"name":"Sphere",
			"img":"imgs/sphere.gif",
			"description":"Sphere Respository for cad files",
			"url":"/#/sphere"
		},
		{
			"name":"Slit lamp adaptar for iphone",
			"img":"imgs/iphone_slit.jpg",
			"description":"Interactive Respository for iphone files",
			"url":"/#/iphone"
		},
		{
			"name":"Eye Piece HS BM 900",
			"img":"imgs/eyepiecehs.jpg",
			"description":"STL Respository for Eye piece",
			"url":"/#/eyepiecehs"
		},
		{
			"name":"Eye Piece CZ",
			"img":"imgs/eyepiececz.jpg",
			"description":"STL Respository for Eye piece",
			"url":"/#/eyepiececz"
		},
		{
			"name":"Eye Occluder",
			"img":"imgs/eyeoccluder.jpg",
			"description":"STL Respository for Eye occluder",
			"url":"/#/occluder"
		},
		{
			"name":"Near Fixation Device",
			"img":"imgs/nearfix.jpg",
			"description":"STL Respository for Near Fixation Device",
			"url":"/#/nearfix"
		}

	];


angular.module('oec',['ui.router'])




// app configuration
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	
	$stateProvider
	
	.state('landing', {
		url:'/',
		templateUrl: '/templates/views/landing.html',
		controller:'LandingCtrl'
	})

	.state('respository', {
		url:'/repo',
		templateUrl: '/templates/views/dashboard.html',
		controller:'MainCtrl'
	})

	.state('sphere', {
		url:'/sphere',
		templateUrl: '/templates/views/sphere.html',
		controller:'SphereCtrl'
	})
	.state('iphone', {
		url:'/iphone',
		templateUrl: '/templates/views/iphone.html',
		controller:'IphoneCtrl'
	})
	.state('eyepiecehs', {
		url:'/eyepiecehs',
		templateUrl: '/templates/views/eyepiecehs.html',
		controller:'EyePieceHs'
	})
	.state('eyepiececz', {
		url:'/eyepiececz',
		templateUrl: '/templates/views/eyepiececz.html',
		controller:'EyePieceCz'
	})
	.state('eyeoccluder', {
		url:'/occluder',
		templateUrl: '/templates/views/occluder.html',
		controller:'Occluder'
	})
	.state('nearfix', {
		url:'/nearfix',
		templateUrl: '/templates/views/nearfix.html',
		controller:'NearFix'
	})

	$urlRouterProvider.otherwise('/');
}])


//controllers
.controller('MainCtrl',function($scope){


	// var data = [
	// 	{"code":"sphere(radius);"}
	// ];
	console.log(data.length);
	$scope.allrepo = data;


	// $scope.rad = 5

	// $scope.selectedItemChange = function(){

	// 	var temp = data[0].code;
	// 	var res = temp.replace("radius",$scope.rad);
	// 	var source = openscadOpenJscadParser.parse(res);
	// 		gProcessor.setJsCad(source);
	// }

	// onload();
	// // console.log("sphere("+$scope.rad+")");
	// var temp = data[0].code;
	// var res = temp.replace("radius",$scope.rad);
	// var source = openscadOpenJscadParser.parse(res);
	// gProcessor.setJsCad(source);


})

.controller('SphereCtrl',function($scope){

	var code = "sphere(radius);"

	$scope.rad = 5

	$scope.description = "This is just a basic tutorial to give you an idea of how things work in here. There is a spehere besides here and if the value of the radius is changed, simultaneously the code generating this model changes and you can see the rendered images of the new model. Once you select the desirable model you can go and generate the STL file and 3D print the model. ";

	$scope.selectedItemChange = function(){

		var temp = code;
		var res = temp.replace("radius",$scope.rad);
		var source = openscadOpenJscadParser.parse(res);
			gProcessor.setJsCad(source);
	}

	onload();
	// console.log("sphere("+$scope.rad+")");
	var temp = code;
	var res = temp.replace("radius",$scope.rad);
	var source = openscadOpenJscadParser.parse(res);
	gProcessor.setJsCad(source);


})
.controller('IphoneCtrl',function($scope){

	$scope.len = 127;
	$scope.rad = 6;

	var code = "difference(){difference(){translate([0,3,0])linear_extrude(height=12.8)polygon(points=[[0,0],[64.9,0],[64.9,param2],[76.9,param2],[76.9,param1],[0,param1]]);translate([0,3,3])linear_extrude(height=9.8)polygon(points=[[3,0],[61.9,0],[61.9,param1],[1.9,param1],[1.9,param3],[3,param3]]);}translate([51.7,param4,0])linear_extrude(height=3,scale=0.66)circle(param6);}translate([69.9,param5,-5])cylinder(r=3.9,h=5);translate([33.9,param5,-5])cylinder(r=3.9,h=5);translate([0,0,0])linear_extrude(height=12.8)polygon(points=[[0,0],[64.9,0],[64.9,3],[0,3]]);translate([0,3,10.8])linear_extrude(height=2)polygon(points=[[3,0],[4.5,0],[4.5,param1],[1.9,param1],[1.9,param3],[3,param3]]);translate([0,3,10.8])linear_extrude(height=2)polygon(points=[[60.4,0],[61.9,0],[61.9,param1],[60.4,param1]]);";


	$scope.description = "This is the default slit lamp camera adapter model designed for iphone5 which can be used longwith CZ lens.You can customize the design to get the corresponding model and generate the STL file for 3D Printing. To customize it according to our recommended dimensions for iphone 4, Cange the length to 117.2 and the radius of the hole to 7.5.";

	

	function drawIphone(){
			var mapObj = {
	   param1:$scope.len,
	   param2:$scope.len-35,
	   param3:$scope.len-47,
	   param4:$scope.len-7.4,
	   param5:$scope.len-25.4,
	   param6:$scope.rad

	};

	var temp = code;
	var res = temp.replace(/param1|param2|param3|param4|param5|param6/gi, function(matched){
  		return mapObj[matched];
	});
		
	var source = openscadOpenJscadParser.parse(res);
	gProcessor.setJsCad(source);
	console.log(res);
	}
	
	$scope.selectedItemChange = function(){
		drawIphone();
	}

	$scope.seletIphonefour = function(){
		$scope.len = 117.2;
		$scope.rad  = 7.5;
		drawIphone();
	}

	$scope.seletIphonefive = function(){
		$scope.len = 127;
		$scope.rad  = 6;
		drawIphone();
	}

	onload();
	drawIphone();

})
.controller('EyePieceHs',function($scope){

	$scope.description="This is a model of the Haag Streit Eye Piece which can be attached tothe phone holders. In general dimensions of this eye piece do not change and is the same for all types of phone cases.";

	var code = "intersection(){difference(){difference(){difference(){difference(){difference(){difference(){linear_extrude(height=15.6)square([49.9,49.9]);translate([24.95,24.95,0])cylinder(r=13.7,h=15.6);}translate([24.95,24.95,9.1])cylinder(r=15.7,h=6.5);}translate([7,7,9.4])cylinder(r=4,h=6.2);}translate([42.9,42.9,9.4])cylinder(r=4,h=6.2);}translate([42.9,7,9.4])cylinder(r=4,h=6.2);}translate([7,42.9,9.4])cylinder(r=4,h=6.2);}translate([24.95,24.95,0])cylinder(r=32.5,h=15.6);}";

	onload();
	// console.log("sphere("+$scope.rad+")");
	var temp = code;
	var res = temp.replace("radius",$scope.rad);
	var source = openscadOpenJscadParser.parse(res);
	gProcessor.setJsCad(source);

})
.controller('EyePieceCz',function($scope){

	$scope.description="This is a model of the Carl Zeiss Eye Piece which can be attached tothe phone holders. In general dimensions of this eye piece do not change and is the same for all types of phone cases.";

	var code = "intersection(){difference(){difference(){difference(){difference(){difference(){difference(){difference(){linear_extrude(height=48.7)square([52.7,52.7]);translate([26.35,26.35,0])cylinder(r=19,h=48.7);}translate([26.35,26.35,15])cylinder(r=19.5,h=7.3);}translate([26.35,26.35,22.3])cylinder(r=21,h=26.4);}translate([8.4,8.4,42.3])cylinder(r=4,h=6.4);}translate([44.3,8.4,42.3])cylinder(r=4,h=6.4);}translate([44.3,44.3,42.3])cylinder(r=4,h=6.4);}translate([8.4,44.3,42.3])cylinder(r=4,h=6.4);}translate([26.35,26.35,0])cylinder(r=33,h=48.7);}";

	onload();
	// console.log("sphere("+$scope.rad+")");
	var temp = code;
	var res = temp.replace("radius",$scope.rad);
	var source = openscadOpenJscadParser.parse(res);
	gProcessor.setJsCad(source);

})
.controller('Occluder',function($scope){

	$scope.description="You can download the STL file for the Eye occluder with constant length and diameter from here.";

	var viewer = new JSC3D.Viewer(document.getElementById('cv'));
    viewer.setParameter('SceneUrl', 'SLTGanant/occluder.stl');
	viewer.setParameter('ModelColor', '#ccc');
	viewer.setParameter('BackgroundColor1', '#E5D7BA');
	viewer.setParameter('RenderMode',       'flat');
	viewer.init();
	viewer.update();

})
.controller('NearFix',function($scope){

	$scope.description="You can download the STL file for the Near fixation device used for eye testing from here. This device has a constant dimension here.";

	var viewer = new JSC3D.Viewer(document.getElementById('cv'));
    viewer.setParameter('SceneUrl', 'SLTGanant/NearFixationTarget/Near_Target_Head.stl');
	viewer.setParameter('ModelColor', '#ccc');
	viewer.setParameter('BackgroundColor1', '#E5D7BA');
	viewer.setParameter('RenderMode',       'flat');
	viewer.init();
	viewer.update();


})


//directives
.directive('header', [function(){
	var directive = {
		restrict: 'EA',
		templateUrl: 'templates/directives/header.html'
	}
	return directive;
}])


//global function
var me = document.location.toString().match(/^file:/)?'web-offline':'web-online'; // me: {cli, web-offline, web-online}
var showEditor = false;
// var gCurrentFile = null;
var gProcessor = null;
var gEditor = null;
var gCurrentFiles = [];       // linear array, contains files (to read)
var gMemFs = [];              // associated array, contains file content in source gMemFs[i].{name,source}
var gMemFsCount = 0;          // async reading: count of already read files
var gMemFsTotal = 0;          // async reading: total files to read (Count==Total => all files read)
var gMemFsChanged = 0;        // how many files have changed
var gRootFs = [];             // root(s) of folders 
var _includePath = './';

function onload() {
	console.log("one");
	gProcessor = new OpenJsCad.Processor(document.getElementById("viewerContext"));
}



// OpenJsCad.AlertUserOfUncaughtExceptions();