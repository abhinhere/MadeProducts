function sendToWhatsapp(){
	let number = "+918589907591";

	let name = document.getElementById('name').value;
	let message = document.getElementById('message').value;

	var url = "https://wa.me/" + number + "?text="
	+ "Name : " +name+ "%0a"
	+ "Message : " +message+ "%0a%0a";

	window.open(url, '_blank').focus();
}

function sendHomeQuoteToWhatsapp() {
	let number = "+918589907591";

	let name = document.getElementById('home-name').value;
	let category = document.getElementById('home-category').value;
	let quantity = document.getElementById('home-quantity').value;
	let phone = document.getElementById('home-phone').value;
	let message = document.getElementById('home-message').value;

	let text = `*New Quote Request from Website*%0A`
		+ `*Name:* ${encodeURIComponent(name)}%0A`
		+ `*Category:* ${encodeURIComponent(category)}%0A`
		+ `*Quantity:* ${encodeURIComponent(quantity)}%0A`
		+ `*Contact Phone:* ${encodeURIComponent(phone)}%0A`
		+ `*Details:* ${encodeURIComponent(message)}`;

	let url = "https://wa.me/" + number + "?text=" + text;
	window.open(url, '_blank').focus();
}