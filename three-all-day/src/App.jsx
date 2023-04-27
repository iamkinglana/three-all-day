import { useState } from 'react'
import hobbies from "./db.json"
import './App.css'

function App() {

    <>
      <div>
      const handleAddHobbies = (hobbies) => {
		setHobbies([...hobbies, hobbies]);
	};
	const handleDeleteHobbies = (hobbiesId) => {
		const filterHobbies = hobbies.filter(
			(hobbies) => hobbies.id !== hobbiesId
		);

		setHobbies(filterHobbies);
	};
	const handleSearch = (searchTerm) => {
		if (searchTerm) {
			const filteredHobbies = Hobbies.filter((hobbies) => {
				if (hobbies.description.toLowerCase().match(searchTerm.toLowerCase())) {
					return true;
				} else {
					return false;
				}
			});
			setHobbies(filteredHobbies);
		} else {
			fetchHobbies();
		}
	};
	return (
		<div className="ui raised segment">
			<div className="ui segment violet inverted">
				<h2>Three All Day</h2>
			</div>
			<AccountContainer
				handleAddTransaction={handleAddHobbies}
				hobbies={hobbies}
				handleSearch={handleSearch}
				handleDeleteHobbies={handleDeleteHobbies}
			/>
       
      </div>
      
    </>
  );
}


export default App;
