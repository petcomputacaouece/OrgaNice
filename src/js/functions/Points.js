export const groupPet = {
    petiano1: { namePetiano: "Ana Beatriz de Oliveira Duarte", pontuacao: 10 },
    petiano2: { namePetiano: "Camila Pinheiro Dias", pontuacao: 10 },
    petiano3: { namePetiano: "Gabriel Marques Araujo", pontuacao: 10 }
}

export function addOccurrence(resIptNamePetiano, resIptPointPetiano, resIptDescPetiano, setOccurrences) {
    console.log(resIptNamePetiano)
    console.log(resIptPointPetiano)
    console.log(resIptDescPetiano)

    const points = Number(resIptPointPetiano);


    Object.values(groupPet).forEach((petiano) => {
        if (petiano.namePetiano === resIptNamePetiano) {

            if (points < 0 || petiano.pontuacao < 10) {
                petiano.pontuacao += points;
                if (petiano.pontuacao > 10) {
                    petiano.pontuacao = 10;
                }
            }
        }
    });

    const occurrence = { resIptNamePetiano, resIptPointPetiano, resIptDescPetiano }
    setOccurrences(prev => [...prev, { resIptNamePetiano, points, resIptDescPetiano }]);
}

window.addOccurrence = addOccurrence;





