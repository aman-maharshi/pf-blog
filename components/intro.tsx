import Image from 'next/image'
import authorImage from '@/public/images/dp.jpeg'

const Intro = () => {
  return (
    <section className='flex flex-col-reverse md:flex-row items-start md:items-center gap-x-10 gap-y-4 pb-24 md:pt-4'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Aman Maharshi</h1>
        {/* <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a software engineer based in Bangaluru, India. <br /> I&#39;m
          passionate about learning new technologies and sharing knowledge with
          others.
        </p> */}
        <p className='mt-4 font-light text-muted-foreground'>
          I'm a <span className='font-bold text-black dark:text-white'>frontend developer</span> with a strong passion for developing web and mobile applications. 
          I enjoy crafting solutions that are not only high-performing and efficient but also intuitive and engaging for users.
          In addition to my development work, I love sharing my knowledge with others, helping to foster growth and collaboration within the tech community.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-full'
          src={authorImage}
          alt='Aman Maharshi'
          width={200}
          height={200}
          priority
        />
      </div>
    </section>
  )
}

export default Intro