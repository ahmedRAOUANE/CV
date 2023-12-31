import { Container, Grid, List, ListItem, ListItemText, Typography, Link } from '@mui/material'
import React from 'react'

const LetsCollaborate = () => {
  return (
    <Container sx={{ my: "30px" }}>
      <Typography variant='h3' component={'h2'}>Let&apos;s Collaborate</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography sx={{mt: "40px"}}>
            I am always eager to take on new challenges and collaborate on innovative projects.
            If you have a web development project in mind or if you're looking for a frontend developer to join your team,
            I would love to hear from you. Feel free to reach out through the contact form or connect with me on
            Social Media Platforms to discuss how we can work together.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <List>
            <ListItem>
              <ListItemText>
                <Typography variant='strong' component={'strong'}>Ahmed Raouane</Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Email: <Link sx={{cursor: "pointer"}}>ahmedraouane30@gmail.com</Link></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>LinkedIn: <Link sx={{cursor: "pointer"}}>ahmedRaouane</Link></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Github: <Link sx={{cursor: "pointer"}}>ahmedRAOUANE</Link></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Phone: <Link sx={{cursor: "pointer"}}>0549868380</Link></ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Typography width={"400px"} margin={"30px auto"}>
        Thank you for visiting my professional portfolio.
        I look forward to the opportunity to contribute my skills and expertise to your
        next frontend development endeavor.
      </Typography>
    </Container>
  )
}

export default LetsCollaborate