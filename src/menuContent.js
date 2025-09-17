export const menuContent = () => {
    const contentDiv = document.getElementById("content");

    contentDiv.innerHTML = `
        <div class="menu-content">
            <h1>Our Menu</h1>

            <div class="menu-item">
              <h2>Spaghetti Carbonara</h2>
              <p>$12</p>
              <img src="https://images.unsplash.com/photo-1719250726371-b4076d48ce6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BhZ2hldHRpJTIwY2FyYm9uYXJhfGVufDB8MHwwfHx8MA%3D%3D" alt="Spaghetti Carbonara">
            </div>

            <div class="menu-item">
              <h2>Margherita Pizza</h2>
              <p>$10</p>
              <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyZ2hlcml0YSUyMHBpenphfGVufDB8MHwwfHx8MA%3D%3D" alt="Margherita Pizza">
            </div>

            <div class="menu-item">
              <h2>Caesar Salad</h2>
              <p>$8</p>
              <img src="https://images.unsplash.com/photo-1670237735381-ac5c7fa72c51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNlYXNhciUyMHNhbGFkfGVufDB8MHwwfHx8MA%3D%3D" alt="Caesar Salad">
            </div>

            <div class="menu-item">
              <h2>Grilled Salmon</h2>
              <p>$15</p>
              <img src="https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JpbGxlZCUyMHNhbG1vbnxlbnwwfDB8MHx8fDA%3D" alt="Grilled Salmon">
            </div>

            <div class="menu-item">
              <h2>Chocolate Lava Cake</h2>
              <p>$6</p>
              <img src="https://images.unsplash.com/photo-1673551490812-eaee2e9bf0ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hvY29sYXRlJTIwbGF2YSUyMGNha2V8ZW58MHwwfDB8fHww" alt="Chocolate Lava Cake">
            </div>

        </div>

         <footer>
            <p>&copy; 2024 Our Restaurant</p>
        </footer>
    `;
}
