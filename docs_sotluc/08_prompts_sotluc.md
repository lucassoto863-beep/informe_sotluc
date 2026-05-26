# 08. Bitácora de Uso de IA y Reflexión Final

Para la investigación legal, redacción de informes y construcción de la aplicación React de este caso, se utilizaron herramientas de Inteligencia Artificial (Gemini web, GitHub Copilot y Claude). A continuación, se documenta el proceso interactivo.

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

**Sección 06 (corrección posterior): Derechos ARCO con incisos específicos**
*   **Herramienta:** Claude (Interfaz Web - Chatbot).
*   **Prompt utilizado:** "El archivo 06_datos_sotluc.md cita el Art. 12 de la Ley 19.628 de forma genérica para los derechos ARCO. Reescríbelo especificando el inciso exacto del Art. 12 para cada derecho: Acceso, Rectificación, Cancelación y Oposición."

**Construcción de la Aplicación Web (React - Estructura Base)**
*   **Herramienta:** GitHub Copilot (Agente integrado en VS Code).
*   **Prompt utilizado:** (Vía panel de chat integrado) "@workspace Crea el componente `Resumen.jsx` en la carpeta `src/components/` que lea el contenido del archivo `docs_sotluc/01_resumen_sotluc.md`. Utiliza Tailwind CSS para darle un diseño de tarjeta profesional y agrega un ícono representativo usando la librería lucide-react."

**Depuración y Diseño UI/UX del Dashboard (React - Refinamiento)**
*   **Herramienta:** Gemini (Interfaz Web - Chatbot).
*   **Prompts utilizados:**
    *   *"Salió este error: [captura del error de The PostCSS plugin has moved]..."* (Para actualizar y migrar la configuración a la nueva versión Tailwind CSS v4).
    *   *"Siento que está todo muy junto y cargado, ¿puedes darle más espacio? y ¿Podrías cambiar los colores que sean algo más parecido a Claude por favor?"* (Para refinar el espaciado, la tipografía Serif y aplicar la paleta de colores final del Dashboard).

## 2. Correcciones Realizadas a la IA

Durante el proceso, las respuestas iniciales de la IA requirieron ajustes para cumplir con el rigor legal del informe y los requerimientos técnicos del proyecto:

1.  **Corrección en Tipificación de Delitos:** En el primer intento para la sección 03, la IA citó los delitos de la Ley 21.459 pero omitió mencionar los *incisos* específicos. **Justificación de la corrección:** Se le debió corregir mediante un nuevo prompt exigiendo ("Debes incluir el inciso exacto, por ejemplo: Artículo 2, inciso primero"), ya que la precisión en la cita de la norma es un requisito estricto del análisis legal.
2.  **Corrección en Tratamiento de Datos:** La IA asumió inicialmente que la filtración de Anthropic incluía contraseñas y correos, considerándolos "datos sensibles". **Justificación de la corrección:** Se corrigió el contexto indicándole a la IA que las fuentes oficiales de Anthropic confirmaron que solo se filtraron nombres y balances, obligando a la IA a recalcular su análisis para clasificar los datos estrictamente como "personales" y no "sensibles" según la Ley 19.628.
3.  **Corrección en Configuración de Tailwind CSS:** Durante la maquetación, la IA generó código de configuración obsoleto (archivos `tailwind.config.js`) correspondiente a Tailwind v3, siendo que el proyecto acababa de instalar la versión v4. **Justificación de la corrección:** Se le debió proporcionar el error exacto de la terminal, obligando a la IA a reformular la solución utilizando el nuevo paquete `@tailwindcss/vite` y limpiando los archivos de configuración antiguos.
4.  **Corrección en Derechos ARCO (Sección 06):** La IA citó el Artículo 12 de la Ley 19.628 de forma general para los cuatro derechos ARCO, sin especificar los incisos correspondientes a cada derecho. **Justificación de la corrección:** Se corrigió exigiendo que cada derecho (Acceso, Rectificación, Cancelación y Oposición) fuera mapeado a su inciso específico dentro del Art. 12, ya que la rúbrica exige cita textual precisa de la norma y no una referencia genérica al artículo completo.

## 3. Reflexión Final: Uso como Agente vs. Chatbot

El desarrollo de esta evaluación permitió evidenciar las diferencias operativas y ventajas de utilizar la IA como un "chatbot" tradicional frente a un "agente" de desarrollo.

El uso de **chatbots** (como Gemini y Claude en el navegador) resultó fundamental para la fase de investigación, ideación del análisis legal y resolución de problemas técnicos complejos. Su capacidad para estructurar marcos normativos, cruzar jurisdicciones (como el GDPR europeo con la Ley 19.628 chilena) y explicar paso a paso la solución a errores de consola (debugging de dependencias) acelera enormemente el trabajo. Sin embargo, carecen de contexto sobre el entorno local del computador.

Por otro lado, el uso de un **agente** como GitHub Copilot, directamente integrado en el IDE (VS Code), cambia por completo el paradigma al momento de programar. Al tener acceso al contexto del proyecto (usando comandos como `@workspace`), el agente no solo genera código genérico, sino que comprende la estructura de carpetas, sabe que los archivos Markdown están en `docs_sotluc/` y genera componentes React perfectamente conectados.

**Conclusión:** La combinación de ambas modalidades resultó ser la estrategia más efectiva: el *agente* construyó los cimientos del código gracias a su conocimiento del entorno, mientras que el *chatbot* aportó el razonamiento crítico necesario para el análisis legal, la depuración de errores de versiones y las decisiones creativas de diseño UI/UX.