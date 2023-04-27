import React from "react";
import HobbiesContainer from "./HobbiesContainer";

function App() {

  const [hobbies, setHobbies] = React.useState([]);
    React.useEffect(() => {
        fetchHobbies();
    }, []);
    const fetchHobbies = async () => {
        try {
            const res = await fetch("http://localhost:3000/hobbies");
            const jsonRes = await res.json();
            setHobbies(jsonRes);
        } catch (error) {
            console.log(error);
        }
    };


  const handleAddHobbies = (hobbies) => {
    setHobbies([...hobbies, hobbies]);
  };
  const handleDeleteHobbies = (hobbiesId) => {
    const filterHobbies = hobbies.filter((hobbies) => hobbies.id !== hobbiesId);

    setHobbies(filterHobbies);
  };
  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const filteredHobbies = hobbies.filter((hobbies) => {
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
      <HobbiesContainer
        handleAddHobbies={handleAddHobbies}
        hobbies={hobbies}
        handleSearch={handleSearch}
        handleDeleteHobbies={handleDeleteHobbies}
      />
    </div>
  );
}

export default App;
