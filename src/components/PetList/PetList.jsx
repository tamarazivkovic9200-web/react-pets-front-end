const PetList = ({ pets, handleSelect, handleFormView, isFormOpen }) => {
  console.log(pets);

  return (
    <div>
      <h1>Pet List</h1>
      <div>
        {!pets.length ? (
          <h2>No Pets Yet!</h2>
        ) : (
          <ul>
            {pets.map((pet) => (
              <li
                key={pet._id}
                style={{ cursor: "pointer", color: "#646CFF" }}
                onClick={() => handleSelect(pet)}
              >
                {pet.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button onClick={handleFormView}>
        {isFormOpen ? "Close Form" : "New Pet"}
      </button>
    </div>
  );
};

export default PetList;