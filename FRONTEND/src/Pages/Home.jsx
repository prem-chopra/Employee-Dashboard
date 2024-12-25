import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom' 
import { Button } from '@/Components/ui/button'


const Home = () => {
    const [empData,setEmpData] = useState([])

    // getting all data
    const getAllData = async() => {
      const res = await fetch(`${import.meta.env.VITE_URL}getalldata`);
      const data = await res.json()
      setEmpData(data.employee)
      console.log(data.employee)
    }

    // deleting data
    const deleteEmp = async (id) =>{
      const res = await fetch(`${import.meta.env.VITE_URL}delete/${id}`,{
        method: 'DELETE',
      })
      const data = await res.json()
      console.log(data,"data successfuly deleted");
      toast.success("successfully deleted")
      getAllData()
    }

    useEffect(()=>{
      getAllData()
    },[])

  return (
    <>
      <div className="container mx-auto py-10 ">
        <Table>
          <TableCaption>List of Employees</TableCaption>
          <TableHeader>
            <TableRow>
            <TableHead>S.No</TableHead>
            <TableHead >Profile Picture</TableHead>
              <TableHead className="w-[200px]">Name</TableHead>
              <TableHead>Employee ID</TableHead>
              <TableHead>Designation</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead className="">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {empData.map((item,index) => (
              <TableRow key={index}>
                <TableCell>{index+1}</TableCell>
                <TableHead className="pl-8">{item.avatar?<img src={item.avatar } alt="" className='h-12 ' ></img>:""}</TableHead>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.emp_id}</TableCell>
                <TableCell>{item.designation}</TableCell>
                <TableCell className = "pl-10">{item.department}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell >
                  <Button onClick={()=>deleteEmp(item._id)} variant="destructive" >Remove</Button>
                  <Link to={`update/${item._id}`}><Button className='mx-4'>Edit</Button></Link>
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

export default Home