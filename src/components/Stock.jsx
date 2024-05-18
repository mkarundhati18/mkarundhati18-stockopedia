import { useParams } from "react-router-dom";
import { useState , useEffect} from "react";
import { STOCK_API } from "../service/nse.service";


const Stock = ()=>{
    const [StockInfo,setStockInfo]= useState("null");
    const {identifier} = useParams();
    // console.log(symbol.identifier);

    useEffect(()=>  {
    fetchData();
    },[])

     fetchData = async() => {
        const data =  await fetch(STOCK_API+ identifier);
        const json=await data.json();
        console.log(json);
        setStockInfo(json);
     }

     const {
        companyName, industry, isCASec, isDebtSec, isDelisted,isETFSec, isFNOSec,isMunicipalBond, isSLBSec,isSuspended , isin
        } = StockInfo;
    return (<div>
         <h1>Stock Name:-{companyName}</h1>
        <h3>industry:-{industry}</h3>
        <h3>Is CASec: {String(isCASec)}</h3>
    {/* Alternatively, you can use a ternary operator */}
    {/* <h3>Is CASec: {isCASec ? 'true' : 'false'}</h3> */}
        {/* <h3>isCASec:- {isCASec} </h3> */}
        <h3>isDebtSec:- {isDebtSec ? 'true' : 'false'}</h3>
        <h3>isDelisted:- {isDelisted ? 'true' : 'false'} </h3>
        <h3>isETFSec:- {isETFSec ? 'true' : 'false'} </h3>
        <h3>isFNOSec:- {isFNOSec ? 'true' : 'false'} </h3>
        <h3>isMunicipalBond:- {isMunicipalBond ? 'true' : 'false'}</h3>
        <h3>isSLBSec:- {isSLBSec ? 'true' : 'false'} </h3>
        <h3>isSuspended:- {isSuspended ? 'true' : 'false'} </h3>
        <h3>isin:- {isin} </h3>

    </div>
    )

}
 export default Stock;

 //here we will use to track the url's symbol and get the data for it using useParams