# 03. Tipificación de Delitos Informáticos (Ley 21.459)

El incidente de Anthropic fue reportado originalmente como un error operativo de un contratista en la cadena de suministro. Sin embargo, para efectos del análisis legal bajo la jurisdicción chilena, aplicaremos un escenario hipotético evaluando cómo se tipificarían estas acciones bajo la **Ley 21.459** si existiera dolo (intención maliciosa) por parte de los actores involucrados.

A continuación, se mapean las acciones del incidente con los artículos correspondientes de la ley:

## 1. Artículo 2: Acceso Ilícito (Inciso Primero)
* **Texto de la Ley:** Sanciona al que *"sin autorización o excediendo la que posea, vulnerando las medidas tecnológicas de seguridad, acceda a un sistema informático"*.
* **Mapeo de la acción (Contratista):** Se aplica a la acción del contratista externo al momento de extraer la base de datos con los nombres de cuentas y balances de créditos. Si bien el contratista tenía acceso, el acto de exportar y direccionar esos datos fuera del entorno seguro de Anthropic constituye un exceso de las autorizaciones conferidas originalmente para la prestación de sus servicios.

## 2. Artículo 3: Interceptación Ilícita (Inciso Primero)
* **Texto de la Ley:** Sanciona a quien *"indebidamente intercepte, interfiera o acceda a transmisiones no públicas de datos informáticos"*.
* **Mapeo de la acción (Tercero no autorizado):** Se aplica a la acción del tercero que recibió el archivo por error. Si este actor, al notar que la información contenida no le pertenecía (datos corporativos de Anthropic y sus clientes), decide abrir el archivo, leerlo y retener los datos en lugar de eliminarlo y reportarlo inmediatamente, incurre en el acceso indebido a una transmisión de datos privada.

## 3. Artículo 6: Fraude Informático (Inciso Primero)
* **Texto de la Ley:** Castiga a quien, *"con la intención de obtener un beneficio económico ilícito... introduzca, altere, borre o suprima datos informáticos... o mediante cualquier interferencia en el funcionamiento de un sistema informático, sufra el patrimonio de un tercero"*.
* **Mapeo de la acción (Riesgo de explotación comercial):** La filtración expuso los *"balances de créditos disponibles para el uso de la API"*. Si el tercero no autorizado intentara utilizar la información de esas cuentas expuestas para suplantar a los clientes y consumir esos créditos de inteligencia artificial sin pagar, ejecutaría directamente el delito de fraude informático al generar un perjuicio al patrimonio de Anthropic y de los usuarios afectados.