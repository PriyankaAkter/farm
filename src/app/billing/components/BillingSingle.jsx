import React from "react";

const BillingSingle = () => {
  return (
    <div className="container py-10 2xl:py-[134px]">
      <div className=" bg-theme-white p-5 2xl:p-[68px]">
        <h5 className="mb-[11px]">Billing Details</h5>
        <hr className="mb-20 bg-primary" />
        <form action="/" className="grid gap-12">
          <div className="flex flex-col 2xl:flex-row gap-10">
            <div className="w-full 2xl:w-1/2">
              <label htmlFor="name" className="font-primary">
                Full Name*
              </label>
              <br />
              <input
                className="mt-2 py-6 pl-6 w-full border border-[#D4D4D4] rounded"
                type="text"
              />
            </div>
            <div className="w-full 2xl:w-1/2">
              <label htmlFor="email" className="font-primary">
                District *
              </label>
              <br />
              <input
                className="mt-2 py-6 pl-6 w-full border border-[#D4D4D4] rounded"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col 2xl:flex-row gap-10">
            <div className="w-full 2xl:w-1/2">
              <label htmlFor="company" className="font-primary">
                Town/ City *
              </label>
              <br />
              <input
                className="mt-2 py-6 pl-6 w-full border border-[#D4D4D4] rounded"
                type="text"
              />
            </div>
            <div className="w-full 2xl:w-1/2">
              <label htmlFor="name" className="font-primary">
                Postal code *
              </label>
              <br />
              <input
                className="mt-2 py-6 pl-6 w-full border border-[#D4D4D4] rounded"
                type="number"
              />
            </div>
          </div>
          <div className="flex flex-col 2xl:flex-row gap-10">
            <div className="w-full 2xl:w-1/2">
              <label htmlFor="company" className="font-primary">
                Area *
              </label>
              <br />
              <input
                className="mt-2 py-6 pl-6 w-full border border-[#D4D4D4] rounded"
                type="text"
              />
            </div>
            <div className="w-full 2xl:w-1/2">
              <label htmlFor="name" className="font-primary">
                Phone number *
              </label>
              <br />
              <input
                className="mt-2 py-6 pl-6 w-full border border-[#D4D4D4] rounded"
                type="number"
              />
            </div>
          </div>
          <div className="flex flex-col 2xl:flex-row gap-10">
            <div className="w-full 2xl:w-1/2">
              <label htmlFor="company" className="font-primary">
                E-mail address *
              </label>
              <br />
              <input
                className="mt-2 py-6 pl-6 w-full border border-[#D4D4D4] rounded"
                type="email"
              />
            </div>
            <div className="w-full 2xl:w-1/2">
              <label htmlFor="name" className="font-primary">
                Alternative phone number *
              </label>
              <br />
              <input
                className="mt-2 py-6 pl-6 w-full border border-[#D4D4D4] rounded"
                type="number"
              />
            </div>
          </div>
          <div className="w-full ">
            <label htmlFor="optional">
              Notes about your order, special notes for delivery.
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Notes about your order, special notes for delivery."
              className="w-full border border-[#D4D4D4] rounded py-6 pl-6 mt-2"
            ></textarea>
          </div>

          <button className="py-7 px-11 text-xl text-white bg-primary rounded-2xl w-fit">
            Checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default BillingSingle;
