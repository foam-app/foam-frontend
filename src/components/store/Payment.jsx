import { usePaystackPayment } from "react-paystack";

const config = {
  reference: new Date().getTime().toString(), //pass uuid as reference
  email: "user@example.com",
  amount: 2000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  publicKey: "pk_test_c8dc32b8ae474a888a8fd4c6a9e612fef4c5efb7",
};

// you can call this function anything
const onSuccess = (reference, amount) => {
  // Implementation for whatever you want to do with reference and after success call.
  // const values = { email, bought, date,  ,...reference}
  console.log(reference);
  console.log(amount);
  // axios.post(values)
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log("closed");
};

const PaystackHookExample = () => {
  const initializePayment = usePaystackPayment(config);
  return (
    <div>
      <button
        onClick={() => {
          initializePayment({ onSuccess, onClose });
        }}
      >
        Paystack Hooks Implementation
      </button>
    </div>
  );
};

function App({ amount, id }) {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <PaystackHookExample />
    </div>
  );
}

export default App;
