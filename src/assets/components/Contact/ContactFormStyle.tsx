import { styled } from "styled-components";

const ContactFormStyle = styled.div`
  color: white;
  .container {
    display: flex;
    flex-direction: column;
  }

  form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}

label {
  margin-bottom: 8px;
  font-weight: bold;
}

input,
textarea {
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 8px 16px;
  background-color: #a484e8;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #a484e8;
}

`

export default ContactFormStyle;