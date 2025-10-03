# 📝 To-Do App  

A simple **Next.js To-Do application** where users can add and manage tasks.  
This project is fully **dockerized** and uses **GitHub Actions CI/CD** to automatically build and push Docker images to Docker Hub.  

---

## Features
- Add and delete tasks  
- Built with **Next.js & React**  
- Containerized with **Docker**  
- Automated builds with **GitHub Actions**  

---

## Screenshots  

### Home Page  
![Home Page](./screenshots/home.png)  

*(You can replace this with your actual app screenshots — create a `screenshots/` folder in your repo and add images there.)*  

---

## 🛠️ Running Locally
Clone the repository and run the app:  

```bash
git clone https://github.com/<your-username>/my-todo-app.git
cd my-todo-app
npm install
npm run dev

Run with Docker

You can also run the app directly from Docker Hub:

docker pull <your-dockerhub-username>/my-todo-app:latest
docker run -d -p 3000:3000 <your-dockerhub-username>/my-todo-app:latest

CI/CD Pipeline
Every push to main triggers a GitHub Actions workflow
The workflow:

1. Builds the Docker image
2. Pushes it to Docker Hub → <your-dockerhub-username>/my-todo-app
