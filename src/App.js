import './App.css';
import  ContactForm  from './components/ContactForm';
import  ContactList  from './components/ContactList';
import  Filter from './components/Filter';

const App = () => {

  return (
    <div className="App">
        <header className="App-header">
          <h1 className="Header">Phonebook</h1>
          <ContactForm />
          <h2 className="SubHeader">Contacts</h2>
          <Filter />
          <ContactList />
        </header>
      </div>
  )
}

export default App;
