'use client'
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import axiosInstance from '@/app/utils/axios';
import TopNavBar from '@/app/ui/user/flow/top-nav';
import CustomError from '@/app/ui/error/CustomError';
import ErrorModal from '@/app/ui/error/ErrorModal';

export default function Flow() {
  const router = useRouter();
  const { id: menuId } = useParams();
  const [menuOptions, setMenuOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [newOption, setNewOption] = useState({ name: '', value: '', expects_input: false });
  const [editingOption, setEditingOption] = useState(null);

  useEffect(() => {
    fetchMenuOptions();
  }, [menuId]);

  const fetchMenuOptions = async () => {
    try {
      const response = await axiosInstance.get(`/api/menu-options/${parseInt(menuId)}`);
      console.log("Fetched menu options:", response.data);
      setMenuOptions(response.data);
    } catch (error) {
      setError(`Error fetching menu options`);
    } finally {
      setLoading(false);
    }
  };

  const createMenuOption = async (parentId = null) => {
    try {
      await axiosInstance.post(`/api/create-menu-option/${menuId}/`, {
        ...newOption,
        parent_option: parentId,
        menu: menuId
      });
      fetchMenuOptions();
      setNewOption({ name: '', value: '', expects_input: false });
    } catch (error) {
      setError(`Error creating menu option`);
    }
  };

  const updateMenuOption = async (optionId) => {
    try {
      await axiosInstance.put(`/api/edit-menu-option/${menuId}/${optionId}/`, editingOption);
      fetchMenuOptions();
      setEditingOption(null);
    } catch (error) {
      setError(`Error updating menu option`);
    }
  };

  const deleteMenuOption = async (optionId) => {
    try {
      await axiosInstance.delete(`/api/delete-menu-option/${menuId}/${optionId}/`);
      fetchMenuOptions();
    } catch (error) {
      setError(`Error deleting menu option`);
    }
  };

  const renderMenuOptions = (options, parentId = null, level = 0) => {
    return options
      .filter(option => option.parent_option === parentId)
      .map(option => (
        <div key={option.id} className={`mb-4 ${level > 0 ? 'ml-6' : ''}`}>
          <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="font-semibold text-lg">{option.name}</span>
                <span className="ml-2 text-sm text-gray-500">({option.value})</span>
              </div>
              <div>
                {option.expects_input && (
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                    Expects Input
                  </span>
                )}
                <button 
                  onClick={() => setEditingOption(option)} 
                  className="text-blue-500 hover:text-blue-700 mr-2"
                >
                  Edit
                </button>
                <button 
                  onClick={() => deleteMenuOption(option.id)} 
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
            {renderMenuOptions(options, option.id, level + 1)}
            <button
              onClick={() => createMenuOption(option.id)}
              className="mt-2 bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded transition duration-300"
            >
              Add Sub-Option
            </button>
          </div>
        </div>
      ));
  };

  if (loading) return <div className="flex justify-center items-center h-screen"><span className="loading loading-dots loading-lg"></span></div>;
//   if (error) return <CustomError
//   title="Error"
//   message={error.message}
//   actionLink="/retry"
//   actionText="Try Again"
// />;
  
  return (
    <div className="container mx-auto">
      <TopNavBar menuId={menuId} menuName="your menu name" />
      {/* <h1 className="text-3xl font-bold mb-6">Menu Options</h1> */}
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 mt-16">
        <h2 className="text-xl font-semibold mb-4">Add New Option</h2>
        <div className="flex flex-wrap items-center space-x-4">
          <input
            type="text"
            placeholder="Name"
            value={newOption.name}
            onChange={(e) => setNewOption({...newOption, name: e.target.value})}
            className="border rounded p-2 flex-grow"
          />
          <input
            type="text"
            placeholder="Value"
            value={newOption.value}
            onChange={(e) => setNewOption({...newOption, value: e.target.value})}
            className="border rounded p-2 flex-grow"
          />
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={newOption.expects_input}
              onChange={(e) => setNewOption({...newOption, expects_input: e.target.checked})}
              className="mr-2"
            />
            Expects Input
          </label>
          <button
            onClick={() => createMenuOption()}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300"
          >
            Add Option
          </button>
        </div>
      </div>

      {editingOption && (
        <div className="bg-yellow-50 shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Edit Option</h2>
          <div className="flex flex-wrap items-center space-x-4">
            <input
              type="text"
              value={editingOption.name}
              onChange={(e) => setEditingOption({...editingOption, name: e.target.value})}
              className="border rounded p-2 flex-grow"
            />
            <input
              type="text"
              value={editingOption.value}
              onChange={(e) => setEditingOption({...editingOption, value: e.target.value})}
              className="border rounded p-2 flex-grow"
            />
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={editingOption.expects_input}
                onChange={(e) => setEditingOption({...editingOption, expects_input: e.target.checked})}
                className="mr-2"
              />
              Expects Input
            </label>
            <button
              onClick={() => updateMenuOption(editingOption.id)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition duration-300"
            >
              Update Option
            </button>
          </div>
        </div>
      )}

      <div>
        <h2 className="text-2xl font-semibold mb-4">Menu Flow</h2>
        {renderMenuOptions(menuOptions)}
      </div>
      <ErrorModal
        isOpen={!!error}
        onClose={() => setError(null)}
        title="Ooops...😐 An Error occured"
        message={error}
        actionText="Back to dashboard"
        actionLink="/dashboard"
      />
    </div>
    
  );
}