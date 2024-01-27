import React, { useState, useEffect } from 'react';

function readJson() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json'); // Загрузка файла JSON из папки public
        const data = await response.json(); // Преобразование ответа в формат JSON
        setJsonData(data); // Установка данных в состояние
      } catch (error) {
        console.error('Ошибка при загрузке файла JSON:', error);
      }
    };

    fetchData(); // Вызов функции загрузки данных
  }, []);

  return (
    <div>
      {jsonData ? (
        <pre>{JSON.stringify(jsonData, null, 2)}</pre> // Отображение данных JSON
      ) : (
        <p>Загрузка данных...</p>
      )}
    </div>
  );
}

export default readJson;
