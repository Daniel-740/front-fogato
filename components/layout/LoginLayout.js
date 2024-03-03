import { SideBar } from './Sidebar';
import Link from 'next/link';
export const LoginLayout = ({ children }) => {
	return (
		<>
			<header>
				<nav>
					<ul className='ml-2'>
						<li>
							<Link href={`/orders`}>orders</Link>
						</li>
					</ul>
				</nav>
			</header>
			{children}
		</>
	);
};
