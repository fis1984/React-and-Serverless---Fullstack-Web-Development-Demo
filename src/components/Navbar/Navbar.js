import React from 'react';
import { Link } from 'react-router-dom';
import {
	StyledNabvar,
	StyledNavbarBrand,
	StyledNabvarItems,
	StyledLink,
} from '../../styled/Navbar';
import { Accent } from '../../styled/Random';

export default function Navbar() {
	return (
		<StyledNabvar>
			<StyledNavbarBrand>
				<Link to='/'>
					Learn.Build.<Accent>Type.</Accent>
				</Link>
			</StyledNavbarBrand>
			<StyledNabvarItems>
				<li>
					<StyledLink to='/'>Home</StyledLink>
				</li>
				<li>
					<StyledLink to='/highScores'>HighScores</StyledLink>
				</li>
			</StyledNabvarItems>
		</StyledNabvar>
	);
}
