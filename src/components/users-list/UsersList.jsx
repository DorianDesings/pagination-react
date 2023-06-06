import { useState } from 'react';
import { USERS } from '../../constants/users';

const UsersList = () => {
	const [counter, setCounter] = useState(0);
	const isFirstUser = counter === 0;
	const isLastUser = counter === USERS.length - 1;
	return (
		<>
			<img
				src={USERS[counter].profileImage}
				alt={USERS[counter].name + ' photo'}
			/>
			<h1>Name: {USERS[counter].name}</h1>
			<p>Username: {USERS[counter].username}</p>
			<p>Email: {USERS[counter].email}</p>
			<button
				disabled={isFirstUser}
				onClick={() => prevUser(counter, setCounter)}
			>
				Previous
			</button>
			<button
				disabled={isLastUser}
				onClick={() => nextUser(counter, setCounter)}
			>
				Next
			</button>
		</>
	);
};

const prevUser = (counter, setCounter) => {
	setCounter(counter - 1);
};

const nextUser = (counter, setCounter) => {
	setCounter(counter + 1);
};

export default UsersList;
