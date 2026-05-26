# 06. Tratamiento de Datos Personales (Ley 19.628)

El incidente de Anthropic involucró la exposición no autorizada de información perteneciente a sus clientes corporativos y usuarios individuales. A continuación, se analiza el tratamiento de estos datos bajo el marco de la **Ley 19.628 sobre Protección de la Vida Privada**.

## 1. Tipos de Datos Comprometidos y su Clasificación
En la base de datos enviada por error al contratista se expusieron al menos tres tipos de datos:
1. **Nombres de las cuentas de usuarios.**
2. **Identificadores internos del sistema.**
3. **Balances de créditos disponibles para el uso de la API.**

**Distinción entre Datos Personales y Datos Sensibles:**
- **Datos Personales:** Según el Artículo 2, letra f) de la Ley 19.628, son aquellos relativos a cualquier información concerniente a personas naturales, identificadas o identificables. Los nombres de cuenta y los identificadores internos caben exactamente en esta categoría, ya que permiten individualizar a los clientes afectados.
- **Datos Sensibles:** Según el Artículo 2, letra g) de la misma ley, son aquellos que se refieren a características físicas o morales, hechos de la vida privada, estados de salud, ideologías u opiniones políticas. **En este caso de Anthropic, no se filtraron datos sensibles**, ya que la información expuesta fue estrictamente comercial/financiera (balances de créditos) y no involucró historiales de chat, contraseñas ni perfiles ideológicos de los usuarios.

## 2. Afectación de los Derechos ARCO

La Ley 19.628 consagra los derechos de los titulares en su **Artículo 12**, el cual en su inciso primero establece que toda persona tiene derecho a exigir al responsable de un banco de datos información sobre los datos relativos a su persona, su procedencia y destinatario, el propósito del almacenamiento y la individualización de las personas u organismos a los cuales sus datos son transmitidos regularmente.

A partir de esta normativa, se analizan los cuatro derechos ARCO afectados:

### Derecho de Acceso (Art. 12, inciso primero)
El inciso primero del Art. 12 consagra expresamente que el titular puede exigir al responsable del banco de datos que informe qué datos suyos están almacenados, su origen y a quiénes han sido transmitidos. En este caso, los clientes de Anthropic tienen el derecho de exigir a la empresa un reporte exacto sobre qué información específica de sus cuentas fue incluida en el archivo enviado por error al tercero, y a quién llegó.

### Derecho de Rectificación (Art. 12, inciso segundo)
El inciso segundo del Art. 12 establece el derecho del titular a que se modifiquen sus datos cuando sean erróneos, inexactos, equívocos o incompletos. Si el contratista o el tercero, al manipular la base de datos expuesta, hubiera alterado los balances de créditos o los nombres de las cuentas, los titulares tienen derecho a que Anthropic corrija y restaure esa información al estado original y verídico.

### Derecho de Cancelación (Art. 12, inciso tercero)
El inciso tercero del Art. 12 reconoce el derecho del titular a exigir la eliminación o bloqueo de sus datos cuando su tratamiento no se ajusta a la ley. Frente al tercero no autorizado que recibió el archivo por error, los usuarios tienen el derecho de exigir la eliminación total e inmediata de sus datos personales de sus sistemas, dado que ese actor carece de toda base legal para almacenarlos o procesarlos.

### Derecho de Oposición (Art. 12, inciso cuarto)
El inciso cuarto del Art. 12 permite al titular oponerse al tratamiento de sus datos cuando existan motivos fundados. Los clientes afectados pueden oponerse a que el contratista que cometió la negligencia siga procesando su información en el futuro, exigiendo a Anthropic que reasigne el manejo de sus datos a un proveedor que cumpla con los estándares de seguridad requeridos por la ley.