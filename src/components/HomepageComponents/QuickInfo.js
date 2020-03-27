import React, { Component } from 'react';
import { Section, Title, SectionButton } from '../../utils';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { styles } from '../../utils';

export default class QuickInfo extends Component {
	render() {
		return (
			<Section>
				<Title message="let us tell you" title="our mission" />
				<QuickInfoWrapper>
					<p className="text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, dolor tenetur soluta magni debitis
						excepturi ut eos error dolores corrupti ad dolorem voluptatibus recusandae, est atque placeat
						sunt, fugiat quisquam. Maiores impedit sed unde repellat assumenda incidunt vero quidem,
						recusandae quisquam modi quos, vel et quas, cupiditate ad quod numquam.
					</p>
				</QuickInfoWrapper>
				<Link to="about" style={{ textDecoration: 'none' }}>
					<SectionButton style={{ margin: '2rem auto' }}>about</SectionButton>
				</Link>
			</Section>
		);
	}
}

const QuickInfoWrapper = styled.div`
	width: 90%;
	margin: 2rem auto;
	.text {
		line-height: 2rem;
		color: ${styles.colors.mainGrey};
		word-spacing: 0.2rem;
	}
	@media (min-width: 768px) {
		width: 70%;
	}
	@media (min-width: 992px) {
		width: 60%;
	}
`;
