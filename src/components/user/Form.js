import React, { Component } from "react";

function Form(){
    return (
      <div className="Form">
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </form>
      </div>
    );
}

export default Form;
