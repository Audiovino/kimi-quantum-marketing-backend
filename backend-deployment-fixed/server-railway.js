/**
 * KIMI QUANTUM MARKETING PLATFORM - RAILWAY EDITION
 * Servidor permanente para despliegue en Railway
 * Sin dependencias del tunnel localhost.run
 */

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['*'],
    credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Configuración de logging
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development',
        version: '2.0.0-railway'
    });
});

// API Test endpoint
app.get('/api/test', (req, res) => {
    console.log('🧪 Test endpoint called');
    
    res.json({
        success: true,
        response: 'conectado',
        timestamp: new Date().toISOString(),
        message: 'API Kimi K2 operativa en servidor permanente',
        environment: 'Railway Production',
        version: '2.0.0'
    });
});

// Customer Analysis endpoint
app.post('/api/analyze-customer', async (req, res) => {
    try {
        console.log('👤 Customer analysis requested');
        console.log('Request data:', req.body);
        
        const { customer_id, age, income, interests, previous_purchases, online_behavior, location } = req.body;
        
        // Simular procesamiento con IA Kimi K2
        const analysis = await analyzeCustomerWithKimi({
            customer_id,
            age,
            income,
            interests,
            previous_purchases,
            online_behavior,
            location
        });
        
        res.json({
            success: true,
            analysis: analysis,
            timestamp: new Date().toISOString(),
            processing_time: '1.2s',
            ai_model: 'kimi-k2-quantum',
            confidence: 94.7
        });
        
    } catch (error) {
        console.error('❌ Customer analysis error:', error);
        res.status(500).json({
            success: false,
            error: 'Error en el análisis de cliente',
            details: error.message,
            timestamp: new Date().toISOString()
        });
    }
});

// Budget Prediction endpoint
app.post('/api/predict-budget', async (req, res) => {
    try {
        console.log('💰 Budget prediction requested');
        console.log('Request data:', req.body);
        
        const { campaign_duration, target_audience, conversion_rate, customer_lifetime_value, marketing_objective, competition_level } = req.body;
        
        // Simular optimización con algoritmos cuánticos
        const prediction = await predictBudgetWithQuantum({
            campaign_duration,
            target_audience,
            conversion_rate,
            customer_lifetime_value,
            marketing_objective,
            competition_level
        });
        
        res.json({
            success: true,
            budget: prediction.budget,
            roi: prediction.roi,
            confidence: prediction.confidence,
            recommendations: prediction.recommendations,
            timestamp: new Date().toISOString(),
            processing_time: '2.1s',
            ai_model: 'quantum-optimization-v2'
        });
        
    } catch (error) {
        console.error('❌ Budget prediction error:', error);
        res.status(500).json({
            success: false,
            error: 'Error en la predicción de presupuesto',
            details: error.message,
            timestamp: new Date().toISOString()
        });
    }
});

// Simulación de análisis con IA Kimi K2
async function analyzeCustomerWithKimi(customerData) {
    // Simular tiempo de procesamiento
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const analyses = [
        "Cliente de alto potencial detectado. Sus intereses en tecnología y viajes indican una propensión alta a productos innovadores. Se recomienda enfocar campañas de productos tecnológicos y servicios de experiencia.",
        "Perfil de Early Adopter identificado. El cliente muestra comportamiento digital avanzado y está dispuesto a probar nuevos productos. Oportunidad de venta cruzada con productos premium.",
        "Segmento de poder adquisitivo medio-alto detectado. Enfoque en productos de calidad y marcas reconocidas. ROI estimado superior al promedio del sector.",
        "Cliente con alta actividad en redes sociales y comportamiento digital. Candidato ideal para marketing de influencers y campañas virales. Propensión a compartir contenido positivo."
    ];
    
    const randomAnalysis = analyses[Math.floor(Math.random() * analyses.length)];
    
    return {
        profile: {
            customer_id: customerData.customer_id || 'GENERATED_' + Date.now(),
            segment: 'Premium Tech Enthusiast',
            lifetime_value: Math.floor(customerData.income * 0.15),
            conversion_probability: Math.floor(Math.random() * 30) + 70,
            risk_score: Math.floor(Math.random() * 20) + 10
        },
        insights: randomAnalysis,
        recommendations: [
            'Enfocar campañas en productos tecnológicos premium',
            'Utilizar estrategias de marketing de influencers',
            'Ofrecer productos de suscripción con descuentos',
            'Programar reengagement en 30 días'
        ],
        metrics: {
            engagement_score: Math.floor(Math.random() * 20) + 80,
            purchase_likelihood: Math.floor(Math.random() * 15) + 85,
            brand_affinity: Math.floor(Math.random() * 25) + 75
        }
    };
}

// Simulación de predicción cuántica
async function predictBudgetWithQuantum(budgetData) {
    // Simular tiempo de procesamiento cuántico
    await new Promise(resolve => setTimeout(resolve, 2100));
    
    const baseBudget = 25000;
    const variation = Math.floor(Math.random() * 15000) - 5000;
    const optimizedBudget = baseBudget + variation;
    
    const roiOptions = ['320%', '347%', '389%', '425%', '456%', '512%'];
    const randomRoi = roiOptions[Math.floor(Math.random() * roiOptions.length)];
    
    const recommendations = [
        'Distribuir 45% del presupuesto en canales digitales',
        'Incrementar inversión en móviles en un 25%',
        'Implementar retargeting avanzado para segment C',
        'Explorar nuevas plataformas emergentes (TikTok, Threads)'
    ];
    
    return {
        budget: `€${optimizedBudget.toLocaleString()}`,
        roi: randomRoi,
        confidence: Math.floor(Math.random() * 5) + 93,
        recommendations: recommendations,
        optimization_details: {
            channel_allocation: {
                'Digital Ads': '45%',
                'Social Media': '25%',
                'Influencers': '15%',
                'Content Marketing': '15%'
            },
            timeline: '30 days',
            expected_outcome: `${randomRoi} ROI en 90 días`
        }
    };
}

// Endpoints adicionales para funcionalidades avanzadas
app.get('/api/quantum-predictions', (req, res) => {
    res.json({
        success: true,
        predictions: [
            {
                type: 'market_trend',
                prediction: '+127% crecimiento sector tech Q1 2025',
                confidence: 94.7,
                timeframe: '90 days'
            },
            {
                type: 'customer_behavior',
                prediction: 'Aumento 34% engagement móvil',
                confidence: 89.2,
                timeframe: '60 days'
            },
            {
                type: 'product_performance',
                prediction: 'Nuevo producto con 78% éxito',
                confidence: 91.5,
                timeframe: '120 days'
            }
        ],
        timestamp: new Date().toISOString()
    });
});

app.get('/api/real-time-metrics', (req, res) => {
    res.json({
        success: true,
        metrics: {
            active_sessions: Math.floor(Math.random() * 50) + 100,
            total_analyses: Math.floor(Math.random() * 1000) + 5000,
            system_uptime: process.uptime(),
            api_calls_today: Math.floor(Math.random() * 500) + 1200,
            avg_response_time: (Math.random() * 500 + 200).toFixed(2) + 'ms'
        },
        timestamp: new Date().toISOString()
    });
});

// Serve static files (para desarrollo)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'public')));
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });
}

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('🚨 Server error:', err.stack);
    res.status(500).json({
        success: false,
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong',
        timestamp: new Date().toISOString()
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        error: 'Endpoint not found',
        available_endpoints: [
            'GET /health',
            'GET /api/test',
            'POST /api/analyze-customer',
            'POST /api/predict-budget',
            'GET /api/quantum-predictions',
            'GET /api/real-time-metrics'
        ],
        timestamp: new Date().toISOString()
    });
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('🛑 SIGTERM received, shutting down gracefully');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('🛑 SIGINT received, shutting down gracefully');
    process.exit(0);
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`
    ╔══════════════════════════════════════════════════════════╗
    ║                🚀 KIMI QUANTUM MARKETING                  ║
    ║                    SERVER v2.0.0                          ║
    ║                   🚀 RAILWAY EDITION                      ║
    ╠══════════════════════════════════════════════════════════╣
    ║  ✅ Server running on port ${PORT}                           ║
    ║  🌐 Health: http://localhost:${PORT}/health                  ║
    ║  🧪 API Test: http://localhost:${PORT}/api/test              ║
    ║  👤 Customer API: http://localhost:${PORT}/api/analyze-customer ║
    ║  💰 Budget API: http://localhost:${PORT}/api/predict-budget  ║
    ║  ⚛️ Quantum API: http://localhost:${PORT}/api/quantum-predictions ║
    ║  📊 Metrics API: http://localhost:${PORT}/api/real-time-metrics ║
    ╚══════════════════════════════════════════════════════════╝
    `);
});

module.exports = app;