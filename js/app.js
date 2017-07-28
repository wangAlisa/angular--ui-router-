//第三步获取应用程序
angular.module('ickt', ['ui.router'])
//第四步 定义config方法
.config(function ($stateProvider, $urlRouterProvider){
	$stateProvider
	//定义首页来路由
	.state('home', {
		url: '/',
		templateUrl: 'view/home.tpl',
		controller: 'homeCtrl'
	})
	//定义登录页面
	.state('login', {
		url: '/login',
		templateUrl: 'view/login.tpl',
		controller: 'loginCtrl'
	})
	//文章发布路由
	.state('article', {
		url: '/article',
		templateUrl: 'view/article.tpl',
		controller: 'articleCtrl'
	})
	//文章详情页路由
	.state('articledetail',{
		url: '/articledetail/:id',
		templateUrl: 'view/articledetail.tpl',
		controller: 'articledetailCtrl'
	})
	//内容管理路由
	.state('text', {
		url: '/text',
		templateUrl: 'view/text.tpl',
		controller: 'textCtrl'
	})
	//内容详情路由
	.state('activitydetail',{
		url: '/activitydetail/:id',
		templateUrl: 'view/activitydetail.tpl',
		controller: 'activitydetailCtrl'
	})
	//相册管理路由
	.state('pictures', {
		url: '/pictures',
		templateUrl: 'view/pictures.tpl',
		controller: 'picturesCtrl'
	})
	//图片管理路由
	.state('photo', {
		url: '/photo',
		templateUrl: 'view/photo.tpl',
		controller: 'photoCtrl'
	})
	//咨询管理
	.state('ask', {
		url: '/ask',
		templateUrl: 'view/ask.tpl',
		controller: 'askCtrl'
	})
	//模板管理
	.state('moban', {
		url: '/moban',
		templateUrl: 'view/moban.tpl',
		controller: 'mobanCtrl'
	})
	//定义默认路由
	$urlRouterProvider.otherwise('/')
})

.controller('articleCtrl', function ($scope, $http, $location) {
	// 定义提交事件回调函数
	$scope.createNews = function () {
		// news数据要适配时间
		$scope.news.date = new Date().getTime();
		$http
			.post('action/createnews.php', $scope.news)
			.success(function (res) {
				// 成功之后进入列表页
				if (res && res.errno === 0) {
					$location.path('/articledetail/1')
				}
			})
	}
	$('#ca').calendar({
        width: 320,
        height: 320,
        data: [
			{
			  date: '2015/12/24',
			  value: 'Christmas Eve'
			},
			{
			  date: '2015/12/25',
			  value: 'Merry Christmas'
			},
			{
			  date: '2016/01/01',
			  value: 'Happy New Year'
			}
		],
        onSelected: function (view, date, data) {
            console.log('view:' + view)
            alert('date:' + date)
            console.log('data:' + (data || 'None'));
        }
    });
})
.controller('articledetailCtrl', function ($scope, $http, $stateParams) {
	$http.get('action/articledetail.php', {
		params: {
			pagenum: $stateParams.pageNum
		}
	}).success(function (res) {
		// 如果请求成功，存储数据
		if (res && res.errno === 0) {
			$scope.list = res.data;
		}
	})
})
.controller('textCtrl', function ($scope, $http, $stateParams) {
	$http.get('action/activitylist.php', {
		params: {
			pagenum: $stateParams.pageNum
		}
	}).success(function (res) {
		// 如果请求成功，存储数据
		if (res && res.errno === 0) {
			$scope.list = res.data;
		}
	})
		// $scope.username = 'ickt';
	// 是否可以操作
	$scope.disabled = true;
	var suo = true;
	$scope.toggle = function () {
		// 切换
		$scope.disabled = !$scope.disabled;
		// 切换背景
		// $('.texttitle').css('background', '#efefef');
		if(suo){
			$('.text .col-lg-4 input').css('background', '#efefef');
		}else{
			$('.text .col-lg-4 input').css('background', '#fff');
		}
		suo = !suo;
	}
})
.controller('activitydetailCtrl',function ($scope, $http, $stateParams){
	// 请求数据
	$http
		.get('action/activitydetail.php?id' + $stateParams.id)
		// 返回成功，存储数据
		.success(function (res) {
			if (res && res.errno === 0) {
				$scope.list = res.data;
			}
		})
})
.controller('picturesCtrl',function ($scope){
	$scope.fileNameChanged = function () {
		var r= new FileReader();
			f=document.getElementById('file').files[0];
			r.readAsDataURL(f);
			r.onload=function  (e) {
			document.getElementById('show').src=this.result;
		};
	}
})


.controller('photoCtrl', function ($scope){
	// function bianse () {
	console.log($scope.color)

	// }
	// setInterval(bianse, 600)
	$('.highcontainer')
.highcharts({
	// 定义数据列
chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: 'Flyme用户浏览器访问量占比'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: '浏览器占比',
            data: [
                ['Firefox',   12.8],
                ['IE',       26.8],
                {
                    name: 'Chrome',
                    y: 45.0,
                    sliced: true,
                    selected: true
                },
                ['Safari',    8.5],
                ['Opera',     6.2],
                ['Others',   0.7]
            ]
        }]
    });
})
.controller('askCtrl', function ($scope){

})
.filter('yanglao', function () {
	return function (value) {
		if(value>0){
			// return Math.round(value*0.08);
			return (value*0.08).toFixed(2)+"¥";
		}
	}
})
.filter('yiliao', function () {
	return function (value) {
		if(value>0){
			return (value*0.05).toFixed(2)+"¥";
		}
	}
})
.filter('shiye', function () {
	return function (value) {
		if(value>0){
			return (value*0.002).toFixed(2)+"¥";
		}
	} 
})
.filter('jijin', function () {
	return function (value) {
		if(value>0){
			return (value*0.12).toFixed(2)+"¥";
		}
	} 
})
.filter('suihou', function () {
	return function (value) {
		if(value>0){
			return (value-(value*0.08)-(value*0.05)-(value*0.002)-(value*0.12)).toFixed(2)+"¥";
		}
	}
})
.controller('mobanCtrl', function ($scope){
	$scope.showBMI = '';
	//定义事件回调函数
	$scope.getBmi = function () {
	
		var tizhong = $('#inp1').val();
		var shengao = $('#inp2').val();
		if( tizhong === '' || shengao=== ''){
			$scope.showBMI = "亲，您还没有输入哦"
			return;	
		}
		var result = (tizhong/(shengao*shengao)*10000).toFixed(2);
		var fn = function (a) {
			$(a).css({
				background: 'blue',
				color: '#fff'
			}).siblings().css({
				background: '#fff',
				color: 'black'
			});
		}
		
		$scope.showBMI = result;
		if(result <= 18.5){
			fn("#li1");
		}
		if( result<=24.9&&result>=18.5){
			fn("#li2");
		}
		if(result===25){
			fn("#li3");
		}
		if(result>25&&result<=29.9){
			fn("#li4");
		}
		if(result<=34.9&&result>=30.0){
			fn("#li5");
		}
	}
	$scope.clear = function () {
		 $('#inp1').val('');
		 $('#inp2').val('');
		 $scope.showBMI = '';
		 $('.moban ul li').css({
		 	background: '#fff',
		 	color: 'black'
		 });
	}
})
//定义首页控制器
.controller('homeCtrl', function ($scope, random,$interval) {
	$interval(function () {
		$scope.color = random.color();
	},200)
})
//定义登录页控制器
.controller('loginCtrl',function ($scope, $http, $location, $rootScope) {
	$scope.gotoLogin = function () {
		// 提交表单，开始登录
		$http
			.post('action/login.php', $scope.data)
			// 成功之后，进入首页
			.success(function (res) {
				if (res && res.errno === 0) {
					// 将用户名存储在跟作用域中
					$rootScope.userName = res.data.username;
					// 进入首页
					$location.path('/')
				}
			})
	}
})
//定义导航的控制器
.controller('navCtrl', function ($scope) {
		$scope.list = [
			// 每个成员代表一个导航的分组
			{
				title: '文章发布',
				url: '#/article'
			},
			{
				title: '内容管理',
				url: '#/text'
			},
			{
				title: '图片欣赏',
				url: '#/pictures'
			},
			{
				title: '用户浏览',
				url: '#/photo'
			},
			{
				title: '税后工资',
				url: '#/ask'
			},
			{
				title: 'BMI 检测',
				url: '#/moban'
			}
		]
})
// 我们可以在应用程序启动的方法中，检测登录
.run(function ($rootScope, $http, $location) {
	// 检测登录
	$http({
		url: 'action/checkLogin.php'
	})
	// 请求成功
	.success(function (res) {
		// 成功将用户名显示在页面中
		if (res && res.errno === 0 && res.data && res.data.username) {
			// 存储用户名
			$rootScope.userName = res.data.username;
			// 进入首页
			$location.path('/')
		} else {
			$location.path('/login')
		}
	})
})
.factory('random', function () {
	// console.log(222)
	// console.log(this, arguments)
	// 返回值是接口对象
	return {
		/***
		 * 随机一个整数
		 * @num 	表示随机数的范围 默认值是100
		 * return 	返回的整数
		 **/ 
		number: function (num) {
			num = num || 100;
			return parseInt(Math.random() * num)
		},
		// 随机一种颜色
		color: function () {
			// console.log(this)
			// 实现rgb模式的 rgb(100, 200, 50) 0-255 -> 256
			// return 'rgb('
			// 	+ this.number(256) + ', '
			// 	+ this.number(256) + ', '
			// 	+ this.number(256)
			// 	+ ')';

			// 16进制 #789abc
			var str = '0123456789ABCDEF';
			return '#'
				+ str[this.number(16)]
				+ str[this.number(16)]
				+ str[this.number(16)]
				+ str[this.number(16)]
				+ str[this.number(16)]
				+ str[this.number(16)]
		}
	}
})
