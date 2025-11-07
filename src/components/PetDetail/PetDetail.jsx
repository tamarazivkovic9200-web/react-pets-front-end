const PetDetail = (props) => {
    if (!props.selected) {
        return (
            <div>
                <h2>No details</h2>
            </div>
        )
    }

    return (
        <div>
            <h1>{props.selected.name}</h1>
            <h2>Breed: {props.selected.breed}</h2>
          <h2>
        Age: {props.selected.age} year{props.selected.age > 1 ? 's' : ''} old
      </h2>
        </div>
    )
}

export default PetDetail;