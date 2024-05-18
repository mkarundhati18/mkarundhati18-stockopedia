
import ReactDOM from "react-dom/client";
import React, { lazy, Suspense } from "react";
import {useState, useEffect} from "react";
import Table from "./components/table";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Porfolio from "./components/Portfolio";
import Error from "./components/Error";
import Login from "./components/Login";
import {ROW_API, mockColumnData, column_API } from './service/nse.service'; 
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Stock from "./components/Stock";
import useOnlineStatus from "./utils/useOnlineStatus";

const MutualFunds = React.lazy(()=> import('./components/mutualFunds'));

const Footer = () =>{ 
    return <div className="footer">
        <h6>Copyright</h6>
        
    </div>};

const Body = () =>{ 

    //stateVariable
    const [resList,setResList]=useState([]);
    const [filteredResList,setFilteredResList]=useState([]);
    
    const [searchText,setSearchText]=useState("");
    const onlineStatus = useOnlineStatus();

    useEffect(()=>{fetchData()}
        ,[])

  const fetchData = async()=>{
   const data = await fetch(ROW_API);
   const json = await data.json();
   setResList(json.data);
   setFilteredResList(json.data);
 }


 if(!onlineStatus){
     return (<p>"Please check your Internet Connection"</p>)
 }

    return <div className="body">
        <h1 className="text-center text-lg font-bold">Todays Best Stocks</h1>
        <div className="flex border-e-2 p-4 shadow-lg">
        <div className=" m-4 filter-container font-bold bg-sky-300">
                <button className="filter-btn rounded-sm" 
                onMouseOver={()=>{
                    const filteredList = resList.filter(res=>res.pChange<0)
                    setFilteredResList(filteredList)}
                }> TOP Losers </button>
            
        </div>

        <div className=" m-4 search-container font-bold bg-sky-300 ">
            <input  className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500  rounded-md border-2 border-dashed border-sky-300" type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
                <button className="rounded-sm" 
                onMouseOver={()=>{
                    const filteredList = resList.filter(res=>res.symbol.toLowerCase().includes(searchText.toLowerCase()))
                    setFilteredResList(filteredList)}
                }> Search </button>
            
        </div>
        </div>


        <div className="table-container">
        <Table data={filteredResList} fieldsToShow={mockColumnData.columns}/>
      </div>
    </div>};

const AppLayout =()=>{
    return <div className="app">
        <Header/>
        <Outlet/>
    </div>
}
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<AppLayout/>,
            children:[
                {
                    path:"/",
                    element:<Body/>
                },
            {
                path:"/portfolio",
                element:<Porfolio/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/mutual",
                element:<Suspense fallback={<h1>LOADING.....</h1>}>
                    <MutualFunds/>
                    </Suspense>
            },
            {
                path:"/:identifier",
                element:<Stock/>,
            }
        ],
        errorElement:<Error/>
        }
    

    ])

    const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(<AppLayout/>); earlier we were directly calling this but now routin will take care
    root.render(<RouterProvider router = {appRouter}/>);






















    //https://www.nseindia.com/api/marketStatus
        // const marketState = [
        //     {
        //         "market": "Capital Market",
        //         "marketStatus": "Close",
        //         "tradeDate": "22-Mar-2024 15:30",
        //         "index": "NIFTY 50",
        //         "last": 22096.75,
        //         "variation": 84.79999999999927,
        //         "percentChange": 0.39,
        //         "marketStatusMessage": "Market is Closed"
        //     },
        //     {
        //         "market": "Currency",
        //         "marketStatus": "Close",
        //         "tradeDate": "Invalid date",
        //         "index": "",
        //         "last": "",
        //         "variation": "",
        //         "percentChange": "",
        //         "marketStatusMessage": "Market is Closed"
        //     },
        //     {
        //         "market": "Commodity",
        //         "marketStatus": "Open",
        //         "tradeDate": "25-Mar-2024",
        //         "index": "",
        //         "last": "",
        //         "variation": "",
        //         "percentChange": "",
        //         "marketStatusMessage": "Market is Open"
        //     },
        //     {
        //         "market": "Debt",
        //         "marketStatus": "Close",
        //         "tradeDate": "Invalid date",
        //         "index": "",
        //         "last": "",
        //         "variation": "",
        //         "percentChange": "",
        //         "marketStatusMessage": "Market is Closed"
        //     },
        //     {
        //         "market": "currencyfuture",
        //         "marketStatus": "Close",
        //         "tradeDate": "Invalid date",
        //         "index": "",
        //         "last": "83.6650",
        //         "variation": "",
        //         "percentChange": "",
        //         "marketStatusMessage": "Market is Closed",
        //         "expiryDate": "26-Mar-2024",
        //         "underlying": "USDINR",
        //         "updated_time": "22-Mar-2024 17:00",
        //         "tradeDateFormatted": "22-Mar-2024 17:00",
        //         "slickclass": "slick-item"
        //     }
        // ]
       /* "marketcap": {
            "timeStamp": "22-Mar-2024",
            "marketCapinTRDollars": 4.55,
            "marketCapinLACCRRupees": 379.16626773619674,
            "marketCapinCRRupees": 37916626.77,
            "marketCapinCRRupeesFormatted": "37,916,626.77",
            "marketCapinLACCRRupeesFormatted": "379.17",
            "underlying": "Market Cap"
        },
        "indicativenifty50": {
            "dateTime": "22-Mar-2024 15:30",
            "indexName": "Nifty 50",
            "closingValue": 22096.75,
            "finalClosingValue": 22096.75,
            "change": 84.8,
            "perChange": 0.39,
            "status": "CLOSE"
        }*/

        
