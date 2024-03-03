import './globals.css';

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width" />

				<title>Fogato App</title>
			</head>
			<body>{children}</body>
		</html>
	);
}
