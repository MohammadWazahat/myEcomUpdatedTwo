import React from "react";
import AllComponents from "./components/AllComponents";
import "./App.css";
import DataProvider from "./contexts/AllDataContext";
import SortAndFilterProvider from "./contexts/SortAndFilterContext";
import CartProvider from "./contexts/CartContext";

const App = () => {
  return (
    <div>
      <DataProvider>
        <SortAndFilterProvider>        
            <CartProvider>
              <AllComponents />  
            </CartProvider>          
        </SortAndFilterProvider>
      </DataProvider>
    </div>
  );
};

export default App;
