export const userColumns = [
    
        { field: 'id', headerName: 'ID', width: 70 },
        { 
            field: 'photo', headerName: 'photo', width:60,
            renderCell:(params) => {
                return(
                    <div className="cellwithphoto">
                        <img src={params.row.img} alt="avatar" className="cellphoto" />
                        
                    </div>
                )
            }
        },
        { field: 'fullname', headerName: 'Full name', width: 120 },
        { field: 'email', headerName: 'email', width: 230 },
        { field: 'address', headerName: 'address', width: 170 },
        { field: 'telephone', headerName: 'telephone', width: 120 },
        { field: 'status', headerName: 'status', width: 100,
            renderCell:(params) => {
                return <div className={`cellstatus ${params.row.status}`}>{params.row.status} </div>
            },
        },
       
    
]

export const dishColumns = [
        { field: 'id', headerName: 'ID', width: 80 },
        { 
            field: 'photo', headerName: 'Photo', width:100,
            renderCell:(params) => {
                return(
                    <div className="cellwithphoto">
                        <img src={params.row.img} alt="avatar" className="cellphoto"/>
                        
                    </div>
                )
            }
        },
        { field: 'title', headerName: 'Title', width: 150 },
        { field: 'description', headerName: 'Description', width: 230 },
        { field: 'category', headerName: 'Category', width: 150 },
        { field: 'price', headerName: 'Price (N)', width: 80 },
        { field: 'status', headerName: 'Status', width: 100,
            renderCell:(params) => {
                return <div className={`cellstatus ${params.row.status}`}>{params.row.status} </div>
            },
        },
]

export const orderColumns = [
    { field: 'id', headerName: 'Order ID', width: 80 },
    // { 
    //     field: 'photo', headerName: 'Photo', width:100,
    //     renderCell:(params) => {
    //         return(
    //             <div className="cellwithphoto">
    //                 <img src={params.row.img} alt="avatar" className="cellphoto"/>
                    
    //             </div>
    //         )
    //     }
    // },
    // { field: 'transaction', headerName: 'Ordered Item', width: 150 },
    // { field: 'title', headerName: 'Food Ordered', width: 170 },
    { field: 'fullname', headerName: 'Customer Name', width: 150 },
    { field: 'price', headerName: 'Price (N)', width: 100 },
    { field: 'quantity', headerName: 'quantity', width: 80 },
    { field: 'new Date(timestamp.toDate())', headerName: 'Ordered Date', width: 200 },
    { field: 'status', headerName: 'Status', width: 200,
        renderCell:(params) => {
            return <div className={`cellstatus ${params.row.status}`}>{params.row.status} </div>
        },
    },
]

export const orderHistoryColumns = [
    { field: 'id', headerName: 'Order ID', width: 80 },
    // { 
    //     field: 'photo', headerName: 'Photo', width:100,
    //     renderCell:(params) => {
    //         return(
    //             <div className="cellwithphoto">
    //                 <img src={params.row.img} alt="avatar" className="cellphoto"/>
                    
    //             </div>
    //         )
    //     }
    // },
    { field: 'transaction', headerName: 'Ordered Item', width: 150 },
    // { field: 'title', headerName: 'Food Ordered', width: 170 },
    { field: 'fullname', headerName: 'Customer Name', width: 150 },
    { field: 'price', headerName: 'Price (N)', width: 100 },
    { field: 'quantity', headerName: 'quantity', width: 80 },
    { field: 'timeStamp', headerName: 'Ordered Date', width: 200 },
    { field: 'status', headerName: 'Status', width: 200,
        renderCell:(params) => {
            return <div className={`cellstatus ${params.row.status}`}>{params.row.status} </div>
        },
    },
]

export const driversColumns = [
    { field: 'id', headerName: 'Driver ID', width: 80 },
    { 
        field: 'photo', headerName: 'Photo', width:100,
        renderCell:(params) => {
            return(
                <div className="cellwithphoto">
                    <img src={params.row.img} alt="avatar" className="cellphoto"/>
                    
                </div>
            )
        }
    },
    { field: 'platenumber', headerName: 'Plate Number', width: 150 },
    { field: 'fullname', headerName: 'Driver Name', width: 230 },
    { field: 'telephone', headerName: 'Phone Number', width: 150 },
    { field: 'status', headerName: 'Status', width: 120,
        renderCell:(params) => {
            return <div className={`cellstatus ${params.row.status}`}>{params.row.status} </div>
        },
    },
]



export const settingsColumns = [
    { field: 'id', headerName: 'Admin ID', width: 80 },
    { 
        field: 'photo', headerName: 'Photo', width:100,
        renderCell:(params) => {
            return(
                <div className="cellwithphoto">
                    <img src={params.row.img} alt="avatar" className="cellphoto"/>
                    
                </div>
            )
        }
    },
    { field: 'fullname', headerName: 'Admin Name', width: 230 },
    { field: 'telephone', headerName: 'Phone Number', width: 150 },
    { field: 'email', headerName: 'Email Address', width: 150 },
    { field: 'status', headerName: 'Status', width: 120,
        renderCell:(params) => {
            return <div className={`cellstatus ${params.row.status}`}>{params.row.status} </div>
        },
    },
]


