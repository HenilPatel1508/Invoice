import React, { useState } from "react";
import { Link } from "react-router-dom";

const Otpverify = () => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [error, setError] = useState("");

    const handleOtpChange = (e, index) => {
        const value = e.target.value;
        const updatedOtp = [...otp];

        if (/^[0-9]{0,1}$/.test(value)) {
            updatedOtp[index] = value;
            setOtp(updatedOtp);

            if (value && index < 5) {
                document.getElementById(`otp-${index + 1}`).focus();
            }
        }
    };

    const handleBackspace = (e, index) => {
        if (e.key === "Backspace" && otp[index] === "") {
            if (index > 0) {
                document.getElementById(`otp-${index - 1}`).focus();
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (otp.includes("") || otp.length < 6) {
            setError("Please enter the complete OTP.");
            return;
        }
        setError("");
        console.log("OTP:", otp.join(""));
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center px-4 sm:px-6 lg:px-8"
            style={{
                backgroundImage:
                    'url("https://static.zohocdn.com/iam/v2/components/images/bg.49756b7c711696d95133fa95451f8e13.svg")',
            }}
        >
            <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Image Section */}
                <div
                    className="hidden md:flex md:w-1/2 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            'url("https://img.freepik.com/premium-vector/security-otp-one-time-password-smartphone-shield_9904-104.jpg?semt=ais_hybrid")',
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundColor: "transparent",
                    }}
                ></div>

                {/* Form Section */}
                <div className="w-full md:max-w-md lg:max-w-lg xl:max-w-lg p-8 sm:p-10 bg-white bg-opacity-90 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                    <h2 className="mb-6 text-3xl sm:text-4xl font-extrabold text-center text-bgprimary">
                        OTP Verification
                    </h2>
                    {error && (
                        <div className="mb-4 text-sm text-red-600 bg-red-100 p-3 rounded-lg shadow-lg">
                            {error}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        {/* OTP */}
                        <div className="mb-6 flex justify-between space-x-4 sm:space-x-6 lg:space-x-8">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    id={`otp-${index}`}
                                    value={digit}
                                    onChange={(e) => handleOtpChange(e, index)}
                                    onKeyDown={(e) => handleBackspace(e, index)}
                                    maxLength={1}
                                    className="w-full px-4 py-3 text-sm border border-grey rounded-lg focus:ring-2 focus:ring-bgprimary focus:outline-none"
                                />
                            ))}
                        </div>

                        {/* Submit */}
                        <div className="mb-6">
                            <Link to={"/resetpsw"}>
                            <button
                                type="submit"
                                className="w-full px-4 py-3 text-sm font-semibold text-white bg-bgprimary rounded-lg hover:bg-black focus:ring-2 focus:ring-bgprimary focus:outline-none"
                            >
                                Verify OTP
                            </button></Link>
                        </div>
                    </form>
                    {/* <div className="text-sm text-center text-gray-600">
                        Didn't receive OTP?{" "}
                        <a href="/forgot-password" className="text-blue-600 hover:underline">
                            Resend OTP
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Otpverify;
