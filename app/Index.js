import React from 'react'

import {
  connect
} from 'refunk'

import H1 from './H1'
import H2 from './H2'
import Layout from './Layout'
import Form from './Form'
import Button from './Button'
import Input from './Input'
import Label from './Label'
import LinkBox from './LinkBox'

import sites from './data/sites.json'

const Index = props =>
  <Layout>
    <H1
      children='Parse Css'
    />

    <Form
      onSubmit={e => {
        e.preventDefault()

        const url = props.urlInput

        props.update({
          redirectTo: '/parse',
          urlInput: null,
          url
        })

        props.history.push(`/stats?url=${url}`)
      }}
    >
      <Label
        children='URI'
      />
      <Input
        mt={1}
        placeholder='Url, domain, or direct css link'
        onChange={e => props.update({ urlInput: e.target.value })}
      />
      <Button
        mt={2}
        children='Go'
      />
    </Form>

    <H2
      children='View Stats for Popular Sites'
    />
    <LinkBox
      links={sites.map(link => {
        const fallbackUrl = `https://${link.name.replace(' ','').toLowerCase()}.com`
        link.url = `/stats?url=${link.url || fallbackUrl}`
        return link
      })}
    />

    <H2
      children='View Stats for Popular Frameworks'
    />
    <LinkBox
      links={sites.map(link => {
        const fallbackUrl = `https://${link.name.replace(' ','').toLowerCase()}.com`
        link.url = `/stats?url=${link.url || fallbackUrl}`
        return link
      })}
    />
  </Layout>

export default connect()(Index)
