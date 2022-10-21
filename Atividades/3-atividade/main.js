async function searchCep() {
    let cep = document.getElementById('cep').value;
    url = `https://viacep.com.br/ws/${cep}/json/`

    try {
        const response = await fetch(url);
        const transformJson = response.json();
        const result = await transformJson;

        console.log(result)
        return completeForm(result.logradouro, result.bairro, result.uf, result.localidade)
    } catch (error) {
        console.log(error.message)
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