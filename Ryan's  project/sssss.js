// Function to change the greeting based on time of day
function setGreeting() {
  const greetingElement = document.getElementById('greeting');
  const currentHour = new Date().getHours();
  
  let greetingMessage;
  if (currentHour < 12) {
    greetingMessage = "Good Morning!";
  } else if (currentHour < 18) {
    greetingMessage = "Good Afternoon!";
  } else {
    greetingMessage = "Good Evening!";
  }

  greetingElement.textContent = greetingMessage;
}

// Function to filter projects based on category
const projects = [
  { name: "Web Development Project", category: "web", description: "A full-stack website." },
  { name: "Data Analysis with Python", category: "data", description: "Data analysis project using Python." },
  { name: "AI Chatbot", category: "ai", description: "A conversational AI chatbot." }
];

function displayProjects(filteredProjects) {
  const projectsList = document.getElementById('projects-list');
  projectsList.innerHTML = ''; // Clear previous projects
  
  filteredProjects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project-item');
    projectElement.innerHTML = `
      <h3>${project.name}</h3>
      <p>${project.description}</p>
    `;
    projectsList.appendChild(projectElement);
  });
}

function filterProjects(category) {
  const filteredProjects = projects.filter(project => project.category === category);
  displayProjects(filteredProjects);
}

// Toggle between light and dark mode
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Load the saved theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

// Form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert("All fields are required.");
    return;
  }

  alert("Form submitted successfully!");
});

// Initialize the page
setGreeting();
displayProjects(projects);
