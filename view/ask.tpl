<div class=".app-container ask">
	<span class="spn1">应发工资</span><input type="number" ng-model="msg"><span class="spn2">¥</span><br>
	<span>养老保险</span><h2>{{msg | yanglao}}</h2>
	<span>医疗保险</span><h2>{{msg | yiliao}}</h2>
	<span>失业保险</span><h2>{{msg | shiye}}</h2>
	<span>住房公积</span><h2>{{msg | jijin}}</h2>
	<span>税后工资</span><h2>{{msg | suihou}}</h2>
</div>