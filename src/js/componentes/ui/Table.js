function TableUI() {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table-auto border-collapse w-[90%] text-xl ml-8">
                    <thead>
                        <tr className="border-b border-gray-300">
                            <th className="px-10 py-3 text-left font-medium text-gray-700">Petiano</th>
                            <th className="px-10 py-3 text-left font-medium text-gray-700">Pontuação</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Object.values(groupPet).map((petiano, i) => (
                            <tr key={i} className="">
                                <td className="px-10 py-4 text-left">{petiano.namePetiano}</td>
                                <td className="px-10 py-4">{petiano.pontuacao}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>




        </>
    )

}

const groupPet = {
    petiano1: { namePetiano: "Ana Beatriz de Oliveira Duarte", pontuacao: 10 },
    petiano2: { namePetiano: "Camila Pinheiro Dias", pontuacao: 10 },
    petiano3: { namePetiano: "Gabriel Marques Araujo", pontuacao: 10 }
}

