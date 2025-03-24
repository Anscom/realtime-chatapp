import { useState } from "react";
import { useAuthStore } from "../api/useAuthStore";
import { Camera, Mail, User } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="h-screen flex items-center justify-center text-black">
      <div className="max-w-xl w-full p-8 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold">Profile</h1>
          <p className="mt-1 text-gray-700">Your profile details</p>
        </div>

        {/* Avatar Upload */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <img
              src={selectedImg || authUser.profilePic || "/avatar.png"}
              alt="Profile"
              className="size-32 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <label
              htmlFor="avatar-upload"
              className={`absolute bottom-1 right-1 bg-indigo-500 hover:bg-indigo-400 p-2 rounded-full cursor-pointer transition-all duration-200 shadow-md ${
                isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
              }`}
            >
              <Camera className="w-5 h-5 text-white" />
              <input
                type="file"
                id="avatar-upload"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={isUpdatingProfile}
              />
            </label>
          </div>
          <p className="text-sm text-gray-700">
            {isUpdatingProfile
              ? "Uploading..."
              : "Click the camera to update your photo"}
          </p>
        </div>

        {/* Profile Information */}
        <div className="mt-6 space-y-4">
          <div className="bg-white/20 p-4 rounded-lg flex items-center gap-3 border-y-2">
            <User className="w-5 h-5 text-white" />
            <div>
              <p className="text-sm text-gray-700">Full Name</p>
              <p className="text-lg font-medium">{authUser?.fullName}</p>
            </div>
          </div>
          <div className="bg-white/20 p-4 rounded-lg flex items-center gap-3 border-y-2">
            <Mail className="w-5 h-5 text-white" />
            <div>
              <p className="text-sm text-gray-700">Email Address</p>
              <p className="text-lg font-medium">{authUser?.email}</p>
            </div>
          </div>
        </div>

        {/* Account Info */}
        <div className="mt-6 bg-white/10 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Account Information</h2>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-center justify-between">
              <span>Account Status</span>
              <span className="text-green-400">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
