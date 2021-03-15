import React, { memo } from "react";
import PropType from "prop-types";
import classes from "./Form.module.css";
const Form = props => {
  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <form className={classes.formData} onSubmit={props.handleSubmit}>
          <input
            type="text"
            value={props.title}
            placeholder="Enter a Title"
            name="title"
            className={classes.inputs}
            onChange={props.handleData}
            required
          />
          <input
            type="number"
            value={props.price}
            max="100"
            min="1"
            name="price"
            placeholder="Enter a Price Between 1 to 100"
            className={classes.inputs}
            onChange={props.handleData}
            required
          />
          <input
            type="file"
            className={classes.inputs}
            onChange={props.handleImage}
            required
          />
          <div className={classes.available}>
            <span>Select Availability</span>
            <select
              name="available"
              value={props.available}
              onChange={props.handleData}
              required
            >
              <option value={true}>Available</option>
              <option value={false}>Not Available</option>
            </select>
          </div>
          <button className={classes.addproduct}>Add Product</button>
        </form>
      </div>
      <div className={classes.preview}>
        {props.title !== "" ? (
          <>
            <img
              src={props.image}
              alt={props.title}
              className={classes.previewImg}
            />
            <h2 className={classes.title}>{props.title}</h2>
            <h5 className={classes.price}>
              {props.price !== 0 && `$ ${props.price}`}
            </h5>
          </>
        ) : (
          <h3 className={classes.text}>Added Products are shown Here</h3>
        )}
      </div>
    </div>
  );
};
Form.propType = {
  handleSubmit: PropType.func.isRequired,
  handleImage: PropType.func.isRequired,
  handleData: PropType.func.isRequired,
  title: PropType.string.isRequired,
  price: PropType.number.isRequired,
  available: PropType.bool.isRequired,
  image: PropType.string.isRequired
};
export default memo(Form);
