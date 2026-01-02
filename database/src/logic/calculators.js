/**
 * Lógica de Cálculo para Pisos e Revestimentos
 * Foco em redução de desperdício e materiais ecológicos.
 */

export const calculateFlooring = (length, width, pieceLength, pieceWidth, margin = 0.10) => {
    const area = length * width;
    const pieceArea = (pieceLength / 100) * (pieceWidth / 100); // converte cm para m
    
    // Cálculo básico
    const rawQuantity = area / pieceArea;
    
    // Aplicação da margem de quebra (desperdício padrão)
    const totalQuantity = Math.ceil(rawQuantity * (1 + margin));
    
    // Cálculo de impacto ambiental (exemplo: economia de CO2 se usar cerâmica reciclada)
    const co2Saved = area * 2.5; // kg de CO2 economizado em média por m2 sustentável

    return {
        totalArea: area.toFixed(2),
        piecesNeeded: totalQuantity,
        wasteEstimated: (totalQuantity - rawQuantity).toFixed(2),
        ecoImpact: {
            co2SavedKg: co2Saved.toFixed(2),
            suggestion: "Recomendamos o uso de argamassa de baixa emissão de pó."
        }
    };
};

/**
 * Lógica de Cálculo para Telhados (Tradicionais e Verdes)
 */
export const calculateRoofing = (areaBase, inclinationDegrees, type = 'green') => {
    // Cálculo da área real considerando a inclinação (coseno)
    const radians = (inclinationDegrees * Math.PI) / 180;
    const realArea = areaBase / Math.cos(radians);

    if (type === 'green') {
        return {
            realArea: realArea.toFixed(2),
            substrateVolume: (realArea * 0.12).toFixed(2), // 12cm de espessura média
            plantsNeeded: Math.ceil(realArea * 15), // 15 mudas por m2
            ecoTip: "Telhados verdes reduzem a temperatura interna em até 5°C."
        };
    }

    return {
        realArea: realArea.toFixed(2),
        tilesNeeded: Math.ceil(realArea * 12.5), // Média de 12.5 telhas/m2
        ecoTip: "Considere telhas claras ou térmicas para maior eficiência energética."
    };
};

/**
 * Lógica para Pintura Sustentável
 */
export const calculatePainting = (wallArea, coats = 2) => {
    const litersNeeded = (wallArea / 10) * coats; // Rendimento médio 10m2/litro
    
    return {
        liters: litersNeeded.toFixed(1),
        vocImpact: "Ao escolher tintas à base de água ou minerais, evita a inalação de compostos orgânicos voláteis.",
        wellnessTip: "Aconselhamos a ventilação do espaço e o uso de óleos essenciais da Mundo Verde após a secagem."
    };
};

/**
 * Sugestões de fornecedores baseadas na localização e perfil (Brasil)
 * Integrado com a rede de parceiros de saúde e bem-estar.
 */
export const getEcoSuppliers = () => {
    return [
        { name: "Mundo Verde", benefit: "Kits de Purificação de Ar e Aromaterapia" },
        { name: "Raiz Nativa", benefit: "Produtos Orgânicos para Regeneração de Solo (Jardins)" },
        { name: "Boomi", benefit: "Materiais de Limpeza Biodegradáveis" },
        { name: "Drogasil", benefit: "Kits de Primeiros Socorros NR-18 e Proteção Solar" },
        { name: "Herbarium", benefit: "Suplementação para energia da equipa técnica" }
    ];
};
