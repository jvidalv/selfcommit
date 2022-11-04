import { ReactElement } from 'react'

import Head from 'next/head'
import ReactMarkdown from 'react-markdown'

import Container from 'components/container'
import Layout from 'components/layout'

const PrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Política de privacidad - selfcommit.</title>
      </Head>
      <div className="bg-gray-900 h-32">
        <Container className="h-full flex items-center">
          <h1 className="text-white text-5xl">Política de privacidad</h1>
        </Container>
      </div>
      <Container className="mt-16 prose prose-invert pb-16">
        <ReactMarkdown
          children={`
### Información al usuario

**Selfcommit**, en adelante RESPONSABLE, es el Responsable del tratamiento delos datos personales del Usuario y le informa que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679 de 27 de abril de 2016 (GDPR) relativo a la protección delas personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos, por lo que se le facilita la siguiente información del tratamiento:

**Finalidad del tratamiento**: mantener una relación comercial con el Usuario. Las operaciones previstas para realizar el tratamiento son:

- Remisión de comunicaciones comerciales publicitarias por email, fax, SMS, MMS, comunidades sociales o cualquier otro medio electrónico o físico, presente o futuro, que posibilite realizar comunicaciones comerciales. Estas comunicaciones serán realizadas por el RESPONSABLE y relacionadas sobre sus productos y servicios, o de sus colaboradores o proveedores con los que éste haya alcanzado algún acuerdo de promoción. En este caso, los terceros nunca tendrán acceso a los datos personales.
- Realizar estudios estadísticos.
- Tramitar encargos, solicitudes o cualquier tipo de petición que sea realizada por el usuario a través de cualquiera de las formas de contacto que se ponen a su disposición.
- Remitir el boletín de noticias de la página web.

**Criterios de conservación de los dato**s: se conservarán mientras exista un interés mutuo para mantener el fin del tratamiento y cuando ya no sea necesario para tal fin, se suprimirán con medidas de seguridad adecuadas para garantizar la anonimización de los datos o la destrucción total de los mismos.

Comunicación de los datos: No se comunicarán los datos a terceros, salvo obligación legal.

- Derechos que asisten al Usuario:
- Derecho a retirar el consentimiento en cualquier momento.
- Derecho de acceso, rectificación, portabilidad y supresión de sus datos y a la limitación u oposición al su tratamiento.
- Derecho a presentar una reclamación ante la autoridad de control (agpd.es) si considera que el tratamiento no se ajusta a la normativa vigente.

**Datos de contacto para ejercer sus derechos:** info@selfcommit.dev

### Carácter obligatorio o facultativo de la información facilitada por el usuario

Los Usuarios, mediante la marcación de las casillas correspondientes y entrada de datos en los campos, marcados con un asterisco (*) en el formulario de contacto o presentados en formularios de descarga, aceptan expresamente y de forma libre e inequívoca, que sus datos son necesarios para atender su petición, por parte del prestador, siendo voluntaria la inclusión de datos en los campos restantes. El Usuario garantiza que los datos personales facilitados al RESPONSABLE son veraces y se hace responsable de comunicar cualquier modificación de los mismos.

EL RESPONSABLE informa y garantiza expresamente a los usuarios que sus datos personales no serán cedidos en ningún caso a terceros, y que siempre que realizara algún tipo de cesión de datos personales, se pedirá previamente el consentimiento expreso, informado e inequívoco por parte los Usuarios. Todos los datos solicitados a través del sitio web son obligatorios, ya que son necesarios para la prestación de un servicio óptimo al Usuario. En caso de que no sean facilitados todos los datos, no se garantiza que la información y servicios facilitados sean completamente ajustados a sus necesidades.

### 3. MEDIDAS DE SEGURIDAD

Que de conformidad con lo dispuesto en las normativas vigentes en protección de datos personales, el RESPONSABLE está cumpliendo con todas las disposiciones de las normativas GDPR para el tratamiento de los datos personales de su responsabilidad, y manifiestamente con los principios descritos en el artículo 5 del GDPR, por los cuales son tratados de manera lícita, leal y transparente en relación con el interesado y adecuados, pertinentes y limitados a lo necesario en relación con los fines para los que son tratados

El RESPONSABLE garantiza que ha implementado políticas técnicas y organizativas apropiadas para aplicar las medidas de seguridad que establecen el GDPR con el fin de proteger los derechos y libertades de los Usuarios y les ha comunicado la información adecuada para que puedan ejercerlos.
            `}
        />
      </Container>
    </>
  )
}

PrivacyPolicyPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default PrivacyPolicyPage
