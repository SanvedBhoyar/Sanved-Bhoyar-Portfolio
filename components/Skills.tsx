const Skills = () => {
	return (
		<section id='skills' className='py-20'>
			<div className='container mx-auto text-center'>
				<h2 className='text-4xl font-bold mb-4'>Skills</h2>
				<div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
					<div className='bg-white shadow-md rounded-lg p-4'>
						<h3 className='text-xl font-semibold mb-2'>
							JavaScript
						</h3>
						<p>Expert in JavaScript, including ES6+ features.</p>
					</div>
					<div className='bg-white shadow-md rounded-lg p-4'>
						<h3 className='text-xl font-semibold mb-2'>React</h3>
						<p>
							Experienced with React and modern libraries like
							Redux and Context API.
						</p>
					</div>
					<div className='bg-white shadow-md rounded-lg p-4'>
						<h3 className='text-xl font-semibold mb-2'>Node.js</h3>
						<p>
							Proficient in building RESTful APIs and working with
							Express.js.
						</p>
					</div>
					<div className='bg-white shadow-md rounded-lg p-4'>
						<h3 className='text-xl font-semibold mb-2'>
							Tailwind CSS
						</h3>
						<p>
							Skilled in using Tailwind CSS for rapid UI
							development.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
