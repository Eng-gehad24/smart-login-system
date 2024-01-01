let welcomeMessage = document.getElementById("welcomeMessage");
let homeLogout = document.getElementById("home-logout");
let openSetting = document.getElementById("open-setting");
let logout = document.getElementById("logout");
let userAccountsSave = JSON.parse(localStorage.getItem("user"))
//***check if user log out****/
!userAccountsSave ? location.replace("../index.html") : undefined;

//**welcome Message**/
welcomeMessage.innerHTML=`
<p>Welcome <span class="userNameInHome text-secondary">${userAccountsSave}</span></p>
`
logout.addEventListener('click',function(){
  localStorage.removeItem('user')
  window.open('../index.html','_self')
})
