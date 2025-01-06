import React, { useState } from 'react';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { RadioGroup } from '../components/ui/radio-group';
import { Button } from '../components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../redux/authSlice';
import { Loader2 } from 'lucide-react';
import axios from "axios";
 
const AssetRequestForm = () => {
    const [input, setInput] = useState({
        employee: "",
        assetCategory: "",
        assetDescription: "",
        specifications: "",
        reason: "",
        priorityLevel: "",
        requiredByDate: "",
        status: "",
        requestDate: "",
        assetName: "",
        assetType: "",
    });
 
    const { loading } = useSelector((store) => store.auth); // Fetch loading state from Redux
    const dispatch = useDispatch();
    const navigate = useNavigate();
 
    // Handle input change
    const changeEventHandler = (e) => {
        const { name, value } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    };
 
    // Submit form handler
    const submitHandler = async (e) => {
        e.preventDefault();
 
        if (!input.assetType || !input.priorityLevel || !input.employee || !input.assetCategory) {
            return toast.error("Please fill in all the required fields.");
        }
 
        if (new Date(input.requiredByDate) < new Date()) {
            return toast.error("The required by date must be in the future.");
        }
 
        try {
            dispatch(setLoading(true));
 
            const requestData = { ...input };
 
            const response = await axios.post(
                "http://localhost:3030/api/createreq", // Replace with actual backend URL
                requestData
            );
 
            toast.success("Request successfully submitted!");
            navigate("/request-success");
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error(error.response?.data?.error || "An unexpected error occurred. Please try again.");
        } finally {
            dispatch(setLoading(false));
        }
    };
 
    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-400 to-purple-600 flex items-center justify-center">
            <form onSubmit={submitHandler} className="w-full sm:w-96 bg-white p-6 rounded-md shadow-lg space-y-4">
                <h1 className="font-bold text-xl text-center text-gray-800 mb-5">Design Asset Request</h1>
 
                {/* Employee Field */}
                <div className="my-2">
                    <Label>Employee</Label>
                    <Input
                        type="text"
                        value={input.employee}
                        name="employee"
                        onChange={changeEventHandler}
                        placeholder="Enter employee name"
                    />
                </div>
 
                {/* Asset Category Field */}
                <div className="my-2">
                    <Label>Asset Category</Label>
                    <Input
                        type="text"
                        value={input.assetCategory}
                        name="assetCategory"
                        onChange={changeEventHandler}
                        placeholder="Enter asset category"
                    />
                </div>
 
                {/* Asset Description Field */}
                <div className="my-2">
                    <Label>Asset Description</Label>
                    <Input
                        type="text"
                        value={input.assetDescription}
                        name="assetDescription"
                        onChange={changeEventHandler}
                        placeholder="Describe the asset"
                    />
                </div>
 
                {/* Specifications Field */}
                <div className="my-2">
                    <Label>Specifications</Label>
                    <Input
                        type="text"
                        value={input.specifications}
                        name="specifications"
                        onChange={changeEventHandler}
                        placeholder="Enter specifications"
                    />
                </div>
 
                {/* Reason Field */}
                <div className="my-2">
                    <Label>Reason</Label>
                    <Input
                        type="text"
                        value={input.reason}
                        name="reason"
                        onChange={changeEventHandler}
                        placeholder="Enter reason for the request"
                    />
                </div>
 
                {/* Priority Level Field */}
                <div className="my-2">
                    <Label>Priority Level</Label>
                    <RadioGroup className="flex items-center gap-4 my-5">
                        <div className="flex items-center space-x-2">
                            <Input
                                type="radio"
                                name="priorityLevel"
                                value="low"
                                checked={input.priorityLevel === 'low'}
                                onChange={changeEventHandler}
                                className="cursor-pointer"
                            />
                            <Label htmlFor="low">Low</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Input
                                type="radio"
                                name="priorityLevel"
                                value="medium"
                                checked={input.priorityLevel === 'medium'}
                                onChange={changeEventHandler}
                                className="cursor-pointer"
                            />
                            <Label htmlFor="medium">Medium</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Input
                                type="radio"
                                name="priorityLevel"
                                value="high"
                                checked={input.priorityLevel === 'high'}
                                onChange={changeEventHandler}
                                className="cursor-pointer"
                            />
                            <Label htmlFor="high">High</Label>
                        </div>
                    </RadioGroup>
                </div>
 
                {/* Required By Date Field */}
                <div className="my-2">
                    <Label>Required By Date</Label>
                    <Input
                        type="date"
                        value={input.requiredByDate}
                        name="requiredByDate"
                        onChange={changeEventHandler}
                    />
                </div>
 
                {/* Status Field */}
                <div className="my-2">
                    <Label>Status</Label>
                    <Input
                        type="text"
                        value={input.status}
                        name="status"
                        onChange={changeEventHandler}
                        placeholder="Enter status"
                    />
                </div>
 
                {/* Request Date Field */}
                <div className="my-2">
                    <Label>Request Date</Label>
                    <Input
                        type="date"
                        value={input.requestDate}
                        name="requestDate"
                        onChange={changeEventHandler}
                    />
                </div>
 
                {/* Asset Name Field */}
                <div className="my-2">
                    <Label>Asset Name</Label>
                    <Input
                        type="text"
                        value={input.assetName}
                        name="assetName"
                        onChange={changeEventHandler}
                        placeholder="Enter asset name"
                    />
                </div>
 
                {/* Asset Type Field */}
                <div className="my-2">
                    <Label>Asset Type</Label>
                    <RadioGroup className="flex items-center gap-4 my-5">
                        <div className="flex items-center space-x-2">
                            <Input
                                type="radio"
                                name="assetType"
                                value="logo"
                                checked={input.assetType === 'logo'}
                                onChange={changeEventHandler}
                                className="cursor-pointer"
                            />
                            <Label htmlFor="logo">Logo</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Input
                                type="radio"
                                name="assetType"
                                value="banner"
                                checked={input.assetType === 'banner'}
                                onChange={changeEventHandler}
                                className="cursor-pointer"
                            />
                            <Label htmlFor="banner">Banner</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Input
                                type="radio"
                                name="assetType"
                                value="template"
                                checked={input.assetType === 'template'}
                                onChange={changeEventHandler}
                                className="cursor-pointer"
                            />
                            <Label htmlFor="template">Template</Label>
                        </div>
                    </RadioGroup>
                </div>
 
                {/* Description Field */}
                <div className="my-2">
                    <Label>Description</Label>
                    <Input
                        type="text"
                        value={input.description}
                        name="description"
                        onChange={changeEventHandler}
                        placeholder="Describe your design asset"
                    />
                </div>
 
                {/* Submit Button */}
                {loading ? (
                    <Button disabled>
                        <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait
                    </Button>
                ) : (
                    <Button type="submit" className="w-full my-4">
                        Submit Request
                    </Button>
                )}
 
                <span className='text-sm'>Want to view requests? <Link to="/view-requests" className='text-blue-600'>View Requests</Link></span>
            </form>
        </div>
    );
};
 
export default AssetRequestForm;