import React from "react";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
		<div className="container-fluid">
		  <a className="navbar-brand" href="#">Animes</a>
		  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav">
			  <li className="nav-item">
				<a className="nav-link active" aria-current="page" href="#">Home</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="#">About</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="#">Donde ver</a>
                <a href="https://www.crunchyroll.com/es-es/premium?utm_source=google&utm_medium=paid_cr&utm_campaign=CR-Paid_Google_Web_Conversion_Europe_(non-UK-IE)_ES_ALL_Trademark_SVOD&utm_term=crunchyroll&referrer=google_paid_cr_CR-Paid_Google_Web_Conversion_Europe_(non-UK-IE)_ES_ALL_Trademark_SVOD&gad_source=1&gclid=Cj0KCQjw8MG1BhCoARIsAHxSiQlTuCFAOzXapmndaiW7qBjEUywHkJhPSiS3iSU8NlkJ5ILnE3Cyd9caApUiEALw_wcB"></a>
			  </li>
			</ul>
		  </div>
		</div>
	  </nav>
	  
	);
};
