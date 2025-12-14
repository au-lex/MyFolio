import React from 'react'
import Layout from '../../layout/Layout'
import HeroSection from './Hero'
import MyStacks from './MyStack'
import { Projects } from './Project'
import { Experience } from './Experience'
// import { Services } from './Services'

const Landing: React.FC = () => {
  return (
    <>
      <Layout>
        <section className='lg:max-w-5xl w-full space-y-16 mx-auto'>

<HeroSection />
<Experience />
{/* <Services /> */}
<Projects />
<MyStacks />
        </section>
      </Layout>
    </>
  )
}

export default Landing