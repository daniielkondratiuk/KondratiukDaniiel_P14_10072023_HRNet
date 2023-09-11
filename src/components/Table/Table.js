import React, {useState} from 'react';
import './Table.css'
import Pagination from "../Pagination/Pagination";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSortUp, faSortDown, faSort} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../Dropdown/Dropdown";
import tableRowPerPage from "../../dropdownOptions/tableRowPerPage";


const Table = ({data}) => {
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortKey, setSortKey] = useState(null);
    const [sortDirection, setSortDirection] = useState('default');
    const [searchTerm, setSearchTerm] = useState('');

    // Поиск по ряду
    const filteredData = data.filter((item) =>
        Object.values(item)
            .join(' ')
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    // Общее количество страниц
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // Пагинация
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    // Обработчик изменения страницы
    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    // Обработчик изменения количества элементов на странице
    const handleItemsPerPageChange = (item) => {
        setItemsPerPage(item.value)
        setCurrentPage(1);
    };

    // Обработчик сортировки
    const handleSort = (key) => {
        if (sortKey === key) {
            setSortDirection((prev) => {
                if (prev === 'default') return 'asc';
                if (prev === 'asc') return 'desc';
                return 'default';
            });
        } else {
            setSortKey(key);
            setSortDirection('asc');
        }
    };

    // Сортировка данных
    const sortedData = currentItems.slice().sort((a, b) => {
        if (sortDirection === 'default') return 0;

        const valueA = a[sortKey];
        const valueB = b[sortKey];
        const isDate = Date.parse(valueA) && Date.parse(valueB)

        if (typeof valueA === 'string' && typeof valueB === 'string') {
            if (isDate) {
                return sortDirection === 'asc' ? Date.parse(valueA) - Date.parse(valueB) : Date.parse(valueB) - Date.parse(valueA);
            }
            return sortDirection === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
        }if(typeof valueA === 'object' && typeof valueB === 'object'){
            return sortDirection === 'asc' ? valueA.value.localeCompare(valueB.value) : valueB.value.localeCompare(valueA.value);
        }
        if (typeof valueA === 'number' && typeof valueB === 'number') {
            return sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
        }

        return 0;
    });

    // Создание заголовка таблицы
    const tableHeaders = Object.keys(data[0]).map((key) => {
        const formattedKey = key.replace(/([A-Z])/g, ' $1').toUpperCase();
        const isSortKey = sortKey === key;
        return (
            <th key={key} onClick={() => handleSort(key)}>
                <span>
                    {formattedKey}
                    {isSortKey && (
                        <FontAwesomeIcon
                            className="sort-icon"
                            icon={sortDirection === 'asc' ? faSortUp : sortDirection === 'desc' ? faSortDown : faSort}/>
                    )}
                    {!isSortKey && (
                        <FontAwesomeIcon
                            className="sort-icon" icon={faSort}/>
                    )}
                </span>
            </th>
        );
    });

    // Создание строк таблицы
    const tableRows = sortedData.map((item) => {
        return (
            <tr key={item.id}>
                {Object.values(item).map((value, index) => {
                    if (typeof value === "object") {
                        return <td key={index}>{value.value}</td>
                    }else {
                        return <td key={index}>{value}</td>
                    }
                })}
            </tr>
        );
    });

    return (
        <div>
            <div className="table__search">
                <Dropdown
                    options={tableRowPerPage}
                    selected={{ label: itemsPerPage, value: itemsPerPage }}
                    setSelected={handleItemsPerPageChange}
                    width={50}
                />
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Поиск по ряду"
                />
            </div>
            <table className="table__main">
                <thead className="table__head"><tr>{tableHeaders}</tr></thead>
                <tbody className="table__body">{tableRows}</tbody>
            </table>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
        </div>
    );
};

export default Table;
