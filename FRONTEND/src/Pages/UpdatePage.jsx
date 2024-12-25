import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from "react-router-dom";
 

const UpdatePage = () => {
  const [employee,setEmployee] = useState({})
  const {id} = useParams()
  const navigate = useNavigate()
  const fetchSingleData = async () =>{
      const response = await fetch(`${import.meta.env.VITE_URL}/getsingledata/${id}`)
      const data = await response.json()
      setEmployee({...data.singleData})
      console.log("successfully get single data",data);
  }

  const updatedata = () => {
    fetch(`${import.meta.env.VITE_URL}update`, {
      method: "PUT",
      body: JSON.stringify(employee),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };


  const handleSelectChange = (name, value) => {
    setEmployee(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(employee);
    updatedata();
    toast.success("User Successfully updated");
    navigate("/")
  };

  useEffect(()=>{
    fetchSingleData()
  },[])
  return (
    <>
  <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Employee Information</CardTitle>
          <CardDescription>Please fill out all the fields below.</CardDescription>
        </CardHeader>
        <form onSubmit={(e)=>onSubmitHandler(e)}>  
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={employee.name}
                onChange={(e) => onChangeHandler(e)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="emp_id">Employee ID</Label>
              <Input
                id="emp_id"
                name="emp_id"
                placeholder="Enter your employee ID"
                value={employee.emp_id}
                onChange={(e) => onChangeHandler(e)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="designation">Designation</Label>
              <Select onValueChange={(value) => handleSelectChange('designation', value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select your designation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="developer">Developer</SelectItem>
                  <SelectItem value="designer">Designer</SelectItem>
                  <SelectItem value="analyst">Analyst</SelectItem>
                  <SelectItem value="senior Software Engineer">Senior Software Engineer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Select onValueChange={(value) => handleSelectChange('department', value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select your department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="it">IT</SelectItem>
                  <SelectItem value="hr">HR</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={employee.phone}
                onChange={(e) => onChangeHandler(e)}
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">Submit</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
    </>
  )
}

export default UpdatePage;