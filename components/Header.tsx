import Link from 'next/link';

const Header = () => {
	return (
		<header className='bg-gray-800 text-white shadow-md'>
			<div className='container mx-auto p-4 flex justify-between items-center'>
				<h1 className='text-3xl font-bold'>
					<Link href='/'>Sanved&apos;s Portfolio</Link>
				</h1>
				<nav>
					<ul className='flex space-x-6'>
						<li>
							<Link href='/'>Home</Link>
						</li>
						<li>
							<Link href='/about'>About</Link>
						</li>
						<li>
							<Link href='/skills'>Skills</Link>
						</li>
						<li>
							<Link href='/projects'>Projects</Link>
						</li>
						<li>
							<Link href='/contact'>Contact</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
