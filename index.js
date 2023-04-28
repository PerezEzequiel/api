const url = "http://localhost:3000/personas";

const getPersonasAjax = () => {
  const xhr = new XMLHttpRequest();

  //Este evento se lanza 5 veces, cambiando el estado de la propiedad readystate de 0 a 4.
  xhr.addEventListener("readystatechange", () => {
    //estatus de la peticion GET entre 200 y 299 = Ok
    if (xhr.readyState == 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
      } else {
        console.error(`Error status: ${xhr.status}`);
      }
    }
  });

  xhr.open("GET", url);
  xhr.send();
};

const getPersonasFetch = () => {
  //Fetch devuelve un objeto de tipo Response, sea en then o en catch siempre devuelve ese objeto.
  fetch(url)
    .then((response) => {
      if ((response.ok = true)) {
        return response.json(); //json es un metodo del prototipo Response, devuelve una promesa.
      } else {
        return Promise.reject(
          `Error ${response.status}: ${response.statusText}`
        );
      }
    })
    .then((jsonResponse) => {
      console.log(jsonResponse);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally();
};

const getPersonasFetchAsync = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    const responseJson = await response.json();
    console.log(responseJson);
  } catch (error) {
    console.error(error);
  }
};

const createPersona = () => {
  const nuevaPersona = { nombre: "Juan", apellido: "Perez" };

  const xhr = new XMLHttpRequest();

  //Este evento se lanza 5 veces, cambiando el estado de la propiedad readystate de 0 a 4.
  xhr.addEventListener("readystatechange", () => {
    //estatus de la peticion GET entre 200 y 299 = Ok
    if (xhr.readyState == 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
        alert(data);
      } else {
        console.error(`Error status: ${xhr.status}`);
      }
    }
  });

  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type:","application/json;charset=UTF8");
  xhr.send(JSON.stringify(nuevaPersona));
};
