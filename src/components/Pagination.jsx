import React from "react";

function Pagination({ taskPerPage, totalTask, currentPage, setCurrentPage }) {
    const totalPages = Math.ceil(totalTask / taskPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
    return (
        <div>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
                Prev
            </button>
            <span>
                page {currentPage} of {totalPages}
            </span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
}

export default Pagination;
