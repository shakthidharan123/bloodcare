export const columns = [
    {
        Header:'Request_id',
        accessor:'req_id'
    },

    {
        Header:'Hospital_id',
        accessor:'hid'
    },
    {
        Header:'Hospital Name',
        accessor:'name'
    },
    {
        Header:'Blood type',
        accessor:'btype'
    },
    {
        Header:'Quantity',
        accessor:'quantity'
    },
    {
        Header:'Location',
        accessor:'location'
    },
    {
        Header:'Approve',
        id:'button',
        Cell: () => null,

    }

]