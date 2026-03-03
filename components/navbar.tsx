
import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

const tabsBar = () => {

    return (
		<div className="navbar">
			<ul className="nav nav-tabs justify-content-center nav-fill">
				<li className="nav-item">
					<Link className="nav-link" href="/">
						Home
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
			<div className="flex items-center gap-4">
			<SignedOut>
				<SignInButton>
				<button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
					Sign In
				</button>
				</SignInButton>

				<SignUpButton>
				<button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
					Sign Up
				</button>
				</SignUpButton>
			</SignedOut>

			<SignedIn>
				<UserButton />
			</SignedIn>
			</div>

  		</div>
		)}

export default tabsBar;