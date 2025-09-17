export const aboutContent = () => {
    const divContent = document.getElementById("content");

    divContent.innerHTML = `

        <div class="about-content">
          <img class="about-img" src="https://images.unsplash.com/photo-1648130782107-168fa985a8ea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="kitchen-staff" >
           <div class="about-text">
              <h1>About Us</h1>
              <p>We are passionate about delivering the best dining experience.</p>
              <p>Our chefs use only the freshest ingredients to create delicious dishes.</p>
              <p>Join us for a memorable meal with family and friends!</p>
            </div>
        </div>

        <footer class="footer-about">
            <p>&copy; 2024 Our Restaurant</p>
        </footer>
    `;
}
