import React from "react";
import HobbiesList from "./hobbieslist";
import Search from "./Search";




function HobbiesContainer({
    hobbies,
    // handleAddHobbies,
    handleSearch,
    handleDeleteHobbies,
}) {
    return (
        <div>
            <Search handleSearch={handleSearch} />
            
            <HobbiesList
                hobbies={hobbies}
                handleDeleteHobbies={handleDeleteHobbies}
            />
        </div>
    );
}
export default HobbiesContainer;




