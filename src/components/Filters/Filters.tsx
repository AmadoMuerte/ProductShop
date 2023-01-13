import React from 'react';
import SearchPanel from "../SearchPanel/SearchPanel";

function Filters() {
    return (
        <div>
            <SearchPanel />
            <form action="src/components/Filters"></form>
        </div>
    );
}

export default Filters;