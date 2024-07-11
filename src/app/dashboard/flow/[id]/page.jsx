// 'use client'
// import axiosInstance from '@/app/utils/axios'
// import { useRouter, useParams } from 'next/navigation'
// import { useEffect, useState } from 'react'

// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// export default function Flow() {
//   const router = useRouter()
//   const { id: menuId } = useParams();
//   const [menu, setMenu] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     console.log("Params:", { menuId });
//     if (menuId) {
//       // setMenuId(params.id)
//       const fetchMenu = async () => {
//         try {
//           console.log("Fetching menu for ID:", menuId);
//           const response = await axiosInstance.get(`/api/menu/${menuId}`);
//           console.log("API response:", response);
//           setMenu(response.data);
//         } catch (error) {
//           console.error('Error fetching menu:', error);
//           setError(`Error fetching menu: ${error.message}`);
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchMenu();
//     } else {
//       console.log("No menuId in params");
//       setLoading(false);
//     }
//   }, [menuId])

//   if (loading) {
//     return <div>Loading...</div>
//   }

//   if (error) {
//     return <div>Error: {error}</div>
//   }

//   return (
//     <div>
//       <h1>Flow for Menu ID: {menuId}</h1>
//       {menu ? (
//         <h2 className="text-2xl font-bold mb-4">Menu: {menu.name}</h2>
//       ) : (
//         <p>No menu data available</p>
//       )}
//       {/* Add your flow content here */}

//     </div>
//   )
// }

'use client'
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import axiosInstance from '@/app/utils/axios';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function Flow() {
  const router = useRouter();
  const { id: menuId } = useParams();
  const [menu, setMenu] = useState(null);
  const [menuOptions, setMenuOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axiosInstance.get(`/api/menu-options/${parseInt(menuId)}`);
        // setMenu(response.data);
        setMenuOptions(response.data);  // assuming options are nested under menu
        console.log(response.data);
      } catch (error) {
        setError(`Error fetching menu: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    if (menuId) {
      fetchMenu();
    } else {
      setLoading(false);
    }
  }, [menuId]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(menuOptions);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setMenuOptions(items);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Flow for Menu ID: {menuId}</h1>
      {menu ? (
        <h2 className="text-xl mb-4">Menu: menu.name</h2>
      ) : (
        <p>No menu data available</p>
      )}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="menuOptions">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="w-96 h-96 relative"
            >
              {menuOptions.map((option, index) => (
                <Draggable key={option.id} draggableId={option.id.toString()} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="w-96 h-32 relative mb-4"
                    >
                      <div className="w-96 h-32 absolute bg-white shadow-lg p-4">
                        <div className="flex justify-between">
                          <div className="text-xl font-normal">{index + 1}. {option.name}</div>
                          <div className="text-xl font-light">Option</div>
                        </div>
                        <div className="border-b my-2"></div>
                        <div className="text-xl font-light">{option.value || 'No value provided'}</div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
