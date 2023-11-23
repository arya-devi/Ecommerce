// Modal.js
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import "./Modal.scss";
import React from "react";

export default function Modal({
  name,
  address,
  pincode,
  phoneNumber,
  setName,
  setAddress,
  setPincode,
  setPhoneNumber,
  buyNow,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="modal-container">
      <button className="modal-button" type="button" onClick={openModal}>
        Proceed To CheckOut
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog onClose={closeModal} className="modal-dialog">
          <Transition.Child>
            <div />
          </Transition.Child>

          <div>
            <div>
              <Transition.Child>
                <Dialog.Panel>
                  <section>
                    <div className="modal-form">
                      <div>
                        <label htmlFor="name" className="modal-label">
                          Enter Full Name
                        </label>
                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          type="name"
                          name="name"
                          id="name"
                          className="modal-input"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="address" className="modal-label">
                          Enter Full Address
                        </label>
                        <input
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          type="text"
                          name="address"
                          id="address"
                          className="modal-input"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="pincode" className="modal-label">
                          Enter Pincode
                        </label>
                        <input
                          value={pincode}
                          onChange={(e) => setPincode(e.target.value)}
                          type="text"
                          name="pincode"
                          id="pincode"
                          className="modal-input"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="mobileNumber" className="modal-label">
                          Enter Mobile Number
                        </label>
                        <input
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          type="text"
                          name="mobileNumber"
                          id="mobileNumber"
                          className="modal-input"
                          required
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        buyNow();
                        closeModal();
                      }}
                      type="button"
                      className="modal-submit"
                    >
                      Order Now
                    </button>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}