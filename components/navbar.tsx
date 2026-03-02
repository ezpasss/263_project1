
import Link from "next/link";

const tabsBar = () => {

    return (
		<div className="navbar">
			<ul className="nav nav-tabs justify-content-center nav-fill">
				<li className="nav-item">
					<Link className="nav-link" href="/">
						Home
					</Link>
				</li>

				<li className="nav-item">
					<Link className="nav-link" href="/">
						Favorites CHECK IF USER IS LOGGED IN
					</Link>
				</li>

				<li className="nav-item dropdown">
				<button className="nav-link dropdown-toggle">
					Categories
				</button>

				<ul className="dropdown-menu">
					<li>
					<Link href="/categories/types" className="dropdown-item">
						Types
					</Link>
					</li>
					<li>
					<Link href="/categories/map" className="dropdown-item">
						Map
					</Link>
					</li>
				</ul>
				</li>

				<li className="nav-item">
					<Link className="nav-link" href="/about">
						Contact Us
					</Link>
				</li>

				<li className="nav-item">
					<form>
						<input
						type="text"
						className="nav-search"
						placeholder="Search..."
						/>
					</form>
				</li>
			</ul>
			<h1>UNFINISHED LOGIN</h1>

  		</div>
		)}

export default tabsBar;