import React, { useEffect, useState } from 'react'
import './single.scss'
import Sidebar from '../../../components/sidebar/Sidebar'
import Navbar from '../../../components/navbar/Navbar'
import Chart from '../../../components/chart/Chart'
import { doc, getDoc } from "firebase/firestore"
import { useHistory, useParams } from "react-router-dom"
import { db } from '../../../firebase'
import UserOrderTable from '../../../components/table/UserOrderTable'

const Single = ({user}) => {

  const {customerId} = useParams()


  const [ userData, setUserData ] = useState("")

  // const [ orderData, setOrderData ] = useState([])

  const getCustomer = async() => {

      const docRef = doc(db, "customers", customerId);

      const docSnap = await getDoc(docRef);

      // console.log(docSnap.data())

      // setUserData(docSnap.data())

      // console.log(userData)
      
      if (docSnap.exists()) {

        // console.log("Document data:", docSnap.data());
        setUserData(docSnap.data())
        // console.log(userData)
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
  }

  useEffect(()=>{
    getCustomer()
  }, [])


  // useEffect(() => {
    
  //   //LISTEN REAL TIME

  //   const orderQuery = async() => {

  //     const orderRef = (collection(db, "order"));
  //     const q = query(orderRef, where("userId", "==", customerId));

  //     const querySnapshot = await getDocs(q);
  //       let list = []
  //     querySnapshot.forEach((doc) => {
  //       // doc.data() is never undefined for query doc snapshots
  //       list.push(doc.data())
  //       // console.log(doc.id, " => ", doc.data());
  //       console.log(list)

  //       setOrderData(list)
  //       // console.log(orderData)
  //     });

  //     // setOrderData(doc.data())
  //     // console.log(orderData)

  //   }
    
  //   orderQuery()   
  // },[])
 

  return (
    <div className='single'>
      <Sidebar/>
      <div className='singleContainer'>
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editbutton">Edit</div>
            <h2 className='title'>Information</h2>
            <div className='item'>
            {userData.img
              ?  <img
                    src = {userData.img}
                    alt="avatar"
                    className="itemimg"
                    width={150}
                    height={150}
                 /> 
              :

              <img
                // src = {require ("./images/user.png")}
                src="../images/user.png"
                alt="avatar"
                className="itemimg"
                width={150}
                height={150}
              
              />
            
            }
               
                <div className="details">
                  <h3 className='itemTitle'>{userData.fullname}</h3>
                  <div className='detailItem'>
                    <span className='itemKey'>Email:</span>
                    <span className='itemValue'>{userData.email}</span>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Phone:</span>
                    <span className='itemValue'>{userData.telephone}</span>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Address:</span>
                    <span className='itemValue'>{userData.address}</span>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Gender:</span>
                    <span className='iitemValue'>Male</span>
                  </div>
                </div>
            </div>
          </div>
          <div className='right'>
            <Chart 
              aspect={3/1}
              title = "Customer purchase last 6 months"
            />
          </div>
        </div>
        <div className="bottom">
        <div className='listTitle'>Customer Transactions History</div>
          <UserOrderTable
                customerId = {customerId}
          />
        </div>
      </div>
    </div>
  )
}

export default Single