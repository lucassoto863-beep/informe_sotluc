# 05. Responsabilidades Legales de los Actores

En el incidente de filtración de Anthropic, se pueden identificar tres actores clave. A continuación, se detalla la atribución de sus responsabilidades bajo el ordenamiento jurídico chileno, citando la normativa aplicable para cada esfera legal.

## 1. Actor: Anthropic (Empresa Mandante)
Como proveedor del servicio y recolector original de los datos, mantiene obligaciones indelegables sobre su seguridad, incluso al externalizar procesos.

*   **Responsabilidad Administrativa:** Es responsable de garantizar medidas técnicas de seguridad. Su falla en la supervisión del contratista configura una infracción al tratamiento de datos, exponiéndose a multas y fiscalización según el **Artículo 23 de la Ley 19.628** (y a sanciones severas si aplicase el GDPR internacionalmente).
*   **Responsabilidad Civil:** Debe indemnizar los perjuicios causados a los usuarios por la exposición de sus nombres y balances de cuenta. Responde civilmente por los hechos de sus contratistas o dependientes, basándose en la "culpa in vigilando" (falta de supervisión) contemplada en el **Artículo 2320 del Código Civil chileno**.
*   **Responsabilidad Penal:** En este caso particular, Anthropic opera como víctima de la negligencia y no como autora de un delito. Sin embargo, en caso de encubrir el incidente o no reportarlo, la empresa (como persona jurídica) podría ser investigada bajo la **Ley 20.393 (Responsabilidad Penal de las Personas Jurídicas)**, la cual fue modificada por la Ley 21.459 para incluir delitos informáticos.

## 2. Actor: El Contratista Externo
Quien ejecutó la acción de enviar los datos por error al destino incorrecto, fallando en sus protocolos.

*   **Responsabilidad Penal:** En el escenario hipotético de que el envío no fuera un error, sino una filtración intencional, enfrentaría penas de cárcel por exceder las autorizaciones de la empresa para extraer la base de datos, configurando el delito de "Acceso Ilícito" tipificado en el **Artículo 2, Inciso Primero, de la Ley 21.459**.
*   **Responsabilidad Civil:** Está obligado a reparar patrimonialmente el daño causado directamente a Anthropic (y subsidiariamente a los usuarios) por su negligencia grave en el manejo de la información, de acuerdo al **Artículo 2314 del Código Civil chileno** (responsabilidad extracontractual).
*   **Responsabilidad Administrativa:** Su acción vulnera directamente el deber de confidencialidad al que están sujetos quienes trabajan con bases de datos. Enfrentaría sanciones sectoriales y la inhabilitación para procesar datos, infringiendo la obligación de guardar secreto establecida en el **Artículo 10 de la Ley 19.628**.

## 3. Actor: El Tercero No Autorizado
La entidad o persona que recibió la base de datos de los clientes sin tener relación contractual ni legal para poseerla.

*   **Responsabilidad Penal:** Si el tercero retiene el archivo, lo abre y revisa los balances de las cuentas a pesar de saber que es una transmisión privada que no le corresponde, incurre en el delito de "Interceptación Ilícita", sancionado en el **Artículo 3, Inciso Primero, de la Ley 21.459**.
*   **Responsabilidad Administrativa:** Si este tercero decide almacenar esta base de datos en sus propios servidores y no eliminarla, realiza un tratamiento de datos personales sin el consentimiento de los titulares, vulnerando el **Artículo 4 de la Ley 19.628**.
*   **Responsabilidad Civil:** Cualquier uso, venta o aprovechamiento comercial que el tercero haga con los datos expuestos (por ejemplo, aprovecharse de los créditos de API filtrados) generará una obligación de indemnización por enriquecimiento sin causa y daño patrimonial, amparado en el **Artículo 2314 del Código Civil chileno**.