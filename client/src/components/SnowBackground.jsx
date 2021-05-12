import React from "react";
import './SnowBackground.css';

const Snowflake = (props) => {
  return (
    <p className='Snowflake' id={`item${props.id}`} style={props.style}>
      •
    </p>
  )
};

export default class SnowBackGround extends React.Component {
  snow = () => {
    let arr = Array.from('Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!!');

    return arr.map((el, i) => {
      let style = {
        animationDelay: `${(Math.random() * 16).toFixed(2)}s`,
        fontSize: `${(Math.floor(Math.random() * 10) + 10)}px`
      };

      return (<Snowflake key={i} id={i} style={style} />)
    });
  };

  render() {
    return (
      <div className="snow-container">
        {this.snow()}
      </div>
    )
  }
};