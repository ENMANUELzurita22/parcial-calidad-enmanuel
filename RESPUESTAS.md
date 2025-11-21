# RESPUESTAS DEL PARCIAL — Enmanuel Zurita

## 1. ¿Qué es CI?
Integración continua.  
Es el proceso donde cada cambio en el código dispara automáticamente las pruebas, el análisis de calidad y el build.

## 2. ¿Qué es CD?
Entrega continua.  
Permite desplegar automáticamente cada versión estable del sistema.

## 3. ¿Qué herramientas se usaron?
- **JavaScript**  
- **ESLint** (linter)  
- **Jest** (pruebas unitarias)  
- **GitHub Actions** (CI/CD)  

## 4. ¿Por qué se usa ESLint?
Garantiza que el código cumpla buenas prácticas, evita errores y mantiene un estilo uniforme.

## 5. ¿Por qué Jest?
Es un entorno de pruebas rápido, simple, con soporte integrado de mocks y cobertura.

## 6. Cobertura mínima
Se definió una cobertura del **80%**, pero el proyecto alcanza **100%**.

## 7. ¿Qué es `act`?
Es una herramienta que permite ejecutar GitHub Actions localmente usando Docker.

## 8. ¿Cómo se generó un run fallido?
Realicé un commit con errores o sin la configuración ESLint, lo cual provocó un fallo del pipeline.

## 9. ¿Cómo se solucionó?
Agregando `.eslintrc.json` correctamente, limpiando la estructura del proyecto y configurando el pipeline.

