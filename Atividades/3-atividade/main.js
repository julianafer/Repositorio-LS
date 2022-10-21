async function searchCep() {
    let cep = document.getElementById('cep').value;
    let cepStyle = document.getElementById('cep');
    url = `https://viacep.com.br/ws/${cep}/json/`

    let p = document.getElementById('error')

    if (cep.length === 8) {

        try {
            const response = await fetch(url);
            const transformJson = response.json();
            const result = await transformJson;

            console.log(result)
            cepStyle.style.border = '1px solid #ced4da'
            cepStyle.style.outline = 'none'
            cepStyle.style.background = 'white'
            error.style.display = 'none'
            return completeForm(result.logradouro, result.bairro, result.uf, result.localidade)
        } catch (error) {
            console.log(error.message)
        }
    }
    else {
        cepStyle.style.border = '1px solid red'
        cepStyle.style.outline = '1px solid red'
        cepStyle.style.background = 'pink'
        error.style.display = 'block'
    }
}


const completeForm = (street, district, state, city) => {
    document.getElementById('street').value = street;
    document.getElementById('district').value = district;
    document.getElementById('state').value = state;
    document.getElementById('city').value = city;
}

document.getElementById('cep')
    .addEventListener(searchCep)