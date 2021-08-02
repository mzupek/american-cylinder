import * as React from "react"
import { Flex, NavLink, Button } from 'theme-ui'

const IndexPage = () => {
  return (
    <Flex>
     <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css" />
    <Flex as="nav">
      <NavLink href="#!" p={2}>
        Home
      </NavLink>
      <NavLink href="#!" p={2}>
        Blog
      </NavLink>
      <NavLink href="#!" p={2}>
        About
      </NavLink>
    </Flex>
    <Flex>
        <button class="snipcart-add-item"
        data-item-id="starry-night"
        data-item-price="79.99"
        data-item-url="/paintings/starry-night"
        data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
        data-item-image="/static/images/starry-night.jpg"
        data-item-name="The Starry Night"
        data-item-custom1-name="Long message"
        data-item-custom1-type="textarea">
        Add to cart
      </button>
    </Flex>

    <script async src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"></script>
    <div hidden id="snipcart" data-api-key="N2U0ZjliNDctZTRkYy00NmQ1LWExODQtNmRkMjNlYjI3OGFlNjM3NjM0NTg0NzAzNzY5Njg1"></div>
    </Flex>
  )
}

export default IndexPage
