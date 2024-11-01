import React, { useState } from 'react'
import { MdGridView } from "react-icons/md";
import { IoListOutline } from "react-icons/io5";
import { BiSortAlt2 } from "react-icons/bi";

export default function FilterSort({documents, filteredDocuments, favorite, setFilteredDocuments, isGrid, setIsGrid }) {
    const [filter, setFilter]= useState('All');
    const [sortBy, setSortBy]= useState('Date');

    function filterDocuments(selectedFilter){
        setFilter(selectedFilter);
        let updatedDocuments = [...documents];

        if(selectedFilter === 'All') {
            updatedDocuments= documents
        }else if(selectedFilter === 'Favorites') {
            updatedDocuments = documents.filter(doc => favorite.includes(doc.id));
        }else{
            updatedDocuments = documents.filter(doc => doc.generator_type === selectedFilter.toLowerCase());
        };
        
        setFilteredDocuments(updatedDocuments);
    }

    //Sort Documents
    function sortDocuments(selectedSort){
        setSortBy(selectedSort);

        const sortedDoc = [...filteredDocuments].sort((a, b) => {
            if(selectedSort === 'Date'){
                return new Date(b.created_at)-new Date(a.created_at);
            }else if(selectedSort === 'Title'){
                return a.title.localeCompare(b.title);
            }else if(selectedSort === 'Type'){
                return a.generator_type.localeCompare(b.generator_type);
            }else if(selectedSort === 'Cost'){
                return b.credits - a.credits;
            }
            return 0;
        })
        setFilteredDocuments(sortedDoc);
    }

  return (
    <div className="row pb-3 d-flex flex-column flex-sm-row" style={{ borderBottom: '1px solid rgb(207, 206, 206)' }}>
    <div className="col-12 col-sm-8 d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
        <div className="col-12 col-sm-4 d-flex align-items-center ms-2 ms-sm-0">
            <p className='mb-0'>Sort by:</p>
            <div className='position-relative'>
            <BiSortAlt2 className="ms-2 icon-size"/>
                <div className='sort-popup'>
                    {["Date", "Title", "Type", "Cost"].map(option => (
                        <button key={option} onClick={()=>sortDocuments(option)} className='btns'>{option}</button>
                    ))}
                </div>
            </div>
        </div>
        <div className="col-12 col-sm-4 mt-2 mt-sm-0 d-flex align-items-center">
            {["All", "Favorites", "Text", "Image", "Code"].map(option => (
                <button key={option} onClick={()=>filterDocuments(option)} style={{fontSize: '13px'}}
                className={`${filter === option? 'btn-filter':'border-0 bg-transparent'} mx-1`}>{option}</button>
            ))}
        </div>
    </div>

    {/***Grid and List Icon**/}
    <div className="col-12 col-sm-4 aimg mt-2 mt-sm-0 ms-3 ms-sm-0">
        <div className="d-flex justify-content-start justify-content-sm-end">
            <button className='mx-1 border-0' onClick={()=>setIsGrid(false)} style={{backgroundColor: !isGrid? '#e7e7e7': 'transparent', borderRadius: '7px'}}>
                <IoListOutline className='icon-size'/>
            </button>
            <button className='border-0' onClick={()=>setIsGrid(true)} style={{backgroundColor: isGrid? '#e7e7e7': 'transparent', borderRadius: '7px'}}>
                <MdGridView className='icon-size'/>
            </button>
        </div>
    </div>
</div> 
  )
}
