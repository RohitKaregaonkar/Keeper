import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import nt from "../notes"



const App = () => {
    return (<div>
        <Header />
        {nt.map( (nt) => <Note 
                title={nt.title}
                content={nt.content}
            />
        )}
        <Footer />
    </div>);
}

export default App;