<div class="app-container activitydetail">
	<ul>
		<li>报名信息</li>
	</ul>
	<h3>活动标题：Flyme用户活动月参与活动标题</h3>
	<div class="container-detail">
		<div class="row tilte">
			<div class="col-lg-1">活动ID</div>
			<div class="col-lg-2">客户姓名</div>
			<div class="col-lg-2">子站名称</div>
			<div class="col-lg-4">报名时间</div>
			<div class="col-lg-2">联系方式</div>
		</div>
		<div class="row" ng-repeat="item in list">
			<div class="col-lg-1">{{item.id}}</div>
			<div class="col-lg-2">{{item.name}}</div>
			<div class="col-lg-2">{{item.zizhan}}</div>
			<div class="col-lg-4">{{item.time}}</div>
			<div class="col-lg-2">{{item.telephone}}</div>
		</div>
	</div>

</div>