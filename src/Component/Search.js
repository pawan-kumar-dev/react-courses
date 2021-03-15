import React,{memo} from 'react'
import classes from './Search.module.css'
import DataRendering from './DataRendering';
import PropType from 'prop-types'
const Search=(props)=>{
    let filter=props.Data.filter((item)=>{
        return item.title.toLowerCase().includes(props.search)
    })
        return(
            <div className={classes.container}>
               <form>
               <input type="text" placeholder="Enter a Title" onChange={props.handleData} value={props.search} name="search" className={classes.inputs}/>
               </form>
               <div className={classes.preview}>
                   {filter.length!==0?filter.map((item)=>{
                           return(
                            <div className={classes.card} key={item.id}><DataRendering data={item}/></div>
                           )
                       }):<h1>No data found</h1>}
                </div>
            </div>
        )
}
Search.propType={
    Data:PropType.object.isRequired,
    handleData:PropType.func.isRequired,
    search:PropType.string.isRequired
}
export default memo(Search);