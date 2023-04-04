import React from "react";
import { FallingLines } from "react-loader-spinner";
import useFetch from "../../hooks/useFetch";
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { toast } from "react-hot-toast";

const LinkList = () => {
  const { data, isLoading } = useFetch();

  const handleDeleteLink = async (selectedDataID) => {
    try {
      const savedLinkRef = doc(db, "LinksDB", selectedDataID);
      await deleteDoc(savedLinkRef);
      toast.success("Successfully deleted data");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="mt-24">
      <h1 className="text-blue font-bold">Important Links</h1>
      <input
        className="my-3 w-full rounded-lg h-8 focus:ring-2 ring-blue bg-gray-600 p-2 font-bold text-white outline-none"
        type="text"
        placeholder="Search links here..."
      />
      {isLoading && (
        <div className="flex justify-center items-center pt-2">
          <FallingLines
            color="#4fa94d"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        </div>
      )}
      {!isLoading && (
        <div>
          {data.map((doc) => (
            <div
              key={doc.id}
              className="bg-white mt-2 text-blue rounded-lg p-3 flex justify-between items-center"
            >
              <div>
                <p className="mb-1 font-bold text-sm">
                  {doc.description.toUpperCase()}
                </p>
                <a target="_blank" className="text-xs italic" href={doc.link}>
                  {doc.link}
                </a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <button>
                  <HiOutlinePencilAlt size={20} />
                </button>
                <button onClick={() => handleDeleteLink(doc.id)}>
                  <HiOutlineTrash size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LinkList;
