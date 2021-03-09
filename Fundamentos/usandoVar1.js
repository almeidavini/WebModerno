//Uma variavel definida com "var" só tem dois escopos possíveis: global ou escopo de função

{
    {
        {
            {
                var sera = 'Será?'
            }
        }
    }
}
console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()