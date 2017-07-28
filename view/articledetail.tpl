<div class="app-container articledetail">
	
	<h3>文章详情</h3>
	<div class="container-detail">
		<div class="row tilte">
			<div class="col-lg-4">文章标题</div>
			<div class="col-lg-4">文章作者</div>
			<div class="col-lg-4">文章内容</div>
		</div>
		<div class="row" ng-repeat="item in list">
			<div class="col-lg-4">{{item.title}}</div>
			<div class="col-lg-4">{{item.name}}</div>
			<div class="col-lg-4">{{item.text}}</div>
		</div>
	</div>
</div>