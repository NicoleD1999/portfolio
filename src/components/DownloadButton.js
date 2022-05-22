import Button from "react-bootstrap/Button"
const Download = props => {
    const downloadFile = () => {
      window.location.href = "https://drive.google.com/file/d/1KS1QRrAqgKrqFgifA1_QhkfVa_AZ-2q9/view"
    }
    return (
          <a onClick={downloadFile}><u>Here</u></a>
    )
  }
  export default Download;