import React, { useState, useEffect } from 'react';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { RadioGroup } from '../components/ui/radio-group';
import { Button } from '../components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../redux/authSlice';
import { Loader2 } from 'lucide-react';

const DesignAssetRequestForm = () => {
    const [input, setInput] = useState({
        assetName: "",
        assetType: "",
        description: "",
        priority: "",
    });

    const { loading } = useSelector((store) => store.auth); // Select loading state from Redux
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        // Check if required fields are provided
        if (!input.assetType || !input.priority) {
            return toast.error("Please select asset type and priority.");
        }

        try {
            dispatch(setLoading(true)); // Start loading state

            // Simulate successful form submission (without actual backend call)
            setTimeout(() => {
                // Assuming that you want to log the data in the form format
                const requestData = {
                    asset_name: input.assetName,     // assetName will be mapped to asset_name
                    asset_type: input.assetType,     // assetType will be mapped to asset_type
                    description: input.description,  // description remains as is
                    priority: input.priority         // priority remains as is
                };

                console.log("Form data:", requestData); // Log the request data to the console

                toast.success("Request successfully submitted!"); // Show success notification
                navigate("/request-success"); // Redirect after successful submission
            }, 1000); // Simulate a 1-second delay

        } catch (error) {
            toast.error("An unexpected error occurred. Please try again.");
        } finally {
            dispatch(setLoading(false)); // Stop loading state
        }
    };

    return (
        <div>
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Design Asset Request</h1>

                    {/* Asset Name Field */}
                    <div className='my-2'>
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
                    <div className='my-2'>
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
                    <div className='my-2'>
                        <Label>Description</Label>
                        <Input
                            type="text"
                            value={input.description}
                            name="description"
                            onChange={changeEventHandler}
                            placeholder="Describe your design asset"
                        />
                    </div>

                    {/* Priority Field */}
                    <div className='my-2'>
                        <Label>Priority</Label>
                        <RadioGroup className="flex items-center gap-4 my-5">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="priority"
                                    value="low"
                                    checked={input.priority === 'low'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="low">Low</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="priority"
                                    value="medium"
                                    checked={input.priority === 'medium'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="medium">Medium</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="priority"
                                    value="high"
                                    checked={input.priority === 'high'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="high">High</Label>
                            </div>
                        </RadioGroup>
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
        </div>
    );
};

export default DesignAssetRequestForm;
