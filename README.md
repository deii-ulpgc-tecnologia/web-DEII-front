<h1 style="color: #076aacff; font-weight:bold;">Guía de Configuración y Desarrollo del FrontEnd de la Web de la DEII</h1>

Bienvenido al repositorio del frontend de la web del DEII (ULPGC). En este documento encontrarás las instrucciones paso a paso para configurar el entorno de desarrollo local, así como una guía básica para el manejo del control de versiones utilizando Git y GitHub.

<h2 style="color: #4783acff; font-weight:bold">Entorno y Versiones del Proyecto</h2>

Para garantizar la compatibilidad y evitar problemas de integración, este proyecto utiliza las siguientes versiones:

![Angular](https://img.shields.io/badge/Angular-21-DD0031?logo=angular&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?logo=nodedotjs&logoColor=white)
![npm](https://img.shields.io/badge/npm-Package%20Manager-CB3837?logo=npm&logoColor=white)

* **Node.js:** Versión 24.14.1 LTS (Long Term Support). Se recomienda encarecidamente usar gestores de versiones como NVM.
* **Angular:** Versión 21.
* **Gestor de paquetes:** `npm` (incluido por defecto con Node.js).

<h1 style="color: #076aacff; font-weight:bold;">Guía de Instalación</h1>

<h2 style="color: #4783acff; font-weight:bold">Sistemas Linux (Ubuntu / Debian) 🐧</h2>

1. **Instalar Git y dependencias base:**

    ```bash
    sudo apt update
    sudo apt install git curl -y
    ```

2. **Instalar Node.js mediante NVM (Node Version Manager):**

    Usar NVM es la forma recomendada para gestionar múltiples versiones de Node.

    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    source ~/.bashrc
    nvm install --lts
    ```

3. **Clonar el repositorio e instalar dependencias:**

    ```bash
    git clone https://github.com/deii-ulpgc-tecnologia/web-DEII-front
    cd web-DEII-front
    npm install
    ```

<h2 style="color: #4783acff; font-weight:bold">Sistemas Windows 🪟</h2>

Abre la consola PowerShell en modo **Administrador**.

1. **Instalar Node.js y Git (usando Winget):**

    ```bash
    winget install OpenJS.NodeJS.LTS
    winget install Git.Git
    ```

2. **Clonar el repositorio e instalar dependencias:**

    Esto es necesario para que comandos globales de npm (como el Angular CLI) puedan ejecutarse sin bloqueos de seguridad en PowerShell.

    ```bash
    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
    ```

3. **Clonar el repositorio e instalar dependencias:**

    Utilizando una terminal normal de PowerShell o en tu editor de código (como VSCode).

    ```bash
    git clone https://github.com/deii-ulpgc-tecnologia/web-DEII-front
    cd web-DEII-front
    npm install
    ```

<h1 style="color: #076aacff; font-weight:bold;">Flujo de Trabajo con GitHub</h1>

Para mantener el código organizado y evitar conflictos en la rama principal (main), vamos a seguir un flujo de trabajo basado en ramas (Branching Workflow).

1. **Mantener tu entorno actualizado:**

    Antes de empezar a trabajar en algo nuevo, cuando se empiece un nuevo Sprint, hay que cargar los cambios del repositorio remoto.

    ```bash
    git checkout main
    git pull origin main
    ```

    En caso de trabajar con otro compañero o depender de un componente para otra página, poneros en contacto entre vosotros.

2. **Creación de una nueva rama (Branching):**

    NUNCA trabajes directamente sobre la rama `main`, crea una rama por cada _feature_ o componente que vayas a desarrollar. Dentro de GitHub, ir a la tarea que
    vas a crear y en la derecha crear una nueva rama.

    Volviendo al terminal, concetarse a la rama recien creada.

    ```bash
    git checkout feature/nombre-de-tu-tarea
    ```

3. **Guardar cambios (Staging y Commit):**

    ```bash
    # Añadir todos los archivos modificados
    git add .

    # Crear el commit con un mensaje descriptivo
    git commit -m "feat: añadir componente de navegación superior"
    ```

4. **Subir tu rama a GitHub (Push):**

    Cuando tus commits estén listos, sube tu rama local al repositorio remoto en GitHub

    ```bash
    git push origin feature/nombre-de-tu-tarea
    ```

5. **Crear un Pull Request:**

    El Pull Request es el mecanismo para pedir que tus cambios se integren en la rama principal.

    1. Ve a la página del repositorio en GitHub: web-DEII-front.

    2. GitHub detectará automáticamente tu nueva rama y te mostrará un botón verde que dice _"Compare & pull request"_. Haz clic en él.

    3. Añade un título claro y una descripción detallada de lo que hace tu código.

    4. Haz clic en "Create pull request".

    5. Espera a que otro compañero del equipo revise tu código (Code Review). Una vez aprobado, podrá ser fusionado (merged) con la rama main.

<h1 style="color: #076aacff; font-weight:bold;">Flujo de Trabajo con Angular CLI</h1>

Para desarrollar nuevas funcionalidades de forma eficiente, utilizaremos las herramientas integradas del CLI de Angular. Aunque hay muchos más comandos, los principales y más comunes
que llegaremos a utilizar en el proyecto son los siguientes:

1. **Arrancar el entorno Local:**

    Levanta el servidor de desarrollo para ver los cambios en tiempo real. El modificador -o abrirá automáticamente tu navegador. Aunque dependiendo del IDE lo puedes hacer con extensiones como **_Live Server_** en VSCode

    ```bash
    ng serve -o
    ```

2. **Construir un componente:**

    ```bash
    # Crear un nuevo componente (vista)
    ng generate component ./components/Nombre-nuevo-componente
    ```

3. **Lanzar a producción:**

    Aunque no será común su uso en el proyecto, está bien conocer que para lanzar la web a producción el comando es el siguiente.

    ```bash
    ng build
    ```

---

*Documento creado por **Iván Pérez Díaz** https://github.com/ivanperezdiaz829*