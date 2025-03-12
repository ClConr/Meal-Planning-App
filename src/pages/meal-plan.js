import React from "react"

const pageStyles = {
  color: "#232128",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh", // Ensures the page takes up full viewport height
}

const headerStyles = {
  backgroundColor: "#ffa500",
  padding: "1rem",
  textAlign: "center",
}

const mainStyles = {
  flex: 1, // Fills the available vertical space
  padding: "1rem",
  textAlign: "center",
}

const footerStyles = {
  backgroundColor: "#ffa500",
  padding: "1rem",
  textAlign: "center",
}

const MealPage = () => {
  return (
    <div style={pageStyles}>
      <header style={headerStyles}>
        <h1>Meal Planning App</h1>
      </header>
      <main style={mainStyles}>
        <section>
          <h2>Have fun</h2>
          <p>Plan your meals</p>
        </section>
      </main>
      <footer style={footerStyles}>
        <p>&copy; 2025 Meal Planning App. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default MealPage
