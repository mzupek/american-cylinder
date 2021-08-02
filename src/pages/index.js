import * as React from "react"
import { Flex, NavLink, Box, Text, Themed } from 'theme-ui'

const buttonStyles = {
  backgroundColor: '#000000',
  color: '#ffffff',
  padding: 15,
  borderRadius: 5,
}

const IndexPage = () => {
  return (
    <div>
     <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css" />
    <Box bg='primary'>
    <Flex as="nav">
      <NavLink href="#!" p={2}>
        Home
      </NavLink>
      <NavLink href="#!" p={2}>
        Products
      </NavLink>
      <NavLink href="#!" p={2}>
        Brands
      </NavLink>
    </Flex>
    </Box>
    <div>

        <button
        style={buttonStyles} 
        class="snipcart-add-item"
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
    </div>

    <script async src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"></script>
    <div hidden id="snipcart" data-api-key="N2U0ZjliNDctZTRkYy00NmQ1LWExODQtNmRkMjNlYjI3OGFlNjM3NjM0NTg0NzAzNzY5Njg1"></div>
    </div>
  )
}

export default IndexPage
