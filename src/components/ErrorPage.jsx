/** @format */

import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();
	console.log("%c 👉 Line-7", "font-size:13px; background:#993441; color:#ffb8b1;", error);

	return (
		<div id="error-page">
			<h1>Oops! {error.status}</h1>

			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.data || error.status || error.statusText}</i>
			</p>
			<button>
				<Link to="/">To Home Page</Link>
			</button>
		</div>
	);
}
