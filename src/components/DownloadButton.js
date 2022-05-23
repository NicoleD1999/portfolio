import {FaArrowAltCircleDown} from 'react-icons/fa'

const Download = props => {
    const downloadFile = () => {
      window.location.href = "https://drive.google.com/file/d/1KS1QRrAqgKrqFgifA1_QhkfVa_AZ-2q9/view"
    }
    return (
          <a href="#" onClick={downloadFile} style={{color: '#0a0908'}}><FaArrowAltCircleDown/></a>
    )
  }
  export default Download;