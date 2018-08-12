// 只适用在元素数值大小范围较小的情况

function bucketSort(a, min_elem, max_elem) {
	var n = a.length, t = [];
	// 分配一个临时数组t作为桶，桶的个数是m，初始化每个桶的值是0
	var m = max_elem - min_elem + 1;
	for (var i = 0; i < m; i++) {
		t[i] = 0;
	}
	// 将数组a中的元素拥有的个数保存在桶t中，t的长度是数组中元素的数值范围的上下边界之差
	for (var i = 0; i < n; i++) {
		t[a[i]-min_elem]++;
	}
	// 将桶中的元素取出来
	var k = 0;
	for (var i = 0; i < m; i++) {
		for (j = 0; j < t[i]; j++) {
			a[k++] = min_elem + i;
		}
	}
}