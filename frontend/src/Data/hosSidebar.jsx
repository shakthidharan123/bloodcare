import { MdAccountCircle, MdOutlineCampaign } from 'react-icons/md';
import { FaHandHoldingMedical } from 'react-icons/fa';
import { FaHandHoldingWater } from "react-icons/fa";

export const content = [
    {
        name: 'Welcome Bloodbank',
        icon:<MdAccountCircle className='w-10 h-10' />,
        path: '/bloodbank'
    },
    {
        name: 'Donors',
        icon: <FaHandHoldingMedical className='w-10 h-10' />,
        path: '/bloodbank/donor'
    },
    {
        name: 'Campaign',
        icon: <MdOutlineCampaign className='w-10 h-10' />,
        path: '/bloodbank/campaign'
    },
    {
        name: 'Stock',
        icon: <FaHandHoldingWater className='w-10 h-10' />,
        path: '/bloodbank/stock'
    },
];

export const hcontent = [
    {
        name: 'Welcome hospital',
        icon:<MdAccountCircle className='w-10 h-10' />,
        path: '/hospitalrequest'
    },
    
];
