import React, {useState, useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './userOrderTable.scss'
import { db } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore' 


const  UserOrderTable = ({customerId}) => {

//   const [ rows, setRows ] = useState([])

  const [ orderData, setOrderData ] = useState([])

//   useEffect(() => {
    
//     //LISTEN REAL TIME
    
//         onSnapshot(collection(db, "order"), (snapShot) => {
//           let list = [];
//           snapShot.docs.forEach((doc) => {
//             list.push({ id: doc.id, ...doc.data()})
//           })
//           setRows(list)
//           // setIsLoading(false)
//           // console.log(data)
//         }, 
//           (error) => {
//             console.log(error)
//           }
//         ); 
     
//   },[])


useEffect(() => {
    
    //LISTEN REAL TIME

    const orderQuery = async() => {

      const orderRef = (collection(db, "order"));
      const q = query(orderRef, where("userId", "==", customerId));

      const querySnapshot = await getDocs(q);
        let list = []
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        list.push(doc.data())
        // console.log(doc.id, " => ", doc.data());
        console.log(list)

        setOrderData(list)
        // console.log(orderData)
      });

      // setOrderData(doc.data())
      // console.log(orderData)

    }
    
    orderQuery()   
  },[])
 
  
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="tableRow"> 
           
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Name</TableCell>
            <TableCell className='tableCell'>Email</TableCell>
            <TableCell className='tableCell'>Price</TableCell>
            <TableCell className='tableCell'>Quantity</TableCell>
            <TableCell className='tableCell'>Telephone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderData.map((row) => (
            <TableRow key={row.id}  className="tableRow">
              
               <TableCell className='tableCell'>
                <span>{row.id}</span>
                </TableCell>
              {/* <TableCell className='tableCell'>
                <div className='cellWrapper'>
                  <img src={row.image} className='image' alt=''/>
                </div>
                </TableCell> */}
                {/* <TableCell className='tableCell'>{row.Food}</TableCell> */}
                <TableCell className='tableCell'>{row.fullname}</TableCell>
                <TableCell className='tableCell'>{row.email}</TableCell>
                <TableCell className='tableCell'>N{row.price}.00</TableCell>
                <TableCell className='tableCell'>{row.quantity}</TableCell>
                <TableCell className='tableCell'>{row.telephone}</TableCell>
                {/* <TableCell className='tableCell'>
                 <span className={`status ${row.status}`}>{row.status}</span>
               </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserOrderTable