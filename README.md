# Pokedex — Aplicación móvil (React Native)

Una aplicación móvil en React Native para explorar información de más de 1,000 Pokémons usando la PokeAPI (https://pokeapi.co/api/v2/pokemon). Permite listar, buscar y consultar detalles de cada Pokémon.

## Descripción
Aplicación móvil tipo Pokedex desarrollada con React Native. Consume la PokeAPI para obtener datos públicos de Pokémons y muestra listado, búsqueda y detalles (estadísticas, tipos, imágenes).

## API utilizada
- Endpoint principal: https://pokeapi.co/api/v2/pokemon
- No se requieren claves ni autenticación; la API es pública.

## Características principales
- Listado paginado de Pokémons.
- Búsqueda por nombre o ID.
- Pantalla de detalle con estadísticas, tipos e imagen.
- Navegación entre pantallas (Listado → Detalle).

## Requisitos previos
- Node.js (versión compatible con la versión de React Native usada)
- Yarn o npm
- Android Studio (emulador) o Xcode (simulador) según la plataforma objetivo
- Siga la guía oficial de React Native para la configuración del entorno: https://reactnative.dev/docs/environment-setup

## Instalación rápida
Clona el repositorio e instala dependencias:

```bash
# clona el repo
git clone https://github.com/13joaquin/PokedexAPI.git
cd PokedexAPI

# instala dependencias (elige npm o yarn)
npm install
# o
yarn install
```

## Ejecutar la app
1. Inicia Metro Bundler (desde la raíz del proyecto):

```bash
# usando npm
npm start

# o usando yarn
yarn start
```

2. En otra terminal, ejecuta la app en el emulador/dispositivo:

### Android
```bash
# usando npm
npm run android

# o usando yarn
yarn android
```

### iOS
```bash
# usando npm
npm run ios

# o usando yarn
yarn ios
```

También puedes ejecutar la app desde Android Studio o Xcode.

## Modificar el código
- Punto de entrada: `App.tsx` (común en proyectos React Native).
- Para recargar en Android, presiona `R` dos veces o usa el menú de desarrollador.
- En iOS Simulator, usa `Cmd + R`.

## Estructura del proyecto (resumen)
```
android/        # Código y configuración nativa Android (Kotlin, Gradle)
ios/            # Código y configuración nativa iOS (Objective-C, Xcode)
src/            # Código fuente de la aplicación (TypeScript/JavaScript)
  components/   # Componentes reutilizables de UI
  screens/      # Pantallas de la app (Listado, Detalle, Búsqueda)
  services/     # Lógica para consumir la PokeAPI
  navigation/   # Configuración de navegación
package.json    # Scripts y dependencias
README.md       # Este archivo
```

## Scripts útiles
- `npm start` / `yarn start` — inicia Metro
- `npm run android` / `yarn android` — compila y ejecuta en Android
- `npm run ios` / `yarn ios` — compila y ejecuta en iOS
- `npm test` / `yarn test` — ejecuta pruebas (si están configuradas)

## Buenas prácticas y notas
- PokeAPI tiene límites de tasa; considere agregar caché o paginación para reducir llamadas.
- Mantener las dependencias y la versión de React Native actualizadas ayuda a evitar problemas con cambios de plataforma.

## Contribuciones
Si quieres contribuir:
1. Haz fork del repositorio.
2. Crea una rama descriptiva: `feature/mi-mejora` o `fix/descripcion`.
3. Envía un pull request describiendo los cambios y el motivo.

## Licencia
Añade aquí la licencia del proyecto si aplica (por ejemplo, MIT o Apache-2.0). Considera agregar un archivo `LICENSE` al repositorio.

---

Nota: Se removieron los datos personales del desarrollador del README según lo solicitado.
