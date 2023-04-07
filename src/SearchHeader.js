import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useState } from "react";

function SearchHeader({ search }) {
    const [titleInput, setTitleInput] = useState('')
    const handleFormSubmit = (event) => {
        event.preventDefault(); //sayfa yenilenmesini engellemek için kullandık
        search(titleInput)
    }
    const handleChange = (event) => {
        setTitleInput(event.target.value)
    }
    return <div className="searchDiv">
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="title">Ne Arıyorsunuz?</label>
            <InputText value={titleInput} onChange={handleChange} />
            <Button type="submit" label="Submit" />
        </form>
    </div>;
}
export default SearchHeader;