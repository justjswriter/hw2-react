import { AddStore, Filter, Table } from "../components";

const stores = [{
  Id: 1,
  name: "Saniya store",
  isSpecial: true,
  openTime: 10.00,
  closeTime: 18.00,
  distanceToDelivery: 7,
},{
  Id: 2,
  name: "Zhanerke store",
  isSpecial: false,
  openTime: 8.00,
  closeTime: 20.00,
  distanceToDelivery: 8,
},{
  Id: 3,
  name: "Ilyas store",
  isSpecial: true,
  openTime: 9.00,
  closeTime: 20.00,
  distanceToDelivery: 5,
}]



function App() {
  return (
    <div className="App">
      <AddStore />
      <Filter />
      <Table stores={stores}/>
    </div>
  );
}

export default App;
