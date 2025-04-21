gsap.registerPlugin(Draggable);

Draggable.create("#d11", {
	bounds: document.querySelector("#d1"),
	type: "x",
	inertia: true,
});



Draggable.create("#d22", {
	bounds: document.querySelector("#d2"),
	type: "x",
	inertia: true,
});



Draggable.create("#d33", {
	bounds: document.querySelector("#d3"),
	type: "x",
	inertia: true,
});



Draggable.create("#d44", {
	bounds: document.querySelector("#d4"),
	type: "x",
	inertia: true,
});



Draggable.create("#d55", {
	bounds: document.querySelector("#d5"),
	type: "x",
	inertia: true,
});



Draggable.create("#d66", {
	bounds: document.querySelector("#d6"),
	type: "x",
	inertia: true,
});



Draggable.create("#d77", {
	bounds: document.querySelector("#d7"),
	type: "x",
	inertia: true,
});



Draggable.create("#d88", {
	bounds: document.querySelector("#d8"),
	type: "x",
	inertia: true,
});



Draggable.create("#d99", {
	bounds: document.querySelector("#d9"),
	type: "x",
	inertia: true,
});



document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.animate-img img');
    
    images.forEach((img, index) => {
        gsap.fromTo(img, 
            {
                opacity: 0,
                y: 100
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: index * 0.05
            }
        );
    });
});


