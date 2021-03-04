import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@material-ui/core/";
import theme from "./theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar";
import ImageList from "./components/ImageList";
import ImageModal from "./components/ImageModal";

function App() {
  const [list, setList] = useState();
  const [error, setError] = useState();
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [imageId, setImageId] = useState("");
  const [loading, setLoading] = useState(false);

  // Single Object For Popup
  let image;
  if (imageId) image = list.find((v) => v.id === imageId);

  const handleOpenModal = (id) => {
    setImageId(id);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    if (query.length) {
      const CLIENT_ID = "28viPVDSeVTPYxltuEqxk3czbxw-FXdM9yKUryUDg8I";
      const url = `https://api.unsplash.com/search/photos/?query=${query}&client_id=${CLIENT_ID}`;
      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await fetch(url);
          const json = await response.json();
          setList(json.results);
          setLoading(false);
        } catch (err) {
          console.log(err);
          setError(err);
        }
      };
      fetchData();
    }
  }, [query]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <Navbar setQuery={setQuery} />
        <ImageList
          list={list}
          handleOpenModal={handleOpenModal}
          error={error}
          loading={loading}
        />
        {image && (
          <ImageModal image={image} open={showModal} close={handleCloseModal} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
