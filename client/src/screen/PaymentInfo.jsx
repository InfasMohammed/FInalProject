import React from "react";

const PaymentInfo = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="row y-gap-20 x-gap-20 ">
          <div className="col-md-6">
            <div className="wrapper">
              <div className="Py_card px-4">
                <div className=" my-3">
                  <p className="h8">Card Type</p>
                  <p className="text-muted ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="debit-card mb-3">
                  <div className="d-flex flex-column h-100">
                    <label className="d-block">
                      <div className="d-flex position-relative">
                        <div>
                          <img
                            src="https://www.freepnglogos.com/uploads/visa-inc-logo-png-11.png"
                            className="visa"
                            alt=""
                          />
                          <p className="mt-2 mb-4 text-white fw-bold">
                            Mohammed Infas
                          </p>
                        </div>
                        <div className="input">
                          <input type="radio" name="card" id="check" />
                        </div>
                      </div>
                    </label>
                    <div className="mt-auto fw-bold d-flex align-items-center justify-content-between">
                      <p>4989 1237 1234 4532</p>
                      <p>05/24</p>
                    </div>
                  </div>
                </div>
                <div className="debit-card card-2 mb-3">
                  <div className="d-flex flex-column h-100">
                    <label className="d-block">
                      <div className="d-flex position-relative">
                        <div>
                          <img
                            src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-png-transparent-svg-vector-bie-supply-0.png"
                            alt="master"
                            className="master"
                          />
                          <p className="text-white fw-bold">Mohammed Infas</p>
                        </div>
                        <div className="input">
                          <input type="radio" name="card" id="check" />
                        </div>
                      </div>
                    </label>
                    <div className="mt-auto fw-bold d-flex align-items-center justify-content-between">
                      <p className="m-0">5540 2345 3453 2343</p>
                      <p className="m-0">05/28</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="box-2">
              <div className="box-inner-2">
                <div>
                  <p className="h8">Payment Details</p>
                  <p className="dis mb-3">
                    Complete your purchase by providing your payment details
                  </p>
                </div>
                <form action>
                  <div className="mb-3">
                    <p className="dis fw-bold mb-2">Email address</p>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="luke@skywalker.com"
                    />
                  </div>
                  <div>
                    <p className="dis fw-bold mb-2">Card details</p>
                    <div className="d-flex align-items-center justify-content-between card-atm border rounded">
                      <div className="fab fa-cc-visa ps-3" />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Card Details"
                      />
                      <div className="d-flex w-50">
                        <input
                          type="text"
                          className="form-control px-0"
                          placeholder="MM/YY"
                        />
                        <input
                          type="password"
                          maxLength={3}
                          className="form-control px-0"
                          placeholder="CVV"
                        />
                      </div>
                    </div>
                    <div className="my-3 cardname">
                      <p className="dis fw-bold mb-2">Cardholder name</p>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="my-3 address">
                      <p className="dis fw-bold mb-3">Zip Code</p>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="ZIP"
                      />
                      <div className="d-flex flex-column dis mt-2">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <p className="fw-bold">Total</p>
                          <p className="fw-bold">
                            <span className="fas fa-dollar-sign" />
                            35.80
                          </p>
                        </div>
                        <div className="btn btn-primary mt-2">
                          Pay
                          <span className="fas fa-dollar-sign px-1" />
                          35.80
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentInfo;
