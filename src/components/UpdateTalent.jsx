export const UpdateTalent = ({talent, onSaveClick, onDeleteClick, onClearClick, onAddClick, setCustomer}) => {
    const addMode = (talent.id === -1);
    const title = (addMode) ? "Create" : "Update";
    const buttons = (addMode) ? (
        <>
            <button onClick={(event) => {event.preventDefault(); onAddClick(talent)}}>Create</button>
            <button onClick={(event) => {event.preventDefault(); onCancelClick()}}>Clear</button>
        </>
    ) : (
        <>
            <button onClick={(event) => {event.preventDefault(); onDeleteClick()}}>Delete</button> 
            <button onClick={(event) => {event.preventDefault(); onSaveClick(talent)}}>Save</button>
            <button onClick={(event) => {event.preventDefault(); onClearClick()}}>Clear</button>
        </>
    );
    const handleInputChange = function (event) {
        console.log("In handleInputChange()");
        const name = event.target.name;
        const value= event.target.value;
        let newTalent = {...talent}
        newTalent[name] = value;
        setCustomer(newTalent);
    }
    return (
        <>
            <h2>{title}</h2>
            <form>
                <div>
                 <label>User Id: </label> 
                  <input 
                   type="text"
                   name="name"
                   onChange={ (e) => handleInputChange (e) } 
                   value={customer.name}
                  />
                </div>
                <div>
                 <label>: </label> 
                  <input 
                   type="text"
                   name="name"
                   onChange={ (e) => handleInputChange (e) } 
                   value={customer.name}
                  />
                </div>
                <div>
                 <label>Name: </label> 
                  <input 
                   type="text"
                   name="name"
                   onChange={ (e) => handleInputChange (e) } 
                   value={customer.name}
                  />
                </div>
                <div>
                 <label>Name: </label> 
                  <input 
                   type="text"
                   name="name"
                   onChange={ (e) => handleInputChange (e) } 
                   value={customer.name}
                  />
                </div>
                <div>
                 <label>Email: </label> 
                  <input 
                   type="text"
                   name="email"
                   onChange={ (e) => handleInputChange (e) } 
                   value={customer.email}
                  />
                </div>
                <div>
                 <label>Password: </label>
                  <input 
                   type="password"
                   name="password"
                   onChange={ (e) => handleInputChange (e) } 
                   value={customer.password}
                   />
                </div>
                {buttons}
            </form>
        </>
    );
}