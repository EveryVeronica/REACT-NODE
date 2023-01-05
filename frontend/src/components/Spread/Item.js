
const Item = ({item}) => (
    


    <li>
      {/* <button type="button" className="btn-" onClick={() => item.fn.remove()}>

      </button> */}
          <input className="input-" type="text" value={item.text} />

    </li>
);

export default Item;
