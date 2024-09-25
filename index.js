const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
})

const hiddenClasses = document.querySelectorAll('.hidden,.hiddenRev, .rolling, .hiddenAbove');
hiddenClasses.forEach((el) => observer.observe(el));



const form = document.querySelector("form");

const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phoneNum = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phoneNum.value}<br> Message: ${mess.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "timothylhernandez23@gmail.com",
        Password : "1E04A16E9C509551381C9C7B083F9A762FBE",
        To : 'timothylhernandez23@gmail.com',
        From : "timothylhernandez23@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => alert("successfully sent")
    );
}


const burgerBtn = document.querySelector('.burger-btn');
const burgerMenuBar = document.querySelector('.burger-menu-bar');

const menuItems = document.querySelectorAll('.burger-menu-bar ul li a');

// Toggle the menu visibility when burger button is clicked
burgerBtn.addEventListener('click', function() {
    burgerMenuBar.style.display = burgerMenuBar.style.display === 'flex' ? 'none' : 'flex';
});

// Hide the menu when any menu item is clicked
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        burgerMenuBar.style.display = 'none';
    });
});
