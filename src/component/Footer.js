import React from 'react'
import Grid from "@mui/material/Grid";
import { Typography, Divider } from "@mui/material";
import NorthEastIcon from '@mui/icons-material/NorthEast';


function Footer() {
  return (
    <div style={{backgroundColor:'black', padding:'2%', color:'white'}}>
        <Grid container spacing={2} justifyContent="left">
            <Grid item lg={5} sm = {6} xs={12} px={4}>
                <Typography variant='h5' align='left'>Email Address</Typography>
                <Typography align='left' style={{fontSize:'14px'}} >Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our privacy policy <NorthEastIcon  sx={{ fontSize: 15 }} /> </Typography>
            </Grid>

            <Grid item lg={2} sm = {6} xs={12}>
            <Typography className='footerLinkBorder' align='left' style={{marginBottom:'3%'}}>Orders and support</Typography>
            <Typography align='left'  style={{fontSize:'13px', marginBottom:'3%'}}>Contact us</Typography>
            <Typography align='left'  style={{fontSize:'13px', marginBottom:'3%'}}>FAQs <NorthEastIcon  sx={{ fontSize: 15 }} /></Typography>
            <Typography align='left'  style={{fontSize:'13px', marginBottom:'3%'}}>Shiping <NorthEastIcon  sx={{ fontSize: 15 }} /></Typography>
            <Typography align='left'  style={{fontSize:'13px', marginBottom:'3%'}}>Returns <NorthEastIcon  sx={{ fontSize: 15 }} /></Typography>
            <Typography align='left'  style={{fontSize:'13px', marginBottom:'3%'}}>Order History</Typography>
            <Typography align='left'  style={{fontSize:'13px', marginBottom:'3%'}}>Terms and conditions</Typography>
                <br />
            </Grid>
            <Grid item lg={2} sm = {6} xs={12}>
            <Typography className='footerLinkBorder' align='left' style={{marginBottom:'3%'}}>Services</Typography>
            <Typography align='left'  style={{fontSize:'13px', marginBottom:'3%'}}>Live assistance</Typography>
            <Typography align='left'  style={{fontSize:'13px', marginBottom:'3%'}}>Corporate gifts</Typography>
            <Typography align='left'  style={{fontSize:'13px', marginBottom:'3%'}}>facial appointments</Typography>

            </Grid>
            <Grid item lg={2} sm = {6} xs={12}>
            <Typography className='footerLinkBorder' align='left'  style={{marginBottom:'3%'}}>Local Preferences</Typography>
            <Typography align='left'  style={{fontSize:'13px', marginBottom:'3%'}}>Shipping:</Typography>
            <Typography align='left'  style={{fontSize:'13px', marginBottom:'3%'}}>Languages:</Typography>

            </Grid>
            <Grid item lg={5} sm = {6} xs={12} px={4}>
                <Typography className='footerLinkBorder' variant='h5' align='left'>Sustainability</Typography>
                <Typography align='left' style={{fontSize:'14px'}} >All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more<NorthEastIcon  sx={{ fontSize: 15 }} /> </Typography>
            </Grid>

            <Grid item lg={2} sm = {6} xs={12}>
            <Typography  className='footerLinkBorder' align='left' style={{marginBottom:'3%'}}>About</Typography>
            <Typography align='left'  style={{fontSize:'13px', marginBottom:'3%'}}>Our Story</Typography>
            <Typography align='left'  style={{fontSize:'13px', marginBottom:'3%'}}>Foundation <NorthEastIcon  sx={{ fontSize: 15 }} /></Typography>
            <Typography align='left'  style={{fontSize:'13px', marginBottom:'3%'}}>Careers</Typography>
            <Typography align='left'  style={{fontSize:'13px', marginBottom:'3%'}}>Privacy Policy</Typography>
            <Typography align='left'  style={{fontSize:'13px', marginBottom:'3%'}}>Accessibility</Typography>
                <br />
            </Grid>
            <Grid item lg={2} sm = {6} xs={12}>
            <Typography align='left' className='footerLinkBorder' style={{marginBottom:'3%'}}>Social Media</Typography>
            <Typography align='left'  style={{fontSize:'13px', marginBottom:'3%'}}>Instagram <NorthEastIcon  sx={{ fontSize: 15 }} /></Typography>
            <Typography align='left'  style={{fontSize:'13px', marginBottom:'3%'}}>Twitter <NorthEastIcon  sx={{ fontSize: 15 }} /></Typography>
            <Typography align='left'  style={{fontSize:'13px', marginBottom:'3%'}}>LinkedIn <NorthEastIcon  sx={{ fontSize: 15 }} /></Typography>
            <Typography align='left'  style={{fontSize:'13px', marginBottom:'3%'}}>WeChat <NorthEastIcon  sx={{ fontSize: 15 }} /></Typography>
            <Typography align='left'  style={{fontSize:'13px', marginBottom:'3%'}}>Weibo <NorthEastIcon  sx={{ fontSize: 15 }} /></Typography>

            </Grid>
            <Grid item lg={3} sm = {6} xs={12}>
            </Grid>
            <Grid item xs={12}>
                
            <Divider/>
            </Grid>
            <Grid item xs={12} className='footerLinkBorder'>

            </Grid>
            <Grid item xs={12}>
                <Typography align='left' >© Aesop</Typography>
            </Grid>
        </Grid>
    </div>
  )
}

export default Footer