# Kimi Quantum Marketing Backend

## 🚀 DESPLIEGUE RAILWAY

Este es el backend de la plataforma Kimi Quantum Marketing optimizado para Railway.app.

### ✅ Archivos incluidos:
- `server-railway.js` - Servidor optimizado para producción
- `package.json` - Dependencias y scripts
- `.env` - Variables de entorno configuradas
- `railway.toml` - Configuración de Railway

### 🔧 Variables de entorno ya configuradas:
- NODE_ENV=production
- PORT=3000
- KIMI_API_KEY=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
- KIMI_MODEL=moonshotai/kimi-k2:free
- ALLOWED_ORIGINS=*

### 📡 Endpoints disponibles:
- GET /health - Health check
- POST /api/test - Test de conexión API
- POST /api/analyze-customer - Análisis de clientes
- POST /api/predict-budget - Predicción de presupuestos

### 🎯 Después del despliegue:
1. Obtén tu URL de Railway (ej: https://tu-app.up.railway.app)
2. Anota esa URL para el frontend
3. Testea: https://tu-app.up.railway.app/health

**Desarrollado por MiniMax Agent**