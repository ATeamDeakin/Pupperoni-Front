document.addEventListener("DOMContentLoaded", function () {
	var myNav = document.querySelectorAll(".sidenav");
	M.Sidenav.init(myNav, {});
});

const loginForm = () => {
	let loginData = {};
	loginData.email = $("#email").val();
	loginData.last_name = $("#password").val();

	console.log("Login Data Submitted: ", loginData);
};

$(document).ready(function () {
	$("#loginForm").click(() => {
		submitForm();
	});
	M.updateTextFields();
});
