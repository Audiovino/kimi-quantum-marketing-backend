# Kimi Quantum Marketing Backend

## 🚀 BACKEND LISTO PARA RAILWAY

### ✅ Archivos incluidos (RAÍZ DEL PROYECTO):
- `server-railway.js` - Servidor optimizado para producción
- `package.json` - Dependencias Node.js
- `.env` - Variables de entorno configuradas
- `railway.toml` - Configuración de Railway
- `Dockerfile` - Container para despliegue robusto

### 🔧 Variables de entorno configuradas:
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
- POST /api/market-trends - Tendencias de mercado

### 🎯 Para Railway:
1. Subir todo este ZIP a Railway
2. Railway detectará automáticamente Node.js
3. Deploy automático en 2-3 minutos
4. Obtienes URL: https://abc123.up.railway.app

### 🧪 Test después del deploy:
- Health: https://tu-url.up.railway.app/health
- Test API: https://tu-url.up.railway.app/api/test

**Desarrollado por MiniMax Agent**