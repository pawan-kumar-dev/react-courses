import React, { memo} from 'react';
import classes from './DataRendering.module.css';
import PropType from 'prop-types';
const DataRendering=((props)=>{
    const Values=props.data//props value assigned to the DataRendering component
    return(
        <div className={classes.preview} key={Values.id}>
                     <img src={Values.image} alt={Values.title} className={classes.previewImg}/>
                     <h2 className={classes.title}>{Values.title}</h2>
                     <h5 className={classes.price}>{Values.price}$</h5>
                     <span className={classes.available}>
                         {
                             Values.available?"Available":"Not Available"
                         }
                     </span>
         </div>
    )
})
DataRendering.propType={
    data:PropType.object.isRequired
}
export default memo(DataRendering);