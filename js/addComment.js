function addComment() {
	const username = document.getElementById("username").value;
	const message = document.getElementById("commentarea").value;

	var commetElement = document.createElement("div");
	commetElement.innerHTML = '<div class="left"> <p> <strong>' + username +
		': </strong> </p> </div>' + '<div class="right"> <p>' + message + '</p></div>';

	document.querySelector(".messages").appendChild(commetElement);

	document.getElementById("username").value = "";
	document.getElementById("commentarea").value = "";
}