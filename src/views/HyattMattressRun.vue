<template>
  <div class="app-details">
    <h1>Hyatt Globalist Mattress Run</h1>
    <p>
      This tool helps you track and optimize your hotel stays to efficiently
      achieve Hyatt’s Globalist status.
    </p>

    <h2>🌟 What is a Mattress Run?</h2>
    <p>
      A mattress run is when a traveler books hotel nights purely to earn elite
      status rather than for actual stays. This strategy is useful for those
      close to reaching Hyatt Globalist and wanting to maximize their rewards.
    </p>

    <h2>📊 Key Features</h2>
    <ul>
      <li>✅ Track required nights to reach Globalist</li>
      <li>💰 Compare mattress run costs vs. benefits</li>
      <li>🏨 Simulate future stay value with Globalist perks</li>
    </ul>

    <h2>🔢 Calculation Tool</h2>
    <p>
      Our interactive calculator helps you decide whether a mattress run is
      worth it. Try it now!
    </p>
    <router-link to="/hyatt-calculator">
      <button>Try the Calculator</button>
    </router-link>

    <router-link to="/">
      <button class="back-btn">Back to Home</button>
    </router-link>
  </div>
</template>

<style scoped>
.app-details {
  max-width: 800px;
  margin: auto;
  text-align: center;
  padding: 20px;
}

h1 {
  color: #42b983;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  font-size: 18px;
  margin: 10px 0;
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

.back-btn {
  margin-top: 20px;
}
</style>
