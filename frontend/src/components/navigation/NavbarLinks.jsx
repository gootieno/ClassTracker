import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
}));

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		tabIndex: index,
	};
}

export default function NavbarLinks(props) {
	const classes = useStyles();
	const tabs = [
		{ label: 'home', path: '/me' },
		{ label: 'assessments', path: '/assessments' },
		{ label: 'classmates', path: '/classmates' },
		{ label: 'final-projects', path: '/final-projects' },
		{ label: 'conduct', path: '/conduct' },
		{ label: 'contact-instructors', path: '/contact-instructors' },
	];
	// const [value, setValue] = React.useState(0);

	// const handleChange = (event, newValue) => {
	// 	setValue(newValue);
	// };

	return (
		<div className={classes.root}>
			<AppBar
				style={{ background: '#FF0000', boxShadow: 'none' }}
				position='relative'
			>
				<Tabs
					value={props.value}
					onChange={props.handleChange}
					aria-label='simple tabs example'
				>
					{tabs.map(({ label, path }, i) => (
						<Tab
							{...a11yProps(i)}
							key={label}
							label={label}
							component={Link}
							to={path}
							value={i}
						/>
					))}
				</Tabs>
			</AppBar>
		</div>
	);
}
