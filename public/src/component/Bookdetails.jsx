import React, { useState } from 'react';
import axios from 'axios';

function Bookdetails({ fetchItems }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [language, setLanguage] = useState('');
    const [isbin, setIsbin] = useState('');
    const [description, setDescription] = useState('');
    // const [url, setUrl] = useState('');

    const handleAddData = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://ldfs6814-8085.inc1.devtunnels.ms/", { title, author, year, language, isbin, description });


            fetchItems();
            setTitle('');   
            setAuthor('');
            setYear('');
            setLanguage('');
            setIsbin('');
            setDescription('');
            // setUrl('');
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Add a New Book</h2>

            <form onSubmit={handleAddData}>
                <div className="form-group">
                    <input type="text" placeholder="Enter your title" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
                </div><br /><br />
                <div className="form-group">
                    <input type="text" placeholder="Enter your author" value={author} onChange={(e) => setAuthor(e.target.value)} className="form-control" />
                </div><br /><br />
                <div className="form-group">
                    <input type="number" placeholder="Enter your year" value={year} onChange={(e) => setYear(e.target.value)} className="form-control" />
                </div><br /><br />
                <div className="form-group">
                    <input type="text" placeholder="Enter your language" value={language} onChange={(e) => setLanguage(e.target.value)} className="form-control" />
                </div><br /><br />
                <div className="form-group">
                    <input type="number" placeholder="Enter Book ISBN number" value={isbin} onChange={(e) => setIsbin(e.target.value)} className="form-control" />
                </div><br /><br />
                <div className="form-group">
                    <textarea placeholder="Enter Description" rows={2} value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" />
                </div><br /><br />
                {/* <div className="form-group">
                    <input type="text" placeholder='Enter your Url link'value={url} onChange={(e) => setUrl(e.target.value)} />
                </div><br /><br /> */}
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    );
}

export default Bookdetails;
