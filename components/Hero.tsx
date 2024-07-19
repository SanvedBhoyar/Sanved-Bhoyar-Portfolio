import { Button } from '@/components/ui/button';

const Hero = () => {
	return (
		<section className='relative bg-gradient-to-r from-teal-500 to-teal-800 text-white text-center py-32'>
			<div
				className='absolute inset-0 bg-opacity-30 bg-cover'
				style={{ backgroundImage: "url('/hero-background.jpg')" }}
			></div>
			<div className='relative z-10 container mx-auto'>
				<h1 className='text-5xl font-bold mb-4'>Hi, I&apos;m Sanved</h1>
				<p className='text-xl mb-8'>
					A Full Stack Developer with a Passion for Crafting Amazing
					Web Experiences
				</p>
				<a href='#contact'>
					<Button>Get in Touch</Button>
				</a>
			</div>
		</section>
	);
};

export default Hero;
