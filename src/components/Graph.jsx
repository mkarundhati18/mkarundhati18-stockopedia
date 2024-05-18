
const Graph = ({ data }) =>{
    // Your graph rendering logic using SVG
    // This is just a placeholder, you would replace this with your actual graph logic
    return (
        <object type="image/svg+xml" data={data} width="8">
        {/* Fallback text or component if SVG fails to load */}
        Error
      </object>
    );
  }
  
  export default Graph;