import React from "react";

function Hobbies({
	hobbies: { id, name },
	deleteHobbies,
}) {
	return (
		<ul>
			<ul>{name}</ul>
            
			
				<button onClick={() => deleteHobbies(id)}>Delete</button>
			
		</ul>
	);
}

export default Hobbies;