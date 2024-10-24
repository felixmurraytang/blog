import React from 'react';

const Header: React.FC = () => {
	return (
		<header style={{
			padding: '1rem 0',
		}}>
			<nav style={{
				maxWidth: '1200px',
				margin: '0 auto',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center'
			}}>
				<ul style={{
					listStyle: 'none',
					display: 'flex',
					gap: '1rem',
					margin: 0,
					padding: 0
				}}>
					{['Home', 'Articles', 'Notes', 'Projects', 'Podcasts', 'Videos'].map((item) => (
						<li key={item}>
							<a href={item === 'Home' ? '/' : `/${item.toLowerCase()}/`} style={{
								color: '#666',
								textDecoration: 'none',
								fontSize: '1rem',
							}}>{item}</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
