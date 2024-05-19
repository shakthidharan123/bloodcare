export const columns = [
    {
        Header:'ID',
        accessor:'id'
    },
    {
        Header:'Hospital_id',
        accessor:'hid'
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
        Header:'Approve',
        id:'button',
        Cell: () => null,

    }

]