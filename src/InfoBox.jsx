import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';


export default function InfoBox({info}){
    const COLD_URL = "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UkFJTnxlbnwwfHwwfHx8MA%3D%3D";


    return(
        <div className="InfoBox">
          <div>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
              sx={{ height: 140 }}
              image={
                info.humidity > 80 
                ?RAIN_URL
                : info.temp > 20
                ?HOT_URL
                :COLD_URL  
              }
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {info.city} 
                {info.humidity > 80
                ?<ThunderstormIcon/>
                : info.temp > 20
                ?<SunnyIcon/>
                :<AcUnitIcon/>}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component = {"span"}>
              <p>Temparature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}</p>
              <p>Max Temp = {info.tempMax}</p>
              <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike} &deg; C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
    )
}