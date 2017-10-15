import React from 'react'

import withTheme from './withTheme'

import H1 from './H1'
import H2 from './H2'
import Layout from './Layout'
import Button from './Button'
import Input from './Input'
import Label from './Label'
import LinkBox from './LinkBox'

const Index = () =>
  <Layout>
    <H1
      children='Parse Css'
    />
    <Label
      children='URI'
    />
    <Input
      mt={1}
      placeholder='Url, domain, or direct css link'
    />
    <Button
      mt={2}
      children='Go'
    />

    <H2
      children='View Stats for Popular Sites and Frameworks'
    />
    <LinkBox
      links={[
        'google.com', 'yahoo.com', 'twitter.com', 'facebook.com', 'tumblr.com', 'apple.com',
        'youtube.com', 'pinterest.com', 'medium.com', 'paypal.com', 'stripe.com', 'trulia.com',
        'wikipedia.org', 'craigslist.org', 'github.com', 'stackoverflow.com', 'nytimes.com',
        'theguardian.com', 'mozilla.org', 'flickr.com', 'soundcloud.com', 'envoy.com', 'bbc.com',
        'kickstarter.com', 'etsy.com', 'mapbox.com'
      ]}
    />

  </Layout>

export default withTheme(Index)
