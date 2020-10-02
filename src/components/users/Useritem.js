import React from "react";
import PropTypes from "prop-types";

const Useritem = ({ user: { login, avatar_url, html_url } }) => {
  // const { login, avatar_url, html_url } = props.user;

  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        className='round-img'
        alt=''
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    </div>
  );
};

Useritem.prototypes = {
  user: PropTypes.object.isRequired,
};

export default Useritem;
