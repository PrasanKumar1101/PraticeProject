const Body =()=>{
    return(
        <div className="restaurant-list">
    {restranuntList.map((restaurant, index) => (
        <RestranuntCard key={index} {...restaurant} />
    ))}
</div>
    )
};

export default Body;