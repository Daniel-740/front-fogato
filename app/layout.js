"use client"
import './globals.css';
import firebase, { FirebaseContext } from '../services/firebase';

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<head>
				<meta name="viewport" content="width=device-width" />

				<title>Fogato App</title>
			</head>
			<body>
				{
					<FirebaseContext.Provider value={{ firebase }}>
						{children}
					</FirebaseContext.Provider>
				}
			</body>
		</html>
	);
}
