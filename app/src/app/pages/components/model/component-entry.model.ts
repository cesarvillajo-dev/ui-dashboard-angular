/**
 * ComponentEntry
 * ------------------------------------------------------
 * Modelo de datos para una entrada documentable del área Components.
 * Representa una opción del sidebar, una card del índice
 * y una página de documentación con tabs.
 *
 * Proyecto: c-dashboard
 * Autor: Cesar Villajo
 */

export interface ComponentTabContent {
  overview: string;
  api: string;
  theming: string;
  examples: string;
}

export interface ComponentEntry {
  /**
   * Identificador único usado en la URL
   * Ej: 'button', 'select'
   */
  slug: string;

  /**
   * Nombre visible para UI
   * Ej: 'Button', 'Select'
   */
  label: string;

  /**
   * Ruta de la imagen representativa (opcional por ahora)
   * Ej: 'assets/img/components/button.png'
   */
  image?: string;

  /**
   * Contenido de documentación por tab
   */
  content: ComponentTabContent;
}
