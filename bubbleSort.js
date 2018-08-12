// 从小到达排序，每一轮确定出一个最大值，共比较n-1轮。
//在每一轮中，相邻的两个数两两比较，将较大的放在后面。
// n: 元素的个数   i: 比较的轮数  j: 比较的索引

function bubbleSort(a)
{
	var n = a.length;
	for (var i = 0; i < n-1; i++) {
		for (var j = 0;j < n-1-i; j++) {
			if(a[j] > a[j+1]) {
				[a[j], a[j+1]] = [a[j+1], a[j]];   // swap
			}
		}
	}
}
