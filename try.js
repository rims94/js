const routine = [
	{
		job: 'brush',
		status: 'done'
	},
	{
		job: 'have breakfast',
		status: 'done'
	},
	{
		job: 'do coding',
		status: 'done'
	},
	{
		job: 'have lunch',
		status: 'not done'
	},
	{
		job: 'take a nap',
		status: 'not done'
	},
	{
		job: 'do code again',
		status: 'not done'
	},
	{
		job: 'have dinner',
		status: 'not done'
	},
	{
		job: 'sleep',
		status: 'not done'
	}
];

let checkStatus = routine.filter((task) => {
	if (task.status === 'not done') {
		console.log(task.job);
	}
	// return task.status === 'not done';
});
console.log(checkStatus);
