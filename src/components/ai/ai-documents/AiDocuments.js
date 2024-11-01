import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Footer from '../../Footer'
import {getToken} from '../../../utils/auth'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import DocumentCard from './DocumentCard'
import DocumentList from './DocumentList'
import FilterSort from './FilterSort'

export default function AiDocuments() {
    const [documents, setDocuments] = useState([]);
    const [isLoading, setIsLoading]=useState(true);
    const [error, setError] = useState(null);
    const [favorite, setFavorite]=useState([]);
    const [isGrid, setIsGrid]= useState(false);
    const [filteredDocuments, setFilteredDocuments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [totalResults, setTotalResults] = useState(0);
    

    /**** All Documents API*****/
    useEffect(()=>{
        const fetchDocuments = async(page)=>{
            try{
                const token = getToken();
                const response = await fetch(`https://magicai.keydevsdemo.com/api/documents?page=${page}`, {
                    method: 'GET',
                    headers:{
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if(!response.ok){
                    throw new Error(`Failed to fetch data: ${response.statusText}`);
                }

                const data = await response.json();
                setDocuments(data.data);
                setTotalPages(data.last_page);
                setTotalResults(data.total);
                setFilteredDocuments(data.data);
            }catch(err){
                console.error('Fetch error:', err);
                setError(err.message);
            }finally {
                setIsLoading(false);
            }
        }
        fetchDocuments(currentPage);
    }, [currentPage]);

   

    /***Favorite Document***/
    const toggleFavorite =(documentId)=>{
        setFavorite((prevFavorite)=>{
            if(prevFavorite.includes(documentId)){
                //Remove from Favorite if already in a list
                return prevFavorite.filter(id=> id !== documentId)
            }else{
                return [...prevFavorite, documentId];
            }
        })
    }

    /***** Delete Single Document API*****/
    const handleDelete=async(id) =>{
        try{
            const token = getToken();
            const response = await fetch(`https://magicai.keydevsdemo.com/api/documents/doc/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            setDocuments((prevDocs)=>prevDocs.filter((document)=> document.id !== id));
            setFilteredDocuments((prevDocs)=>prevDocs.filter((document)=> document.id !== id))

        }catch(err){
            setError('Failed to delete the document. Please try again.');
            console.error(err);
        }
    }
   

  return (
    <>
    <div className="dashboard-container">
        <Navbar />
        <div className="d-flex">
            <Sidebar />
            <div className="content-wrapper">
                <div className="row">
                    <div className="col-12 mb-4">
                        <Link to="/dashboard" className="btn p-0">
                        <span className="d-flex align-items-center">
                            <i className="mdi mdi-chevron-left fs-5"></i> Back to dashboard
                        </span>
                        </Link>
                    </div>
                </div>

                <div className="row pb-2 mb-3">
                    <div className="col-6">
                        <h3 style={{ fontWeight: 900 }}>My Documents</h3>
                    </div>

                    <div className="col-6 aimg">
                        <div className="d-flex justify-content-end">
                            <Link to="/#" className="btn bg-white mx-2" style={{ borderBottom: '1px solid rgb(207, 206, 206)' }}>
                            <span className="d-flex align-items-center">
                            <i className="mdi mdi-plus me-1"></i> New Folder
                            </span>
                            </Link>
                            <Link to="/#" className="btn btn-primary">
                            <span className="d-flex align-items-center">
                            <i className="mdi mdi-plus me-1"></i> New
                            </span>
                            </Link>
                        </div>
                    </div>
                </div>

                <FilterSort documents={documents} filteredDocuments={filteredDocuments} favorite={favorite}
                            setFilteredDocuments={setFilteredDocuments} setIsGrid={setIsGrid} isGrid={isGrid}/>

                {/****Getting all documents****/}
                {isLoading ? (
                        <div className='d-flex justify-content-center align-items-center' style={{height: '100vh'}} >
                            <div className='spinner'></div>
                        </div>
                ) : error ? (
                        <div className='d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
                            <div className="alert alert-danger">{error}</div>
                        </div>
                ) : !isGrid ? (
                    <DocumentList  documents={documents} filteredDocuments = {filteredDocuments} 
                        toggleFavorite={toggleFavorite}  handleDelete={handleDelete} favorite={favorite} />
                ) : (
                    <DocumentCard filteredDocuments={filteredDocuments} toggleFavorite={toggleFavorite} 
                        handleDelete={handleDelete} favorite={favorite} />
                )}
               <Pagination  currentPage={currentPage} totalPages={totalPages} totalResults={totalResults} 
                    isLoading={isLoading} error={error} setCurrentPage={setCurrentPage} />
        </div>
    </div>
</div>
<Footer />
</>
  )
}



