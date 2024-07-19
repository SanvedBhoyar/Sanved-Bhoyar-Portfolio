import { Button } from '@/components/ui/button';

const Contact = () => {
	return (
		<section id='contact' className='py-20'>
			<div className='container mx-auto text-center'>
				<h2 className='text-4xl font-bold mb-4'>Contact</h2>
				<p className='text-xl mb-8'>
					I&apos;d love to hear from you! Reach out to me via email or
					social media.
				</p>
				<a href='mailto:sanved.s.bhoyar@gmail.com'>
					<Button>Email me</Button>
				</a>
			</div>
		</section>
	);
};

export default Contact;
