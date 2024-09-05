const ManageJobs = () => {
    return(
    <>
    <h1>Manage Jobs</h1>
    <div className='container'>
    <form>
    <div className='row'><div className='form-group'>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
    </div>
    <div className='form-group'>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" name="description" />
    </div></div>
    <div className='row'><div className='form-group'>
        <label htmlFor="department">Department</label>
        <input type="text" id="department" name="department" />
    </div><div className='form-group'>
        <label htmlFor="dateListed">Date Listed</label>
        <input type="text" id="dateListed" name="dateListed" />
    </div></div>
    <div className='row'><div className='form-group'>
        <label htmlFor="dateClosed">Date Closed</label>
        <input type="text" id="dateClosed" name="dateClosed" />
    </div><div className='form-group'>
        <label htmlFor="additionalInfo">Additional Information</label>
        <input type="text" id="additionalInfo" name="additionalInfo" />
    </div></div>
    <div className='row'><div className='form-group'>
        <label htmlFor="listingStatus">Listing Status</label>
        <input type="text" id="listingStatus" name="listingStatus" />
    </div>
    </div>
        <button className="button" type="submit">Submit Changes</button>
    </form></div></>
    )
}

export default ManageJobs;