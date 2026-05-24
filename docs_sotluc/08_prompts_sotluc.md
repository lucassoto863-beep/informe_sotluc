# 08. Bitácora de Uso de IA y Reflexión Final

Para la investigación legal, redacción de informes y construcción de la aplicación React de este caso, se utilizaron herramientas de Inteligencia Artificial (Gemini web y GitHub Copilot). A continuación, se documenta el proceso interactivo.

## 1. Bitácora de Prompts por Sección

**Sección 01 y 02: Resumen y Marco Normativo**
*   **Herramienta:** Gemini (Interfaz Web - Chatbot).
*   **Prompt utilizado:** "Actúa como un experto en ciberseguridad y legislación chilena. Dame un resumen ejecutivo del incidente de filtración de datos de Anthropic de principios de 2024, detallando los actores involucrados (Anthropic, contratista, tercero). Luego, indica qué normativas aplican, incluyendo la Ley 19.628, Ley 21.459, GDPR e ISO 27001, justificando cada una con el hecho concreto de la filtración de los nombres de cuenta y balances de créditos."

**Sección 03: Tipificación de Delitos (Ley 21.459)**
*   **Herramienta:** Gemini (Interfaz Web - Chatbot).
*   **Prompt utilizado:** "Bajo un escenario hipotético donde el error del contratista de Anthropic hubiera tenido intención maliciosa (dolo), mapea sus acciones a 3 artículos específicos de la Ley 21.459 de Chile. Debes mencionar el número de artículo exacto y mapearlo al acceso a la base de datos y la exposición de los créditos de la API."

**Sección 05 y 06: Responsabilidades y Datos Personales**
*   **Herramienta:** Gemini (Interfaz Web - Chatbot).
*   **Prompt utilizado:** "Analiza las responsabilidades legales (penales, civiles, administrativas) para Anthropic, el contratista externo y el tercero que recibió los datos, citando el Código Civil chileno. Luego, clasifica los datos filtrados (nombres y balances) según la Ley 19.628, diferenciando si son personales o sensibles, y explica cómo se vulneran los derechos ARCO."

**Construcción de la Aplicación Web (React)**
*   **Herramienta:** GitHub Copilot (Agente integrado en VS Code).
*   **Prompt utilizado:** (Vía panel de chat integrado) "@workspace Crea el componente `Resumen.jsx` en la carpeta `src/components/` que lea el contenido del archivo `docs_sotluc/01_resumen_sotluc.md`. Utiliza Tailwind CSS para darle un diseño de tarjeta profesional y agrega un ícono representativo usando la librería lucide-react."

## 2. Correcciones Realizadas a la IA

Durante el proceso, las respuestas iniciales de la IA requirieron ajustes para cumplir con el rigor legal del informe:

1.  **Corrección en Tipificación de Delitos:** En el primer intento para la sección 03, la IA citó los delitos de la Ley 21.459 pero omitió mencionar los *incisos* específicos. **Justificación de la corrección:** Se le debió corregir mediante un nuevo prompt exigiendo ("Debes incluir el inciso exacto, por ejemplo: Artículo 2, inciso primero"), ya que la precisión en la cita de la norma es un requisito estricto del análisis legal.
2.  **Corrección en Tratamiento de Datos:** La IA asumió inicialmente que la filtración de Anthropic incluía contraseñas y correos, considerándolos "datos sensibles". **Justificación de la corrección:** Se corrigió el contexto indicándole a la IA que las fuentes oficiales de Anthropic confirmaron que solo se filtraron nombres y balances, obligando a la IA a recalcular su análisis para clasificar los datos estrictamente como "personales" y no "sensibles" según la Ley 19.628.

## 3. Reflexión Final: Uso como Agente vs. Chatbot

El desarrollo de esta evaluación permitió evidenciar las diferencias operativas entre utilizar la IA como un "chatbot" tradicional frente a un "agente" de desarrollo.

El uso de **chatbots** (como Gemini o ChatGPT en el navegador) resultó fundamental para la fase de investigación e ideación del análisis legal. Su capacidad para estructurar marcos normativos y cruzar jurisdicciones (como el GDPR europeo con la Ley 19.628 chilena) acelera enormemente la redacción. Sin embargo, carecen de contexto sobre el entorno local del computador.

Por otro lado, el uso de un **agente** como GitHub Copilot, directamente integrado en el IDE (VS Code), cambia por completo el paradigma al momento de programar. Al tener acceso al contexto del proyecto (usando comandos como `@workspace`), el agente no solo genera código genérico, sino que comprende la estructura de carpetas, sabe que los archivos Markdown están en `docs_sotluc/` y genera componentes React (como `Resumen.jsx`) perfectamente conectados y estilizados con Tailwind, reduciendo el trabajo manual de importación y maquetación web.