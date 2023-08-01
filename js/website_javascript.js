// Day and Night theme changer javascript code
    let dayNight = document.querySelector('.dayNight')
    let menuToggle = document.querySelector('.menuToggle')
    let body = document.querySelector('body')
    let navigation = document.querySelector('.navigation')

    dayNight.onclick = function () {
        body.classList.toggle('dark')
        dayNight.classList.toggle('active')
    }

    menuToggle.onclick = function () {
        menuToggle.classList.toggle('active')
        navigation.classList.toggle('active')
    }



// Query form input validation value checker
    function formValidation()
    {
        let name = document.forms["quaryform"]["fullname"].value;
        if (name == "") {
            alert("Full Name must be filled out..!");
            return false;
        }
            
        let email = document.forms["quaryform"]["email"].value;
        if (email == "") {
            alert("Email must be filled out..!")
            return false;
        }
        let subject = document.forms["quaryform"]["subject"].value;
        if (subject == "None") {
            alert("Subject must be filled out..!")
            return false;
        }
        let queryDetail = document.forms["quaryform"]["queryDetail"].value;
        if (queryDetail == "") {
            alert("Query Details must be filled out..!")
            return false;
        }
    }
    
    
    // Display filled query details on another page
    window.addEventListener("load", () => {
        const params = (new URL(document.location)).searchParams;
        const name = params.get("fullname");
        const email = params.get("email");
        const subject = params.get("subject");
        const country = params.get("country");
        const details = params.get("queryDetail");

        document.getElementById("filled-name").innerHTML = name;
        document.getElementById("filled-email").innerHTML = email;
        document.getElementById("filled-subject").innerHTML = subject;
        document.getElementById("filled-country").innerHTML = country;
        document.getElementById("filled-details").innerHTML = details;
    }
    )

