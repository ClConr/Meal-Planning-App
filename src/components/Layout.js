import * as React from "react"

const headerStyles = {
  background: "#663399",
  padding: "1rem",
  color: "#fff",
  textAlign: "center",
}

const footerStyles = {
  background: "#f4f4f4",
  padding: "1rem",
  textAlign: "center",
  marginTop: "2rem",
}

const Layout = ({ children }) => {
  return (
    <div>
      <header style={headerStyles}>
        <h1>Meal Planning App</h1>
      </header>
      <main>{children}</main>
      <footer style={footerStyles}>
        <p>&copy; 2025 Meal Planning App. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Layout
