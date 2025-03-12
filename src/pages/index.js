import * as React from "react"
import { Link } from "gatsby"
import vector from "../images/vector.svg"

const pageStyles = {
  color: "#232128",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}

const contentStyles = {
  flex: 1,
  marginRight: "20px",         // Space between content and image
}

const imageContainerStyles = {
  flex: 1,
  display: "flex",
  justifyContent: "center",    // Centers image horizontally in its container
  alignItems: "center",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 450,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "Meal Plan",
    url: "\meal-plan",
    description:
      "Plan your meals for the day, week, or month.",
    color: "#E95800",
  },
  {
    text: "Budget",
    url: "\budget",
    description:
      "Keep track of spending or set a budget for your groceries before or after you shop.",
    color: "#1099A8",
  },
  {
    text: "Recipe Creation",
    url: "\recipe",
    description:
      "Your one stop shop for creating recipes and sharing them with the world.",
    color: "#0D96F2",
  },
]

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <div style={contentStyles}>
        <h1 style={headingStyles}>
          Meal Planning App
          <br />
          <span style={headingAccentStyles}>— Plan, Plate, Post, Prosper.</span>
        </h1>
        <ul style={listStyles}>
          <li style={docLinkStyle}>
            <a
              style={linkStyle}
              href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
            >
              {docLink.text}
            </a>
          </li>
          {links.map(link => (
            <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
              <span>
                <a
                  style={linkStyle}
                  href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
                >
                  {link.text}
                </a>
                {link.badge && (
                  <span style={badgeStyle} aria-label="New Badge">
                    NEW!
                  </span>
                )}
                <p style={descriptionStyle}>{link.description}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div style={imageContainerStyles}>
        <img
        alt="Placeholder Vector"
        src={vector}
        style ={{ maxWidth: "100%", height: "auto"}}
        />
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
