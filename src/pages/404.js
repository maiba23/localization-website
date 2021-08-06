import NatureLayout from "components/Nature/Layout"
import NavButton from "components/Nature/shared/buttons/NavButton"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const NotFoundPage = () => {
  return (
    <NatureLayout>
      <div className="notfound-page">
        <h1>OOOOPS!</h1>
        <p>Sorry, this page isn&apos;t available. :(</p>

        <StaticImage alt="404" src="../images/nature/404.svg" />
        <NavButton title="GO BACK" to="/" />
      </div>
    </NatureLayout>
  )
}

export default NotFoundPage