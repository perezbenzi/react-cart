import "./itemlistcontainer.css";

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="item-list-container">
            <h3 width="50px">{greeting}</h3>
        </div>
    );
};

export default ItemListContainer;
