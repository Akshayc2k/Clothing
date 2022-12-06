
const creatFooter = () =>{
  let footer = document.querySelector("footer");

  footer.innerHTML = `
  <div class="footer-content">
    <img src="img/light-logo.png" class="logo" alt="">
    <div class="footer-list">
      <ul class="catagory">
        <li class="catagory-title">men</li>
        <li> <a href="#" class="footer-link">t-shirts</a></li>
        <li> <a href="#" class="footer-link">sweat-shirts</a></li>
        <li> <a href="#" class="footer-link">shirts</a></li>
        <li> <a href="#" class="footer-link">jeans</a></li>
        <li> <a href="#" class="footer-link">trousers</a></li>
        <li> <a href="#" class="footer-link">shoes</a></li>
        <li> <a href="#" class="footer-link">formals</a></li>
        <li> <a href="#" class="footer-link">sports</a></li>
        <li> <a href="#" class="footer-link">watch</a></li>
      </ul>
      <ul class="catagory">
        <li class="catagory-title">women</li>
        <li> <a href="#" class="footer-link">t-shirts</a></li>
        <li> <a href="#" class="footer-link">sweat-shirts</a></li>
        <li> <a href="#" class="footer-link">shirts</a></li>
        <li> <a href="#" class="footer-link">jeans</a></li>
        <li> <a href="#" class="footer-link">trousers</a></li>
        <li> <a href="#" class="footer-link">shoes</a></li>
        <li> <a href="#" class="footer-link">formals</a></li>
        <li> <a href="#" class="footer-link">sports</a></li>
        <li> <a href="#" class="footer-link">watch</a></li>
      </ul>
    </div>
  </div>
  <p class="footer-title">about company</p>
  <p class="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p class="info">support emeils-help@gmail.com,customersupport@clothing.com</p>
    <p class="info">telephone- 180 00 00 001, 180 00 00 002</p>
    <div class="footer-social-container">
      <div>
        <a href="#" class="social-link">terms & services</a>
        <a href="#" class="social-link">privacy page</a>
      </div>
      <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">tweeter</a>
      </div>
    </div>
    <div class="footer-credit">
      <p>Clothing, Best apparels Online Store</p>
    </div>


  `
}

creatFooter();
