let vis_b = document.getElementById('visualise_bubble');
let vis_i = document.getElementById('visualise_insertion');
let vis_s = document.getElementById('visualise_selection');
let n = prompt("enter size of array");
let array = new Array(n);
let array1 = new Array(n);
let array2 = new Array(n);

function addToBubble( ele ){
	let bar = document.createElement("div");
	bar.classList.add("bar")
	let h = ele*5;
	bar.style.height = h+'px';
	vis_b.appendChild(bar);
}

function addToInsertion(ele) {
	let bar = document.createElement("div");
	bar.classList.add("bar")
	let h = ele*5;
	bar.style.height = h+'px';
	vis_i.appendChild(bar);
}
function addToSelection(ele){
	let bar = document.createElement("div");
	bar.classList.add("bar")
	let h = ele*5;
	bar.style.height = h+'px';
	vis_s.appendChild(bar);	
}
for (let i = 0; i < n; i++) {
	array[i] = Math.floor(Math.random()*100);
	array1[i] = array[i];
	array2[i] = array[i];
	console.log(array[i]);	
	addToBubble(array[i]);
	addToInsertion(array1[i]);
	addToSelection(array2[i]);
	/*let bar = document.createElement("div");
	bar.classList.add("bar")
	let h = array[i]*5;
	bar.style.height = h+'px';
	vis_i.appendChild(bar);
	bar = document.createElement("div");
	bar.classList.add("bar")
	h = array[i]*5;
	bar.style.height = h+'px';
	vis_b.appendChild(bar);*/
}
console.log(array)
let bars = vis_b.querySelectorAll('.bar')
console.log(bars)
async function bSort(delay = 300){
	for(let i = 0; i <= n-1; i++){
		for(let j = 0; j < n-1; j++){
				if( array[j] > array[j+1]){
					let temp = array[j]
					array[j] = array[j+1]
					array[j+1] = temp

					bars[j].style.height = (array[j]*5)+'px';
					bars[j+1].style.height = (array[j+1]*5)+'px';
				}
				/*await new Promise((resolve)=>{
					setTimeout(()=>{
						resolve()
					},400)
				});*/
		}
		await new Promise((resolve)=>{
			setTimeout(()=>{
				//alert('pass1')
				resolve()
			},400)
		});
	}
}

let bars1 = vis_i.querySelectorAll('.bar')
console.log(bars1)
async function iSort(delay = 300){
	for(let i = 0; i <= n-1; i++){

		for(let j = i+1; j >= 0; j--){
				//setTimeout(()=>{
				if( array1[j] < array1[j-1]){
					let temp = array1[j]
					array1[j] = array1[j-1]
					array1[j-1] = temp

					bars1[j].style.height = (array1[j]*5)+'px';
					bars1[j-1].style.height = (array1[j-1]*5)+'px';
				}
				/*await new Promise((resolve)=>{
					setTimeout(()=>{
						resolve()
					},600)
				});*/
		//	}, 100)
		}
		await new Promise((resolve)=>{
			setTimeout(()=>{
				//alert('pass1')
				resolve()
			},400)
		});
	}
}

let bars2 = vis_s.querySelectorAll('.bar')
console.log(bars2)
async function sSort(delay = 100){
	for(let i = 0; i <= n-1; i++){
		let min = i
		for(let j = i+1; j <= n-1; j++){
			if( array2[j] < array2[min]){
				min = j
			}
			/*await new Promise((resolve)=>{
				setTimeout(()=>{
					resolve()
				},400)
			});*/
		}
		let temp = array2[i]
		array2[i] = array2[min]
		array2[min] = temp

		bars2[i].style.height = (array2[i]*5)+'px';
		bars2[min].style.height = (array2[min]*5)+'px';
		await new Promise((resolve)=>{
			setTimeout(()=>{
				//alert('pass1')
				resolve()
			},400)
		});
	}
}

async function sort(){
	bSort()
	await new Promise((resolve)=>{
		resolve()
	},0)
	iSort()	
	await new Promise((resolve)=>{
		resolve()
	},0)
	sSort()
}

sort();

console.log(array)
console.log(array1)
console.log(array2)