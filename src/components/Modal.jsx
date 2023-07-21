import React,{useState} from "react";

function Modal({modalClose,addRow}) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    gstin: "",
    pan: "",
    adhaar: "",
  });//[{}
  const [partyGroups, setPartyGroups] = useState("");//[{}
const [tags, setTags] = useState([]);

const handleChange = event => {
  // if (event.key === "Enter" && event.target.value !== "") {
  setPartyGroups(event.target.value);
  // }
}
const addTags = event => {
  // event.preventDefault();
  const trimmedInput = partyGroups.trim();
  if (event.key === "Enter"  && trimmedInput.length && !tags.includes(trimmedInput)) {
    event.preventDefault();
    setTags(prevState=>[...prevState, trimmedInput]);
    setPartyGroups("");
  }
}

  const handleName = (e) => {
    setForm({ ...form, name: e.target.value });
  }
  const handlePhone = (e) => {
    setForm({ ...form, phone: e.target.value });
  }
  const handleAddress = (e) => {
    setForm({ ...form, address: e.target.value });
  }
  const handleCity = (e) => {
    setForm({ ...form, city: e.target.value });
  }
  const handlePincode = (e) => {
    setForm({ ...form, pincode: e.target.value });
  }
  const handleGstin = (e) => {
    setForm({ ...form, gstin: e.target.value });
  }
  const handlePan = (e) => {
    setForm({ ...form, pan: e.target.value });
  }
  const handleAdhaar = (e) => {
    setForm({ ...form, adhaar: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
   addRow(form);
    setForm({
      name: "",
      phone: "",
      address: "",
      city: "",
      pincode: "",
      gstin: "",
      pan: "",
      adhaar: "",
    });
    modalClose();
  }
  return (
    <div className="flex justify-center items-center fixed z-1 p-x-5 p-y-4 w-full h-full bg-black bg-opacity-80 left-0 top-0 ">
      <div
        id="modal"
        className=" max-w-[1217px] max-h-[800px] bg-white bg-opacity-100 rounded-[20px]"
      >
        {" "}
        <div id="heading" className="flex mb-4 justify-between p-2">
          <p className="flex mt-4 ml-4  gap-x-1 text-[#4F617D]">
            Add Party{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M0 7.80001C0 6.37001 1.17 5.20001 2.6 5.20001H6.5L9.1 2.60001H16.9L19.5 5.20001H23.4C24.0896 5.20001 24.7509 5.47393 25.2385 5.96153C25.7261 6.44912 26 7.11044 26 7.80001V20.8C26 21.4896 25.7261 22.1509 25.2385 22.6385C24.7509 23.1261 24.0896 23.4 23.4 23.4H2.6C1.91044 23.4 1.24912 23.1261 0.761522 22.6385C0.273928 22.1509 0 21.4896 0 20.8V7.80001ZM13 20.8C14.7239 20.8 16.3772 20.1152 17.5962 18.8962C18.8152 17.6772 19.5 16.0239 19.5 14.3C19.5 12.5761 18.8152 10.9228 17.5962 9.70381C16.3772 8.48483 14.7239 7.80001 13 7.80001C11.2761 7.80001 9.62279 8.48483 8.40381 9.70381C7.18482 10.9228 6.5 12.5761 6.5 14.3C6.5 16.0239 7.18482 17.6772 8.40381 18.8962C9.62279 20.1152 11.2761 20.8 13 20.8ZM13 18.2C12.4878 18.2 11.9807 18.0991 11.5075 17.9031C11.0344 17.7071 10.6044 17.4199 10.2423 17.0577C9.88013 16.6956 9.59286 16.2656 9.39687 15.7925C9.20088 15.3193 9.1 14.8122 9.1 14.3C9.1 13.7879 9.20088 13.2807 9.39687 12.8075C9.59286 12.3344 9.88013 11.9044 10.2423 11.5423C10.6044 11.1801 11.0344 10.8929 11.5075 10.6969C11.9807 10.5009 12.4878 10.4 13 10.4C14.0343 10.4 15.0263 10.8109 15.7577 11.5423C16.4891 12.2737 16.9 13.2657 16.9 14.3C16.9 15.3343 16.4891 16.3263 15.7577 17.0577C15.0263 17.7891 14.0343 18.2 13 18.2Z"
                fill="#4F617D"
              />
            </svg>
          </p>
          <button onClick={modalClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
            >
              <g clip-path="url(#clip0_1_274)">
                <path
                  d="M4.24846 24.7515C2.86356 23.4139 1.75892 21.8139 0.998986 20.0449C0.239055 18.2758 -0.160945 16.3731 -0.177675 14.4478C-0.194406 12.5225 0.172469 10.6132 0.901542 8.83115C1.63061 7.04916 2.70728 5.4302 4.06873 4.06876C5.43017 2.70732 7.04913 1.63065 8.83112 0.901573C10.6131 0.1725 12.5225 -0.194375 14.4478 -0.177645C16.3731 -0.160914 18.2758 0.239086 20.0448 0.999017C21.8139 1.75895 23.4139 2.86359 24.7515 4.24849C27.3927 6.98322 28.8543 10.646 28.8212 14.4478C28.7882 18.2497 27.2632 21.8864 24.5748 24.5749C21.8864 27.2633 18.2496 28.7882 14.4478 28.8213C10.6459 28.8543 6.98319 27.3928 4.24846 24.7515ZM16.53 14.5L20.6335 10.3965L18.589 8.35199L14.5 12.4555L10.3965 8.35199L8.35196 10.3965L12.4555 14.5L8.35196 18.6035L10.3965 20.648L14.5 16.5445L18.6035 20.648L20.648 18.6035L16.5445 14.5H16.53Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_274">
                  <rect width="29" height="29" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        {/* content */}
        <form
          action="POST"
          className="ml-[130px] mr-[57px] flex flex-col gap-y-8"
        >
          <div className="flex">
            <div>
              <label>Party Groups *</label>
              <div className="flex w-[296px] h-[44px] p-2  gap-x-2 rounded-[10px] border-[1px] border-[#8E8E8E]">
                <input
                  type="text"
                  value={partyGroups}
                  onChange={handleChange}
                  onKeyDown={addTags}
                  placeholder="Select Party Groups"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                >
                  <path
                    d="M28.2647 12.2915L17.4989 22.6523L6.73306 12.2915C6.54071 12.106 6.2825 12.0021 6.01361 12.0021C5.74473 12.0021 5.48652 12.106 5.29417 12.2915C5.20103 12.3816 5.12704 12.4891 5.07653 12.6078C5.02602 12.7264 5 12.8539 5 12.9826C5 13.1113 5.02602 13.2388 5.07653 13.3575C5.12704 13.4761 5.20103 13.5837 5.29417 13.6738L16.7471 24.6981C16.9483 24.8917 17.218 25 17.4989 25C17.7798 25 18.0495 24.8917 18.2507 24.6981L29.7036 13.6759C29.7974 13.5857 29.872 13.4779 29.9229 13.3589C29.9738 13.2398 30 13.1119 30 12.9826C30 12.8534 29.9738 12.7254 29.9229 12.6064C29.872 12.4873 29.7974 12.3795 29.7036 12.2893C29.5113 12.1038 29.2531 12 28.9842 12C28.7153 12 28.4571 12.1038 28.2647 12.2893V12.2915Z"
                    fill="#8E8E8E"
                  />
                </svg>
              </div>
            </div>
            <div className="flex  ml-2 gap-2 items-center">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="w-[136px] h-[42px] gap-2 flex  bg-gray-100 rounded-[30px] items-center justify-center text-[24px] text-[#484848] font-[510] "
                >
                  {" "}
                  {tag}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <path
                      d="M9.5 1.1875C4.86875 1.1875 1.1875 4.86875 1.1875 9.5C1.1875 14.1313 4.86875 17.8125 9.5 17.8125C14.1313 17.8125 17.8125 14.1313 17.8125 9.5C17.8125 4.86875 14.1313 1.1875 9.5 1.1875ZM12.7063 13.6562L9.5 10.45L6.29375 13.6562L5.34375 12.7063L8.55 9.5L5.34375 6.29375L6.29375 5.34375L9.5 8.55L12.7063 5.34375L13.6562 6.29375L10.45 9.5L13.6562 12.7063L12.7063 13.6562Z"
                      fill="#484848"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-x-[85px]">
            <div className="flex flex-col  ">
              <label htmlFor="Name">Name *</label>
              <input
                value={form.name}
                onChange={handleName}
                className="rounded-[10px] w-[296px] h-[44px] p-2 border-[1px] border-[#8E8E8E] bg-white"
                placeholder="Enter Name"
                type="text"
              />
            </div>
            <div className="flex flex-col  ">
              {" "}
              <label htmlFor="Phone">Phone Number</label>
              <input
                value={form.phone}
                onChange={handlePhone}
                className="rounded-[10px] w-[296px] h-[44px] p-2 border-[1px] border-[#8E8E8E] bg-white"
                placeholder="Enter 10 digit number"
                type="digit"
              />
            </div>
          </div>
          <div className="flex gap-x-[85px]">
            <div className="flex flex-col  ">
              <label htmlFor="Address">Address</label>
              <input
                value={form.address}
                onChange={handleAddress}
                className="rounded-[10px] w-[296px] h-[44px] p-2 border-[1px] border-[#8E8E8E] bg-white"
                placeholder="Enter Address"
                type="text"
              />
            </div>
            <div className="flex flex-col  ">
              <label htmlFor="City">City</label>
              <input
                value={form.city}
                onChange={handleCity}
                className="rounded-[10px] w-[296px] h-[44px] p-2 border-[1px] border-[#8E8E8E] bg-white"
                placeholder="Enter City"
                type="text"
              />
            </div>
            <div className="flex flex-col  ">
              <label htmlFor="Pincode">Pincode</label>
              <input
                value={form.pincode}
                onChange={handlePincode}
                className="rounded-[10px] w-[296px] h-[44px] p-2 border-[1px] border-[#8E8E8E] bg-white"
                placeholder="Enter Pincode"
                type="digit"
              />
            </div>
          </div>
          <div className="flex gap-x-[85px]">
            <div className="flex flex-col  ">
              <label htmlFor="Address">GSTIN</label>
              <input
                value={form.gstin}
                onChange={handleGstin}
                className="rounded-[10px] w-[296px] h-[44px] p-2 border-[1px] border-[#8E8E8E] bg-white"
                placeholder="Enter GSTIN"
                type="text"
              />
            </div>
            <div className="flex flex-col  ">
              <label htmlFor="PAN">PAN Number</label>
              <input
                value={form.pan}
                onChange={handlePan}
                className="rounded-[10px] w-[296px] h-[44px] p-2 border-[1px] border-[#8E8E8E] bg-white"
                placeholder="Enter PAN Number"
                type="text"
              />
            </div>
            <div className="flex flex-col  ">
              <label htmlFor="Adhaar">Adhaar</label>
              <input
                value={form.adhaar}
                onChange={handleAdhaar}
                className="rounded-[10px] w-[296px] h-[44px] p-2 border-[1px] border-[#8E8E8E] bg-white"
                placeholder="Enter Adhaar"
                type="digit"
              />
            </div>
          </div>
          <div className="flex justify-end mb-4 gap-x-2">
            <button className="border-[1px] border-black w-[123px] h-[41px] rounded-[15px] bg-[#fff]">
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="w-[123px] h-[41px] rounded-[15px] text-white bg-[#484848]"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
