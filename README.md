# 🏋️ Fitness App

Welcome to the **Fitness App**, your personal guide to staying fit and healthy! This app is designed to help you explore and learn various exercises based on different body parts, with detailed instructions and visuals for each activity. Whether you're a beginner or a fitness enthusiast, this app is here to assist you on your fitness journey.

---

## 🌟 Features

- **Body-Part Based Exercises**  
  Browse exercises categorized by body parts such as back, chest, arms, and more.

- **Detailed Instructions**  
  Each exercise comes with step-by-step instructions, target muscles, and secondary muscles involved.

- **Visual Demonstrations**  
  Animated GIFs are provided for each exercise to ensure correct form and execution.

- **Interactive User Interface**  
  A clean and engaging interface for easy navigation.

---

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js (>= 16.x.x)
- npm or yarn
- Expo CLI

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/fitness-app.git

2. Navigate to the project directory:
   ```bash
   cd fitness-app

3. Install dependencies:
   ```bash
   npm install
   #or
   yarn install
   
4. Running the App:
   Start the development server:
   ```bash
   npm start
   #or
   yarn start
   ```
   Scan the QR code using the Expo Go app or run it on your emulator.

---
## 📂 Project Structure

### `src/screens/WelcomeScreen.js`
- The welcome screen of the app with a visually engaging background and navigation to the main app content.

### `src/screens/Exercise.js`
- Displays a list of exercises categorized by body parts with detailed instructions, visuals, and muscle group information.

### `src/data/bodyParts.js`
- Contains data about different body parts, such as names and associated images.

### `src/data/exercises.js`
- Contains exercise details, including:
- - **GIF URL**: Animated demonstration of the exercise.
  - **Target Body Part**: The primary muscle group targeted.
  - **Equipment**: Equipment needed for the exercise.
  - **Secondary Muscles**: Muscles indirectly involved in the exercise.
  - **Instructions**: Step-by-step guide to performing the exercise.

---
## 🛠️ Technologies Used
- **React Native**: For building the user interface.
- **Expo**: To streamline development and deployment.
- **JavaScript**: Core language for building the app.




