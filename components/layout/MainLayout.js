import { SideBar } from './Sidebar';
import Link from 'next/link';
export const MainLayout = ({ children }) => {
	return (
		<div className='md:flex min-h-screen'>
               <SideBar />
               <main className='md:w-3/5 xl:w-4/5 bg-white'>
                   <section className='p-6'>
                    {children}
                   </section>
               </main>
		</div>
	);
};
