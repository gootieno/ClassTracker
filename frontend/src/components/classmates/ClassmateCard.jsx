import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './classmateCard.css';

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

export default function ClassmateCard() {
	const classes = useStyles();

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

	return (
		<div className='class-card-container'>
			{cardInfo.map(
				(
					{
						firstName,
						lastName,
						pronounciation,
						pronoun,
						linkedIn,
						github,
						photoUrl,
					},
					i
				) => (
					<Card className={`${classes.root} class-card`}>
						<div className='card-container' key={i}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image={require('../../static/mr-bean.png')}
									title='Classmate'
								/>
								<CardContent>
									<Typography gutterBottom variant='h5' component='h2'>
										{firstName} {lastName}
									</Typography>
									<Typography
										variant='body2'
										color='textSecondary'
										component='p'
									>
										{pronounciation}
									</Typography>
									<Typography
										variant='body2'
										color='textSecondary'
										component='p'
									>
										{pronoun}
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
									onClick={() => window.open(linkedIn)}
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
