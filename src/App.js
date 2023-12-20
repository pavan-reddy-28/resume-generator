import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { LeftCmponent, MainComponent, RightComponent } from './Components/Styles/styles';
import { MyDocument } from './Components/PdfComponent/MyDocument';
import FormCard from './Components/PdfComponent/FormCard';
import { Provider, useSelector } from 'react-redux';



function App() {
  const {userData} = useSelector((state)=>state.user)
  return (
    <div className="App">
     <MainComponent>
      <LeftCmponent>
<FormCard/>
      </LeftCmponent>
      <RightComponent>
<PDFViewer  width={'600px'}>
  
   <MyDocument userData={userData} />
  
  </PDFViewer>
  
      </RightComponent>
      <PDFDownloadLink document={<MyDocument  userData={userData} />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
     </MainComponent>
    </div>
  );
}

export default App;
