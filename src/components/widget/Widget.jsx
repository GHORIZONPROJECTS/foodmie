import React, { useEffect, useState } from 'react'
import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'; import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { collection, where, query, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'
import { Link } from "react-router-dom";

const Widget= ({type}) => {

  const [amount, setAmount] = useState(null);
  const [diff, setDiff] = useState(null);
  

  let data;

  switch(type){
    case "customers":
      data={
        title:"CUSTOMERS",
        isMoney:false,
        link:"see all customers",
        page:"/customers",
        icon:<
          PersonOutlineOutlinedIcon className="icon" 
          style={{
          color:"crimson",
          backgroundColor: "rgba(255, 0, 0, 0.2)"
        }}/>,
      }
      break;
      case "order":
        data={
          title:"ORDERS",
          isMoney:false,
          link:"view all orders",
          page:"/customers",
          icon:<
            ShoppingCartOutlinedIcon className="icon"
            style={{
              color:"goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2)"
            }}
            />,
        }
        break;

      case "earning":
        data={
          title:"EARNINGS",
          isMoney:true,
          link:"view net earnings",
          page:"/customers",
          icon:<MonetizationOnOutlinedIcon className="icon"
          style={{
            color:"green",
            backgroundColor: "rgba(0, 128, 0, 0.2)"
          }}/>,
        }
        break;
        
      case "balance":
        data={
          title:"BALANCE",
          isMoney:true,
          link:"see details",
          page:"/customers",
          icon:<AccountBalanceWalletOutlinedIcon className="icon"
          style={{
            color:"purple",
            backgroundColor: "rgba(128, 0, 128, 0.2)"
          }}
          />,
        }
        break;
      default:
      break
  }

  useEffect(() => {
    const fetchData = async() => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1))
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2))
      console.log(lastMonth)
      console.log(prevMonth)

      const lastMonthQuery = query(
        collection(db, "customers"), 
        where("timeStamp", "<=", today),
        where("timeStamp", ">", lastMonth)
      );
      const prevMonthQuery = query(
        collection(db, "customers"), 
        where("timeStamp", "<=", lastMonth),
        where("timeStamp", ">", prevMonth)
      );

      const lastMonthData = await getDocs(lastMonthQuery)
      const prevMonthData = await getDocs(prevMonthQuery)

      setAmount(lastMonthData.docs.length)
      setDiff((lastMonthData.docs.length - prevMonthData.docs.length) / (prevMonthData.docs.length) * 100)
    };

    fetchData();

  }, [])

  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter" to>
          {data.isMoney && '$'}{amount}
        </span>
        <Link to={data.page} className='page'>
        <span className="link">{data.link}</span>
        </Link>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon/>
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget