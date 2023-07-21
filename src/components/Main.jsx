import React, { useState } from "react";
import Table from "./Table";
import Modal from "./Modal";

function Main() {
  const [modalOpen, setModalOpen] = useState(false);
  var indx = 1;
  const [editRow, setEditRow] = useState(null);
  const [rows, setRows] = useState([
    {
      id: indx++,
      partyName: "Chandu Bhaiyaa",
      mobileNumber: "9717167563",
      gold: "-25.966 Gm",
      silver: "-14.200 Kg",
      amount: "+₹1,850.00",
    },
  ]);

  
  const handleDelete = (row) => {
    setRows(rows.filter((_, idx) => idx !== row));
  };
  const addRow = (newRow) => {
    setRows([
      ...rows,
      {
        id: indx++,
        partyName: newRow.name,
        mobileNumber: newRow.phone,
        gold: "-25.966 Gm",
        silver: "-14.200 Kg",
        amount: "+₹1,850.00",
      },
    ]);
  };
  const handleEdit = (editedRow) => {
    console.log(editedRow);
    // setEditRow(editedRow);
    let newName = prompt("Enter the name", rows[editedRow].partyName);

    let newPhone = prompt(
      "Enter the phone number",
      rows[editedRow].mobileNumber
    );
    if (newName == null || newPhone == null) {
    } else {
      let temprows = [...rows];
      temprows[editedRow].partyName = newName;
      temprows[editedRow].mobileNumber = newPhone;

      setRows(temprows);
    }

    // rows.map(async (row, idx) => {
    //   if (idx === editedRow) {
    //     handleDelete(idx);

    //     setRows([
    //       ...rows,
    //       {
    //         id: idx,
    //         partyName: newName,
    //         mobileNumber: newPhone,
    //         gold: "-25.966 Gm",
    //         silver: "-14.200 Kg",
    //         amount: "+₹1,850.00",
    //       },
    //     ]);
    //     console.log(rows);
    //     console.log(newName, newPhone);
    //   }
    // });
  };

  return (
    <div className="w-full">
      {/* top */}
      <div className="flex justify-between">
        {/* left */}
        <div className="mt-[48px] ml-[58px] pl-[21px] rounded-[15px] border-[1px] border-solid border-[#AAA7A7] bg-[#8E8E8E]  w-[302px] h-[36px] flex justify-between">
          <p className="text-[24px] font-[510] text-white ">Gold</p>
          <p className="text-[24px] font-[510] text-white ">Silver</p>
          <p className="w-[103px] text-center bg-white text-[24px] font-[510] rounded-[15px] border-[1px] border-[#484848]">
            Both
          </p>
        </div>
        {/* right */}
        <div className="flex mt-5 mr-[33px]">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M29.3333 16.5C29.3333 18.4449 28.5607 20.3101 27.1854 21.6854C25.8102 23.0607 23.9449 23.8333 22 23.8333C20.0551 23.8333 18.1898 23.0607 16.8145 21.6854C15.4393 20.3101 14.6667 18.4449 14.6667 16.5C14.6667 14.555 15.4393 12.6898 16.8145 11.3145C18.1898 9.93924 20.0551 9.16663 22 9.16663C23.9449 9.16663 25.8102 9.93924 27.1854 11.3145C28.5607 12.6898 29.3333 14.555 29.3333 16.5ZM25.6667 16.5C25.6667 17.4724 25.2803 18.405 24.5927 19.0927C23.9051 19.7803 22.9725 20.1666 22 20.1666C21.0275 20.1666 20.0949 19.7803 19.4073 19.0927C18.7196 18.405 18.3333 17.4724 18.3333 16.5C18.3333 15.5275 18.7196 14.5949 19.4073 13.9072C20.0949 13.2196 21.0275 12.8333 22 12.8333C22.9725 12.8333 23.9051 13.2196 24.5927 13.9072C25.2803 14.5949 25.6667 15.5275 25.6667 16.5Z"
              fill="#4F617D"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22 1.83331C10.8625 1.83331 1.83333 10.8625 1.83333 22C1.83333 33.1375 10.8625 42.1666 22 42.1666C33.1375 42.1666 42.1667 33.1375 42.1667 22C42.1667 10.8625 33.1375 1.83331 22 1.83331ZM5.5 22C5.5 25.8316 6.80716 29.359 8.998 32.1603C10.5366 30.1398 12.5215 28.5024 14.7976 27.3759C17.0738 26.2494 19.5795 25.6644 22.1192 25.6666C24.6259 25.6643 27.1002 26.2341 29.3534 27.3327C31.6066 28.4314 33.5793 30.0298 35.1212 32.0063C36.7097 29.9229 37.7792 27.4912 38.2413 24.9124C38.7034 22.3336 38.5448 19.6818 37.7786 17.1765C37.0124 14.6711 35.6606 12.3842 33.8351 10.505C32.0095 8.62586 29.7628 7.20839 27.2807 6.36991C24.7986 5.53144 22.1525 5.29606 19.5614 5.68326C16.9703 6.07047 14.5086 7.06911 12.3801 8.59658C10.2515 10.124 8.51732 12.1364 7.32092 14.4672C6.12452 16.7979 5.50033 19.3801 5.5 22ZM22 38.5C18.2122 38.5057 14.5388 37.2026 11.6013 34.8113C12.7837 33.1187 14.3574 31.7367 16.1887 30.7829C18.0199 29.8291 20.0544 29.3318 22.1192 29.3333C24.1581 29.3317 26.1681 29.8165 27.982 30.7476C29.796 31.6787 31.3617 33.0291 32.549 34.6866C29.5887 37.1556 25.8547 38.5054 22 38.5Z"
              fill="#4F617D"
            />
          </svg>
        </div>
      </div>

      {/* middle */}
      <div className="flex w-full justify-between ">
        {/* middle left */}
        <div className="mt-5 w-1/2">
          {/* party box */}
          <div className="ml-[58px]  w-[617px] h-[201px] border-[10px] bg-[#fff]">
            <div className=" mt-[26px] ml-[41.4px] text-[#4F617D] flex justify-between items-center  w-[203.28px] h-[29.034px]">
              <p className=" text-[24px] font-[590]">Party</p>
              <button
                className="w-[122px] h-[27px] bg-white text-[16px] font-[400] rounded-[15px] border-[1px] flex p-1 justify-center items-center"
                onClick={() => setModalOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                >
                  <path
                    d="M7.78052 15C3.57867 15 0.172607 11.6423 0.172607 7.5C0.172607 3.35775 3.57867 0 7.78052 0C11.9824 0 15.3884 3.35775 15.3884 7.5C15.3884 11.6423 11.9824 15 7.78052 15ZM7.78052 13.5C9.39472 13.5 10.9428 12.8679 12.0842 11.7426C13.2256 10.6174 13.8669 9.0913 13.8669 7.5C13.8669 5.9087 13.2256 4.38258 12.0842 3.25736C10.9428 2.13214 9.39472 1.5 7.78052 1.5C6.16633 1.5 4.61824 2.13214 3.47684 3.25736C2.33543 4.38258 1.69419 5.9087 1.69419 7.5C1.69419 9.0913 2.33543 10.6174 3.47684 11.7426C4.61824 12.8679 6.16633 13.5 7.78052 13.5ZM8.54131 8.25V11.25C8.54131 11.4489 8.46116 11.6397 8.31848 11.7803C8.17581 11.921 7.9823 12 7.78052 12C7.57875 12 7.38524 11.921 7.24256 11.7803C7.09988 11.6397 7.01973 11.4489 7.01973 11.25V8.25H3.97656C3.77479 8.25 3.58128 8.17098 3.4386 8.03033C3.29593 7.88968 3.21577 7.69891 3.21577 7.5C3.21577 7.30109 3.29593 7.11032 3.4386 6.96967C3.58128 6.82902 3.77479 6.75 3.97656 6.75H7.01973V3.75C7.01973 3.55109 7.09988 3.36032 7.24256 3.21967C7.38524 3.07902 7.57875 3 7.78052 3C7.9823 3 8.17581 3.07902 8.31848 3.21967C8.46116 3.36032 8.54131 3.55109 8.54131 3.75V6.75H11.5845C11.7863 6.75 11.9798 6.82902 12.1224 6.96967C12.2651 7.11032 12.3453 7.30109 12.3453 7.5C12.3453 7.69891 12.2651 7.88968 12.1224 8.03033C11.9798 8.17098 11.7863 8.25 11.5845 8.25H8.54131Z"
                    fill="#4F617D"
                  />
                </svg>
                Add Party
              </button>

              {modalOpen && (
                <Modal
                  addRow={addRow}
                  modalClose={() => {
                    setModalOpen(false);
                  }}
                  // defaultValue={editRow!==null&& rows[editRow] }
                />
              )}
            </div>

            <div className="flex mt-[14.97px]">
              <div className="flex flex-col ml-10">
                {" "}
                <p className="text-[#484848] font-[274] text-[24px] ">
                  Silver
                </p>{" "}
                <p className="text-[#BC5C5C] font-[590] text-[24px] ">
                  14.200 Kg
                </p>{" "}
                <p className="text-[#BC5C5C] font-[590] text-[24px] ">Lena</p>{" "}
              </div>
              <div className="flex flex-col ml-[78px]">
                {" "}
                <p className="text-[#484848] font-[274] text-[24px] ">
                  Gold
                </p>{" "}
                <p className="text-[#BC5C5C] font-[590] text-[24px] ">
                  14.200 Kg
                </p>{" "}
                <p className="text-[#BC5C5C] font-[590] text-[24px] ">Lena</p>{" "}
              </div>
              <div className="flex flex-col ml-[66px] ">
                {" "}
                <p className="text-[#484848] font-[274] text-[24px] ">
                  Amount
                </p>{" "}
                <p className="text-[#55A654] font-[590] text-[24px] ">
                  ₹1,850.00
                </p>{" "}
                <p className="text-[#55A654] font-[590] text-[24px] ">Dena</p>{" "}
              </div>
            </div>
          </div>
          {/* search box */}
          <div className="flex mt-[20px] ml-[58px] ">
            <input
              className="shadow-2xl w-[294px] h-[41px] rounded-[10px] p-2 border-[1px] border-[#9f9b9b] "
              type="text"
              placeholder="Search Karigar"
            />
            <button className="w-[98px] h-[38px] text-black text-[16px] font-[400] rounded-[10px] border-[1px] border-[#484848] flex p-1 justify-center items-center ml-[20px]">
              Search
            </button>
          </div>
        </div>
        {/* right part */}
        <div className="flex flex-col">
          {/* excel pdf box */}
          <div className="flex flex-col mr-[51px]  mt-[100px] border-[1px] border-[#4F617D] w-[287px] h-[145px] rounded-[10px]">
            {" "}
            <div
              id="header"
              className="border-b-[#4F617d] border-b-[1px] h-[45px] text-[#484848] text-[20px] font-[400] flex"
            >
              <p className="flex gap-1 items-center ml-[16px] mt-[9px]">
                Excel{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <circle
                    cx="11.5"
                    cy="11.5"
                    r="11"
                    fill="white"
                    stroke="#484848"
                  />
                  <circle cx="11.5" cy="11.5" r="7.5" fill="#484848" />
                </svg>
              </p>

              <p className="flex gap-1 items-center ml-[22px] mt-[9px]">
                PDF
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <circle
                    cx="11.5"
                    cy="11.5"
                    r="11"
                    fill="white"
                    stroke="#484848"
                  />
                </svg>
              </p>
            </div>
            <div className=" mt-[2px] text-[#4f617d] text-[20px] font-[400] flex">
              <p className="flex gap-1 items-center ml-[16px] mt-[9px]">
                Detailed{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <circle
                    cx="11.5"
                    cy="11.5"
                    r="11"
                    fill="white"
                    stroke="#484848"
                  />
                  <circle cx="11.5" cy="11.5" r="7.5" fill="#484848" />
                </svg>
              </p>

              <p className="flex gap-1 items-center ml-[22px] mt-[9px]">
                Summary
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <circle
                    cx="11.5"
                    cy="11.5"
                    r="11"
                    fill="white"
                    stroke="#484848"
                  />
                </svg>
              </p>
            </div>
            <div className="flex ml-2 mt-[18px] justify-start gap-2 ">
              <button className="flex gap-1 items-center rounded-[15px] border-[1px] border-[#484848] w-[86px] h-[25px] justify-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="13"
                  viewBox="0 0 11 13"
                  fill="none"
                >
                  <path
                    d="M11 6.01882V11.7963C11 12.1156 10.874 12.4217 10.6498 12.6475C10.4256 12.8732 10.1215 13 9.80435 13H1.19565C0.878546 13 0.574427 12.8732 0.350198 12.6475C0.12597 12.4217 0 12.1156 0 11.7963V6.01882C0 5.6996 0.12597 5.39344 0.350198 5.16771C0.574427 4.94199 0.878546 4.81517 1.19565 4.81517H2.63043C2.8207 4.81517 3.00317 4.89126 3.13771 5.0267C3.27224 5.16214 3.34783 5.34583 3.34783 5.53736C3.34783 5.7289 3.27224 5.91259 3.13771 6.04803C3.00317 6.18347 2.8207 6.25955 2.63043 6.25955H1.43478V11.5556H9.56522V6.25955H8.36957C8.1793 6.25955 7.99683 6.18347 7.86229 6.04803C7.72776 5.91259 7.65217 5.7289 7.65217 5.53736C7.65217 5.34583 7.72776 5.16214 7.86229 5.0267C7.99683 4.89126 8.1793 4.81517 8.36957 4.81517H9.80435C10.1215 4.81517 10.4256 4.94199 10.6498 5.16771C10.874 5.39344 11 5.6996 11 6.01882ZM3.61625 3.64101L4.78261 2.46805V7.46321C4.78261 7.65474 4.85819 7.83843 4.99273 7.97387C5.12726 8.10931 5.30974 8.1854 5.5 8.1854C5.69026 8.1854 5.87274 8.10931 6.00727 7.97387C6.14181 7.83843 6.21739 7.65474 6.21739 7.46321V2.46805L7.38375 3.64282C7.45048 3.71 7.5297 3.76328 7.61689 3.79964C7.70408 3.836 7.79753 3.85471 7.8919 3.85471C7.98627 3.85471 8.07972 3.836 8.16691 3.79964C8.2541 3.76328 8.33332 3.71 8.40005 3.64282C8.46679 3.57564 8.51972 3.49589 8.55583 3.40812C8.59195 3.32034 8.61054 3.22627 8.61054 3.13127C8.61054 3.03626 8.59195 2.94219 8.55583 2.85442C8.51972 2.76664 8.46679 2.68689 8.40005 2.61971L6.00875 0.212412C5.9421 0.145085 5.86291 0.0916641 5.77571 0.0552136C5.68851 0.0187632 5.59502 0 5.5006 0C5.40618 0 5.31269 0.0187632 5.22549 0.0552136C5.13829 0.0916641 5.05909 0.145085 4.99245 0.212412L2.60114 2.61971C2.53441 2.68689 2.48148 2.76664 2.44536 2.85442C2.40925 2.94219 2.39066 3.03626 2.39066 3.13127C2.39066 3.32313 2.46637 3.50715 2.60114 3.64282C2.73591 3.77849 2.9187 3.85471 3.10929 3.85471C3.29989 3.85471 3.48268 3.77849 3.61745 3.64282L3.61625 3.64101Z"
                    fill="#484848"
                  />
                </svg>
                Export
              </button>
              <button className="flex gap-1 items-center rounded-[15px] border-[1px] border-[#484848] w-[86px] h-[25px] justify-center ">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M10 5V3.125H5V5H3.75V1.875H11.25V5H10ZM11.25 7.8125C11.4271 7.8125 11.5756 7.7525 11.6956 7.6325C11.8156 7.5125 11.8754 7.36417 11.875 7.1875C11.875 7.01042 11.815 6.86187 11.695 6.74187C11.575 6.62187 11.4267 6.56208 11.25 6.5625C11.0729 6.5625 10.9244 6.6225 10.8044 6.7425C10.6844 6.8625 10.6246 7.01083 10.625 7.1875C10.625 7.36458 10.685 7.51313 10.805 7.63313C10.925 7.75313 11.0733 7.81292 11.25 7.8125ZM10 11.875V9.375H5V11.875H10ZM11.25 13.125H3.75V10.625H1.25V6.875C1.25 6.34375 1.43229 5.89833 1.79688 5.53875C2.16146 5.17917 2.60417 4.99958 3.125 5H11.875C12.4062 5 12.8517 5.17979 13.2113 5.53937C13.5708 5.89896 13.7504 6.34417 13.75 6.875V10.625H11.25V13.125ZM12.5 9.375V6.875C12.5 6.69792 12.44 6.54937 12.32 6.42937C12.2 6.30937 12.0517 6.24958 11.875 6.25H3.125C2.94792 6.25 2.79938 6.31 2.67938 6.43C2.55938 6.55 2.49958 6.69833 2.5 6.875V9.375H3.75V8.125H11.25V9.375H12.5Z"
                    fill="#484848"
                  />
                </svg>
                Print
              </button>
            </div>
          </div>
          <div className="flex w-[109px] h-[38px] rounded-[15px] border-[1px] border-[#484848] bg-white items-center justify-center gap-x-1 mt-2 ml-[178px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="17"
              viewBox="0 0 14 17"
              fill="none"
            >
              <path
                d="M14 7.87077V15.426C14 15.8434 13.8397 16.2438 13.5543 16.539C13.2689 16.8342 12.8819 17 12.4783 17H1.52174C1.11815 17 0.731089 16.8342 0.445707 16.539C0.160326 16.2438 0 15.8434 0 15.426V7.87077C0 7.45332 0.160326 7.05296 0.445707 6.75778C0.731089 6.4626 1.11815 6.29677 1.52174 6.29677H3.34783C3.58998 6.29677 3.82222 6.39626 3.99345 6.57337C4.16467 6.75048 4.26087 6.9907 4.26087 7.24117C4.26087 7.49164 4.16467 7.73185 3.99345 7.90896C3.82222 8.08607 3.58998 8.18557 3.34783 8.18557H1.82609V15.1112H12.1739V8.18557H10.6522C10.41 8.18557 10.1778 8.08607 10.0066 7.90896C9.83533 7.73185 9.73913 7.49164 9.73913 7.24117C9.73913 6.9907 9.83533 6.75048 10.0066 6.57337C10.1778 6.39626 10.41 6.29677 10.6522 6.29677H12.4783C12.8819 6.29677 13.2689 6.4626 13.5543 6.75778C13.8397 7.05296 14 7.45332 14 7.87077ZM4.6025 4.76132L6.08696 3.22746V9.75958C6.08696 10.01 6.18315 10.2503 6.35438 10.4274C6.52561 10.6045 6.75785 10.704 7 10.704C7.24215 10.704 7.47439 10.6045 7.64562 10.4274C7.81685 10.2503 7.91304 10.01 7.91304 9.75958V3.22746L9.3975 4.76368C9.48243 4.85153 9.58326 4.92122 9.69423 4.96876C9.80519 5.0163 9.92413 5.04077 10.0442 5.04077C10.1643 5.04077 10.2833 5.0163 10.3943 4.96876C10.5052 4.92122 10.606 4.85153 10.691 4.76368C10.7759 4.67584 10.8433 4.57155 10.8892 4.45677C10.9352 4.34199 10.9589 4.21897 10.9589 4.09473C10.9589 3.9705 10.9352 3.84748 10.8892 3.7327C10.8433 3.61792 10.7759 3.51363 10.691 3.42578L7.6475 0.27777C7.56267 0.189726 7.46188 0.119868 7.3509 0.0722024C7.23992 0.0245365 7.12093 0 7.00076 0C6.88059 0 6.7616 0.0245365 6.65062 0.0722024C6.53964 0.119868 6.43885 0.189726 6.35402 0.27777L3.31054 3.42578C3.22561 3.51363 3.15824 3.61792 3.11228 3.7327C3.06631 3.84748 3.04265 3.9705 3.04265 4.09473C3.04265 4.34564 3.13902 4.58627 3.31054 4.76368C3.48207 4.9411 3.71471 5.04077 3.95728 5.04077C4.19986 5.04077 4.4325 4.9411 4.60402 4.76368L4.6025 4.76132Z"
                fill="#484848"
              />
            </svg>
            Export
          </div>
        </div>
      </div>

      <Table rows={rows} editRow={handleEdit} deleteRow={handleDelete} />
    </div>
  );
}

export default Main;
