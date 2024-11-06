import React, { useState } from 'react'
import { FaRegStar, FaStar } from "react-icons/fa";
import { BiDotsVerticalRounded} from "react-icons/bi";
import { MdOutlineDriveFileMove, MdRemoveCircleOutline } from "react-icons/md";


export default function DocumentCard({filteredDocuments, toggleFavorite, handleDelete, favorite}) {
    const [isMenu, setIsMenu]= useState(null);

    function toggleCardMenu(id){
        setIsMenu(isMenu === id? null : id);
    }

  return (
    <ul className='grid-responsive-container d-flex flex-row flex-wrap align-items-center list-unstyled mt-4' >
        {filteredDocuments.map((document) => (
            <li className='d-flex justify-content-between align-items-center py-1 mt-1 mx-2' key={document.id}>
                <div className="card">
                    <div className='mt-3 mx-3 d-flex align-items-center justify-content-between'>
                        <span className="fw-bold px-1 generator-title"style={{ backgroundColor: document.ai_color, borderRadius: '5px', fontSize: '12px'}}>{document.generator.title}</span>
                        <button className='btn-favorite' style={{height: '30px', width: '30px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}} onClick={()=>toggleFavorite(document.id)}>
                            {favorite.includes(document.id) ? (
                                <FaStar className='favorite-icon' />
                                ) : (
                                <FaRegStar style={{fontSisze: '15px'}} />
                            )}
                        </button>
                    </div>
                    <div className="card-body" style={{ borderBottom: '1px solid rgb(207, 206, 206)'}}>
                        <strong style={{fontSize: '13px'}}>{document.title}{document.generator_type !== 'image' && document.output? `: ${document.output.slice(0, 15)}...`: ""}</strong>
                    </div>
                    <div className='d-flex align-items-center justify-content-between py-1 position-relative'>
                        <p className="mb-0 mx-4" style={{fontSize: '12px'}}>{document.format_date}</p>
                        <button className='border-0 bg-transparent'><BiDotsVerticalRounded style={{fontSize: '15px'}}
                            onClick={()=>toggleCardMenu(document.id)}/></button>
                        {isMenu === document.id && (
                            <div className='menu-popup'>
                                <button className='btns'><MdOutlineDriveFileMove style={{fontSize: '15px'}} />Move to Folder</button>
                                <button className='btns' onClick={()=>handleDelete(document.id)}><MdRemoveCircleOutline className='delete-icon' style={{fontSize: '15px'}} />Delete</button> 
                            </div>
                        )}
                    </div>
                </div>
            </li>
        ))}
    </ul>
  )
}
