'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../../styles/components/layout/sidebar.module.css';


export const SideBar = () => {
	const pathname = usePathname();

	return (
		<aside className="md:w-2/5 xl:w-1/5  border-r-2 border-solid bg-gray-100">
			<div className="bg-[#e65654] h-[110px] flex justify-center items-center">
				<p className="uppercase text-white text-3xl tracking-wide text-center font-bold">
					Fogato App
				</p>
			</div>

			<div className="p-6">
				<p className="mt-10 text-gray-800 font-semibold">
					Administra tu restaurant en las siguientes opciones:
				</p>

				<nav className="mt-10">
					<Link
						href={'/orders'}
						className={`link px-1 py-2 flex items-center text-xl mt-2 text-gray-800 hover:bg-[#e65654] hover:text-white ${pathname === '/orders' ? styles.active : ''}`}>
						<Image
							src={'images/list.svg'}
							height={20}
							width={20}
							className="mr-3 mt-1"
							alt='list-icon'
						/>
						Orders
					</Link>
					<Link
						href={'/menu'}
						className={`link px-1 py-2 flex items-center text-xl mt-2 text-gray-800 hover:bg-[#e65654] hover:text-white ${pathname === '/menu' ? styles.active : ''}`}>
						<Image
							src={'images/menu.svg'}
							height={20}
							width={20}
							className="mr-3 mt-1"
							alt='menu-icon'
						/>
						Menu
					</Link>
				</nav>
			</div>
		</aside>
	);
};
