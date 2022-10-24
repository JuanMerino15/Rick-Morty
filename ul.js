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