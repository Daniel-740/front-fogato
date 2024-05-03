'use client';
import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { schemaNewDish } from '@/helpers/Yup/SchemaNewDish';
import { FirebaseContext } from '@/services/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import { Loader } from '../../components/loader';
import Image from 'next/image';

export default function Page() {
	const [upload, setUpload] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [urlImage, setUrlImage] = useState('');

	//Context operations firebase;
	const { firebase } = useContext(FirebaseContext);
	const router = useRouter();

	const onSubmit = async (data) => {
		try {
			data.exist = true;
			data.image = urlImage;
			await addDoc(collection(firebase.db, 'products'), data);

			router.push('/menu');
		} catch (e) {
			console.log(e);
		}
	};

	const formik = useFormik({
		initialValues: {
			name: '',
			price: '',
			category: '',
			image: '',
			description: '',
		},
		validationSchema: schemaNewDish,
		onSubmit: onSubmit,
	});

	const handleImage = async (e) => {
		if (e.target.files[0]) {
			try {
				setIsLoading(true);
				setUpload(false);
				const newImage = e.target.files[0];

				const imageSave = ref(
					firebase.storage,
					`products/${newImage.name + v4()}`,
				);
				const imageRef = await uploadBytes(imageSave, newImage);

				const url = await getDownloadURL(imageRef.ref);

				setIsLoading(false);
				setUpload(true);

				setUrlImage(url);
			} catch (error) {
				setIsLoading(false);
				setUpload(false);
			}
		}
	};

	return (
		<>
			<h2 className="text-3xl font-light mb-4">Agregar Platillo</h2>

			<div className="flex justify-center mt-10">
				<div className="w-full max-w-3xl ">
					<form onSubmit={formik.handleSubmit}>
						<div className="mb-4">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="nombre">
								Nombre
							</label>
							<input
								id="name"
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								type="text"
								placeholder="Nombre del platillo"
								value={formik.values.name}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
						</div>
						{formik.touched.name && formik.errors.name ? (
							<div
								className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 my-3"
								role="alert">
								<p className="font-bold">Hubo un error:</p>
								<p>{formik.errors.name}</p>
							</div>
						) : (
							''
						)}

						<div className="mb-4">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="precio">
								Precio
							</label>
							<input
								id="price"
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								type="number"
								placeholder="20$"
								min="0"
								value={formik.values.price}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
						</div>

						{formik.touched.price && formik.errors.price ? (
							<div
								className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 my-3"
								role="alert">
								<p className="font-bold">Hubo un error:</p>
								<p>{formik.errors.price}</p>
							</div>
						) : (
							''
						)}

						<div className="mb-4">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="categoria">
								Categoria
							</label>
							<select
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								name="category"
								value={formik.values.category}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}>
								<option value="">-- Seleccione --</option>
								<option value="desayuno">Desayuno</option>
								<option value="almuerzo">Almuerzo</option>
								<option value="cena">Cena</option>
								<option value="bebida">Bebida</option>
								<option value="postre">Postre</option>
								<option value="ensalada">Ensalada</option>
							</select>
						</div>

						{formik.touched.category && formik.errors.category ? (
							<div
								className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 my-3"
								role="alert">
								<p className="font-bold">Hubo un error:</p>
								<p>{formik.errors.category}</p>
							</div>
						) : (
							''
						)}

						<div className="mb-4">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="imagen">
								Imagen
							</label>

							<div className="flex items-center">
								<input
									type="file"
									className="inp"
									accept="image/*"
									onChange={handleImage}
									id="image"
									name="image"
								/>

								{isLoading ? (
									<Loader height={40} width={40} />
								) : (
									!isLoading &&
									upload && (
										<Image
											src={'/images/check.png'}
											height={20}
											width={20}
											alt="check-image-fogato"
											className="ml-3"
										/>
									)
								)}
							</div>
						</div>

						<div className="mb-4">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="descripcion">
								Descripcion
							</label>
							<textarea
								id="description"
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
								placeholder="Descripcion del platillo"
								value={formik.values.description}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}></textarea>
						</div>

						{formik.touched.description &&
						formik.errors.description ? (
							<div
								className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 my-3"
								role="alert">
								<p className="font-bold">Hubo un error:</p>
								<p>{formik.errors.description}</p>
							</div>
						) : (
							''
						)}

						<input
							type="submit"
							className="bg-[#e65654] hover:bg-[#ca4947] cursor-pointer w-full mt-5 p-2 text-white uppercase font-bold"
							value="Agregar Platillo"
						/>
					</form>
				</div>
			</div>
		</>
	);
}
