import React, {useState, useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './salesTable.scss'
import { db } from '../../firebase';
import { getDoc, doc, collection, onSnapshot } from 'firebase/firestore' 

// const rows = [
//   {
//       id:'1utir',
//       Food:'Chicken and Chips',
//       image:'../images/chips.jpg',
//       customer:'James Emeka',
//       date:'2 August',
//       time:'10am',
//       amount:'4',
//       coin:'300',
//       method:'Card',
//       status:'delivered'
//   },
//   {
//       id:'2teye',
//       Food:'Fried Rice and Chicken',
//       image:'../images/friedrice.jpg',
//       customer:'Sarah Zainab',
//       date:'2 August',
//       time:'2pm',
//       amount:'3',
//       coin:'300',
//       method:'Card',
//       status:'delivered'
//   },
//   {
//       id:'3jdhd',
//       Food:'Amala and Ewedu with Ogufe',
//       image:'../images/gbegiri.jpg',
//       customer:'Chioma Chukwudi',
//       date:'3 August',
//       time:'5pm',
//       amount:'5',
//       coin:'600',
//       method:'Card',
//       status:'delivered',
//   },
//   {
//     id:'4utir',
//     Food:'Plantain and fried Egg',
//     image:'../images/plantainegg.jpg',
//     customer:'Chinedu Nkem',
//     date:'4 August',
//     time:'1pm',
//     amount:'4',
//     coin:'2700',
//     method:'Card',
//     status:'canceled'
// },
// {
//     id:'3teye',
//     Food:'Rice and Sauce',
//     image:'../images/rice-sauce.jpg',
//     customer:'Michael John',
//     date:'1 August',
//     time:'5pm',
//     amount:'3',
//     coin:'250',
//     method:'Card',
//     status:'delivered'
// },
// {
//     id:'6jdhd',
//     Food:'sandwich',
//     image:'../images/sandwich.jpg',
//     customer:'Chioma Chukwudi',
//     date:'3 August',
//     time:'5pm',
//     amount:'4',
//     coin:'400',
//     method:'Card',
//     status:'delivered',
// },

// ]

const  SalesTable = () => {

  const [ rows, setRows ] = useState([])

  useEffect(() => {
    
    //LISTEN REAL TIME
    
        onSnapshot(collection(db, "order"), (snapShot) => {
          let list = [];
          snapShot.docs.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data()})
          })
          setRows(list)
          // setIsLoading(false)
          // console.log(data)
        }, 
          (error) => {
            console.log(error)
          }
        ); 
     
  },[])
  
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="tableRow"> 
            {/* <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Image</TableCell>
            <TableCell className='tableCell'>Food Name</TableCell>
            <TableCell className='tableCell'>Customer Name</TableCell>
            <TableCell className='tableCell'>Date - Time</TableCell>
            <TableCell className='tableCell'>($)Amount</TableCell>
            <TableCell className='tableCell'>No of Coin</TableCell>
            <TableCell className='tableCell'>Status</TableCell> */}

            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Name</TableCell>
            <TableCell className='tableCell'>Email</TableCell>
            <TableCell className='tableCell'>Price</TableCell>
            <TableCell className='tableCell'>Quantity</TableCell>
            <TableCell className='tableCell'>Telephone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}  className="tableRow">
              {/* <TableCell className='tableCell'>
                <span>{row.id}</span>
                </TableCell>
              <TableCell className='tableCell'>
                <div className='cellWrapper'>
                  <img src={row.image} className='image' alt=''/>
                </div>
                </TableCell>
                <TableCell className='tableCell'>{row.Food}</TableCell>
                <TableCell className='tableCell'>{row.customer}</TableCell>
                <TableCell className='tableCell'>{row.date}-{row.time}</TableCell>
                <TableCell className='tableCell'>${row.amount}</TableCell>
                <TableCell className='tableCell'>{row.coin}</TableCell>
                <TableCell className='tableCell'>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell> */}
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

export default SalesTable