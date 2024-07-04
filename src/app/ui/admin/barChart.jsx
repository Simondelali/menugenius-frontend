const BarChart = ({ data }) => {
    const maxValue = Math.max(...data.map(item => item.value));
  
    return (
      <div className="w-full max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Bar Chart</h2>
        <div className="flex items-end h-64 border-b border-l border-gray-300">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center mx-2">
              <div 
                className="w-12 bg-blue-500 rounded-t"
                style={{ height: `${(item.value / maxValue) * 100}%` }}
              ></div>
              <span className="text-sm mt-2">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };


const BarChartar = () => {
    const chartData = [
      { label: 'A', value: 10 },
      { label: 'B', value: 20 },
      { label: 'C', value: 15 },
      { label: 'D', value: 25 },
      { label: 'E', value: 18 },
    ];
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Bar Chart Example</h1>
        <BarChart data={chartData} />
      </div>
    );
  };
  
export default BarChartar;