import {Box , Stack , TextField, Typography,Button} from '@mui/material'
import { useState } from 'react';
import {set , ref , child, push, update} from 'firebase/database';
import {db} from '../firebase';


const Details = () => {
  const [companyName, setCompanyName] = useState("")
  const [salaryPackage, setSalaryPackage] = useState("")
  const [eligibleBranches, setEligibleBranches] = useState("")
  const [summary, setSummary] = useState("")
  const [updated,setUpdated] = useState(false)
  const formHandler=((e)=>{
    e.preventDefault();
    const writeNewPost=(uid) =>{
        const postData={
            companyName:companyName,
            Summary:summary,
            Package:salaryPackage,
            eligibleBranches:eligibleBranches
        }
        const newPostKey = push(child(ref(db), 'posts')).key;
        const updates = {};
        updates['/posts/' + newPostKey] = postData;
        updates['/user-posts/' + uid + '/' + newPostKey] = postData;
      
        return update(ref(db), updates);
    }
    writeNewPost();
    alert("success")
})
  return (
    <Box>
    <Stack justifyContent='center'>
      <form style={{display:'flex',flexDirection:'column',gap:'1rem',alignItems:'center'}} autoComplete="off" onsubmit={formHandler}>
      <Typography variant="h4"> Placement Details </Typography>
      <TextField id="outlined-basic" label="Name Of the company" variant="outlined" name='company' onChange={(e)=>{setCompanyName(e.target.value)}}/>
      <TextField id="outlined-textarea" label="About Company" multiline sx={{width:'15rem'}} name='summary' onChange={(e)=>{setSummary(e.target.value)}}/>
      <TextField id="outlined-basic" label="Package" variant="outlined" name='package'onChange={(e)=>{setSalaryPackage(e.target.value)}}/>
      <TextField id="outlined-basic" label="Eligible Branches" variant="outlined" name='eb' onChange={(e)=>{setEligibleBranches(e.target.value)}}/>
      <Button variant="outlined" type='submit'>Submit</Button>
      {/* {updated && <Typography variant="h4" gutterBottom color='green'> Successfully Data is Added </Typography>} */}
    </form>
    </Stack>
    <Button variant="outlined" type='submit'>Logout</Button>
  </Box>
  )
}

export default Details;