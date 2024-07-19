document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelector('.custom-select');
    const trigger = select.querySelector('.select-trigger');
    const options = select.querySelector('.custom-options');

    trigger.addEventListener('click', () => {
        options.classList.toggle('show');
    });

    options.addEventListener('click', event => {
        if (event.target.classList.contains('custom-option')) {
            const selectedOption = options.querySelector('.custom-option.selected');
            if (selectedOption) {
                selectedOption.classList.remove('selected');
            }
            event.target.classList.add('selected');
            trigger.querySelector('span').textContent = event.target.textContent;
            options.classList.remove('show');
        }
    });

    document.addEventListener('click', event => {
        if (!select.contains(event.target)) {
            options.classList.remove('show');
        }
    });
});
