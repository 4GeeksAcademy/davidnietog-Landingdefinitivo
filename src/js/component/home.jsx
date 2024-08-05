import React from "react";


import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.jsx";
import { Navbar } from "./Navbar.jsx";


let year = new Date().getFullYear();
const Home = () => {
	return (
		<div className="container-fluid p-0">
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-12">
						<Jumbotron />
					</div>
				</div>
				<div className="row pb-5">
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://i.pinimg.com/474x/0e/3f/0a/0e3f0a12aa21f086e6ce858763b0016f.jpg"
							cardTitle="Naruto"
							cardDescription="Es una serie de manga escrita e ilustrada por Masashi Kishimoto, posteriormente adaptada a una serie de anime."
							buttonUrl="https://es.wikipedia.org/wiki/Naruto"
							buttonLabel="Go to Wikipedia"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/7/71/Kimetsu_no_yaiba_Logo.png/revision/latest?cb=20190917042359&path-prefix=es"
							cardTitle="Kimetsu No Yaiba"
							cardDescription="Es una serie de manga escrita e ilustrada por Koyoharu Gotōge, cuya publicación comenzó "
							buttonUrl="https://es.wikipedia.org/wiki/Kimetsu_no_Yaiba"
							buttonLabel="Go to Wikipedia"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://upload.wikimedia.org/wikipedia/commons/e/e4/Tokyo_Ghoul_Anime_Logo_monochro.jpg"
							cardTitle="Tokyo Ghoul"
							cardDescription="Es una serie de manga escrita e ilustrada por Sui Ishida, serializada en la revista seinen Young Jump, con entrega semanal desde septiembre de 2011"
							buttonUrl="https://es.wikipedia.org/wiki/Tokyo_Ghoul"
							buttonLabel="Go to Wikipedia"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://i.pinimg.com/736x/0c/07/68/0c07689cfa854957702d49b4c0321a9c.jpg"
							cardTitle="Jujutsu Kaisen"
							cardDescription="Es una serie de manga japonés escrita e ilustrada por Gege Akutami. Shūeisha pública sus capítulos en la revista Shūkan Shōnen Jump"
							buttonUrl="https://es.wikipedia.org/wiki/Jujutsu_Kaisen"
							buttonLabel="Go to Wikipedia"
						/>
					</div>
				</div>
			</div>
			<footer className="footer py-3 bg-dark">
				<div className="container">
					<p className="text-white text-center">
						Builded with ❤️ using React.js - {year}
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Home;