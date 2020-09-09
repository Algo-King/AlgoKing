import React, { useState, useEffect } from 'react';

import axios from 'axios';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import GridContainer from '../../material-ui/GridContainer.js';
import GridItem from '../../material-ui/GridItem.js';
import Card from '../../material-ui/Card.js';
import Info from '../../material-ui/Info.js';

import blogsStyle from '../../../assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle';
const useStyles = makeStyles(blogsStyle);

export default function SectionBlogs({ ...rest }) {
	const classes = useStyles();

	// setup react hook here,
	const [oldQuestion, setOldQuestion] = useState([
		{
			name: '',
			problem: '',
			example1: '',
			example2: '',
		},
	]);

	useEffect(() => {
		getData();
	}, []);
	const getData = async () => {
		const res = await axios.get(`/api/oldChallenges/all`);
		setOldQuestion(res.data);
	};
	console.log(typeof oldQuestion[0].date);
	const sortedArr = oldQuestion.sort(function (a, b) {
		if (a.date > b.date) {
			return 1;
		}
		if (a.date < b.date) {
			return -1;
		}
		// a must be equal to b
		return 0;
	});
	// use effect -- make axios request to the old challenges collection
	return (
		<div className="cd-section" {...rest}>
			{/* Blogs 3 START */}
			<div className={classes.blog}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem
							xs={12}
							sm={10}
							md={10}
							className={classes.mlAuto + ' ' + classes.mrAuto}
						>
							<h2 className={classes.title}>Previous Questions</h2>
							{sortedArr.map((el) => {
								return (
									<Card plain blog className={classes.card}>
										<GridContainer>
											<GridItem xs={12} sm={12} md={12}>
												<Info>
													<h6 className={classes.cardCategory}>Arrays</h6>
												</Info>
												<h3 className={classes.cardTitle}>
													<a href="#pablo" onClick={(e) => e.preventDefault()}>
														{el.name}
													</a>
												</h3>
												<p className={classes.description}>
													<div>Problem :{el.problem}</div>
													<div>Input :{el.example1.input}</div>
													<div>Output :{el.example1.output}</div>
												</p>
												<b>{el.date}</b>
											</GridItem>
										</GridContainer>
									</Card>
								);
							})}
						</GridItem>
					</GridContainer>
					{/* <Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={12} md={12}>
										<Info>
											<h6 className={classes.cardCategory}>Arrays</h6>
										</Info>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												TwoSum
											</a>
										</h3>
										<p className={classes.description}>
											Like so many organizations these days, Autodesk is a
											company in transition. It was until recently a traditional
											boxed software company selling licenses. Today, it’s
											moving to a subscription model. Yet its own business model
											disruption is only part of the story — and…
										</p>
										<b>9/3/2020</b>
									</GridItem>
								</GridContainer>
							</Card>
							<Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={12} md={12}>
										<Info>
											<h6 className={classes.cardCategory}>Arrays</h6>
										</Info>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												TwoSum
											</a>
										</h3>
										<p className={classes.description}>
											Like so many organizations these days, Autodesk is a
											company in transition. It was until recently a traditional
											boxed software company selling licenses. Today, it’s
											moving to a subscription model. Yet its own business model
											disruption is only part of the story — and…
										</p>
										<b>9/3/2020</b>
									</GridItem>
								</GridContainer>
							</Card>
						</GridItem>
					</GridContainer> */}
				</div>
			</div>
			{/* Blogs 3 END */}
		</div>
	);
}
