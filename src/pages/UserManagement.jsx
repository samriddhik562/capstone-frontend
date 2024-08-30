import { useState } from "react";
import { TalentList } from "../components/TalentList";
import { UpdateTalent } from "../components/UpdateTalent";

export default function UserManagementPage() {
    const text = `
    This "Administrator's Dashboard" page needs to be developed!
  
    This page should include:
    - Link to the "User Management Page" to manage login accounts 
    - Links to similar CRUD pages for direct editing of database table contents
    - List of application tables and rowcounts
    `;
    return (
      <div>
          <h1>User Management</h1>
      </div>
    )
}

const emptyUser =  {
  "id": -1,
  "user_id": "",
  "job_id": "",
  "date_applied": "",
  "cover_letter": "",
  "custom_resume": "",
  "application_status": ""
}

export const UserManagement= props => {
       const [selectedTalent, setSelectedTalent] = useState(emptyTalent);
    function talentClick(talent) {
        if (!(JSON.stringify(talent) === JSON.stringify(selectedTalent))) {
            setHidden(false);
            setSelectedTalent(talent);
        } else {
            setSelectedTalent(emptyTalent);
        }
    }
    function clearClick(clear) {
        setHidden(true)
    }
    function deleteTalent() {
        if (selectedTalent.id !== -1) {
            memdb.deleteById(selectedTalent.id);
            setSelectedTalent(emptyTalent);
            return true;
        } else {
            return false;
        }
    }
    function saveTalent(talent) {
        memdb.put(talent.id, talent);
        setSelectedTalent(emptyTalent);
    }
    function addTalent(talent) {
        memdb.post(talent);
        setSelectedTalent(emptyTalent);
    }
    return (
        <>
            <h2>Talent List</h2>
            <TalentList talents={props.talents} onTalentClick={talentClick}/>
            {
                (hidden) ? <></> : (
                <UpdateTalent 
                    talent={selectedTalent} 
                    onClearClick={clearClick}
                    onDeleteClick={deleteTalent}
                    setTalent={setSelectedTalent}
                    onAddClick={addTalent}
                    onSaveClick={saveTalent}
                />)
            } 
        </>
    );
}

