export default (message = '', type = 'primary') => {
  const messageContainer = document.createElement('div');
  const childMessageContainer = document.createElement('div');

  messageContainer.classList.add(
    'alert',
    `alert-${type}`,
    'd-flex',
    'justify-content-between',
  );

  messageContainer.append(childMessageContainer);

  // FYI exista un textContent
  childMessageContainer.textContent = message;

  const closeButton = document.createElement('button');
  closeButton.classList.add('btn', 'btn-danger');
  closeButton.textContent = 'Close';

  messageContainer.append(closeButton);

  closeButton.addEventListener('click', () => {
    messageContainer.remove();
  });

  return messageContainer;
};
