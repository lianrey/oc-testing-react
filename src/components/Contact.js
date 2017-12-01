import React from "react";

class Contact extends React.Component{

  render() {
    return (
      <div>
        <ul>
          <li><b>First name: </b>{this.props.contact.firstName}</li>
          <li><b>Last name: </b>{this.props.contact.lastName}</li>
          <li><b>Email: </b>{this.props.contact.email}</li>
          <li><b>Phone: </b>{this.props.contact.phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
};

export default Contact;