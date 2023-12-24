import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { LeftCmponent, MainComponent, RightComponent } from './Components/Styles/styles';
import { MyDocument } from './Components/PdfComponent/MyDocument';
import FormCard from './Components/PdfComponent/FormCard';
import { Provider, useSelector } from 'react-redux';
import UploadComponent from './Components/DisplayComponent/UploadComponent';
import Header from './Components/Header/Header';



function App() {
  const {userDetails,userSummary} = useSelector((state)=>state.user)
  
  return (
    <div className="App">
      <Header/>
     <MainComponent>
      <LeftCmponent>
        {/* <UploadComponent/> */}
<FormCard/>
      </LeftCmponent>
      <RightComponent>
<PDFViewer  width={'600px'}>
  
   <MyDocument userDetails={userDetails} summary={userSummary}/>
  
  </PDFViewer>
  
      </RightComponent>
      {/* <PDFDownloadLink document={<MyDocument  userDetails={userDetails} />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink> */}
     </MainComponent>
    </div>
  );
}

export default App;
