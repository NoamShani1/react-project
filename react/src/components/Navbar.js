import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/auth'

export default function Navbar() {

	const { isLoggedIn, user, logoutUser } = useContext(AuthContext)

	return (
		<nav>
			<Link to='/'>
				<button>Feed</button>
			</Link>
			{isLoggedIn ?
				(
					<>
					<Link to='/post/new'>
							<button>create a tweet</button>
						</Link>
						<button onClick={logoutUser}>Logout</button>
					</>
				) : (
					<>
						<Link to='/signup'>
							<button>Signup</button>
						</Link>
						<Link to='/login'>
							<button>Login</button>
						</Link>

	
					</>
				)}
		</nav>
	)
}
