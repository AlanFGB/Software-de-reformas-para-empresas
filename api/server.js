// Importação de dependências
// Nota: No ambiente real, instalaria com 'npm install express cors'
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para permitir comunicações entre o app mobile e o servidor
app.use(cors());
app.use(express.json());

/**
 * Rota Inicial de Boas-Vindas
 */
app.get('/', (req, res) => {
    res.json({
        message: "Bem-vindo à API do Reforma Pro - Edição Sustentável",
        status: "Online",
        version: "1.0.0"
    });
});

/**
 * Rota para Cálculo de Orçamento
 * Recebe os dados da obra e retorna os cálculos de sustentabilidade
 */
app.post('/api/estimate', (req, res) => {
    const { category, dimensions, options } = req.body;
    
    // Simulação de resposta baseada na categoria
    let result = {};

    switch (category) {
        case 'roof':
            // Aqui chamaríamos a lógica do calculators.js
            result = {
                type: "Telhado Verde",
                area: dimensions.area,
                environmentalImpact: "Alta redução térmica",
                recommendation: "Usar substrato orgânico da Raiz Nativa"
            };
            break;
            
        case 'wellness':
            // Integração com os seus parceiros de saúde
            result = {
                partners: [
                    { name: "Mundo Verde", product: "Aromaterapia pós-pintura" },
                    { name: "Drogasil", product: "Kit Primeiros Socorros NR-18" },
                    { name: "Herbarium", product: "Suplementos para energia da equipa" }
                ]
            };
            break;

        default:
            return res.status(400).json({ error: "Categoria de reforma não suportada" });
    }

    res.json(result);
});

/**
 * Inicialização do Servidor
 */
app.listen(PORT, () => {
    console.log(`Servidor a correr na porta ${PORT}`);
    console.log(`Projeto: Reforma Pro - Foco em Ecologia e Saúde`);
});
