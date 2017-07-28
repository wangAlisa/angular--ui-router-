<div class="app-login">
	<div class="login-container">
		<h1>Flyme登录系统</h1>
		<form name="login" ng-submit="gotoLogin()" class="form-horizontal">
			<div class="from-group row">
				<label for="" class="control-label col-lg-3">账号:</label>
				<div class="col-lg-9"><input 
					type="text" 
					class="form-control" 
					name="username" 
					ng-model="data.username"
					ng-required="true"
					ng-pattern="/^[\u4e00-\u9fff\w]{4,12}$/"
					placeholder="请输入用户名" 
				></div>
			</div>
			<div class="from-group row">
				<label for="" class="control-label col-lg-3">密码:</label>
				<div class="col-lg-9"><input 
					type="password" 
					class="form-control" 
					name="password" 
					ng-model="data.password"
					ng-required="true"
					ng-pattern="/[a-zA-Z]+.*\d+|\d+.*[a-zA-Z]+/"
					placeholder="请输入密码" 
				></div>
			</div>
			<div class="row text-container">
				<!-- 什么时候显示提示 -->
				<!-- 输入后并且不符合规范 -->
				<p ng-show="login.username.$dirty && login.username.$invalid">用户名要求4-12位由字母、数字、_或汉字组成</p>
				<p ng-show="login.password.$dirty && login.password.$invalid">密码要包含字母和数字</p>
			</div>
			<div><button ng-disabled="login.$invalid" class="btn">OK</button></div>
		</form>
	</div>
</div>