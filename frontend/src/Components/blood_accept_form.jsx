import {React,useState,useEffect} from 'react'
import { bloodRequest } from '@/Data/bloodRequest'

import {columns} from '../Data/requestColumns'
import { useMemo } from 'react'
import { useTable,useGlobalFilter } from 'react-table'
import Searchbar from './Searchbar'
import Axios from 'axios'
import Sidebar from './sidebar'
import { useNavigate } from 'react-router-dom'

//toast
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function donorlist() {
    const[request,setRequest] = useState([]);
      
    
    const navigate=useNavigate();
    Axios.defaults.withCredentials = true;
    useEffect(()=>{
        
        Axios.get('http://localhost:8081/bloodbank/login').then(
          (res)=>{
            console.log(res.data);  
            if(res.data.isLoggedIn){
              console.log("Welcome");
              Axios.get('http://localhost:8081/bloodbank/request').then((res)=>{
                console.log(res.data);
                if (Array.isArray(res.data)) {
                    setRequest(res.data);
                } else {
                    console.log('Data is not an array:', res.data);
                }
                

              }).catch((err)=>console.log(err));

            }else{
              navigate('/blogin');
            }
          }
        ).catch((err)=>console.log(err));
      },[navigate])

   

    
    const handleButtonClick = (e) => {
        console.log(e);
        Axios.patch('http://localhost:8081/bloodbank/approve_request/'+ e.req_id,e).then((res)=>{
            console.log(res.data);
            if(res.data === "No sufficient stock"){
                toast.error("No Sufficient Stock");
            }
            else{
            toast.success("Request Approved");
            window.location.reload();
            
            }
          
        }).catch((err)=>{
            console.log(err);
            toast.error("Request Denied");
            
        });

       
           
        

        
        
        // Add your button click logic here
      };

    const col = useMemo(()=> columns,[])
    const Data =  useMemo(()=> request,[request] )    

    const Tableinstance = useTable({
        columns:col,
        data:Data
    },useGlobalFilter)

    const {getTableProps,getTableBodyProps,prepareRow,headerGroups,rows,
        state,setGlobalFilter
    } = Tableinstance;

    const {globalFilter} = state;
  return (
    <div className='flex'>
        <Sidebar />
   
    <div className={`flex flex-col w-[90%] relative `}>
        <div>
            <h1 className=' ml-24 mt-8  text-4xl font-bold'>BLOOD REQUEST</h1>
        </div>
      <div className='flex w-[80%] items-center  mt-5 mb-5'>  
    <Searchbar filter={globalFilter} setfilter={setGlobalFilter} />
    
    
    </div >
    
        
    
    <div className='ml-20 container mx-auto p-4'>
        
        <table {...getTableProps()} className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps() } className="text-left">
                            {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()} className="px-4 py-2 border-b border-gray-300 text-gray-700 font-semibold">{column.render('Header')}</th>
                            ))}
                    
                </tr>
                    ))
                }
                
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row =>{
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()} className="hover:bg-gray-100">
                                {
                                    row.cells.map((cell) => {
                                        return  <td {...cell.getCellProps()} className="px-4 py-2 border-b border-gray-300 text-gray-900">
                                            {
                                            
                                            cell.column.id === 'button' ? (
                                                <button className=' border-none shadow-md text-white font-bold px-4 py-1 ml-3 bg-green-500  hover:bg-green-400 rounded-full'  onClick={() => handleButtonClick(row.values)}>Approve</button>)
                                                                        : (
                                                                    cell.render('Cell')
                    )}
                                                </td>
                                    })
                                }
                                
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    </div>
    </div>
   
    </div>
  )
}

export default donorlist