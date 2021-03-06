var myModal = {}


window.onload = function(){
	// It is one of the button Modalise will attach the Show event.
	// Note that you can use Modalise without the events, by omitting the .attach() function.
	// Then, you can use show() or hide() to use it manually without overload. 
	var btnOpen = document.getElementById('openModal');
	
	// Modalise(id, options);
	myModal = new Modalise('exampleModal', {
		btnsOpen : [btnOpen]
	});

	myModal.attach();

	// Before showing the modal, you may need it to fill the modal with your data
	myModal.on('onShow', console.log);
	// When clicking on the ".confirm" class, use it to get your data back
	myModal.on('onConfirm', console.log);
	// When the modal hides, you may want to clean the modal data
	myModal.on('onHide', console.log);
}