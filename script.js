document.addEventListener("DOMContentLoaded", () => {
    // Function to add hover effect on an image
    function addHoverEffect(imgId, originalSrc, hoverSrc) {
    const img = document.getElementById(imgId);
    img.addEventListener("mouseover", () => {
        img.src = hoverSrc;
    });
    img.addEventListener("mouseout", () => {
        img.src = originalSrc;
    });
    }

    // Apply hover effect to images
    addHoverEffect("scrapeImg", "images/scraping-dish.jpg", "images/scraping-dish2.jpg");
    addHoverEffect("soakImg", "images/dishes-soaking.png", "images/dishes-soaking2.jpg")
    addHoverEffect("scrubImg", "images/scrubbing-dish.jpg", "images/scrubbing-dish2.jpg")
    addHoverEffect("scrubImg", "images/drying-dish.jpg", "images/drying-dish2.jpg")

function changeImage() {
    document.getElementById("hoverImage").src = "images/image2.jpeg";
}

function resetImage() {
    document.getElementById("hoverImage").src = "images/image1.jpeg";
}

    addHoverEffect("dryImg", "images/drying-dish.jpg", "images/drying-dish2.jpg")
});


function saveData() {
    const user = {
      username: "john_doe",
      email: "john.doe@example.com",
      preferences: {
        notifications: true
      }
    };
  
    const jsonString = JSON.stringify(user);
  
    localStorage.setItem('userData', jsonString);
    alert("User data saved to LocalStorage!");
  }
  
  function loadData() {
    const jsonString = localStorage.getItem('userData');
    if (jsonString) {
      
      const user = JSON.parse(jsonString);
      alert(`User Data: \nUsername: ${user.username} \nEmail: ${user.email}`);
    } else {
      alert("No user data found in LocalStorage.");
    }
  }
  
  function clearData() {
    localStorage.removeItem('userData');
    alert("User data cleared from LocalStorage.");
  }
  

const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.querySelector(".close");


openModalBtn.onclick = function() {
    modal.style.display = "block";
};


closeModalBtn.onclick = function() {
    modal.style.display = "none";
};


window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};


function saveData(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    if (!username || !email) {
        alert('Please fill out both fields!');
        return;
    }

    const user = { username, email };
    const jsonString = JSON.stringify(user);

    
    localStorage.setItem('userData', jsonString);
    alert("User data saved to LocalStorage!");

   
    document.getElementById('userDataForm').reset();
}

function loadData() {
    const jsonString = localStorage.getItem('userData');
    if (jsonString) {
        const user = JSON.parse(jsonString);
        alert(`User Data: \nName: ${user.username} \nEmail: ${user.email}`);
    } else {
        alert("No user data found in LocalStorage.");
    }
}

function clearData() {
    localStorage.removeItem('userData');
    alert("User data cleared from LocalStorage.");
}


document.getElementById("userDataForm").addEventListener("submit", saveData);
document.getElementById("loadDataBtn").onclick = loadData;
document.getElementById("clearDataBtn").onclick = clearData;
