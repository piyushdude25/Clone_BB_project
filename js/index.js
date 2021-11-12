
// let signUpSignin = document.getElementById('signUpSignin');

// signUpSignin.onmouseenter = function () {
//     signUpSignin.style.color = 'orange';
// }
// signUpSignin.onmouseleave = function () {
//     signUpSignin.style.color = 'black';
// }

// signUpSignin.addEventListener('click', function () {

// });

// function displayUserNameOnNav() {
//     // navbar user printing if user is signed in 
//     let isSignedIn = JSON.parse(localStorage.getItem('isSignedIn'));
//     let userLoginDetails = JSON.parse(localStorage.getItem('userLoginDetails'));
//     let userEmail = userLoginDetails[(Object.keys(userLoginDetails).length) - 1].email;
//     let userName = "";
//     for (let i = 0; i < (userLoginDetails[(Object.keys(userLoginDetails).length) - 1].email).length; i++) {
//         if (userEmail[i] == '@') {
//             break;
//         } else {
//             userName += userEmail[i];
//         }
//     }

//     if (isSignedIn[isSignedIn.length - 1] == true) {
//         signUpSignin.innerHTML = '<strong>' + userName + '</strong>'
//     }
//     signUpSignin.setAttribute('style', 'text-aligh: center; margin-left: 7%; margin-right: 7%;');
//     localStorage.setItem('isSignedIn', JSON.stringify(isSignedIn));
//     localStorage.setItem('userLoginDetails', JSON.stringify(userLoginDetails));
// }