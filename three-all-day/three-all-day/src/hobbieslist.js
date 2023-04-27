import React from "react";
import Hobbies from "./hobbies";

function HobbiesList({ hobbies, handleDeleteHobbies }) {
	const deleteHobbies = async (hobbiesId) => {
		console.log(hobbiesId);
		try {
			const res = await fetch("http://localhost:3000/hobbies/" + hobbiesId, {
				method: "DELETE",
			});
			handleDeleteHobbies(hobbiesId);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<list className="ui celled striped padded list">
			<lbody>
				<tr>
					<th>
						<h3 className="ui center aligned header"></h3>
					</th>
					
					<th>Action</th>
				</tr>
				{/* render a list of <Hobbies> components here */}
				{hobbies.map((hobbies,index) => (
					<Hobbies
						key={hobbies.id}
						hobbies={hobbies}
						deleteHobbies={deleteHobbies}
					/>
				))}
			</lbody>
		</list>
	);
}

export default HobbiesList;