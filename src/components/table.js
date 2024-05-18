import { Link } from "react-router-dom";

const Table = ({ data, fieldsToShow }) => {
    return (
      <table className="hover:table-fixed w-full">
        <thead className="bg-sky-400 text-lg">
          <tr>
            {fieldsToShow.map((field) => (
              <th key={field.heading}>{field.legend? field.legend:field.heading}</th>
            ))}
          </tr>
        </thead>

        <tbody >
          {data.map((item, index) => (
            <tr className=" text-blue-900 font-bold bg-slate-200 m-4 p-4"  key={index}>
              {fieldsToShow.map((field, index) =>
                field.name === "symbol" ? (
                  <td className="p-1 m-4 w-5" key={index}>
                    <Link to={"/" + item[field.name]}>{item[field.name]}</Link>
                  </td>
                ) : (
                  <td className="p-1 m-4 w-5" key={index}>{item[field.name]}</td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  export default Table;
