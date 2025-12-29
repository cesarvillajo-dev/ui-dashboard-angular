/**
 * Components Data
 * ------------------------------------------------------
 * Definición completa del área Components:
 * - Opciones del sidebar
 * - Cards del índice
 * - Contenido por tabs de cada componente
 *
 * Proyecto: c-dashboard
 * Autor: Cesar Villajo
 */

import { ComponentEntry } from '../model/component-entry.model';

export const COMPONENTS_DATA: ComponentEntry[] = [

    {
        slug: 'button',
        label: 'Button',
        image: 'assets/img/components/button.png',
        content: {
            overview: `
El componente Button es el elemento básico de interacción.
Se utiliza para disparar acciones, navegación o eventos del sistema.
`,
            api: `
API del componente Button.
Aquí se documentarán inputs, outputs y variantes.
`,
            theming: `
Opciones de personalización visual del Button.
Variables CSS, estados y modos.
`,
            examples: `
Ejemplos prácticos de uso del Button en diferentes contextos.
`
        }
    },

    {
        slug: 'select',
        label: 'Select',
        image: 'assets/img/components/select.png',
        content: {
            overview: `
El componente Select permite seleccionar un valor de una lista.
`,
            api: `
API del componente Select.
`,
            theming: `
Opciones de theming del Select.
`,
            examples: `
Ejemplos de Select en formularios y filtros.
`
        }
    },

    {
        slug: 'multiselect',
        label: 'Multiselect',
        image: 'assets/img/components/multiselect.png',
        content: {
            overview: `
El componente Multiselect permite seleccionar múltiples opciones.
`,
            api: `
API del componente Multiselect.
`,
            theming: `
Personalización visual del Multiselect.
`,
            examples: `
Ejemplos de Multiselect con grandes volúmenes de datos.
`
        }
    },

    {
        slug: 'table',
        label: 'Table',
        image: 'assets/img/components/table.png',
        content: {
            overview: `
El componente Table permite mostrar datos tabulares complejos.
`,
            api: `
API del componente Table.
`,
            theming: `
Theming y estilos de la Table.
`,
            examples: `
Ejemplos de Table con paginación y sorting.
`
        }
    },

    {
        slug: 'cards',
        label: 'Cards',
        image: 'assets/img/components/cards.png',
        content: {
            overview: `
El componente Cards agrupa información en bloques visuales.
`,
            api: `
API del componente Cards.
`,
            theming: `
Opciones de estilo y layout de las Cards.
`,
            examples: `
Ejemplos de Cards en dashboards y listados.
`
        }
    }

];
