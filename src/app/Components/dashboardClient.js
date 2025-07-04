"use client";

import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../configs/firebase-config";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (!session?.user?.id) {
      router.push("/loginform");
      return;
    }

    const fetchUser = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "users", session.user.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
          setEditData(docSnap.data()); // Initialize editData for editing
        } else {
          console.log("No user document found");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [session, status, router]);

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const docRef = doc(db, "users", session.user.id);
      await updateDoc(docRef, editData);
      setUserData(editData); // Update local userData with new data
      setIsEditing(false); // Exit edit mode
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading" || loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">👤 Profile</h1>
      <h1 className="text-sm mb-4  text-center text-gray-900">
        👋 Welcome{userData?.FullName ? `, ${userData.FullName}` : ""}
      </h1>

      {userData ? (
        <>
          {isEditing ? (
            <div className="space-y-4">
              {[
                { label: "Username", name: "username", type: "text" },
                { label: "Full Name", name: "FullName", type: "text" },
                { label: "Email", name: "email", type: "email" },
                { label: "Age", name: "age", type: "number" },
                { label: "Phone", name: "phone", type: "text" },
                { label: "Branch", name: "branch", type: "text" },
                { label: "Year", name: "year", type: "text" },
                { label: "Roll Number", name: "rollNumber", type: "text" },
                { label: "College", name: "college", type: "text" },
                { label: "University", name: "university", type: "text" },
                { label: "CGPA", name: "cgpa", type: "number", step: "0.01" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={editData[field.name] || ""}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                    step={field.step || undefined}
                  />
                </div>
              ))}

              <div className="flex flex-col md:flex-row md:space-x-4 mt-6">
                <button
                  onClick={handleSave}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-2 md:mb-0"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <p>
                <strong>Username:</strong> {userData.username || "N/A"}
              </p>
              <p>
                <strong>Full Name:</strong> {userData.FullName || "N/A"}
              </p>
              <p>
                <strong>Email:</strong> {userData.email || "N/A"}
              </p>
              <p>
                <strong>Age:</strong> {userData.age || "N/A"}
              </p>
              <p>
                <strong>Phone:</strong> {userData.phone || "N/A"}
              </p>
              <p>
                <strong>Branch:</strong> {userData.branch || "N/A"}
              </p>
              <p>
                <strong>Year:</strong> {userData.year || "N/A"}
              </p>
              <p>
                <strong>Roll Number:</strong> {userData.rollNumber || "N/A"}
              </p>
              <p>
                <strong>College:</strong> {userData.college || "N/A"}
              </p>
              <p>
                <strong>University:</strong> {userData.university || "N/A"}
              </p>
              <p>
                <strong>CGPA:</strong> {userData.cgpa || "N/A"}
              </p>

              <div className="flex flex-col md:flex-row md:space-x-4 mt-6">
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2 md:mb-0"
                >
                  Edit Profile
                </button>
                <button
                  onClick={() => signOut({ callbackUrl: "/loginform" })}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
}
