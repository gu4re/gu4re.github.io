import * as React from 'react'

import Seo from "../components/seo"

const AboutPage = () => {
    return (
        <main>
            <h1>About Me</h1>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </main>
    )
}

export const Head = () => <Seo title="About | Gu4re" />

export default AboutPage