let B7Validator = {
    handleSubmit: (event) => {
        event.preventDefault();
        let send = true;

        let inputs = formulario.querySelectorAll('input');

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let check = B7Validator.checkInput(input);
            if (check !== true) {
                send = false;
                console.log(check);
            }
        }
        if (send) {
            formulario.submit();
        }
    },
    checkInput: (input) => {
        let rules = input.getAttribute("data-rules");

        if (rules !== null) {
            rules = rules.split('|');
            for (let k in rules) {
                let rDetails = rules[k].split('=');
                switch (rDetails[0]) {
                    case 'required':
                        if (input.value == '') {
                            return 'Campo não pode ser vazio.';
                        }
                        break;
                    // case 'min':

                    //     break;
                }
            }
        }
        return true;
    }
}

let formulario = document.querySelector('.johnny_validador');

formulario.addEventListener('submit', B7Validator.handleSubmit)