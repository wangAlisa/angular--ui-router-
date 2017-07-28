<div class="app-container text">
	<ul>
		<li>活动发布</li>
	</ul>
	<div class="container-fluid">
		<div class="row tilte">
			<div class="col-lg-1">活动ID</div>
			<div class="col-lg-4">活动标题</div>
			<div class="col-lg-2">发布时间</div>
			<div class="col-lg-2">活动来源</div>
			<div class="col-lg-2">操作</div>
		</div>
		<div class="row" ng-repeat="item in list">
			<div class="col-lg-1"><a href="#/activitydetail/{{item.id}}">{{item.id}}</a></div>
			<div class="col-lg-4 "><input type="text" value="{{item.title}}" ng-disabled="disabled" class="texttitle"></div>
			<div class="col-lg-2">{{item.time}}</div>
			<div class="col-lg-2">{{item.activity}}</div>
			<div class="bianji col-lg-2" ng-click="toggle()">{{item.caozuo}}</div>
		</div>
	</div>
</div>