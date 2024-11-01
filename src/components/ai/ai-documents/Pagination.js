import React from 'react'
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function Pagination({currentPage, totalPages, totalResults, isLoading, error, setCurrentPage}) {

    function handlePageChange(page){
        if(page >=1 && page <= totalPages)
        setCurrentPage(page);
    }

  return (
    !isLoading && !error && totalResults > 0 && (
        <div className='mt-4 d-flex align-items-center justify-content-between flex-wrap'>
            <div>
                <p>Showing {Math.min((currentPage - 1) * 10 + 1, totalResults)} to {Math.min(currentPage * 10, totalResults)} of {totalResults} results</p>
            </div>
        <div>
        <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}><GrFormPrevious /></button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => i + 1).filter((page) => {
                return page === 1 || page === totalPages || Math.abs(page - currentPage) < 2;
            }).map((page) => (
            <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(page)}>{page}</button>
            </li>
            ))}
            {currentPage < totalPages - 1 && (
                <li className='page-item disabled'>
                    <span className="page-link">...</span>
                </li>
            )}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}><GrFormNext /></button>
            </li>
        </ul>
    </div>
</div>
)
)}
