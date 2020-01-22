$(document).ready(function(){
	var obj1 = document.getElementById("v6EwAc1");
	var obj2 = document.getElementById("v6EwAc2");
	var obj3 = document.getElementById("v6EwAc3");
	var obj4 = document.getElementById("v6EwAc4");

	obj1.addEventListener("click", function(){
		obj1.classList.add("kCr2iQv");

		obj2.classList.remove("kCr2iQv");
		obj3.classList.remove("kCr2iQv");
		obj4.classList.remove("kCr2iQv");
	});

	obj2.addEventListener("click", function(){
		obj2.classList.add("kCr2iQv");

		obj1.classList.remove("kCr2iQv");
		obj3.classList.remove("kCr2iQv");
		obj4.classList.remove("kCr2iQv");
	});

	obj3.addEventListener("click", function(){
		obj3.classList.add("kCr2iQv");

		obj1.classList.remove("kCr2iQv");
		obj2.classList.remove("kCr2iQv");
		obj4.classList.remove("kCr2iQv");
	});

	obj4.addEventListener("click", function(){
		obj4.classList.add("kCr2iQv");

		obj1.classList.remove("kCr2iQv");
		obj2.classList.remove("kCr2iQv");
		obj3.classList.remove("kCr2iQv");
	});

	
})