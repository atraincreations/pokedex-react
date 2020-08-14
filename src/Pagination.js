import React from 'react'

export default function Pagination({gotoNextPage, gotoPrevPage}) {
    return (
        <div className="buttons">
            {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
            {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
        </div>
    )
}
