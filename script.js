function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort((a,b) => a-b);
	let totalCost =0;
	while (arr.length>1) {
		const rope1 = arr.shift();
	const rope2 = arr.shift();
	mergeCost = rope1 + rope2;
		totalCost += mergeCost;
	arr.push(mergeCost);
		arr.sort((a,b) => a-b);
	}
  return totalCost;
}

module.exports=mincost;
