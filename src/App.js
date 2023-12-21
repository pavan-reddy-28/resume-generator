import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { LeftCmponent, MainComponent, RightComponent } from './Components/Styles/styles';
import { MyDocument } from './Components/PdfComponent/MyDocument';
import FormCard from './Components/PdfComponent/FormCard';
import { Provider, useSelector } from 'react-redux';
import UploadComponent from './Components/DisplayComponent/UploadComponent';



function App() {
  const {userDetails} = useSelector((state)=>state.user)
  return (
    <div className="App">
     <MainComponent>
      <LeftCmponent>
        {/* <UploadComponent/> */}
<FormCard/>
      </LeftCmponent>
      <RightComponent>
<PDFViewer  width={'600px'}>
  
   <MyDocument userDetails={userDetails} />
  
  </PDFViewer>
  
      </RightComponent>
      <PDFDownloadLink document={<MyDocument  userDetails={userDetails} />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
     </MainComponent>
    </div>
  );
}

export default App;
