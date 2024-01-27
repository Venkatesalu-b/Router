import { Divider, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import React from "react";
import CreatePage from "./CreatePage";
import { useNavigate } from "react-router-dom";
const MainCreatePage = ()=>{
    const ListValues = ['Home', 'Create']
    const navigate = useNavigate();
    const sideBar = (li:any)=>{
      console.log(li,'li');
      
          if(li=='Home'){
            navigate('/home')
          }
        
     }
    
return(
    <>
    <div style={{width:'100%',height:'100%',position:'fixed'}}>
     <Toolbar style={{backgroundColor:'black'}}>
        
        <Typography variant="h6" noWrap component="div" style={{color:'white'}}>
          3D - DRAWING
        </Typography>
        <div style={{display:'flex',marginLeft:'auto',cursor:'pointer'}} >
        </div>
      </Toolbar>
      <Divider />
    <div style={{display:'flex',flexDirection:'row'}} >

    <Divider style={{backgroundColor:'white',color:'white'}} />
        <div style={{  height: "100vh",
      borderRight: ".1px solid white", // Add this to create the right border
      display: "flex",
      flexDirection: "column",
      width:200}}>
        <List style={{display:'flex',backgroundColor:'black',flexDirection:'column',width:200,height:'100vh',borderWidth:1,borderRight:1,borderRightWidth:1,borderRightColor:'white'}}>
          {ListValues.map((text, index) => (
              <>
            <ListItem key={text} disablePadding >
              <ListItemButton onClick={()=>sideBar(text)}>
             
                <ListItemText primary={text} style={{color:'white'}} />
              </ListItemButton>
            </ListItem>
            <Divider style={{color:'white',backgroundColor:'white'}} />

             </>
          ))}
        </List>
        </div>    <div style={{width:'80%',justifyContent:'center',alignItems:'center',height:'80%',marginRight:'auto'}}>
    <CreatePage /></div>

    </div>
    </div>

    </>
)
}
export default MainCreatePage;