import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
	root: {
		'& > *': {
			borderBottom: 'unset',
		},
	},
});

function createData(assessment, submitted, dueDate) {
	return {
		assessment,
		submitted,
		dueDate,
		score: [
			{ multipleChoice: 25, coding: 30, overallScore: 55, totalPossible: 55 },
		],
	};
}

function Row(props) {
	const { row } = props;
	const [open, setOpen] = React.useState(false);
	const classes = useRowStyles();

	return (
		<React.Fragment>
			<TableRow className={classes.root}>
				<TableCell>
					<IconButton
						aria-label='expand row'
						size='small'
						onClick={() => setOpen(!open)}
					>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell align='left' component='th' scope='row'>
					{row.assessment}
				</TableCell>
				<TableCell align='center'>{row.submitted}</TableCell>
				<TableCell align='center'>{row.dueDate}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout='auto' unmountOnExit>
						<Box margin={1}>
							<Typography variant='h6' gutterBottom component='div'>
								Results
							</Typography>
							<Table size='small' aria-label='purchases'>
								<TableHead>
									<TableRow>
										<TableCell>Multiple Choice</TableCell>
										<TableCell>Coding</TableCell>
										<TableCell align='left'>Overall</TableCell>
										<TableCell align='left'>Total Possible</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{row.score.map((scoreRow, i) => (
										<TableRow key={i}>
											<TableCell component='th' scope='row'>
												{scoreRow.multipleChoice}
											</TableCell>
											<TableCell>{scoreRow.coding}</TableCell>
											<TableCell align='left'>
												{scoreRow.overallScore}
											</TableCell>
											<TableCell align='left'>
												{scoreRow.totalPossible}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}


const rows = [createData('Assessment 1', '02-24-2020', '02-24-2020 11:30am')];

export default function AssessmentTable() {
	return (
		<TableContainer component={Paper}>
			<Table aria-label='collapsible table'>
				<TableHead>
					<TableRow>
						<TableCell />
						<TableCell>Assessment</TableCell>
						<TableCell align='center'>Submitted</TableCell>
						<TableCell align='center'>Due Date</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<Row key={row.assessment} row={row} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
