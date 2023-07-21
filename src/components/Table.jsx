import React from "react";

function Table({ rows,deleteRow ,editRow}) {
  return (
    <div className="flex rounded-[15px_15px_0px_0px] border-[1px]  ml-[58px] mt-6 bg-[#F7F6FF] text-[#484848] justify-center max-w-[1309px] max-h-[651px]">
      {/* table */}
      <table className="w-full h-full">
        <thead className="border-b-[#D1CCF6] border-b-[1px] w-full h-16">
          <tr>
            <th className="w-12 border-r-[1px] border-r-[#D1CCF6]">#</th>
            <th className="border-r-[1px] border-r-[#D1CCF6]">Party Name</th>
            <th className="border-r-[1px] border-r-[#D1CCF6]">Mobile Number</th>
            <th className="border-r-[1px] border-r-[#D1CCF6]">Gold</th>
            <th className="border-r-[1px] border-r-[#D1CCF6]">Silver</th>
            <th className="border-r-[1px] border-r-[#D1CCF6]">Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="border-x-[#EBEBEB] w-full h-full">
          {rows.map((row, idx) => {
            return (
              <tr className="border-b-[1px] border-b-[#EBEBEB]" key={idx}>
                <td className="text-center border-r-[1px] border-r-[#EBEBEB]">
                  {row.id}
                </td> 
                <td className="text-center border-r-[1px] border-r-[#EBEBEB]">
                  {row.partyName}
                </td>
                <td className="text-center border-r-[1px] border-r-[#EBEBEB]">
                  {row.mobileNumber}
                </td>
                <td className="text-center border-r-[1px] border-r-[#EBEBEB]">
                  {row.gold}
                </td>
                <td className="text-center border-r-[1px] border-r-[#EBEBEB]">
                  {row.silver}
                </td>
                <td className="text-center border-r-[1px] border-r-[#EBEBEB]">
                  {row.amount}
                </td>
                <td className=" flex justify-center gap-x-1">
                  <button
                  onClick={()=>editRow(idx)}
                  
                  className="bg-[#484848] flex justify-center items-center h-6 w-6 rounded-[50%]">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M12.8667 5.95L10.0333 3.15L11.9167 1.26667L14.7333 4.08333L12.8667 5.95ZM2 14V11.1667L9.06667 4.1L11.9 6.93333L4.83333 14H2Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => deleteRow(idx)}
                    className="bg-[#870F0F] flex justify-center items-center h-6 w-6 rounded-[50%]"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="19"
                      viewBox="0 0 17 19"
                      fill="none"
                    >
                      <path
                        d="M7.08334 4.75H9.91667C9.91667 4.33008 9.76742 3.92735 9.50174 3.63042C9.23606 3.33348 8.87573 3.16667 8.5 3.16667C8.12428 3.16667 7.76395 3.33348 7.49827 3.63042C7.23259 3.92735 7.08334 4.33008 7.08334 4.75ZM5.66667 4.75C5.66667 3.91015 5.96518 3.1047 6.49654 2.51083C7.02789 1.91697 7.74856 1.58334 8.5 1.58334C9.25145 1.58334 9.97212 1.91697 10.5035 2.51083C11.0348 3.1047 11.3333 3.91015 11.3333 4.75H14.875C15.0629 4.75 15.243 4.83341 15.3759 4.98188C15.5087 5.13034 15.5833 5.33171 15.5833 5.54167C15.5833 5.75163 15.5087 5.953 15.3759 6.10146C15.243 6.24993 15.0629 6.33334 14.875 6.33334H14.2503L13.6227 14.5192C13.5623 15.3096 13.2387 16.046 12.7159 16.5825C12.1931 17.1191 11.5091 17.4168 10.7993 17.4167H6.20075C5.49094 17.4168 4.80695 17.1191 4.28411 16.5825C3.76127 16.046 3.43767 15.3096 3.37734 14.5192L2.74976 6.33334H2.12501C1.93714 6.33334 1.75698 6.24993 1.62414 6.10146C1.4913 5.953 1.41667 5.75163 1.41667 5.54167C1.41667 5.33171 1.4913 5.13034 1.62414 4.98188C1.75698 4.83341 1.93714 4.75 2.12501 4.75H5.66667ZM10.625 9.5C10.625 9.29004 10.5504 9.08868 10.4175 8.94021C10.2847 8.79174 10.1045 8.70834 9.91667 8.70834C9.72881 8.70834 9.54864 8.79174 9.4158 8.94021C9.28297 9.08868 9.20834 9.29004 9.20834 9.5V12.6667C9.20834 12.8766 9.28297 13.078 9.4158 13.2265C9.54864 13.3749 9.72881 13.4583 9.91667 13.4583C10.1045 13.4583 10.2847 13.3749 10.4175 13.2265C10.5504 13.078 10.625 12.8766 10.625 12.6667V9.5ZM7.08334 8.70834C6.89548 8.70834 6.71531 8.79174 6.58247 8.94021C6.44963 9.08868 6.375 9.29004 6.375 9.5V12.6667C6.375 12.8766 6.44963 13.078 6.58247 13.2265C6.71531 13.3749 6.89548 13.4583 7.08334 13.4583C7.2712 13.4583 7.45137 13.3749 7.58421 13.2265C7.71704 13.078 7.79167 12.8766 7.79167 12.6667V9.5C7.79167 9.29004 7.71704 9.08868 7.58421 8.94021C7.45137 8.79174 7.2712 8.70834 7.08334 8.70834Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            );
          })}
          
        </tbody>
      </table>
    </div>
  );
}

export default Table;
