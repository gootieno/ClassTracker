import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import GitHubIcon from '@material-ui/icons/GitHub';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
	table: {
		minWidth: 450,
	},
});

function createData(student, finalProject, clone, gitHub) {
	return { student, finalProject, clone, gitHub };
}

const rows = [
	createData(
		'Brad Simpson',
		'Rockinhood',
		'Robinhood',
		'https://github.com/bradsimpson213/rockinhood-fronend'
	),
	createData(
		'Zachary Henderson',
		'Vibe',
		'Spotify',
		'https://github.com/Aderyn1121/vibe'
	),
];

export default function FinalProjectsTables() {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell width='25%' align='center'>
							Student
						</TableCell>
						<TableCell align='center'>Final Project</TableCell>
						<TableCell align='center'>Clone</TableCell>
						<TableCell align='center'>Github</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, i) => (
						<TableRow key={i}>
							<TableCell align='center' component='th' scope='row'>
								{row.student}
							</TableCell>
							<TableCell align='center'>{row.finalProject}</TableCell>
							<TableCell align='center'>{row.clone}</TableCell>
							<TableCell align='center'>
								<a href={row.gitHub}>
									<GitHubIcon />
								</a>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
