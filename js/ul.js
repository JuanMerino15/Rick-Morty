export const spinner = () =>{
    const div = document.createElement('div');
    const html = 
    `<div class="d-flex align-items-center">
        <strong>Loading...</strong>
        <span class="spinner-border ms-auto" role="status" aria-hidden="true"></span>
        </div>
    </div>`;
    div.innerHTML = html;
  return div;
}

export const creaCard = (personaje) => {
    const card = document.createElement('div');
     const html = `
     <div class="card m-3" style="width: 18rem; float: left;">
     <img loading="lazy" src="${personaje.image}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${personaje.name}</h5>
       <p class="card-text">${personaje.status}</p>
       <button 
       class="btn btn-primary btn-block"
        data-id="${personaje.id}"
        data-bs-toggle="modal" 
        data-bs-target="#exampleModal">Ver Más</button>
       
     </div>
   </div>`;
   card.innerHTML = html;
   return card;
 }
 
 
export const modalBody = (personaje) => {
    const div = document.createElement('div');
    const origen = personaje.origin.name;
    const location = personaje.location.name;
    const episodes = personaje.episode.length;
    let html = '';
    html += origen === 'unknown'? `<h4>Se desconoce su origen</h4>`:
                        `<h4> Viene de ${origen}</h4>`;
    html += `Se encuentra en ${location}`;
    html += `<img src="${personaje.image}" class="">`;
    html += `<h4>Aparece en el ${episodes} episodio </h4>`;
    div.innerHTML = html;
    return div;

}
 