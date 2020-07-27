import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { fetchStudents } from '../../store/utils/apiUtils';
import { getStudentsByCohortId } from '../../store/reducers/students';

import './classmateCard.css';

const cohortId = window.localStorage.getItem('COHORT_ID');

const useStyles = makeStyles({
	root: {
		maxWidth: 445,
		backgroundColor: '#FFFFFF',
	},
	media: {
		width: 250,
		height: 240,
	},
	links: {
		display: 'flex',
		justifyContent: 'space-between',
	},
});

function ClassmateCard(props) {
	const classes = useStyles();

	useEffect(() => {
		props.fetchStudents();
	}, []);

	const cardInfo = [
		{
			firstName: 'Ben',
			lastName: 'Perlmutter',
			pronounciation: 'n/a',
			pronoun: 'he/him/his',
			linkedIn: 'https://www.linkedin.com/in/ben-perlmutter-a410228a/',
			github: 'https://github.com/bpmutter',
			photoUrl: '../../static/mr-bean.png',
		},
		{
			firstName: 'James',
			lastName: 'Robertson',
			pronounciation: 'n/a',
			pronoun: 'he/him/his',
			linkedIn: 'https://www.linkedin.com/in/james-robertson-31b623116/',
			github: 'https://github.com/jamesurobertson',
			photoUrl: '../../static/serious-stick.jpg',
		},
		{
			firstName: 'Geoffrey',
			lastName: 'Otieno',
			pronounciation: 'n/a',
			pronoun: 'he/him/his',
			linkedIn: 'https://www.linkedin.com/in/geoffrey-otieno-57015966/',
			github: 'https://github.com/gootieno',
			photoUrl: '../../static/serious-stick.jpg',
		},
		{
			firstName: 'Ben',
			lastName: 'Perlmutter',
			pronounciation: 'n/a',
			pronoun: 'he/him/his',
			linkedIn: 'https://www.linkedin.com/in/ben-perlmutter-a410228a/',
			github: 'https://github.com/bpmutter',
			photoUrl: '../../static/mr-bean.png',
		},
		{
			firstName: 'James',
			lastName: 'Robertson',
			pronounciation: 'n/a',
			pronoun: 'he/him/his',
			linkedIn: 'https://www.linkedin.com/in/james-robertson-31b623116/',
			github: 'https://github.com/jamesurobertson',
			photoUrl: '../../static/serious-stick.jpg',
		},
		{
			firstName: 'Geoffrey',
			lastName: 'Otieno',
			pronounciation: 'n/a',
			pronoun: 'he/him/his',
			linkedIn: 'https://www.linkedin.com/in/geoffrey-otieno-57015966/',
			github: 'https://github.com/gootieno',
			photoUrl: '../../static/serious-stick.jpg',
		},
	];
	console.log(props.students);
	return (
		<div className='class-card-container'>
			{props.students.map(
				(
					{
						first_name,
						last_name,
						pronounciation,
						pronoun,
						linked_in,
						github,
						photoUrl,
					},
					i
				) => (
					<Card key={i} className={`${classes.root} class-card`}>
						<div className='card-container'>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image={require('../../static/eating-stick.jpg')}
									title={first_name}
								/>
								<CardContent>
									<Typography gutterBottom variant='h5' component='h2'>
										{first_name} {last_name}
									</Typography>
									<Typography
										variant='body2'
										color='textSecondary'
										component='p'
									>
										Pronounciation: {pronounciation}
									</Typography>
									<Typography
										variant='body2'
										color='textSecondary'
										component='p'
									>
										Pronoun: {pronoun}
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.links}>
								<Button size='small' onClick={() => window.open(github)}>
									<GitHubIcon fontSize='large' />
								</Button>
								<Button
									size='small'
									color='primary'
									onClick={() => window.open(linked_in)}
								>
									<LinkedInIcon fontSize='large' />
								</Button>
							</CardActions>
						</div>
					</Card>
				)
			)}
		</div>
	);
}

const mapStateToProps = (state, cohortId) => ({
	students: getStudentsByCohortId(state, cohortId),
});

const mapDispatchToProps = (dispatch) => ({
	fetchStudents: () => dispatch(fetchStudents(cohortId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassmateCard);
