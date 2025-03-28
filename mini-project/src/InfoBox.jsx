import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./InfoBox.css";
export default function InfoBox({info}){
   const Init_URL = "https://images.unsplash.com/photo-1722858343903-7de9e4491cc8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   const HOT_URL = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   const COLD_URL = "https://images.unsplash.com/photo-1631315124498-41ebb8b10ede?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
   const RAIN_URL = "https://images.unsplash.com/photo-1501297875943-27f3803b4956?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnklMjBkYXl8ZW58MHx8MHx8fDA%3D";

    return(
     <div className="InfoBox">
       <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={
          info.humidity > 80 ? RAIN_URL 
          : info.temp > 15 ? HOT_URL 
          : COLD_URL
        } 
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}&nbsp;
          {
            info.humidity > 80 ? <ThunderstormIcon/>
            : info.temp > 15 ? <WbSunnyIcon/>
            : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min-Temp = {info.tempMin}&deg;</p>
          <p>Max-Temp = {info.tempMax}&deg;</p>
          <p>The Weather can be described as <i>{info.weather}</i> and  feels like {info.feelsLike}&deg;</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
     </div>
    );
}