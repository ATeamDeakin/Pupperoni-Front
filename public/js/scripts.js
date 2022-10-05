var jwt = localStorage.getItem("jwt");
if (jwt != null) {
	window.location.href = './match.html'
}

let socket = io();
socket.on(() => {
	console.log('Random number: ');
});

function login() {
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	const xhttp = new XMLHttpRequest();
	xhttp.open("POST", "http://localhost:8080/login");
	xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhttp.send(JSON.stringify({
		"username": username,
		"password": password
	}));
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4) {
			const objects = JSON.parse(this.responseText);
			console.log(objects);
			if (objects['status'] == 'ok') {
				localStorage.setItem("jwt", objects['accessToken']);
				Swal.fire({
					text: objects['message'],
					icon: 'success',
					confirmButtonText: 'OK'
				}).then((result) => {
					if (result.isConfirmed) {
						window.location.href = './match.html';
					}
				});
			} else {
				Swal.fire({
					text: objects['message'],
					icon: 'error',
					confirmButtonText: 'OK'
				});
			}
		}
	};
	return false;
}

document.addEventListener("DOMContentLoaded", function () {
	var myNav = document.querySelectorAll(".sidenav");
	M.Sidenav.init(myNav, {});
});