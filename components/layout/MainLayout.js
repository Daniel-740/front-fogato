export const MainLayout = ({ children }) => {
	return (
          <html lang="en">
			<header>
				<p>this is a header</p>
			</header>
			<body>{children}</body>
		</html>
	);
};
