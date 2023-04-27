import React from "react";

function Hobbies({
	hobbies: { id, name },
	deleteHobbies,
}) {
	return (
		<ul>
			<ul>{name}</ul>
            <td>
			
				<button onClick={() => deleteHobbies(id)}>Delete</button>
			</td>
		</ul>
	);
}

export default Hobby;g