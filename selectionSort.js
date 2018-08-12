// 从小到大排序，选择n-1轮，每一轮选出一个最小值，初始将最前面的值的索引给min,
// 选元素与a[min]比较，比a[min]小则将该元素的索引值给min。
// 如果min与初始值不同，则将a[min]与初始值交换。

// i: 选择的轮数  j:比较的元素的索引  n: 元素的个数
function selectionSort(a)
{
	var n = a.length;
	for (var i = 0; i < n-1; i++) {
		min = i;
		for (var j = i+1; j < n; j++) {
			if (a[j] < a[min]) {
				min = j;
			}
		}
		if (min != i) {
			[a[min], a[i]] = [a[i], a[min]];   // swap
		}
	}
}