import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import {userRows} from"../../dummydata"
import {Link} from "react-router-dom";
import { useState } from "react";

export default function UserList() {
    const [data,setData]=useState(userRows)

    const handleDelete= (id) => {
        setData(data.filter((item)=>item.id !==id));
    };  

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'user',
          headerName: 'User ',
          width: 200,
          renderCell:(params)=>{
              return(
                  <div className="userListUser">
                      <img src={params.row.avatar} alt="" className="userListImg" />
                      {params.row.username}
                  </div>
              )
          }
        },
        {
          field: 'email',
          headerName: 'E-mail',
          width: 160,
          editable: true,
        },
        {
          field: 'age',
          headerName: 'Age',
       
          width: 150,
         
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 160,
       
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 160,
            
         
          },
          {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell:(params)=>{
                return(
                    <>
                    <Link to={"/user/"+params.row.id}>
                    <button className="userListBtn">Edit</button>
                    </Link>
                    <DeleteOutline className="userListDlt" onClick={() => handleDelete(params.row.id)}/>
                    </>
                )
            }
         
          },
      ];
      
     
      
    return (
        <div className="userList">
             <DataGrid
        rows={data} disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
        </div>
    )
}
