import React from "react";

function CategoryFilter({ cats, selectCat, onSelectCat }) {

  const catButtons = cats.map((cat) => {
    const className = cat === selectCat ? "selected" : null;
    return (<button onClick={() => onSelectCat(cat)} className={className} key={cat}> {cat} </button>
    )
  })  
  
  return (
  <div className="categories">
      <h5>Category filters</h5>
      {catButtons}
    </div>
  );
}

export default CategoryFilter;
