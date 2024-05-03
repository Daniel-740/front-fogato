'use client';
import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { FirebaseContext } from '@/services/firebase';
import firebase from '@/services/firebase';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { Dish } from '@/components/dish';

export default function Page() {
	const { firebase } = useContext(FirebaseContext);
	const [dishs, setDishs] = useState([]);

	const getData = () => {
		const productsRef = collection(firebase.db, 'products');
	
		onSnapshot(productsRef, (snap) => {
			const response = snap.docs.map((item) => {
				return {
					id: item.id,
					...item.data(),
				};
			});
	
			setDishs(response);
		});
	
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<Link
				href={'/new-dish'}
				className="ml-1 bg-blue-800 hover:bg-blue-700 inline-block mb-5 p-2 text-white uppercase font-bold">
				Agregar Platillo
			</Link>

			{dishs.map( item => (
				<Dish 
					key={dishs.id}
					dish={item}
				/>
			))}
		</>
	);
}
