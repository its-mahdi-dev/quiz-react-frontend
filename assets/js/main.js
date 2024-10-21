const openModal = (title, body) => {
  let el = document.createElement("div");
  el.innerHTML = `
         <input type="checkbox" id="my_modal_7" class="modal-toggle" checked/>
                        <div class="modal" role="dialog">
                            <div class="modal-box">
                                <h3 class="text-lg font-bold">${title}</h3>
                                <p class="py-4">${body}</p>
                            </div>
                            <label class="modal-backdrop" for="my_modal_7">Close</label>
                        </div>
                    </form>
    `
    document.body.appendChild(el)
};

const handlemenu = () =>{
    let menu = document.getElementById("menu");
    if(menu.classList.contains("right-0")){
        menu.classList.remove("right-0");
        menu.classList.add("right-[-100%]");
    }else{
        menu.classList.remove("right-[-100%]");
        menu.classList.add("right-0");
    }
    let backdrop = document.getElementById("backdrop-menu");
    if(backdrop.classList.contains("hidden")){
        backdrop.classList.remove("hidden");
    }else{
        backdrop.classList.add("hidden");
    }
}


    // Function to generate a random purple shade
    function getRandomPurple() {
        const purpleShades = [
          '#9b5de5', '#f15bb5', '#7400b8', '#6930c3', '#4a4e69', '#c77dff'
        ];
        return purpleShades[Math.floor(Math.random() * purpleShades.length)];
      }
  
      // Function to create a half-circle at a specific position
      function createHalfCircle(position, side, isCenter = false) {
        const circle = document.createElement('div');
        const size = window.innerWidth > 992 ? 300 : 200; // Fixed size for each circle
        const posY = position; // Position down the page
  
        circle.classList.add('half-circle');
        circle.style.width = `${size}px`;
        circle.style.height = `${size / 2}px`; // Half height for the half-circle
        circle.style.top = `${posY}px`;
  
        // Adjust circle position based on side or if it's center
        if (isCenter) {
          circle.style.left = '50%';
          circle.style.transform = 'translateX(-50%)'; // Center horizontally
        } else if (side === 'left') {
          circle.style.left = `0`; // Half circle off the left edge
        } else {
          circle.style.right = `0`; // Half circle off the right edge
        }
  
        circle.style.background = `linear-gradient(135deg, ${getRandomPurple()}, ${getRandomPurple()})`;
        document.body.appendChild(circle);
      }
  
      // Function to generate half-circles in an alternating pattern
      function generateHalfCirclesInOrder() {
        const totalCircles = Math.floor(window.innerHeight / 200); // Based on height
        let currentY = 0;
        let isLeft = true;
  
        for (let i = 0; i < totalCircles; i++) {
          const side = isLeft ? 'left' : 'right'; // Alternate between left and right
          createHalfCircle(currentY, side);
          currentY += 200; // Move 200px down for each circle
          isLeft = !isLeft; // Toggle between left and right
        }
      }
  
      // Function to generate center half-circles if screen width > 992px
      function generateCenterCircles() {
        if (window.innerWidth > 992) {
          const totalCircles = Math.floor(window.innerHeight / 400); // Fewer center circles
          let currentY = 100; // Start slightly lower
  
          for (let i = 0; i < totalCircles; i++) {
            createHalfCircle(currentY, null, true); // Generate center circles
            currentY += 400; // Space them out more
          }
        }
      }
  
      // Generate circles on page load
      window.onload = () => {
        generateHalfCirclesInOrder();
        generateCenterCircles(); // Add center circles for larger screens
      };
  
     