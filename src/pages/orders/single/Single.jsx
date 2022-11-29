import React, {useState, useEffect} from 'react'
import './single.scss'
import Sidebar from '../../../components/sidebar/Sidebar'
import Navbar from '../../../components/navbar/Navbar'
// import Chart from '../../../components/chart/Chart'
// import SalesTable from '../../../components/table/SalesTable'
import { useParams } from 'react-router-dom'
import { doc, getDoc, updateDoc, onSnapshot } from "firebase/firestore"
import { db } from '../../../firebase'
import OrderTable from '../../../components/table/orderTable'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Navigation } from '@mui/icons-material'

const Single = () => {

  const {orderId} = useParams()


  const [ orderData, setOrderData ] = useState([])
  const [ shopping, setShopping ] = useState([])
  const [ statusUpdate, setStatusUpdate ] = useState("")


  const getOrder = async() => {

      const docRef = doc(db, "order", orderId);

      const docSnap = await getDoc(docRef);

      let shoppingArray = [] ;

          
      if (docSnap.exists()) {

        setOrderData(docSnap.data() )
        shoppingArray = docSnap.data().shoppingCart

      } else {
        
        console.log("No such document!");
      }

        setShopping([...shoppingArray])

        console.log(shopping)

      

      
  }

  // console.log(shoppingArray)

   console.log(orderData)

  useEffect(()=>{

    getOrder()

  }, [])

 const acceptOrder = async() => {
      
  const acceptRef = doc(db, "order", orderId);

     const updateStatus = updateDoc(acceptRef, {
      status: "PROCESSING_ORDER"
    });

    const thisStatus = updateStatus.status
    console.log(thisStatus)
        

}

  

    const processingOrder = async() => {
      
      const acceptRef = doc(db, "order", orderId);
    
        const updateStatus = await updateDoc(acceptRef, {
          status: "DELIVERING_ORDER"
        });

      }
      

          const declineOrder = async() => {
      
            const acceptRef = doc(db, "order", orderId);
          
              const updateStatus = await updateDoc(acceptRef, {
                status: "DECLINE_ORDER"
              });
          
           
          }

         

          const completeOrder = async() => {
      
            const acceptRef = doc(db, "order", orderId);
          
              const updateStatus = await updateDoc(acceptRef, {
                status: "ORDER_COMPLETED"
              });
          
           
          }


    const getOrderStatus = async() => {

      onSnapshot(doc(db, "order", orderId), (doc) => {
      console.log("Current data: ", doc.data());
      setStatusUpdate(doc.data());
      console.log(statusUpdate);
      console.log(statusUpdate.status)
      console.log(orderId)
      // const newStatus = statusUpdate.status
      console.log(newStatus)

    });

   
    
    }

    const newStatus = statusUpdate.status 

    useEffect(()=>{
      getOrderStatus()
    }, [])

    // console.log(statusUpdate.status)

      
  // const getOrderStatus = async() => {

  //   onSnapshot(doc(db, "order", orderId), (doc) => {
  //     console.log("Current data: ", doc.data());
  //     setStatusUpdate(doc.data())
  //   });
      
  // }

  // useEffect(()=>{
  //   getOrderStatus()
  // }, [])




  return (
    <div className='single'>
      <Sidebar/>
      <div className='singleContainer'>
        <Navbar/>
        <div className='topTitle'>

        <div className='topLeft'><h4>Transaction ID - {orderData.transacton}</h4></div>
          
          <div className='topRight'>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/orders"
            >
              Order List
            </Link>
            <Typography color="green">Order Details</Typography>
          </Breadcrumbs>
          </div>
        </div>
       
        <div className="top">

        
       
          <div className="left">
            
            <div className='item'>
               
                <div className="details">
                  <h3 className='itemTitle'>{orderData.fullname}</h3>
                  <div className='detailItem'>
                    <span className='itemKey'>Email:</span>
                    <span className='itemValue'>{orderData.email}</span>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Phone:</span>
                    <span className='itemValue'>{orderData.telephone}</span>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Address:</span>
                    <span className='itemValue'>{orderData.address}</span>
                  </div>
              
                </div>
            </div>
          </div>
          <div className='right'>
          
            <div className='listTitle'><h3>Ordered Items</h3></div>
              <OrderTable
                shopping = {shopping}
                price = {orderData.price}
                quantity = {orderData.quantity}
              />
              
            </div>
          </div>
          <div className="bottom">
            <h3>Manage Order Status</h3>

            {newStatus === 'ORDER_COMPLETED'
            
            ?

            <div className='completedContainer'>
              <div className='completedWrapper'>
                  <button className= 'completed' disabled> This Order has been Delivered Successfully</button>
              </div>
              
            </div>

            :

              <div>
                 <div className='buttonTop'>

                  {newStatus === 'RECEIVED_ORDER'

                  ?     <div>
                          <button className= 'buttonAccept' onClick={acceptOrder}>ACCEPT ORDER</button>
                        </div>

                  :     <div>
                          <button className= 'received' disabled onClick={acceptOrder}>ACCEPT ORDER</button>
                        </div>

                  }


                  <div>
                    <button className='buttonDecline' onClick={declineOrder}>DECLINE ORDER</button>
                  </div>

                  </div>

                  {((newStatus === 'PROCESSING_ORDER') || (newStatus === 'DELIVERING_ORDER') || (newStatus === 'DELIVERED_ORDER')) &&

                  <div className='buttonBottom'>

                  { ((newStatus === 'PROCESSING_ORDER') || (newStatus === 'DELIVERING_ORDER') || (newStatus === 'DELIVERED_ORDER') )

                    ?   <div>
                          <button className='processing' onClick={processingOrder}>PROCESSING ORDER</button>
                        </div>

                    :   <div>
                          <button className= 'received' disabled onClick={processingOrder}>PROCESSING ORDER</button>
                        </div>

                  }


                  { ((newStatus === 'DELIVERING_ORDER') || (newStatus === 'DELIVERED_ORDER'))

                    ?   <div>
                            <hr className='lines-processing'/>
                        </div>

                    :   <div>
                            <hr className='lines-disabledProcessing'/>
                        </div>

                  }


                  { ((newStatus === 'DELIVERING_ORDER') || (newStatus === 'DELIVERED_ORDER'))

                  ?   <div>
                        <button className='delivering' >DELIVERING ORDER</button>
                      </div>

                  :   <div>
                        <button className= 'disableDelivering' disabled >DELIVERING ORDER</button>
                      </div>

                  }


                  { (newStatus === 'DELIVERED_ORDER')

                  ?   <div>
                          <hr className='lines-delivering'/>
                      </div>

                  :   <div>
                          <hr className='lines-disabledDelivering'/>
                      </div>

                  }


                  { (newStatus === 'DELIVERED_ORDER') 

                  ?   <div>
                        <button className='delivered' onClick={completeOrder}>COMPLETE DELIVERY</button>
                      </div>

                  :   <div>
                        <button className= 'disabledDelivered' disabled >CUSTOMER WILL CONFIRM DELIVERY</button>
                      </div>

                  }



                  </div>
                  }
              </div>
            
            }

           
         
        </div>
        </div>
       
      </div>
  )
}

export default Single