//accessing all divs with bars to sort
let vis_b = document.getElementById('visualise_bubble');
let vis_i = document.getElementById('visualise_insertion');
let vis_s = document.getElementById('visualise_selection');
let vis_m = document.getElementById('visualise_merge');

//reading the size of array
let n = prompt("enter size of array");

//declaring arrays
let arrayBubble = new Array(n);
let arrayInsertion = new Array(n);
let arraySelection = new Array(n);
let arrayMerge = new Array(n)

//functions to add bars 
let bar, h;
function addToBubble( ele , w = 7){
	bar = document.createElement("div");
	bar.classList.add("bar")
	h = ele*5;
	bar.style.height = h+'px';
	bar.style.width = w+'px';
	vis_b.appendChild(bar);
}

function addToInsertion(ele, w = 7) {
	bar = document.createElement("div");
	bar.classList.add("bar")
	h = ele*5;
	bar.style.height = h+'px';
	bar.style.width = w+'px';
	vis_i.appendChild(bar);
}
function addToSelection(ele, w = 7){
	bar = document.createElement("div");
	bar.classList.add("bar")
	h = ele*5;
	bar.style.height = h+'px';
	bar.style.width = w+'px';
	vis_s.appendChild(bar);	
}
function addToMerge(ele, w = 7) {
	bar = document.createElement("div");
	bar.classList.add("bar")
	h = ele*5;
	bar.style.height = h+'px';
	bar.style.width = w+'px';
	vis_m.appendChild(bar);		
}

//function to generate random numbers to sort
for (let i = 0; i < n; i++) {
	arrayBubble[i] = Math.floor(Math.random()*100);
	arrayInsertion[i] = arrayBubble[i];
	arraySelection[i] = arrayBubble[i];
	arrayMerge[i] = arrayBubble[i];
	if( n >= 20){
		addToBubble(arrayBubble[i], 5);
		addToInsertion(arrayInsertion[i], 5);
		addToSelection(arraySelection[i], 5);
		addToMerge(arrayMerge[i], 5);	
	}
	else{
		addToBubble(arrayBubble[i]);
		addToInsertion(arrayInsertion[i]);
		addToSelection(arraySelection[i]);
		addToMerge(arrayMerge[i]);
	}
}

//bubble sort
let bars = vis_b.querySelectorAll('.bar')
async function bSort(delay = 300){
	for(let i = 0; i <= n-1; i++){
		for(let j = 0; j < n-1; j++){
				if( arrayBubble[j] > arrayBubble[j+1]){
					let temp = arrayBubble[j];
					arrayBubble[j] = arrayBubble[j+1];
					arrayBubble[j+1] = temp;

					bars[j].style.height = (arrayBubble[j]*5)+'px';
					bars[j+1].style.height = (arrayBubble[j+1]*5)+'px';
				}
		}
		await new Promise((resolve)=>{
			setTimeout(()=>{
				resolve();
			},400)
		});
	}
}

//insertion sort
let bars1 = vis_i.querySelectorAll('.bar')
async function iSort(delay = 300){
	for(let i = 0; i <= n-1; i++){
		for(let j = i+1; j >= 0; j--){
			if( arrayInsertion[j] < arrayInsertion[j-1]){
				let temp = arrayInsertion[j];
				arrayInsertion[j] = arrayInsertion[j-1];
				arrayInsertion[j-1] = temp;
				bars1[j].style.height = (arrayInsertion[j]*5)+'px';
				bars1[j-1].style.height = (arrayInsertion[j-1]*5)+'px';
			}
		}
		await new Promise((resolve)=>{
			setTimeout(()=>{
				resolve();
			},400)
		});
	}
}

//selection sort
let bars2 = vis_s.querySelectorAll('.bar')
async function sSort(delay = 100){
	for(let i = 0; i <= n-1; i++){
		let min = i;
		for(let j = i+1; j <= n-1; j++){
			if( arraySelection[j] < arraySelection[min]){
				min = j;
			}
		}
		let temp = arraySelection[i];
		arraySelection[i] = arraySelection[min];
		arraySelection[min] = temp;

		bars2[i].style.height = (arraySelection[i]*5)+'px';
		bars2[min].style.height = (arraySelection[min]*5)+'px';
		await new Promise((resolve)=>{
			setTimeout(()=>{
				resolve();
			},400)
		});
	}
}


//merge sort
let barsMerge = vis_m.querySelectorAll('.bar');
function mSort(){
	merge_sort(0, arrayMerge.length-1);
}


async function merge_sort(start, end, delay = 300){
	if(start < end){
		let mid = Math.floor((start + end) / 2);
		merge_sort(start, mid);
		merge_sort(mid+1, end);
		await new Promise((resolve)=>{
			setTimeout(()=>{
				resolve();
			},400)
		});
		merge(start, mid, end);
		await new Promise((resolve)=>{
			setTimeout(()=>{
				resolve();
			},400)
		});
	}

}

function merge(start, mid, end){
	let temp = new Array(end-start+1);

	let i = start, j = mid+1, k = 0;

	while( i <= mid && j <= end){
		if( arrayMerge[i] < arrayMerge[j]){
			temp[k++] = arrayMerge[i++];
		}
		else{
			temp[k++] = arrayMerge[j++];
		}
	}
	while(i <= mid){
		temp[k++] = arrayMerge[i++];
	}

	while(j <= end){
		temp[k++] = arrayMerge[j++];
	}
	k=0;
	for( let l = start; l <= end; l++){
		arrayMerge[l] = temp[k];
		barsMerge[l].style.height = (temp[k]*5)+'px';
		k++;
	}
}

//sort
async function sort(){
	bSort();
	await new Promise((resolve)=>{
		resolve();
	},0)
	iSort();
	await new Promise((resolve)=>{
		resolve();
	},0)
	sSort();
	await new Promise((resolve)=>{
		resolve();
	},0)
	mSort();
}

//call sort function
sort();

console.log(arrayBubble);
console.log(arrayInsertion);
console.log(arraySelection);
console.log(arrayMerge);