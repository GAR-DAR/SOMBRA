import React from "react";

const Body = () => {
  return (
    <main style={styles.body}>
      <div style={styles.card}>
        <img src={"/ivan.webp"} alt="Ivan Hrybanov" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Ivan Hrybanov</h2>
          <p style={styles.position}>QA</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/petro.jpeg"} alt="Petro Broda" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Petro Broda</h2>
          <p style={styles.position}>Kotlin engineer</p>
        </div>
      </div>
          <div style={styles.card}>
              <img src={"/bohdan_pic.jpg"} alt="Bohdan Bilynskiy" style={styles.photo} />
              <div style={styles.textContainer}>
                  <h2 style={styles.name}>Bohdan Bilynskiy</h2>
                  <p style={styles.position}>Business analyst</p>
        </div>
      </div>
          <div style={styles.card}>
              <img src={"/ira.webp"} alt="Ira Grabovenska" style={styles.photo} />
              <div style={styles.textContainer}>
                  <h2 style={styles.name}>Ira Grabovenska</h2>
                  <p style={styles.position}>Backend developer</p>
         </div>
       </div>
    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: "150px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
    color: "#6a0dad", // Same purple color as header
    margin: "0.5em 0 0 0",
  },
};

export default Body;
