import { AiOutlineFilter } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const Filter = () => {
  return (
    

      <div className="flex-1">
        <form class="grid grid-cols-3 gap-4">
          <div className="border px-4 py-2 ">
            <input type="text" placeholder="Search..." className="text-xl" />
          </div>
          <div>
            <select
              id="option"
              name="option"
              class="block w-full bg-none border py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="option1">Status</option>
              <option value="option2">Active</option>
              <option value="option3">Inactive</option>
            </select>
          </div>
          <button className="bg-theme-gray py-4 px-10 text-black text-base font-semibold flex items-center gap-1 w-fit">
            <AiOutlineFilter className="w-4 h-4" /> FILTER
          </button>
        </form>
      </div>

     
    
  );
};

export default Filter;
 {/* <div className="flex-1">
          <form class="grid grid-cols-4 gap-4">
            <div>
              <select
                id="option"
                name="option"
                class="block w-full  bg-none border py-4 pl-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="option1">Select Category</option>
                <option value="option2">Clothing & Apparel</option>
                <option value="option3">Clothing & Apparel</option>
              </select>
            </div>
            <div>
              <select
                id="option"
                name="option"
                class="block w-full bg-none border py-4 pl-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="option1">Product Type</option>
                <option value="option2">Simple Product</option>
                <option value="option3">Groupped product</option>
              </select>
            </div>
            <div>
              <select
                id="option"
                name="option"
                class="block w-full bg-none border py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="option1">Status</option>
                <option value="option2">Active</option>
                <option value="option3">Inactive</option>
              </select>
            </div>
            <button className="bg-theme-gray py-4 px-10 text-black text-base font-semibold flex items-center gap-1 w-fit">
              <AiOutlineFilter className="w-4 h-4" /> FILTER
            </button>
          </form>
        </div>
        <div className="flex items-center justify-between w-1/4 border px-4 py-2 ">
          <input type="text" placeholder="Search product" className="text-xl" />
          <BsSearch className="text-primary w-5 h-5 " />
        </div> */}
