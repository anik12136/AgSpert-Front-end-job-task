export const fetchJsonData = async () => {
    const response = await fetch('../../public/productScema.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };