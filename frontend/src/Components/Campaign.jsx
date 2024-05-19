import {React, useState} from 'react'
import {campaignData} from '../Data/campaignData'
import {columns} from '../Data/campaignColumns'
import { useMemo } from 'react'
import { useTable,useGlobalFilter } from 'react-table'
import Searchbar from './Searchbar'
import CampModal from './campmodal'
function Campaign() {
    const [campModal,setCampModal] = useState(false);
    const col = useMemo(()=> columns,[])
    const Data =  useMemo(()=> campaignData,[] )    

    const Tableinstance = useTable({
        columns:col,
        data:Data
    },useGlobalFilter)

    const {getTableProps,getTableBodyProps,prepareRow,headerGroups,rows,
        state,setGlobalFilter
    } = Tableinstance;

    const {globalFilter} = state;
  return (
   
    <div className='flex flex-col w-[90%] '>
        <div>
            <h1 className=' ml-24 mt-8  text-4xl font-bold'>Campaign Data</h1>
        </div>
        <div className='flex w-[80%] items-center  mt-5 mb-5'>  
    <Searchbar filter={globalFilter} setfilter={setGlobalFilter} />
    <div>
    <button className=' border-none shadow-md text-white font-bold px-4 py-1 ml-3 bg-green-500 hover:bg-green-400 rounded-full  '
    onClick={()=>setCampModal(true)}>Add</button>
    </div>
    <CampModal open={campModal} close={()=>setCampModal(false)} />
    </div>
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
                                        return  <td {...cell.getCellProps()} className="px-4 py-2 border-b border-gray-300 text-gray-900">{cell.render('Cell')}</td>
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
  )
}

export default Campaign