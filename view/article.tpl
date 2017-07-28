<div class="app-container article">
	<ul class="types">
		<li>新闻动态</li>
		<li>品尚生活</li>
		<li>客户见证</li>
		<li>热门产品</li>
		<li>关于我们</li>
		<li>联系方式</li>
	</ul>
	<h3>文章发布</h3>
	<form name="newsForm" ng-submit="createNews()" class="form-horizontal">
		<div class="form-group">
			<div class="col-lg-6">
				<input 
					type="text" 
					class="form-control"
					placeholder="请输入您发表文章的标题"
					name="title"
					ng-model="news.title" 
					ng-required="true"
				>
			</div>
			<div class="col-lg-5 text-danger"><span ng-show="newsForm.title.$dirty && newsForm.title.$invalid">文章标题必填</span></div>
		</div>
		<div class="form-group">
			<div class="col-lg-6">
				<input 
					type="text" 
					class="form-control"
					placeholder="请输入您的名字" 
					name="writer"
					ng-model="news.writer"
					ng-required="true"
				>
			</div>
			<div class="col-lg-5 text-danger"><span ng-show="newsForm.writer.$dirty && newsForm.writer.$invalid">用户名字必填</span></div>
		</div>
		<div class="form-group">
			<div class="col-lg-6">
				<textarea placeholder="请输入您想要发表的文章" name="content" ng-model="news.content" ng-required="true"></textarea>
			</div>
			<div class="col-lg-5 text-danger "><span ng-hide="newsForm.content.$pristine || newsForm.content.$valid">文章内容必填</span></div>
		</div>
		<div class="form-group btn-container">
			<button class="btn btn-success" ng-disabled="newsForm.$invalid">提交</button>
		</div>
	</form>
</div>
	<div id="rili">
		<div id="ca"></div>
	</div>
