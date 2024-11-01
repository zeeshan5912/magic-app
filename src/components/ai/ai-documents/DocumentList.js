import React from 'react'
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoClose} from "react-icons/io5";
import { BiDotsVerticalRounded} from "react-icons/bi";


export default function DocumentList({filteredDocuments, documents, favorite, toggleFavorite, handleDelete}) {
  
    return (
    <div className='row d-flex flex-column align-items-center'>
    {/**List View**/}
    <div className='col-12 mt-5 custom-scroll-container'>
        <div style={{ borderBottom: '1px solid rgb(207, 206, 206)'}}>
            <ul className='d-flex justify-content-between align-items-center list-unstyled text-uppercase my-2 px-4' style={{color: 'rgb(100, 101, 101)', fontSize: '12px'}}>
                <li className='item-name'>Name</li>
                <li className='item-type'>Type</li>
                <li className='item-date'>Date</li>
                <li className='item-cost'>Cost</li>
                <li className='item-actions'>Actions</li>
            </ul>
        </div>
        <ul className='d-flex flex-column list-unstyled mb-0' >
            {filteredDocuments.map((document, index) => (
                <li className='d-flex justify-content-between align-items-center py-1 mt-1 item-details' key={document.id} 
                style={{borderBottom: index === documents.length-1? 'none' : '1px solid rgb(207, 206, 206)'}}>
                    <div className='mb-2 ms-3 d-flex align-items-center gap-2' style={{width: '30%'}}>
                        {document.generator_type === 'image'? (
                            <img src={document.output} alt={document.title} style={{width: '36px', height: '36px', borderRadius: '40px'}}/>
                        ) : (
                            <div className="d-flex align-items-center justify-content-center overflow-hidden" style={{backgroundColor: document.ai_color, borderRadius: '40px', width: '36px', height: '36px'}}>
                                <span dangerouslySetInnerHTML={{__html: document.ai_image}}
                                style={{width: '55%', height: '55%'}} className='d-flex align-items-center justify-content-center'/>
                            </div>
                        )}
                        <strong >{document.title}{document.generator_type !== 'image' && document.output? `: ${document.output.slice(0, 15)}...`: ""}</strong>
                    </div>
                    <div className='fw-bold' style={{width: '15%', fontSize: '13px'}}>
                        <span className="p-1"style={{ backgroundColor: document.ai_color, borderRadius: '5px'}}>{document.generator.title}</span>
                    </div>
                    <p style={{width: '19%', fontSize: '13px'}}>{document.format_date} , <span className='fw-none'>{document.created_at.slice(11, 16)}</span></p>
                    <p style={{width: '8%', fontSize: '13px', fontWeight: 'bold'}}>{document.credits}</p>
                    <div className='d-flex gap-2 mb-2 me-3'>
                        <button className='btn-favorite' onClick={()=>toggleFavorite(document.id)}>
                            {favorite.includes(document.id) ? (
                                <FaStar className='favorite-icon' />
                            ) : (
                                <FaRegStar style={{fontSisze: '15px'}} />
                            )}
                        </button>
                        <button className='btn-delete' onClick={()=>handleDelete(document.id)}><IoClose style={{fontSize: '15px'}} /></button>
                        <button className='border-0 bg-transparent'><BiDotsVerticalRounded style={{fontSize: '15px'}}/></button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
</div>
  )
}
