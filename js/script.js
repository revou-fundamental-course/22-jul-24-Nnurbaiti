let start = 0;
otomatis();

function otomatis()
{
	const sliders = document.querySelectorAll(".slider");

	for (let i = 0; i < sliders.length; i++)
	{
		sliders[i].style.display = "none";
	}

	if (start >= sliders.length)
	{
		start = 0;
	}

	sliders[start].style.display = "block";
	console.log("gambar ke" +start);
	start++;

	setTimeout(otomatis, 3000);
}

function validateForm(e) {

    let nama = document.forms["theForm"]["name"].value;
    let email = document.forms["theForm"]["email"].value;
    let interest = document.forms["theForm"]["interest"].value;
    let number = document.forms["theForm"]["number"].value;

    if (nama === "") {
        alert("Name must be filled out");
        return false;
    }

    if (email === "") {
        alert("Email must be filled out");
        return false;
    }

    if (interest === "") {
        alert("Interest must be selected");
        return false;
    }
    
    if (interest === "") {
        alert("Number must be selected");
        return false;
    }

    document.forms["theForm"].submit();
}
