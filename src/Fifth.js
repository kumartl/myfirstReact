import './Fifth.css';
const user = {
    name: "santhoshkumar"
}
const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];


export default  function Fifth() {
    // return(
    //     <><h1 className="test">Fifth Component</h1>
    //     <h1 className="test">{user.name}</h1></>
    // )
    const listItems = products.map(product =>
        <li key={product.id}>
          {product.id} 

          {product.title}
        </li>
      );
      
      return (
        <ul>{listItems}</ul>
      );
}