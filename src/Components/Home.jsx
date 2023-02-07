import React, { useEffect , useState} from 'react';
import {Box , Card , Typography, Stack,Paper} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import {ref,onValue} from 'firebase/database'
import {db} from '../firebase';
const Home = () => {
    const [users , setUsers] = useState([]);
    const display=()=>{
    const starCountRef = ref(db,'posts/');
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setUsers(data);
});
}
useEffect(()=>{
    display();
},[])

  return (
    <Box>
    {users.map(user=>{
    return(<Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
    </Card>
    )})
    </Box>
  )
}

export default Home;