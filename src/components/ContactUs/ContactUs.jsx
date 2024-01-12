import { useForm } from "react-hook-form";

const ContactUs = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="bg-[#07332F] p-20 rounded-lg my-20">
            <div className="flex justify-between items-center">
                <div className="">
                    <h2 className="text-3xl text-white">Contact With Us</h2>
                </div>
                <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <input className="bg-[#FFFFFF0D] rounded-md" {...register("firstName", { required: true, maxLength: 20 })} />
                    <input className="bg-[#FFFFFF0D] rounded-md" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                    <input className="bg-[#FFFFFF0D] rounded-md" type="number" {...register("age", { min: 18, max: 99 })} />
                    <input className="bg-[#F7A582] text-xl py-2 hover:bg-[#ca8668] text-white rounded-lg col-span-2" type="submit" value="Book Now" />
                    
                </form>
            </div>
        </div>
    );
};

export default ContactUs;