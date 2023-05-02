import styled from "styled-components";
import Card from "./Card";
const Grid = styled.div`
    & .total-device{
        color: var(--color-grey-4);
        padding: 0 3rem 1rem;
    }
   & .card-wrapper{
       display: grid;
       grid-template-columns: repeat(5, 1fr);
       gap: 2rem;
   }
   

`;
function GridList(){
    return (
     <Grid>
        <p className="total-device">{"123 devices"}</p>
       
        <div className="card-wrapper">
          <Card imgUrl="https://static.ui.com/fingerprint/ui/icons/06a25b40-ef1f-463a-82d9-13236866ea3d_257x257.png" productName={"Access Point WiFi 6 Enterprise"} productLine={"UniFi"} />

          
          <Card imgUrl="https://static.ui.com/fingerprint/ui/icons/06a25b40-ef1f-463a-82d9-13236866ea3d_257x257.png" productName={"Access Point WiFi 6 Enterprise"} productLine={"UniFi"} />

          <Card imgUrl="https://static.ui.com/fingerprint/ui/icons/06a25b40-ef1f-463a-82d9-13236866ea3d_257x257.png" productName={"Access Point WiFi 6 Enterprise"} productLine={"UniFi"} />

          <Card imgUrl="https://static.ui.com/fingerprint/ui/icons/06a25b40-ef1f-463a-82d9-13236866ea3d_257x257.png" productName={"Access Point WiFi 6 Enterprise"} productLine={"UniFi"} />

          <Card imgUrl="https://static.ui.com/fingerprint/ui/icons/06a25b40-ef1f-463a-82d9-13236866ea3d_257x257.png" productName={"Access Point WiFi 6 Enterprise"} productLine={"UniFi"} />

          <Card imgUrl="https://static.ui.com/fingerprint/ui/icons/06a25b40-ef1f-463a-82d9-13236866ea3d_257x257.png" productName={"Access Point WiFi 6 Enterprise"} productLine={"UniFi"} />

          <Card imgUrl="https://static.ui.com/fingerprint/ui/icons/06a25b40-ef1f-463a-82d9-13236866ea3d_257x257.png" productName={"Access Point WiFi 6 Enterprise"} productLine={"UniFi"} />

          <Card imgUrl="https://static.ui.com/fingerprint/ui/icons/06a25b40-ef1f-463a-82d9-13236866ea3d_257x257.png" productName={"Access Point WiFi 6 Enterprise"} productLine={"UniFi"} />

          <Card imgUrl="https://static.ui.com/fingerprint/ui/icons/06a25b40-ef1f-463a-82d9-13236866ea3d_257x257.png" productName={"Access Point WiFi 6 Enterprise"} productLine={"UniFi"} />

          <Card imgUrl="https://static.ui.com/fingerprint/ui/icons/06a25b40-ef1f-463a-82d9-13236866ea3d_257x257.png" productName={"Access Point WiFi 6 Enterprise"} productLine={"UniFi"} />

          <Card imgUrl="https://static.ui.com/fingerprint/ui/icons/06a25b40-ef1f-463a-82d9-13236866ea3d_257x257.png" productName={"Access Point WiFi 6 Enterprise"} productLine={"UniFi"} />

          <Card imgUrl="https://static.ui.com/fingerprint/ui/icons/06a25b40-ef1f-463a-82d9-13236866ea3d_257x257.png" productName={"Access Point WiFi 6 Enterprise"} productLine={"UniFi"} />

          <Card imgUrl="https://static.ui.com/fingerprint/ui/icons/06a25b40-ef1f-463a-82d9-13236866ea3d_257x257.png" productName={"Access Point WiFi 6 Enterprise"} productLine={"UniFi"} />

          <Card imgUrl="https://static.ui.com/fingerprint/ui/icons/06a25b40-ef1f-463a-82d9-13236866ea3d_257x257.png" productName={"Access Point WiFi 6 Enterprise"} productLine={"UniFi"} />

        </div>
    </Grid>
    )
}

export default GridList