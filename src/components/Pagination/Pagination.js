import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Pagination.css'

const Pagination = ({currentPage, totalPages, onPageChange}) => {
    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            {Array.from({length: totalPages}).map((_, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(index + 1)}
                    className={currentPage === index + 1 ? 'active' : ''}
                >
                    {index + 1}
                </button>
            ))}
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    );
};

export default Pagination;
