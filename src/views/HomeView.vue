<!-- src/views/HomeView.vue -->
<template>
  <div class="home">
    <h1>Welcome to the Travel Apps Hub</h1>
    <p>Explore our tools designed to enhance your travel experience.</p>

    <h2>🚀 Available Apps</h2>
    <div class="app-card">
      <h3>Hyatt Globalist Mattress Run</h3>
      <p>A tool to evaluate if Mattress run is worth.</p>
      <router-link to="/hyatt-calculator">
        <button>Go</button>
      </router-link>
    </div>

    <h2>🛠 Upcoming Apps</h2>
    <div class="upcoming-apps">
      <ul>
        <li>📍 Destination Planner - Organize your travel itineraries.</li>
        <li>
          ✈️ Flight Price Tracker - Get alerts on price drops for flights.
        </li>
        <li>
          🏨 Hotel Reward Optimizer - Maximize hotel loyalty program benefits.
        </li>
      </ul>
    </div>

    <h2>📩 Stay Updated</h2>
    <p>New apps are coming soon! Stay tuned for updates.</p>
  </div>
</template>

<style scoped>
.home {
  max-width: 800px;
  margin: auto;
  text-align: center;
  padding: 20px;
}

h1 {
  color: #42b983;
}

h2 {
  margin-top: 20px;
  color: #2c3e50;
}

.app-card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  margin: 20px auto;
  max-width: 600px;
  background-color: #f9f9f9;
}

button {
  padding: 10px 15px;
  margin-top: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #369870;
}

.upcoming-apps ul {
  list-style: none;
  padding: 0;
}

.upcoming-apps li {
  font-size: 18px;
  margin: 10px 0;
}
</style>
