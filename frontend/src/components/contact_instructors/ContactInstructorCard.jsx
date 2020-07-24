import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './contact_instructors.css';

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
		justifyContent: 'center',
	},
});

export default function ContactInstructorCard() {
	const classes = useStyles();

	const cardInfo = [
		{
			firstName: 'Bryce',
			lastName: 'Morgan',
			pronounciation: 'n/a',
			pronoun: 'he/him/his',
			linkedIn: 'https://www.linkedin.com/in/bryce-morgan-a8792138/',
			photoUrl: '../../static/mr-bean.png',
		},
		{
			firstName: 'Bakari',
			lastName: 'Holmes',
			pronounciation: 'n/a',
			pronoun: 'he/him/his',
			linkedIn: 'https://www.linkedin.com/in/bakariholmes/',
			photoUrl: '../../static/serious-stick.jpg',
		},
	];

	return (
		<div className='contact-card-container'>
			{cardInfo.map(
				(
					{ firstName, lastName, pronounciation, pronoun, linkedIn, photoUrl },
					i
				) => (
					<Card className={`${classes.root} contact-card`}>
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
