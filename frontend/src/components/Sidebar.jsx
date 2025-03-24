import { useEffect, useState } from "react";
import { useChatStore } from "../api/useChatStore";
import { useAuthStore } from "../api/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } =
    useChatStore();

  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-72 bg-gray-900 text-white border-r border-gray-700 flex flex-col transition-all duration-200">
      {/* Header */}
      <div className="border-b border-gray-700 w-full p-5">
        <div className="flex items-center gap-2">
          <Users className="size-6 text-gray-300" />
          <span className="font-semibold hidden lg:block">Contacts</span>
        </div>

        {/* Online filter toggle */}
        <div className="mt-3 hidden lg:flex items-center gap-2">
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-sm bg-gray-900 border-white checked:bg-white checked:border-white"
            />
            <span className="text-sm text-gray-400">Show online only</span>
          </label>
          <span className="text-xs text-gray-500">
            ({onlineUsers.length - 1} online)
          </span>
        </div>
      </div>

      {/* User List */}
      <div className="overflow-y-auto w-full py-3">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`
              w-full flex items-center gap-3 p-3 rounded-lg
              hover:bg-gray-800 transition-all duration-200
              ${
                selectedUser?._id === user._id
                  ? "bg-gray-800 ring-1 ring-gray-700"
                  : ""
              }
            `}
          >
            {/* Profile Picture */}
            <div className="relative mx-auto lg:mx-0">
              <img
                src={user.profilePic || "/avatar.png"}
                alt={user.name}
                className="size-12 object-cover rounded-full border-2 border-gray-700"
              />
              {onlineUsers.includes(user._id) && (
                <span className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full ring-2 ring-gray-900" />
              )}
            </div>

            {/* User Info */}
            <div className="hidden lg:block text-left min-w-0">
              <div className="font-medium truncate text-white">
                {user.fullName}
              </div>
              <div className="text-sm text-gray-400">
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}

        {/* No Online Users Message */}
        {filteredUsers.length === 0 && (
          <div className="text-center text-gray-500 py-4">No online users</div>
        )}
      </div>
    </aside>
  );
};
export default Sidebar;
