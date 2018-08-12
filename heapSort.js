// 堆排序 :堆就是完全二叉树，只有完全二叉树才能存在数组中。
// 1. 创建一个大顶堆：从最后一个非叶子节点开始从后往前来向下调整元素
// 2. 将堆排序：一个一个的将大顶堆的堆顶拿出来于最后一个元素交换，
// 然后将数组再次调整为大顶堆，再将堆顶进行交换。

function heapSort(a) {
	var n = a.length;
	for(var i = n/2; i >= 0; i--) {
		percolate_down(i, a ,n);
	}
	for(var i = n-1;i > 0; i--) {
		[a[0],a[i]] = [a[i],a[0]];
		percolate_down(0, a, i);
	}
}

function percolate_down (i, a ,n) {
	var left_child = i*2+1, tmp, child; 
	for (tmp = a[i]; left_child < n;i = child,left_child = i*2+1) {
		child = left_child;
		if (child != n-1 && a[child+1] > a[child]) {
			child++;
		}
		if (tmp < a[child]) {
			a[i] = a[child];
		} else {
			break;
		}
	}
	a[i] = tmp;
}