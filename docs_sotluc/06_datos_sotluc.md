# 06. Tratamiento de Datos Personales (Ley 19.628)

El incidente de Anthropic involucró la exposición no autorizada de información perteneciente a sus clientes corporativos y usuarios individuales. A continuación, se analiza el tratamiento de estos datos bajo el marco de la **Ley 19.628 sobre Protección de la Vida Privada**.

## 1. Tipos de Datos Comprometidos y su Clasificación
En la base de datos enviada por error al contratista se expusieron al menos tres tipos de datos:
1. **Nombres de las cuentas de usuarios.**
2. **Identificadores internos del sistema.**
3. **Balances de créditos disponibles para el uso de la API.**

**Distinción entre Datos Personales y Datos Sensibles:**
*   **Datos Personales:** Según el Artículo 2, letra f) de la Ley 19.628, son aquellos relativos a cualquier información concerniente a personas naturales, identificadas o identificables. Los nombres de cuenta y los identificadores internos caben exactamente en esta categoría, ya que permiten individualizar a los clientes afectados.
*   **Datos Sensibles:** Según el Artículo 2, letra g) de la misma ley, son aquellos que se refieren a características físicas o morales, hechos de la vida privada, estados de salud, ideologías u opiniones políticas. **En este caso de Anthropic, no se filtraron datos sensibles**, ya que la información expuesta fue estrictamente comercial/financiera (balances de créditos) y no involucró historiales de chat, contraseñas ni perfiles ideológicos de los usuarios.

## 2. Afectación de los Derechos ARCO
La filtración a un tercero no autorizado vulnera los derechos fundamentales de los titulares de la información frente al tratamiento de sus datos. La Ley 19.628 los consagra en su **Artículo 12**, el cual señala textualmente: *"Toda persona tiene derecho a exigir a quien sea responsable de un banco de datos que se dedique en forma pública o privada al tratamiento de datos personales, información sobre los datos relativos a su persona, su procedencia y destinatario, el propósito del almacenamiento y la individualización de las personas u organismos a los cuales sus datos son transmitidos regularmente"*.

A partir de esta normativa, se analizan los cuatro derechos afectados (ARCO):

*   **Derecho de Acceso:** Los clientes de Anthropic tienen el derecho inalienable de exigir a la empresa un reporte exacto sobre qué información específica de sus cuentas fue incluida en el archivo enviado por error al tercero.
*   **Derecho de Rectificación:** Si el contratista o el tercero, al manipular la base de datos expuesta, alterara los balances de créditos o desconfigurara los nombres de las cuentas, los titulares tienen derecho a que Anthropic corrija y restaure su información al estado original.
*   **Derecho de Cancelación:** Frente al tercero no autorizado que recibió el archivo por error, los usuarios tienen el derecho de exigir la eliminación total e inmediata de sus datos personales de sus servidores, ya que este actor carece de base legal para almacenarlos.
*   **Derecho de Oposición:** Los clientes afectados pueden oponerse a que el contratista que cometió la negligencia siga procesando su información en el futuro, exigiendo a Anthropic que reasigne el manejo de sus datos a un proveedor que sí cumpla con los estándares de seguridad requeridos.