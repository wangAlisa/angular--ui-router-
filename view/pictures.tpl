<div class="app-container pictures">
	<h3>图片欣赏</h3>
	<form>
		<input type="file" id='file'; onchange="angular.element(this).scope().fileNameChanged()">
	</form>
	<ul>
		<li><img src="img/bg.jpg" id='show'></li>
	</ul>
</div>
