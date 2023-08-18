import React,{useState,useEffect} from "react";
import {uuid} from "uuidv4";
import "./App.css";
import Header from "./header";
import Addcontact from "./addcontact";
import Contactlist from "./contactlist";

function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setContacts]=useState([]);
    const addContactHandler=(contact) =>
    {
      console.log(contact);
      setContacts([...contacts,{id:uuid(),...contact}]);
    };
    const removeContactHandler = (id) =>{
      const newContactlist =contacts.filter((contact)=> {
        return contact.id!==id;
      });
      setContacts(newContactlist);
    };
    useEffect(() =>{
      const retriveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if(retriveContacts) setContacts(retriveContacts);
    },[]);
    useEffect(() =>{
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
    },[contacts]);
  return (
    <div className="ui container">
    <Header />
  <Addcontact addContactHandler={addContactHandler}/> 
   <Contactlist contacts={contacts} getContactId={removeContactHandler}/>
    </div>
    );
};

export default App;
