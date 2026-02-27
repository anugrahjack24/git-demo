import React, { useEffect } from "react";

function Home() {

  useEffect(() => {
    fetch("http://localhost:5000")
      .then(res => res.text())
      .then(data => console.log(data));
  }, []);

  return (
    <div>
      <h1>Student Management System</h1>
      <p>Welcome to our project</p>
      <a href="/students">Go to Students Page</a>
    </div>
  );
}

export default Home;