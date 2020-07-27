import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import GitHubIcon from '@material-ui/icons/GitHub';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { getProjectsByCohortId } from '../../store/reducers/projects';
import { fetchCohortProjects } from '../../store/utils/apiUtils';

const cohortId = window.localStorage.getItem('COHORT_ID');

const useStyles = makeStyles({
	table: {
		minWidth: 450,
	},
	icon: {
		height: 70,
		width: 70,
	},
	visuallyHidden: {
		border: 0,
		clip: 'rect(0 0 0 0)',
		height: 1,
		margin: -1,
		overflow: 'hidden',
		padding: 0,
		position: 'absolute',
		top: 20,
		width: 1,
	},
});

function createData(student, finalProject, clone, gitHub) {
	return { student, finalProject, clone, gitHub };
}

const headCells = [
	{
		id: 'student',
		label: 'Student',
	},
	{
		id: 'finalProject',
		label: 'Final Project',
	},
	{
		id: 'clone',
		label: 'Clone Name',
	},
	{
		id: 'github',
		label: 'Github',
	},
];

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

function FinalProjectsTables(props) {
	const classes = useStyles();
	let [order, setOrder] = React.useState('asc');
	let [orderBy, setOrderBy] = React.useState('');

	useEffect(() => {
		props.fetchCohortProjects(cohortId);
	}, []);

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	function descendingComparator(a, b, orderBy) {
		if (b[orderBy] < a[orderBy]) {
			return -1;
		}
		if (b[orderBy] > a[orderBy]) {
			return 1;
		}
		return 0;
	}

	function getComparator(order, orderBy) {
		return order === 'desc'
			? (a, b) => descendingComparator(a, b, orderBy)
			: (a, b) => -descendingComparator(a, b, orderBy);
	}

	function stableSort(array, comparator) {
		const stabilizedThis = array.map((el, index) => [el, index]);
		stabilizedThis.sort((a, b) => {
			const order = comparator(a[0], b[0]);
			if (order !== 0) return order;
			return a[1] - b[1];
		});
		return stabilizedThis.map((el) => el[0]);
	}

	const createSortHandler = (property) => (event) => {
		handleRequestSort(event, property);
	};
	console.log(props.projects);
	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label='simple table'>
				<TableHead>
					<TableRow>
						{headCells.map((headCell) => (
							<TableCell
								key={headCell.id}
								width='25%'
								align='center'
								sortDirection={orderBy === headCell.id ? order : false}
							>
								<TableSortLabel
									active={orderBy === headCell.id}
									direction={orderBy === headCell.id ? order : 'asc'}
									onClick={createSortHandler(headCell.id)}
								>
									{headCell.label}
									{orderBy === headCell.id ? (
										<span className={classes.visuallyHidden}>
											{order === 'desc'
												? 'sorted descending'
												: 'sorted ascending'}
										</span>
									) : null}
								</TableSortLabel>
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{stableSort(props.projects, getComparator(order, orderBy)).map(
						(project, index) => (
							<TableRow key={index}>
								<TableCell
									align='center'
									scope='row'
									component='th'
									scope='row'
								>
									{project.first_name} {project.last_name}
								</TableCell>
								<TableCell align='center'>{project.project_name}</TableCell>
								<TableCell align='center'>{project.clone_name}</TableCell>
								<TableCell align='center'>
									<Button onClick={() => window.open(project.gitHub)}>
										<GitHubIcon color='secondary' />
									</Button>
								</TableCell>
							</TableRow>
						)
					)}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

const mapStateToProps = (state, cohortId) => ({
	projects: getProjectsByCohortId(state, cohortId),
});

const mapDispatchToProps = (dispatch) => ({
	fetchCohortProjects: () => dispatch(fetchCohortProjects(cohortId)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FinalProjectsTables);
