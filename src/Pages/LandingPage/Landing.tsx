import React from 'react'
import Layout from '../../layout/Layout'
import HeroSection from './Hero'
import MyStacks from './MyStack'
import { Projects } from './Project'
import { Experience } from './Experience'
import { Services } from './Services'

const Landing: React.FC = () => {
  return (
    <>
      <Layout>
        <div className='lg:max-w-4xl w-full space-y-16 mx-auto'>

<HeroSection />
<Experience />
<MyStacks />
<Services />
<Projects />
        </div>
      </Layout>
    </>
  )
}

export default Landing