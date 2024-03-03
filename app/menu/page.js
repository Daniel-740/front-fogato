import Link from 'next/link';

export default function Page() {
	return (
		<>
               <Link href={'/new-dish'} className='ml-1 bg-blue-800 hover:bg-blue-700 inline-block mb-5 p-2 text-white uppercase font-bold'>
                    Agregar Platillo
               </Link>
		</>
	);
}
