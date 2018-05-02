import React from 'react';

import Button from './Button';

export default ({count}) => (
   <React.Fragment>
       <span className="mr-2">Sort By</span>
       <Button title={"release date"} isActive={true} size={"small"} type={"outline"} addClasses={"mr-1"}/>
       <Button title={"rating"} size={"small"} type={"outline"}/>
   </React.Fragment>
)