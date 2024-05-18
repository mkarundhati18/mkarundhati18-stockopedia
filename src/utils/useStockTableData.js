import { useEffect, useState } from "react";
import { ROW_API, column_API } from "../service/nse.service";
//not working will check any other alternative
export const useStockTableData = () => {

   const [resList,setResList]=useState([]);
   const [columnData,setColumnData]=useState([]);

    useEffect(()=>{fetchData()}
    ,[])

    const fetchData = async()=>{
    const data = await fetch(ROW_API);
    const json = await data.json();
    setResList(json.data);

    const columns = await fetch(column_API);
    const columnJson = await columns.json();
    setColumnData(columnJson.columns);

}

    return (resList, columnData)
}

