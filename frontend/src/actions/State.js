export const loadState = () => {
    try {
      function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) === " ") c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) === 0) {
            return decodeURIComponent(c.substring(nameEQ.length, c.length));
          }
        }
        return null;
      }
      const name = readCookie("name");
      const id = readCookie("id");
      const likedmovies = readCookie("likedmovies");
      const selections = readCookie("selections");
  
      const serializedData = {
        name,
        id,
        likedmovies,
        selections,
      };
      if (serializedData === null) {
        return undefined; // Si no existe el state en el local storage devolvemos undefined para que cargue el state inicial que hayamos definido
      }
      // console.log("serialize data"+serializedData)
      return serializedData; // Si encontramos con exito nuestro storage lo devolvemos.
    } catch (error) {
      return undefined; // Si ocurre algun error, devuelvo undefined para cargar el state inicial.
    }
  };
  
  export const saveState = (state) => {
    try {
      let serializedData = JSON.stringify(state.toJS());
      document.cookie = serializedData;
    } catch (error) {
      // Acá podemos capturar o crear cualquier log que deseemos en caso de que falle el salvado en el storage.
    }
  };
  