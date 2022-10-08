import { getContact } from './query.js';

export const render = (contact, contactId) => {
  const { id, name, surname, pets, species, age } = contact;

  const container = document.createElement('form');
  container.classList.add('edit-pet');
  container.innerHTML = `
    <h4>Editing pet ${name} ${surname}.</h4>

    <label class="form-label mt-2">Name</label>
    <input type="text" name="name" class="form-control form-control-sm" value = ${pets[0].name}>

    <label class="form-label mt-2">Species</label>
    <input type="text" name="species" class="form-control form-control-sm" value = ${pets[0].species}>

    <label class="form-label mt-2">Age</label>
    <input type="text" name="age" class="form-control form-control-sm" value = ${pets[0].age}>

    <input type="hidden" value="${contactId}" name="contactId">

    <div class="mt-2">
      <button type="submit" class="btn btn-secondary me-1" title="Save">Save</button>
      <button type="button" class="cancel-button btn btn-secondary" title="Cancel">Cancel</button>
    </div>
  `;

  return container;
};
