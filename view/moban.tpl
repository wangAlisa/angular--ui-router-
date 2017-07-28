<div class=".app-container moban">
	<p>
		<span>您的体重</span><input type="number" id="inp1" ><span>kg</span>
	</p>
	<p>
		<span>您的身高</span><input type="number" id="inp2" ><span>cm</span>
	</p>
	<p>
		<button class="button1" ng-click="getBmi()">计算</button>
		<button ng-click="clear()">清空</button>
	</p>
	<p class="BMIVal">您的BMI为 :&emsp;&emsp;<span>{{showBMI}}</span></p>
	<ul>
		<li id="li1">偏瘦&emsp;&emsp;&lt;18.5</li>
		<li id="li2">正常&emsp;&emsp;18.5～24.9</li>
		<li id="li3">超重&emsp;&emsp;=25</li>
		<li id="li4">偏胖&emsp;&emsp;25.0～29.9</li>
		<li id="li5">肥胖&emsp;&emsp;30.0～34.9</li>
	</ul>
</div>