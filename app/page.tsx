import Intro from '@/components/intro'
import { MDXRemote } from 'next-mdx-remote/rsc'

const Home = () => {
  const markdown = `
    # Hello, world!
    This is a test of the MDXRemote component.
  `

  return (
    <section className="py-24">
      <div className="container max-w-[1100px]">
        <Intro />

        <MDXRemote source={markdown} />
      </div>
    </section>
  )
}

export default Home