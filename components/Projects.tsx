import Image from 'next/image';

const Projects = () => {
	const projectList = [
		{
			title: 'Project 1',
			description:
				'An innovative project built with cutting-edge technology.',
			image: '/Screenshot (2).png',
		},
		{
			title: 'Project 2',
			description: 'A dynamic application with a modern user interface.',
			image: '/Screenshot (2).png',
		},
	];

	return (
		<section id='projects' className='py-20 bg-gray-200'>
			<div className='container mx-auto text-center'>
				<h2 className='text-4xl font-bold mb-8'>Projects</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{projectList.map((project, index) => (
						<div
							key={index}
							className='bg-white shadow-md rounded-lg overflow-hidden'
						>
							<Image
								src={project.image}
								alt={project.title}
								width={100}
								height={100}
								className='w-full h-48 object-cover'
							/>
							<div className='p-4'>
								<h3 className='text-2xl font-semibold mb-2'>
									{project.title}
								</h3>
								<p>{project.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
